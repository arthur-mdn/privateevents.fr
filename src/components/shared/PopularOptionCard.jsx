import { prestationHelp } from '../../content/configuratorSteps.js';
import { PrestationHelpPopover } from '../configurator/PrestationHelpPopover.jsx';

export function PopularOptionCard({ title, description, image, helpKey }) {
  const help = helpKey ? prestationHelp[helpKey] : null;

  return (
    <li className="popular-option-card">
      <div className="popular-option-card__media">
        <img
          className="popular-option-card__img"
          src={image.src}
          alt={image.alt}
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="popular-option-card__body">
        <div className="popular-option-card__header">
          <h3 className="popular-option-card__title">{title}</h3>
          {help ? <PrestationHelpPopover label={title} help={help} /> : null}
        </div>
        <p className="popular-option-card__desc">{description}</p>
      </div>
    </li>
  );
}
