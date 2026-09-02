import { PageMeta } from '../components/PageMeta.jsx';
import { EventLandingContent } from '../components/shared/EventLandingContent.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { mariageFaq, mariageLandingContent } from '../content/mariagePage.js';
import { buildLandingJsonLd, routeMeta } from '../seo/siteMeta.js';

const mariageJsonLd = buildLandingJsonLd('/mariage', 'Mariage', mariageFaq);

export function MariagePage() {
  return (
    <>
      <PageMeta path="/mariage" {...routeMeta['/mariage']} jsonLd={mariageJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <EventLandingContent content={mariageLandingContent} />
      </main>
      <SiteFooter />
    </>
  );
}

export default MariagePage;
