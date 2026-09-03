import { Link } from 'react-router-dom';

export function EventLandingHero({ hero }) {
  return (
    <div className="hero hero--page">
      <img
        className="hero__media"
        src={hero.image}
        alt=""
        width={1600}
        height={1067}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <section className="hero__inner section section--hero" aria-labelledby={hero.titleId}>
        <div className="hero__copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id={hero.titleId} className="heading-hero">
            {hero.title}
          </h1>
          <p className="lead">{hero.intro}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            {hero.secondaryCta ? (
              <a className="btn btn--secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            ) : null}
          </div>
          {hero.reassurance?.length ? (
            <p className="hero__reassurance">{hero.reassurance.join(' • ')}</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
