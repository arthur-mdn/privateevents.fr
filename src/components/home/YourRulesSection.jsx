import { yourRulesBlocks } from '../../content/homeSections.js';
import { getRulesIcon } from '../shared/rulesIcons.js';

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
        {yourRulesBlocks.map((block) => {
          const Icon = getRulesIcon(block.title);
          return (
            <li key={block.title} className="rules-card">
              {Icon ? (
                <span className="rules-card__icon" aria-hidden="true">
                  <Icon />
                </span>
              ) : null}
              <h3 className="rules-card__title">{block.title}</h3>
              <p className="rules-card__desc">{block.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
