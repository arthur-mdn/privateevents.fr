import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { GalleryGrid } from '../components/shared/PageSections.jsx';
import {
  getGalleryItemById,
  getTestimonialById,
  realisationProjects,
} from '../content/realisations.js';
import { galleryItems } from '../content/gallery.js';
import { routeMeta, SITE_URL } from '../seo/siteMeta.js';

const realisationsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Réalisations', item: `${SITE_URL}/realisations` },
  ],
};

export function RealisationsPage() {
  return (
    <>
      <PageMeta path="/realisations" {...routeMeta['/realisations']} jsonLd={realisationsJsonLd} />
      <SiteHeader />
      <main id="contenu-principal">
        <PageHero
          eyebrow="Réalisations"
          title="Projets et galerie photo"
          intro="Mariages, anniversaires et événements corporate animés en Provence. Quelques projets récents et l'ensemble de nos photos."
          titleId="realisations-hero-title"
          image="/elements/gallery/mariage-dansant-lumieres.jpg"
        />

        <section className="section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="heading-section">
            Projets récents
          </h2>
          <ul className="project-list">
            {realisationProjects.map((project) => {
              const images = project.imageIds
                .map((id) => getGalleryItemById(id))
                .filter(Boolean);
              const testimonial = project.testimonialId
                ? getTestimonialById(project.testimonialId)
                : null;
              const cover = images[0];

              return (
                <li key={project.id} className="project-card">
                  {cover ? (
                    <img
                      className="project-card__img"
                      src={cover.src}
                      alt={cover.alt}
                      width={cover.width}
                      height={cover.height}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  <div className="project-card__body">
                    <p className="project-card__type">{project.type}</p>
                    <h3 className="project-card__title">{project.title}</h3>
                    {project.location ? (
                      <p className="project-card__location">{project.location}</p>
                    ) : null}
                    {project.guests ? (
                      <p className="project-card__guests">{project.guests}</p>
                    ) : null}
                    <p className="project-card__brief">{project.brief}</p>
                    <ul className="case-study__tags">
                      {project.prestations.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {testimonial ? (
                      <blockquote className="project-card__quote">
                        <p>«&nbsp;{testimonial.quote.slice(0, 180)}
                          {testimonial.quote.length > 180 ? '…' : ''}&nbsp;»
                        </p>
                        <footer>
                          — {testimonial.author}, {testimonial.context}
                        </footer>
                      </blockquote>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section section--gallery" aria-labelledby="gallery-full-title">
          <h2 id="gallery-full-title" className="heading-section">
            Galerie complète
          </h2>
          <p className="lead gallery__lead">
            Toutes les photos disponibles de prestations récentes.
          </p>
          <GalleryGrid items={galleryItems} ariaLabel="Galerie complète des réalisations" />
        </section>

        <section className="section section--cta-banner">
          <div className="cta-banner">
            <h2 className="heading-section">Un projet similaire ?</h2>
            <p className="lead">Décrivez votre événement et recevez une proposition personnalisée.</p>
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

export default RealisationsPage;
