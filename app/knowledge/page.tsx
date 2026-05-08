import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Knowledge & FAQ | How to Use the Herrera Velutini Portal",
  description:
    "Reader guidance, terminology, caution flags, and FAQ for navigating the portal's heritage, family, estate, entity, and trust pages.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/knowledge/",
  },
  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Knowledge & FAQ | How to Use the Herrera Velutini Portal",
    description:
      "Reader guidance, terminology, caution flags, and FAQ for navigating the portal's heritage, family, estate, entity, and trust pages.",
    url: "https://herreravelutini.com/knowledge/",
    images: [
      {
        url: "https://herreravelutini.com/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-04-17",
    modifiedTime: "2026-04-24",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge & FAQ | How to Use the Herrera Velutini Portal",
    description:
      "Reader guidance, terminology, caution flags, and FAQ for navigating the portal's heritage, family, estate, entity, and trust pages.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function KnowledgePage() {
  return (
    <>
      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://herreravelutini.com/#organization",
            name: "Herrera Velutini",
            alternateName: [
              "Herrera Velutini Portal",
              "Herrera Velutini Editorial Portal",
            ],
            legalName: "Herrera Velutini",
            url: "https://herreravelutini.com/",
            logo: {
              "@type": "ImageObject",
              url: "https://herreravelutini.com/brand-wordmark.svg",
            },
            description:
              "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "editorial inquiries",
                url: "https://herreravelutini.com/about/#contact",
                availableLanguage: ["English", "Spanish"],
              },
            ],
            publishingPrinciples:
              "https://herreravelutini.com/editorial-methodology/",
            areaServed: [
              "Europe",
              "North America",
              "Latin America",
              "Middle East",
            ],
            knowsAbout: [
              "House of Herrera",
              "Banvelca & Company",
              "Hacienda de La Vega",
              "Castle Santa Barbara",
              "family history",
              "heritage research",
              "stewardship",
              "cultural patronage",
            ],
            subjectOf: [
              "https://www.houseofherrera.com/",
              "https://www.banvelca.com/",
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://herreravelutini.com/#website",
            name: "Herrera Velutini",
            url: "https://herreravelutini.com/",
            description:
              "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": "https://herreravelutini.com/knowledge/#article",
            headline: "Knowledge & FAQ",
            description:
              "Reader guidance, terminology, caution flags, and FAQ for navigating the portal’s heritage, family, estate, entity, and trust pages.",
            url: "https://herreravelutini.com/knowledge/",
            datePublished: "2026-04-17",
            dateModified: "2026-04-24",
            author: {
              "@id": "https://herreravelutini.com/editorial-desk/#org",
            },
            editor: {
              "@id": "https://herreravelutini.com/review-team/#org",
            },
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
            about: [
              "reader guidance",
              "FAQ",
              "portal terminology",
              "source caution",
              "site navigation",
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://herreravelutini.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Knowledge",
                item: "https://herreravelutini.com/knowledge/",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li aria-current="page">Knowledge</li>
                </ol>
              </nav>
              <div className="eyebrow">Knowledge &amp; FAQ</div>
              <h1>Questions, terms, and pathways through the portal.</h1>
              <p className="lede">
                This page exists for readers. It clarifies how the portal is organized, what its page types mean, and where to start if you are arriving for the first time from search, media, or personal research.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Use case</span>
                  <strong>Reader guidance and source orientation</strong>
                </li>
                <li>
                  <span>Best for</span>
                  <strong>First-time visitors · journalists · researchers</strong>
                </li>
                <li>
                  <span>Key companion</span>
                  <strong><Link href="/editorial-methodology/">Editorial Methodology</Link></strong>
                </li>
                <li>
                  <span>Related pages</span>
                  <strong>
                    <Link href="/sources/">Sources</Link>
                    {" · "}
                    <Link href="/entities/">Entities</Link>
                    {" · "}
                    <Link href="/review-team/">Review Team</Link>
                  </strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk/">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-24">April 24, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="reader-map">
          <div className="container">
            <div className="overline">Reader map</div>
            <h2>Start with the question you need answered.</h2>
            <p className="lede">
              The portal now has enough depth that the best entry point depends on the task. Use this page as the quiet control room: it explains the page types, the review language, and the places where the record is still being handled cautiously.
            </p>
            <div className="cards cards-four" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Family or lineage research</h3>
                <p>
                  Begin with the family hubs, then move into the Herrera and Velutini lineage pages for generational order.
                </p>
                <p><Link href="/families/">Open Families</Link></p>
              </article>
              <article className="card">
                <h3>Named people and institutions</h3>
                <p>
                  Use the entity hub when you need focused pages for founders, heirs, organizations, estates, and public figures.
                </p>
                <p><Link href="/entities/">Open Entities</Link></p>
              </article>
              <article className="card">
                <h3>Places, estates, and memory</h3>
                <p>
                  Use Places and Estates when a location is functioning as more than scenery: origin, title memory, banking center, or symbolic geography.
                </p>
                <p><Link href="/places/">Open Places</Link></p>
              </article>
              <article className="card">
                <h3>Verification and sourcing</h3>
                <p>
                  Use Sources, Methodology, and Review Team pages when you want to understand how the portal separates source material from synthesis.
                </p>
                <p><Link href="/sources/">Open Sources</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="terminology">
          <div className="container">
            <div className="overline">Portal terminology</div>
            <h2>The page types and labels that matter most.</h2>
            <div className="cards cards-four" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Entity page</h3>
                <p>
                  A focused page about one organization, place, estate, or public figure. Entity pages are the portal&apos;s strongest indexable knowledge assets.
                </p>
                <p><Link href="/entities/">Open page</Link></p>
              </article>
              <article className="card">
                <h3>Cluster page</h3>
                <p>
                  A synthesis page such as Heritage, Stewardship, Estates, Timeline, or a theme page that gathers related material into a guided reading path.
                </p>
                <p><Link href="/heritage/">Open page</Link></p>
              </article>
              <article className="card">
                <h3>Source basis</h3>
                <p>
                  A compact section near the bottom of a page that identifies which public source pages shaped the article and how they were used.
                </p>
                <p><Link href="/sources/">Open page</Link></p>
              </article>
              <article className="card">
                <h3>Source caution</h3>
                <p>
                  A visible note used when the public record has date tension, source-domain language, or a claim that should not be flattened into certainty.
                </p>
                <p><Link href="/review-team/">Open page</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="overline">FAQ</div>
            <h2>Fast answers</h2>
            <div className="faq-grid" style={{ marginTop: "1.2rem" }}>
              <article className="faq-item">
                <details>
                  <summary>Where should a first-time visitor start?</summary>
                  <p>
                    Start on the homepage for the big picture, then move into the entity hub if you want the site&apos;s strongest organization, place, estate, and figure pages.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>What is the difference between Heritage and Entities?</summary>
                  <p>
                    Heritage is a thematic synthesis page. Entities are focused profiles for specific organizations, places, estates, and people.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>How are family-domain sources used?</summary>
                  <p>
                    They are treated as named public sources. The portal uses them for dates, relationships, narrative framing, and place-memory clues, then rewrites the material into neutral editorial language.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>Why are some claims phrased cautiously?</summary>
                  <p>
                    Family history often mixes exact dates, approximate dates, title traditions, and self-descriptive language. Cautious phrasing keeps the page useful without overstating the evidence.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>Why keep a separate Sources page?</summary>
                  <p>
                    Because transparency reduces confusion. Readers can quickly see which public pages informed the portal without interrupting the main reading experience.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>Why are dates visible on so many pages?</summary>
                  <p>
                    Visible dates help readers judge freshness and help editors maintain the portal honestly over time. They also make it easier to catch stale metadata.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>Why do some figures not have their own pages yet?</summary>
                  <p>
                    A figure becomes a page when there is enough source support and connective value. Otherwise, the name can live inside a lineage, timeline, or family page until the source base improves.
                  </p>
                </details>
              </article>
              <article className="faq-item">
                <details>
                  <summary>What should happen when new evidence appears?</summary>
                  <p>
                    The affected page should receive a substantive edit, a revised source-basis note, and a real updated date rather than a silent overwrite.
                  </p>
                </details>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="cautions">
          <div className="container">
            <div className="overline">Known caution flags</div>
            <h2>Where readers should expect careful language.</h2>
            <p className="lede">
              These are not blockers. They are the places where the editorial standard is to preserve nuance until stronger corroboration is available.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Titles and chronology</div>
                <h3>Agustín and Lanzarote should stay carefully framed.</h3>
                <p>
                  The page pair now treats 1567, 1569, and 1584 as the strongest external title markers while leaving 1548 and the family-domain life frame under caution.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Banking history</div>
                <h3>Banco Caracas late-sale language has a dedicated audit note.</h3>
                <p>
                  Pages that mention the later transition now separate Banvelca&apos;s 1988 and 1998 statements from the external 2000 agreement and 2002 merger context.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Source-domain language</div>
                <h3>Prestige language should become neutral synthesis.</h3>
                <p>
                  When a family-domain page uses high-status or legacy language, the portal should describe that framing rather than repeat it as independent fact.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Knowledge page</h2>
              <p className="muted">
                This is a service page, so its source basis points to the portal&apos;s own trust architecture rather than introducing new family-history claims.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="/editorial-methodology/">Editorial Methodology</Link> — Used for page-type definitions, source-basis logic, and update-date policy.
                </li>
                <li>
                  <Link href="/sources/">Sources</Link> — Used for source-group terminology and the distinction between family-domain hubs, profiles, reading leads, and standards.
                </li>
                <li>
                  <Link href="/review-team/">Review Team</Link> — Used for review language around dates, originality, internal linking, and caution handling.
                </li>
                <li>
                  <Link href="/entities/">Entities</Link> — Used to define the entity hub as the portal&apos;s strongest profile layer.
                </li>
                <li>
                  <Link href="/timeline/">Timeline</Link> — Used to clarify when chronology is the better entry point than a person or institution page.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Where to start by intent</div>
            <h2>Choose the right section for the reason you arrived.</h2>
            <div className="button-row">
              <Link className="button" href="/entities/">I need the strongest profile pages</Link>
              <Link className="button-secondary" href="/timeline/">I need chronology</Link>
              <Link className="button-secondary" href="/estates/">I need places and estates</Link>
              <Link className="button-secondary" href="/sources/">I need sourcing</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">
              A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/heritage/">Heritage</Link></li>
              <li><Link href="/families/">Families</Link></li>
              <li><Link href="/genealogy/">Genealogy</Link></li>
              <li><Link href="/places/">Places</Link></li>
              <li><Link href="/estates/">Estates</Link></li>
              <li><Link href="/timeline/">Timeline</Link></li>
              <li><Link href="/entities/">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology/">Editorial Methodology</Link></li>
              <li><Link href="/sources/">Sources</Link></li>
              <li><Link href="/editorial-desk/">Editorial Desk</Link></li>
              <li><Link href="/review-team/">Review Team</Link></li>
              <li><Link href="/knowledge/">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection/">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini/">Velutini Family</Link></li>
              <li><Link href="/places/caracas/">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© {new Date().getFullYear()} Herrera Velutini</span>
          <span>Built for clear attribution, fast delivery, and durable search understanding.</span>
        </div>
      </footer>
    </>
  );
}