import { Link } from 'react-router-dom';
import { servicePillars } from '../../content/homeSections.js';

export function BeyondDjSection() {
  return (
    <section className="section section--beyond" aria-labelledby="beyond-dj-title">
      <h2 id="beyond-dj-title" className="heading-section">
        Bien plus qu&apos;un DJ
      </h2>
      <p className="lead">
        Private Events peut se limiter à l&apos;animation musicale ou vous accompagner dans une
        expérience plus complète grâce à des prestations complémentaires et un réseau de partenaires.
      </p>
      <ul className="pillar-grid">
        {servicePillars.map((pillar) => (
          <li key={pillar.title} className="pillar-card">
            <img
              className="pillar-card__img"
              src={pillar.image}
              alt={pillar.imageAlt}
              width={480}
              height={320}
              loading="lazy"
              decoding="async"
            />
            <div className="pillar-card__body">
              <h3 className="pillar-card__title">{pillar.title}</h3>
              <p className="pillar-card__summary">{pillar.summary}</p>
              <ul className="pillar-card__examples">
                {pillar.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <Link className="btn btn--ghost pillar-card__cta" to={pillar.href}>
                Découvrir
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <p className="section-note">
        * Feu d&apos;artifice extérieur sous réserve des autorisations nécessaires.
      </p>
    </section>
  );
}
