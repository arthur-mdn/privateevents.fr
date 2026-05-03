const testimonialsUnsorted = [
  {
    id: '2024-11',
    quote:
      'Ravi d’avoir choisi DJ Mika pour animer ma soirée. Il a su créer une ambiance qui a rendu l’événement inoubliable.',
    author: 'Client particulier',
    context: 'Soirée privée',
    dateISO: '2024-11-23',
    rating: 5,
  },
  {
    id: '2025-04',
    quote:
      'Professionnalisme, écoute et une playlist qui a fait danser tous les âges. Nos invités nous en reparlent encore.',
    author: 'Sophie & Marc',
    context: 'Mariage — Luberon',
    dateISO: '2025-04-26',
    rating: 5,
  },
  {
    id: '2025-07',
    quote:
      'Soirée d’entreprise réussie : sonorisation impeccable, karaoké très populaire. Parfait pour souder les équipes.',
    author: 'Comité d’animation',
    context: 'Entreprise — Vaucluse',
    dateISO: '2025-07-05',
    rating: 5,
  },
  {
    id: '2025-09',
    quote:
      'DJ Mika a su s’adapter au lieu et au thème de la fête. Ambiance fluide du cocktail jusqu’au dernier titre.',
    author: 'Famille L.',
    context: 'Anniversaire — Avignon',
    dateISO: '2025-09-19',
    rating: 5,
  },
  {
    id: '2026-04',
    quote:"Un immense merci à DJ Mika pour avoir fait de ma soirée d’anniversaire des 50 ans une soirée absolument inoubliable ! 🎉 \n Dès le premier morceau jusqu’au dernier, il a su créer une ambiance magique qui a fait chanter et danser tout le monde sans exception. Ce qui m’a vraiment plu , c’est sa capacité à s’adapter parfaitement à mes goûts, mes envies et mes attentes . On sentait qu’il avait à cœur de faire de cette soirée MA soirée. \nLe matériel était impeccable, le timing parfait, le tempo toujours juste, et l’énergie communicative du début à la fin. Rien n’a été laissé au hasard.\n C’est rare de trouver un DJ aussi professionnel, aussi à l’écoute et aussi passionné. Je recommande DJ Mika sans la moindre hésitation à quiconque souhaite une soirée qui se termine trop vite tellement on s’amuse !",
    author: 'Caroline L.',
    context: 'Anniversaire — Loriol du Comtat',
    dateISO: '2026-04-18',
    rating: 5,
  },
];

export const testimonials = [...testimonialsUnsorted].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO),
);
