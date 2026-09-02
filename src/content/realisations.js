import { galleryItems } from './gallery.js';
import { testimonials } from './testimonials.js';

const realisationProjectsUnsorted = [
  {
    id: 'mariage-laura-maxime-2026',
    title: 'Mariage Laura & Maxime',
    type: 'Mariage',
    location: 'Sud de la France',
    date: '2026-08-29',
    dateLabel: '29 août 2026',
    brief:
      'Sonorisation de cérémonie laïque près de la piscine, puis ambiance musicale cocktail, repas et soirée dansante.',
    prestations: ['DJ & éclairage', 'Sonorisation cérémonie', 'Cocktail', 'Soirée dansante'],
    imageIds: [
      'mariage-laura-maxime-ceremonie-piscine',
      'mariage-laura-maxime-exterieur',
      'mariage-laura-maxime-exterieur-animation',
      'mariage-laura-maxime-soiree-nuit',
    ],
    testimonialId: '2026-08-laura-maxime',
  },
  {
    id: 'anniversaire-canelle-marseille-2026',
    title: 'Anniversaire 30 ans Canelle',
    type: 'Anniversaire',
    location: 'Marseille',
    date: '2026-08-01',
    dateLabel: '1er août 2026',
    brief:
      'Anniversaire en plein air avec ambiance réunionnaise et animation vidéo personnalisée.',
    prestations: ['DJ', 'Ambiance réunionnaise', 'Animation vidéo'],
    imageIds: ['anniversaire-30-ans-canelle-marseille-plein-air'],
    testimonialId: '2026-08-canelle',
  },
  {
    id: 'fete-petanque-montpellier-2026',
    title: 'Fête annuelle pétanque',
    type: 'Soirée privée',
    location: 'Autour de Montpellier',
    date: '2026-08-15',
    dateLabel: '15 août 2026',
    brief: 'Soirée sardinade barbecue avec ambiance musicale et soirée dansante pour un club de pétanque.',
    prestations: ['DJ', 'Ambiance musicale', 'Soirée dansante'],
    imageIds: ['fete-petanque-sardinade-barbecue-montpellier'],
  },
  {
    id: 'anniversaire-mathys-saint-cyr-2026',
    title: 'Anniversaire 18 ans Mathys',
    type: 'Anniversaire',
    location: 'Saint-Cyr-sur-Mer',
    date: '2026-07-25',
    dateLabel: '25 juillet 2026',
    brief:
      'Ambiance bleue, montage et diffusion vidéo diaporama, soirée dansante shatta/latino et spectacle drag queen Aquarii.',
    prestations: ['DJ', 'Diaporama vidéo', 'Drag queen', 'Ambiance shatta/latino'],
    imageIds: [
      'anniversaire-18-ans-mathys-saint-cyr-sur-mer-ambiance',
      'anniversaire-18-ans-mathys-saint-cyr-sur-mer-drag-queen',
    ],
  },
  {
    id: 'anniversaire-fiona-montpellier-2026',
    title: 'Anniversaire 18 ans Fiona',
    type: 'Anniversaire',
    location: 'Région de Montpellier',
    date: '2026-07-11',
    dateLabel: '11 juillet 2026',
    brief:
      'Sonorisation apéritif et repas en extérieur, animation soirée dansante en intérieur, vidéoprojecteur et écran d’accueil personnalisé.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Vidéo projection', 'Écran d’accueil'],
    imageIds: [
      'anniversaire-18-ans-fiona-montpellier-exterieur',
      'anniversaire-18-ans-fiona-montpellier-piste',
    ],
  },
  {
    id: 'inauguration-entreprise-frejus-2026',
    title: 'Inauguration entreprise',
    type: 'Entreprise',
    location: 'Fréjus',
    date: '2026-07-09',
    dateLabel: '9 juillet 2026',
    brief:
      'Inauguration de nouveaux locaux en extérieur, buffet dinatoire et ambiance musicale années 80.',
    prestations: ['DJ', 'Buffet dinatoire', 'Ambiance années 80'],
    imageIds: [
      'inauguration-entreprise-frejus-exterieur',
      'inauguration-entreprise-frejus-buffet-annees-80',
    ],
  },
  {
    id: 'mariage-gaetan-audrey-2026',
    title: 'Mariage Gaëtan & Audrey',
    type: 'Mariage',
    location: 'Domaine viticole près de Lyon',
    date: '2026-07-04',
    dateLabel: '4 juillet 2026',
    brief:
      'Ambiance musicale pendant le buffet dinatoire, puis animation et soirée dansante dans un domaine viticole.',
    prestations: ['DJ', 'Buffet dinatoire', 'Soirée dansante'],
    imageIds: [
      'mariage-gaetan-audrey-domaine-viticole-lyon',
      'mariage-gaetan-audrey-soiree-dansante',
    ],
  },
  {
    id: 'mariage-oceane-anthony-2026',
    title: 'Mariage Océane & Anthony',
    type: 'Mariage',
    location: 'Région lyonnaise / Valence',
    date: '2026-06-20',
    dateLabel: '20 juin 2026',
    brief: 'Sonorisation d’ambiance pendant le repas et soirée dansante.',
    prestations: ['DJ', 'Sonorisation repas', 'Soirée dansante'],
    imageIds: [
      'mariage-oceane-anthony-valence-repas',
      'mariage-oceane-anthony-soiree-dansante',
    ],
    testimonialId: '2026-06-oceane-anthony',
  },
  {
    id: 'soiree-lac-alaiade-2026',
    title: 'Soirée restaurant Lac Alaiade',
    type: 'Soirée privée',
    location: 'Beaumont-de-Pertuis',
    date: '2026-08-14',
    dateLabel: '14 août 2026',
    brief: 'Ambiance musicale et soirée dansante au restaurant Lac Alaiade.',
    prestations: ['DJ', 'Ambiance musicale', 'Soirée dansante'],
    imageIds: [
      'soiree-restaurant-lac-alaiade-beaumont-de-pertuis',
      'soiree-restaurant-lac-alaiade-piste-danse',
    ],
  },
  {
    id: 'mariage-avignon-2025',
    title: 'Mariage - Avignon',
    type: 'Mariage',
    location: 'Avignon, Vaucluse',
    date: '2025-04-26',
    guests: 'Environ 120 invités',
    brief: 'Soirée élégante puis festive, avec ouverture de bal mise en scène et programmation sur mesure.',
    prestations: ['DJ & éclairage', 'Ouverture de bal', 'Étincelles froides', 'Karaoké'],
    imageIds: [
      'mariage-avignon-2025-machine-a-fumee',
      'mariage-avignon-2025-machine-etincelles-artifice',
      'mariage-dansant-lumieres',
      'mariage-interieur-lumieres-dynamiques',
    ],
    testimonialId: '2025-04',
  },
  {
    id: 'anniversaire-50-loriol',
    title: 'Anniversaire 50 ans - Loriol-du-Comtat',
    type: 'Anniversaire',
    location: 'Loriol-du-Comtat, Vaucluse',
    date: '2026-04-18',
    brief: 'Grande fête familiale avec programmation adaptée à tous les âges et ambiance très participative.',
    prestations: ['DJ', 'Sonorisation', 'Éclairage', 'Karaoké'],
    imageIds: ['anniversaire-50-ans-loriol-2026'],
    testimonialId: '2026-04',
  },
  {
    id: 'sephora-marseille',
    title: 'Inauguration - Sephora Marseille',
    type: 'Entreprise',
    location: 'Marseille, Terrasses du Port',
    date: '2025-07-05',
    brief: 'Animation musicale pour l\'ouverture d\'un magasin, ambiance corporate et accueil des invités.',
    prestations: ['DJ', 'Sonorisation'],
    imageIds: ['inauguration-ouverture-sephora-marseille-vieux-port'],
    testimonialId: '2025-07',
  },
  {
    id: 'anniversaire-sorgues',
    title: 'Anniversaire de Louis',
    type: 'Anniversaire',
    location: 'Sorgues, Vaucluse',
    date: '2025-09-19',
    brief: 'Anniversaire de famille en extérieur avec sonorisation et éclairage adaptés au jardin.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Éclairage'],
    imageIds: ['anniversaire-jeunes-sorgues-2026'],
    testimonialId: '2025-09',
  },
  {
    id: 'yogan',
    title: 'Yogan',
    type: 'Soirée privée',
    location: 'Sud de la France',
    brief: 'Soirée privée avec ambiance lumineuse et animation DJ pour un public jeune.',
    prestations: ['DJ', 'Éclairage', 'Ambiance festive'],
    imageIds: ['anniversaire-18ans-jeunes-ambiances-lumiere'],
  },
];

