import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Editorial Methodology | Sources, Standards & Review",
  description:
    "How the portal assigns sources, handles dates, structures pages, and publishes with visible trust signals.",
  alternates: {
    canonical: "https://herreravelutini.com/editorial-methodology/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Editorial Methodology | Sources, Standards & Review",
    description:
      "How the portal assigns sources, handles dates, structures pages, and publishes with visible trust signals.",
    url: "https://herreravelutini.com/editorial-methodology/",
    siteName: "Herrera Velutini",
    images: [
      {
        url: "https://herreravelutini.com/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Methodology | Sources, Standards & Review",
    description:
      "How the portal assigns sources, handles dates, structures pages, and publishes with visible trust signals.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function EditorialMethodologyPage() {
  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="afterInteractive"
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
              "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
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
              "Herrera family history",
              "Velutini family history",
              "Hacienda de La Vega",
              "Castle Santa Barbara",
              "family lineage research",
              "heritage documentation",
              "source-led editorial publishing",
            ],
            subjectOf: [
              "https://www.houseofherrera.com/",
              "https://www.banvelca.com/",
            ],
          }),
        }}
      />

      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://herreravelutini.com/#website",
            name: "Herrera Velutini",
            url: "https://herreravelutini.com/",
            description:
              "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
          }),
        }}
      />

      <Script
        id="ld-article"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Editorial Methodology | Sources, Standards & Review",
            description:
              "How Herrera Velutini assigns sources, handles dates, structures pages, and updates the portal.",
            datePublished: "2026-04-17",
            dateModified: "2026-04-25",
            author: {
              "@type": "Organization",
              "@id":
                "https://herreravelutini.com/editorial-desk/#org",
              name: "Herrera Velutini Editorial Desk",
            },
            editor: {
              "@type": "Organization",
              "@id":
                "https://herreravelutini.com/review-team/#org",
              name: "Standards Review Team",
            },
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
            mainEntityOfPage:
              "https://herreravelutini.com/editorial-methodology/",
          }),
        }}
      />

      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
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
                name: "Editorial Methodology",
                item:
                  "https://herreravelutini.com/editorial-methodology/",
              },
            ],
          }),
        }}
      />

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        {/* HERO */}
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav className="breadcrumbs">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>Editorial Methodology</li>
                </ol>
              </nav>

              <div className="eyebrow">Standards</div>

              <h1>Editorial Methodology</h1>

              <p className="lede">
                This page explains how Herrera Velutini turns family-domain
                material into public reference pages. The method is intentionally
                simple: identify the strongest source-domain pages, label what kind
                of source each one is, separate family-domain narrative from portal
                synthesis, date every article-style page, and update pages only
                when the material has substantively changed.
              </p>
            </div>

            <aside className="facts-box">
              <ul>
                <li>
                  <span>Source model</span>

                  <strong>
                    Family-domain narrative, profile pages, external
                    corroboration, bibliography leads, editorial standards
                  </strong>
                </li>

                <li>
                  <span>Date policy</span>

                  <strong>
                    Exact dates where supplied, circa where approximate, updated
                    dates only for material changes
                  </strong>
                </li>

                <li>
                  <span>Technical layer</span>

                  <strong>
                    Canonical URLs, schema, breadcrumbs, and crawlable links
                  </strong>
                </li>

                <li>
                  <span>Companion page</span>

                  <strong>
                    <Link href="/sources">Sources</Link>
                  </strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* BYLINE */}
        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk">
                Herrera Velutini Editorial Desk
              </Link>
            </div>

            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team">Standards Review Team</Link>
            </div>

            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>

            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="source-model">
          <div className="container">
            <div className="overline">How pages are built</div>

            <h2>The source model</h2>

            <p className="lede">
              The portal uses a tiered source model so readers can tell the
              difference between raw narrative, profile-level detail, and
              editorial interpretation.
            </p>

            <div className="cards">
              <article className="card">
                <h3>Family-domain narrative</h3>

                <p>
                  Core pages such as House of Herrera About or Banvelca About
                  provide broad framing, origin stories, and recurring themes.
                  These are treated as named sources, not as anonymous background.
                </p>
              </article>

              <article className="card">
                <h3>Profile pages</h3>

                <p>
                  Person pages and ancestor pages supply dates, marriages, roles,
                  and intergenerational transitions that can be connected across
                  the portal.
                </p>
              </article>

              <article className="card">
                <h3>External corroboration</h3>

                <p>
                  Official archival, regulatory, municipal, and institutional
                  sources may be used to corroborate chronology, transactions, and
                  place history without replacing the family-domain record.
                </p>
              </article>

              <article className="card">
                <h3>Bibliography and reading leads</h3>

                <p>
                  Bibliography pages and cultural references expand the portal
                  beyond lineage lists by pointing to books, place memory, and
                  contextual reading.
                </p>
              </article>

              <article className="card">
                <h3>Editorial standards</h3>

                <p>
                  Google’s people-first and structured-data guidance is used as an
                  editorial and technical discipline layer, not as a substitute
                  for source material.
                </p>
              </article>
            </div>

            <p className="muted margin-top:1rm">
              Non-family-domain sources are used in three bounded ways: official
              archival, regulatory, or municipal corroboration for chronology and
              institutional facts; broad place or heritage context for cities,
              islands, and landscapes; and bibliography metadata only until a
              direct reading pass confirms claim-level support. External sources
              do not create new family-specific claims by themselves.
            </p>
          </div>
        </section>

        <section className="section" id="workflow">
          <div className="container">
            <div className="overline">
              From source page to live article
            </div>

            <h2>Publication workflow</h2>

            <p className="lede">
              Each live page goes through the same core sequence so the site
              scales cleanly and avoids accidental duplication.
            </p>

            <div className="media-split">
              <div>
                <ol className="number-list">
                  <li>
                    <strong>Choose the page type.</strong>
                    Decide whether the subject is best treated as an organization
                    profile, family hub, place page, timeline entry, or
                    article-style synthesis.
                  </li>

                  <li>
                    <strong>Assign source codes.</strong>
                    Record the relevant source-domain pages before drafting
                    begins.
                  </li>

                  <li>
                    <strong>Draft original copy.</strong>
                    Write an article that adds connective value rather than
                    lightly rewriting a source page.
                  </li>

                  <li>
                    <strong>Add visible trust signals.</strong>
                    Insert bylines, dates, breadcrumbs, canonical tags, and
                    source-basis notes.
                  </li>

                  <li>
                    <strong>Review and publish.</strong>
                    Check names, chronology, and internal links, then update the
                    page and sitemap.
                  </li>
                </ol>

                <p className="muted">
                  This process is deliberately repeatable so later pages—such as
                  the Velutini family hub, genealogy pages, or additional place
                  dossiers—can be launched without weakening consistency.
                </p>
              </div>

              <figure className="feature-figure">
                <Image
                  src="/illustrations/research-method.svg"
                  alt="Illustration representing the editorial workflow from source gathering to structured publication."
                  width={800}
                  height={500}
                  loading="lazy"
                />

                <figcaption>
                  The live portal uses a fixed workflow: source assignment,
                  original drafting, trust-layer checks, internal linking, and
                  dated publication.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="policies">
          <div className="container">
            <div className="overline">Consistency rules</div>

            <h2>Policies for names, dates, and claims</h2>

            <p className="lede">
              Family history material often mixes exact dates, approximate dates,
              variant spellings, and source-domain language with differing levels
              of specificity. The portal normalizes that without flattening
              uncertainty.
            </p>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Editorial question</th>
                    <th>Portal rule</th>
                    <th>Example from this project</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Approximate date</td>

                    <td>
                      Mark it as circa in body copy or chronology labels.
                    </td>

                    <td>
                      Hernán de Herrera is presented as circa 1355 in the dynasty
                      sequence.
                    </td>
                  </tr>

                  <tr>
                    <td>Exact year on a profile page</td>

                    <td>
                      Use the exact year when the source page provides one.
                    </td>

                    <td>
                      Banvelca’s Juan Bautista profile anchors the founding story
                      to 1781.
                    </td>
                  </tr>

                  <tr>
                    <td>Cross-family connection</td>

                    <td>
                      State the source basis plainly and avoid over-claiming
                      beyond the named pages.
                    </td>

                    <td>
                      Clementina’s 1932 marriage to José Herrera Von Uslar is
                      cited as the key public bridge between the families.
                    </td>
                  </tr>

                  <tr>
                    <td>Promotional or self-descriptive language</td>

                    <td>
                      Translate into neutral editorial wording when possible.
                    </td>

                    <td>
                      Family-office and stewardship language is described as
                      Banvelca’s public framing rather than adopted as objective
                      fact.
                    </td>
                  </tr>

                  <tr>
                    <td>Updated date</td>

                    <td>Change only when the page materially changes.</td>

                    <td>
                      Minor formatting adjustments do not justify a new update
                      date.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="technical">
          <div className="container">
            <div className="overline">Search understanding</div>

            <h2>Technical standards baked into publication</h2>

            <p className="lede">
              The portal uses technical SEO to clarify meaning, not to disguise
              thin content. That means the markup and navigation must reflect the
              real editorial structure of the page.
            </p>

            <div className="note-grid">
              <article className="callout">
                <div className="overline">Schema</div>

                <h3>Match the schema to the page type.</h3>

                <p>
                  Article-style pages use article markup, while organization
                  pages such as House of Herrera and Banvelca use a profile-page
                  pattern with the organization as the main entity.
                </p>
              </article>

              <article className="callout">
                <div className="overline">Navigation</div>

                <h3>Links should be descriptive and crawlable.</h3>

                <p>
                  Important subjects are linked contextually in prose and not
                  hidden inside image-only modules or non-standard navigation
                  patterns.
                </p>
              </article>

              <article className="callout">
                <div className="overline">Canonical focus</div>

                <h3>Each page should own a distinct topic.</h3>

                <p>
                  If a page becomes too similar to a source-domain page, it should
                  be expanded, merged, or redirected rather than left as a
                  near-duplicate.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="corrections">
          <div className="container">
            <div className="overline">Open questions</div>

            <h2>Corrections and future-source priorities</h2>

            <p className="lede">
              A credible heritage portal should say where the record is strongest
              and where it would benefit from additional corroboration.
            </p>

            <div className="cards">
              <article className="card">
                <h3>Strongest material today</h3>

                <p>
                  The clearest current source clusters are the House of Herrera
                  dynasty/estate/symbol pages and the Banvelca legacy/profile
                  pages for Juan Bautista, Clementina, Belén Clarisa, and Belén
                  María.
                </p>
              </article>

              <article className="card">
                <h3>Where more corroboration would help</h3>

                <p>
                  Titles, institutional claims, and long-range historical
                  influence statements would all benefit from more public
                  institutional, archival, or bibliographic support over time.
                </p>
              </article>

              <article className="card">
                <h3>How corrections should be handled</h3>

                <p>
                  New evidence should produce a substantive edit, a revised
                  source-basis note, and a genuine update date rather than a
                  silent overwrite.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>

              <h2>Source basis for the Editorial Methodology page</h2>

              <p className="muted">
                This page defines the portal’s own publishing standards, but it
                also draws on the reality of the source domains and the current
                search guidance used to structure pages responsibly.
              </p>

              <ul className="check-list">
                <li>
                  <Link
                    href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
                    rel="noopener external"
                    target="_blank"
                  >
                    Google Search Central — Helpful, reliable, people-first
                    content
                  </Link>{" "}
                  — Used for editorial standards around originality, clear
                  sourcing, about pages, and trust signals.
                </li>

                <li>
                  <Link
                    href="https://developers.google.com/search/docs/appearance/structured-data/article"
                    rel="noopener external"
                    target="_blank"
                  >
                    Google Search Central — Article structured data
                  </Link>{" "}
                  — Used for visible dates and article markup guidance.
                </li>

                <li>
                  <Link
                    href="https://developers.google.com/search/docs/appearance/structured-data/profile-page"
                    rel="noopener external"
                    target="_blank"
                  >
                    Google Search Central — ProfilePage structured data
                  </Link>{" "}
                  — Used for person or organization profile-page patterns.
                </li>

                <li>
                  <Link
                    href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
                    rel="noopener external"
                    target="_blank"
                  >
                    Google Search Central — Intro to structured data
                  </Link>{" "}
                  — Used for technical understanding of how schema helps search
                  engines interpret page purpose.
                </li>

                <li>
                  <Link href="/sources">Sources</Link> — Used for the live
                  source-tier ledger, including current external corroboration and
                  bibliography-lead handling.
                </li>

                <li>
                  <Link
                    href="https://www.houseofherrera.com/about"
                    rel="noopener external"
                    target="_blank"
                  >
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the 14th-century prominence narrative, geographic
                  scope, and the source-domain linkage between family history,
                  Hacienda de La Vega, and later banking references.
                </li>

                <li>
                  <Link
                    href="https://www.banvelca.com/about"
                    rel="noopener external"
                    target="_blank"
                  >
                    Banvelca — About
                  </Link>{" "}
                  — Used for the 1781 Naples founding story, Juan Bautista
                  Velutini, and the firm’s self-description as a private trust and
                  investment house.
                </li>

                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                    target="_blank"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the chronological ancestor timeline spanning Juan
                  Bautista through later generations, including Banco Caracas,
                  Clementina, Belén Clarisa, Julio José, and later generations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>

            <h2>Continue to the source ledger</h2>

            <div className="button-row">
              <Link href="/sources" className="button">
                Open Sources
              </Link>

              <Link href="/about" className="button-secondary">
                Read About
              </Link>

              <Link href="/heritage" className="button-secondary">
                Read Heritage
              </Link>

              <Link href="/timeline" className="button-secondary">
                See Timeline
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
            <div>
                <div className="footer-brand">Herrera Velutini</div>
                <p className="muted">A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.</p>
            </div>
            <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/heritage">Heritage</Link></li>
              <li><Link href="/families">Families</Link></li>
              <li><Link href="/genealogy">Genealogy</Link></li>
              <li><Link href="/places">Places</Link></li>
              <li><Link href="/estates">Estates</Link></li>
              <li><Link href="/timeline">Timeline</Link></li>
              <li><Link href="/entities">Entities</Link></li>
            </ul>
          </div>
        <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology">Editorial Methodology</Link></li>
              <li><Link href="/sources">Sources</Link></li>
              <li><Link href="/editorial-desk">Editorial Desk</Link></li>
              <li><Link href="/review-team">Review Team</Link></li>
              <li><Link href="/knowledge">Knowledge & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini">Velutini Family</Link></li>
              <li><Link href="/places/caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>

        <div className="container footer-base">
          <span>
            © {new Date().getFullYear()} Herrera Velutini
          </span>
          <span>
            Built for clear attribution, fast delivery, and durable search understanding.
          </span>
        </div>
      </footer>
    </>
  );
}