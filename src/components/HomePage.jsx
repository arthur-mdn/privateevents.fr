import { FaEnvelope, FaPhone, FaSliders } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { PageMeta } from './PageMeta.jsx';
import { homeFaqItems, routeMeta } from '../seo/siteMeta.js';
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

function FaqAnswer({ question, answer }) {
  if (question.startsWith('Comment obtenir un devis')) {
    return (
      <>
        Utilisez le <Link to="/mon-evenement">configurateur</Link> sur privateevents.fr ou appelez le{' '}
        <a href="tel:+33782737661">07&nbsp;82&nbsp;73&nbsp;76&nbsp;61</a> avec la date, le lieu et le
        type d&apos;événement. Chaque prestation fait l&apos;objet d&apos;un devis personnalisé.
      </>
    );
  }

  if (question.startsWith('Dans quelles zones')) {
    return (
      <>
        Les prestations se déroulent principalement entre{' '}
        <strong>Montpellier, Lyon et Nice</strong> (Provence / PACA et Rhône-Alpes) :{' '}
        <strong>Vaucluse</strong>, <strong>Bouches-du-Rhône</strong>, <strong>Var</strong> et
        départements limitrophes, selon la date et le projet. Autres destinations sur demande.
      </>
    );
  }

  return answer;
}

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
            {homeFaqItems.map((item) => (
              <div key={item.question} className="faq-item">
                <dt>{item.question}</dt>
                <dd>
                  <FaqAnswer question={item.question} answer={item.answer} />
                </dd>
              </div>
            ))}
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
