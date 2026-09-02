import { Link } from 'react-router-dom';
import { galleryItems } from '../content/gallery.js';
import { GalleryGrid } from './shared/PageSections.jsx';

export function GallerySection() {
  if (galleryItems.length === 0) return null;

  return (
    <section id="galerie" className="section section--gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="heading-section">
        Réalisations
      </h2>
      <p className="lead gallery__lead">
        Quelques instants capturés lors de <strong>mariages</strong>, <strong>soirées privées</strong> et{' '}
        <strong>événements corporate</strong> dans le <strong>Sud de la France</strong>.
      </p>

      <GalleryGrid items={galleryItems} ariaLabel="Galerie photos des prestations DJ Mika" />

      <div className="section__cta">
        <Link className="btn btn--secondary" to="/realisations">
          Voir toutes les réalisations
        </Link>
      </div>
    </section>
  );
}

export default GallerySection;
