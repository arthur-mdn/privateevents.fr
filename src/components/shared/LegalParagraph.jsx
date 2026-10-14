const LINK_PATTERN =
  /(https?:\/\/[^\s]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(0\d(?:[\s.-]?\d{2}){4})/g;

function linkifyText(text) {
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [full, url, email, phone] = match;
    if (url) {
      const href = url.replace(/[.,;:)]+$/, '');
      const trailing = url.slice(href.length);
      parts.push(
        <a key={`url-${key++}`} href={href} target="_blank" rel="noopener noreferrer">
          {href}
        </a>,
      );
      if (trailing) parts.push(trailing);
    } else if (email) {
      parts.push(
        <a key={`email-${key++}`} href={`mailto:${email}`}>
          {email}
        </a>,
      );
    } else if (phone) {
      const tel = phone.replace(/[\s.-]/g, '');
      parts.push(
        <a key={`tel-${key++}`} href={`tel:+33${tel.slice(1)}`}>
          {phone}
        </a>,
      );
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function LegalParagraph({ children }) {
  return <p>{linkifyText(children)}</p>;
}
