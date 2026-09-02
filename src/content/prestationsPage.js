export const prestationsHero = {
  eyebrow: 'Prestations',
  title: 'Un écosystème complet pour votre événement',
  intro:
    'DJ, sonorisation, éclairage, animations, photos, artistes et services complémentaires : chaque prestation s\'intègre dans une expérience cohérente, construite avec vous.',
  titleId: 'prestations-hero-title',
  image: '/elements/gallery/mariage-interieur-lumieres-dynamiques.jpg',
};

export const prestationsSections = [
  {
    id: 'dj-musique',
    title: 'DJ & musique',
    what:
      'Animation musicale par DJ avec programmation personnalisée, mix en direct et gestion des temps forts de la soirée.',
    forEvents: 'Mariages, anniversaires, soirées privées, événements corporate et inaugurations.',
    brings:
      'Une ambiance sur mesure qui s\'adapte à vos goûts, à vos invités et au rythme réel de la soirée.',
    integration:
      'Cœur de la prestation Private Events. Coordonné avec sonorisation, éclairage et animations complémentaires.',
    image: '/elements/gallery/mariage-interieur-lumieres-dynamiques.jpg',
    imageAlt: 'DJ en prestation avec éclairages dynamiques',
  },
  {
    id: 'sonorisation',
    title: 'Sonorisation',
    what:
      'Diffusion sonore professionnelle dimensionnée selon le lieu, le nombre d\'invités et le déroulement de l\'événement.',
    forEvents: 'Cérémonies, cocktails, discours, repas et soirées dansantes, intérieur ou extérieur.',
    brings:
      'Un son clair et adapté à chaque moment : musique de fond discrète, volume festif ou micro pour les interventions.',
    integration:
      'Inclus dans la prestation DJ ou en option pour les temps forts (discours, cérémonie). Anticipé lors de la préparation.',
    image: '/elements/photos/dj-setup.png',
    imageAlt: 'Installation de sonorisation professionnelle',
  },
  {
    id: 'eclairage',
    title: 'Éclairage',
    what:
      'Mise en lumière du lieu avec jeux de lumières, éclairage d\'ambiance et effets visuels pour les temps forts.',
    forEvents: 'Soirées dansantes, ouvertures de bal, inaugurations et événements en salle ou extérieur.',
    brings:
      'Une atmosphère visuelle qui transforme le lieu et met en valeur les moments clés de la soirée.',
    integration:
      'Combiné avec la prestation DJ. Dimensionné selon la surface et les contraintes du lieu.',
    image: '/elements/gallery/anniversaire-18ans-jeunes-ambiances-lumiere.jpg',
    imageAlt: 'Ambiance lumineuse bleue lors de la soirée Yogan',
  },
  {
    id: 'animations',
    title: 'Animations',
    what:
      'Karaoké, quiz, blind test et animations participatives animées par micro pour varier la soirée.',
    forEvents: 'Anniversaires, soirées privées, team building et soirées d\'entreprise.',
    brings:
      'Des moments interactifs qui impliquent vos invités sans casser l\'ambiance générale.',
    integration:
      'Créneaux dédiés intégrés dans la programmation DJ. Matériel karaoké et micro inclus.',
    image: '/elements/photos/dj-karaoke.jpeg',
    imageAlt: 'Animation karaoké avec micro et public',
  },
  {
    id: 'photos-video',
    title: 'Photos & vidéo',
    what:
      'Photobooth, vidéobooth, photographe professionnel et diaporama photo ou vidéo personnalisé.',
    forEvents: 'Mariages, anniversaires, soirées privées et événements corporate.',
    brings:
      'Des souvenirs instantanés ou un reportage complet que vos invités et vous conserverez.',
    integration:
      'Coordonné avec le réseau de partenaires. Installation et timing adaptés au déroulement.',
    image: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
    imageAlt: 'Vidéobooth pour capturer des souvenirs vidéo lors d’une soirée',
    images: [
      {
        id: 'videobooth-souvenirs-soiree',
        src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
        alt: 'Vidéobooth pour capturer des souvenirs vidéo lors d’une soirée',
        width: 1536,
        height: 1024,
      },
    ],
  },
  {
    id: 'artistes',
    title: 'Artistes & performances',
    what:
      'Musiciens live, drag queen, magicien, mentaliste, humoriste et autres performances sur demande.',
    forEvents: 'Mariages (cocktail, ouverture de bal), anniversaires, inaugurations et événements premium.',
    brings:
      'Des moments live marquants qui complètent la prestation DJ et créent des souvenirs forts.',
    integration:
      'Coordonné avec le DJ pour les transitions. Sélection de partenaires selon votre projet et budget.',
    image: '/elements/photos/prestations/drag-queen-aquarii-animation.webp',
    imageAlt: 'Spectacle drag queen Aquarii proposé parmi les animations Private Events',
    images: [
      {
        id: 'drag-queen-aquarii-animation',
        src: '/elements/photos/prestations/drag-queen-aquarii-animation.webp',
        alt: 'Spectacle drag queen Aquarii proposé parmi les animations Private Events',
        width: 1440,
        height: 1440,
      },
      {
        id: 'anniversaire-18-ans-mathys-saint-cyr-sur-mer-drag-queen',
        src: '/elements/gallery/anniversaire-18-ans-mathys-saint-cyr-sur-mer-drag-queen.jpeg',
        alt: 'Spectacle drag queen Aquarii lors d’un anniversaire à Saint-Cyr-sur-Mer',
        width: 5712,
        height: 4284,
      },
    ],
  },
  {
    id: 'mise-en-scene',
    title: 'Mise en scène',
    what:
      'Décoration, éclairage d\'ambiance, étincelles froides, machine à fumée, machine à bulles et effets visuels pour sublimer le lieu.',
    forEvents: 'Mariages, ouvertures de bal, inaugurations et événements avec temps forts.',
    brings:
      'Une mise en scène des moments clés qui amplifie l\'émotion et la photo.',
    integration:
      'Planifié en amont avec le DJ et les autres prestataires. Feu d\'artifice extérieur sous réserve des autorisations.',
    image: '/elements/gallery/mariage-avignon-2025-machine-a-fumee.jpg',
    imageAlt: 'Ouverture de bal avec fumée lourde et lumières',
  },
  {
    id: 'services',
    title: 'Services complémentaires',
    what:
      'Garde d\'enfants, animations enfants, personnel de restauration, sécurité et gardiennage.',
    forEvents: 'Mariages, anniversaires familiaux et grands événements privés ou corporate.',
    brings:
      'Une organisation plus complète pour que vous puissiez profiter sereinement de votre événement.',
    integration:
      'Mobilisés via le réseau de partenaires. Coordonnés avec le déroulement global de la soirée.',
    image: '/elements/photos/dj-soiree.png',
    imageAlt: 'Ambiance de soirée événementielle',
  },
];

export const prestationsCta = {
  title: 'Construire votre prestation sur mesure',
  lead: 'Décrivez votre projet et sélectionnez les prestations qui vous intéressent. Réponse personnalisée de Mika.',
  href: '/mon-evenement',
  label: 'Construire mon événement',
};
