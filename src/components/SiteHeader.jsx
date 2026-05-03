export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="https://privateevents.fr/">
          <img
            src="/elements/logo.png"
            alt="Private Events — DJ Mika"
            width={140}
            height={56}
            decoding="async"
          />
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          <ul className="site-nav__list">
            <li>
              <a className="site-nav__link" href="#repertoire">
                Répertoire
              </a>
            </li>
            <li>
              <a className="site-nav__link" href="#temoignages">
                Avis
              </a>
            </li>
            <li>
              <a className="site-nav__link" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="site-nav__link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
