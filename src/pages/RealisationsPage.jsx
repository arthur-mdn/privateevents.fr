import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta.jsx';
import { PageHero } from '../components/shared/PageHero.jsx';
import { PhotoCarousel } from '../components/shared/PhotoCarousel.jsx';
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
          image="/elements/gallery/mariage-laura-maxime-soiree-nuit.webp"
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

              return (
                <li key={project.id} id={project.id} className="project-card">
                  {images.length > 0 ? (
                    <PhotoCarousel
                      images={images}
                      className="project-card__carousel"
                      imgClassName="project-card__img"
                      label={`Photos : ${project.title}`}
                    />
                  ) : null}
                  <div className="project-card__body">
                    <p className="project-card__type">{project.type}</p>
                    <h3 className="project-card__title">{project.title}</h3>
                    {project.location ? (
                      <p className="project-card__location">{project.location}</p>
                    ) : null}
                    {project.dateLabel ? (
                      <p className="project-card__guests">{project.dateLabel}</p>
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
                        <p>
                          «&nbsp;{testimonial.quote.slice(0, 180)}
                          {testimonial.quote.length > 180 ? '…' : ''}&nbsp;»
                        </p>
                        <footer>
                          - {testimonial.author}, {testimonial.context}
                          {' · '}
                          <Link to={`/avis#avis-${testimonial.id}`}>Voir l&apos;avis</Link>
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
