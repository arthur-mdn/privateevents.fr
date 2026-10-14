import { Link } from 'react-router-dom';
import { eventTypes } from '../../content/homeSections.js';

export function EventTypesSection() {
  return (
    <section className="section" aria-labelledby="event-types-title">
      <h2 id="event-types-title" className="heading-section">
        Quel événement préparez-vous ?
      </h2>
      <p className="lead">
        Quatre formats, quatre pages. Choisissez le vôtre pour voir le déroulé, les options et
        des exemples proches.
      </p>
      <ul className="event-cards">
        {eventTypes.map((event) => (
          <li key={event.href}>
            <Link className="event-card" to={event.href}>
              <img
                className="event-card__img"
                src={event.image}
                alt={event.imageAlt}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
              />
              <span className="event-card__body">
                <span className="event-card__title">{event.title}</span>
                <span className="event-card__desc">{event.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
