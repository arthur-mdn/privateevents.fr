import { Link } from 'react-router-dom';
import { FaqSection, GalleryGrid, WeddingTestimonials } from './PageSections.jsx';
import { EventLandingHero } from './EventLandingHero.jsx';
import { PopularOptionCard } from './PopularOptionCard.jsx';
import { getRulesIcon } from './rulesIcons.js';

function sectionId(heroTitleId, section) {
  return section.id ?? `${heroTitleId}-${section.type}`;
}

function EditorialSplitSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);
  const reverse = section.layout === 'reverse';

  return (
    <section
      className={`feature-split${reverse ? ' feature-split--reverse' : ''}${section.soft ? ' feature-split--soft' : ''}`}
      aria-labelledby={id}
    >
      <div className="feature-split__body">
        <h2 id={id} className="heading-section">
          {section.title}
        </h2>
        {section.lead ? <p className="lead">{section.lead}</p> : null}
        {section.body?.map((paragraph) => (
          <p key={paragraph} className="feature-split__prose-p">
            {paragraph}
          </p>
        ))}
        {section.points?.length ? (
          <ul className="plain-points plain-points--compact">
            {section.points.map((point) => (
              <li key={point.title ?? point}>
                {point.title ? (
                  <>
                    <strong className="plain-points__label">{point.title}</strong>
                    <span className="plain-points__text">{point.description ?? point.text}</span>
                  </>
                ) : (
                  <span className="plain-points__text">{point}</span>
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {section.image ? (
        <div className="feature-split__media">
          <img
            src={section.image}
            alt={section.imageAlt ?? ''}
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
    </section>
  );
}

function PlainPointsSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);
  const soft = section.soft ? ' section--soft' : '';

  return (
    <section className={`section${soft}`} aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
      <ul className={`plain-points${section.columns === 2 ? ' plain-points--two' : ''}`}>
        {section.points.map((point) => (
          <li key={point.title} className="plain-points__item">
            <h3 className="plain-points__title">{point.title}</h3>
            <p className="plain-points__desc">{point.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CalloutSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className="section section--tight" aria-labelledby={id}>
      <div className="landing-callout">
        <h2 id={id} className="heading-section">
          {section.title}
        </h2>
        {section.lead ? <p className="lead">{section.lead}</p> : null}
        {section.body?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.points?.length ? (
          <ul className="landing-callout__list">
            {section.points.map((point) => (
              <li key={point.title ?? point}>
                {point.title ? (
                  <>
                    <strong>{point.title}</strong>
                    {point.description ? ` : ${point.description}` : null}
                  </>
                ) : (
                  point
                )}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

function UsageListSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className={`section${section.soft ? ' section--soft' : ''}`} aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
      <ul className="usage-list">
        {section.items.map((item) => (
          <li key={item.title} className="usage-list__item">
            <h3 className="usage-list__title">{item.title}</h3>
            <p className="usage-list__desc">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TimelineSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className="section section--process" aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
      <ol className="process-steps">
        {section.steps.map((step) => (
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
  );
}

function PhotoGridSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);
  const items = section.items ?? [];
  const dense = section.layout === 'dense';

  return (
    <section className={`section${section.soft ? ' section--soft' : ''}`} aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
      <ul className={`moment-grid${dense ? ' moment-grid--dense' : ''}`}>
        {items.map((item) => (
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
  );
}

function MusicSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className="section section--rules" aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      <p className="lead">{section.lead}</p>
      <ul className="rules-grid">
        {section.blocks.map((block) => {
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
  );
}

function OptionsSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className="section" aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
      <ul className="popular-option-grid">
        {section.items.map((option) => (
          <PopularOptionCard
            key={option.title}
            title={option.title}
            description={option.description}
            image={option.image}
            helpKey={option.helpKey}
          />
        ))}
      </ul>
    </section>
  );
}

function CaseStudySection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className="section--spotlight" aria-labelledby={id}>
      <div className="section__inner">
        <div className="case-study case-study--spotlight">
          <div className="case-study__copy">
            <p className="case-study__eyebrow">Cas client</p>
            <h2 id={id} className="heading-section">
              {section.title}
            </h2>
            <ul className="case-study__meta">
              {section.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="case-study__brief">{section.brief}</p>
            <h3 className="heading-sub">Prestations</h3>
            <ul className="case-study__tags">
              {section.prestations.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="case-study__outcome">{section.outcome}</p>
            {section.links?.length ? (
              <p className="case-study__links">
                {section.links.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? ' · ' : null}
                    <Link to={link.href}>{link.label}</Link>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
          <img
            className="case-study__img"
            src={section.image}
            alt={section.imageAlt}
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function GallerySection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);
  const items = section.getItems?.() ?? section.items ?? [];

  return (
    <section
      id={section.anchorId}
      className="section section--gallery"
      aria-labelledby={id}
    >
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead gallery__lead">{section.lead}</p> : null}
      <GalleryGrid items={items} ariaLabel={section.ariaLabel} />
    </section>
  );
}

function TestimonialsSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);
  const testimonials = section.getItems?.() ?? section.items ?? [];
  if (!testimonials.length) return null;

  return (
    <section className="section" aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
      <WeddingTestimonials testimonials={testimonials} />
    </section>
  );
}

function FaqBlockSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);

  return (
    <section className="section section--faq" aria-labelledby={id}>
      <h2 id={id} className="heading-section">
        {section.title}
      </h2>
      <FaqSection items={section.items} titleId={id} />
    </section>
  );
}

function CtaSection({ section, heroTitleId }) {
  const id = sectionId(heroTitleId, section);
  const links = section.secondaryLinks ?? [];

  return (
    <section className="section section--cta-banner" aria-labelledby={id}>
      <div className="cta-banner">
        <h2 id={id} className="heading-section">
          {section.title}
        </h2>
        <p className="lead">{section.lead}</p>
        <Link className="btn btn--primary" to={section.href}>
          {section.label}
        </Link>
        {links.length > 0 ? (
          <ul className="cta-banner__links">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

const SECTION_RENDERERS = {
  editorialSplit: EditorialSplitSection,
  plainPoints: PlainPointsSection,
  callout: CalloutSection,
  usageList: UsageListSection,
  timeline: TimelineSection,
  moments: PhotoGridSection,
  formats: PhotoGridSection,
  music: MusicSection,
  options: OptionsSection,
  caseStudy: CaseStudySection,
  gallery: GallerySection,
  testimonials: TestimonialsSection,
  faq: FaqBlockSection,
  cta: CtaSection,
};

function legacySectionsFrom(content) {
  const sections = [];
  if (content.promesse) {
    sections.push({
      type: 'plainPoints',
      id: 'promesse',
      title: content.promesse.title,
      lead: content.promesse.lead,
      points: content.promesse.points,
    });
  }
  if (content.timeline) sections.push({ type: 'timeline', ...content.timeline });
  if (content.highlights) {
    sections.push({
      type: 'plainPoints',
      id: 'highlights',
      title: content.highlights.title,
      lead: content.highlights.lead,
      points: content.highlights.blocks,
      columns: 2,
    });
  }
  if (content.moments) sections.push({ type: 'moments', ...content.moments });
  if (content.formats) sections.push({ type: 'formats', ...content.formats });
  if (content.music) sections.push({ type: 'music', ...content.music });
  if (content.options) sections.push({ type: 'options', ...content.options });
  if (content.caseStudy) sections.push({ type: 'caseStudy', ...content.caseStudy });
  if (content.gallery) sections.push({ type: 'gallery', ...content.gallery });
  if (content.testimonialsSection) {
    sections.push({ type: 'testimonials', ...content.testimonialsSection });
  }
  if (content.faq) sections.push({ type: 'faq', ...content.faq });
  if (content.cta) sections.push({ type: 'cta', ...content.cta });
  return sections;
}

export function EventLandingContent({ content }) {
  const heroTitleId = content.hero?.titleId ?? 'event';
  const sections = content.sections ?? legacySectionsFrom(content);

  return (
    <>
      {content.hero ? <EventLandingHero hero={content.hero} /> : null}
      {sections.map((section, index) => {
        const Renderer = SECTION_RENDERERS[section.type];
        if (!Renderer) return null;
        return (
          <Renderer
            key={section.id ?? `${section.type}-${index}`}
            section={section}
            heroTitleId={heroTitleId}
          />
        );
      })}
    </>
  );
}
