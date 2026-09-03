import { getEntrepriseGalleryItems } from './realisations.js';
import { testimonials } from './testimonials.js';

export const entrepriseFaq = [
  {
    question: 'Proposez-vous une facturation adaptée aux entreprises ?',
    answer:
      'Oui, la prestation est facturée dans un cadre professionnel. Les mentions légales et informations nécessaires à votre comptabilité sont fournies au devis.',
  },
  {
    question: 'Comment garantissez-vous la fiabilité le jour J ?',
    answer:
      'Installation en amont, tests avant l\'arrivée des invités, respect des horaires et plan B technique. Un interlocuteur unique pour la coordination.',
  },
  {
    question: 'Gérez-vous la sonorisation pour prises de parole ?',
    answer:
      'Oui. Micros et diffusion sont adaptés aux discours, interventions et animations, avec un volume calé sur le cadre professionnel.',
  },
  {
    question: 'Quels types d\'événements corporate couvrez-vous ?',
    answer:
      'Gala, cocktail, séminaire, inauguration, team building et événements internes. Branding, horaires et contraintes du lieu sont pris en compte.',
  },
  {
    question: 'Comment obtenir une proposition pour notre événement ?',
    answer:
      'Utilisez le configurateur avec la date, le lieu, le volume d\'invités et le format. Devis personnalisé, sans simulateur tarifaire.',
  },
];

