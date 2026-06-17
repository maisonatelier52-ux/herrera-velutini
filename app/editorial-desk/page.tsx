import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Editorial Desk | Who Prepares Herrera Velutini Pages",
  description:
    "The organization page for the Editorial Desk responsible for preparing, maintaining, dating, and interlinking source-led pages on the site.",
  alternates: {
    canonical: "https://herreravelutini.com/editorial-desk/",
  },
  openGraph: {
    type: "article",
    title: "Editorial Desk | Who Prepares Herrera Velutini Pages",
    description:
      "The organization page for the Editorial Desk responsible for preparing, maintaining, dating, and interlinking source-led pages on the site.",
    url: "https://herreravelutini.com/editorial-desk/",
    siteName: "Herrera Velutini",
    images: [
      {
        url: "https://herreravelutini.com/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function EditorialDeskPage() {
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
              "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
          }),
        }}
      />

      <Script
        id="ld-profile"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            url: "https://herreravelutini.com/editorial-desk/",
            datePublished: "2026-04-17",
            dateModified: "2026-04-21",
            mainEntity: {
              "@type": "Organization",
              name: "Herrera Velutini Editorial Desk",
              url: "https://herreravelutini.com/editorial-desk/",
              description:
                "The editorial team responsible for preparing, maintaining, dating, and interlinking the portal’s source-led pages.",
            },
            author: {
              "@id": "https://herreravelutini.com/editorial-desk/#org",
            },
            editor: {
              "@id": "https://herreravelutini.com/review-team/#org",
            },
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
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
                name: "Editorial Desk",
                item: "https://herreravelutini.com/editorial-desk/",
              },
            ],
          }),
        }}
      />

      <Link className="skip-link" href="#main" title="Skip to content">
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
                    <Link href="/" title="Go to the home page">
                      Home
                    </Link>
                  </li>
                  <li>Editorial Desk</li>
                </ol>
              </nav>

              <div className="eyebrow">Editorial ownership</div>
              <h1>Herrera Velutini Editorial Desk</h1>

              <p className="lede">
                The Editorial Desk prepares article-style pages, maintains the
                source basis blocks, updates internal links, and ensures that page
                titles, descriptions, dates, and structured data stay aligned with
                the content users actually see.
              </p>
            </div>

            <aside className="facts-box">
              <ul>
                <li>
                  <span>Role</span>
                  <strong>Preparation, maintenance, and release hygiene</strong>
                </li>

                <li>
                  <span>Owns</span>
                  <strong>
                    Page drafts · source notes · metadata · internal links
                  </strong>
                </li>

                <li>
                  <span>Works with</span>
                  <strong>
                    <Link href="/review-team" title="View the Standards Review Team">
                      Standards Review Team
                    </Link>
                  </strong>
                </li>

                <li>
                  <span>Primary output</span>
                  <strong>
                    Entity pages, family hubs, topic clusters, and trust pages
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
              <Link href="/editorial-desk" title="View the Herrera Velutini Editorial Desk">
                Herrera Velutini Editorial Desk
              </Link>
            </div>

            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="View the Standards Review Team">
                Standards Review Team
              </Link>
            </div>

            <div>
              <span className="byline-label">Published</span>
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>

            <div>
              <span className="byline-label">Updated</span>
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="responsibilities">
          <div className="container">
            <div className="overline">Responsibilities</div>

            <h2>What this desk is accountable for.</h2>

            <p className="lede">
              The Editorial Desk is the production layer between source material and
              live pages. Its job is not just to write; it decides whether a subject
              deserves a page, which sources are strong enough to carry it, and how
              the finished page should connect to the rest of the portal.
            </p>

            <div className="cards cards-four margin-top:1.2rem">
              <article className="card">
                <h3>Page selection</h3>

                <p>
                  Chooses whether a topic belongs as an entity page, family hub,
                  place page, timeline entry, theme page, or service page.
                </p>
              </article>

              <article className="card">
                <h3>Source assignment</h3>

                <p>
                  Maps each draft to public source pages before writing begins, then
                  converts those sources into a visible source-basis section.
                </p>
              </article>

              <article className="card">
                <h3>Original synthesis</h3>

                <p>
                  Turns source-domain material into neutral connective prose rather
                  than lightly rewriting the source page.
                </p>
              </article>

              <article className="card">
                <h3>Release hygiene</h3>

                <p>
                  Maintains titles, descriptions, visible dates, canonical URLs,
                  structured data, image references, and internal links.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="workflow">
          <div className="container">
            <div className="overline">Desk workflow</div>

            <h2>How a page moves from candidate to launch.</h2>

            <div className="media-split">
              <div>
                <ol className="number-list">
                  <li>
                    <strong>Intake.</strong> Identify the reader need and decide
                    whether the topic fills a real coverage gap.
                  </li>

                  <li>
                    <strong>Source map.</strong> Assign source pages, note any date
                    or title uncertainty, and decide what should remain cautious.
                  </li>

                  <li>
                    <strong>Draft.</strong> Write a page that adds synthesis,
                    navigation, and context rather than duplicating the source
                    domain.
                  </li>

                  <li>
                    <strong>Integrate.</strong> Link the page from relevant hubs,
                    family pages, lineage pages, places, timeline, and sitemap
                    entries.
                  </li>

                  <li>
                    <strong>Hand off for review.</strong> Send the page to standards
                    review for source clarity, dates, originality, metadata, and
                    link checks.
                  </li>
                </ol>
              </div>

              <figure className="feature-figure">
                <Image
                  src="/illustrations/research-method.svg"
                  alt="Editorial method diagram showing source collection, synthesis, review, publication, and updates."
                  width={800}
                  height={500}
                  loading="lazy"
                />

                <figcaption>
                  The desk turns source material into a live page only after it has
                  a clear role, visible source basis, and a link path back into the
                  portal.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="thresholds">
          <div className="container">
            <div className="overline">Publication thresholds</div>

            <h2>When a subject becomes its own page.</h2>

            <p className="lede">
              The site should grow by adding useful destinations, not by multiplying
              thin entries. These thresholds keep the knowledge base tidy as it
              expands.
            </p>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Candidate type</th>
                    <th>Publish as its own page when</th>
                    <th>Hold or merge when</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Historical figure</td>

                    <td>
                      The source record supplies a distinct role, date frame,
                      relationship, or place connection that improves the lineage
                      layer.
                    </td>

                    <td>
                      The figure is only a name in a list and has no separate
                      editorial function yet.
                    </td>
                  </tr>

                  <tr>
                    <td>Place or estate</td>

                    <td>
                      The place explains origin, symbolic geography, institutional
                      history, title memory, or family movement.
                    </td>

                    <td>
                      The place would only repeat an existing estate note.
                    </td>
                  </tr>

                  <tr>
                    <td>Theme</td>

                    <td>
                      The theme ties multiple pages together and gives readers a
                      better interpretive path through the portal.
                    </td>

                    <td>
                      The theme is only a keyword variant of a stronger page.
                    </td>
                  </tr>

                  <tr>
                    <td>Trust page</td>

                    <td>
                      The page helps readers understand authorship, sourcing,
                      review, corrections, or navigation.
                    </td>

                    <td>
                      The page does not add clarity beyond About, Sources, or
                      Methodology.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="boundaries">
          <div className="container">
            <div className="overline">Editorial boundaries</div>

            <h2>What the desk should not do.</h2>

            <div className="note-grid">
              <article className="callout">
                <div className="overline">No invented certainty</div>

                <h3>
                  Do not smooth over unclear dates or title chronology.
                </h3>

                <p>
                  If a source presents tension, the page should preserve that
                  tension with a source-caution note.
                </p>
              </article>

              <article className="callout">
                <div className="overline">No prestige inflation</div>

                <h3>
                  Do not amplify family-domain language uncritically.
                </h3>

                <p>
                  Prestige, nobility, and legacy language should be translated into
                  neutral editorial description.
                </p>
              </article>

              <article className="callout">
                <div className="overline">No orphan pages</div>

                <h3>
                  Do not publish pages that cannot be reached from the site.
                </h3>

                <p>
                  Every substantive new page should be linked from at least one hub
                  and appear in the sitemap.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>

              <h2>Source basis for the Editorial Desk page</h2>

              <p className="muted">
                This page defines the portal’s internal production role and is
                supported by the site’s own standards layer.
              </p>

              <ul className="check-list">
                <li>
                  <Link href="/editorial-methodology" title="View the Editorial Methodology page">
                    Editorial Methodology
                  </Link>{" "}
                  — Used for source assignment, publication workflow, date policy,
                  and page-type discipline.
                </li>

                <li>
                  <Link href="/sources" title="View the Sources page">
                    Sources
                  </Link> — Used for the source-led
                  publishing model and the distinction between source groups.
                </li>

                <li>
                  <Link href="/review-team" title="View the Review Team page">
                    Review Team
                  </Link> — Used for the
                  handoff boundary between preparation and standards review.
                </li>

                <li>
                  <Link href="/knowledge" title="View the Knowledge & FAQ page">
                    Knowledge &amp; FAQ
                  </Link> — Used for
                  reader-facing terminology around entities, clusters, source basis,
                  and source caution.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Pages authored by this desk</div>

            <h2>High-value destinations prepared for launch.</h2>

            <div className="button-row">
              <Link className="button" href="/entities" title="View the Entity hub page">
                Entity hub
              </Link>

              <Link className="button-secondary" href="/heritage" title="View the Heritage page">
                Heritage
              </Link>

              <Link className="button-secondary" href="/stewardship" title="View the Stewardship page">
                Stewardship
              </Link>

              <Link className="button-secondary" href="/sources" title="View the Sources page">
                Sources
              </Link>

              <Link className="button-secondary" href="/knowledge" title="View the Knowledge & FAQ page">
                Knowledge &amp; FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.</p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about" title="View the About page">About</Link></li>
              <li><Link href="/heritage" title="View the Heritage page">Heritage</Link></li>
              <li><Link href="/families" title="View the Families page">Families</Link></li>
              <li><Link href="/genealogy" title="View the Genealogy page">Genealogy</Link></li>
              <li><Link href="/places" title="View the Places page">Places</Link></li>
              <li><Link href="/estates" title="View the Estates page">Estates</Link></li>
              <li><Link href="/timeline" title="View the Timeline page">Timeline</Link></li>
              <li><Link href="/entities" title="View the Entities page">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology" title="View the Editorial Methodology page">Editorial Methodology</Link></li>
              <li><Link href="/sources" title="View the Sources page">Sources</Link></li>
              <li><Link href="/editorial-desk" title="View the Editorial Desk page">Editorial Desk</Link></li>
              <li><Link href="/review-team" title="View the Review Team page">Review Team</Link></li>
              <li><Link href="/knowledge" title="View the Knowledge & FAQ page">Knowledge & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection" title="View the Herrera and Velutini page">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini" title="View the Velutini Family page">Velutini Family</Link></li>
              <li><Link href="/places/caracas" title="View the Caracas page">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas" title="View the Banco Caracas page">Banco Caracas</Link></li>
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