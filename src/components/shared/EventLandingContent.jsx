import { Link } from 'react-router-dom';
import { FaqSection, GalleryGrid, WeddingTestimonials } from './PageSections.jsx';
import { EventLandingHero } from './EventLandingHero.jsx';
import { getRulesIcon } from './rulesIcons.js';

export function EventLandingContent({ content }) {
  const {
    hero,
    promesse,
    timeline,
    moments,
    formats,
    highlights,
    music,
    options,
    caseStudy,
    gallery,
    testimonialsSection,
    faq,
    cta,
  } = content;

  const galleryItems = gallery?.getItems?.() ?? gallery?.items ?? [];
  const testimonials = testimonialsSection?.getItems?.() ?? testimonialsSection?.items ?? [];

  return (
    <>
      <EventLandingHero hero={hero} />

      {promesse ? (
        <section className="section" aria-labelledby={`${hero.titleId}-promesse`}>
          <h2 id={`${hero.titleId}-promesse`} className="heading-section">
            {promesse.title}
          </h2>
          <p className="lead">{promesse.lead}</p>
          <ul className="info-cards">
            {promesse.points.map((point) => (
              <li key={point.title} className="info-card">
                <h3 className="info-card__title">{point.title}</h3>
                <p className="info-card__desc">{point.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {timeline ? (
        <section className="section section--process" aria-labelledby={`${hero.titleId}-timeline`}>
          <h2 id={`${hero.titleId}-timeline`} className="heading-section">
            {timeline.title}
          </h2>
          {timeline.lead ? <p className="lead">{timeline.lead}</p> : null}
          <ol className="process-steps">
            {timeline.steps.map((step) => (
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
      ) : null}

      {highlights ? (
        <section className="section" aria-labelledby={`${hero.titleId}-highlights`}>
          <h2 id={`${hero.titleId}-highlights`} className="heading-section">
            {highlights.title}
          </h2>
          {highlights.lead ? <p className="lead">{highlights.lead}</p> : null}
          <ul className="info-cards info-cards--three">
            {highlights.blocks.map((block) => (
              <li key={block.title} className="info-card">
                <h3 className="info-card__title">{block.title}</h3>
                <p className="info-card__desc">{block.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {moments ? (
        <section className="section" aria-labelledby={`${hero.titleId}-moments`}>
          <h2 id={`${hero.titleId}-moments`} className="heading-section">
            {moments.title}
          </h2>
          {moments.lead ? <p className="lead">{moments.lead}</p> : null}
          <ul className="moment-grid">
            {moments.items.map((moment) => (
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
      ) : null}

      {formats ? (
        <section className="section" aria-labelledby={`${hero.titleId}-formats`}>
          <h2 id={`${hero.titleId}-formats`} className="heading-section">
            {formats.title}
          </h2>
          {formats.lead ? <p className="lead">{formats.lead}</p> : null}
          <ul className="moment-grid">
            {formats.items.map((item) => (
              <li key={item.title} className="moment-card">
                <img
                  className="moment-card__img"
                  src={item.image}
                  alt={item.imageAlt}
                  width={480}
                  height={360}
                  loading="lazy"
                  decoding="async"
                />
                <div className="moment-card__body">
                  <h3 className="moment-card__title">{item.title}</h3>
                  <p className="moment-card__desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {music ? (
        <section className="section section--rules" aria-labelledby={`${hero.titleId}-music`}>
          <h2 id={`${hero.titleId}-music`} className="heading-section">
            {music.title}
          </h2>
          <p className="lead">{music.lead}</p>
          <ul className="rules-grid">
            {music.blocks.map((block) => {
              const Icon = getRulesIcon(block.title);
              return (
                <li key={block.title} className="rules-card">
                  {Icon ? (
                    <span className="rules-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                  ) : null}
                  <h3 className="rules-card__title">{block.title}</h3>
                  <p className="rules-card__desc">{block.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {options ? (
        <section className="section" aria-labelledby={`${hero.titleId}-options`}>
          <h2 id={`${hero.titleId}-options`} className="heading-section">
            {options.title}
          </h2>
          {options.lead ? <p className="lead">{options.lead}</p> : null}
          <ul className="option-grid">
            {options.items.map((option) => (
              <li key={option.title} className="option-card">
                <h3 className="option-card__title">{option.title}</h3>
                <p className="option-card__desc">{option.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {caseStudy ? (
        <section className="section section--case" aria-labelledby={`${hero.titleId}-case`}>
          <div className="case-study">
            <div className="case-study__copy">
              <h2 id={`${hero.titleId}-case`} className="heading-section">
                {caseStudy.title}
              </h2>
              <ul className="case-study__meta">
                {caseStudy.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="case-study__brief">{caseStudy.brief}</p>
              <h3 className="heading-sub">Prestations</h3>
              <ul className="case-study__tags">
                {caseStudy.prestations.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="case-study__outcome">{caseStudy.outcome}</p>
            </div>
            <img
              className="case-study__img"
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      ) : null}

      {gallery ? (
        <section
          id={gallery.anchorId}
          className="section section--gallery"
          aria-labelledby={`${hero.titleId}-gallery`}
        >
          <h2 id={`${hero.titleId}-gallery`} className="heading-section">
            {gallery.title}
          </h2>
          {gallery.lead ? <p className="lead gallery__lead">{gallery.lead}</p> : null}
          <GalleryGrid items={galleryItems} ariaLabel={gallery.ariaLabel} />
        </section>
      ) : null}

      {testimonialsSection && testimonials.length > 0 ? (
        <section className="section" aria-labelledby={`${hero.titleId}-testimonials`}>
          <h2 id={`${hero.titleId}-testimonials`} className="heading-section">
            {testimonialsSection.title}
          </h2>
          {testimonialsSection.lead ? <p className="lead">{testimonialsSection.lead}</p> : null}
          <WeddingTestimonials testimonials={testimonials} />
        </section>
      ) : null}

      {faq ? (
        <section className="section section--faq" aria-labelledby={`${hero.titleId}-faq`}>
          <h2 id={`${hero.titleId}-faq`} className="heading-section">
            {faq.title}
          </h2>
          <FaqSection items={faq.items} titleId={`${hero.titleId}-faq`} />
        </section>
      ) : null}

      {cta ? (
        <section className="section section--cta-banner" aria-labelledby={`${hero.titleId}-cta`}>
          <div className="cta-banner">
            <h2 id={`${hero.titleId}-cta`} className="heading-section">
              {cta.title}
            </h2>
            <p className="lead">{cta.lead}</p>
            <Link className="btn btn--primary" to={cta.href}>
              {cta.label}
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}
