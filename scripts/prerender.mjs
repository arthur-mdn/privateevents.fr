import { mkdir, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import handler from 'serve-handler';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

const { buildCanonicalUrl, routeMeta } = await import(
  pathToFileURL(join(rootDir, 'src/seo/siteMeta.js')).href
);

const ROUTES = [
  '/',
  '/mariage',
  '/anniversaire',
  '/soiree-privee',
  '/entreprise',
  '/prestations',
  '/realisations',
  '/avis',
  '/a-propos',
  '/mon-evenement',
];

function routeToOutPath(route) {
  if (route === '/') return join(distDir, 'index.html');
  return join(distDir, route.replace(/^\//, ''), 'index.html');
}

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = createServer((request, response) =>
      handler(request, response, {
        public: distDir,
        rewrites: [{ source: '**', destination: '/index.html' }],
        cleanUrls: false,
        directoryListing: false,
      }),
    );

    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function waitForPageReady(page, expectedTitle) {
  await page.waitForFunction(
    (title) => {
      const busy = document.querySelector('[aria-busy="true"]');
      const h1 = document.querySelector('h1');
      const root = document.getElementById('root');
      if (busy || !h1 || !root) return false;
      const h1Text = (h1.textContent || '').trim();
      if (!h1Text || h1Text.includes('Chargement')) return false;
      return document.title === title;
    },
    expectedTitle,
    { timeout: 30000 },
  );
}

async function normalizeDocumentHead(page, route) {
  const canonical = buildCanonicalUrl(route);
  const meta = routeMeta[route];

  await page.evaluate(
    ({ routePath, canonicalUrl, expectedTitle, expectedDescription }) => {
      const head = document.head;

      const keepLastByKey = (selector, keyAttr) => {
        const seen = new Map();
        for (const el of [...head.querySelectorAll(selector)]) {
          const key = el.getAttribute(keyAttr);
          if (!key) continue;
          if (seen.has(key)) seen.get(key).remove();
          seen.set(key, el);
        }
      };

      keepLastByKey('meta[name]', 'name');
      keepLastByKey('meta[property]', 'property');

      for (const el of head.querySelectorAll('title')) el.remove();
      const titleEl = document.createElement('title');
      titleEl.textContent = expectedTitle;
      head.insertBefore(titleEl, head.firstChild);

      for (const el of head.querySelectorAll('link[rel="canonical"]')) el.remove();
      const canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      canonicalEl.setAttribute('href', canonicalUrl);
      head.appendChild(canonicalEl);

      const descriptionMeta = head.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', expectedDescription);
      }

      const ogTitle = head.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', expectedTitle);
      const ogDescription = head.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', expectedDescription);
      const ogUrl = head.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

      const twitterTitle = head.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', expectedTitle);
      const twitterDescription = head.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute('content', expectedDescription);

      if (routePath === '/') {
        const headLd = [...head.querySelectorAll('script[type="application/ld+json"]')];
        headLd.slice(0, -1).forEach((el) => el.remove());
        document
          .querySelectorAll('#root > script[type="application/ld+json"]')
          .forEach((el) => el.remove());
      } else {
        head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
      }
    },
    {
      routePath: route,
      canonicalUrl: canonical,
      expectedTitle: meta.title,
      expectedDescription: meta.description,
    },
  );
}

async function prerenderRoute(page, baseUrl, route) {
  const meta = routeMeta[route];
  if (!meta?.title) {
    throw new Error(`Missing routeMeta for ${route}`);
  }

  const url = `${baseUrl}${route === '/' ? '/' : route}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await waitForPageReady(page, meta.title);
  await normalizeDocumentHead(page, route);

  const html = await page.content();
  const title = await page.title();
  const h1 = (await page.locator('h1').first().textContent())?.trim() || '';
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');

  if (title !== meta.title) {
    throw new Error(`Unexpected title for ${route}: "${title}"`);
  }
  if (!h1 || h1.length < 2) {
    throw new Error(`Missing H1 for ${route}`);
  }
  if (canonical !== buildCanonicalUrl(route)) {
    throw new Error(`Unexpected canonical for ${route}: "${canonical}"`);
  }
  if (!html.includes('<h1') || html.length < 2000) {
    throw new Error(`Prerendered HTML looks empty for ${route}`);
  }

  return { html, title, h1 };
}

async function main() {
  const { server, port } = await startStaticServer();
  const baseUrl = `http://127.0.0.1:${port}`;
  let browser;

  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const results = [];

    for (const route of ROUTES) {
      process.stdout.write(`Prerender ${route} … `);
      const result = await prerenderRoute(page, baseUrl, route);
      results.push({ route, ...result });
      console.log(`OK (${result.title})`);
    }

    for (const { route, html } of results) {
      const outPath = routeToOutPath(route);
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, 'utf8');
    }

    console.log(`\nPrerendered ${results.length} routes into dist/`);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error('\nPrerender failed:', error);
  process.exit(1);
});
