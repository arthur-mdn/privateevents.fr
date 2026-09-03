import { PageMeta } from '../components/PageMeta.jsx';
import { LegalParagraph } from '../components/shared/LegalParagraph.jsx';
import { SiteFooter } from '../components/SiteFooter.jsx';
import { SiteHeader } from '../components/SiteHeader.jsx';
import { mentionsLegalesContent } from '../content/legalPages.js';
import { routeMeta } from '../seo/siteMeta.js';

export function MentionsLegalesPage() {
  const { title, lastUpdated, sections } = mentionsLegalesContent;

  return (
    <>
      <PageMeta path="/mentions-legales" {...routeMeta['/mentions-legales']} />
      <SiteHeader />
      <main id="contenu-principal" className="section section--legal">
        <article className="prose prose--measure">
          <p className="eyebrow">Private Events</p>
          <h1 className="heading-section">{title}</h1>
          <p className="legal-updated">Dernière mise à jour : {lastUpdated}</p>
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={`legal-${section.title}`}>
              <h2 id={`legal-${section.title}`} className="heading-sub">
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

export default MentionsLegalesPage;
