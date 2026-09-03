import { getSoireePriveeGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const soireePriveeFaq = [
  {
    question: 'Le lieu est déjà équipé : pouvez-vous intervenir en plug and play ?',
    answer:
      'Oui. Mika peut intervenir uniquement avec sa régie ou s\'intégrer à l\'installation existante d\'un bar, d\'une salle ou d\'un lieu déjà équipé. Une formule complète (sono + éclairage) reste possible si le lieu n\'est pas équipé.',
  },
  {
    question: 'Quels formats de soirée privée couvrez-vous ?',
    answer:
      'Villa, pool party, garden party, cocktail, soirée à thème, réception privée, after ou soirée entre amis : la prestation s\'adapte au lieu et au format.',
  },
  {
    question: 'Comment gérer le voisinage ou un extérieur ?',
    answer:
      'Le volume et le placement du matériel sont anticipés selon le lieu. Les contraintes de voisinage ou d\'autorisation sont prises en compte lors de la préparation.',
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer:
      'Principalement en Provence / PACA. D\'autres déplacements sont possibles selon la date et le projet.',
  },
  {
    question: 'Comment obtenir une proposition pour ma soirée ?',
    answer:
      'Utilisez le configurateur en précisant le format (villa, lieu équipé, extérieur…) et les options. Devis personnalisé selon le projet.',
  },
];

export const soireePriveeLandingContent = {
  hero: {
    titleId: 'soiree-privee-hero-title',
    eyebrow: 'Soirée privée • Provence',
    title: 'Une soirée privée flexible, même sur un lieu déjà équipé.',
    intro:
      'Villa, cocktail, pool party ou établissement : DJ en formule complète, ou plug and play si le lieu dispose déjà de sonorisation et d\'éclairage.',
    reassurance: ['Formule complète ou plug and play', 'Formats libres', 'Lieu intérieur ou extérieur'],
    image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.jpg',
    primaryCta: { href: '/mon-evenement?type=soiree-privee', label: 'Parler de ma soirée' },
    secondaryCta: { href: '#galerie-soiree-privee', label: 'Voir des réalisations' },
  },
  promesse: {
    title: 'Flexibilité du format',
    lead:
      'Le lieu est déjà équipé ? Mika peut intervenir uniquement avec sa régie ou s\'intégrer à l\'installation existante. Besoin d\'un dispositif complet ? Sonorisation et éclairage peuvent être prévus selon la configuration.',
    points: [
      {
        title: 'Lieu et configuration',
        description: 'Salle, jardin, terrasse, villa ou établissement : le format technique suit le lieu.',
      },
      {
        title: 'Formule complète ou plug and play',
        description: 'Matériel fourni et installé, ou intervention sur une installation déjà présente.',
      },
      {
        title: 'Options complémentaires',
        description: 'Karaoké, effets, vidéobooth ou mise en relation artistes selon le projet.',
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
    title: 'Ambiance libre, cadre technique clair',
    lead: 'Vous précisez les styles souhaités et le format technique : formule complète ou plug and play sur lieu équipé.',
    blocks: [
      {
        title: 'Styles et titres',
        description: 'Les ambiances à prioriser et celles à éviter selon vos invités.',
      },
      {
        title: 'Lieu équipé ou non',
        description: 'Intervention avec matériel complet, ou intégration à une installation déjà présente.',
      },
      {
        title: 'Adaptation en direct',
        description: 'La piste suit le rythme réel de la soirée, villa, cocktail ou after.',
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
          src: '/elements/photos/prestations/quiz-musical-large-avec-public.webp',
          alt: 'Quiz musical et blind test animé devant le public lors d’une soirée privée',
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
