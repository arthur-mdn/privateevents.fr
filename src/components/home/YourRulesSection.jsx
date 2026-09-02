import { yourRulesBlocks } from '../../content/homeSections.js';

export function YourRulesSection() {
  return (
    <section className="section section--rules" aria-labelledby="your-rules-title">
      <h2 id="your-rules-title" className="heading-section">
        Votre soirée, vos règles
      </h2>
      <p className="lead">
        Une bonne programmation ne consiste pas à imposer une playlist. Elle se prépare avec vous
        puis évolue avec vos invités.
      </p>
      <ul className="rules-grid">
        {yourRulesBlocks.map((block) => (
          <li key={block.title} className="rules-card">
            <h3 className="rules-card__title">{block.title}</h3>
            <p className="rules-card__desc">{block.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
