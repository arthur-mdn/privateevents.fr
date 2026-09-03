import { PageMeta } from '../components/PageMeta.jsx';
import { LegalParagraph } from '../components/shared/LegalParagraph.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { politiqueConfidentialiteContent } from '../content/legalPages.js';
import { routeMeta } from '../seo/siteMeta.js';

export function PolitiqueConfidentialitePage() {
  const { title, lastUpdated, sections } = politiqueConfidentialiteContent;

  return (
    <>
      <PageMeta path="/politique-de-confidentialite" {...routeMeta['/politique-de-confidentialite']} />
      <SiteHeader />
      <main id="contenu-principal" className="section section--legal">
        <article className="prose prose--measure">
          <p className="eyebrow">Private Events</p>
          <h1 className="heading-section">{title}</h1>
          <p className="legal-updated">Dernière mise à jour : {lastUpdated}</p>
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={`privacy-${section.title}`}>
              <h2 id={`privacy-${section.title}`} className="heading-sub">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <LegalParagraph key={paragraph}>{paragraph}</LegalParagraph>
              ))}
            </section>
          ))}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

export default PolitiqueConfidentialitePage;
