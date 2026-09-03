export const prestationsHero = {
  eyebrow: 'Prestations',
  title: 'DJ, technique, animations et partenaires',
  intro:
    'Certaines prestations sont réalisées directement par Mika. D\'autres sont coordonnées avec des partenaires habituels, ou proposées en mise en relation selon le projet.',
  titleId: 'prestations-hero-title',
  image: '/elements/gallery/mariage-interieur-lumieres-dynamiques.webp',
};

export const deliveryLabels = {
  mika: 'Par Mika',
  coordinated: 'Coordonné par Private Events',
  referral: 'Mise en relation',
};

export const prestationsSections = [
  {
    id: 'dj-musique',
    layout: 'editorial',
    title: 'DJ & ambiance',
    delivery: 'mika',
    lead:
      'Préparation en amont, mix live et adaptation au rythme réel de la soirée. Incontournables, interdits et temps forts sont calés avant le jour J.',
    body: [
      'La régie suit le déroulé : cérémonie ou cocktail, discours, repas, ouverture de bal et soirée dansante.',
      'Formule complète avec matériel fourni, ou plug and play sur une installation déjà en place.',
    ],
    images: [
      {
        id: 'dj-mixage-live-eclairage-bleu',
        src: '/elements/photos/dj-mixage-live-eclairage-bleu.webp',
        alt: 'DJ Mika en plein mixage sous éclairage bleu lors d’une soirée',
        width: 1200,
        height: 1800,
      },
      {
        id: 'pads-performance-console-dj',
        src: '/elements/photos/pads-performance-console-dj.webp',
        alt: 'Gros plan sur les pads de performance d’une console DJ professionnelle',
        width: 1400,
        height: 2100,
      },
      {
        id: 'platine-dj-serato-eclairage-bleu',
        src: '/elements/photos/platine-dj-serato-eclairage-bleu.webp',
        alt: 'Platine DJ Serato sous éclairage bleu lors d’un événement privé',
        width: 1400,
        height: 2100,
      },
    ],
  },
  {
    id: 'sonorisation',
    layout: 'technical',
    title: 'Sonorisation & éclairage',
    delivery: 'mika',
    lead:
      'Diffusion sonore et mise en lumière dimensionnées selon le lieu, le nombre d\'invités et le déroulement.',
    modes: [
      {
        title: 'Formule complète',
        text: 'Mika fournit et installe le matériel nécessaire : enceintes, micros, éclairage, câblage.',
      },
      {
        title: 'Plug and play',
        text: 'Intervention sur l\'installation du lieu ou du client, avec la régie DJ et les réglages.',
      },
    ],
    notes: [
      'Micros pour discours et prises de parole.',
      'Seconde zone de diffusion possible (cérémonie, cocktail, salle).',
      'Intérieur ou extérieur, selon les contraintes du site.',
    ],
    images: [
      {
        id: 'setup-dj-ecran-logo-mika-private-events',
        src: '/elements/photos/setup-dj-ecran-logo-mika-private-events.webp',
        alt: 'Setup DJ en extérieur avec écran au logo Mika Private Events',
        width: 1400,
        height: 933,
      },
      {
        id: 'mariage-table-discours',
        src: '/elements/gallery/mariage-table-discours.webp',
        alt: 'Invité au micro lors d’un discours pendant le repas de mariage',
        width: 1200,
        height: 742,
      },
      {
        id: 'microphone-sans-fil-regie-dj',
        src: '/elements/photos/microphone-sans-fil-regie-dj.webp',
        alt: 'Microphone sans fil professionnel posé sur la régie DJ',
        width: 1400,
        height: 2100,
      },
      {
        id: 'mariage-interieur-lumieres-dynamiques',
        src: '/elements/gallery/mariage-interieur-lumieres-dynamiques.webp',
        alt: 'Éclairages dynamiques et lasers lors d’un mariage en intérieur avec DJ Mika',
        width: 1024,
        height: 1536,
      },
    ],
  },
  {
    id: 'mise-en-scene',
    layout: 'visual-grid',
    title: 'Effets visuels',
    delivery: 'mika',
    lead:
      'Lasers, fumée, bulles, étincelles froides et éclairage spécifique pour marquer les temps forts.',
    note: 'Feu d\'artifice extérieur uniquement sous réserve des autorisations.',
    items: [
      {
        title: 'Fumée',
        image: {
          src: '/elements/gallery/mariage-avignon-2025-machine-a-fumee.webp',
          alt: 'Ouverture de bal d’un mariage à Avignon avec fumée lourde et éclairages',
        },
      },
      {
        title: 'Bulles',
        image: {
          src: '/elements/photos/prestations/machine-a-bulles-soiree-dansante.webp',
          alt: 'Piste de danse remplie de bulles sous éclairages violets lors d’une soirée',
        },
      },
      {
        title: 'Étincelles froides',
        image: {
          src: '/elements/gallery/mariage-avignon-2025-machine-etincelles-artifice.webp',
          alt: 'Machine à étincelles froides pour l’ouverture de bal d’un mariage à Avignon',
        },
      },
      {
        title: 'Ouverture de bal',
        image: {
          src: '/elements/photos/prestations/ouverture-de-bal.webp',
          alt: 'Ouverture de bal : musique personnalisée, effets visuels et coordination',
        },
      },
    ],
  },
  {
    id: 'animations',
    layout: 'cards',
    title: 'Animations musicales',
    delivery: 'mika',
    lead:
      'Créneaux participatifs intégrés dans la programmation, sans casser l\'ambiance générale.',
    cards: [
      {
        title: 'Quiz & blind test',
        text: 'Quiz musical et blind test animé devant le public, avec questions adaptées à vos invités, pour un moment collectif en début ou milieu de soirée.',
        image: {
          src: '/elements/photos/prestations/quiz-musical-large-avec-public.webp',
          alt: 'Quiz musical et blind test animé devant le public lors d’une soirée Private Events',
        },
      },
      {
        title: 'Karaoké',
        text: 'Créneaux définis en amont, avec matériel micro et catalogue. Intégré au mix, pas en remplacement.',
        image: {
          src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
          alt: 'Poste DJ avec ordinateur et microphone sans fil pour animation micro en extérieur',
        },
      },
      {
        title: 'Entrée des mariés',
        text: 'Une ou plusieurs entrées, animations et mini-jeux selon vos goûts, calés avec la musique.',
        image: {
          src: '/elements/gallery/mariage-hola-entree-des-maries.webp',
          alt: 'Mariée passant sous une haie d’honneur formée par les invités à l’entrée en salle',
        },
      },
    ],
  },
  {
    id: 'photos-video',
    layout: 'cards',
    title: 'Souvenirs & contenu',
    delivery: 'coordinated',
    lead:
      'Prestations proposées et coordonnées avec des partenaires habituels. Timing calé avec la soirée.',
    cards: [
      {
        title: 'Vidéobooth',
        text: 'Messages vidéo et clips courts pour un livre d\'or numérique.',
        image: {
          src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
          alt: 'Vidéobooth pour capturer des souvenirs vidéo lors d’une soirée',
        },
      },
      {
        title: 'Vidéo personnalisée',
        text: 'Montage photo ou vidéo pour un temps fort : cérémonie, anniversaire, discours.',
        image: {
          src: '/elements/photos/prestations/video-boucle-mariage-laura-maxime.mp4',
          alt: 'Extrait de vidéo personnalisée pour le mariage de Laura et Maxime',
          type: 'video',
        },
      },
      {
        title: 'Photographie',
        text: 'Reportage photo selon le style recherché, via partenaire coordonné.',
        image: {
          src: '/elements/gallery/mariage-couple-maries-hero.webp',
          alt: 'Couple de mariés lors d’une soirée animée par DJ Mika Private Events',
        },
      },
    ],
  },
  {
    id: 'artistes',
    layout: 'catalog',
    title: 'Artistes',
    delivery: 'referral',
    lead:
      'Mise en relation selon le style recherché et les disponibilités. Performance complémentaire à la prestation DJ.',
    items: [
      {
        title: 'Drag queen',
        text: 'Moment live en cocktail ou en soirée.',
        image: {
          src: '/elements/photos/prestations/drag-queen-aquarii-animation.webp',
          alt: 'Spectacle drag queen Aquarii proposé parmi les animations Private Events',
        },
      },
      {
        title: 'Musicien live',
        text: 'Cérémonie, cocktail ou ouverture de bal.',
      },
      {
        title: 'Magicien, mentaliste, humour',
        text: 'Animations de table ou spectacle court.',
      },
    ],
    gallery: [
      {
        id: 'drag-queen-aquarii-animation',
        src: '/elements/photos/prestations/drag-queen-aquarii-animation.webp',
        alt: 'Spectacle drag queen Aquarii proposé parmi les animations Private Events',
        width: 1440,
        height: 1440,
      },
      {
        id: 'anniversaire-18-ans-mathys-saint-cyr-sur-mer-drag-queen',
        src: '/elements/gallery/anniversaire-18-ans-mathys-saint-cyr-sur-mer-drag-queen.webp',
        alt: 'Spectacle drag queen Aquarii lors d’un anniversaire à Saint-Cyr-sur-Mer',
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    id: 'services',
    layout: 'services',
    title: 'Services',
    delivery: 'referral',
    lead:
      'Organisation autour de l\'événement, présentée de façon sobre. Mise en relation selon votre projet.',
    items: [
      { title: 'Sécurité / gardiennage', text: 'Selon le lieu et le nombre d\'invités.' },
      { title: 'Restauration / personnel', text: 'Complément d\'organisation si besoin.' },
      { title: 'Garde d\'enfants', text: 'Animations adaptées pour les plus jeunes.' },
    ],
  },
];

export const prestationsCta = {
  title: 'Construire votre prestation',
  lead: 'Indiquez le type d\'événement, le format technique et les options souhaitées. Réponse personnalisée, devis selon le projet.',
  href: '/mon-evenement',
  label: 'Construire mon événement',
};
