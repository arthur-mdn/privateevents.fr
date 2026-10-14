import { useCallback, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { FaArrowLeft, FaArrowRight, FaPaperPlane } from 'react-icons/fa6';
import {
  buildFormMessage,
  configuratorSteps,
  eventTypeUrlMap,
  getEventTypeLabel,
  getVenueEquippedLabel,
  initialFormData,
} from '../../content/configuratorSteps.js';
import {
  ConfiguratorRecapSummary,
  StepAmbiance,
  StepContact,
  StepDetails,
  StepEventType,
  StepNotes,
  StepPrestations,
  StepRecap,
  StepVenueEquipped,
} from './ConfiguratorSteps.jsx';

const FORM_STEPS = configuratorSteps.length;
const CONTACT_STEP = FORM_STEPS;
const FORMSPREE_ID = 'mwkgrnyr';

function getContactErrors(formData) {
  const nextErrors = {};
  if (!formData.name.trim()) nextErrors.name = 'Indiquez votre nom.';
  if (!formData.email.trim()) nextErrors.email = 'Indiquez votre e-mail.';
  if (!formData.rgpdConsent) nextErrors.rgpdConsent = 'Le consentement est requis.';
  return nextErrors;
}

function ConfirmationScreen({ data }) {
  return (
    <div className="configurator-confirmation" role="status" tabIndex={-1}>
      <h2 className="heading-section">Merci, votre projet est bien parti.</h2>
      <p className="lead">
        Mika va pouvoir étudier votre demande avec les informations que vous venez de transmettre.
      </p>
      <ConfiguratorRecapSummary data={data} />
      <p className="configurator-next">
        Vous recevrez une réponse personnalisée par e-mail ou téléphone sous 2 jours ouvrés.
      </p>
      <Link className="btn btn--secondary" to="/">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

export function EventConfigurator() {
  const [searchParams] = useSearchParams();
  const preselectedType = searchParams.get('type');
  const initialEventType =
    preselectedType && eventTypeUrlMap[preselectedType] ? preselectedType : '';
  const [step, setStep] = useState(1);
  const [data, setData] = useState(() => ({
    ...initialFormData,
    eventType: initialEventType,
  }));
  const [errors, setErrors] = useState({});
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const ignoreNextSubmitRef = useRef(false);
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  const updateData = useCallback(
    (patch) => {
      setData((prev) => {
        const next = { ...prev, ...patch };
        if (step === CONTACT_STEP && contactSubmitted) {
          setErrors(getContactErrors(next));
        }
        return next;
      });
      if (step !== CONTACT_STEP) {
        setErrors({});
      }
    },
    [step, contactSubmitted],
  );

  const currentStepMeta = configuratorSteps[step - 1];
  const progress = (step / FORM_STEPS) * 100;

  const validateStep = useCallback(() => {
    const nextErrors = {};
    if (step === 1 && !data.eventType) {
      nextErrors.eventType = 'Sélectionnez un type d\'événement.';
    }
    if (step === 2) {
      if (!data.noDate && !data.date) {
        nextErrors.date = 'Indiquez une date ou cochez « pas encore de date ».';
      }
      if (!data.location.trim()) {
        nextErrors.location = 'Indiquez une ville ou un lieu.';
      }
      if (!data.guestCount) {
        nextErrors.guestCount = 'Sélectionnez une fourchette d\'invités.';
      }
    }
    if (step === 3 && !data.venueEquipped) {
      nextErrors.venueEquipped = 'Indiquez si le lieu est déjà équipé.';
    }
    if (step === 4 && data.ambiance.length === 0) {
      nextErrors.ambiance = 'Sélectionnez au moins une ambiance.';
    }
    if (step === CONTACT_STEP) {
      Object.assign(nextErrors, getContactErrors(data));
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [step, data]);

  const goNext = () => {
    if (!validateStep()) return;
    const nextStep = Math.min(step + 1, FORM_STEPS);
    if (nextStep === CONTACT_STEP) {
      setContactSubmitted(false);
      setErrors({});
      ignoreNextSubmitRef.current = true;
    }
    setStep(nextStep);
  };

  const goBack = () => {
    setErrors({});
    if (step === CONTACT_STEP) {
      setContactSubmitted(false);
    }
    setStep((s) => Math.max(s - 1, 1));
  };

  const formMessage = useMemo(() => buildFormMessage(data), [data]);

  const onFormSubmit = (e) => {
    if (ignoreNextSubmitRef.current) {
      ignoreNextSubmitRef.current = false;
      e.preventDefault();
      return;
    }
    if (step !== CONTACT_STEP) {
      e.preventDefault();
      return;
    }
    setContactSubmitted(true);
    if (!validateStep()) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
    return <ConfirmationScreen data={data} />;
  }

  return (
    <div className="configurator">
      {step === 1 ? (
        <aside className="configurator-banner" aria-labelledby="configurator-banner-title">
          <p className="configurator-banner__eyebrow">Mika Private Events</p>
          <p id="configurator-banner-title" className="configurator-banner__title">
            Construire mon événement
          </p>
          <p className="configurator-banner__text">
            Décrivez le type d&apos;événement, le lieu, les horaires et les options souhaitées.
            Chaque prestation fait l&apos;objet d&apos;un devis personnalisé selon le lieu, les
            horaires, le format technique et les options retenues.
          </p>
        </aside>
      ) : null}
      <div className="configurator__progress" aria-hidden="true">
        <div className="configurator__progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="configurator__step-label">
        Étape {step} sur {FORM_STEPS} : {currentStepMeta.title}
      </p>
      <h2
        className={`heading-section configurator__heading${currentStepMeta.intro ? ' configurator__heading--with-intro' : ''}`}
      >
        {currentStepMeta.heading}
      </h2>
      {currentStepMeta.intro ? (
        <p className="configurator__intro">{currentStepMeta.intro}</p>
      ) : null}

      <form className="configurator-form" onSubmit={onFormSubmit} noValidate>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="configurator-company">Société</label>
          <input
            id="configurator-company"
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <input type="hidden" name="subject" value="demande configurateur" />
        <input type="hidden" name="event_type" value={getEventTypeLabel(data.eventType)} />
        <input type="hidden" name="event_date" value={data.noDate ? 'Pas encore de date' : data.date} />
        <input type="hidden" name="location" value={data.location} />
        <input type="hidden" name="guest_count" value={data.guestCount} />
        <input type="hidden" name="venue_equipped" value={getVenueEquippedLabel(data.venueEquipped)} />
        <input type="hidden" name="ambiance" value={data.ambiance.join(', ')} />
        <input type="hidden" name="prestations" value={data.prestations.join(', ')} />
        <input type="hidden" name="message" value={formMessage} />

        {step === 1 ? (
          <>
            <StepEventType data={data} onChange={updateData} />
            {errors.eventType ? <p className="field__error">{errors.eventType}</p> : null}
          </>
        ) : null}
        {step === 2 ? (
          <>
            <StepDetails data={data} onChange={updateData} />
            {errors.date ? <p className="field__error">{errors.date}</p> : null}
            {errors.location ? <p className="field__error">{errors.location}</p> : null}
            {errors.guestCount ? <p className="field__error">{errors.guestCount}</p> : null}
          </>
        ) : null}
        {step === 3 ? (
          <>
            <StepVenueEquipped data={data} onChange={updateData} />
            {errors.venueEquipped ? <p className="field__error">{errors.venueEquipped}</p> : null}
          </>
        ) : null}
        {step === 4 ? (
          <>
            <StepAmbiance data={data} onChange={updateData} />
            {errors.ambiance ? <p className="field__error">{errors.ambiance}</p> : null}
          </>
        ) : null}
        {step === 5 ? <StepPrestations data={data} onChange={updateData} /> : null}
        {step === 6 ? <StepNotes data={data} onChange={updateData} /> : null}
        {step === 7 ? <StepRecap data={data} /> : null}
        {step === CONTACT_STEP ? (
          <>
            <StepContact
              data={data}
              onChange={updateData}
              errors={contactSubmitted ? errors : {}}
            />
            {contactSubmitted ? (
              <ValidationError className="field__error" prefix="E-mail" field="email" errors={state.errors} />
            ) : null}
          </>
        ) : null}

        <div className="configurator-nav">
          {step > 1 ? (
            <button type="button" className="btn btn--ghost" onClick={goBack}>
              <FaArrowLeft aria-hidden />
              Retour
            </button>
          ) : (
            <span />
          )}
          {step < CONTACT_STEP ? (
            <button type="button" className="btn btn--primary" onClick={goNext}>
              Suivant
              <FaArrowRight aria-hidden />
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn--primary"
              disabled={state.submitting}
              aria-busy={state.submitting}
            >
              <FaPaperPlane aria-hidden />
              {state.submitting ? 'Envoi…' : 'Envoyer ma demande'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EventConfigurator;
