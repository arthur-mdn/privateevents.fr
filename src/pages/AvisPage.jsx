import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
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
          image="/elements/gallery/anniversaire-50-ans-loriol-2026.jpg"
        />

        <section className="section" aria-label="Liste des témoignages">
          <ul className="testimonial-list testimonial-list--full">
            {testimonials.map((t) => (
              <li key={t.id}>
                <article className="testimonial-card testimonial-card--static">
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
                  </footer>
                </article>
              </li>
            ))}
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
