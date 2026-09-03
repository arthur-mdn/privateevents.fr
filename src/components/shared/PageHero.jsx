export function PageHero({ eyebrow, title, intro, titleId, image }) {
  return (
    <div className={`hero hero--mini${image ? '' : ' hero--mini-solid'}`}>
      {image ? (
        <img
          className="hero__media"
          src={image}
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      ) : null}
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
