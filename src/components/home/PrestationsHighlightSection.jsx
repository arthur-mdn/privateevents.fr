import { Link } from 'react-router-dom';
import { prestationHighlights } from '../../content/homeSections.js';

export function PrestationsHighlightSection() {
  return (
    <section className="section section--highlights" aria-labelledby="highlights-title">
      <h2 id="highlights-title" className="heading-section">
        Des prestations qui font rêver
      </h2>
      <p className="lead">
        Photobooth, musiciens, éclairage, effets visuels… Des options visibles dès la homepage pour
        vous aider à vous projeter.
      </p>
      <ul className="highlight-grid">
        {prestationHighlights.map((item) => (
          <li key={item.title} className="highlight-card">
            <img
              className="highlight-card__img"
              src={item.image}
              alt={item.imageAlt}
              width={640}
              height={420}
              loading="lazy"
              decoding="async"
            />
            <div className="highlight-card__body">
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="reassurance-block">
        <h3 className="heading-sub">Et pour que vous puissiez réellement profiter…</h3>
        <p>
          Des solutions complémentaires peuvent également être prévues pour les enfants, le service
          ou la sécurisation de votre événement.
        </p>
      </div>
      <div className="section__cta">
        <Link className="btn btn--secondary" to="/prestations">
          Voir toutes les prestations
        </Link>
      </div>
    </section>
  );
}
