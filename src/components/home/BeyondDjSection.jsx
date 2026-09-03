import { Link } from 'react-router-dom';
import { featuredPillars, prestationHighlights } from '../../content/homeSections.js';

function PillarFeature({ pillar, reverse = false }) {
  return (
    <article className={`pillar-feature${reverse ? ' pillar-feature--reverse' : ''}`}>
      <div className="pillar-feature__media">
        <img
          src={pillar.image}
          alt={pillar.imageAlt}
          width={720}
          height={480}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="pillar-feature__body">
        <h3 className="pillar-feature__title">{pillar.title}</h3>
        <p className="pillar-feature__summary">{pillar.summary}</p>
        <ul className="pillar-feature__tags" aria-label={`Exemples : ${pillar.title}`}>
          {pillar.examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
        <Link className="pillar-feature__link" to={pillar.href}>
          En savoir plus
        </Link>
      </div>
    </article>
  );
}

function HighlightCard({ item }) {
  return (
    <li className="highlight-card">
      <Link className="highlight-card__link" to={item.href}>
        <img
          className="highlight-card__img"
          src={item.image}
          alt={item.imageAlt}
          width={640}
          height={420}
          loading="lazy"
          decoding="async"
        />
        <span className="highlight-card__body">
          <span className="highlight-card__title">{item.title}</span>
          <span className="highlight-card__desc">{item.description}</span>
        </span>
      </Link>
    </li>
  );
}

export function BeyondDjSection() {
  const [lead, secondary] = featuredPillars;

  return (
    <section className="section section--beyond" aria-labelledby="beyond-dj-title">
      <h2 id="beyond-dj-title" className="heading-section">
        Bien plus qu&apos;un DJ
      </h2>
      <p className="lead">
        Private Events peut se limiter à l&apos;animation musicale ou vous accompagner dans une
        expérience plus complète : technique, animations participatives, puis options visuelles ou
        artistiques selon votre projet.
      </p>

      <div className="pillar-showcase">
        <PillarFeature pillar={lead} />
        <PillarFeature pillar={secondary} reverse />
      </div>

      <div className="beyond-highlights">
        <h3 id="highlights-title" className="heading-sub">
          Des prestations qui font rêver
        </h3>
        <p className="beyond-highlights__lead">
          Quelques options concrètes pour vous projeter avant d&apos;ouvrir le catalogue complet.
        </p>
        <ul className="highlight-grid" aria-labelledby="highlights-title">
          {prestationHighlights.map((item) => (
            <HighlightCard key={item.title} item={item} />
          ))}
        </ul>
      </div>

      <div className="reassurance-block">
        <h3 className="heading-sub">Et pour que vous puissiez réellement profiter…</h3>
        <p>
          Garde d&apos;enfants, personnel de restauration ou sécurisation : des solutions
          complémentaires peuvent aussi être coordonnées selon votre événement.
        </p>
      </div>

      <div className="section__cta">
        <Link className="btn btn--secondary" to="/prestations">
          Voir toutes les prestations
        </Link>
      </div>

      <p className="section-note">
        * Feu d&apos;artifice extérieur sous réserve des autorisations nécessaires.
      </p>
    </section>
  );
}
