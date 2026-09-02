import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/mariage', label: 'Mariage' },
  { to: '/prestations', label: 'Prestations' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/avis', label: 'Avis' },
  { to: '/a-propos', label: 'À propos' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        toggleRef.current?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    const focusable = panelRef.current?.querySelectorAll(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" onClick={closeMenu}>
          <img
            src="/elements/logo.png"
            alt="Private Events - DJ Mika"
            width={140}
            height={56}
            decoding="async"
          />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="site-header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => (menuOpen ? closeMenu() : openMenu())}
        >
          {menuOpen ? <FaXmark aria-hidden /> : <FaBars aria-hidden />}
        </button>

        {menuOpen ? (
          <button
            type="button"
            className="site-nav__overlay"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          />
        ) : null}

        <nav
          id={menuId}
          ref={panelRef}
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul className="site-nav__list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `site-nav__link${isActive ? ' is-active' : ''}`
                  }
                  to={to}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="site-nav__cta">
              <Link className="btn btn--primary btn--header" to="/mon-evenement" onClick={closeMenu}>
                Construire mon événement
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
