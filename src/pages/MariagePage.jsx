import { PageMeta } from '../components/PageMeta.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { MariagePageContent } from '../components/mariage/MariagePageContent.jsx';
import { mariageFaq } from '../content/mariagePage.js';
import { buildLandingJsonLd, routeMeta } from '../seo/siteMeta.js';

const mariageJsonLd = buildLandingJsonLd('/mariage', 'Mariage', mariageFaq);

export function MariagePage() {
  return (
    <>
      <PageMeta path="/mariage" {...routeMeta['/mariage']} jsonLd={mariageJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <MariagePageContent />
      </main>
      <SiteFooter />
    </>
  );
}

export default MariagePage;
