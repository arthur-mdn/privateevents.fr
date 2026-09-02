import { Link } from 'react-router-dom';
import { processSteps } from '../../content/homeSections.js';

export function ProcessSection() {
  return (
    <section className="section section--process" aria-labelledby="process-title">
      <h2 id="process-title" className="heading-section">
        Comment ça se passe ?
      </h2>
      <p className="lead">
        Un parcours clair, de la première prise de contact au déroulé de votre soirée.
      </p>
      <ol className="process-steps">
        {processSteps.map((step) => (
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
      <div className="section__cta">
        <Link className="btn btn--primary" to="/mon-evenement">
          Construire mon événement
        </Link>
      </div>
    </section>
  );
}
