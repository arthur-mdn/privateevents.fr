import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_TYPE,
  DEFAULT_OG_IMAGE_WIDTH,
  homeDescription,
  homeJsonLd,
  homeTitle,
  SITE_NAME,
} from './src/seo/siteMeta.js'

const RECORDINGS_MIME = {
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
}

function sendRecordingFile(req, res, filePath) {
  const { size } = statSync(filePath)
  const contentType =
    RECORDINGS_MIME[extname(filePath).toLowerCase()] || 'application/octet-stream'
  const rangeHeader = req.headers.range

  res.setHeader('Accept-Ranges', 'bytes')
  res.setHeader('Content-Type', contentType)
  res.setHeader('Cache-Control', 'no-cache')

  if (!rangeHeader) {
    res.statusCode = 200
    res.setHeader('Content-Length', size)
    createReadStream(filePath).pipe(res)
    return
  }

  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader)
  if (!match) {
    res.statusCode = 416
    res.setHeader('Content-Range', `bytes */${size}`)
    res.end()
    return
  }

  const start = match[1] ? Number.parseInt(match[1], 10) : 0
  const end = match[2] ? Number.parseInt(match[2], 10) : size - 1

  if (
    Number.isNaN(start) ||
    Number.isNaN(end) ||
    start < 0 ||
    end < start ||
    start >= size
  ) {
    res.statusCode = 416
    res.setHeader('Content-Range', `bytes */${size}`)
    res.end()
    return
  }

  const safeEnd = Math.min(end, size - 1)
  res.statusCode = 206
  res.setHeader('Content-Range', `bytes ${start}-${safeEnd}/${size}`)
  res.setHeader('Content-Length', safeEnd - start + 1)
  createReadStream(filePath, { start, end: safeEnd }).pipe(res)
}

function serveLocalRecordings() {
  const sourceDir = join(process.cwd(), 'recordings')

  return {
    name: 'serve-local-recordings',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/recordings/')) return next()

        const name = decodeURIComponent(req.url.slice('/recordings/'.length).split('?')[0] || '')
        if (!name || name.includes('..') || name === '.gitkeep') {
          res.statusCode = 404
          res.end('Not found')
          return
        }

        const filePath = join(sourceDir, name)
        if (!existsSync(filePath) || !statSync(filePath).isFile()) {
          res.statusCode = 404
          res.end('Not found')
          return
        }

        sendRecordingFile(req, res, filePath)
      })
    },
  }
}

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function injectHomeSeoFromSiteMeta() {
  return {
    name: 'inject-home-seo-from-site-meta',
    transformIndexHtml(html) {
      const title = escapeHtmlAttr(homeTitle)
      const description = escapeHtmlAttr(homeDescription)
      const siteName = escapeHtmlAttr(SITE_NAME)
      const ogImage = escapeHtmlAttr(DEFAULT_OG_IMAGE)
      const ogImageAlt = escapeHtmlAttr(DEFAULT_OG_IMAGE_ALT)
      const ogImageType = escapeHtmlAttr(DEFAULT_OG_IMAGE_TYPE)
      const ogImageWidth = String(DEFAULT_OG_IMAGE_WIDTH)
      const ogImageHeight = String(DEFAULT_OG_IMAGE_HEIGHT)
      const jsonLd = JSON.stringify(homeJsonLd, null, 2)

      return html
        .replace(
          /<title>[\s\S]*?<\/title>/,
          `<title>${title}</title>`,
        )
        .replace(
          /<meta name="description" content="[^"]*" \/>/,
          `<meta name="description" content="${description}" />`,
        )
        .replace(
          /<meta property="og:title" content="[^"]*" \/>/,
          `<meta property="og:title" content="${title}" />`,
        )
        .replace(
          /<meta property="og:description" content="[^"]*" \/>/,
          `<meta property="og:description" content="${description}" />`,
        )
        .replace(
          /<meta property="og:site_name" content="[^"]*" \/>/,
          `<meta property="og:site_name" content="${siteName}" />`,
        )
        .replace(
          /<meta property="og:image" content="[^"]*" \/>/,
          `<meta property="og:image" content="${ogImage}" />`,
        )
        .replace(
          /<meta property="og:image:secure_url" content="[^"]*" \/>/,
          `<meta property="og:image:secure_url" content="${ogImage}" />`,
        )
        .replace(
          /<meta property="og:image:type" content="[^"]*" \/>/,
          `<meta property="og:image:type" content="${ogImageType}" />`,
        )
        .replace(
          /<meta property="og:image:width" content="[^"]*" \/>/,
          `<meta property="og:image:width" content="${ogImageWidth}" />`,
        )
        .replace(
          /<meta property="og:image:height" content="[^"]*" \/>/,
          `<meta property="og:image:height" content="${ogImageHeight}" />`,
        )
        .replace(
          /<meta property="og:image:alt" content="[^"]*" \/>/,
          `<meta property="og:image:alt" content="${ogImageAlt}" />`,
        )
        .replace(
          /<meta name="twitter:title" content="[^"]*" \/>/,
          `<meta name="twitter:title" content="${title}" />`,
        )
        .replace(
          /<meta name="twitter:description" content="[^"]*" \/>/,
          `<meta name="twitter:description" content="${description}" />`,
        )
        .replace(
          /<meta name="twitter:image" content="[^"]*" \/>/,
          `<meta name="twitter:image" content="${ogImage}" />`,
        )
        .replace(
          /<meta name="twitter:image:alt" content="[^"]*" \/>/,
          `<meta name="twitter:image:alt" content="${ogImageAlt}" />`,
        )
        .replace(
          /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
          `<script type="application/ld+json">\n  ${jsonLd}\n  </script>`,
        )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectHomeSeoFromSiteMeta(), serveLocalRecordings()],
  server: {
    fs: {
      allow: ['.', 'recordings'],
    },
  },
})
