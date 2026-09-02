import { Link } from 'react-router-dom';
import {
  FaBuilding,
  FaCakeCandles,
  FaEllipsis,
  FaHeart,
  FaHouse,
} from 'react-icons/fa6';
import {
  ambianceOptions,
  CONSEIL_OPTION_ID,
  eventTypeOptions,
  guestCountOptions,
  MAX_AMBIANCE_SELECTIONS,
  prestationGroups,
  prestationHelp,
} from '../../content/configuratorSteps.js';
import { PrestationHelpPopover } from './PrestationHelpPopover.jsx';

const eventTypeIcons = {
  mariage: FaHeart,
  anniversaire: FaCakeCandles,
  'soiree-privee': FaHouse,
  entreprise: FaBuilding,
  autre: FaEllipsis,
};

function SelectCard({ id, label, description, selected, onSelect, type = 'radio', icon: Icon, variant }) {
  const isCheckbox = type === 'checkbox';
  const className = ['select-card', variant && `select-card--${variant}`, selected && 'is-selected']
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      aria-pressed={isCheckbox ? selected : undefined}
      aria-checked={!isCheckbox ? selected : undefined}
      role={isCheckbox ? undefined : 'radio'}
      className={className}
      onClick={onSelect}
      id={id}
    >
      {Icon ? (
        <span className="select-card__icon" aria-hidden="true">
          <Icon />
        </span>
      ) : null}
      <span className="select-card__label">{label}</span>
      {description ? <span className="select-card__desc">{description}</span> : null}
    </button>
  );
}

function CheckboxCard({ id, label, checked, onChange, help }) {
  return (
    <div className={`checkbox-card${checked ? ' is-selected' : ''}`}>
      <label className="checkbox-card__main" htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkbox-card__label">{label}</span>
      </label>
      {help ? <PrestationHelpPopover label={label} help={help} /> : null}
    </div>
  );
}

export function StepEventType({ data, onChange }) {
  return (
    <ul className="select-cards select-cards--events">
      {eventTypeOptions.map((option) => (
        <li key={option.id}>
          <SelectCard
            id={`event-${option.id}`}
            label={option.label}
            description={option.description}
            icon={eventTypeIcons[option.id]}
            variant="event"
            selected={data.eventType === option.id}
            onSelect={() => onChange({ eventType: option.id })}
          />
        </li>
      ))}
    </ul>
  );
}

