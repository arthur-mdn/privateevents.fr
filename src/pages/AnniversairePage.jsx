import { PageMeta } from '../components/PageMeta.jsx';
import { EventLandingContent } from '../components/shared/EventLandingContent.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { anniversaireFaq, anniversaireLandingContent } from '../content/anniversairePage.js';
import { buildLandingJsonLd, routeMeta } from '../seo/siteMeta.js';

const jsonLd = buildLandingJsonLd('/anniversaire', 'Anniversaire', anniversaireFaq);

export function AnniversairePage() {
  return (
    <>
      <PageMeta path="/anniversaire" {...routeMeta['/anniversaire']} jsonLd={jsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <EventLandingContent content={anniversaireLandingContent} />
      </main>
      <SiteFooter />
    </>
  );
}

export default AnniversairePage;
