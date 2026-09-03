import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { PhotoCarousel } from '../components/shared/PhotoCarousel.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { deliveryLabels, prestationsCta, prestationsHero, prestationsSections } from '../content/prestationsPage.js';
import { getPrestationModeIcon } from '../components/shared/rulesIcons.js';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const prestationsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Prestations', item: `${SITE_URL}/prestations` },
  ],
};

function isVideoMedia(image) {
  return image?.type === 'video' || /\.mp4($|\?)/i.test(image?.src || '');
}

function MediaThumb({ image, className = '' }) {
  if (!image?.src) return null;
  if (isVideoMedia(image)) {
    return (
      <video
        className={className}
        src={image.src}
        aria-label={image.alt || ''}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt || ''}
      loading="lazy"
      decoding="async"
    />
  );
}

function SectionMedia({ images }) {
  if (!images?.length) return null;
  if (images.length > 1) {
    return (
      <PhotoCarousel
        images={images}
        className="prestation-detail__carousel"
        imgClassName="prestation-detail__img"
        label="Galerie prestations"
      />
    );
  }
  return <MediaThumb image={images[0]} className="prestation-detail__img" />;
}

function SectionHeader({ section }) {
  return (
    <header className="prestation-section__header">
      <p className={`delivery-badge delivery-badge--${section.delivery}`}>
        {deliveryLabels[section.delivery]}
      </p>
      <h2 id={`${section.id}-title`} className="heading-section">
        {section.title}
      </h2>
      {section.lead ? <p className="lead">{section.lead}</p> : null}
    </header>
  );
}

function EditorialSection({ section }) {
  return (
    <div className="prestation-detail">
      <div className="prestation-detail__copy">
        <SectionHeader section={section} />
        {section.body?.map((paragraph) => (
          <p key={paragraph} className="prose">
            {paragraph}
          </p>
        ))}
      </div>
      <SectionMedia images={section.images} />
    </div>
  );
}

function TechnicalSection({ section }) {
  return (
    <div className="prestation-detail">
      <div className="prestation-detail__copy">
        <SectionHeader section={section} />
        <div className="prestation-modes">
          {section.modes?.map((mode) => {
            const ModeIcon = getPrestationModeIcon(mode.title);
            return (
              <article key={mode.title} className="prestation-mode">
                {ModeIcon ? (
                  <span className="prestation-mode__icon" aria-hidden="true">
                    <ModeIcon />
                  </span>
                ) : null}
                <h3 className="prestation-mode__title">{mode.title}</h3>
                <p>{mode.text}</p>
              </article>
            );
          })}
        </div>
        {section.notes?.length ? (
          <ul className="prestation-notes">
            {section.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <SectionMedia images={section.images} />
    </div>
  );
}

function VisualGridSection({ section }) {
  return (
    <div className="prestation-visual">
      <SectionHeader section={section} />
      {section.note ? <p className="prestation-visual__note">{section.note}</p> : null}
      <ul className="prestation-visual__grid">
        {section.items?.map((item) => (
          <li key={item.title} className="prestation-visual__item">
            <MediaThumb image={item.image} className="prestation-visual__img" />
            <p className="prestation-visual__label">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardsSection({ section }) {
  return (
    <div className="prestation-cards-block">
      <SectionHeader section={section} />
      <ul className="prestation-cards">
        {section.cards?.map((card) => (
          <li key={card.title} className="prestation-card">
            <MediaThumb image={card.image} className="prestation-card__img" />
            <div className="prestation-card__body">
              <h3 className="prestation-card__title">{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CatalogSection({ section }) {
  return (
    <div className="prestation-catalog">
      <div className="prestation-catalog__copy">
        <SectionHeader section={section} />
        <ul className="prestation-catalog__list">
          {section.items?.map((item) => (
            <li key={item.title} className="prestation-catalog__item">
              {item.image ? (
                <MediaThumb image={item.image} className="prestation-catalog__thumb" />
              ) : null}
              <div>
                <h3 className="prestation-catalog__title">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {section.gallery?.length ? <SectionMedia images={section.gallery} /> : null}
    </div>
  );
}

function ServicesSection({ section }) {
  return (
    <div className="prestation-services">
      <SectionHeader section={section} />
      <ul className="prestation-services__list">
        {section.items?.map((item) => (
          <li key={item.title}>
            <h3 className="prestation-services__title">{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrestationsSection({ section }) {
  switch (section.layout) {
    case 'technical':
      return <TechnicalSection section={section} />;
    case 'visual-grid':
      return <VisualGridSection section={section} />;
    case 'cards':
      return <CardsSection section={section} />;
    case 'catalog':
      return <CatalogSection section={section} />;
    case 'services':
      return <ServicesSection section={section} />;
    default:
      return <EditorialSection section={section} />;
  }
}

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
            className={`section section--prestation section--prestation-${section.layout}`}
            aria-labelledby={`${section.id}-title`}
          >
            <PrestationsSection section={section} />
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
            <ul className="cta-banner__links">
              <li>
                <Link to="/realisations">Voir les réalisations</Link>
              </li>
              <li>
                <Link to="/avis">Lire les avis clients</Link>
              </li>
              <li>
                <Link to="/mariage">Page mariage</Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default PrestationsPage;
