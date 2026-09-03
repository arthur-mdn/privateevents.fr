import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { PhotoCarousel } from '../components/shared/PhotoCarousel.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import {
  deliveryLabels,
  prestationsCta,
  prestationsHero,
  prestationsSections,
} from '../content/prestationsPage.js';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const prestationsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Prestations', item: `${SITE_URL}/prestations` },
  ],
};

export function PrestationsPage() {
  return (
    <>
      <PageMeta path="/prestations" {...routeMeta['/prestations']} jsonLd={prestationsJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <PageHero {...prestationsHero} />

        <section className="section section--delivery-legend" aria-labelledby="delivery-legend-title">
          <h2 id="delivery-legend-title" className="heading-section">
            Trois niveaux de prestation
          </h2>
          <ul className="delivery-legend">
            <li>
              <span className="delivery-badge delivery-badge--mika">{deliveryLabels.mika}</span>
              <span>DJ, sono, lumière, effets, quiz, blind test, karaoké.</span>
            </li>
            <li>
              <span className="delivery-badge delivery-badge--coordinated">
                {deliveryLabels.coordinated}
              </span>
              <span>Partenaires habituels intégrés au projet.</span>
            </li>
            <li>
              <span className="delivery-badge delivery-badge--referral">
                {deliveryLabels.referral}
              </span>
              <span>Prestataires externes selon le style et les disponibilités.</span>
            </li>
          </ul>
        </section>

        {prestationsSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="section section--prestation"
            aria-labelledby={`${section.id}-title`}
          >
            <div className="prestation-detail">
              <div className="prestation-detail__copy">
                <p className={`delivery-badge delivery-badge--${section.delivery}`}>
                  {deliveryLabels[section.delivery]}
                </p>
                <h2 id={`${section.id}-title`} className="heading-section">
                  {section.title}
                </h2>
                <dl className="prestation-detail__fields">
                  <div className="prestation-detail__field">
                    <dt>Ce que c&apos;est</dt>
                    <dd>{section.what}</dd>
                  </div>
                  <div className="prestation-detail__field">
                    <dt>Pour quel événement</dt>
                    <dd>{section.forEvents}</dd>
                  </div>
                  <div className="prestation-detail__field">
                    <dt>Ce que ça apporte</dt>
                    <dd>{section.brings}</dd>
                  </div>
                  <div className="prestation-detail__field">
                    <dt>Comment ça s&apos;intègre</dt>
                    <dd>{section.integration}</dd>
                  </div>
                </dl>
              </div>
              {section.images?.length > 1 ? (
                <PhotoCarousel
                  images={section.images}
                  className="prestation-detail__carousel"
                  imgClassName="prestation-detail__img"
                  label={`Photos : ${section.title}`}
                />
              ) : (
                <img
                  className="prestation-detail__img"
                  src={section.images?.[0]?.src ?? section.image}
                  alt={section.images?.[0]?.alt ?? section.imageAlt}
                  width={section.images?.[0]?.width ?? 560}
                  height={section.images?.[0]?.height ?? 380}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          </section>
        ))}

        <section className="section section--cta-banner" aria-labelledby="prestations-cta-title">
          <div className="cta-banner">
            <h2 id="prestations-cta-title" className="heading-section">
              {prestationsCta.title}
            </h2>
            <p className="lead">{prestationsCta.lead}</p>
            <Link className="btn btn--primary" to={prestationsCta.href}>
              {prestationsCta.label}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default PrestationsPage;
