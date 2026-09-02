import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { routeMeta } from '../seo/siteMeta.js';

export function RoutePlaceholder({ path, heading }) {
  const meta = routeMeta[path];
  const isConfigurator = path === '/mon-evenement';

  return (
    <>
      <PageMeta path={path} {...meta} />
      <SiteHeader />
      <main id="contenu-principal" className="section section--tight">
        <div className="prose prose--measure">
          <p className="eyebrow">Private Events</p>
          <h1 className="heading-section">{heading}</h1>
          {isConfigurator ? (
            <>
              <p>
                Le configurateur multi-étapes arrive bientôt. En attendant, décrivez votre projet via le
                formulaire de contact : type d&apos;événement, date, lieu, nombre d&apos;invités et
                prestations souhaitées.
              </p>
              <p>
                <Link className="btn btn--primary" to="/#contact">
                  Accéder au formulaire de contact
                </Link>
              </p>
            </>
          ) : (
            <>
              <p>Cette page sera disponible prochainement dans le cadre de la refonte du site.</p>
              <p>
                <Link className="btn btn--primary" to="/">
                  Retour à l&apos;accueil
                </Link>
              </p>
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
