import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6';
import { galleryItems } from '../content/gallery.js';

export function GallerySection() {
  const titleId = useId();
  const dialogRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const count = galleryItems.length;

  const activeIndex = activeItem ? galleryItems.findIndex((item) => item.id === activeItem.id) : -1;

  const go = useCallback(
    (delta) => {
      if (activeIndex < 0 || count <= 1) return;
      const nextIndex = (activeIndex + delta + count) % count;
      setActiveItem(galleryItems[nextIndex]);
    },
    [activeIndex, count],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeItem) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [activeItem]);

  const closeLightbox = () => setActiveItem(null);

  const onDialogKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  };

  if (galleryItems.length === 0) return null;

  return (
    <section id="galerie" className="section section--gallery" aria-labelledby={titleId}>
      <h2 id={titleId} className="heading-section">
        Galerie
      </h2>
      <p className="lead gallery__lead">
        Quelques instants capturés lors de <strong>mariages</strong>, <strong>soirées privées</strong> et{' '}
        <strong>événements corporate</strong> en <strong>Provence</strong> : ambiance, matériel et moments partagés
        avec les invités.
      </p>

      <ul className="gallery-grid" aria-label="Galerie photos des prestations DJ Mika">
        {galleryItems.map((item) => (
          <li
            key={item.id}
            className={`gallery-item gallery-item--${item.orientation}`}
          >
            <figure className="gallery-item__figure">
              <button
                type="button"
                className="gallery-item__trigger"
                onClick={() => setActiveItem(item)}
                aria-label={`Agrandir : ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-item__img"
                  loading="lazy"
                  decoding="async"
                  {...(item.width && item.height
                    ? { width: item.width, height: item.height }
                    : {})}
                />
              </button>
              {item.caption ? (
                <figcaption className="gallery-item__caption">{item.caption}</figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-label="Photo agrandie"
        onClose={closeLightbox}
        onKeyDown={onDialogKeyDown}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeLightbox();
        }}
      >
        {activeItem ? (
          <figure className="gallery-lightbox__figure">
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Fermer"
            >
              <FaXmark aria-hidden />
            </button>
            <div className="gallery-lightbox__media">
              {count > 1 ? (
                <>
                  <button
                    type="button"
                    className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                    onClick={() => go(-1)}
                    aria-label="Photo précédente"
                  >
                    <FaChevronLeft aria-hidden />
                  </button>
                  <button
                    type="button"
                    className="gallery-lightbox__nav gallery-lightbox__nav--next"
                    onClick={() => go(1)}
                    aria-label="Photo suivante"
                  >
                    <FaChevronRight aria-hidden />
                  </button>
                </>
              ) : null}
              <img
                src={activeItem.src}
                alt=""
                className="gallery-lightbox__img"
                {...(activeItem.width && activeItem.height
                  ? { width: activeItem.width, height: activeItem.height }
                  : {})}
              />
            </div>
            <figcaption className="gallery-lightbox__caption" aria-live="polite">
              {count > 1 ? (
                <p className="gallery-lightbox__counter" aria-hidden>
                  {activeIndex + 1} / {count}
                </p>
              ) : null}
              {activeItem.caption ? (
                <p className="gallery-lightbox__title">{activeItem.caption}</p>
              ) : null}
              <p className="gallery-lightbox__description">{activeItem.alt}</p>
            </figcaption>
          </figure>
        ) : null}
      </dialog>
    </section>
  );
}

export default GallerySection;
