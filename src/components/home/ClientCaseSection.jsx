import { Link } from 'react-router-dom';
import { homeCaseStudy } from '../../content/homeCaseStudy.js';

export function ClientCaseSection() {
  const {
    title,
    couple,
    meta,
    image,
    imageAlt,
    brief,
    timeline,
    prestations,
    outcome,
    testimonial,
    links,
    cta,
  } = homeCaseStudy;

  return (
    <section className="section section--client-case" aria-labelledby="client-case-title">
      <h2 id="client-case-title" className="heading-section">
        {title}
      </h2>
      <article className="client-case">
        <div className="client-case__media">
          <img
            className="client-case__img"
            src={image}
            alt={imageAlt}
            width={720}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="client-case__body">
          <header className="client-case__intro">
            <p className="client-case__couple">{couple}</p>
            <ul className="client-case__meta">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </header>

          {brief ? <p className="client-case__brief">{brief}</p> : null}

          <ol className="client-case__timeline" aria-label="Déroulement de la soirée">
            {timeline.map((entry) => (
              <li key={entry.time} className="client-case__timeline-item">
                <span className="client-case__time">{entry.time}</span>
                <span className="client-case__label">{entry.label}</span>
              </li>
            ))}
          </ol>

          <blockquote className="client-case__quote">
            <p>«&nbsp;{testimonial.quote}&nbsp;»</p>
            <footer>
              <cite>
                {testimonial.author}
                {testimonial.context ? `, ${testimonial.context}` : ''}
              </cite>
              {testimonial.avisHref ? (
                <>
                  {' · '}
                  <Link to={testimonial.avisHref}>Lire l&apos;avis</Link>
                </>
              ) : null}
            </footer>
          </blockquote>

          <ul className="client-case__tags" aria-label="Prestations">
            {prestations.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          {outcome ? <p className="client-case__outcome">{outcome}</p> : null}

          <div className="section__cta client-case__cta">
            <Link className="btn btn--primary" to={cta.href}>
              {cta.label}
            </Link>
            {links?.length ? (
              <p className="client-case__links">
                {links.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 ? ' · ' : null}
                    <Link to={link.href}>{link.label}</Link>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </section>
  );
}
