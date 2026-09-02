import { Link } from 'react-router-dom';
import {
  mariageCaseStudy,
  mariageFaq,
  mariageMoments,
  mariageMusic,
  mariagePopularOptions,
  mariagePromesse,
  mariageTimeline,
} from '../../content/mariagePage.js';
import { getMariageGalleryItems } from '../../content/realisations.js';
import { testimonials } from '../../content/testimonials.js';
import { FaqSection, GalleryGrid, WeddingTestimonials } from '../shared/PageSections.jsx';
import { MariageHero } from './MariageHero.jsx';

const weddingTestimonials = testimonials.filter((t) =>
  t.context?.toLowerCase().includes('mariage'),
);

export function MariagePageContent() {
  const galleryItems = getMariageGalleryItems();

  return (
    <>
      <MariageHero />

      <section className="section" aria-labelledby="mariage-promesse-title">
        <h2 id="mariage-promesse-title" className="heading-section">
          {mariagePromesse.title}
        </h2>
        <p className="lead">{mariagePromesse.lead}</p>
        <ul className="info-cards">
          {mariagePromesse.points.map((point) => (
            <li key={point.title} className="info-card">
              <h3 className="info-card__title">{point.title}</h3>
              <p className="info-card__desc">{point.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--process" aria-labelledby="mariage-timeline-title">
        <h2 id="mariage-timeline-title" className="heading-section">
          Déroulement d&apos;un mariage avec Private Events
        </h2>
        <p className="lead">
          De la préparation au jour J, un accompagnement structuré pour que vous puissiez profiter de votre
          journée.
        </p>
        <ol className="process-steps">
          {mariageTimeline.map((step) => (
            <li key={step.step} className="process-step">
              <span className="process-step__num" aria-hidden="true">
                {step.step}
              </span>
              <div className="process-step__body">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="mariage-moments-title">
        <h2 id="mariage-moments-title" className="heading-section">
          Chaque moment de votre journée
        </h2>
        <p className="lead">
          Cérémonie, cocktail, repas ou soirée dansante : une prestation adaptée à chaque phase.
        </p>
        <ul className="moment-grid">
          {mariageMoments.map((moment) => (
            <li key={moment.title} className="moment-card">
              <img
                className="moment-card__img"
                src={moment.image}
                alt={moment.imageAlt}
                width={480}
                height={360}
                loading="lazy"
                decoding="async"
              />
              <div className="moment-card__body">
                <h3 className="moment-card__title">{moment.title}</h3>
                <p className="moment-card__desc">{moment.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="mariage-music-title">
        <h2 id="mariage-music-title" className="heading-section">
          {mariageMusic.title}
        </h2>
        <p className="lead">{mariageMusic.lead}</p>
        <ul className="info-cards info-cards--three">
          {mariageMusic.blocks.map((block) => (
            <li key={block.title} className="info-card">
              <h3 className="info-card__title">{block.title}</h3>
              <p className="info-card__desc">{block.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="mariage-options-title">
        <h2 id="mariage-options-title" className="heading-section">
          Options populaires pour un mariage
        </h2>
        <p className="lead">Quelques prestations souvent demandées, à combiner selon votre projet.</p>
        <ul className="option-grid">
          {mariagePopularOptions.map((option) => (
            <li key={option.title} className="option-card">
              <h3 className="option-card__title">{option.title}</h3>
              <p className="option-card__desc">{option.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--case" aria-labelledby="mariage-case-title">
        <div className="case-study">
          <div className="case-study__copy">
            <h2 id="mariage-case-title" className="heading-section">
              {mariageCaseStudy.title}
            </h2>
            <ul className="case-study__meta">
              <li>{mariageCaseStudy.event}</li>
              <li>{mariageCaseStudy.date}</li>
              <li>{mariageCaseStudy.guests}</li>
            </ul>
            <p className="case-study__brief">{mariageCaseStudy.brief}</p>
            <h3 className="heading-sub">Prestations</h3>
            <ul className="case-study__tags">
              {mariageCaseStudy.prestations.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="case-study__outcome">{mariageCaseStudy.outcome}</p>
          </div>
          <img
            className="case-study__img"
            src={mariageCaseStudy.image}
            alt={mariageCaseStudy.imageAlt}
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section id="galerie-mariage" className="section section--gallery" aria-labelledby="mariage-gallery-title">
        <h2 id="mariage-gallery-title" className="heading-section">
          Galerie mariage
        </h2>
        <p className="lead gallery__lead">
          Quelques instants capturés lors de mariages animés en Provence.
        </p>
        <GalleryGrid items={galleryItems} ariaLabel="Galerie photos de mariages" />
      </section>

      <section className="section" aria-labelledby="mariage-testimonials-title">
        <h2 id="mariage-testimonials-title" className="heading-section">
          Avis de mariés
        </h2>
        <p className="lead">Retours d&apos;expérience après des prestations mariage.</p>
        <WeddingTestimonials testimonials={weddingTestimonials} />
      </section>

      <section className="section section--faq" aria-labelledby="mariage-faq-title">
        <h2 id="mariage-faq-title" className="heading-section">
          Questions fréquentes — Mariage
        </h2>
        <FaqSection items={mariageFaq} titleId="mariage-faq-title" />
      </section>

      <section className="section section--cta-banner" aria-labelledby="mariage-cta-title">
        <div className="cta-banner">
          <h2 id="mariage-cta-title" className="heading-section">
            Prêt à imaginer votre mariage ?
          </h2>
          <p className="lead">
            Décrivez votre projet en quelques minutes : date, lieu, ambiance et prestations souhaitées.
          </p>
          <Link className="btn btn--primary" to="/mon-evenement?type=mariage">
            Construire mon mariage
          </Link>
        </div>
      </section>
    </>
  );
}
