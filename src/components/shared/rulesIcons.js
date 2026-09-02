import { FaBan, FaMusic, FaStar } from 'react-icons/fa6';

export const rulesIconsByTitle = {
  'Vos incontournables': FaStar,
  'Vos interdits': FaBan,
  "L'ambiance en direct": FaMusic,
};

export function getRulesIcon(title) {
  if (rulesIconsByTitle[title]) return rulesIconsByTitle[title];

  const lower = title.toLowerCase();
  if (lower.includes('incontournable') || lower.includes('priorit')) return FaStar;
  if (lower.includes('interdit') || lower.includes('éviter') || lower.includes('eviter')) {
    return FaBan;
  }
  if (lower.includes('ambiance')) return FaMusic;
  return null;
}
