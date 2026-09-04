import { Link } from 'react-router-dom';

const navGroups = [
  {
    title: 'Événements',
    links: [
      { to: '/mariage', label: 'Mariage' },
      { to: '/anniversaire', label: 'Anniversaire' },
      { to: '/soiree-privee', label: 'Soirée privée' },
      { to: '/entreprise', label: 'Entreprise' },
    ],
  },
  {
    title: 'Private Events',
    links: [
      { to: '/prestations', label: 'Prestations' },
      { to: '/realisations', label: 'Réalisations' },
      { to: '/avis', label: 'Avis clients' },
      { to: '/a-propos', label: 'À propos' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/">
            <img src="/elements/logo.svg" alt="DJ Mika Private Events" width={98} height={48} loading="lazy" />
          </Link>
          <p className="site-footer__brand-name">DJ Mika Private Events</p>
          <p className="site-footer__tagline">
            DJ, sonorisation, éclairage et animations au cœur du triangle
            Montpellier – Lyon – Nice. Formule complète ou plug and play selon le lieu.
          </p>
        </div>
        <nav className="site-footer__nav" aria-label="Liens du pied de page">
          {navGroups.map((group) => (
            <div key={group.title} className="site-footer__group">
              <p className="site-footer__group-title">{group.title}</p>
              <ul className="site-footer__links">
                {group.links.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="site-footer__contact">
          <p className="site-footer__group-title">Contact</p>
          <ul className="site-footer__links">
            <li>
              <a href="mailto:contact@privateevents.fr">contact@privateevents.fr</a>
            </li>
            <li>
              <a href="tel:+33782737661">07 82 73 76 61</a>
            </li>
            <li>
              <Link to="/mon-evenement">Construire mon événement</Link>
            </li>
          </ul>
          <p className="site-footer__zone">
            Zone d&apos;intervention : cœur du triangle Montpellier – Lyon – Nice. Autres
            destinations sur demande.
          </p>
        </div>
      </div>
      <div className="site-footer__legal">
        <p className="site-footer__credit">
          Réalisé avec ❤️ par{' '}
          <a href="https://mondon.pro" target="_blank" rel="noopener noreferrer">
            Arthur Mondon
          </a>
        </p>
        <ul className="site-footer__legal-links">
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
