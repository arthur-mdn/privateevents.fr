import { Link } from 'react-router-dom';
import { homeProcessFlow } from '../../content/homeSections.js';

export function ProcessSection() {
  return (
    <section
      className="section section--process section--process-simple"
      aria-labelledby="process-title"
    >
      <h2 id="process-title" className="heading-section">
        Comment ça se passe ?
      </h2>
      <p className="lead">
        Un parcours clair, de la première prise de contact au déroulé de votre soirée.
      </p>

      <ol className="process-flow-track" aria-label="Les étapes du projet">
        {homeProcessFlow.map((step, index) => (
          <li key={step.label} className="process-flow-track__step">
            <div className="process-flow-track__node" aria-hidden="true">
              <span className="process-flow-track__num">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="process-flow-track__card">
              <span className="process-flow-track__label">{step.label}</span>
              <span className="process-flow-track__hint">{step.hint}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="section__cta">
        <Link className="btn btn--primary" to="/mon-evenement">
          Construire mon événement
        </Link>
      </div>
    </section>
  );
}
