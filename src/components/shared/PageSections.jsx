import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6';

export function GalleryGrid({ items, ariaLabel = 'Galerie photos' }) {
  const dialogRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const count = items.length;

  const activeIndex = activeItem ? items.findIndex((item) => item.id === activeItem.id) : -1;

  const go = useCallback(
    (delta) => {
      if (activeIndex < 0 || count <= 1) return;
      const nextIndex = (activeIndex + delta + count) % count;
      setActiveItem(items[nextIndex]);
    },
    [activeIndex, count, items],
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

  if (items.length === 0) return null;

  return (
    <>
      <ul className="gallery-grid" aria-label={ariaLabel}>
        {items.map((item) => (
          <li key={item.id} className="gallery-item">
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
                  {...(item.width && item.height ? { width: item.width, height: item.height } : {})}
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
    </>
  );
}

export function WeddingTestimonials({ testimonials }) {
  if (testimonials.length === 0) return null;

  return (
    <ul className="testimonial-list">
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
            </footer>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function FaqSection({ items, titleId }) {
  const id = useId();
  return (
    <dl className="faq-list" aria-labelledby={titleId}>
      {items.map((item, index) => (
        <div key={item.question} className="faq-item">
          <dt id={`${id}-q-${index}`}>{item.question}</dt>
          <dd aria-labelledby={`${id}-q-${index}`}>{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
