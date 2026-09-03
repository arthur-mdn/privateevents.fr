import { Link } from 'react-router-dom';
import { galleryItems } from '../content/gallery.js';
import { GalleryGrid } from './shared/PageSections.jsx';

const HOME_GALLERY_LIMIT = 12;

export function GallerySection() {
  const items = galleryItems.slice(0, HOME_GALLERY_LIMIT);
  if (items.length === 0) return null;

  return (
    <section id="galerie" className="section section--gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="heading-section">
        Réalisations
      </h2>
      <p className="lead gallery__lead">
        Quelques instants capturés lors de <strong>mariages</strong>, <strong>soirées privées</strong> et{' '}
        <strong>événements corporate</strong> en <strong>Provence</strong>.
      </p>

      <GalleryGrid items={items} ariaLabel="Galerie photos des prestations DJ Mika" />

      <div className="section__cta">
        <Link className="btn btn--secondary" to="/realisations">
          Voir les projets et la galerie
        </Link>
      </div>
    </section>
  );
}

export default GallerySection;
