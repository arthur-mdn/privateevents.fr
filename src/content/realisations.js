import { galleryItems } from './gallery.js';
import { testimonials } from './testimonials.js';

export const realisationProjects = [
  {
    id: 'mariage-avignon-2025',
    title: 'Mariage — Avignon',
    type: 'Mariage',
    location: 'Avignon, Vaucluse',
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
    title: 'Anniversaire 50 ans — Loriol-du-Comtat',
    type: 'Anniversaire',
    location: 'Loriol-du-Comtat, Vaucluse',
    brief: 'Grande fête familiale avec programmation adaptée à tous les âges et ambiance très participative.',
    prestations: ['DJ', 'Sonorisation', 'Éclairage', 'Karaoké'],
    imageIds: ['anniversaire-50-ans-loriol-2026'],
    testimonialId: '2026-04',
  },
  {
    id: 'sephora-marseille',
    title: 'Inauguration — Sephora Marseille',
    type: 'Entreprise',
    location: 'Marseille, Terrasses du Port',
    brief: 'Animation musicale pour l\'ouverture d\'un magasin, ambiance corporate et accueil des invités.',
    prestations: ['DJ', 'Sonorisation'],
    imageIds: ['inauguration-ouverture-sephora-marseille-vieux-port'],
    testimonialId: '2025-07',
  },
  {
    id: 'anniversaire-sorgues',
    title: 'Anniversaire — Sorgues',
    type: 'Soirée privée',
    location: 'Sorgues, Vaucluse',
    brief: 'Prestation en extérieur avec sonorisation et éclairage adaptés au jardin.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Éclairage'],
    imageIds: ['anniversaire-jeunes-sorgues-2026', 'anniversaire-18ans-jeunes-ambiances-lumiere'],
    testimonialId: '2025-09',
  },
];

export function getGalleryItemById(id) {
  return galleryItems.find((item) => item.id === id);
}

export function getTestimonialById(id) {
  return testimonials.find((t) => t.id === id);
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
    return caption.includes('corporate') || caption.includes('sephora');
  });
}

export function getSoireePriveeGalleryItems() {
  return galleryItems.filter((item) => {
    const caption = item.caption?.toLowerCase() ?? '';
    return (
      caption.includes('anniversaire') ||
      caption.includes('nouvel an') ||
      caption.includes('zanzibar')
    );
  });
}
