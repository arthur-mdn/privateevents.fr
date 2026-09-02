import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { routeMeta } from '../seo/siteMeta.js';

export function RoutePlaceholder({ path, heading }) {
  const meta = routeMeta[path];

  return (
    <>
      <PageMeta path={path} {...meta} />
      <SiteHeader />
      <main id="contenu-principal" className="section section--tight">
        <div className="prose prose--measure">
          <p className="eyebrow">Private Events</p>
          <h1 className="heading-section">{heading}</h1>
          <p>Cette page sera disponible prochainement dans le cadre de la refonte du site.</p>
          <p>
            <Link className="btn btn--primary" to="/">
              Retour à l&apos;accueil
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
