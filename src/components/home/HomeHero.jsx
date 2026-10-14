import { Link } from 'react-router-dom';
import { heroContent } from '../../content/homeSections.js';

export function HomeHero() {
  return (
    <div className="hero">
      <img
        className="hero__media"
        src={heroContent.image}
        alt=""
        width={1536}
        height={1152}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <section className="hero__inner section section--hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <h1 id="hero-title" className="heading-hero">
            {heroContent.title}
          </h1>
          <p className="lead">{heroContent.intro}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/mon-evenement">
              Construire mon événement
            </Link>
            <Link className="btn btn--secondary" to="/realisations">
              Voir les réalisations
            </Link>
          </div>
          <p className="hero__reassurance">
            {heroContent.reassurance.join(' • ')}
          </p>
        </div>
      </section>
    </div>
  );
}
