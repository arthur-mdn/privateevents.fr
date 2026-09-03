import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  FaBars,
  FaBuilding,
  FaCakeCandles,
  FaChevronDown,
  FaHeart,
  FaHouse,
  FaXmark,
} from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';

const eventLinks = [
  {
    to: '/mariage',
    label: 'Mariage',
    description: 'Du cocktail au dancefloor',
    Icon: FaHeart,
  },
  {
    to: '/anniversaire',
    label: 'Anniversaire',
    description: 'Une fête pensée autour des invités',
    Icon: FaCakeCandles,
  },
  {
    to: '/soiree-privee',
    label: 'Soirée privée',
    description: 'Villa, réception, soirée à thème',
    Icon: FaHouse,
  },
  {
    to: '/entreprise',
    label: 'Entreprise',
    description: 'Corporate, gala et team building',
    Icon: FaBuilding,
  },
];

const primaryLinks = [
  { to: '/prestations', label: 'Prestations' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/avis', label: 'Avis' },
  { to: '/a-propos', label: 'À propos' },
];

function EventsDropdown({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();
  const location = useLocation();
  const isEventActive = eventLinks.some((link) => location.pathname === link.to);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  const focusItem = useCallback((index) => {
    const items = menuRef.current?.querySelectorAll('a[href]');
    if (!items?.length) return;
    const safeIndex = ((index % items.length) + items.length) % items.length;
    items[safeIndex]?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        buttonRef.current?.focus();
        return;
      }

      const items = menuRef.current?.querySelectorAll('a[href]');
      if (!items?.length) return;

      const currentIndex = Array.from(items).indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusItem(currentIndex < 0 ? 0 : currentIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusItem(currentIndex <= 0 ? items.length - 1 : currentIndex - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        focusItem(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        focusItem(items.length - 1);
      }
    };

    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) {
        close();
      }
    };

    const onFocusIn = (e) => {
      if (!rootRef.current?.contains(e.target)) {
        close();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('focusin', onFocusIn);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('focusin', onFocusIn);
    };
  }, [open, close, focusItem]);

  const onTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => focusItem(0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        const items = menuRef.current?.querySelectorAll('a[href]');
        if (items?.length) focusItem(items.length - 1);
      });
    }
  };

  return (
    <li
      className={`site-nav__item site-nav__item--dropdown site-nav__item--desktop${open ? ' is-open' : ''}`}
      ref={rootRef}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`site-nav__link site-nav__trigger${isEventActive ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
      >
        Événements
        <FaChevronDown className="site-nav__chevron" aria-hidden />
      </button>
      <ul
        id={menuId}
        ref={menuRef}
        className="site-nav__submenu site-nav__submenu--rich"
        hidden={!open}
      >
        {eventLinks.map(({ to, label, description, Icon }) => (
          <li key={to}>
            <NavLink
              className={({ isActive }) =>
                `site-nav__sublink site-nav__sublink--rich${isActive ? ' is-active' : ''}`
              }
              to={to}
              onClick={() => {
                close();
                onNavigate?.();
              }}
            >
              <span className="site-nav__sublink-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="site-nav__sublink-text">
                <span className="site-nav__sublink-label">{label}</span>
                <span className="site-nav__sublink-desc">{description}</span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

function EventsMobileGroup({ onNavigate }) {
  return (
    <li className="site-nav__item site-nav__item--mobile-group">
      <p className="site-nav__group-label">Événements</p>
      <ul className="site-nav__group-list">
        {eventLinks.map(({ to, label, description, Icon }) => (
          <li key={to}>
            <NavLink
              className={({ isActive }) =>
                `site-nav__sublink site-nav__sublink--rich${isActive ? ' is-active' : ''}`
              }
              to={to}
              onClick={onNavigate}
            >
              <span className="site-nav__sublink-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="site-nav__sublink-text">
                <span className="site-nav__sublink-label">{label}</span>
                <span className="site-nav__sublink-desc">{description}</span>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

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
            src="/elements/logo.svg"
            alt="DJ Mika Private Events"
            width={114}
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
          <button
            type="button"
            className="site-nav__close"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            <FaXmark aria-hidden />
          </button>
          <ul className="site-nav__list">
            <EventsDropdown onNavigate={closeMenu} />
            <EventsMobileGroup onNavigate={closeMenu} />
            {primaryLinks.map(({ to, label }) => (
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
