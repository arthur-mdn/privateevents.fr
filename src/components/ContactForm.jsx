import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa6';

function ContactForm({ subject, onSubjectChange }) {
  const [state, handleSubmit] = useForm('mwkgrnyr');

  if (state.succeeded) {
    return (
      <p role="status" className="center" style={{ margin: '1rem 0' }}>
        Merci pour votre message ! Nous revenons vers vous rapidement.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Formulaire de contact</h2>
      <label htmlFor="name">
        Nom
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Votre nom"
          required
        />
        <ValidationError prefix="Nom" field="name" errors={state.errors} />
      </label>
      <label htmlFor="email">
        Adresse e-mail
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="vous@exemple.fr"
          required
        />
        <ValidationError prefix="E-mail" field="email" errors={state.errors} />
      </label>
      <label htmlFor="subject">
        Sujet
        <select
          id="subject"
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
      </label>
      {subject === 'demander set sur mesure gratuit' && (
        <p style={{ textAlign: 'left', alignSelf: 'flex-start', color: '#00e300' }}>
          Vous pouvez joindre une liste de 10 à 15 titres pour un set personnalisé gratuit.
        </p>
      )}
      <label htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          placeholder="Votre message…"
          required
          rows={5}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </label>
      <button type="submit" disabled={state.submitting} className="button fr g0-5 ai-c">
        <FaPaperPlane aria-hidden />
        {state.submitting ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  );
}

export default ContactForm;
