import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        path="/404"
        title="Page introuvable | Private Events"
        description="La page demandée n'existe pas ou a été déplacée."
        noindex
      />
      <SiteHeader />
      <main id="contenu-principal" className="section section--tight">
        <div className="prose prose--measure">
          <h1 className="heading-section">La soirée n&apos;est pas par ici.</h1>
          <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/">
              Retour à l&apos;accueil
            </Link>
            <Link className="btn btn--secondary" to="/prestations">
              Découvrir les prestations
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
