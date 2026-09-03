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
      'Villa, cocktail, pool party ou établissement : DJ en formule complète, ou plug and play si le lieu dispose déjà de sonorisation et d’éclairage.',
    reassurance: ['Formule complète ou plug and play', 'Formats libres', 'Intérieur ou extérieur'],
    image: '/elements/gallery/soiree-nouvel-an-2026-zanzibar-sete.webp',
    imageAlt: 'DJ Mika mixe une soirée du Nouvel An au Zanzibar à Sète',
    primaryCta: { href: '/mon-evenement?type=soiree-privee', label: 'Parler de ma soirée' },
    secondaryCta: { href: '#galerie-soiree-privee', label: 'Voir des réalisations' },
  },
  sections: [
    {
      type: 'callout',
      id: 'soiree-plug',
      title: 'Formule complète ou plug and play',
      lead:
        'Le lieu est déjà équipé ? Mika peut intervenir uniquement avec sa régie ou s’intégrer à l’installation existante. Besoin d’un dispositif complet ? Sonorisation et éclairage peuvent être prévus selon la configuration.',
      points: [
        {
          title: 'Formule complète',
          description: 'DJ + sono + éclairage fournis et installés pour le lieu.',
        },
        {
          title: 'Plug and play',
          description: 'Intervention sur une installation déjà présente (bar, salle, villa équipée).',
        },
      ],
    },
    {
      type: 'usageList',
      id: 'soiree-formats',
      title: 'Villa, cocktail, pool party ou lieu déjà équipé',
      lead:
        'Pas de cérémonie obligatoire ni de planning figé : le format suit le lieu et vos envies.',
      items: [
        {
          title: 'Villa / réception privée',
          description: 'Installation discrète, volume adapté au voisinage, ambiance lounge puis piste.',
        },
        {
          title: 'Pool party / garden party',
          description: 'Matériel dimensionné pour l’extérieur, autonomie et contraintes du terrain anticipées.',
        },
        {
          title: 'Cocktail & after',
          description: 'Fond musical puis montée progressive, durée souvent plus courte qu’une soirée complète.',
        },
        {
          title: 'Soirée à thème',
          description: 'Playlist et animations calées sur le thème (années, dress code, univers musical).',
        },
        {
          title: 'Lieu déjà équipé',
          description: 'Bar, salle de spectacle ou établissement : intégration à la sono et aux lumières du lieu.',
        },
        {
          title: 'Soirée entre amis',
          description: 'Format intimiste ou grand groupe, sans protocole : la régie suit le rythme des invités.',
        },
      ],
    },
    {
      type: 'editorialSplit',
      id: 'soiree-lieu',
      soft: true,
      title: 'Le lieu dicte la technique',
      lead:
        'Avant de parler playlist, on regarde la configuration : intérieur, extérieur, voisinage, prise de courant, matériel déjà en place.',
      body: [
        'Volume, placement du matériel, voisinage et éventuellement une installation déjà en place : on part de ça pour caler une ambiance cohérente du début à la fin, sans alourdir le projet.',
      ],
      image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.webp',
      imageAlt: 'Sonorisation et éclairage pour une fête en extérieur',
      points: [
        {
          title: 'Extérieur',
          description: 'Placement des enceintes, niveau sonore et contraintes de voisinage.',
        },
        {
          title: 'Intérieur',
          description: 'Éclairage, diffusion et circulation des invités dans la pièce.',
        },
      ],
    },
    {
      type: 'formats',
      id: 'soiree-exemples',
      layout: 'dense',
      title: 'Quelques ambiances déjà animées',
      lead: 'Nouvel An, salle, extérieur ou mix live : quelques soirées déjà animées.',
      items: [
        {
          title: 'Nouvel An en établissement',
          description: 'Set live, ambiance club et karaoké dans un lieu déjà équipé.',
          image: '/elements/gallery/soiree-nouvel-an-2026-zanzibar-sete.webp',
          imageAlt: 'DJ mixe une soirée du Nouvel An au Zanzibar à Sète',
        },
        {
          title: 'Soirée en salle',
          description: 'Jeux de lumières et programmation sur mesure pour une nuit festive.',
          image: '/elements/gallery/soiree-restaurant-lac-alaiade-piste-danse.webp',
          imageAlt: 'Piste de danse lors d’une soirée en salle',
        },
        {
          title: 'Fête en extérieur',
          description: 'Sonorisation et éclairage pour jardin ou terrasse.',
          image: '/elements/gallery/anniversaire-jeunes-sorgues-2026.webp',
          imageAlt: 'Sonorisation et éclairage pour une fête en extérieur',
        },
        {
          title: 'Mix live',
          description: 'Régie DJ adaptée au format libre de la soirée.',
          image: '/elements/photos/dj-mixage-live-eclairage-bleu.webp',
          imageAlt: 'DJ Mika en plein mixage lors d’une soirée privée',
        },
      ],
    },
    {
      type: 'options',
      id: 'soiree-options',
      title: 'Options selon le format',
      lead: 'Karaoké, éclairage, quiz ou photobooth selon le format de la soirée.',
      items: [
        {
          title: 'Karaoké',
          description: 'Créneau participatif pour varier sans imposer un déroulé long.',
          image: {
            src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
            alt: 'Poste DJ avec microphone pour animation karaoké',
          },
          helpKey: 'karaoke',
        },
        {
          title: 'Éclairage & effets',
          description: 'Mise en lumière du lieu et effets visuels si le format le demande.',
          image: {
            src: '/elements/photos/dj-mixage-live-eclairage-bleu.webp',
            alt: 'DJ en mixage avec éclairage bleu lors d’une soirée privée',
          },
          helpKey: 'eclairage',
        },
        {
          title: 'Blind test & quiz',
          description: 'Animations courtes pour impliquer les invités.',
          image: {
            src: '/elements/photos/prestations/quiz-musical-large-avec-public.webp',
            alt: 'Quiz musical et blind test animé devant le public lors d’une soirée privée',
          },
          helpKey: 'quiz',
        },
        {
          title: 'Photobooth & vidéobooth',
          description: 'Souvenirs instantanés, coordonnés avec des partenaires habituels.',
          image: {
            src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
            alt: 'Vidéobooth lors d’une soirée privée',
          },
          helpKey: 'videobooth',
        },
      ],
    },
    {
      type: 'caseStudy',
      id: 'soiree-case',
      title: 'Exemple : Nouvel An au Zanzibar, Sète',
      meta: ['Soirée privée - Sète', 'Nouvel An 2026', 'Établissement équipé'],
      brief:
        'Soirée du Nouvel An dans un établissement déjà équipé : mix live, ambiance club et karaoké, intervention branchée sur la configuration du lieu.',
      prestations: ['DJ', 'Plug and play / régie', 'Karaoké', 'Programmation festive'],
      outcome:
        'Ambiance tenue toute la nuit, intégration au matériel du lieu, sans installation lourde inutile.',
      image: '/elements/gallery/soiree-nouvel-an-2026-zanzibar-sete.webp',
      imageAlt: 'DJ Mika mixe une soirée du Nouvel An au Zanzibar à Sète',
      links: [
        { href: '/realisations#soiree-nouvel-an-zanzibar-2026', label: 'Voir la réalisation' },
        { href: '/realisations?type=soiree-privee', label: 'Autres soirées privées' },
      ],
    },
    {
      type: 'gallery',
      id: 'soiree-gallery',
      anchorId: 'galerie-soiree-privee',
      title: 'Galerie soirées privées',
      lead: 'Quelques instants capturés lors de soirées privées animées en Provence.',
      ariaLabel: 'Galerie photos de soirées privées',
      getItems: getSoireePriveeGalleryItems,
    },
    {
      type: 'testimonials',
      id: 'soiree-avis',
      title: 'Avis après soirées privées',
      lead: 'Retours d’expérience après des prestations en soirée privée.',
      getItems: () =>
        testimonials.filter((t) => t.context?.toLowerCase().includes('soirée privée')),
    },
    {
      type: 'faq',
      id: 'soiree-faq',
      title: 'Questions fréquentes - Soirée privée',
      items: soireePriveeFaq,
    },
    {
      type: 'cta',
      id: 'soiree-cta',
      title: 'Parlez-nous de votre format',
      lead: 'Villa, lieu équipé, extérieur, thème… Décrivez le projet, on revient avec une proposition technique claire.',
      href: '/mon-evenement?type=soiree-privee',
      label: 'Construire ma soirée privée',
      secondaryLinks: [
        { to: '/realisations?type=soiree-privee', label: 'Réalisations soirée privée' },
        { to: '/avis#anniversaires-soirees', label: 'Avis clients' },
        { to: '/prestations', label: 'Prestations' },
      ],
    },
  ],
};
