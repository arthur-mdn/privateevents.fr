export const SITE_URL = 'https://privateevents.fr';
export const SITE_NAME = 'DJ Mika Private Events';
export const BRAND_SHORT = 'Mika Private Events';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/elements/photos/dj-mixage-live-eclairage-bleu.webp`;
export const DEFAULT_OG_IMAGE_ALT = 'DJ Mika en prestation lors d’une soirée événementielle';

export const homeDescription =
  'DJ Mika Private Events : DJ, sonorisation, éclairage et animations pour mariages, anniversaires, soirées privées et entreprises en Provence / PACA.';

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organisation`,
      name: 'DJ Mika Private Events',
      alternateName: ['Mika Private Events', 'Private Events - DJ Mika'],
      image: `${SITE_URL}/elements/logo.svg`,
      url: `${SITE_URL}/`,
      telephone: '+33782737661',
      email: 'contact@privateevents.fr',
      description:
        'DJ, animation musicale, sonorisation et éclairage pour événements privés, mariages et soirées d’entreprise en Provence / PACA. Formule complète ou plug and play.',
      priceRange: '€€',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Provence-Alpes-Côte d\'Azur' },
        { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
        { '@type': 'AdministrativeArea', name: 'Vaucluse' },
        { '@type': 'AdministrativeArea', name: 'Bouches-du-Rhône' },
        { '@type': 'AdministrativeArea', name: 'Var' },
      ],
      serviceType: [
        'Animation DJ',
        'Sonorisation événementielle',
        'Éclairage événementiel',
        'Karaoké',
        'Animations musicales',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'DJ Mika Private Events',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#organisation` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Dans quelles zones intervient DJ Mika Private Events ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les prestations couvrent principalement le cœur du triangle Montpellier – Lyon – Nice (Provence / PACA et Rhône-Alpes) : Vaucluse, Bouches-du-Rhône, Var et départements limitrophes, selon la date et le projet. Autres destinations sur demande.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le matériel son et lumière est-il inclus ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deux formules sont possibles : prestation complète avec DJ, sonorisation et éclairage fournis et installés, ou intervention plug and play sur une installation déjà présente. Le détail est précisé au devis.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment obtenir un devis pour un mariage ou une soirée d’entreprise ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Utilisez le configurateur sur privateevents.fr ou appelez le 07 82 73 76 61 avec la date, le lieu et le type d’événement. Chaque prestation fait l’objet d’un devis personnalisé.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on combiner DJ et karaoké lors d’une même soirée ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui : des créneaux karaoké, quiz ou blind test peuvent s’intégrer dans la programmation DJ pour varier les moments tout en gardant une ambiance cohérente.',
          },
        },
      ],
    },
  ],
};

export const routeMeta = {
  '/': {
    title: 'DJ Mika Private Events | DJ & animation en Provence',
    description: homeDescription,
    ogTitle: 'DJ Mika Private Events | DJ & animation en Provence',
    jsonLd: homeJsonLd,
  },
  '/mariage': {
    title: 'DJ mariage en Provence | Mika Private Events',
    description:
      'DJ mariage en Provence : préparation musicale, sonorisation, éclairage, animations et options partenaires pour votre cérémonie, cocktail et soirée.',
  },
  '/anniversaire': {
    title: 'DJ anniversaire en Provence | Mika Private Events',
    description:
      'DJ et animations pour fêtes d’anniversaire en Provence : ambiance intergénérationnelle, karaoké, quiz, diaporama et options selon l’âge et les invités.',
  },
  '/soiree-privee': {
    title: 'DJ soirée privée en Provence | Mika Private Events',
    description:
      'DJ soirée privée en Provence : villa, cocktail, pool party ou lieu déjà équipé. Formule complète ou plug and play selon votre configuration.',
  },
  '/entreprise': {
    title: 'DJ soirée d’entreprise en Provence | Mika Private Events',
    description:
      'DJ et animation pour événements d’entreprise en Provence : sonorisation, prises de parole, ambiance, quiz, karaoké et prestations complémentaires.',
  },
  '/prestations': {
    title: 'DJ, sonorisation, animations & effets | Mika Private Events',
    description:
      'DJ, sonorisation, éclairage, effets, karaoké, quiz et prestations partenaires coordonnées pour vos événements en Provence / PACA.',
  },
  '/realisations': {
    title: 'Mariages, anniversaires & événements réalisés | Mika Private Events',
    description:
      'Mariages, anniversaires, soirées privées et événements corporate réalisés par DJ Mika Private Events en Provence.',
  },
  '/avis': {
    title: 'Avis clients | DJ Mika Private Events',
    description:
      'Avis de mariages, anniversaires, soirées privées et entreprises ayant confié leur événement à DJ Mika Private Events.',
  },
  '/a-propos': {
    title: 'DJ Mika | À propos de Mika Private Events',
    description:
      'Amateur dès 2010/2011, Mika propose DJ, animation et coordination de partenaires en Provence / PACA.',
  },
  '/mon-evenement': {
    title: 'Construire mon événement | Mika Private Events',
    description:
      'Décrivez votre projet : type d’événement, date, lieu, ambiance et prestations. Demande structurée, devis personnalisé, sans simulateur tarifaire.',
  },
  '/mentions-legales': {
    title: 'Mentions légales | DJ Mika Private Events',
    description: 'Mentions légales du site DJ Mika Private Events.',
    noindex: true,
  },
  '/politique-de-confidentialite': {
    title: 'Politique de confidentialité | DJ Mika Private Events',
    description: 'Politique de confidentialité et traitement des données du site DJ Mika Private Events.',
    noindex: true,
  },
};

export function canonicalPath(path) {
  if (!path || path === '/') return '/';
  const withoutQuery = path.split('?')[0].split('#')[0];
  return withoutQuery.endsWith('/') && withoutQuery.length > 1
    ? withoutQuery.slice(0, -1)
    : withoutQuery;
}

export function buildCanonicalUrl(path) {
  const clean = canonicalPath(path);
  return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`;
}

export function buildLandingJsonLd(path, name, faq) {
  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  if (faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
