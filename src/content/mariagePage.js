import { getMariageGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const mariageFaq = [
  {
    question: 'Intervenez-vous pour toute la journée de mariage ?',
    answer:
      'Oui, selon votre projet : cérémonie, cocktail, repas, discours, entrée des mariés, ouverture de bal et soirée dansante peuvent être couverts. Plusieurs espaces ou une installation avant l\'arrivée des invités sont anticipés si besoin.',
  },
  {
    question: 'Comment préparer les temps forts sans figer la soirée ?',
    answer:
      'Vous transmettez incontournables, interdits et moments clés (entrée des mariés, ouverture de bal, surprises avec les témoins). Une base est préparée, puis la piste s\'adapte en direct.',
  },
  {
    question: 'Pouvez-vous coordonner avec le traiteur ou le photographe ?',
    answer:
      'Oui. Les horaires de discours, d\'entrée des mariés et de diffusion d\'un diaporama peuvent être calés avec les autres prestataires pour éviter les chevauchements.',
  },
  {
    question: 'Dans quelles zones intervenez-vous pour un mariage ?',
    answer:
      'Principalement en Provence / PACA : Vaucluse, Bouches-du-Rhône, Var et départements limitrophes. D\'autres déplacements sont possibles selon la date.',
  },
  {
    question: 'Comment obtenir une proposition pour notre mariage ?',
    answer:
      'Utilisez le configurateur avec la date, le lieu et le déroulé prévu. Chaque prestation fait l\'objet d\'un devis personnalisé.',
  },
];

export const mariageLandingContent = {
  hero: {
    titleId: 'mariage-hero-title',
    eyebrow: 'Mariage • Provence',
    title: 'La coordination musicale d’une journée de mariage.',
    intro:
      'Cérémonie, cocktail, repas, discours, entrée des mariés et soirée dansante : une régie préparée avec vous, puis adaptée en direct. Formule complète ou plug and play selon le lieu.',
    reassurance: ['Temps forts préparés', 'Coordination sur site', 'Options partenaires'],
    image: '/elements/gallery/mariage-dansant-lumieres.jpg',
    primaryCta: { href: '/mon-evenement?type=mariage', label: 'Parler de mon mariage' },
    secondaryCta: { href: '#galerie-mariage', label: 'Voir des réalisations' },
  },
  promesse: {
    title: 'Un interlocuteur unique pour votre journée',
    lead:
      'Private Events ne se limite pas à animer la piste. Mika prépare avec vous chaque moment musical, coordonne les temps forts et peut mobiliser des partenaires de confiance si vous le souhaitez.',
    points: [
      {
        title: 'Écoute et préparation',
        description: 'Échanges en amont sur vos goûts, vos invités, le lieu et le déroulement prévu.',
      },
      {
        title: 'Adaptation en direct',
        description: 'La programmation s\'ajuste au rythme réel de la soirée et aux réactions des invités.',
      },
      {
        title: 'Prestations complémentaires',
        description:
          'Karaoké, photobooth, vidéobooth, musiciens live, effets visuels : une offre modulable selon votre budget.',
      },
    ],
  },
  timeline: {
    title: 'Déroulement d\'un mariage avec Private Events',
    lead:
      'De la préparation au jour J, un accompagnement structuré pour que vous puissiez profiter de votre journée.',
    steps: [
      {
        step: '01',
        title: 'Premiers échanges',
        description: 'Type de cérémonie, lieu, horaires, nombre d\'invités, styles musicaux et contraintes.',
      },
      {
        step: '02',
        title: 'Construction de la prestation',
        description: 'DJ, sonorisation, éclairage, animations et options complémentaires selon votre projet.',
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
    title: 'Chaque moment de votre journée',
    lead:
      'Cérémonie, cocktail, repas, discours, entrée des mariés ou soirée dansante : une prestation adaptée à chaque phase.',
    items: [
      {
        title: 'Cérémonie',
        description:
          'Sonorisation discrète pour la cérémonie laïque ou religieuse, musique d\'entrée et de sortie.',
        image: '/elements/gallery/mariage-laura-maxime-ceremonie-piscine.webp',
        imageAlt: 'Sonorisation de cérémonie laïque au bord de la piscine',
      },
      {
        title: 'Cocktail',
        description: 'Ambiance légère et chaleureuse, volume adapté aux échanges entre invités.',
        image: '/elements/gallery/mariage-laura-maxime-exterieur.webp',
        imageAlt: 'Ambiance musicale en extérieur pendant le cocktail d’un mariage',
      },
      {
        title: 'Repas',
        description:
          'Musique de fond discrète pendant le dîner, pour laisser place aux conversations et aux moments à table.',
        image: '/elements/gallery/mariage-table-repas.webp',
        imageAlt: 'Table de mariage dressée pour le repas dans une salle en pierres apparentes',
      },
      {
        title: 'Discours',
        description:
          'Micro prêt pour les toasts et interventions : les invités prennent la parole sans couper l\'ambiance.',
        image: '/elements/gallery/mariage-table-discours.webp',
        imageAlt: 'Invité au micro lors d’un discours pendant le repas de mariage',
      },
      {
        title: 'Entrée des mariés',
        description:
          'Entrée en salle adaptée à vos goûts : une ou plusieurs entrées, animations et mini-jeux pour un moment fort avant la soirée.',
        image: '/elements/gallery/mariage-hola-entree-des-maries.webp',
        imageAlt: 'Mariée passant sous une haie d’honneur formée par les invités à l’entrée en salle',
      },
      {
        title: 'Soirée dansante',
        description:
          'Programmation sur mesure, jeux de lumières et gestion des temps forts jusqu\'au bout de la nuit.',
        image: '/elements/gallery/mariage-dansant-lumieres.jpg',
        imageAlt: 'Piste de danse animée lors d\'un mariage',
      },
    ],
  },
  music: {
    title: 'Préparer les temps forts sans figer la soirée',
    lead:
      'Avant le jour J, vous pouvez transmettre vos incontournables, les styles à éviter et les morceaux prévus pour l\'entrée des mariés ou l\'ouverture de bal.',
    blocks: [
      {
        title: 'Incontournables',
        description: 'Les titres et styles à entendre absolument, y compris pour les temps forts.',
      },
      {
        title: 'À éviter',
        description: 'Les morceaux ou genres à écarter, pour éviter les mauvaises surprises.',
      },
      {
        title: 'Adaptation en direct',
        description:
          'La piste évolue avec les invités, sans perdre les moments préparés avec vous ou les témoins.',
      },
    ],
  },
  options: {
    title: 'Options populaires pour un mariage',
    lead: 'Quelques prestations souvent demandées, à combiner selon votre projet.',
    items: [
      {
        title: 'Ouverture de bal',
        description: 'Musique personnalisée, effets visuels et coordination du moment.',
        image: {
          src: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
          alt: 'Ouverture de bal avec effets visuels lors d\'un mariage',
        },
      },
      {
        title: 'Entrée des mariés',
        description:
          'Mise en musique et animations selon vos envies : une ou plusieurs entrées, haie d\'honneur, jeux. Le format s\'adapte à vos goûts.',
        image: {
          src: '/elements/gallery/mariage-hola-entree-des-maries.webp',
          alt: 'Mariée passant sous une haie d\'honneur formée par les invités à l\'entrée en salle',
        },
        helpKey: 'hola-entree',
      },
      {
        title: 'Micro pour les discours',
        description: 'Sonorisation dédiée aux toasts et interventions pendant le repas.',
        image: {
          src: '/elements/gallery/mariage-table-discours.webp',
          alt: 'Invité au micro lors d\'un discours pendant le repas de mariage',
        },
        helpKey: 'micro-discours',
      },
      {
        title: 'Karaoké',
        description: 'Un créneau participatif pour varier la soirée sans casser l\'ambiance.',
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
          alt: 'Vidéobooth lors d\'une soirée de mariage',
        },
        helpKey: 'videobooth',
      },
      {
        title: 'Musicien live',
        description: 'Saxophone, violon ou autre instrument pour le cocktail ou l\'ouverture de bal.',
        image: {
          src: '/elements/gallery/mariage-laura-maxime-exterieur-animation.webp',
          alt: 'Animation musicale en extérieur lors d\'un mariage',
        },
        helpKey: 'musicien-live',
      },
      {
        title: 'Drag queen',
        description: 'Une performance live pour marquer un moment fort de la soirée.',
        image: {
          src: '/elements/photos/prestations/drag-queen-aquarii-animation.webp',
          alt: 'Spectacle drag queen Aquarii lors d\'une soirée',
        },
        helpKey: 'drag-queen',
      },
      {
        title: 'Étincelles froides',
        description: 'Mise en scène des temps forts avec effets visuels adaptés au lieu.',
        image: {
          src: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
          alt: 'Machine à étincelles froides lors d\'une ouverture de bal',
        },
        helpKey: 'etincelles',
      },
      {
        title: 'Machine à fumée',
        description: 'Effet de volume et d\'ambiance pour sublimer lumières et ouvertures de bal.',
        image: {
          src: '/elements/gallery/mariage-avignon-2025-machine-a-fumee.jpg',
          alt: 'Ouverture de bal avec effet de fumée',
        },
        helpKey: 'machine-fumee',
      },
      {
        title: 'Machine à bulles',
        description: 'Effet léger et festif pour cocktail, piste ou photos.',
        image: {
          src: '/elements/photos/prestations/machine-a-bulles-soiree-dansante.webp',
          alt: 'Piste de danse remplie de bulles sous éclairages violets lors d’une soirée',
        },
        helpKey: 'machine-bulles',
      },
      {
        title: 'Sonorisation cérémonie',
        description: 'Diffusion sonore pour la cérémonie en extérieur ou dans un lieu non équipé.',
        image: {
          src: '/elements/gallery/mariage-laura-maxime-ceremonie-piscine.webp',
          alt: 'Sonorisation de cérémonie laïque au bord de la piscine',
        },
      },
    ],
  },
  caseStudy: {
    title: 'Exemple de prestation',
    meta: ['Mariage - Avignon', 'Été 2025', 'Environ 120 invités'],
    brief:
      'Couple souhaitant une soirée élégante puis très festive, avec ouverture de bal mise en scène et programmation mêlant classiques et titres actuels.',
    prestations: [
      'DJ & éclairage',
      'Sonorisation cocktail',
      'Ouverture de bal',
      'Étincelles froides',
      'Karaoké en fin de soirée',
    ],
    outcome:
      'Ambiance progressive du cocktail à la piste pleine, temps forts coordonnés avec le traiteur et le lieu. Les mariés ont pu profiter de leur soirée sans gérer la technique.',
    image: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
    imageAlt: 'Ouverture de bal avec effets visuels lors d\'un mariage à Avignon',
  },
  gallery: {
    anchorId: 'galerie-mariage',
    title: 'Galerie mariage',
    lead: 'Quelques instants capturés lors de mariages animés en Provence.',
    ariaLabel: 'Galerie photos de mariages',
    getItems: getMariageGalleryItems,
  },
  testimonialsSection: {
    title: 'Avis de mariés',
    lead: 'Retours d\'expérience après des prestations mariage.',
    getItems: () => testimonials.filter((t) => t.context?.toLowerCase().includes('mariage')),
  },
  faq: {
    title: 'Questions fréquentes - Mariage',
    items: mariageFaq,
  },
  cta: {
    title: 'Prêt à imaginer votre mariage ?',
    lead: 'Décrivez votre projet en quelques minutes : date, lieu, ambiance et prestations souhaitées.',
    href: '/mon-evenement?type=mariage',
    label: 'Construire mon mariage',
  },
};
