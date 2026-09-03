import { useCallback, useId, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

function isVideoSrc(src = '') {
  return /\.mp4($|\?)/i.test(src);
}

function CarouselMedia({ item, className }) {
  if (isVideoSrc(item.src)) {
    return (
      <video
        className={className}
        src={item.src}
        aria-label={item.alt}
        width={item.width}
        height={item.height}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <img
      className={className}
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
    />
  );
}

export function PhotoCarousel({
  images = [],
  className = '',
  imgClassName = 'photo-carousel__img',
  label = 'Galerie photos',
}) {
  const [index, setIndex] = useState(0);
  const labelId = useId();
  const count = images.length;
  const safeIndex = count === 0 ? 0 : index % count;

  const go = useCallback(
    (dir) => {
      if (count <= 1) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  if (count === 0) return null;

  const current = images[safeIndex];
  const showControls = count > 1;

  const onKeyDown = (e) => {
    if (!showControls) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  };

  return (
    <div
      className={`photo-carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      tabIndex={showControls ? 0 : undefined}
      onKeyDown={onKeyDown}
    >
      <p id={labelId} className="visually-hidden">
        {label}
      </p>
      <div className="photo-carousel__frame">
        <CarouselMedia key={current.src} item={current} className={imgClassName} />
        {showControls ? (
          <>
            <button
              type="button"
              className="photo-carousel__nav photo-carousel__nav--prev"
              onClick={() => go(-1)}
              aria-label="Média précédent"
            >
              <FaChevronLeft aria-hidden />
            </button>
            <button
              type="button"
              className="photo-carousel__nav photo-carousel__nav--next"
              onClick={() => go(1)}
              aria-label="Média suivant"
            >
              <FaChevronRight aria-hidden />
            </button>
          </>
        ) : null}
      </div>
      {showControls ? (
        <div className="photo-carousel__footer">
          <p className="photo-carousel__counter" aria-live="polite">
            {safeIndex + 1} / {count}
          </p>
          <div className="photo-carousel__dots" role="tablist" aria-label="Choisir un média">
            {images.map((img, i) => (
              <button
                key={img.id ?? img.src}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={`Média ${i + 1}`}
                className={`photo-carousel__dot${i === safeIndex ? ' is-active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default PhotoCarousel;
