import { getEntrepriseGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const entrepriseFaq = [
  {
    question: 'Proposez-vous une facturation adaptée aux entreprises ?',
    answer:
      'Oui, la prestation est facturée dans un cadre professionnel avec les informations nécessaires pour votre comptabilité (SIRET, mentions légales, etc.).',
  },
  {
    question: 'Comment garantissez-vous la fiabilité le jour J ?',
    answer:
      'Installation en amont, tests avant l\'arrivée des invités, matériel professionnel et solutions de secours. Les horaires convenus sont respectés.',
  },
  {
    question: 'Gérez-vous la sonorisation pour prises de parole ?',
    answer:
      'Oui, micros et sonorisation sont adaptés aux discours, interventions et animations selon le format de votre événement.',
  },
  {
    question: 'Quels types d\'événements corporate couvrez-vous ?',
    answer:
      'Soirées d\'entreprise, séminaires, inaugurations, lancements produit, team building et événements internes. Chaque format est adapté à vos contraintes.',
  },
  {
    question: 'Comment obtenir une proposition pour notre événement ?',
    answer:
      'Utilisez le configurateur en précisant la date, le lieu, le nombre d\'invités et le format souhaité, ou contactez-nous directement. Une réponse personnalisée vous est adressée.',
  },
];

export const entrepriseLandingContent = {
  hero: {
    titleId: 'entreprise-hero-title',
    eyebrow: 'Entreprise • Sud de la France',
    title: 'Votre événement corporate, fiable et sur mesure.',
    intro:
      'Animation musicale, sonorisation et coordination pour soirées d\'entreprise, séminaires et inaugurations. Fiabilité, horaires respectés et cadre professionnel.',
    reassurance: ['Facturation entreprise', 'Horaires garantis', 'Coordination sur site'],
    image: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.jpg',
    primaryCta: { href: '/mon-evenement?type=entreprise', label: 'Parler de mon événement' },
    secondaryCta: { href: '#galerie-entreprise', label: 'Voir des réalisations' },
  },
  promesse: {
    title: 'Un partenaire fiable pour vos événements',
    lead:
      'Private Events comprend les exigences du corporate : respect des horaires, discrétion, coordination avec vos équipes et prestation adaptée à l\'identité de votre entreprise.',
    points: [
      {
        title: 'Fiabilité & ponctualité',
        description: 'Installation en amont, tests avant l\'arrivée des invités, respect strict des horaires convenus.',
      },
      {
        title: 'Cadre professionnel',
        description: 'Facturation entreprise, devis détaillé et communication claire avec vos interlocuteurs.',
      },
      {
        title: 'Coordination sur site',
        description: 'Prise en compte des contraintes du lieu, coordination avec le traiteur et les autres prestataires.',
      },
    ],
  },
  highlights: {
    title: 'Ce qui compte pour un événement d\'entreprise',
    lead: 'Des points clés que nous intégrons systématiquement dans chaque prestation corporate.',
    blocks: [
      {
        title: 'Horaires & planning',
        description: 'Respect du déroulement : accueil, discours, cocktail, animation et fin de soirée.',
      },
      {
        title: 'Sonorisation & micros',
        description: 'Diffusion sonore adaptée aux prises de parole, interventions et animations.',
      },
      {
        title: 'Identité de l\'entreprise',
        description: 'Ambiance musicale et volume adaptés au cadre professionnel et à votre image de marque.',
      },
      {
        title: 'Volume d\'invités',
        description: 'Équipement dimensionné selon le nombre de participants et la configuration du lieu.',
      },
      {
        title: 'Contraintes du lieu',
        description: 'Anticipation des accès, horaires imposés, niveau sonore et contraintes techniques.',
      },
      {
        title: 'Facturation & suivi',
        description: 'Devis détaillé, facture professionnelle et interlocuteur unique pour votre projet.',
      },
    ],
  },
  timeline: {
    title: 'Déroulement d\'un événement corporate',
    lead: 'Un processus structuré pour garantir une prestation sans imprévu.',
    steps: [
      {
        step: '01',
        title: 'Brief & contraintes',
        description: 'Type d\'événement, lieu, horaires, nombre d\'invités, contraintes techniques et identité entreprise.',
      },
      {
        step: '02',
        title: 'Proposition & devis',
        description: 'Prestation détaillée, facturation entreprise et validation avec vos interlocuteurs.',
      },
      {
        step: '03',
        title: 'Préparation & coordination',
        description: 'Planning, sonorisation des temps forts, coordination avec le lieu et les prestataires.',
      },
      {
        step: '04',
        title: 'Jour J',
        description: 'Installation anticipée, tests, animation et respect du déroulement convenu.',
      },
    ],
  },
  formats: {
    title: 'Formats d\'événements corporate',
    lead: 'Chaque type d\'événement a ses spécificités. Voici les formats les plus courants.',
    items: [
      {
        title: 'Soirée d\'entreprise',
        description: 'Cocktail, dîner ou soirée dansante pour fédérer vos équipes.',
        image: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.jpg',
        imageAlt: 'Animation DJ lors d\'un événement corporate',
      },
      {
        title: 'Inauguration & lancement',
        description: 'Accueil des invités, ambiance musicale et coordination des temps forts.',
        image: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.jpg',
        imageAlt: 'DJ anime une inauguration en magasin',
      },
      {
        title: 'Séminaire & team building',
        description: 'Sonorisation pour interventions et animation musicale en fin de journée.',
        image: '/elements/photos/setup-dj-ecran-logo-mika-private-events.webp',
        imageAlt: 'Setup DJ professionnel avec écran Mika Private Events pour événement corporate',
      },
      {
        title: 'Événement interne',
        description: 'Pot de départ, fête de fin d\'année ou célébration d\'équipe.',
        image: '/elements/photos/dj-mains-console-pioneer-exterieur.webp',
        imageAlt: 'DJ Mika aux platines lors d’un événement en extérieur',
      },
    ],
  },
  options: {
    title: 'Prestations souvent demandées',
    lead: 'Options complémentaires pour enrichir votre événement corporate.',
    items: [
      {
        title: 'Sonorisation & micros',
        description: 'Diffusion sonore pour discours, interventions et animations.',
        image: {
          src: '/elements/photos/microphone-sans-fil-regie-dj.webp',
          alt: 'Microphone sans fil et régie DJ pour prises de parole',
        },
        helpKey: 'micro-discours',
      },
      {
        title: 'Karaoké d\'entreprise',
        description: 'Animation participative pour fédérer les équipes.',
        image: {
          src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
          alt: 'Poste DJ avec microphone pour animation karaoké corporate',
        },
        helpKey: 'karaoke',
      },
      {
        title: 'Blind test & quiz',
        description: 'Team building musical adapté à votre public.',
        image: {
          src: '/elements/gallery/inauguration-entreprise-frejus-buffet-annees-80.webp',
          alt: 'Buffet thème années 80 lors d\'un événement d\'entreprise',
        },
        helpKey: 'quiz',
      },
      {
        title: 'Photobooth corporate',
        description: 'Souvenirs personnalisés avec branding entreprise.',
        image: {
          src: '/elements/photos/prestations/videobooth-souvenirs-soiree.webp',
          alt: 'Vidéobooth pour souvenirs lors d\'un événement corporate',
        },
        helpKey: 'photobooth',
      },
      {
        title: 'Éclairage d\'ambiance',
        description: 'Mise en lumière du lieu et de votre identité visuelle.',
        image: {
          src: '/elements/photos/setup-dj-ecran-logo-mika-private-events.webp',
          alt: 'Setup DJ professionnel avec éclairage pour événement corporate',
        },
        helpKey: 'eclairage',
      },
      {
        title: 'Coordination multi-prestataires',
        description: 'Interlocuteur unique pour synchroniser les temps forts.',
        image: {
          src: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.jpg',
          alt: 'DJ Mika anime une inauguration corporate à Marseille',
        },
      },
    ],
  },
  caseStudy: {
    title: 'Exemple de prestation',
    meta: ['Inauguration - Sephora Marseille', '2025', 'Terrasses du Port'],
    brief:
      'Animation musicale pour l\'ouverture d\'un magasin, ambiance corporate et accueil des invités dans un cadre professionnel.',
    prestations: ['DJ', 'Sonorisation', 'Coordination sur site'],
    outcome:
      'Prestation fluide et professionnelle, respect des horaires et ambiance adaptée au cadre corporate.',
    image: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.jpg',
    imageAlt: 'DJ Mika anime l\'ouverture Sephora Marseille Terrasses du Port',
  },
  gallery: {
    anchorId: 'galerie-entreprise',
    title: 'Galerie événements corporate',
    lead: 'Quelques instants capturés lors d\'événements d\'entreprise animés en Provence.',
    ariaLabel: 'Galerie photos d\'événements corporate',
    getItems: getEntrepriseGalleryItems,
  },
  testimonialsSection: {
    title: 'Avis d\'entreprises',
    lead: 'Retours d\'expérience après des prestations corporate.',
    getItems: () =>
      testimonials.filter((t) => t.context?.toLowerCase().includes('entreprise')),
  },
  faq: {
    title: 'Questions fréquentes - Entreprise',
    items: entrepriseFaq,
  },
  cta: {
    title: 'Prêt à organiser votre événement corporate ?',
    lead: 'Décrivez votre projet : date, lieu, format, nombre d\'invités et contraintes spécifiques.',
    href: '/mon-evenement?type=entreprise',
    label: 'Construire mon événement entreprise',
  },
};
