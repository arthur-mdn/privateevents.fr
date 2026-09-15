import { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';

function buildFacebookEmbedSrc(href) {
  const params = new URLSearchParams({
    height: '476',
    href,
    show_text: 'false',
    width: '267',
    t: '0',
  });
  return `https://www.facebook.com/plugins/video.php?${params.toString()}`;
}

export function FacebookVideoEmbed({ href, label, previewSrc, previewAlt = '' }) {
  const [open, setOpen] = useState(false);

  if (!href) return null;

  return (
    <div className="project-card__fb">
      {open ? (
        <>
          <div className="project-card__fb-frame">
            <iframe
              title={label || 'Vidéo Facebook'}
              src={buildFacebookEmbedSrc(href)}
              width={267}
              height={476}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <button
            type="button"
            className="project-card__fb-toggle"
            aria-expanded={true}
            onClick={() => setOpen(false)}
          >
            Masquer la vidéo
          </button>
        </>
      ) : (
        <button
          type="button"
          className="project-card__fb-preview"
          aria-expanded={false}
          aria-label={label || 'Voir la vidéo Facebook'}
          onClick={() => setOpen(true)}
        >
          {previewSrc ? (
            <img
              className="project-card__fb-preview-img"
              src={previewSrc}
              alt={previewAlt}
              width={267}
              height={476}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="project-card__fb-preview-fallback" aria-hidden />
          )}
          <span className="project-card__fb-preview-overlay">
            <FaCirclePlay aria-hidden />
            <span>{label || 'Voir la vidéo Facebook'}</span>
          </span>
        </button>
      )}
    </div>
  );
}
