export const eventTypeOptions = [
  { id: 'mariage', label: 'Mariage', description: 'Cérémonie, cocktail, repas et soirée dansante.' },
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

export const welcomeStep = {
  heading: 'Construire mon événement',
  intro:
    'Quelques questions pour comprendre votre projet et vous répondre de façon personnalisée.',
};

// TODO: popover d'aide (?) sur les options de prestation
export const configuratorSteps = [
  { id: 1, title: 'Type d\'événement', heading: 'Quel événement préparez-vous ?' },
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
