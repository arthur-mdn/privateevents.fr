import { PageMeta } from '../components/PageMeta.jsx';
import { AudioShowcase } from '../components/AudioShowcase.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { routeMeta } from '../seo/siteMeta.js';

export function MixPage() {
  return (
    <>
      <PageMeta path="/mix" {...routeMeta['/mix']} />
      <SiteHeader />
      <main id="contenu-principal" className="section section--audio-page">
        <article className="prose prose--measure audio-page">
          <p className="eyebrow">Écoute libre</p>
          <h1 className="heading-section">Écouter des mix</h1>
          <p className="lead audio-page__lead">
            Quelques enregistrements live pour se faire une idée de l’ambiance.
          </p>
          <AudioShowcase />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export default MixPage;
