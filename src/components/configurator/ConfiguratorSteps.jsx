import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBoxOpen,
  FaBuilding,
  FaCakeCandles,
  FaChevronDown,
  FaCircleQuestion,
  FaEllipsis,
  FaHeart,
  FaHouse,
  FaVolumeHigh,
} from 'react-icons/fa6';
import {
  ambianceOptions,
  CONSEIL_OPTION_ID,
  eventTypeOptions,
  guestCountOptions,
  MAX_AMBIANCE_SELECTIONS,
  formatConfiguratorDate,
  getAmbianceLabels,
  getEventTypeLabel,
  getGuestCountLabel,
  getPrestationLabels,
  getVenueEquippedLabel,
  prestationGroups,
  prestationHelp,
  venueEquippedOptions,
} from '../../content/configuratorSteps.js';
import { PrestationHelpPopover } from './PrestationHelpPopover.jsx';

const eventTypeIcons = {
  mariage: FaHeart,
  anniversaire: FaCakeCandles,
  'soiree-privee': FaHouse,
  entreprise: FaBuilding,
  autre: FaEllipsis,
};

const venueEquippedIcons = {
  yes: FaVolumeHigh,
  no: FaBoxOpen,
  unknown: FaCircleQuestion,
};

const guestCountTickLabels = {
  'moins-30': '<30',
  '30-60': '30-60',
  '60-100': '60-100',
  '100-150': '100-150',
  '150-250': '150-250',
  '250-plus': '250+',
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

const guestCountRangeOptions = guestCountOptions.filter((option) => option.id !== 'unknown');
const guestCountUnknownOption = guestCountOptions.find((option) => option.id === 'unknown');

function GuestCountSlider({ value, onChange }) {
  const isUnknown = value === 'unknown';
  const rangeIndex = guestCountRangeOptions.findIndex((option) => option.id === value);
  const sliderIndex = rangeIndex >= 0 ? rangeIndex : 0;
  const currentLabel = isUnknown
    ? guestCountUnknownOption.label
    : guestCountRangeOptions[sliderIndex].label;

  return (
    <div className={`guest-count-slider${isUnknown ? ' is-unknown' : ''}`}>
      <p className="guest-count-slider__value" aria-live="polite">
        {currentLabel}
      </p>
      <div className="guest-count-slider__control">
        <input
          type="range"
          min={0}
          max={guestCountRangeOptions.length - 1}
          step={1}
          value={sliderIndex}
          disabled={isUnknown}
          aria-label="Nombre d'invités"
          aria-valuetext={currentLabel}
          onChange={(e) =>
            onChange({ guestCount: guestCountRangeOptions[Number(e.target.value)].id })
          }
        />
        <div className="guest-count-slider__ticks" aria-hidden="true">
          {guestCountRangeOptions.map((option, index) => (
            <span
              key={option.id}
              className={`guest-count-slider__tick${index === sliderIndex && !isUnknown ? ' is-active' : ''}`}
              style={{ '--tick': index }}
            >
              {guestCountTickLabels[option.id]}
            </span>
          ))}
        </div>
      </div>
      <label className="field-checkbox">
        <input
          type="checkbox"
          checked={isUnknown}
          onChange={(e) =>
            onChange({
              guestCount: e.target.checked
                ? 'unknown'
                : guestCountRangeOptions[sliderIndex].id,
            })
          }
        />
        {guestCountUnknownOption.label}
      </label>
    </div>
  );
}

function CheckboxCard({ id, label, checked, onChange, help, icon: Icon, variant }) {
  const className = ['checkbox-card', variant && `checkbox-card--${variant}`, checked && 'is-selected']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <label className="checkbox-card__main" htmlFor={id}>
        <input id={id} type="checkbox" checked={checked} onChange={onChange} />
        {Icon ? (
          <span className="checkbox-card__icon" aria-hidden="true">
            <Icon />
          </span>
        ) : null}
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
      <div className={`field${data.noDate ? ' field--dimmed' : ''}`}>
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
        <GuestCountSlider value={data.guestCount} onChange={onChange} />
      </fieldset>
    </div>
  );
}

