import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  homeDescription,
  homeJsonLd,
  homeTitle,
} from './src/seo/siteMeta.js'

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
      const ogImage = escapeHtmlAttr(DEFAULT_OG_IMAGE)
      const ogImageAlt = escapeHtmlAttr(DEFAULT_OG_IMAGE_ALT)
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
          /<meta property="og:image" content="[^"]*" \/>/,
          `<meta property="og:image" content="${ogImage}" />`,
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
          /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
          `<script type="application/ld+json">\n  ${jsonLd}\n  </script>`,
        )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), injectHomeSeoFromSiteMeta()],
})