export function StepDetails({ data, onChange }) {
  return (
    <div className="configurator-fields">
      <div className="field">
        <span className="field__label">Date</span>
        <input
          type="date"
          name="date"
          value={data.date}
          disabled={data.noDate}
          onChange={(e) => onChange({ date: e.target.value })}
        />
        <label className="field-checkbox">
          <input
            type="checkbox"
            checked={data.noDate}
            onChange={(e) =>
              onChange({ noDate: e.target.checked, date: e.target.checked ? '' : data.date })
            }
          />
          Je n&apos;ai pas encore de date précise
        </label>
      </div>
      <label className="field">
        <span className="field__label">Ville / lieu</span>
        <input
          type="text"
          name="location"
          value={data.location}
          placeholder="Ex. Avignon, domaine près du Luberon…"
          onChange={(e) => onChange({ location: e.target.value })}
        />
      </label>
      <fieldset className="field fieldset">
        <legend className="field__label">Nombre d&apos;invités</legend>
        <ul className="select-cards select-cards--compact">
          {guestCountOptions.map((option) => (
            <li key={option.id}>
              <SelectCard
                id={`guests-${option.id}`}
                label={option.label}
                selected={data.guestCount === option.id}
                onSelect={() => onChange({ guestCount: option.id })}
              />
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
}

export function StepAmbiance({ data, onChange }) {
  const toggleAmbiance = (id) => {
    const current = data.ambiance;
    if (current.includes(id)) {
      onChange({ ambiance: current.filter((a) => a !== id) });
      return;
    }
    if (id === 'discuter') {
      onChange({ ambiance: ['discuter'] });
      return;
    }
    const withoutDiscuss = current.filter((a) => a !== 'discuter');
    if (withoutDiscuss.length >= MAX_AMBIANCE_SELECTIONS) return;
    onChange({ ambiance: [...withoutDiscuss, id] });
  };

  return (
    <>
      <p className="configurator-hint">Sélectionnez jusqu&apos;à {MAX_AMBIANCE_SELECTIONS} ambiances.</p>
      <ul className="select-cards select-cards--ambiance">
        {ambianceOptions.map((option) => (
          <li key={option.id}>
            <SelectCard
              id={`ambiance-${option.id}`}
              type="checkbox"
              label={option.label}
              selected={data.ambiance.includes(option.id)}
              onSelect={() => toggleAmbiance(option.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export function StepPrestations({ data, onChange }) {
  const togglePrestation = (id) => {
    if (id === CONSEIL_OPTION_ID) {
      onChange({ prestations: data.prestations.includes(CONSEIL_OPTION_ID) ? [] : [CONSEIL_OPTION_ID] });
      return;
    }
    const withoutConseil = data.prestations.filter((p) => p !== CONSEIL_OPTION_ID);
    if (withoutConseil.includes(id)) {
      onChange({ prestations: withoutConseil.filter((p) => p !== id) });
      return;
    }
    onChange({ prestations: [...withoutConseil, id] });
  };

  return (
    <div className="prestation-groups">
      <button
        type="button"
        className={`select-card select-card--wide${data.prestations.includes(CONSEIL_OPTION_ID) ? ' is-selected' : ''}`}
        onClick={() => togglePrestation(CONSEIL_OPTION_ID)}
      >
        <span className="select-card__label">Je ne sais pas encore, j&apos;aimerais être conseillé</span>
      </button>
      {prestationGroups.map((group) => (
        <fieldset key={group.id} className="prestation-group">
          <legend className="prestation-group__title">{group.title}</legend>
          <ul className="checkbox-cards">
            {group.options.map((option) => (
              <li key={option.id}>
                <CheckboxCard
                  id={`prestation-${option.id}`}
                  label={option.label}
                  checked={data.prestations.includes(option.id)}
                  onChange={() => togglePrestation(option.id)}
                  help={prestationHelp[option.id]}
                />
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}

export function StepNotes({ data, onChange }) {
  return (
    <label className="field">
      <span className="field__label">Informations complémentaires (facultatif)</span>
      <textarea
        name="notes"
        rows={6}
        value={data.notes}
        placeholder="Horaires envisagés, contraintes du lieu, thème, artistes préférés, surprise prévue, besoins particuliers…"
        onChange={(e) => onChange({ notes: e.target.value })}
      />
    </label>
  );
}

export function StepContact({ data, onChange, errors }) {
  return (
    <div className="configurator-fields">
      <label className="field">
        <span className="field__label">Prénom et nom</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
        />
        {errors.name ? <span className="field__error">{errors.name}</span> : null}
      </label>
      <label className="field">
        <span className="field__label">Adresse e-mail</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
        {errors.email ? <span className="field__error">{errors.email}</span> : null}
      </label>
      <label className="field">
        <span className="field__label">Téléphone</span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          value={data.phone}
          placeholder="06 12 34 56 78"
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </label>
      <div className="field field--rgpd">
        <label className="field-checkbox field-checkbox--rgpd">
          <input
            type="checkbox"
            name="rgpdConsent"
            checked={data.rgpdConsent}
            onChange={(e) => onChange({ rgpdConsent: e.target.checked })}
          />
          <span>
            J&apos;accepte que mes données soient utilisées pour répondre à ma demande, conformément à
            la{' '}
            <Link to="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">
              politique de confidentialité
            </Link>
            .
          </span>
        </label>
        {errors.rgpdConsent ? <span className="field__error">{errors.rgpdConsent}</span> : null}
      </div>
    </div>
  );
}
