const testimonialsUnsorted = [
  {
    id: '2026-10-24-emilie-vitrolles',
    quote:
      "Nous avons fait appel à Michael sur recommandation pour animer notre soirée d'anniversaire réunissant 60 personnes, et nous ne regrettons absolument pas notre choix :\nDès les premiers échanges, Michael s'est montré très à l'écoute et soucieux de connaître nos goûts et nos envies afin d'adapter au mieux sa prestation. Il a partaitement respecté nos choix musicaux et assure une super animation, avec notamment la mise en place d'un karaoké qui a rencontré un beau succès auprès de nos invités et des enfants !\nMichael est très bien équipé, professionnel, ponctuel, gentil et d'une grande patience, y compris avec les enfants.\nNos invités ont eux aussi passé un excellent moment ! Certains ont meme été séduits par sa prestation au point de lui demander directement ses coordonnées. C'est certainement le meilleur témoianage de la qualité de son travail !\nUn grand merci à Michael pour sa disponibilité, son professionnalisme et sa bonne humeur. Il a largement contribué à la réussite de notre soirée.\nNous le recommandons sans la moindre hésitation. Vous pouvez lui faire confiance les yeux fermés !",
    author: 'Émilie',
    context: 'Anniversaire 40 ans - Vitrolles',
    dateISO: '2026-10-24',
    rating: 5,
    source: 'Message reçu après l’événement',
    realisationId: 'anniversaire-40-emilie-vitrolles-2026',
  },
  {
    id: '2026-09-26-emilie',
    quote:
      'Merci DJ Micka! La soirée fut excellente ! Merci pour votre précieuse organisation et votre écoute. Je n’ai eu que des compliments sur votre prestation !',
    author: 'Émilie',
    context: 'Anniversaire 50 ans - Carnon-Plage',
    dateISO: '2026-09-26',
    rating: 5,
    source: 'Message reçu après l’événement',
    realisationId: 'anniversaire-50-emilie-carnon-2026',
  },
  {
    id: '2025-11-22',
    quote:
      'Très content d’avoir fait appel à DJ Mika pour ma soirée. Il a vraiment été à l’écoute de ce qu’on voulait et a réussi à mettre une super ambiance. Les invités se sont bien amusés et la soirée s’est super bien passée. Je recommande !',
    author: 'Client particulier',
    context: 'Soirée privée',
    dateISO: '2025-11-22',
    rating: 5,
    source: 'Message reçu après l’événement',
  },
  {
    id: '2025-10-04',
    quote:
      'On avait peur que la musique ne plaise pas à tout le monde, avec des invités très différents en âge. Mika a pris le temps de préparer avec nous avant le mariage. Le jour J, tout s’est enchaîné naturellement : cocktail posé, belle ouverture de bal, puis une piste pleine jusqu’au bout. Plusieurs invités nous ont recontactés après pour lui dire merci.',
    author: 'Sophie & Marc',
    context: 'Mariage - Avignon',
    dateISO: '2025-10-04',
    rating: 5,
    source: 'Bark',
    realisationId: 'mariage-avignon-2025',
  },
  {
    id: '2026-03-07',
    quote:
      "Mika est venu mixer pour l’inauguration de notre boutique. L’ambiance était exactement comme on le souhaitait, dynamique mais sans prendre le dessus. On a pu profiter de l’après-midi avec nos clientes sans avoir à gérer toute la partie technique. Merci encore !",
    author: 'Équipe boutique',
    context: 'Entreprise - Inauguration Sephora, Marseille',
    dateISO: '2026-03-07',
    rating: 5,
    source: 'Message reçu après l’événement',
    realisationId: 'sephora-marseille',
  },
  {
    id: '2025-09',
    quote:
      'Merci à DJ Mika pour l’anniversaire de Louis ! Il s’est très bien adapté au lieu et à ce qu’on avait prévu. La musique était top, aussi bien pendant le cocktail que pour la soirée. Tout le monde a passé un très bon moment, merci encore',
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
    id: '2026-09-12-casanaize',
    quote:
      "Mika est très professionnel. Avant la prestation, en nous demandant nos playlists et nos préférences dans l'organisation, puis pendant la soirée pendant laquelle j'ai retrouvé toutes mes demandes intégrées de manière transparente. Matériel au top pour le karaoké et blind test qui a lancé la soirée, puis animation lumière et musicale qui ont tenu tout le monde sur la piste jusqu'au bout de la nuit, soirée inoubliable garantie avec Mika !",
    author: 'Hôte de la soirée',
    context: 'Anniversaire 60 ans - La Caza’naise, Vernègues',
    dateISO: '2026-09-12',
    rating: 5,
    source: 'Message reçu après l’événement',
    realisationId: 'anniversaire-60-casanaize-vernegues-2026',
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
