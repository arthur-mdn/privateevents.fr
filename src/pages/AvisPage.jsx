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

export function AvisPage() {
  return (
    <>
      <PageMeta path="/avis" {...routeMeta['/avis']} jsonLd={avisJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <PageHero
          eyebrow="Avis clients"
          title="Ils nous ont confié leur soirée"
          intro="Mariages, anniversaires, soirées privées et événements corporate : des retours d'expérience après des prestations en Provence."
          titleId="avis-hero-title"
          image="/elements/gallery/anniversaire-30-ans-canelle-marseille-plein-air.webp"
        />

        <section className="section" aria-label="Liste des témoignages">
          <ul className="testimonial-list testimonial-list--full">
            {testimonials.map((t) => {
              const realisation = t.realisationId
                ? getRealisationById(t.realisationId)
                : null;
              const images = realisation
                ? realisation.imageIds.map((id) => getGalleryItemById(id)).filter(Boolean)
                : [];

              const hasMedia = images.length > 0;

              return (
                <li key={t.id} id={`avis-${t.id}`}>
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
                        <p>«&nbsp;{t.quote}&nbsp;»</p>
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
                        </p>
                        {realisation ? (
                          <p className="testimonial-card__link">
                            <Link to={`/realisations#${realisation.id}`}>
                              Voir la réalisation
                            </Link>
                          </p>
                        ) : null}
                      </footer>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
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
