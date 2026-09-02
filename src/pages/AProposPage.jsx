import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import {
  aProposCta,
  aProposHero,
  aProposMethod,
  aProposPartners,
  aProposProfile,
  aProposProofs,
} from '../content/aProposPage.js';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const aProposJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'À propos', item: `${SITE_URL}/a-propos` },
      ],
    },
    {
      '@type': 'Person',
      name: 'Mika',
      jobTitle: 'DJ événementiel',
      worksFor: { '@id': `${SITE_URL}/#organisation` },
      image: `${SITE_URL}/elements/photos/dj-mains-console-pioneer-exterieur.webp`,
      description:
        'DJ événementiel en Provence depuis plus de 10 ans. Animation musicale et coordination de prestations complémentaires.',
    },
  ],
};

export function AProposPage() {
  return (
    <>
      <PageMeta path="/a-propos" {...routeMeta['/a-propos']} jsonLd={aProposJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <PageHero {...aProposHero} />

        <section className="section" aria-labelledby="apropos-profile-title">
          <div className="about-profile">
            <img
              className="about-profile__img"
              src={aProposProfile.image}
              alt={aProposProfile.imageAlt}
              width={480}
              height={560}
              loading="lazy"
              decoding="async"
            />
            <div className="about-profile__copy">
              <h2 id="apropos-profile-title" className="heading-section">
                {aProposProfile.name}
              </h2>
              <p className="about-profile__role">{aProposProfile.role}</p>
              <p className="lead">{aProposProfile.bio}</p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="apropos-proofs-title">
          <h2 id="apropos-proofs-title" className="heading-section">
            Expérience &amp; approche
          </h2>
          <ul className="info-cards info-cards--two">
            {aProposProofs.map((proof) => (
              <li key={proof.title} className="info-card">
                <h3 className="info-card__title">{proof.title}</h3>
                <p className="info-card__desc">{proof.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section section--process" aria-labelledby="apropos-method-title">
          <h2 id="apropos-method-title" className="heading-section">
            {aProposMethod.title}
          </h2>
          <p className="lead">{aProposMethod.lead}</p>
          <ol className="process-steps">
            {aProposMethod.steps.map((step) => (
              <li key={step.step} className="process-step">
                <span className="process-step__num" aria-hidden="true">
                  {step.step}
                </span>
                <div className="process-step__body">
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" aria-labelledby="apropos-partners-title">
          <h2 id="apropos-partners-title" className="heading-section">
            {aProposPartners.title}
          </h2>
          <p className="lead">{aProposPartners.lead}</p>
          <ul className="about-partners">
            {aProposPartners.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </section>

        <section className="section section--cta-banner" aria-labelledby="apropos-cta-title">
          <div className="cta-banner">
            <h2 id="apropos-cta-title" className="heading-section">
              {aProposCta.title}
            </h2>
            <p className="lead">{aProposCta.lead}</p>
            <Link className="btn btn--primary" to={aProposCta.href}>
              {aProposCta.label}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default AProposPage;
