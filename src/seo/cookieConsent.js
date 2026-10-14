export const COOKIE_CONSENT_STORAGE_KEY = 'pe-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;

export const cookieCategories = [
  {
    id: 'necessary',
    label: 'Nécessaires',
    description:
      'Indispensables au fonctionnement du site : mémorisation de vos choix cookies et sécurité de base. Toujours actifs.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Mesure d’audience',
    description:
      'Cookies statistiques pour comprendre l’usage du site (pages vues, provenance). Aucun outil d’audience n’est actif pour le moment.',
    required: false,
  },
  {
    id: 'media',
    label: 'Contenus tiers / médias',
    description:
      'Permet d’afficher des contenus hébergés chez des tiers, notamment les vidéos Facebook intégrées sur la page réalisations. Ces services peuvent déposer leurs propres cookies.',
    required: false,
  },
];

export const defaultConsent = {
  version: COOKIE_CONSENT_VERSION,
  necessary: true,
  analytics: false,
  media: false,
  decided: false,
  updatedAt: null,
};

export function readStoredConsent() {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== COOKIE_CONSENT_VERSION) return null;
    return {
      ...defaultConsent,
      ...parsed,
      necessary: true,
      decided: true,
    };
  } catch {
    return null;
  }
}

export function writeStoredConsent(consent) {
  const payload = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics: Boolean(consent.analytics),
    media: Boolean(consent.media),
    decided: true,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(payload));
  return payload;
}
