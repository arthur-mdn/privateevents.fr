const testimonialsUnsorted = [
  {
    id: '2024-11',
    quote:
      'Ravi d’avoir choisi DJ Mika pour animer ma soirée. Il a su créer une ambiance qui a rendu l’événement inoubliable.',
    author: 'Client particulier',
    context: 'Soirée privée',
    dateISO: '2024-11-23',
    rating: 5,
    source: 'Message reçu après l’événement',
  },
  {
    id: '2025-04',
    quote:
      'Professionnalisme, écoute et une playlist qui a fait danser tous les âges. Nos invités nous en reparlent encore.',
    author: 'Sophie & Marc',
    context: 'Mariage - Luberon',
    dateISO: '2025-04-26',
    rating: 5,
    source: 'Bark',
    realisationId: 'mariage-avignon-2025',
  },
  {
    id: '2025-07',
    quote:
      'Soirée d’entreprise réussie : sonorisation impeccable, karaoké très populaire. Parfait pour souder les équipes.',
    author: 'Comité d’animation',
    context: 'Entreprise - Vaucluse',
    dateISO: '2025-07-05',
    rating: 5,
    source: 'Message reçu après l’événement',
    realisationId: 'sephora-marseille',
  },
  {
    id: '2025-09',
    quote:
      'DJ Mika a su s’adapter au lieu et au thème de la fête. Ambiance fluide du cocktail jusqu’au dernier titre.',
    author: 'Père de Louis',
    context: 'Anniversaire de Louis - Sorgues',
    dateISO: '2025-09-19',
    rating: 5,
    source: 'Bark',
    realisationId: 'anniversaire-sorgues',
  },
  {
    id: '2026-04',
    quote:
      "Un immense merci à DJ Mika pour avoir fait de ma soirée d’anniversaire des 50 ans une soirée absolument inoubliable ! 🎉 \n Dès le premier morceau jusqu’au dernier, il a su créer une ambiance magique qui a fait chanter et danser tout le monde sans exception. Ce qui m’a vraiment plu , c’est sa capacité à s’adapter parfaitement à mes goûts, mes envies et mes attentes . On sentait qu’il avait à cœur de faire de cette soirée MA soirée. \nLe matériel était impeccable, le timing parfait, le tempo toujours juste, et l’énergie communicative du début à la fin. Rien n’a été laissé au hasard.\n C’est rare de trouver un DJ aussi professionnel, aussi à l’écoute et aussi passionné. Je recommande DJ Mika sans la moindre hésitation à quiconque souhaite une soirée qui se termine trop vite tellement on s’amuse !",
    author: 'Caroline L.',
    context: 'Anniversaire 50 ans - Loriol-du-Comtat',
    dateISO: '2026-04-18',
    rating: 5,
    source: 'Témoignage par e-mail',
    realisationId: 'anniversaire-50-loriol',
  },
  {
    id: '2026-06-oceane-anthony',
    quote:
      "Bonjour, j'attendais de rentrer chez moi pour vous envoyer un message, tout s'est bien terminé merci ! Vous avez été top, l'ambiance que vous avez mise été géniale, plus beaucoup de danseur sur la fin de soirée mais tout les retours que j'ai eu étaient très très positif à votre égard dont les mariés ! Je vous ai déjà recommandé à une amie qui se marie l'année prochaine. Très bonne continuation à vous aussi merci pour tout !",
    author: 'Témoin du mariage',
    context: 'Mariage Océane & Anthony - région lyonnaise / Valence',
    dateISO: '2026-06-20',
    rating: 5,
    source: 'Message reçu après l’événement',
    realisationId: 'mariage-oceane-anthony-2026',
  },
  {
    id: '2026-08-canelle',
    quote:
      "DJ Mika a été super ! De la prise de contact jusqu'à la fin de l'animation, tout a été très fluide et professionnel. Pour mes 30 ans, j'avais plusieurs thèmes musicaux à respecter, et il a parfaitement sû les gérer. Il a été très à l'écoute de mes envies, mais aussi de celles des participants, tout en sachant s'adapter à l'ambiance au fil de la soirée. Très ponctuel, professionnel et à l'écoute, je ne peux que le recommander si vous cherchez un DJ sérieux, flexible et qui sait mettre l'ambiance !",
    author: 'Canelle',
    context: 'Anniversaire 30 ans - Marseille',
    dateISO: '2026-08-01',
    rating: 5,
    source: 'Bark',
    realisationId: 'anniversaire-canelle-marseille-2026',
  },
  {
    id: '2026-08-laura-maxime',
    quote:
      "Bonjour Mickaël, c'est Laura et Maxime, les mariés de samedi dernier, le 29 août. Vous avez principalement tout organisé et échangé avec ma sœur, mais on tenait vraiment à vous écrire personnellement pour vous remercier. Vous avez été extrêmement professionnel et nous, comme nos invités, avons adoré votre travail. Vous avez accepté de reprendre notre mariage à seulement un mois de la date, en catastrophe après que notre premier DJ nous ait plantés... et finalement, on est vraiment très contents que les choses se soient passées ainsi et que ce soit vous qui ayez animé notre mariage ! Vous avez fait danser tout le monde plus que de raison, l'ambiance était géniale et on a passé une soirée incroyable. On espère aussi que vous avez apprécié nos macarons ! Encore un immense merci pour tout.",
    author: 'Laura & Maxime',
    context: 'Mariage - 29 août 2026',
    dateISO: '2026-08-29',
    rating: 5,
    source: 'Témoignage par e-mail',
    realisationId: 'mariage-laura-maxime-2026',
  },
];

export const testimonials = [...testimonialsUnsorted].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO),
);
