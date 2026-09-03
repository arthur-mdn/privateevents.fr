import { galleryItems } from './gallery.js';
import { testimonials } from './testimonials.js';

const realisationProjectsUnsorted = [
  {
    id: 'mariage-laura-maxime-2026',
    title: 'Mariage Laura & Maxime',
    type: 'Mariage',
    location: 'Provence',
    date: '2026-08-29',
    dateLabel: '29 août 2026',
    brief:
      'Mariage repris à un mois de la date après le désistement du premier DJ. Sonorisation de la cérémonie laïque près de la piscine, puis ambiance cocktail, repas et soirée dansante.',
    highlight:
      'Intervention en urgence avec reprise complète de l’animation musicale, du premier contact jusqu’à la fin de soirée.',
    prestations: [
      'DJ & éclairage',
      'Sonorisation cérémonie',
      'Cocktail',
      'Repas',
      'Soirée dansante',
    ],
    imageIds: [
      'mariage-laura-maxime-exterieur-animation',
      'mariage-laura-maxime-ceremonie-piscine',
      'mariage-laura-maxime-exterieur',
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
      'Anniversaire en plein air avec plusieurs thèmes musicaux à respecter, dont une ambiance réunionnaise, et une animation vidéo personnalisée.',
    highlight:
      'Playlist multi-thèmes tenue toute la soirée, avec adaptation au public au fil de la fête.',
    prestations: ['DJ', 'Ambiance réunionnaise', 'Playlist multi-thèmes', 'Animation vidéo'],
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
    brief:
      'Fête annuelle d’un club de pétanque près de Montpellier : sardinade barbecue en extérieur, puis passage progressif vers l’ambiance musicale et la soirée dansante.',
    highlight:
      'Installation pensée pour un terrain en plein air, avec un volume adapté au repas associatif puis une montée en puissance sur la piste.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Ambiance musicale', 'Soirée dansante'],
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
      'Anniversaire 18 ans avec décoration bleue, montage et diffusion d’un diaporama vidéo, soirée dansante shatta / latino et spectacle drag queen Aquarii.',
    highlight:
      'Combinaison DJ, vidéo d’accueil et animation partenaire pour une soirée jeune très visuelle.',
    prestations: [
      'DJ & éclairage',
      'Diaporama vidéo',
      'Ambiance shatta / latino',
      'Drag queen Aquarii',
    ],
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
      'Sonorisation de l’apéritif et du repas en extérieur, puis animation de la soirée dansante en intérieur, avec vidéoprojecteur et écran d’accueil personnalisé.',
    highlight:
      'Continuité sonore extérieur / intérieur et accueil vidéo pour marquer l’entrée des invités.',
    prestations: [
      'DJ',
      'Sonorisation extérieure',
      'Soirée dansante',
      'Vidéo projection',
      'Écran d’accueil',
    ],
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
      'Inauguration de nouveaux locaux à Fréjus, en extérieur : accueil des collaborateurs et invités pendant un buffet dinatoire, avec une programmation musicale années 80.',
    highlight:
      'Cadre corporate tenu pendant toute la réception, sans basculer en soirée club, pour coller à l’image de l’événement.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Buffet dinatoire', 'Ambiance années 80'],
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
      'Mariage dans un domaine viticole près de Lyon : ambiance musicale pendant le buffet dinatoire, puis animation et soirée dansante une fois la nuit tombée.',
    highlight:
      'Passage progressif du buffet à la piste, avec un éclairage calé sur l’architecture du domaine et le rythme de la soirée.',
    prestations: ['DJ & éclairage', 'Buffet dinatoire', 'Soirée dansante'],
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
    brief:
      'Mariage entre région lyonnaise et Valence : sonorisation d’ambiance pendant le repas, puis soirée dansante. Les mariés et les invités ont salué l’animation, avec une recommandation pour un prochain mariage.',
    highlight:
      'Continuité musicale du repas à la fin de soirée, sans rupture d’ambiance ni playlist figée.',
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
    brief:
      'Soirée au restaurant Lac Alaiade, à Beaumont-de-Pertuis : ambiance musicale pendant le service en bord de lac, puis soirée dansante sur place une fois le repas terminé.',
    highlight:
      'Intervention dans un établissement déjà en service, avec un volume maîtrisé au restaurant puis une vraie bascule vers la piste.',
    prestations: ['DJ', 'Ambiance musicale', 'Soirée dansante'],
    imageIds: [
      'soiree-restaurant-lac-alaiade-beaumont-de-pertuis',
      'soiree-restaurant-lac-alaiade-piste-danse',
    ],
  },
  {
    id: 'soiree-nouvel-an-zanzibar-2026',
    title: 'Nouvel An au Zanzibar',
    type: 'Soirée privée',
    location: 'Sète',
    date: '2026-01-01',
    dateLabel: 'Nouvel An 2026',
    brief:
      'Réveillon du Nouvel An au Zanzibar, à Sète : mix live, ambiance club et créneau karaoké, en s’appuyant sur l’installation déjà en place dans l’établissement.',
    highlight:
      'Régie plug and play pour tenir toute la nuit sans surcharger le lieu d’une sono inutile.',
    prestations: ['DJ', 'Plug and play / régie', 'Ambiance club', 'Karaoké'],
    imageIds: ['soiree-nouvel-an-2026-zanzibar-sete'],
  },
  {
    id: 'mariage-avignon-2025',
    title: 'Mariage - Avignon',
    type: 'Mariage',
    location: 'Avignon, Vaucluse',
    date: '2025-10-04',
    dateLabel: '4 octobre 2025',
    guests: 'Environ 120 invités',
    brief:
      'Soirée élégante puis festive : ouverture de bal mise en scène, programmation mêlant classiques et titres actuels, effets visuels et créneau karaoké.',
    highlight:
      'Montée en puissance du cocktail à la piste pleine, avec temps forts coordonnés (ouverture de bal, étincelles froides).',
    prestations: [
      'DJ & éclairage',
      'Sonorisation cocktail',
      'Ouverture de bal',
      'Étincelles froides',
      'Karaoké',
    ],
    imageIds: [
      'mariage-avignon-2025-machine-a-fumee',
      'mariage-avignon-2025-machine-etincelles-artifice',
      'mariage-dansant-lumieres',
      'mariage-interieur-lumieres-dynamiques',
    ],
    testimonialId: '2025-10-04',
  },
  {
    id: 'anniversaire-50-loriol',
    title: 'Anniversaire 50 ans - Loriol-du-Comtat',
    type: 'Anniversaire',
    location: 'Loriol-du-Comtat, Vaucluse',
    date: '2026-04-18',
    dateLabel: '18 avril 2026',
    brief:
      'Grande fête familiale pour les 50 ans : programmation adaptée à tous les âges, karaoké et soirée dansante très participative.',
    highlight:
      'Ambiance tenue du premier au dernier titre, avec une playlist calée sur les goûts de l’hôte.',
    prestations: ['DJ', 'Sonorisation', 'Éclairage', 'Karaoké', 'Programmation sur mesure'],
    imageIds: ['anniversaire-50-ans-loriol-2026'],
    testimonialId: '2026-04',
  },
  {
    id: 'sephora-marseille',
    title: 'Inauguration - Sephora Marseille',
    type: 'Entreprise',
    location: 'Marseille, Terrasses du Port',
    date: '2025-07-05',
    dateLabel: '5 juillet 2025',
    brief:
      'Ouverture du Sephora aux Terrasses du Port, à Marseille : accueil musical des invités, cadre corporate et sonorisation calée sur le magasin et ses flux.',
    highlight:
      'Prestation discrète et cadrée pour une inauguration de marque, avec horaires et image du lieu respectés.',
    prestations: ['DJ', 'Sonorisation', 'Accueil musical'],
    imageIds: ['inauguration-ouverture-sephora-marseille-vieux-port'],
    testimonialId: '2025-07',
  },
  {
    id: 'anniversaire-sorgues',
    title: 'Anniversaire de Louis',
    type: 'Anniversaire',
    location: 'Sorgues, Vaucluse',
    date: '2025-09-19',
    dateLabel: '19 septembre 2025',
    brief:
      'Anniversaire de famille à Sorgues, en extérieur : sonorisation et éclairage adaptés au jardin, du cocktail jusqu’à la fin de soirée.',
    highlight:
      'Installation pensée pour un jardin familial, sans écraser la conversation au début, puis assez présente pour accompagner la piste.',
    prestations: ['DJ', 'Sonorisation extérieure', 'Éclairage'],
    imageIds: ['anniversaire-jeunes-sorgues-2026'],
    testimonialId: '2025-09',
  },
  {
    id: 'anniversaire-yogan',
    title: 'Anniversaire 18 ans Yogan',
    type: 'Anniversaire',
    location: 'Provence',
    brief:
      'Anniversaire des 18 ans de Yogan, en Provence : public jeune, éclairage dynamique et animation DJ clairement orientée dancefloor.',
    highlight:
      'Soirée construite autour de la piste, avec une lumière et une programmation calées sur une fête entre amis.',
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

/** Filtres page /realisations (?type=…) et liens depuis les landings. */
export const realisationTypeFilters = [
  { id: 'all', label: 'Tous', type: null, href: null },
  { id: 'mariage', label: 'Mariages', type: 'Mariage', href: '/mariage' },
  { id: 'anniversaire', label: 'Anniversaires', type: 'Anniversaire', href: '/anniversaire' },
  {
    id: 'soiree-privee',
    label: 'Soirées privées',
    type: 'Soirée privée',
    href: '/soiree-privee',
  },
  { id: 'entreprise', label: 'Entreprises', type: 'Entreprise', href: '/entreprise' },
];

export function getRealisationTypeFilter(typeOrSlug) {
  if (!typeOrSlug) return realisationTypeFilters[0];
  const value = String(typeOrSlug).toLowerCase();
  return (
    realisationTypeFilters.find(
      (f) => f.id === value || f.type?.toLowerCase() === value,
    ) ?? realisationTypeFilters[0]
  );
}

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
  return galleryItems
    .filter((item) => item.caption?.toLowerCase().includes('mariage'))
    .slice(0, 12);
}

export function getAnniversaireGalleryItems() {
  return galleryItems
    .filter((item) => item.caption?.toLowerCase().includes('anniversaire'))
    .slice(0, 10);
}

export function getEntrepriseGalleryItems() {
  return galleryItems
    .filter((item) => {
      const caption = item.caption?.toLowerCase() ?? '';
      return (
        caption.includes('corporate') ||
        caption.includes('sephora') ||
        caption.includes('inauguration') ||
        caption.includes('entreprise')
      );
    })
    .slice(0, 10);
}

export function getSoireePriveeGalleryItems() {
  return galleryItems
    .filter((item) => {
      const caption = item.caption?.toLowerCase() ?? '';
      return (
        caption.includes('nouvel an') ||
        caption.includes('zanzibar') ||
        caption.includes('pétanque') ||
        caption.includes('petanque') ||
        caption.includes('lac alaiade') ||
        caption.includes('restaurant') ||
        caption.includes('soirée') ||
        caption.includes('soiree')
      );
    })
    .slice(0, 10);
}

export function getRealisationsPageGalleryItems() {
  return galleryItems.slice(0, 16);
}
