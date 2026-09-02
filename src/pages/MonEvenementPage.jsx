import { PageMeta } from '../components/PageMeta.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { EventConfigurator } from '../components/configurator/EventConfigurator.jsx';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const configuratorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Construire mon événement', item: `${SITE_URL}/mon-evenement` },
  ],
};

export function MonEvenementPage() {
  return (
    <>
      <PageMeta path="/mon-evenement" {...routeMeta['/mon-evenement']} jsonLd={configuratorJsonLd} />
      <SiteHeader />
      <main id="contenu-principal" className="section section--configurator">
        <p className="eyebrow">Private Events</p>
        <EventConfigurator />
      </main>
      <SiteFooter />
    </>
  );
}

export default MonEvenementPage;