export const entrepriseLandingContent = {
  hero: {
    titleId: 'entreprise-hero-title',
    eyebrow: 'Entreprise • Provence',
    title: 'Événements d’entreprise : ponctualité, technique et coordination.',
    intro:
      'Prises de parole, cocktail, gala ou team building : un interlocuteur unique, une installation anticipée et un déroulé respecté.',
    reassurance: ['Horaires tenus', 'Sonorisation des interventions', 'Cadre professionnel'],
    image: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.webp',
    imageAlt: 'DJ Mika anime l’ouverture Sephora Marseille Terrasses du Port',
    primaryCta: { href: '/mon-evenement?type=entreprise', label: 'Parler de mon événement' },
    secondaryCta: { href: '#galerie-entreprise', label: 'Voir des réalisations' },
  },
  sections: [
    {
      type: 'plainPoints',
      id: 'entreprise-fiabilite',
      soft: true,
      columns: 2,
      title: 'Fiabilité, planning et facturation',
      lead:
        'Un événement d’entreprise se juge sur la ponctualité, le respect du déroulé et un devis clair, adapté à votre comptabilité.',
      points: [
        {
          title: 'Ponctualité',
          description:
            'Installation et tests avant l’arrivée des invités. Le déroulé annoncé est tenu.',
        },
        {
          title: 'Interlocuteur unique',
          description:
            'Un contact pour le brief, le jour J et le suivi. Moins d’allers-retours entre prestataires.',
        },
        {
          title: 'Facturation professionnelle',
          description:
            'Devis détaillé et facture adaptés au cadre entreprise, avec les éléments utiles à votre comptabilité.',
        },
        {
          title: 'Plan B technique',
          description:
            'Matériel dimensionné, vérifications sur site et solutions de repli si le lieu impose une contrainte.',
        },
      ],
    },
    {
      type: 'usageList',
      id: 'entreprise-formats',
      title: 'Formats corporate couverts',
      lead: 'Chaque format a ses contraintes d’horaire, de volume et de prise de parole.',
      items: [
        {
          title: 'Cocktail & soirée d’entreprise',
          description: 'Accueil, fond musical, montée progressive, fin de soirée cadrée dans le créneau du lieu.',
        },
        {
          title: 'Inauguration & lancement',
          description: 'Accueil des invités, interventions micro, ambiance adaptée à l’image de marque.',
        },
        {
          title: 'Séminaire & team building',
          description: 'Sonorisation des prises de parole le jour, animation musicale en fin de journée si prévu.',
        },
        {
          title: 'Gala',
          description: 'Déroulé serré : discours, dîner, ouverture de piste, respect strict des horaires.',
        },
        {
          title: 'Événement interne',
          description: 'Pot de départ, fin d’année ou célébration d’équipe, avec volume calé sur le cadre pro.',
        },
      ],
    },
    {
      type: 'editorialSplit',
      id: 'entreprise-parole',
      title: 'Prises de parole et sonorisation',
      lead:
        'Dans un événement corporate, le micro compte autant que la playlist. Discours, interventions et animations doivent être audibles sans saturer la salle.',
      body: [
        'Micros, diffusion et niveaux sont préparés avec le planning des interventions. L’ambiance musicale reprend ensuite sans rupture, au volume adapté au cadre professionnel.',
      ],
      image: '/elements/photos/microphone-sans-fil-regie-dj.webp',
      imageAlt: 'Microphone sans fil et régie DJ pour prises de parole',
      points: [
        {
          title: 'Avant les invités',
          description: 'Tests micro et équilibrage selon la salle.',
        },
        {
          title: 'Pendant les interventions',
          description: 'Priorité à la parole, musique en retrait ou coupée.',
        },
      ],
    },
    {
      type: 'timeline',
      id: 'entreprise-logistique',
      title: 'Logistique d’un événement pro',
      lead: 'Brief, devis, coordination puis jour J : les étapes restent courtes et concrètes.',
      steps: [
        {
          step: '01',
          title: 'Brief & contraintes',
          description:
            'Format, lieu, horaires, volume d’invités, branding, accès technique et contraintes du site.',
        },
        {
          step: '02',
          title: 'Proposition & devis',
          description: 'Prestation détaillée, facturation entreprise, validation avec vos interlocuteurs.',
        },
        {
          step: '03',
          title: 'Coordination',
          description:
            'Planning des prises de parole, calage avec le lieu, le traiteur et les autres prestataires.',
        },
        {
          step: '04',
          title: 'Jour J',
          description: 'Installation anticipée, tests, animation et respect du déroulé convenu.',
        },
      ],
    },
    {
      type: 'options',
      id: 'entreprise-options',
      title: 'Prestations souvent demandées en corporate',
      lead: 'Micros, quiz, karaoké ou éclairage : selon le format et l’image de marque.',
      items: [
        {
          title: 'Sonorisation & micros',
          description: 'Diffusion pour discours, interventions et animations.',
          image: {
            src: '/elements/photos/microphone-sans-fil-regie-dj.webp',
            alt: 'Microphone sans fil et régie DJ pour prises de parole',
          },
          helpKey: 'micro-discours',
        },
        {
          title: 'Blind test & quiz',
          description: 'Team building musical adapté à votre public.',
          image: {
            src: '/elements/photos/prestations/quiz-musical-large-avec-public.webp',
            alt: 'Quiz musical et blind test pour un team building d’entreprise',
          },
          helpKey: 'quiz',
        },
        {
          title: 'Karaoké d’entreprise',
          description: 'Animation participative pour fédérer les équipes, sur un créneau défini.',
          image: {
            src: '/elements/photos/poste-dj-ordinateur-micro-exterieur.webp',
            alt: 'Poste DJ avec microphone pour animation karaoké corporate',
          },
          helpKey: 'karaoke',
        },
        {
          title: 'Éclairage d’ambiance',
          description: 'Mise en lumière du lieu, compatible avec votre identité visuelle.',
          image: {
            src: '/elements/photos/setup-dj-ecran-logo-mika-private-events.webp',
            alt: 'Setup DJ professionnel avec éclairage pour événement corporate',
          },
          helpKey: 'eclairage',
        },
      ],
    },
    {
      type: 'caseStudy',
      id: 'entreprise-case',
      title: 'Exemple : inauguration Sephora, Marseille',
      meta: ['Inauguration - Sephora Marseille', 'Juillet 2025', 'Terrasses du Port'],
      brief:
        'Ouverture de magasin : accueil musical des invités, cadre corporate et sonorisation adaptée au lieu, sans surjouer l’ambiance.',
      prestations: ['DJ', 'Sonorisation', 'Accueil musical'],
      outcome:
        'Prestation fluide, horaires respectés, ambiance calée sur l’image de marque et le déroulement de l’inauguration.',
      image: '/elements/gallery/inauguration-ouverture-sephora-marseille-vieux-port.webp',
      imageAlt: 'DJ Mika anime l’ouverture Sephora Marseille Terrasses du Port',
      links: [
        { href: '/realisations#sephora-marseille', label: 'Voir la réalisation' },
        { href: '/avis#avis-2025-07', label: 'Lire l’avis' },
      ],
    },
    {
      type: 'gallery',
      id: 'entreprise-gallery',
      anchorId: 'galerie-entreprise',
      title: 'Galerie événements corporate',
      lead: 'Quelques instants capturés lors d’événements d’entreprise animés en Provence.',
      ariaLabel: 'Galerie photos d’événements corporate',
      getItems: getEntrepriseGalleryItems,
    },
    {
      type: 'testimonials',
      id: 'entreprise-avis',
      title: 'Avis d’entreprises',
      lead: 'Retours d’expérience après des prestations corporate.',
      getItems: () =>
        testimonials.filter((t) => t.context?.toLowerCase().includes('entreprise')),
    },
    {
      type: 'faq',
      id: 'entreprise-faq',
      title: 'Questions fréquentes - Entreprise',
      items: entrepriseFaq,
    },
    {
      type: 'cta',
      id: 'entreprise-cta',
      title: 'Briefez votre événement corporate',
      lead: 'Date, lieu, format, nombre d’invités et contraintes. Devis professionnel, réponse sous 48 h.',
      href: '/mon-evenement?type=entreprise',
      label: 'Construire mon événement entreprise',
      secondaryLinks: [
        { to: '/realisations?type=entreprise', label: 'Réalisations entreprise' },
        { to: '/avis#entreprises', label: 'Avis corporate' },
        { to: '/prestations', label: 'Prestations' },
      ],
    },
  ],
};
