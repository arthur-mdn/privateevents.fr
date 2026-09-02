import { getSoireePriveeGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const soireePriveeFaq = [
  {
    question: 'Quels formats de soirée privée couvrez-vous ?',
    answer:
      'Soirées entre amis, fêtes de famille, pool party, réveillon, événements en club ou en extérieur : la prestation s\'adapte au lieu, au format et au nombre d\'invités.',
  },
  {
    question: 'Peut-on mixer plusieurs styles musicaux ?',
    answer:
      'Oui, la programmation mélange vos styles préférés et s\'adapte en direct au rythme de la soirée et aux réactions des invités.',
  },
  {
    question: 'Le matériel est-il adapté à un lieu non équipé ?',
    answer:
      'Oui, sonorisation et éclairage sont dimensionnés selon la configuration du lieu et le nombre d\'invités. Un échange préalable permet d\'anticiper les contraintes.',
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer:
      'Principalement le Vaucluse, le Luberon, le Var et les départements limitrophes en Provence-Alpes-Côte d\'Azur. D\'autres déplacements sont possibles sur accord préalable.',
  },
  {
    question: 'Comment obtenir une proposition pour ma soirée ?',
    answer:
      'Utilisez le configurateur en précisant la date, le lieu et vos envies, ou contactez-nous directement. Une réponse personnalisée vous est adressée après étude de votre projet.',
  },
];

export const soireePriveeLandingContent = {
  hero: {
    titleId: 'soiree-privee-hero-title',
    eyebrow: 'Soirée privée • Sud de la France',
    title: 'Votre soirée privée, pensée autour de vous.',
    intro:
      'DJ, sonorisation, éclairage et animations pour une soirée sur mesure. Le lieu, le format et vos envies guident chaque détail de la prestation.',
    reassurance: ['Format flexible', 'Lieu intérieur ou extérieur', 'Ambiance personnalisée'],
    image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
    primaryCta: { href: '/mon-evenement?type=soiree-privee', label: 'Parler de ma soirée' },
    secondaryCta: { href: '#galerie-soiree-privee', label: 'Voir des réalisations' },
  },
  promesse: {
    title: 'Une prestation adaptée à votre format',
    lead:
      'Soirée entre amis, fête de famille, réveillon ou événement en club : Private Events construit une prestation cohérente autour de votre lieu et de vos envies.',
    points: [
      {
        title: 'Lieu et configuration',
        description: 'Salle, jardin, terrasse ou établissement : sonorisation et éclairage dimensionnés en conséquence.',
      },
      {
        title: 'Ambiance sur mesure',
        description: 'Styles musicaux, volume et rythme adaptés à votre public et au déroulement prévu.',
      },
      {
        title: 'Options complémentaires',
        description: 'Karaoké, photobooth, vidéobooth ou effets visuels pour enrichir la soirée.',
      },
    ],
  },
  timeline: {
    title: 'Déroulement d\'une soirée privée avec Private Events',
    lead: 'De la préparation au jour J, un accompagnement pour que vous puissiez profiter de votre événement.',
    steps: [
      {
        step: '01',
        title: 'Premiers échanges',
        description: 'Date, lieu, nombre d\'invités, format, styles musicaux et contraintes.',
      },
      {
        step: '02',
        title: 'Construction de la prestation',
        description: 'DJ, sonorisation, éclairage, animations et options complémentaires.',
      },
      {
        step: '03',
        title: 'Préparation détaillée',
        description: 'Playlist, coordination avec le lieu et vérifications techniques.',
      },
      {
        step: '04',
        title: 'Le jour J',
        description: 'Installation, tests et animation musicale adaptée au déroulement réel.',
      },
    ],
  },
  formats: {
    title: 'Des formats variés',
    lead: 'Chaque soirée privée a ses spécificités. Voici quelques exemples de prestations.',
    items: [
      {
        title: 'Soirée en extérieur',
        description: 'Jardin, terrasse ou pool party avec sonorisation et éclairage adaptés.',
        image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
        imageAlt: 'Sonorisation et éclairage pour l’anniversaire de Louis en extérieur',
      },
      {
        title: 'Soirée en salle',
        description: 'Ambiance club ou lounge, jeux de lumières et programmation sur mesure.',
        image: '/elements/gallery/anniversaire-18ans-jeunes-ambiances-lumiere.jpg',
        imageAlt: 'Ambiance lumineuse lors de la soirée Yogan',
      },
      {
        title: 'Réveillon & fêtes',
        description: 'Nouvel An, fête de fin d\'année ou célébration avec ambiance festive.',
        image: '/elements/gallery/soiree-nouvel-an-2026-zanzibar-sete.jpg',
        imageAlt: 'DJ mixe une soirée du Nouvel An au Zanzibar à Sète',
      },
      {
        title: 'Soirée entre amis',
        description: 'Format intimiste ou grand groupe, programmation adaptée à votre cercle.',
        image: '/elements/photos/dj-mixage-live-eclairage-bleu.webp',
        imageAlt: 'DJ Mika en plein mixage lors d’une soirée privée',
      },
    ],
  },
  music: {
    title: 'Votre musique, vos règles',
    lead: 'La programmation est construite avec vous, pas imposée.',
    blocks: [
      {
        title: 'Vos incontournables',
        description: 'Les morceaux et styles que vous souhaitez absolument entendre.',
      },
      {
        title: 'Vos interdits',
        description: 'Les titres et styles que vous préférez éviter.',
      },
      {
        title: 'L\'ambiance en direct',
        description: 'La piste s\'adapte aux réactions des invités et au rythme de la soirée.',
      },
    ],
  },
  options: {
    title: 'Options populaires pour une soirée privée',
    lead: 'Quelques prestations souvent demandées, à combiner selon votre projet.',
    items: [
      {
        title: 'Karaoké',
        description: 'Un créneau participatif pour varier la soirée.',
        image: {
          src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
          alt: 'Poste DJ avec microphone pour animation karaoké',
        },
        helpKey: 'karaoke',
      },
      {
        title: 'Photobooth & vidéobooth',
        description: 'Des souvenirs instantanés pour vos invités.',
        image: {
          src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
          alt: 'Vidéobooth lors d\'une soirée privée',
        },
        helpKey: 'videobooth',
      },
      {
        title: 'Éclairage & effets',
        description: 'Mise en lumière du lieu et effets visuels.',
        image: {
          src: '/elements/photos/dj-mixage-live-eclairage-bleu.webp',
          alt: 'DJ en mixage avec éclairage bleu lors d\'une soirée privée',
        },
        helpKey: 'eclairage',
      },
      {
        title: 'Blind test & quiz',
        description: 'Animations ludiques pour impliquer vos invités.',
        image: {
          src: '/elements/gallery/anniversaire-18ans-jeunes-ambiances-lumiere.jpg',
          alt: 'Ambiance lumineuse lors d\'une soirée entre amis',
        },
        helpKey: 'quiz',
      },
      {
        title: 'Sonorisation extérieure',
        description: 'Installation adaptée pour jardin ou terrasse.',
        image: {
          src: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
          alt: 'Sonorisation et éclairage pour une fête en extérieur',
        },
      },
      {
        title: 'Musicien live',
        description: 'Un moment live pour marquer le début de la soirée dansante.',
        image: {
          src: '/elements/gallery/mariage-laura-maxime-exterieur-animation.webp',
          alt: 'Animation musicale en extérieur lors d\'une soirée privée',
        },
        helpKey: 'musicien-live',
      },
    ],
  },
  caseStudy: {
    title: 'Exemple de prestation',
    meta: ['Anniversaire de famille - Sorgues', '2025', 'Prestation en extérieur'],
    brief:
      'Anniversaire de famille en jardin avec sonorisation et éclairage adaptés au lieu, programmation sur mesure pour tous les âges.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Éclairage', 'Programmation sur mesure'],
    outcome:
      'Ambiance fluide du cocktail à la piste pleine, installation discrète et adaptée au jardin.',
    image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
    imageAlt: 'Sonorisation et éclairage pour l’anniversaire de Louis à Sorgues',
  },
  gallery: {
    anchorId: 'galerie-soiree-privee',
    title: 'Galerie soirées privées',
    lead: 'Quelques instants capturés lors de soirées privées animées en Provence.',
    ariaLabel: 'Galerie photos de soirées privées',
    getItems: getSoireePriveeGalleryItems,
  },
  testimonialsSection: {
    title: 'Avis après soirées privées',
    lead: 'Retours d\'expérience après des prestations en soirée privée.',
    getItems: () =>
      testimonials.filter((t) => t.context?.toLowerCase().includes('soirée privée')),
  },
  faq: {
    title: 'Questions fréquentes - Soirée privée',
    items: soireePriveeFaq,
  },
  cta: {
    title: 'Prêt à imaginer votre soirée ?',
    lead: 'Décrivez votre projet en quelques minutes : date, lieu, ambiance et prestations souhaitées.',
    href: '/mon-evenement?type=soiree-privee',
    label: 'Construire ma soirée privée',
  },
};