export const realisationProjects = [...realisationProjectsUnsorted].sort((a, b) => {
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;
  if (!b.date) return -1;
  return b.date.localeCompare(a.date);
});

export function getGalleryItemById(id) {
  return galleryItems.find((item) => item.id === id);
}

export function getTestimonialById(id) {
  return testimonials.find((t) => t.id === id);
}

export function getRealisationById(id) {
  return realisationProjects.find((p) => p.id === id);
}

export function getMariageGalleryItems() {
  return galleryItems.filter((item) => item.caption?.toLowerCase().includes('mariage'));
}

export function getAnniversaireGalleryItems() {
  return galleryItems.filter((item) => item.caption?.toLowerCase().includes('anniversaire'));
}

export function getEntrepriseGalleryItems() {
  return galleryItems.filter((item) => {
    const caption = item.caption?.toLowerCase() ?? '';
    return (
      caption.includes('corporate') ||
      caption.includes('sephora') ||
      caption.includes('inauguration') ||
      caption.includes('entreprise')
    );
  });
}

export function getSoireePriveeGalleryItems() {
  return galleryItems.filter((item) => {
    const caption = item.caption?.toLowerCase() ?? '';
    return (
      caption.includes('anniversaire') ||
      caption.includes('yogan') ||
      caption.includes('nouvel an') ||
      caption.includes('zanzibar') ||
      caption.includes('pétanque') ||
      caption.includes('petanque') ||
      caption.includes('lac alaiade') ||
      caption.includes('restaurant')
    );
  });
}
