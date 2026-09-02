import { PageMeta } from '../components/PageMeta.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { MariagePageContent } from '../components/mariage/MariagePageContent.jsx';
import { mariageFaq } from '../content/mariagePage.js';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const mariageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Mariage', item: `${SITE_URL}/mariage` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: mariageFaq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
};

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
