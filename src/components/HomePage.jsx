import { FaEnvelope, FaPhone, FaSliders } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { PageMeta } from './PageMeta.jsx';
import { routeMeta } from '../seo/siteMeta.js';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { HomeHero } from './home/HomeHero.jsx';
import { StatsBar } from './home/StatsBar.jsx';
import { EventTypesSection } from './home/EventTypesSection.jsx';
import { BeyondDjSection } from './home/BeyondDjSection.jsx';
import { YourRulesSection } from './home/YourRulesSection.jsx';
import { ProcessSection } from './home/ProcessSection.jsx';
import { ClientCaseSection } from './home/ClientCaseSection.jsx';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';
import GallerySection from './GallerySection.jsx';
import ContactForm from './ContactForm.jsx';

function HomePage() {
  return (
    <>
      <PageMeta path="/" {...routeMeta['/']} />
      <SiteHeader />
      <main id="contenu-principal">
        <HomeHero />
        <StatsBar />
        <EventTypesSection />
        <BeyondDjSection />
        <YourRulesSection />
        <ProcessSection />

        <ClientCaseSection />

        <TestimonialsCarousel />

        <GallerySection />

        <section id="faq" className="section section--faq">
          <h2 className="heading-section">Questions fréquentes</h2>
          <p className="lead">
            Informations utiles avant de démarrer un projet.
          </p>
          <dl className="faq-list">
            <div className="faq-item">
              <dt>Dans quelles zones intervenez-vous ?</dt>
              <dd>
                Au cœur du triangle <strong>Montpellier - Lyon - Nice</strong>, principalement en{' '}
                <strong>Provence / PACA</strong> et <strong>Rhône-Alpes</strong> :{' '}
                <strong>Vaucluse</strong>, <strong>Bouches-du-Rhône</strong>, <strong>Var</strong> et
                départements limitrophes, selon la date et le projet. Autres destinations sur demande.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Le matériel son et lumière est-il inclus ?</dt>
              <dd>
                Deux options : <strong>formule complète</strong> (DJ + sono + éclairage fournis et
                installés) ou <strong>plug and play</strong> sur une installation déjà présente.
                Le détail figure dans le devis.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Comment sont calculés les tarifs ?</dt>
              <dd>
                Chaque prestation fait l&apos;objet d&apos;un <strong>devis personnalisé</strong> selon
                le lieu, les horaires, le format technique et les options retenues. Aucun simulateur
                tarifaire en ligne.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Comment démarrer un projet ?</dt>
              <dd>
                Utilisez le{' '}
                <Link to="/mon-evenement">configurateur</Link> pour une demande structurée, ou
                le formulaire ci-dessous pour une question rapide. Vous pouvez aussi appeler le{' '}
                <a href="tel:+33782737661">07&nbsp;82&nbsp;73&nbsp;76&nbsp;61</a>.
              </dd>
            </div>
          </dl>
        </section>

        <section className="section section--cta-banner" aria-labelledby="home-cta-title">
          <div className="cta-banner">
            <h2 id="home-cta-title" className="heading-section">
              Parlez-nous de votre événement
            </h2>
            <p className="lead">
              Décrivez votre projet en quelques minutes : type d&apos;événement, date, lieu, ambiance et
              prestations souhaitées. Une réponse personnalisée vous est adressée ensuite.
            </p>
            <Link className="btn btn--primary" to="/mon-evenement">
              Construire mon événement
            </Link>
            <ul className="cta-banner__links">
              <li>
                <Link to="/realisations">Réalisations</Link>
              </li>
              <li>
                <Link to="/avis">Avis clients</Link>
              </li>
              <li>
                <Link to="/prestations">Prestations</Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <h2 className="heading-section">Une question avant de construire votre projet&nbsp;?</h2>
          <p className="lead">
            Pour une proposition sur mesure, utilisez le{' '}
            <Link to="/mon-evenement">configurateur d&apos;événement</Link>, pensé pour décrire
            votre projet. Ce formulaire reste utile pour une question rapide ou une disponibilité.
          </p>
          <ContactForm />
          <ul className="contact-chips" aria-label="Coordonnées">
            <li>
              <a className="btn btn--ghost" href="mailto:contact@privateevents.fr">
                <FaEnvelope aria-hidden="true" />
                contact@privateevents.fr
              </a>
            </li>
            <li>
              <a className="btn btn--ghost" href="tel:+33782737661">
                <FaPhone aria-hidden="true" />
                07&nbsp;82&nbsp;73&nbsp;76&nbsp;61
              </a>
            </li>
            <li>
              <Link className="btn btn--ghost" to="/mon-evenement">
                <FaSliders aria-hidden="true" />
                Construire mon événement
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default HomePage;
