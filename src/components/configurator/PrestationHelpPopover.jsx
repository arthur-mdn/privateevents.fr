import { useEffect, useId, useRef, useState } from 'react';

export function PrestationHelpPopover({ label, help }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  if (!help) return null;

  return (
    <span className="prestation-help" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="prestation-help__trigger"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`En savoir plus : ${label}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        ?
      </button>
      {open ? (
        <div
          id={panelId}
          className="prestation-help__panel"
          role="dialog"
          aria-label={label}
        >
          <p className="prestation-help__title">{label}</p>
          <p className="prestation-help__desc">{help.description}</p>
          {help.image ? (
            <img
              className="prestation-help__img"
              src={help.image}
              alt={help.imageAlt || ''}
              width={280}
              height={180}
              loading="lazy"
              decoding="async"
            />
          ) : null}
          {help.href ? (
            <a
              className="prestation-help__link"
              href={help.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {help.linkLabel || 'En savoir plus'}
            </a>
          ) : null}
        </div>
      ) : null}
    </span>
  );
}
