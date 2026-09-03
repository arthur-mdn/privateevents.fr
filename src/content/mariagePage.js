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
  sections: [
    {
      type: 'editorialSplit',
      id: 'mariage-pourquoi',
      title: 'Pourquoi confier la musique de votre mariage',
      lead:
        'Une journée de mariage enchaîne des moments très différents. La musique accompagne le premier rituel, le cocktail, le repas et la piste, sans rupture de volume ni d’ambiance.',
      body: [
        'Mika prépare avec vous le déroulé, les musiques incontournables et les moments à ne pas rater, puis s’adapte au rythme réel de la journée. Un interlocuteur unique pour la régie musicale, les discours et les temps forts.',
      ],
      points: [
        {
          title: 'Avant le jour J',
          description: 'Échanges sur le lieu, les horaires, les styles et les surprises prévues avec les témoins.',
        },
        {
          title: 'Sur place',
          description: 'Installation anticipée, tests, coordination avec le traiteur et le photographe si besoin.',
        },
        {
          title: 'Pendant la soirée',
          description: 'La piste suit les invités sans perdre les moments préparés (entrée, ouverture de bal).',
        },
      ],
      image: '/elements/gallery/mariage-laura-maxime-ceremonie-piscine.webp',
      imageAlt: 'Sonorisation de cérémonie laïque au bord de la piscine',
    },
    {
      type: 'moments',
      id: 'mariage-moments',
      title: 'Les temps forts de la journée',
      lead:
        'Chaque phase a son volume, son style et ses contraintes. Voici comment la régie s’adapte.',
      items: [
        {
          title: 'Cérémonie',
          description:
            'Sonorisation discrète pour la cérémonie laïque ou religieuse, musique d’entrée et de sortie.',
          image: '/elements/gallery/mariage-laura-maxime-ceremonie-piscine.webp',
          imageAlt: 'Sonorisation de cérémonie laïque au bord de la piscine',
        },
        {
          title: 'Cocktail',
          description: 'Ambiance légère pour laisser place aux échanges, volume calé sur l’espace cocktail.',
          image: '/elements/gallery/mariage-laura-maxime-exterieur.webp',
          imageAlt: 'Ambiance musicale en extérieur pendant le cocktail d’un mariage',
        },
        {
          title: 'Repas',
          description:
            'Fond musical discret à table, sans couvrir les conversations ni les moments à table.',
          image: '/elements/gallery/mariage-table-repas.webp',
          imageAlt: 'Table de mariage dressée pour le repas dans une salle en pierres apparentes',
        },
        {
          title: 'Discours',
          description:
            'Micro prêt pour les toasts et interventions : les invités prennent la parole sans couper l’ambiance.',
          image: '/elements/gallery/mariage-table-discours.webp',
          imageAlt: 'Invité au micro lors d’un discours pendant le repas de mariage',
        },
        {
          title: 'Entrée des mariés',
          description:
            'Entrée en salle adaptée à vos goûts : une ou plusieurs entrées, haie d’honneur, animations avant la soirée.',
          image: '/elements/gallery/mariage-hola-entree-des-maries.webp',
          imageAlt: 'Mariée passant sous une haie d’honneur formée par les invités à l’entrée en salle',
        },
        {
          title: 'Soirée dansante',
          description:
            'Programmation sur mesure, lumières et gestion des temps forts jusqu’au bout de la nuit.',
          image: '/elements/gallery/mariage-dansant-lumieres.jpg',
          imageAlt: 'Piste de danse animée lors d’un mariage',
        },
      ],
    },
    {
      type: 'music',
      id: 'mariage-music',
      title: 'Préparer les temps forts sans figer la soirée',
      lead:
        'Avant le jour J, vous pouvez transmettre vos incontournables, les styles à éviter et les morceaux prévus pour l’entrée des mariés ou l’ouverture de bal.',
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
    {
      type: 'timeline',
      id: 'mariage-timeline',
      title: 'Comment se prépare un mariage avec Private Events',
      lead: 'Un déroulé simple, du premier échange jusqu’à la soirée.',
      steps: [
        {
          step: '01',
          title: 'Brief de la journée',
          description: 'Type de cérémonie, lieux, horaires, nombre d’invités, styles et contraintes techniques.',
        },
        {
          step: '02',
          title: 'Construction de la régie',
          description: 'DJ, sonorisation, éclairage, micros pour discours et options (étincelles, karaoké…).',
        },
        {
          step: '03',
          title: 'Calage des temps forts',
          description: 'Entrée des mariés, ouverture de bal, surprises témoins, coordination traiteur / photographe.',
        },
        {
          step: '04',
          title: 'Le jour J',
          description: 'Installation avant les invités, tests, animation et gestion des moments clés.',
        },
      ],
    },
    {
      type: 'options',
      id: 'mariage-options',
      title: 'Options souvent choisies pour un mariage',
      lead: 'Ouverture de bal, entrée des mariés, micros, étincelles, photobooth ou karaoké : à combiner selon votre projet.',
      items: [
        {
          title: 'Ouverture de bal',
          description: 'Musique personnalisée, effets visuels et coordination du moment.',
          image: {
            src: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
            alt: 'Ouverture de bal avec effets visuels lors d’un mariage',
          },
        },
        {
          title: 'Entrée des mariés',
          description:
            'Mise en musique et animations selon vos envies : une ou plusieurs entrées, haie d’honneur, jeux.',
          image: {
            src: '/elements/gallery/mariage-hola-entree-des-maries.webp',
            alt: 'Mariée passant sous une haie d’honneur formée par les invités à l’entrée en salle',
          },
          helpKey: 'hola-entree',
        },
        {
          title: 'Micro pour les discours',
          description: 'Sonorisation dédiée aux toasts et interventions pendant le repas.',
          image: {
            src: '/elements/gallery/mariage-table-discours.webp',
            alt: 'Invité au micro lors d’un discours pendant le repas de mariage',
          },
          helpKey: 'micro-discours',
        },
        {
          title: 'Étincelles froides',
          description: 'Mise en scène des temps forts avec effets adaptés au lieu.',
          image: {
            src: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
            alt: 'Machine à étincelles froides lors d’une ouverture de bal',
          },
          helpKey: 'etincelles',
        },
        {
          title: 'Photobooth & vidéobooth',
          description: 'Souvenirs instantanés pour vos invités, coordonnés avec des partenaires habituels.',
          image: {
            src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
            alt: 'Vidéobooth lors d’une soirée de mariage',
          },
          helpKey: 'videobooth',
        },
        {
          title: 'Karaoké',
          description: 'Un créneau participatif en fin de soirée, sans casser l’ambiance de la piste.',
          image: {
            src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
            alt: 'Poste DJ avec microphone pour animation karaoké',
          },
          helpKey: 'karaoke',
        },
      ],
    },
    {
      type: 'caseStudy',
      id: 'mariage-case',
      title: 'Exemple : mariage à Avignon',
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
      imageAlt: 'Ouverture de bal avec effets visuels lors d’un mariage à Avignon',
    },
    {
      type: 'gallery',
      id: 'mariage-gallery',
      anchorId: 'galerie-mariage',
      title: 'Galerie mariage',
      lead: 'Quelques instants capturés lors de mariages animés en Provence.',
      ariaLabel: 'Galerie photos de mariages',
      getItems: getMariageGalleryItems,
    },
    {
      type: 'testimonials',
      id: 'mariage-avis',
      title: 'Avis de mariés',
      lead: 'Retours d’expérience après des prestations mariage.',
      getItems: () => testimonials.filter((t) => t.context?.toLowerCase().includes('mariage')),
    },
    {
      type: 'faq',
      id: 'mariage-faq',
      title: 'Questions fréquentes - Mariage',
      items: mariageFaq,
    },
    {
      type: 'cta',
      id: 'mariage-cta',
      title: 'Prêt à imaginer le déroulé de votre mariage ?',
      lead: 'Indiquez la date, le lieu et les temps forts prévus. Nous revenons vers vous avec une proposition adaptée.',
      href: '/mon-evenement?type=mariage',
      label: 'Construire mon mariage',
    },
  ],
};
