import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

const { SITE_URL, buildCanonicalUrl, routeMeta } = await import(
  pathToFileURL(join(rootDir, 'src/seo/siteMeta.js')).href
);

const PRIORITY_BY_PATH = {
  '/': '1.0',
  '/mariage': '0.9',
  '/mon-evenement': '0.9',
  '/anniversaire': '0.8',
  '/soiree-privee': '0.8',
  '/entreprise': '0.8',
  '/prestations': '0.8',
  '/realisations': '0.7',
  '/avis': '0.7',
  '/a-propos': '0.6',
};

const CHANGEFREQ_BY_PATH = {
  '/': 'weekly',
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(routes, lastmod) {
  const urls = routes
    .map((path) => {
      const loc = buildCanonicalUrl(path);
      const changefreq = CHANGEFREQ_BY_PATH[path] ?? 'monthly';
      const priority = PRIORITY_BY_PATH[path] ?? '0.5';
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

async function main() {
  const indexableRoutes = Object.entries(routeMeta)
    .filter(([, meta]) => !meta.noindex)
    .map(([path]) => path)
    .sort((a, b) => {
      if (a === '/') return -1;
      if (b === '/') return 1;
      return a.localeCompare(b);
    });

  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = buildSitemap(indexableRoutes, lastmod);
  const robots = buildRobotsTxt();

  await writeFile(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
  await writeFile(join(publicDir, 'robots.txt'), robots, 'utf8');

  console.log(`Generated sitemap.xml (${indexableRoutes.length} URLs) and robots.txt`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
