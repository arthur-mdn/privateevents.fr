export const eventTypeOptions = [
  {
    id: 'mariage',
    label: 'Mariage',
    description: 'Cérémonie, cocktail, repas, discours, entrée des mariés et soirée dansante.',
  },
  { id: 'anniversaire', label: 'Anniversaire', description: 'Fête privée adaptée à vos invités.' },
  { id: 'soiree-privee', label: 'Soirée privée', description: 'Ambiance sur mesure pour votre événement.' },
  { id: 'entreprise', label: 'Entreprise', description: 'Soirée corporate, séminaire ou inauguration.' },
  { id: 'autre', label: 'Autre', description: 'Un projet différent ? Décrivez-le nous.' },
];

export const guestCountOptions = [
  { id: 'moins-30', label: 'Moins de 30' },
  { id: '30-60', label: '30 à 60' },
  { id: '60-100', label: '60 à 100' },
  { id: '100-150', label: '100 à 150' },
  { id: '150-250', label: '150 à 250' },
  { id: '250-plus', label: '250+' },
  { id: 'unknown', label: 'Je ne sais pas encore' },
];

export const ambianceOptions = [
  { id: 'chic', label: 'Chic & élégante' },
  { id: 'festive', label: 'Très festive' },
  { id: 'generaliste', label: 'Généraliste' },
  { id: 'club', label: 'Club' },
  { id: '80-90', label: 'Années 80 / 90' },
  { id: '2000', label: 'Années 2000' },
  { id: 'actuelle', label: 'Actuelle' },
  { id: 'lounge', label: 'Lounge' },
  { id: 'guinguette', label: 'Guinguette' },
  { id: 'autre', label: 'Autre' },
  { id: 'discuter', label: 'Je préfère en discuter avec vous' },
];

export const MAX_AMBIANCE_SELECTIONS = 5;

