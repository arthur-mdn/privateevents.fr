export const SITE_URL = 'https://privateevents.fr';
export const SITE_NAME = 'Private Events — DJ Mika';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/elements/photos/dj.png`;

export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organisation`,
      name: 'Private Events — DJ Mika',
      alternateName: 'DJ Mika Private Events',
      image: `${SITE_URL}/elements/logo.png`,
      url: `${SITE_URL}/`,
      telephone: '+33782737661',
      email: 'contact@privateevents.fr',
      description:
        'Prestations de DJ professionnel, animation musicale et karaoké pour événements privés, mariages et soirées corporate en Provence.',
      priceRange: '€€',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Vaucluse' },
        { '@type': 'AdministrativeArea', name: 'Var' },
        { '@type': 'Place', name: "Provence-Alpes-Côte d'Azur" },
      ],
      serviceType: ['Animation DJ', 'Karaoké', 'Sonorisation événementielle'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Private Events DJ Mika',
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#organisation` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Dans quelles zones intervient DJ Mika ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Les prestations couvrent principalement le Vaucluse et la région d'Avignon, Carpentras et Orange, ainsi que le Var et les déplacements en Provence-Alpes-Côte d'Azur sur demande.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le matériel son et lumière est-il inclus ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La prestation inclut l'équipement adapté à votre lieu et au nombre d'invités : diffusion sonore, micros pour discours ou karaoké, et mise en lumière selon la formule choisie, précisée lors du devis.",
          },
        },
        {
          '@type': 'Question',
          name: "Comment obtenir un devis pour un mariage ou une soirée d'entreprise ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Remplissez le formulaire de contact sur privateevents.fr ou appelez le 07 82 73 76 61 avec la date, le lieu et le type d\'événement ; une proposition personnalisée vous est rapidement adressée.',
          },
        },
        {
          '@type': 'Question',
          name: "Peut-on combiner DJ et karaoké lors d'une même soirée ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui : des créneaux karaoké peuvent s'intégrer dans la programmation DJ pour varier les moments forts tout en conservant une ambiance cohérente.",
          },
        },
      ],
    },
  ],
};

const defaultDescription =
  'DJ professionnel pour mariages, soirées privées et événements corporate dans le Vaucluse, Avignon, Carpentras, le Var et la Provence. Musique sur mesure, karaoké, sonorisation.';

export const routeMeta = {
  '/': {
    title: 'DJ Mika — Private Events | DJ, karaoké & animation en Provence',
    description: defaultDescription,
    ogTitle: 'DJ Mika — Private Events | Animation musicale & karaoké en Provence',
    jsonLd: homeJsonLd,
  },
  '/mariage': {
    title: 'DJ mariage dans le Sud de la France | Private Events',
    description:
      'Animation DJ et prestations complémentaires pour votre mariage en Provence. Programmation sur mesure, sonorisation, karaoké et réseau de partenaires.',
  },
  '/anniversaire': {
    title: 'DJ anniversaire en Provence | Private Events',
    description:
      'DJ et animations pour anniversaires et fêtes privées dans le Vaucluse et le Var. Ambiance adaptée à vos invités et à votre génération.',
  },
  '/soiree-privee': {
    title: 'DJ soirée privée en Provence | Private Events',
    description:
      'Prestation DJ sur mesure pour soirées privées dans le Sud de la France. Sonorisation, éclairage et animations selon le format de votre événement.',
  },
  '/entreprise': {
    title: 'DJ événement entreprise en Provence | Private Events',
    description:
      'Animation musicale pour séminaires, soirées corporate et événements d\'entreprise. Fiabilité, coordination et prestations adaptées au cadre professionnel.',
  },
  '/prestations': {
    title: 'Prestations DJ & animations | Private Events',
    description:
      'DJ, sonorisation, éclairage, karaoké, photobooth, vidéobooth, artistes et prestations complémentaires pour vos événements en Provence.',
  },
  '/realisations': {
    title: 'Réalisations & galeries | Private Events',
    description:
      'Découvrez des mariages, anniversaires et soirées corporate animés par DJ Mika en Provence. Photos et retours d\'expérience.',
  },
  '/avis': {
    title: 'Avis clients | Private Events',
    description:
      'Témoignages de mariés, particuliers et entreprises ayant confié leur soirée à Private Events en Provence.',
  },
  '/a-propos': {
    title: 'À propos de DJ Mika | Private Events',
    description:
      'Découvrez Mika, DJ événementiel en Provence depuis plus de 10 ans. Préparation personnalisée et réseau de partenaires.',
  },
  '/mon-evenement': {
    title: 'Construire mon événement | Private Events',
    description:
      'Décrivez votre projet : type d\'événement, date, lieu, ambiance et prestations souhaitées. Réponse personnalisée de DJ Mika.',
  },
  '/mentions-legales': {
    title: 'Mentions légales | Private Events',
    description: 'Mentions légales du site Private Events — DJ Mika.',
    noindex: true,
  },
  '/politique-de-confidentialite': {
    title: 'Politique de confidentialité | Private Events',
    description: 'Politique de confidentialité et traitement des données du site Private Events.',
    noindex: true,
  },
};

export const placeholderRoutes = [
  { path: '/anniversaire', heading: 'DJ anniversaire' },
  { path: '/soiree-privee', heading: 'Soirée privée' },
  { path: '/entreprise', heading: 'Événement entreprise' },
  { path: '/prestations', heading: 'Prestations' },
  { path: '/a-propos', heading: 'À propos' },
  { path: '/mentions-legales', heading: 'Mentions légales' },
  { path: '/politique-de-confidentialite', heading: 'Politique de confidentialité' },
];
