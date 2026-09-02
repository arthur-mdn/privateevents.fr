export function PageHero({ eyebrow, title, intro, titleId, image }) {
  return (
    <div
      className={`hero hero--mini${image ? '' : ' hero--mini-solid'}`}
      {...(image ? { style: { backgroundImage: `url('${image}')` } } : {})}
    >
      <div className="hero__overlay" aria-hidden="true" />
      <section className="hero__inner section section--hero-mini" aria-labelledby={titleId}>
        <div className="hero__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 id={titleId} className="heading-hero">
            {title}
          </h1>
          {intro ? <p className="lead">{intro}</p> : null}
        </div>
      </section>
    </div>
  );
}
