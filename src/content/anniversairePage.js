import { getAnniversaireGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const anniversaireFaq = [
  {
    question: 'Comment adapter la fête à tous les âges ?',
    answer:
      'La programmation est construite selon les générations présentes : 18 ans, 30, 40, 50, 60 ans ou plus. Karaoké, quiz ou blind test peuvent ponctuer la soirée sans casser l\'ambiance.',
  },
  {
    question: 'Proposez-vous diaporama ou surprises ?',
    answer:
      'Oui. Un diaporama peut être diffusé à un moment défini. Les surprises sont préparées avec vous en amont pour s\'intégrer proprement dans le déroulé.',
  },
  {
    question: 'Peut-on organiser un anniversaire en extérieur ?',
    answer:
      'Oui : jardin, terrasse ou pool party. Sonorisation et éclairage sont dimensionnés selon le lieu et les contraintes éventuelles de voisinage.',
  },
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer:
      'Principalement en Provence / PACA. D\'autres déplacements sont possibles selon la date.',
  },
  {
    question: 'Comment obtenir une proposition pour mon anniversaire ?',
    answer:
      'Utilisez le configurateur en précisant l\'âge, le format et les animations souhaitées. Devis personnalisé selon le projet.',
  },
];

export const anniversaireLandingContent = {
  hero: {
    titleId: 'anniversaire-hero-title',
    eyebrow: 'Anniversaire • Provence',
    title: 'Une fête d’anniversaire adaptée à l’âge et aux invités.',
    intro:
      '18, 30, 40, 50, 60 ans ou surprise : programmation intergénérationnelle, animations (karaoké, quiz, blind test) et options selon le format.',
    reassurance: ['Tous les âges', 'Animations musicales', 'Intérieur ou extérieur'],
    image: '/elements/gallery/anniversaire-50-ans-loriol-2026.webp',
    imageAlt: 'Installation DJ pour un anniversaire de 50 ans à Loriol-du-Comtat',
    primaryCta: { href: '/mon-evenement?type=anniversaire', label: 'Parler de mon anniversaire' },
    secondaryCta: { href: '#galerie-anniversaire', label: 'Voir des réalisations' },
  },
  sections: [
    {
      type: 'usageList',
      id: 'anniversaire-formats',
      soft: true,
      title: 'Des formats selon l’âge et le style',
      lead:
        '18 ans, 50 ans ou fête surprise : le style, le volume et les animations se calent dès le brief.',
      items: [
        {
          title: '18 ans',
          description:
            'Énergie club ou festival, hits actuels, karaoké ou drag selon le projet, volume calé sur le lieu.',
        },
        {
          title: '30 / 40 ans',
          description:
            'Mélange de titres récents et de classiques, piste progressive, souvent un moment surprise ou diaporama.',
        },
        {
          title: '50 / 60 ans et plus',
          description:
            'Programmation intergénérationnelle pour que parents, amis et enfants trouvent leur place sur la piste.',
        },
        {
          title: 'Anniversaire surprise',
          description:
            'Calage discret de l’arrivée, playlist préparée, diffusion d’un diaporama ou toast au bon moment.',
        },
        {
          title: 'Fête familiale',
          description:
            'Jardin, salle des fêtes ou villa : sonorisation adaptée, fond musical pendant le repas puis soirée.',
        },
        {
          title: 'Pool party / extérieur',
          description:
            'Installation pensée pour le plein air, voisinage et autonomie électrique pris en compte en amont.',
        },
      ],
    },
    {
      type: 'editorialSplit',
      id: 'anniversaire-ambiance',
      layout: 'reverse',
      title: 'Ambiance selon les générations présentes',
      lead:
        'Une fête d’anniversaire réussit quand la musique suit le public réel, pas seulement les goûts de l’hôte.',
      body: [
        'Avant la date, on fixe les styles prioritaires, les titres à éviter et les moments participatifs (karaoké, quiz, blind test). Le jour J, la piste s’ajuste aux réactions sans perdre le fil prévu.',
      ],
      image: '/elements/gallery/anniversaire-18ans-jeunes-ambiances-lumiere.webp',
      imageAlt: 'Ambiance lumineuse et jeux de lumières pour une soirée dansante',
    },
    {
      type: 'plainPoints',
      id: 'anniversaire-jeux',
      title: 'Karaoké, quiz et blind test',
      lead:
        'Des animations musicales pour impliquer les invités, sans transformer la soirée en concours permanent.',
      points: [
        {
          title: 'Karaoké',
          description:
            'Un créneau dédié, souvent en milieu ou fin de soirée, avec micro et catalogue adaptés à l’âge du public.',
        },
        {
          title: 'Quiz musical / blind test',
          description:
            'Thèmes calés sur la génération fêtée (années 80, 90, hits récents…). Durée courte pour garder le rythme.',
        },
        {
          title: 'Diaporama & surprises',
          description:
            'Diffusion à un moment précis (toast, dessert, avant la piste). Préparé avec vous pour éviter les à-coups.',
        },
      ],
    },
    {
      type: 'music',
      id: 'anniversaire-music',
      title: 'Une playlist qui mélange les générations',
      lead:
        'Vous indiquez les styles à prioriser, ceux à éviter, et les animations souhaitées. Le reste s’ajuste en direct.',
      blocks: [
        {
          title: 'Incontournables',
          description: 'Les morceaux et styles que la personne fêtée et ses invités doivent entendre.',
        },
        {
          title: 'À éviter',
          description: 'Les titres ou genres à écarter selon l’âge et le public présent.',
        },
        {
          title: 'Moments participatifs',
          description: 'Karaoké, quiz ou blind test peuvent s’insérer sans casser la soirée dansante.',
        },
      ],
    },
    {
      type: 'caseStudy',
      id: 'anniversaire-case',
      title: 'Exemple : 50 ans à Loriol-du-Comtat',
      meta: ['Anniversaire 50 ans - Loriol-du-Comtat', 'Printemps 2026', 'Grande fête familiale'],
      brief:
        'Célébration des 50 ans avec programmation adaptée à tous les âges, ambiance participative et soirée dansante jusqu’au bout de la nuit.',
      prestations: ['DJ & éclairage', 'Sonorisation', 'Karaoké', 'Programmation sur mesure'],
      outcome:
        'Ambiance fluide du cocktail à la piste pleine. L’hôte a pu profiter de sa soirée sans gérer la technique.',
      image: '/elements/gallery/anniversaire-50-ans-loriol-2026.webp',
      imageAlt: 'Installation DJ pour un anniversaire de 50 ans à Loriol-du-Comtat',
    },
    {
      type: 'options',
      id: 'anniversaire-options',
      title: 'Options utiles pour un anniversaire',
      lead: 'Quatre demandes fréquentes, au-delà du DJ et de la sonorisation.',
      items: [
        {
          title: 'Karaoké',
          description: 'Créneau participatif pour impliquer vos invités.',
          image: {
            src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
            alt: 'Poste DJ avec microphone pour animation karaoké',
          },
          helpKey: 'karaoke',
        },
        {
          title: 'Blind test',
          description: 'Animation ludique adaptée à votre génération et à vos invités.',
          image: {
            src: '/elements/photos/prestations/quiz-musical-gros-plan-net.webp',
            alt: 'Gros plan sur le filet de quiz musical pour un blind test d’anniversaire',
          },
          helpKey: 'quiz',
        },
        {
          title: 'Photobooth & vidéobooth',
          description: 'Souvenirs instantanés, proposés et coordonnés avec des partenaires habituels.',
          image: {
            src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
            alt: 'Vidéobooth lors d’une soirée d’anniversaire',
          },
          helpKey: 'videobooth',
        },
        {
          title: 'Sonorisation extérieure',
          description: 'Installation adaptée pour jardin, terrasse ou pool party.',
          image: {
            src: '/elements/gallery/anniversaire-jeunes-sorgues-2026.webp',
            alt: 'Sonorisation et éclairage pour un anniversaire en extérieur',
          },
        },
      ],
    },
    {
      type: 'gallery',
      id: 'anniversaire-gallery',
      anchorId: 'galerie-anniversaire',
      title: 'Galerie anniversaire',
      lead: 'Quelques instants capturés lors d’anniversaires animés en Provence.',
      ariaLabel: 'Galerie photos d’anniversaires',
      getItems: getAnniversaireGalleryItems,
    },
    {
      type: 'testimonials',
      id: 'anniversaire-avis',
      title: 'Avis après anniversaires',
      lead: 'Retours d’expérience après des prestations anniversaire.',
      getItems: () =>
        testimonials.filter((t) => t.context?.toLowerCase().includes('anniversaire')),
    },
    {
      type: 'faq',
      id: 'anniversaire-faq',
      title: 'Questions fréquentes - Anniversaire',
      items: anniversaireFaq,
    },
    {
      type: 'cta',
      id: 'anniversaire-cta',
      title: 'On prépare votre fête ?',
      lead: 'Précisez l’âge, le format et les animations souhaitées. Proposition personnalisée, sans grille tarifaire fixe.',
      href: '/mon-evenement?type=anniversaire',
      label: 'Construire mon anniversaire',
      secondaryLinks: [
        { to: '/realisations?type=anniversaire', label: 'Réalisations anniversaire' },
        { to: '/avis#anniversaires-soirees', label: 'Avis clients' },
        { to: '/prestations', label: 'Prestations' },
      ],
    },
  ],
};
