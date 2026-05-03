import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from 'react-icons/fa6';
import { testimonials } from '../content/testimonials.js';

const AUTO_INTERVAL_MS = 8000;

/**
 * @param {object} props
 * @param {number} props.value Note entière entre 1 et 5.
 */
function StarRating({ value }) {
  const n = Number(value);
  const rounded = Math.min(5, Math.max(1, Number.isFinite(n) ? Math.round(n) : 5));

  return (
    <div className="star-rating">
      <div className="star-rating__label" role="img" aria-label={`Note : ${rounded} sur 5`}>
        <span className="star-rating__icons" aria-hidden>
          {Array.from({ length: 5 }, (_, i) =>
            i < rounded ? (
              <FaStar key={i} className="star-rating__icon star-rating__icon--full" />
            ) : (
              <FaRegStar key={i} className="star-rating__icon star-rating__icon--empty" />
            ),
          )}
        </span>
        <span className="star-rating__score" aria-hidden>
          <strong>{rounded}</strong>
          <span className="star-rating__max">/5</span>
        </span>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const count = testimonials.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const labelId = useId();
  const introId = `${labelId}-intro`;
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);

  const syncViewportHeight = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    if (count <= 1) {
      viewport.style.height = '';
      return;
    }
    const slide = slideRefs.current[index];
    if (!slide) return;
    const h = slide.getBoundingClientRect().height;
    viewport.style.height = `${Math.ceil(h)}px`;
  }, [count, index]);

  useLayoutEffect(() => {
    syncViewportHeight();
    if (count <= 1) return;
    const slide = slideRefs.current[index];
    const viewport = viewportRef.current;
    if (!slide || !viewport) return;
    const ro = new ResizeObserver(() => syncViewportHeight());
    ro.observe(slide);
    window.addEventListener('resize', syncViewportHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncViewportHeight);
    };
  }, [count, index, syncViewportHeight]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (reduceMotion || paused || count <= 1) return;
    const timer = window.setInterval(() => go(1), AUTO_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [go, paused, reduceMotion, count]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  };

  return (
    <section id="temoignages" className="testimonial" aria-labelledby={labelId}>
      <div className="testimonial__inner section">
        <header className="testimonial__header">
          <h2 id={labelId} className="testimonial__title">
            Témoignages clients
          </h2>
          <p id={introId} className="testimonial__intro">
            Mariages, soirées privées et événements corporate : des retours d&apos;expérience après des prestations DJ et
            karaoké en Provence.
          </p>
        </header>

        <div
          className="testimonial-carousel"
          role="region"
          aria-roledescription="carrousel"
          aria-labelledby={labelId}
          aria-describedby={introId}
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
          onKeyDown={onKeyDown}
        >
          <div className="testimonial-carousel__surface">
            <p className="testimonial-carousel__eyebrow">Avis client</p>
            <div className="testimonial-carousel__viewport" ref={viewportRef}>
              <div
                className="testimonial-carousel__track"
                style={{ transform: `translateX(-${index * 100}%)` }}
                aria-label={`Témoignage ${index + 1} sur ${count}`}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.id}
                    ref={(el) => {
                      slideRefs.current[i] = el;
                    }}
                    className="testimonial-carousel__slide"
                    role="group"
                    aria-roledescription="diapositive"
                    aria-label={`Avis : ${t.context}`}
                  >
                    <article className="testimonial-card">
                      <StarRating value={t.rating} />
                      <blockquote className="testimonial-card__quote" cite="https://privateevents.fr">
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
                  </div>
                ))}
              </div>
            </div>

            {count > 1 ? (
              <div className="testimonial-carousel__controls">
                <button
                  type="button"
                  className="btn btn--carousel-dark"
                  onClick={() => go(-1)}
                  aria-label="Témoignage précédent"
                >
                  <FaChevronLeft aria-hidden />
                </button>
                <div className="testimonial-carousel__dots">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.id}
                      type="button"
                      aria-label={`Afficher le témoignage ${i + 1}`}
                      aria-current={i === index ? 'true' : undefined}
                      className={`testimonial-carousel__dot${i === index ? ' is-active' : ''}`}
                      onClick={() => setIndex(i)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="btn btn--carousel-dark"
                  onClick={() => go(1)}
                  aria-label="Témoignage suivant"
                >
                  <FaChevronRight aria-hidden />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
