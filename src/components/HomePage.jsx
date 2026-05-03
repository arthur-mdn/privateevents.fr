import { FaEnvelope, FaMessage, FaPhone } from 'react-icons/fa6';
import { useState } from 'react';
import { SiteHeader } from './SiteHeader.jsx';
import { SiteFooter } from './SiteFooter.jsx';
import { FeatureSplit } from './FeatureSplit.jsx';
import { AudioShowcase } from './AudioShowcase.jsx';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';
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
              <p className="eyebrow">
                DJ &amp; karaoké — Vaucluse, Avignon, Carpentras, Orange, Var &amp; Provence
              </p>
              <h1 id="hero-title" className="heading-hero">
                Donnez vie à vos soirées avec DJ Mika
              </h1>
              <div className="prose">
                <p>
                  <strong>Private Events</strong> propose une <strong>animation musicale professionnelle</strong> pour vos{' '}
                  <strong>mariages</strong>, <strong>anniversaires</strong>, soirées privées et{' '}
                  <strong>événements corporate</strong> dans le <strong>Vaucluse</strong> et partout en{' '}
                  <strong>Provence</strong>. Ambiance sur mesure, <strong>karaoké</strong> sur demande, et une écoute
                  attentive de vos goûts musicaux.
                </p>
                <p>
                  Que votre événement se tienne près d&apos;<strong>Avignon</strong>, de <strong>Carpentras</strong>,
                  d&apos;<strong>Orange</strong> ou sur la côte varoise, la prestation s&apos;adapte au lieu, au nombre
                  d&apos;invités et au ton que vous souhaitez donner à la soirée — du cocktail au dernier titre.
                </p>
              </div>
              <div className="hero__actions">
                <a
                  className="btn btn--primary"
                  href="#contact"
                  onClick={() => goContact('prise de contact')}
                >
                  <FaMessage aria-hidden />
                  Demander un devis
                </a>
              </div>
              <ul className="tag-list" aria-label="Prestations">
                <li>Animation DJ</li>
                <li>Karaoké</li>
                <li>Soirées corporate</li>
              </ul>
            </div>
          </section>
        </div>

        <section className="section section--tight" id="presentation">
          <h2 className="heading-section">Une expérience musicale pensée pour votre événement</h2>
          <div className="prose prose--measure">
            <p>
              Chaque prestation commence par un échange sur vos attentes : styles musicaux, moments forts de la soirée
              (entrée des mariés, discours, ouverture de bal), contraintes du lieu et ambiance souhaitée. Cette
              préparation permet une <strong>programmation cohérente</strong> et des transitions fluides, pour que vous
              puissiez vous concentrer sur vos invités.
            </p>
            <p>
              Le <strong>matériel de sonorisation</strong> et les réglages sont dimensionnés selon la surface et le
              public — objectif clarté du son, dynamique maîtrisée et volume adapté. Pour le <strong>karaoké</strong>,
              le catalogue et l&apos;animation sont pensés pour inclure tout le monde tout en gardant le rythme de la
              fête.
            </p>
            <h3 className="heading-sub">Pour qui ?</h3>
            <p>
              Mariages au cœur du <strong>Luberon</strong> ou en plein centre d&apos;<strong>Avignon</strong>, soirées
              de fin d&apos;année en entreprise, lancements et anniversaires : la même exigence de qualité et de
              réactivité, qu&apos;il s&apos;agisse d&apos;une petite réception ou d&apos;un grand événement.
            </p>
          </div>
        </section>

        <section id="repertoire" className="section">
          <h2 className="heading-section">Répertoire &amp; écoutes</h2>
          <p className="lead">
            Écoutez des extraits de mixes en libre accès. Envoyez une liste de 10 à 15 titres pour recevoir une
            proposition de <strong>set personnalisé gratuitement</strong>.
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
              Des classiques intemporels aux hits actuels : le programme s&apos;ajuste à vos goûts et à ceux de vos
              invités pour une ambiance homogène tout au long de l&apos;événement — sans rupture de ton ni temps morts.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="Karaoké : montez sur scène"
            image="/elements/photos/dj-karaoke.jpeg"
            imageAlt="Animation karaoké avec micro et public"
            reverse
          >
            <p>
              Un large choix de titres et du matériel adapté pour que chacun profite du moment : la prestation
              privilégie la convivialité tout en conservant une animation fluide pour l&apos;ensemble de la soirée.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="Matériel haut de gamme"
            image="/elements/photos/dj-setup.png"
            imageAlt="Installation son et lumières professionnelle"
          >
            <p>
              Son clair, installations propres et, selon la formule, effets lumineux pour renforcer l&apos;atmosphère.
              Chaque détail technique est pensé pour la qualité perçue par vos invités et le respect du lieu.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="Privé ou corporate"
            image="/elements/photos/dj-soiree.png"
            imageAlt="Soirée et ambiance DJ"
            reverse
          >
            <p>
              Mariages, anniversaires, soirées d&apos;entreprise, team building ou séminaire : la formule est ajustée
              au format de votre événement — du discours en micro à la piste de danse, en passant par les créneaux
              karaoké si vous le souhaitez.
            </p>
          </FeatureSplit>

          <FeatureSplit
            title="En Provence et au-delà"
            image="/elements/photos/dj-vaucluse.jpeg"
            imageAlt="Prestation DJ en région Provence"
          >
            <p>
              Basé dans le <strong>Vaucluse</strong>, les déplacements s&apos;organisent dans le <strong>Var</strong>,
              les <strong>Bouches-du-Rhône</strong> et les départements voisins selon disponibilités. N&apos;hésitez pas
              à préciser votre commune (par ex. <strong>Carpentras</strong>, <strong>Orange</strong>, bord de mer ou
              village du Luberon) lors de votre demande.
            </p>
          </FeatureSplit>
        </div>

        <TestimonialsCarousel />

        <section id="faq" className="section section--faq">
          <h2 className="heading-section">Questions fréquentes</h2>
          <p className="lead">
            Informations utiles avant de demander un <strong>devis DJ</strong> ou une date pour votre soirée.
          </p>
          <dl className="faq-list">
            <div className="faq-item">
              <dt>Dans quelles zones intervenez-vous ?</dt>
              <dd>
                Principalement le <strong>Vaucluse</strong> et la région d&apos;<strong>Avignon</strong>,{' '}
                <strong>Carpentras</strong>, <strong>Orange</strong>, ainsi que le <strong>Var</strong> et d&apos;autres
                déplacements en <strong>Provence-Alpes-Côte d&apos;Azur</strong> sur accord préalable selon la date.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Le matériel son et lumière est-il inclus ?</dt>
              <dd>
                Oui : l&apos;offre inclut l&apos;équipement adapté au lieu et au nombre d&apos;invités (sonorisation,
                micros pour discours ou karaoké, mise en lumière selon la formule). Le détail figure dans le devis après
                qualification de votre projet.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Comment obtenir un devis pour un mariage ou une soirée d&apos;entreprise ?</dt>
              <dd>
                Utilisez le <a href="#contact">formulaire de contact</a> ou appelez le{' '}
                <a href="tel:+33782737661">07&nbsp;82&nbsp;73&nbsp;76&nbsp;61</a> en indiquant la date, le lieu et le
                type d&apos;événement. Réponse dans les meilleurs délais avec une proposition personnalisée.
              </dd>
            </div>
            <div className="faq-item">
              <dt>Peut-on mélanger DJ et karaoké sur la même soirée ?</dt>
              <dd>
                Oui, c&apos;est une combinaison fréquente : des créneaux karaoké peuvent s&apos;intégrer dans la
                programmation DJ pour varier les moments forts sans casser l&apos;ambiance générale.
              </dd>
            </div>
          </dl>
        </section>

        <section id="contact" className="section section--contact">
          <h2 className="heading-section">Contact &amp; réservations</h2>
          <p className="lead">
            <strong>Devis gratuit</strong>, disponibilités et idées de playlist : écrivez-nous ou appelez-nous
            directement.
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
