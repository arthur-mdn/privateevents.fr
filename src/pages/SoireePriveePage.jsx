import { PageMeta } from '../components/PageMeta.jsx';
import { EventLandingContent } from '../components/shared/EventLandingContent.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { soireePriveeFaq, soireePriveeLandingContent } from '../content/soireePriveePage.js';
import { buildLandingJsonLd, routeMeta } from '../seo/siteMeta.js';

const jsonLd = buildLandingJsonLd('/soiree-privee', 'Soirée privée', soireePriveeFaq);

export function SoireePriveePage() {
  return (
    <>
      <PageMeta path="/soiree-privee" {...routeMeta['/soiree-privee']} jsonLd={jsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <EventLandingContent content={soireePriveeLandingContent} />
      </main>
      <SiteFooter />
    </>
  );
}

export default SoireePriveePage;
