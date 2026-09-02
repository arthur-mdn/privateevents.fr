import { useCallback, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { FaArrowLeft, FaArrowRight, FaPaperPlane } from 'react-icons/fa6';
import {
  buildFormMessage,
  configuratorSteps,
  eventTypeUrlMap,
  getAmbianceLabels,
  getEventTypeLabel,
  getGuestCountLabel,
  getPrestationLabels,
  initialFormData,
  welcomeStep,
} from '../../content/configuratorSteps.js';
import {
  StepAmbiance,
  StepContact,
  StepDetails,
  StepEventType,
  StepNotes,
  StepPrestations,
} from './ConfiguratorSteps.jsx';

const FORM_STEPS = configuratorSteps.length;
const FORMSPREE_ID = 'mwkgrnyr';

function getContactErrors(formData) {
  const nextErrors = {};
  if (!formData.name.trim()) nextErrors.name = 'Indiquez votre nom.';
  if (!formData.email.trim()) nextErrors.email = 'Indiquez votre e-mail.';
  if (!formData.rgpdConsent) nextErrors.rgpdConsent = 'Le consentement est requis.';
  return nextErrors;
}

function formatDateFr(isoDate) {
  if (!isoDate) return null;
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function ConfirmationScreen({ data }) {
  const dateLabel = data.noDate ? 'Pas encore de date précise' : formatDateFr(data.date);
  const prestations = getPrestationLabels(data.prestations);

  return (
    <div className="configurator-confirmation" role="status" tabIndex={-1}>
      <h2 className="heading-section">Merci, votre projet est bien parti.</h2>
      <p className="lead">
        Mika va pouvoir étudier votre demande avec les informations que vous venez de transmettre.
      </p>
      <div className="configurator-recap">
        <p className="configurator-recap__line">
          <strong>{getEventTypeLabel(data.eventType)}</strong>
        </p>
        {dateLabel ? <p className="configurator-recap__line">{dateLabel}</p> : null}
        {data.location ? <p className="configurator-recap__line">{data.location}</p> : null}
        {data.guestCount ? (
          <p className="configurator-recap__line">{getGuestCountLabel(data.guestCount)} invités</p>
        ) : null}
        {data.ambiance.length > 0 ? (
          <p className="configurator-recap__line">Ambiance : {getAmbianceLabels(data.ambiance).join(', ')}</p>
        ) : null}
        {prestations.length > 0 ? (
          <>
            <p className="configurator-recap__label">Prestations sélectionnées</p>
            <p className="configurator-recap__line">{prestations.join(' • ')}</p>
          </>
        ) : null}
      </div>
      <p className="configurator-next">
        Vous recevrez une réponse personnalisée par e-mail ou téléphone sous quelques jours ouvrés.
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
  const [step, setStep] = useState(0);
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
        if (step === FORM_STEPS && contactSubmitted) {
          setErrors(getContactErrors(next));
        }
        return next;
      });
      if (step !== FORM_STEPS) {
        setErrors({});
      }
    },
    [step, contactSubmitted],
  );

  const currentStepMeta = step > 0 ? configuratorSteps[step - 1] : null;
  const progress = step === 0 ? 0 : (step / FORM_STEPS) * 100;

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
    if (step === 3 && data.ambiance.length === 0) {
      nextErrors.ambiance = 'Sélectionnez au moins une ambiance.';
    }
    if (step === FORM_STEPS) {
      Object.assign(nextErrors, getContactErrors(data));
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [step, data]);

  const goNext = () => {
    if (!validateStep()) return;
    const nextStep = Math.min(step + 1, FORM_STEPS);
    if (nextStep === FORM_STEPS) {
      setContactSubmitted(false);
      setErrors({});
      ignoreNextSubmitRef.current = true;
    }
    setStep(nextStep);
  };

  const goBack = () => {
    setErrors({});
    if (step === FORM_STEPS) {
      setContactSubmitted(false);
    }
    setStep((s) => Math.max(s - 1, 0));
  };

  const startConfigurator = () => {
    setStep(1);
  };

  const formMessage = useMemo(() => buildFormMessage(data), [data]);

  const onFormSubmit = (e) => {
    if (ignoreNextSubmitRef.current) {
      ignoreNextSubmitRef.current = false;
      e.preventDefault();
      return;
    }
    if (step !== FORM_STEPS) {
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

  if (step === 0) {
    return (
      <div className="configurator">
        <div className="configurator-welcome">
          <h1 className="heading-section">{welcomeStep.heading}</h1>
          <p className="lead">{welcomeStep.intro}</p>
          <div className="configurator-welcome__cta">
            <button type="button" className="btn btn--primary" onClick={startConfigurator}>
              Commencer
              <FaArrowRight aria-hidden />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="configurator">
      <div className="configurator__progress" aria-hidden="true">
        <div className="configurator__progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="configurator__step-label">
        Étape {step} sur {FORM_STEPS} — {currentStepMeta.title}
      </p>
      <h2 className="heading-section configurator__heading">{currentStepMeta.heading}</h2>

      <form className="configurator-form" onSubmit={onFormSubmit} noValidate>
        <input type="hidden" name="subject" value="demande configurateur" />
        <input type="hidden" name="event_type" value={getEventTypeLabel(data.eventType)} />
        <input type="hidden" name="event_date" value={data.noDate ? 'Pas encore de date' : data.date} />
        <input type="hidden" name="location" value={data.location} />
        <input type="hidden" name="guest_count" value={getGuestCountLabel(data.guestCount)} />
        <input type="hidden" name="ambiance" value={getAmbianceLabels(data.ambiance).join(', ')} />
        <input type="hidden" name="prestations" value={getPrestationLabels(data.prestations).join(', ')} />
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
            <StepAmbiance data={data} onChange={updateData} />
            {errors.ambiance ? <p className="field__error">{errors.ambiance}</p> : null}
          </>
        ) : null}
        {step === 4 ? <StepPrestations data={data} onChange={updateData} /> : null}
        {step === 5 ? <StepNotes data={data} onChange={updateData} /> : null}
        {step === FORM_STEPS ? (
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
          {step > 0 ? (
            <button type="button" className="btn btn--ghost" onClick={goBack}>
              <FaArrowLeft aria-hidden />
              Retour
            </button>
          ) : (
            <span />
          )}
          {step < FORM_STEPS ? (
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
              {state.submitting ? 'Envoi…' : 'Envoyer mon projet'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default EventConfigurator;
