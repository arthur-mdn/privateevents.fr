import { Link } from 'react-router-dom';
import { stats } from '../../content/homeSections.js';

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Points clés">
      <ul className="stats-bar__list">
        {stats.map((stat) => (
          <li key={stat.detail} className="stats-bar__item">
            {stat.href ? (
              <Link className="stats-bar__link" to={stat.href}>
                <span className="stats-bar__value">{stat.value}</span>
                <span className="stats-bar__label">{stat.label}</span>
                <span className="stats-bar__detail">{stat.detail}</span>
              </Link>
            ) : (
              <>
                <span className="stats-bar__value">{stat.value}</span>
                <span className="stats-bar__label">{stat.label}</span>
                <span className="stats-bar__detail">{stat.detail}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
