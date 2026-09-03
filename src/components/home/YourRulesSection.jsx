import { yourRulesEditorial } from '../../content/homeSections.js';

export function YourRulesSection() {
  return (
    <section
      className="feature-split feature-split--reverse section--rules"
      aria-labelledby="your-rules-title"
    >
      <div className="feature-split__body">
        <h2 id="your-rules-title" className="heading-section">
          Votre soirée, vos règles
        </h2>
        <blockquote className="rules-editorial__quote">
          <p>{yourRulesEditorial.quote}</p>
        </blockquote>
      </div>
      <div className="feature-split__media">
        <img
          src={yourRulesEditorial.image}
          alt={yourRulesEditorial.imageAlt}
          width={720}
          height={540}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
