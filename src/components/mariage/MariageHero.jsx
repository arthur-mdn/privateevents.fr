import { Link } from 'react-router-dom';
import { mariageHero } from '../../content/mariagePage.js';

export function MariageHero() {
  return (
    <div
      className="hero hero--page"
      style={{ backgroundImage: `url('${mariageHero.image}')` }}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <section className="hero__inner section section--hero" aria-labelledby="mariage-hero-title">
        <div className="hero__copy">
          <p className="eyebrow">{mariageHero.eyebrow}</p>
          <h1 id="mariage-hero-title" className="heading-hero">
            {mariageHero.title}
          </h1>
          <p className="lead">{mariageHero.intro}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/mon-evenement?type=mariage">
              Parler de mon mariage
            </Link>
            <a className="btn btn--secondary" href="#galerie-mariage">
              Voir des réalisations
            </a>
          </div>
          <p className="hero__reassurance">{mariageHero.reassurance.join(' • ')}</p>
        </div>
      </section>
    </div>
  );
}