export const prestationGroups = [
  {
    id: 'musique',
    title: 'Musique',
    options: [
      { id: 'dj', label: 'DJ' },
      { id: 'sono-cocktail', label: 'Sonorisation cocktail' },
      { id: 'sono-ceremonie', label: 'Sonorisation cérémonie' },
      { id: 'micro-discours', label: 'Micro pour les discours' },
      { id: 'hola-entree', label: 'Entrée des mariés' },
      { id: 'karaoke', label: 'Karaoké' },
      { id: 'quiz', label: 'Quiz / blind test' },
    ],
  },
  {
    id: 'souvenirs',
    title: 'Souvenirs',
    options: [
      { id: 'photobooth', label: 'Photobooth' },
      { id: 'videobooth', label: 'Vidéobooth' },
      { id: 'photographe', label: 'Photographe' },
      { id: 'diaporama', label: 'Diaporama' },
    ],
  },
  {
    id: 'artistes',
    title: 'Artistes',
    options: [
      { id: 'musicien-live', label: 'Musicien live' },
      { id: 'drag-queen', label: 'Drag queen' },
      { id: 'magicien', label: 'Magicien' },
      { id: 'mentaliste', label: 'Mentaliste' },
      { id: 'hypnose', label: 'Hypnose' },
      { id: 'autre-artiste', label: 'Autre artiste' },
    ],
  },
  {
    id: 'mise-en-scene',
    title: 'Mise en scène',
    options: [
      { id: 'etincelles', label: 'Étincelles' },
      { id: 'decoration', label: 'Décoration' },
      { id: 'eclairage', label: 'Éclairage spécifique' },
      { id: 'machine-fumee', label: 'Machine à fumée' },
      { id: 'machine-bulles', label: 'Machine à bulles' },
      { id: 'feu-artifice', label: 'Feu d\'artifice' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    options: [
      { id: 'garde-enfants', label: 'Garde d\'enfants' },
      { id: 'personnel', label: 'Personnel' },
      { id: 'securite', label: 'Sécurité' },
    ],
  },
];

export const CONSEIL_OPTION_ID = 'conseil';

export const prestationHelp = {
  photobooth: {
    description:
      'Cabine ou borne photo pour des souvenirs imprimés ou numériques, avec accessoires et fonds personnalisables.',
    image: null,
    imageAlt: '',
    href: '/prestations#photos-video',
    linkLabel: 'Voir Photos & vidéo',
  },
  videobooth: {
    description:
      'Borne vidéo pour enregistrer des messages courts ou des clips fun. Idéal pour un livre d\'or numérique.',
    image: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
    imageAlt: 'Vidéobooth lors d’une soirée',
    href: '/prestations#photos-video',
    linkLabel: 'Voir Photos & vidéo',
  },
  diaporama: {
    description:
      'Vidéo personnalisée ou diaporama photo monté pour un temps fort (cérémonie, anniversaire, discours).',
    image: '/elements/photos/prestations/video-personnalisee-mariage-laura-maxime.gif',
    imageAlt: 'Extrait de vidéo personnalisée',
    href: '/prestations#photos-video',
    linkLabel: 'Voir Photos & vidéo',
  },
  'drag-queen': {
    description:
      'Performance drag pour un moment fort, souvent en cocktail ou en soirée. Sélection de partenaires selon votre projet.',
    image: '/elements/photos/prestations/drag-queen-aquarii-animation.webp',
    imageAlt: 'Spectacle drag queen Aquarii',
    href: '/prestations#artistes',
    linkLabel: 'Voir Artistes & performances',
  },
  'musicien-live': {
    description:
      'Musicien ou groupe live pour cocktail, cérémonie ou ouverture de bal, coordonné avec la prestation DJ.',
    image: null,
    imageAlt: '',
    href: '/prestations#artistes',
    linkLabel: 'Voir Artistes & performances',
  },
  magicien: {
    description:
      'Magie de proximité ou spectacle court pour animer le cocktail ou un temps calme du repas.',
    image: null,
    imageAlt: '',
    href: '/prestations#artistes',
    linkLabel: 'Voir Artistes & performances',
  },
  mentaliste: {
    description:
      'Numéro de mentalisme pour surprendre vos invités lors d\'un cocktail ou d\'un événement premium.',
    image: null,
    imageAlt: '',
    href: '/prestations#artistes',
    linkLabel: 'Voir Artistes & performances',
  },
  hypnose: {
    description:
      'Spectacle d\'hypnose de divertissement, adapté selon le format et le public de votre soirée.',
    image: null,
    imageAlt: '',
    href: '/prestations#artistes',
    linkLabel: 'Voir Artistes & performances',
  },
  'autre-artiste': {
    description:
      'Humoriste, danseurs ou autre performance : on sélectionne un partenaire selon votre thème et budget.',
    image: null,
    imageAlt: '',
    href: '/prestations#artistes',
    linkLabel: 'Voir Artistes & performances',
  },
  etincelles: {
    description:
      'Étincelles froides pour ouverture de bal ou temps fort photo, en intérieur ou extérieur selon le lieu.',
    image: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.jpg',
    imageAlt: 'Machine à étincelles froides',
    href: '/prestations#mise-en-scene',
    linkLabel: 'Voir Mise en scène',
  },
  'machine-fumee': {
    description:
      'Fumée lourde ou machine à fumée pour sublimer les lumières et les ouvertures de bal.',
    image: '/elements/gallery/mariage-avignon-2025-machine-a-fumee.jpg',
    imageAlt: 'Ouverture de bal avec fumée',
    href: '/prestations#mise-en-scene',
    linkLabel: 'Voir Mise en scène',
  },
  'machine-bulles': {
    description:
      'Machine à bulles pour une ambiance légère, souvent appréciée en cocktail ou pour un temps photo.',
    image: null,
    imageAlt: '',
    href: '/prestations#mise-en-scene',
    linkLabel: 'Voir Mise en scène',
  },
  eclairage: {
    description:
      'Éclairage d\'ambiance, projecteurs et lasers pour transformer le lieu et marquer les temps forts.',
    image: '/elements/gallery/mariage-interieur-lumieres-dynamiques.jpg',
    imageAlt: 'Éclairages dynamiques et lasers',
    href: '/prestations#eclairage',
    linkLabel: 'Voir Éclairage',
  },
  'feu-artifice': {
    description:
      'Feu d\'artifice extérieur possible sous réserve des autorisations et contraintes du lieu.',
    image: null,
    imageAlt: '',
    href: '/prestations#mise-en-scene',
    linkLabel: 'Voir Mise en scène',
  },
  karaoke: {
    description:
      'Karaoké animé au micro, avec matériel dédié, pour un créneau participatif dans la soirée.',
    image: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
    imageAlt: 'Poste DJ avec microphone pour animation karaoké',
    href: '/prestations#animations',
    linkLabel: 'Voir Animations',
  },
  'micro-discours': {
    description:
      'Micro dédié pour les toasts et interventions pendant le repas, sans interrompre l\'ambiance musicale de fond.',
    image: '/elements/gallery/mariage-table-discours.webp',
    imageAlt: 'Invité au micro lors d’un discours pendant le repas de mariage',
    href: '/prestations#sonorisation',
    linkLabel: 'Voir Sonorisation',
  },
  'hola-entree': {
    description:
      'Mise en musique et animation de votre entrée en salle, adaptée à vos goûts. Possibilité de plusieurs entrées, animations ou mini-jeux.',
    image: '/elements/gallery/mariage-hola-entree-des-maries.webp',
    imageAlt: 'Mariée passant sous une haie d’honneur formée par les invités à l’entrée en salle',
    href: '/prestations#animations',
    linkLabel: 'Voir Animations',
  },
  quiz: {
    description:
      'Quiz ou blind test animé pour impliquer vos invités sans casser le rythme de la soirée.',
    image: null,
    imageAlt: '',
    href: '/prestations#animations',
    linkLabel: 'Voir Animations',
  },
};

export const configuratorSteps = [
  {
    id: 1,
    title: 'Type d\'événement',
    heading: 'Quel événement préparez-vous ?',
    intro: 'Quelques questions pour comprendre votre projet.',
  },
  { id: 2, title: 'Votre événement', heading: 'Parlez-nous de votre événement' },
  { id: 3, title: 'Ambiance', heading: 'Quelle ambiance imaginez-vous ?' },
  { id: 4, title: 'Prestations', heading: 'Que souhaitez-vous prévoir ?' },
  { id: 5, title: 'Détails', heading: 'Y a-t-il quelque chose d\'important à savoir ?' },
  { id: 6, title: 'Contact', heading: 'Où pouvons-nous vous répondre ?' },
];

export const eventTypeUrlMap = {
  mariage: 'mariage',
  anniversaire: 'anniversaire',
  'soiree-privee': 'soiree-privee',
  entreprise: 'entreprise',
  autre: 'autre',
};

export function getEventTypeLabel(id) {
  return eventTypeOptions.find((o) => o.id === id)?.label ?? id;
}

export function getGuestCountLabel(id) {
  return guestCountOptions.find((o) => o.id === id)?.label ?? id;
}

export function getAmbianceLabels(ids) {
  return ids.map((id) => ambianceOptions.find((o) => o.id === id)?.label ?? id);
}

export function getPrestationLabels(ids) {
  const all = prestationGroups.flatMap((g) => g.options);
  if (ids.includes(CONSEIL_OPTION_ID)) {
    return ['Je ne sais pas encore, j\'aimerais être conseillé'];
  }
  return ids.map((id) => all.find((o) => o.id === id)?.label ?? id);
}

export function buildFormMessage(data) {
  const lines = [
    '--- Configurateur Private Events ---',
    '',
    `Type d'événement : ${getEventTypeLabel(data.eventType)}`,
    `Date : ${data.noDate ? 'Pas encore de date précise' : data.date || 'Non renseignée'}`,
    `Lieu : ${data.location || 'Non renseigné'}`,
    `Nombre d'invités : ${getGuestCountLabel(data.guestCount)}`,
    '',
    `Ambiance : ${getAmbianceLabels(data.ambiance).join(', ') || 'Non renseignée'}`,
    '',
    `Prestations : ${getPrestationLabels(data.prestations).join(', ') || 'Non renseignées'}`,
    '',
    data.notes ? `Commentaires :\n${data.notes}` : '',
  ];
  return lines.filter(Boolean).join('\n');
}

export const initialFormData = {
  eventType: '',
  date: '',
  noDate: false,
  location: '',
  guestCount: '',
  ambiance: [],
  prestations: [],
  notes: '',
  name: '',
  email: '',
  phone: '',
  rgpdConsent: false,
};
