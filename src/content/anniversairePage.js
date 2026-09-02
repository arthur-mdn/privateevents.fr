import { getAnniversaireGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const anniversaireFaq = [
  {
    question: 'Peut-on organiser un anniversaire en extérieur ?',
    answer:
      'Oui, la sonorisation et l\'éclairage sont adaptés au lieu : jardin, terrasse ou salle. Un échange préalable permet d\'anticiper les contraintes du site.',
  },
  {
    question: 'Comment adapter la musique à tous les âges ?',
    answer:
      'La programmation est construite avec vous en fonction de vos invités : enfants, parents, grands-parents. Les styles et les moments participatifs (karaoké, blind test) sont ajustés à votre public.',
  },
  {
    question: 'Proposez-vous des animations pour les enfants ?',
    answer:
      'Oui, via le réseau de partenaires : garde d\'enfants, animations adaptées ou espace dédié pendant la soirée des adultes.',
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer:
      'Principalement le Vaucluse, le Luberon, le Var et les départements limitrophes en Provence-Alpes-Côte d\'Azur. D\'autres déplacements sont possibles sur accord préalable.',
  },
  {
    question: 'Comment obtenir une proposition pour mon anniversaire ?',
    answer:
      'Utilisez le configurateur en précisant la date, le lieu et vos envies, ou contactez-nous directement. Une réponse personnalisée vous est adressée après étude de votre projet.',
  },
];

export const anniversaireLandingContent = {
  hero: {
    titleId: 'anniversaire-hero-title',
    eyebrow: 'Anniversaire • Sud de la France',
    title: 'Votre anniversaire, une fête à votre image.',
    intro:
      'DJ, sonorisation, éclairage et animations pour célébrer avec vos proches. Une ambiance adaptée à vos invités, votre génération et le format de votre soirée.',
    reassurance: ['Programmation sur mesure', 'Tous les formats', 'Animations modulables'],
    image: '/elements/gallery/anniversaire-50-ans-loriol-2026.jpg',
    primaryCta: { href: '/mon-evenement?type=anniversaire', label: 'Parler de mon anniversaire' },
    secondaryCta: { href: '#galerie-anniversaire', label: 'Voir des réalisations' },
  },
  promesse: {
    title: 'Une fête qui vous ressemble',
    lead:
      'Que ce soit pour 18, 30, 40, 50 ans ou plus, la prestation est construite autour de vos goûts, de vos invités et du déroulement que vous imaginez.',
    points: [
      {
        title: 'Ambiance sur mesure',
        description: 'Styles musicaux, volume et rythme adaptés à votre public et au lieu.',
      },
      {
        title: 'Moments participatifs',
        description: 'Karaoké, blind test ou quiz pour impliquer vos invités sans casser l\'ambiance.',
      },
      {
        title: 'Prestations complémentaires',
        description: 'Photobooth, vidéobooth, musicien live ou effets visuels selon votre budget.',
      },
    ],
  },
  timeline: {
    title: 'Déroulement d\'un anniversaire avec Private Events',
    lead: 'De la préparation au jour J, un accompagnement structuré pour que vous puissiez profiter de votre fête.',
    steps: [
      {
        step: '01',
        title: 'Premiers échanges',
        description: 'Date, lieu, nombre d\'invités, tranche d\'âge, styles musicaux et contraintes.',
      },
      {
        step: '02',
        title: 'Construction de la prestation',
        description: 'DJ, sonorisation, éclairage, animations et options complémentaires.',
      },
      {
        step: '03',
        title: 'Préparation détaillée',
        description: 'Playlist, temps forts, coordination avec le lieu et les autres prestataires.',
      },
      {
        step: '04',
        title: 'Le jour J',
        description: 'Installation, tests, animation musicale et gestion des moments clés de la soirée.',
      },
    ],
  },
  moments: {
    title: 'Chaque moment de votre fête',
    lead: 'Apéritif, repas ou soirée dansante : une prestation adaptée à chaque phase.',
    items: [
      {
        title: 'Apéritif & accueil',
        description: 'Ambiance légère et chaleureuse pour accueillir vos invités.',
        image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
        imageAlt: 'Sonorisation et éclairage pour un anniversaire de famille en extérieur',
      },
      {
        title: 'Repas',
        description: 'Musique de fond discrète, micro pour les discours et interventions.',
        image: '/elements/gallery/anniversaire-50-ans-loriol-2026.jpg',
        imageAlt: 'Installation DJ pour un anniversaire de 50 ans',
      },
      {
        title: 'Soirée dansante',
        description: 'Programmation sur mesure et jeux de lumières jusqu\'au bout de la nuit.',
        image: '/elements/gallery/anniversaire-18ans-jeunes-ambiances-lumiere.jpg',
        imageAlt: 'Ambiance lumineuse et jeux de lumières pour une soirée dansante',
      },
      {
        title: 'Animations',
        description: 'Karaoké, blind test ou moments participatifs pour varier la soirée.',
        image: '/elements/photos/prestations/quiz-musical-large-avec-public.webp',
        imageAlt: 'Quiz musical et blind test animé devant les invités lors d’un anniversaire',
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
        description: 'La piste s\'adapte aux réactions des invités et aux différents moments.',
      },
    ],
  },
  options: {
    title: 'Options populaires pour un anniversaire',
    lead: 'Quelques prestations souvent demandées, à combiner selon votre projet.',
    items: [
      {
        title: 'Karaoké',
        description: 'Un créneau participatif pour impliquer vos invités.',
        image: {
          src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
          alt: 'Poste DJ avec microphone pour animation karaoké',
        },
        helpKey: 'karaoke',
      },
      {
        title: 'Photobooth & vidéobooth',
        description: 'Des souvenirs instantanés que vos invités repartent avec.',
        image: {
          src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
          alt: 'Vidéobooth lors d\'une soirée d\'anniversaire',
        },
        helpKey: 'videobooth',
      },
      {
        title: 'Blind test',
        description: 'Animation ludique adaptée à votre génération et à vos invités.',
        image: {
          src: '/elements/photos/prestations/quiz-musical-gros-plan-net.webp',
          alt: 'Gros plan sur le filet de quiz musical pour un blind test d’anniversaire',
        },
        helpKey: 'quiz',
      },
      {
        title: 'Éclairage & effets',
        description: 'Mise en lumière du lieu et effets visuels pour les temps forts.',
        image: {
          src: '/elements/gallery/mariage-interieur-lumieres-dynamiques.jpg',
          alt: 'Éclairages dynamiques et jeux de lumières en salle',
        },
        helpKey: 'eclairage',
      },
      {
        title: 'Musicien live',
        description: 'Un moment live pour marquer l\'ouverture de la soirée dansante.',
        image: {
          src: '/elements/gallery/mariage-laura-maxime-exterieur-animation.webp',
          alt: 'Animation musicale en extérieur lors d\'un événement festif',
        },
        helpKey: 'musicien-live',
      },
      {
        title: 'Sonorisation extérieure',
        description: 'Installation adaptée pour jardin, terrasse ou pool party.',
        image: {
          src: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
          alt: 'Sonorisation et éclairage pour un anniversaire en extérieur',
        },
      },
    ],
  },
  caseStudy: {
    title: 'Exemple de prestation',
    meta: ['Anniversaire 50 ans - Loriol-du-Comtat', 'Printemps 2026', 'Grande fête familiale'],
    brief:
      'Célébration des 50 ans avec programmation adaptée à tous les âges, ambiance très participative et soirée dansante jusqu\'au bout de la nuit.',
    prestations: ['DJ & éclairage', 'Sonorisation', 'Karaoké', 'Programmation sur mesure'],
    outcome:
      'Ambiance fluide du cocktail à la piste pleine. L\'hôte a pu profiter de sa soirée sans gérer la technique.',
    image: '/elements/gallery/anniversaire-50-ans-loriol-2026.jpg',
    imageAlt: 'Installation DJ pour un anniversaire de 50 ans à Loriol-du-Comtat',
  },
  gallery: {
    anchorId: 'galerie-anniversaire',
    title: 'Galerie anniversaire',
    lead: 'Quelques instants capturés lors d\'anniversaires animés en Provence.',
    ariaLabel: 'Galerie photos d\'anniversaires',
    getItems: getAnniversaireGalleryItems,
  },
  testimonialsSection: {
    title: 'Avis après anniversaires',
    lead: 'Retours d\'expérience après des prestations anniversaire.',
    getItems: () =>
      testimonials.filter((t) => t.context?.toLowerCase().includes('anniversaire')),
  },
  faq: {
    title: 'Questions fréquentes - Anniversaire',
    items: anniversaireFaq,
  },
  cta: {
    title: 'Prêt à imaginer votre anniversaire ?',
    lead: 'Décrivez votre projet en quelques minutes : date, lieu, ambiance et prestations souhaitées.',
    href: '/mon-evenement?type=anniversaire',
    label: 'Construire mon anniversaire',
  },
};
