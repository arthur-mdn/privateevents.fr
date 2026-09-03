import {
  FaBan,
  FaBoxOpen,
  FaMusic,
  FaPeopleGroup,
  FaPlug,
  FaStar,
} from 'react-icons/fa6';

export const rulesIconsByTitle = {
  Incontournables: FaStar,
  'Vos incontournables': FaStar,
  'À éviter': FaBan,
  'Vos interdits': FaBan,
  'Adaptation en direct': FaMusic,
  "L'ambiance en direct": FaMusic,
  'Moments participatifs': FaPeopleGroup,
};

export function getRulesIcon(title) {
  if (rulesIconsByTitle[title]) return rulesIconsByTitle[title];

  const lower = title.toLowerCase();
  if (lower.includes('incontournable') || lower.includes('priorit')) return FaStar;
  if (lower.includes('interdit') || lower.includes('éviter') || lower.includes('eviter')) {
    return FaBan;
  }
  if (lower.includes('participatif') || lower.includes('moment')) return FaPeopleGroup;
  if (lower.includes('ambiance') || lower.includes('adaptation') || lower.includes('direct')) {
    return FaMusic;
  }
  return null;
}

export const prestationModeIcons = {
  'Formule complète': FaBoxOpen,
  'Plug and play': FaPlug,
};

export function getPrestationModeIcon(title) {
  return prestationModeIcons[title] ?? null;
}