export function StepVenueEquipped({ data, onChange }) {
  return (
    <ul className="select-cards select-cards--compact select-cards--venue">
      {venueEquippedOptions.map((option) => (
        <li key={option.id} className={option.id === 'unknown' ? 'select-cards__centered' : undefined}>
          <SelectCard
            id={`venue-${option.id}`}
            label={option.label}
            description={option.description}
            icon={venueEquippedIcons[option.id]}
            selected={data.venueEquipped === option.id}
            onSelect={() => onChange({ venueEquipped: option.id })}
          />
        </li>
      ))}
    </ul>
  );
}

export function ConfiguratorRecapSummary({ data }) {
  const dateLabel = formatConfiguratorDate(data.date, data.noDate);
  const prestations = getPrestationLabels(data.prestations);

  return (
    <div className="configurator-recap">
      <p className="configurator-recap__line">
        <strong>{getEventTypeLabel(data.eventType) || 'Non renseigné'}</strong>
      </p>
      {dateLabel ? <p className="configurator-recap__line">{dateLabel}</p> : null}
      {data.location ? <p className="configurator-recap__line">{data.location}</p> : null}
      {data.guestCount ? (
        <p className="configurator-recap__line">
          {data.guestCount === 'unknown'
            ? getGuestCountLabel(data.guestCount)
            : `${getGuestCountLabel(data.guestCount)} invités`}
        </p>
      ) : null}
      {data.venueEquipped ? (
        <p className="configurator-recap__line">
          Matériel sur place : {getVenueEquippedLabel(data.venueEquipped)}
        </p>
      ) : null}
      {data.ambiance.length > 0 ? (
        <p className="configurator-recap__line">
          Ambiance : {getAmbianceLabels(data.ambiance).join(', ')}
        </p>
      ) : null}
      {prestations.length > 0 ? (
        <>
          <p className="configurator-recap__label">Prestations sélectionnées</p>
          <p className="configurator-recap__line">{prestations.join(' • ')}</p>
        </>
      ) : null}
      {data.notes ? (
        <>
          <p className="configurator-recap__label">Informations complémentaires</p>
          <p className="configurator-recap__line configurator-recap__line--notes">{data.notes}</p>
        </>
      ) : null}
    </div>
  );
}

export function StepRecap({ data }) {
  return (
    <>
      <p className="configurator-hint">
        Vérifiez les informations ci-dessous. Utilisez Retour pour modifier une étape.
      </p>
      <ConfiguratorRecapSummary data={data} />
    </>
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
  const conseilSelected = data.prestations.includes(CONSEIL_OPTION_ID);
  const [openGroups, setOpenGroups] = useState(() =>
    conseilSelected ? [] : ['musique'],
  );

  const togglePrestation = (id) => {
    if (id === CONSEIL_OPTION_ID) {
      const enabling = !conseilSelected;
      onChange({ prestations: enabling ? [CONSEIL_OPTION_ID] : [] });
      setOpenGroups(enabling ? [] : ['musique']);
      return;
    }
    const withoutConseil = data.prestations.filter((p) => p !== CONSEIL_OPTION_ID);
    if (withoutConseil.includes(id)) {
      onChange({ prestations: withoutConseil.filter((p) => p !== id) });
      return;
    }
    onChange({ prestations: [...withoutConseil, id] });
  };

  const toggleGroup = (groupId) => {
    if (conseilSelected) {
      onChange({ prestations: [] });
      setOpenGroups([groupId]);
      return;
    }
    setOpenGroups((current) =>
      current.includes(groupId) ? current.filter((id) => id !== groupId) : [...current, groupId],
    );
  };

  return (
    <div className={`prestation-groups${conseilSelected ? ' is-muted' : ''}`}>
      <CheckboxCard
        id="prestation-conseil"
        variant="conseil"
        icon={FaCircleQuestion}
        label="Je ne sais pas encore, j'aimerais être conseillé"
        checked={conseilSelected}
        onChange={() => togglePrestation(CONSEIL_OPTION_ID)}
      />
      {prestationGroups.map((group) => {
        const isOpen = openGroups.includes(group.id);
        const panelId = `prestation-group-${group.id}`;
        const headerId = `${panelId}-header`;

        return (
          <section key={group.id} className={`prestation-group${isOpen ? ' is-open' : ''}`}>
            <h3 className="prestation-group__title">
              <button
                type="button"
                id={headerId}
                className="prestation-group__toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleGroup(group.id)}
              >
                {group.title}
                <span className="prestation-group__chevron" aria-hidden="true">
                  <FaChevronDown />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="prestation-group__panel"
              hidden={!isOpen}
            >
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
            </div>
          </section>
        );
      })}
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
