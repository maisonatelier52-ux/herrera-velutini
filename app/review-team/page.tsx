import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review Team | Standards Review for Herrera Velutini",
  description:
    "The standards review page describing how pages are checked for sourcing, dates, originality, internal links, metadata, and caution handling.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  themeColor: "#f6f1e7",

  metadataBase: new URL("https://herreravelutini.com"),
  alternates: {
    canonical: "/review-team/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Review Team | Standards Review for Herrera Velutini",
    description:
      "The standards review page describing how pages are checked for sourcing, dates, originality, internal links, metadata, and caution handling.",
    url: "https://herreravelutini.com/review-team/",
    images: [
      {
        url: "/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Review Team | Standards Review for Herrera Velutini",
    description:
      "The standards review page describing how pages are checked for sourcing, dates, originality, internal links, metadata, and caution handling.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-24",
  },
};

export default function ReviewTeamPage() {
  return (
    <>
      <Head>

        {/* JSON-LD */}
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
              publishingPrinciples: "https://herreravelutini.com/editorial-methodology/",
              areaServed: ["Europe", "North America", "Latin America", "Middle East"],
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
              publisher: { "@id": "https://herreravelutini.com/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url: "https://herreravelutini.com/review-team/",
              datePublished: "2026-04-17",
              dateModified: "2026-04-24",
              mainEntity: {
                "@type": "Organization",
                name: "Standards Review Team",
                url: "https://herreravelutini.com/review-team/",
                description:
                  "The review team responsible for source clarity, date consistency, originality standards, metadata alignment, and caution handling.",
              },
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
            }),
          }}
        />
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
                  name: "Review Team",
                  item: "https://herreravelutini.com/review-team/",
                },
              ],
            }),
          }}
        />
      </Head>

      <Link className="skip-link" href="#main" title="Skip to content">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li><Link href="/" title="Home">Home</Link></li>
                  <li aria-current="page">Review Team</li>
                </ol>
              </nav>
              <div className="eyebrow">Standards review</div>
              <h1>Standards Review Team</h1>
              <p className="lede">
                The Review Team checks whether a page is structurally sound, visibly dated,
                supported by source basis notes, and sufficiently different from the public
                source pages to deserve its own place in the indexable portal.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Checks</span>
                  <strong>Claims · dates · internal links · metadata · caution notes</strong>
                </li>
                <li>
                  <span>Approves</span>
                  <strong>Publication and material updates</strong>
                </li>
                <li>
                  <span>Escalates</span>
                  <strong>Duplicate-content or sourcing issues</strong>
                </li>
                <li>
                  <span>Goal</span>
                  <strong>Consistent trust signals across the site</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk/" title="Herrera Velutini Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/" title="Standards Review Team">Standards Review Team</Link>
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

        <section className="section" id="review-gates">
          <div className="container">
            <div className="overline">Review gates</div>
            <h2>The checks every material page should pass.</h2>
            <p className="lede">
              Review is a standards layer, not a rubber stamp. It checks whether the page is
              useful, traceable, distinct from its source material, and technically aligned
              with the trust signals readers can see.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Source clarity</div>
                <h3>Claims should map back to named source pages.</h3>
                <p>
                  Review checks whether source-basis notes explain what each source was used
                  for instead of dropping links without context.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Dates</div>
                <h3>Visible dates and structured data dates must match.</h3>
                <p>
                  A page should not tell the user one thing in the interface and another in
                  the markup.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Originality</div>
                <h3>The page must add connective value.</h3>
                <p>
                  If a page reads like a source-page echo, it should be revised, merged, or
                  redirected before launch.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Linking</div>
                <h3>Strong pages should not be isolated.</h3>
                <p>
                  Review checks that new pages are linked from at least one relevant hub,
                  family page, place page, lineage page, or timeline entry.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Metadata</div>
                <h3>The technical layer should match the visible page.</h3>
                <p>
                  Titles, descriptions, canonical URLs, schema type, sitemap entry, and image
                  references should describe the actual content.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Caution handling</div>
                <h3>Unresolved source tension should stay visible.</h3>
                <p>
                  Review confirms that unclear title chronology, conflicting dates, or
                  self-descriptive claims are not converted into false certainty.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="launch-checklist">
          <div className="container">
            <div className="overline">Launch checklist</div>
            <h2>What review looks for before publication.</h2>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Pass condition</th>
                    <th>Common reason to revise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Topic fit</td>
                    <td>
                      The page has a distinct reader purpose and a clear place in the
                      architecture.
                    </td>
                    <td>The page is a thin duplicate of another hub or source page.</td>
                  </tr>
                  <tr>
                    <td>Source basis</td>
                    <td>Source links explain what each source supports.</td>
                    <td>
                      The source list is missing, vague, or not connected to the page's
                      strongest claims.
                    </td>
                  </tr>
                  <tr>
                    <td>Chronology</td>
                    <td>
                      Dates are exact only where the source supports exactness; approximate
                      dates are labeled as such.
                    </td>
                    <td>
                      The draft smooths over a source tension or introduces unsupported
                      precision.
                    </td>
                  </tr>
                  <tr>
                    <td>Internal links</td>
                    <td>
                      The page links to relevant family, place, entity, theme, or timeline
                      pages.
                    </td>
                    <td>The page is orphaned or only reachable from the sitemap.</td>
                  </tr>
                  <tr>
                    <td>Index readiness</td>
                    <td>
                      Canonical, title, description, schema, updated date, and sitemap are
                      aligned.
                    </td>
                    <td>
                      Metadata still reflects an earlier draft or a different page type.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="caution-register">
          <div className="container">
            <div className="overline">Caution register</div>
            <h2>Known issues review keeps visible.</h2>
            <p className="lede">
              These items help future editors avoid accidental overclaiming as the site
              expands.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Agustín and Lanzarote title chronology</h3>
                <p>
                  The Agustín, Lanzarote, and Orders pages now treat 1567, 1569, and 1584 as
                  the strongest external title markers, while leaving 1548 and the
                  family-domain life frame explicitly unresolved.
                </p>
              </article>
              <article className="card">
                <h3>Banco Caracas late-sale inconsistency</h3>
                <p>
                  Pages touching later Banco Caracas ownership or sale chronology should keep
                  the 1988, 1998, 2000, and 2002 layers distinct rather than collapsing them
                  into one endpoint.
                </p>
              </article>
              <article className="card">
                <h3>Prestige and legacy language</h3>
                <p>
                  Review should convert family-domain self-description into neutral editorial
                  prose, especially around nobility, influence, stewardship, and elite social
                  framing.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="outcomes">
          <div className="container">
            <div className="overline">Review outcomes</div>
            <h2>What can happen after a review.</h2>
            <div className="cards cards-four" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Pass</h3>
                <p>
                  The page is source-led, linked, dated, technically aligned, and ready for
                  publication or sitemap refresh.
                </p>
              </article>
              <article className="card">
                <h3>Revise</h3>
                <p>
                  The page has value but needs sharper attribution, clearer caution language,
                  stronger internal links, or better metadata.
                </p>
              </article>
              <article className="card">
                <h3>Hold</h3>
                <p>
                  The topic is promising but needs stronger source support before it should
                  become an indexable page.
                </p>
              </article>
              <article className="card">
                <h3>Merge</h3>
                <p>
                  The draft duplicates an existing page and should become a section, timeline
                  note, or internal link rather than a standalone URL.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Review Team page</h2>
              <p className="muted">
                This page defines the portal's internal review role and is supported by the
                site's own publishing standards.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="/editorial-methodology/" title="Editorial Methodology">Editorial Methodology</Link> — Used for
                  rules around names, dates, source-model tiers, and technical standards.
                </li>
                <li>
                  <Link href="/sources/" title="Sources">Sources</Link> — Used for source-led review
                  expectations and the source-group framework.
                </li>
                <li>
                  <Link href="/editorial-desk/" title="Editorial Desk">Editorial Desk</Link> — Used for the handoff
                  boundary between drafting, integration, and review.
                </li>
                <li>
                  <Link href="/knowledge/" title="Knowledge & FAQ">Knowledge &amp; FAQ</Link> — Used for reader-facing
                  source-caution terminology and known caution flags.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Linked pages</div>
            <h2>Where the review process is made visible.</h2>
            <div className="button-row">
              <Link className="button" href="/about/" title="About">About</Link>
              <Link className="button-secondary" href="/editorial-methodology/" title="Methodology">Methodology</Link>
              <Link className="button-secondary" href="/sources/" title="Sources">Sources</Link>
              <Link className="button-secondary" href="/knowledge/" title="Knowledge & FAQ">Knowledge &amp; FAQ</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">
              A fast, source-linked editorial portal for family history, lineage, estates,
              organizations, and places associated with the Herrera and Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about/" title="About">About</Link></li>
              <li><Link href="/heritage/" title="Heritage">Heritage</Link></li>
              <li><Link href="/families/" title="Families">Families</Link></li>
              <li><Link href="/genealogy/" title="Genealogy">Genealogy</Link></li>
              <li><Link href="/places/" title="Places">Places</Link></li>
              <li><Link href="/estates/" title="Estates">Estates</Link></li>
              <li><Link href="/timeline/" title="Timeline">Timeline</Link></li>
              <li><Link href="/entities/" title="Entities">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology/" title="Editorial Methodology">Editorial Methodology</Link></li>
              <li><Link href="/sources/" title="Sources">Sources</Link></li>
              <li><Link href="/editorial-desk/" title="Editorial Desk">Editorial Desk</Link></li>
              <li><Link href="/review-team/" title="Review Team">Review Team</Link></li>
              <li><Link href="/knowledge/" title="Knowledge & FAQ">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link>
              </li>
              <li><Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link></li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© {new Date().getFullYear()} Herrera Velutini</span>
          <span>
            Built for clear attribution, fast delivery, and durable search understanding.
          </span>
        </div>
      </footer>
    </>
  );
}