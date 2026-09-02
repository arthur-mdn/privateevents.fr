import { getMariageGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const mariageFaq = [
  {
    question: 'Intervenez-vous pour toute la journée de mariage ?',
    answer:
      'Oui, selon votre projet : cérémonie, cocktail, repas et soirée dansante peuvent être couverts. La prestation est adaptée à vos besoins et au lieu.',
  },
  {
    question: 'Comment se déroule la préparation musicale ?',
    answer:
      'Un échange en amont permet de définir vos goûts, vos invités et vos temps forts. Une playlist de référence est construite ensemble, puis ajustée en direct le jour J.',
  },
  {
    question: 'Peut-on combiner DJ et musicien live ?',
    answer:
      'Oui, un musicien live peut intervenir au cocktail ou pour l\'ouverture de bal, en complément de la prestation DJ.',
  },
  {
    question: 'Dans quelles zones intervenez-vous pour un mariage ?',
    answer:
      'Principalement le Vaucluse, le Luberon, le Var et les départements limitrophes en Provence-Alpes-Côte d\'Azur. D\'autres déplacements sont possibles sur accord préalable.',
  },
  {
    question: 'Comment obtenir une proposition pour notre mariage ?',
    answer:
      'Utilisez le configurateur en précisant la date, le lieu et vos envies, ou contactez-nous directement. Une réponse personnalisée vous est adressée après étude de votre projet.',
  },
];

export const mariageLandingContent = {
  hero: {
    titleId: 'mariage-hero-title',
    eyebrow: 'Mariage • Sud de la France',
    title: 'Votre mariage, une soirée pensée autour de vous.',
    intro:
      'De la cérémonie au dernier morceau : animation DJ, sonorisation, éclairage et prestations complémentaires pour un déroulement fluide et une ambiance qui vous ressemble.',
    reassurance: ['Programmation sur mesure', 'Coordination des temps forts', 'Prestations complémentaires'],
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
    lead: 'Cérémonie, cocktail, repas ou soirée dansante : une prestation adaptée à chaque phase.',
    items: [
      {
        title: 'Cérémonie',
        description:
          'Sonorisation discrète pour la cérémonie laïque ou religieuse, musique d\'entrée et de sortie.',
        image: '/elements/gallery/mariage-interieur-lumieres-dynamiques.jpg',
        imageAlt: 'DJ en prestation de mariage avec éclairages',
      },
      {
        title: 'Cocktail',
        description: 'Ambiance légère et chaleureuse, volume adapté aux échanges entre invités.',
        image: '/elements/gallery/mariage-avignon-2025-machine-a-fumee.jpg',
        imageAlt: 'Ouverture de bal avec fumée lourde et lumières',
      },
      {
        title: 'Repas',
        description: 'Musique de fond discrète, micro pour les discours et interventions si nécessaire.',
        image: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
        imageAlt: 'Moment d\'ouverture de bal avec effets visuels',
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
    title: 'Votre musique, vos règles',
    lead: 'La programmation est construite avec vous, pas imposée.',
    blocks: [
      {
        title: 'Vos incontournables',
        description: 'Les morceaux, artistes et styles que vous souhaitez absolument entendre.',
      },
      {
        title: 'Vos interdits',
        description: 'Les titres et styles que vous préférez éviter.',
      },
      {
        title: 'L\'ambiance en direct',
        description: 'La piste s\'adapte aux réactions des invités et aux différents moments de la soirée.',
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
      },
      {
        title: 'Karaoké',
        description: 'Un créneau participatif pour varier la soirée sans casser l\'ambiance.',
      },
      {
        title: 'Photobooth & vidéobooth',
        description: 'Des souvenirs instantanés que vos invités repartent avec.',
      },
      {
        title: 'Musicien live',
        description: 'Saxophone, violon ou autre instrument pour le cocktail ou l\'ouverture de bal.',
      },
      {
        title: 'Drag queen',
        description: 'Une performance live pour marquer un moment fort de la soirée.',
      },
      {
        title: 'Étincelles froides',
        description: 'Mise en scène des temps forts avec effets visuels adaptés au lieu.',
      },
      {
        title: 'Machine à fumée',
        description: 'Effet de volume et d\'ambiance pour sublimer lumières et ouvertures de bal.',
      },
      {
        title: 'Machine à bulles',
        description: 'Effet léger et festif pour cocktail, piste ou photos.',
      },
      {
        title: 'Sonorisation cérémonie',
        description: 'Diffusion sonore pour la cérémonie en extérieur ou dans un lieu non équipé.',
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
