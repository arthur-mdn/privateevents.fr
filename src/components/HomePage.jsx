import { FaEnvelope, FaMessage, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PageMeta } from './PageMeta.jsx';
import { routeMeta } from '../seo/siteMeta.js';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { HomeHero } from './home/HomeHero.jsx';
import { StatsBar } from './home/StatsBar.jsx';
import { EventTypesSection } from './home/EventTypesSection.jsx';
import { BeyondDjSection } from './home/BeyondDjSection.jsx';
import { PrestationsHighlightSection } from './home/PrestationsHighlightSection.jsx';
import { YourRulesSection } from './home/YourRulesSection.jsx';
import { ProcessSection } from './home/ProcessSection.jsx';
import { ClientCaseSection } from './home/ClientCaseSection.jsx';
import { AudioShowcase } from './AudioShowcase.jsx';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';
import GallerySection from './GallerySection.jsx';
import ContactForm from './ContactForm.jsx';

function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState('prise de contact');

  return (
    <>
      <PageMeta path="/" {...routeMeta['/']} />
      <SiteHeader />
      <main id="contenu-principal">
        <HomeHero />
        <StatsBar />
        <EventTypesSection />
        <BeyondDjSection />
        <PrestationsHighlightSection />
        <YourRulesSection />
        <ProcessSection />

        <ClientCaseSection />

        <TestimonialsCarousel />

        <GallerySection />

        <section id="repertoire" className="section section--audio">
          <h2 className="heading-section">Répertoire &amp; écoutes</h2>
          <p className="lead">
            Quelques extraits pour vous faire une idée de l&apos;ambiance. Proposez une liste de 10
            à 15 titres pour recevoir une proposition de set personnalisé gratuitement.
          </p>
          <AudioShowcase />
          <div className="section__cta">
            <a
              href="#contact"
              className="btn btn--secondary"
              onClick={() => setSelectedSubject('demander set sur mesure gratuit')}
            >
              Demander un set sur mesure gratuit
            </a>
          </div>
        </section>

        <section id="faq" className="section section--faq">
          <h2 className="heading-section">Questions fréquentes</h2>
          <p className="lead">
            Informations utiles avant de nous parler de votre projet.
          </p>
          <dl className="faq-list">
            <div className="faq-item">
              <dt>Dans quelles zones intervenez-vous ?</dt>
              <dd>
                Principalement le <strong>Vaucluse</strong> et la région d&apos;<strong>Avignon</strong>,{' '}
                <strong>Carpentras</strong>, <strong>Orange</strong>, ainsi que le <strong>Var</strong> et
                d&apos;autres déplacements en <strong>Provence-Alpes-Côte d&apos;Azur</strong> sur accord
                préalable selon la date.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Le matériel son et lumière est-il inclus ?</dt>
              <dd>
                Oui : l&apos;offre inclut l&apos;équipement adapté au lieu et au nombre d&apos;invités
                (sonorisation, micros pour discours ou karaoké, mise en lumière selon la formule). Le détail
                figure dans le devis après qualification de votre projet.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Comment démarrer un projet ?</dt>
              <dd>
                Utilisez le{' '}
                <Link to="/mon-evenement">configurateur</Link> ou le{' '}
                <a href="#contact">formulaire de contact</a>, ou appelez le{' '}
                <a href="tel:+33782737661">07&nbsp;82&nbsp;73&nbsp;76&nbsp;61</a> en indiquant la date, le
                lieu et le type d&apos;événement.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Peut-on combiner DJ et prestations complémentaires ?</dt>
              <dd>
                Oui : karaoké, photobooth, vidéobooth, musiciens live ou autres options peuvent s&apos;intégrer dans une
                prestation cohérente, construite avec vous en amont.
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
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <h2 className="heading-section">Contact</h2>
          <p className="lead">
            Disponibilités, idées de playlist ou questions rapides : écrivez-nous ou appelez-nous
            directement.
          </p>
          <ContactForm subject={selectedSubject} onSubjectChange={setSelectedSubject} />
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
                <FaMessage aria-hidden="true" />
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
