import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/mariage', label: 'Mariage' },
  { to: '/prestations', label: 'Prestations' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/avis', label: 'Avis' },
  { to: '/a-propos', label: 'À propos' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/">
          <img
            src="/elements/logo.png"
            alt="Private Events - DJ Mika"
            width={140}
            height={56}
            decoding="async"
          />
        </Link>
        <nav className="site-nav" aria-label="Navigation principale">
          <ul className="site-nav__list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `site-nav__link${isActive ? ' is-active' : ''}`
                  }
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="site-nav__cta">
              <Link className="btn btn--primary btn--header" to="/mon-evenement">
                Construire mon événement
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
