/** @typedef {{ id: number; name: string; description: string; writer: string; img: string; src: string; mime: string }} PlaylistItem */

/** @type {PlaylistItem[]} */
export const playlist = [
  {
    id: 2,
    name: 'Mix live — rap français 2024',
    description:
      'Un mix d’environ 30 minutes réalisé en live — rap français 2024. Écoute libre.',
    writer: 'DJ Mika — Private Events',
    img: '/elements/covers/private-events-mix-rap-2024.png',
    src: '/recordings/Mix_Rap_Francais_2024_DJ-MIKA_Private-Events.wav',
    mime: 'audio/wav',
  },
  {
    id: 1,
    name: 'Mix généraliste — 1970 à aujourd’hui',
    description:
      'Mix généraliste en live, en écoute libre : des années 1970 aux titres actuels.',
    writer: 'DJ Mika — Private Events',
    img: '/elements/covers/mix-1970-2024.png',
    src: '/recordings/Mix_Generaliste_DJ-MIKA_Private-Events_2024.mp3',
    mime: 'audio/mpeg',
  },
];
