import { Link } from 'react-router-dom';
import { homeCaseStudy } from '../../content/homeCaseStudy.js';

export function ClientCaseSection() {
  const { title, couple, meta, image, imageAlt, timeline, prestations, testimonial, cta } =
    homeCaseStudy;

  return (
    <section className="section section--client-case" aria-labelledby="client-case-title">
      <h2 id="client-case-title" className="heading-section">
        {title}
      </h2>
      <div className="client-case">
        <div className="client-case__hero">
          <img
            className="client-case__img"
            src={image}
            alt={imageAlt}
            width={960}
            height={540}
            loading="lazy"
            decoding="async"
          />
          <div className="client-case__intro">
            <p className="client-case__couple">{couple}</p>
            <ul className="client-case__meta">
              {meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="client-case__timeline" aria-label="Déroulement de la soirée">
          {timeline.map((entry) => (
            <li key={entry.time} className="client-case__timeline-item">
              <time className="client-case__time" dateTime={entry.time.replace('h', ':')}>
                {entry.time}
              </time>
              <span className="client-case__label">{entry.label}</span>
            </li>
          ))}
        </ol>

        <div className="client-case__footer">
          <div className="client-case__prestations">
            <h3 className="heading-sub">Prestations</h3>
            <ul className="case-study__tags">
              {prestations.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <blockquote className="client-case__quote">
            <p>«&nbsp;{testimonial.quote}&nbsp;»</p>
            <footer>
              <cite>
                {testimonial.author}
                {testimonial.context ? `, ${testimonial.context}` : ''}
              </cite>
            </footer>
          </blockquote>
        </div>

        <div className="section__cta">
          <Link className="btn btn--primary" to={cta.href}>
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
