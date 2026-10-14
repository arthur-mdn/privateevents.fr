import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieConsentContext.jsx';
import { cookieCategories } from '../seo/cookieConsent.js';

function PreferencesPanel({ open, onClose, onSave, initial }) {
  const titleId = useId();
  const [draft, setDraft] = useState({
    analytics: initial.analytics,
    media: initial.media,
  });

  useEffect(() => {
    if (!open) return;
    setDraft({
      analytics: initial.analytics,
      media: initial.media,
    });
  }, [open, initial.analytics, initial.media]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="cookie-prefs" role="presentation">
      <button type="button" className="cookie-prefs__backdrop" aria-label="Fermer" onClick={onClose} />
      <div
        className="cookie-prefs__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <h2 id={titleId} className="cookie-prefs__title">
          Préférences cookies
        </h2>
        <p className="cookie-prefs__intro">
          Choisissez les catégories autorisées. Vous pouvez modifier ce choix à tout moment.
        </p>

        <ul className="cookie-prefs__list">
          {cookieCategories.map((category) => {
            const checked = category.required ? true : Boolean(draft[category.id]);
            return (
              <li key={category.id} className="cookie-prefs__item">
                <label className="cookie-prefs__label">
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={category.required}
                    onChange={(event) => {
                      if (category.required) return;
                      setDraft((prev) => ({
                        ...prev,
                        [category.id]: event.target.checked,
                      }));
                    }}
                  />
                  <span>
                    <strong>{category.label}</strong>
                    <span className="cookie-prefs__desc">{category.description}</span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        <div className="cookie-prefs__actions">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="btn btn--primary" onClick={() => onSave(draft)}>
            Enregistrer mes choix
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieBanner() {
  const {
    consent,
    bannerOpen,
    prefsOpen,
    acceptAll,
    refuseAll,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  return (
    <>
      {bannerOpen ? (
        <div
          className="cookie-banner"
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
        >
          <div className="cookie-banner__inner">
            <div className="cookie-banner__copy">
              <p id="cookie-banner-title" className="cookie-banner__title">
                Cookies &amp; confidentialité
              </p>
              <p id="cookie-banner-desc" className="cookie-banner__text">
                Nous utilisons des cookies nécessaires au fonctionnement du site, et éventuellement
                des contenus tiers (vidéos Facebook) ou des outils de mesure d’audience. Vous pouvez
                accepter, refuser ou personnaliser votre choix. Consultez la{' '}
                <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
              </p>
            </div>
            <div className="cookie-banner__actions">
              <button type="button" className="btn btn--secondary" onClick={refuseAll}>
                Tout refuser
              </button>
              <button type="button" className="btn btn--ghost" onClick={openPreferences}>
                Personnaliser
              </button>
              <button type="button" className="btn btn--primary" onClick={acceptAll}>
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <PreferencesPanel
        open={prefsOpen}
        onClose={closePreferences}
        onSave={savePreferences}
        initial={consent}
      />
    </>
  );
}
