import { useId } from 'react';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {import('react').ReactNode} props.children
 * @param {string} props.image
 * @param {string} props.imageAlt
 * @param {boolean} [props.reverse]
 */
export function FeatureSplit({ title, children, image, imageAlt, reverse = false }) {
  const headingId = useId();

  return (
    <section
      className={`feature-split${reverse ? ' feature-split--reverse' : ''}`}
      aria-labelledby={headingId}
    >
      <div className="feature-split__media">
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
      <div className="feature-split__body">
        <h2 id={headingId} className="heading-section">
          {title}
        </h2>
        <div className="feature-split__prose">{children}</div>
      </div>
    </section>
  );
}
