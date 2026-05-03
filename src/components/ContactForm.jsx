import { useId } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa6';

function ContactForm({ subject, onSubjectChange }) {
  const formId = useId();
  const titleId = `${formId}-title`;
  const [state, handleSubmit] = useForm('mwkgrnyr');

  if (state.succeeded) {
    return (
      <p role="status" className="form-success" tabIndex={-1}>
        Merci pour votre message ! Nous revenons vers vous rapidement.
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-labelledby={titleId}
    >
      <h3 id={titleId} className="contact-form__title">
        Formulaire de contact
      </h3>
      <label className="field" htmlFor={`${formId}-name`}>
        <span className="field__label">Nom</span>
        <input
          id={`${formId}-name`}
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Votre nom"
          required
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
          value={subject}
          onChange={(e) => onSubjectChange(e.target.value)}
        >
          <option value="prise de contact">Prise de contact</option>
          <option value="demande de devis">Demande de devis</option>
          <option value="demande de renseignements">Demande de renseignements</option>
          <option value="demander set sur mesure gratuit">Demander set sur mesure gratuit</option>
          <option value="autre">Autre</option>
        </select>
        <ValidationError
          className="field__error"
          prefix="Sujet"
          field="subject"
          errors={state.errors}
        />
      </label>
      {subject === 'demander set sur mesure gratuit' && (
        <p className="form-hint" role="note">
          Vous pouvez joindre une liste de 10 à 15 titres pour un set personnalisé gratuit.
        </p>
      )}
      <label className="field" htmlFor={`${formId}-message`}>
        <span className="field__label">Message</span>
        <textarea
          id={`${formId}-message`}
          name="message"
          placeholder="Votre message…"
          required
          rows={5}
        />
        <ValidationError
          className="field__error"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>
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
