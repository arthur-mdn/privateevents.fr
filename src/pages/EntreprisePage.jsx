import { PageMeta } from '../components/PageMeta.jsx';
import { EventLandingContent } from '../components/shared/EventLandingContent.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { entrepriseFaq, entrepriseLandingContent } from '../content/entreprisePage.js';
import { buildLandingJsonLd, routeMeta } from '../seo/siteMeta.js';

const jsonLd = buildLandingJsonLd('/entreprise', 'Entreprise', entrepriseFaq);

export function EntreprisePage() {
  return (
    <>
      <PageMeta path="/entreprise" {...routeMeta['/entreprise']} jsonLd={jsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <EventLandingContent content={entrepriseLandingContent} />
      </main>
      <SiteFooter />
    </>
  );
}

export default EntreprisePage;
