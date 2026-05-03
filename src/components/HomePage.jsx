import { FaEnvelope, FaMessage, FaPhone } from 'react-icons/fa6';
import { useState } from 'react';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { FeatureSplit } from './FeatureSplit.jsx';
import { AudioShowcase } from './AudioShowcase.jsx';
import ContactForm from './ContactForm.jsx';

function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState('prise de contact');

  const goContact = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <>
      <SiteHeader />
      <main id="contenu-principal">
        <div className="hero">
          <div className="hero__overlay" aria-hidden />
          <section className="hero__inner section section--hero" aria-labelledby="hero-title">
            <div className="hero__copy">
              <p className="eyebrow">Événements privés &amp; soirées corporate</p>
              <h1 id="hero-title" className="heading-hero">
                Donnez vie à vos soirées avec DJ Mika
              </h1>
              <div className="prose">
                <p>
                  Besoin d&apos;une ambiance musicale et de karaoké pour vos événements privés ou vos soirées
                  d&apos;entreprise ? DJ Mika conçoit une expérience mémorable, adaptée à votre public.
                </p>
                <p>
                  Prestations sur mesure, répertoire varié et matériel professionnel pour sublimer chaque moment.
                </p>
              </div>
              <div className="hero__actions">
                <a
                  className="btn btn--primary"
                  href="#contact"
                  onClick={() => goContact('prise de contact')}
                >
                  <FaMessage aria-hidden />
                  Nous contacter
                </a>
              </div>
              <ul className="tag-list" aria-label="Prestations">
                <li>Ambiance musicale</li>
                <li>Karaoké</li>
                <li>Provence &amp; au-delà</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="section section--tight">
          <h2 className="heading-section">Une expérience musicale soignée</h2>
          <div className="prose prose--measure">
            <p>
              Fort de plusieurs années d&apos;expérience dans l&apos;animation musicale, DJ Mika sait captiver son
              public. Expertise, équipement de qualité et écoute de vos envies : la soirée prend la tonalité que vous
              souhaitez, du début à la fin.
            </p>
          </div>
        </section>

        <section id="repertoire" className="section">
          <h2 className="heading-section">Répertoire</h2>
          <p className="lead">
            Merci pour votre écoute. Proposez une liste de 10 à 15 titres&nbsp;: un set personnalisé vous est offert.
          </p>
          <AudioShowcase />
          <div className="section__cta">
            <a
              href="#contact"
              className="btn btn--secondary"
              onClick={() => goContact('demander set sur mesure gratuit')}
            >
              Demander un set sur mesure gratuit
            </a>
          </div>
        </section>

        <div className="section-stack">
          <FeatureSplit
            title="Un répertoire musical varié pour tous les goûts"
            image="/elements/photos/dj-experience.png"
            imageAlt="DJ en prestation, équipement et ambiance festive"
          >
            <p>
              Des classiques intemporels aux hits actuels&nbsp;: le programme s&apos;ajuste à vos goûts et à ceux de vos
              invités pour une ambiance parfaite tout au long de l&apos;événement.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="Karaoké : montez sur scène"
            image="/elements/photos/dj-karaoke.jpeg"
            imageAlt="Animation karaoké avec micro et public"
            reverse
          >
            <p>
              Un large choix de titres et un matériel pro pour que chacun vive son moment sous les projecteurs — la
              convivialité au centre de la soirée.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="Matériel haut de gamme"
            image="/elements/photos/dj-setup.png"
            imageAlt="Installation son et lumières professionnelle"
          >
            <p>
              Son clair, lumières soignées&nbsp;: chaque détail technique est pensé pour la qualité perçue par vos
              invités.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="Privé ou corporate"
            image="/elements/photos/dj-soiree.png"
            imageAlt="Soirée et ambiance DJ"
            reverse
          >
            <p>
              Mariages, anniversaires, soirées d&apos;entreprise&nbsp;: une prestation professionnelle et un suivi
              personnalisé de votre premier échange jusqu&apos;au dernier morceau.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="En Provence et au-delà"
            image="/elements/photos/dj-vaucluse.jpeg"
            imageAlt="Prestation DJ en région Provence"
          >
            <p>
              Basé en Vaucluse, DJ Mika se déplace dans le Var et les départements voisins — d&apos;Avignon aux
              événements en bord de mer ou au cœur du Luberon.
            </p>
          </FeatureSplit>
        </div>

        <aside className="testimonial" aria-labelledby="testimonial-title">
          <div className="testimonial__inner section">
            <h2 id="testimonial-title" className="visually-hidden">
              Témoignage client
            </h2>
            <blockquote className="testimonial__quote" cite="https://privateevents.fr">
              <p>
                «&nbsp;Ravi d&apos;avoir choisi DJ Mika pour animer ma soirée. Il a su créer une ambiance qui a rendu
                l&apos;événement inoubliable.&nbsp;»
              </p>
            </blockquote>
            <p className="testimonial__date">
              <time dateTime="2023-12-06">6 décembre 2023</time>
            </p>
          </div>
        </aside>

        <section id="contact" className="section section--contact">
          <h2 className="heading-section">Contact</h2>
          <p className="lead">
            Devis, disponibilités ou idées de playlist&nbsp;: écrivez-nous ou appelez-nous directement.
          </p>
          <ContactForm subject={selectedSubject} onSubjectChange={setSelectedSubject} />
          <ul className="contact-chips" aria-label="Coordonnées">
            <li>
              <a className="btn btn--ghost" href="mailto:contact@privateevents.fr">
                <FaEnvelope aria-hidden />
                contact@privateevents.fr
              </a>
            </li>
            <li>
              <a className="btn btn--ghost" href="tel:+33782737661">
                <FaPhone aria-hidden />
                07&nbsp;82&nbsp;73&nbsp;76&nbsp;61
              </a>
            </li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default HomePage;
