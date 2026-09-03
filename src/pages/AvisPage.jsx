import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { PhotoCarousel } from '../components/shared/PhotoCarousel.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import {
  getGalleryItemById,
  getRealisationById,
} from '../content/realisations.js';
import { testimonials } from '../content/testimonials.js';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const avisJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Avis clients', item: `${SITE_URL}/avis` },
  ],
};

const avisGroups = [
  {
    id: 'mariages',
    title: 'Avis de mariages',
    match: (t) => t.context?.toLowerCase().includes('mariage'),
  },
  {
    id: 'anniversaires-soirees',
    title: 'Avis d’anniversaires et soirées privées',
    match: (t) => {
      const ctx = t.context?.toLowerCase() ?? '';
      return ctx.includes('anniversaire') || ctx.includes('soirée privée') || ctx.includes('soiree privee');
    },
  },
  {
    id: 'entreprises',
    title: 'Avis d’entreprises',
    match: (t) => {
      const ctx = t.context?.toLowerCase() ?? '';
      return ctx.includes('entreprise') || ctx.includes('corporate');
    },
  },
];

function TestimonialCard({ t }) {
  const realisation = t.realisationId ? getRealisationById(t.realisationId) : null;
  const images = realisation
    ? realisation.imageIds.map((id) => getGalleryItemById(id)).filter(Boolean)
    : [];
  const hasMedia = images.length > 0;
  const excerpt =
    t.quote.length > 280 ? `${t.quote.slice(0, 280).trimEnd()}…` : t.quote;

  return (
    <li id={`avis-${t.id}`}>
      <article
        className={`testimonial-card testimonial-card--static${hasMedia ? ' testimonial-card--with-media' : ''}`}
      >
        {hasMedia ? (
          <PhotoCarousel
            images={images}
            className="testimonial-card__carousel"
            imgClassName="testimonial-card__photo"
            label={`Photos liées à l'avis de ${t.author}`}
          />
        ) : null}
        <div className="testimonial-card__content">
          <blockquote className="testimonial-card__quote">
            <p>«&nbsp;{excerpt}&nbsp;»</p>
          </blockquote>
          <footer className="testimonial-card__footer">
            <p className="testimonial-card__meta">
              <span className="testimonial-card__author">{t.author}</span>
              {t.context ? (
                <>
                  <span className="testimonial-card__sep" aria-hidden>
                    {' · '}
                  </span>
                  <span className="testimonial-card__context">{t.context}</span>
                </>
              ) : null}
            </p>
            <p className="testimonial-card__date">
              <time dateTime={t.dateISO}>
                {new Date(`${t.dateISO}T12:00:00`).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {t.source ? (
                <>
                  <span className="testimonial-card__sep" aria-hidden>
                    {' · '}
                  </span>
                  <span className="testimonial-card__source">{t.source}</span>
                </>
              ) : null}
            </p>
            {t.quote.length > 280 ? (
              <details className="testimonial-card__full">
                <summary>Lire le témoignage complet</summary>
                <p>«&nbsp;{t.quote}&nbsp;»</p>
              </details>
            ) : null}
            {realisation ? (
              <p className="testimonial-card__link">
                <Link to={`/realisations#${realisation.id}`}>Voir la réalisation associée</Link>
              </p>
            ) : null}
          </footer>
        </div>
      </article>
    </li>
  );
}

export function AvisPage() {
  const usedIds = new Set();

  const grouped = avisGroups.map((group) => {
    const items = testimonials.filter((t) => {
      if (usedIds.has(t.id) || !group.match(t)) return false;
      usedIds.add(t.id);
      return true;
    });
    return { ...group, items };
  });

  const leftovers = testimonials.filter((t) => !usedIds.has(t.id));

  return (
    <>
      <PageMeta path="/avis" {...routeMeta['/avis']} jsonLd={avisJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <PageHero
          eyebrow="Avis clients"
          title="Ils nous ont confié leur soirée"
          intro="Mariages, anniversaires, soirées privées et événements corporate : des retours après des prestations en Provence."
          titleId="avis-hero-title"
          image="/elements/gallery/anniversaire-30-ans-canelle-marseille-plein-air.webp"
        />

        {grouped.map((group) =>
          group.items.length > 0 ? (
            <section
              key={group.id}
              className="section"
              aria-labelledby={`avis-${group.id}-title`}
            >
              <h2 id={`avis-${group.id}-title`} className="heading-section">
                {group.title}
              </h2>
              <ul className="testimonial-list testimonial-list--full">
                {group.items.map((t) => (
                  <TestimonialCard key={t.id} t={t} />
                ))}
              </ul>
            </section>
          ) : null,
        )}

        {leftovers.length > 0 ? (
          <section className="section" aria-labelledby="avis-autres-title">
            <h2 id="avis-autres-title" className="heading-section">
              Autres retours
            </h2>
            <ul className="testimonial-list testimonial-list--full">
              {leftovers.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </ul>
          </section>
        ) : null}

        <section className="section">
          <div className="section__cta">
            <Link className="btn btn--primary" to="/mon-evenement">
              Construire mon événement
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export default AvisPage;
