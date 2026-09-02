import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../seo/siteMeta.js';

export function PageMeta({ path, title, description, ogTitle, noindex, jsonLd }) {
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
  const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
  const ogTitleValue = ogTitle ?? title;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={ogTitleValue} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:alt" content="DJ Mika en prestation - animation événement privé" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitleValue} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
