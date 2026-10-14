import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa6';

function fieldHasError(errors, field) {
  if (!errors) return false;
  if (typeof errors.getFieldError === 'function') {
    return Boolean(errors.getFieldError(field)?.length);
  }
  return false;
}

function ContactForm() {
  const formId = useId();
  const titleId = `${formId}-title`;
  const rgpdErrorId = `${formId}-rgpd-error`;
  const [state, handleSubmit] = useForm('mwkgrnyr');
  const [rgpdConsent, setRgpdConsent] = useState(false);
  const [rgpdError, setRgpdError] = useState('');

  if (state.succeeded) {
    return (
      <p role="status" className="form-success" tabIndex={-1}>
        Merci pour votre message. Une réponse vous est adressée rapidement.
      </p>
    );
  }

  const onSubmit = (event) => {
    if (!rgpdConsent) {
      event.preventDefault();
      setRgpdError('Le consentement est requis.');
      return;
    }
    setRgpdError('');
    handleSubmit(event);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-labelledby={titleId} noValidate>
      <h3 id={titleId} className="contact-form__title">
        Formulaire de contact
      </h3>
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Société</label>
        <input
          id={`${formId}-company`}
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <label className="field" htmlFor={`${formId}-name`}>
        <span className="field__label">Nom</span>
        <input
          id={`${formId}-name`}
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Votre nom"
          required
          aria-invalid={fieldHasError(state.errors, 'name') || undefined}
        />
        <ValidationError className="field__error" prefix="Nom" field="name" errors={state.errors} />
      </label>
      <label className="field" htmlFor={`${formId}-email`}>
        <span className="field__label">Adresse e-mail</span>
        <input
          id={`${formId}-email`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="vous@exemple.fr"
          required
          aria-invalid={fieldHasError(state.errors, 'email') || undefined}
        />
        <ValidationError
          className="field__error"
          prefix="E-mail"
          field="email"
          errors={state.errors}
        />
      </label>
      <label className="field" htmlFor={`${formId}-subject`}>
        <span className="field__label">Sujet</span>
        <select
          id={`${formId}-subject`}
          name="subject"
          required
          defaultValue="prise de contact"
          aria-invalid={fieldHasError(state.errors, 'subject') || undefined}
        >
          <option value="prise de contact">Prise de contact</option>
          <option value="demande de devis">Demande de devis</option>
          <option value="demande de renseignements">Demande de renseignements</option>
          <option value="autre">Autre</option>
        </select>
        <ValidationError
          className="field__error"
          prefix="Sujet"
          field="subject"
          errors={state.errors}
        />
      </label>
      <label className="field" htmlFor={`${formId}-message`}>
        <span className="field__label">Message</span>
        <textarea
          id={`${formId}-message`}
          name="message"
          placeholder="Votre message…"
          required
          rows={5}
          aria-invalid={fieldHasError(state.errors, 'message') || undefined}
        />
        <ValidationError
          className="field__error"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>
      <div className="field field--rgpd">
        <label className="field-checkbox field-checkbox--rgpd">
          <input
            type="checkbox"
            name="rgpdConsent"
            checked={rgpdConsent}
            aria-invalid={rgpdError ? true : undefined}
            aria-describedby={rgpdError ? rgpdErrorId : undefined}
            onChange={(event) => {
              setRgpdConsent(event.target.checked);
              if (event.target.checked) setRgpdError('');
            }}
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
        {rgpdError ? (
          <span id={rgpdErrorId} className="field__error" role="alert">
            {rgpdError}
          </span>
        ) : null}
      </div>
      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={state.submitting}
        aria-busy={state.submitting}
      >
        <FaPaperPlane aria-hidden />
        {state.submitting ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  );
}

export default ContactForm;
