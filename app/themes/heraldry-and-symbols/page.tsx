import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Heraldry and Symbols | Coats of Arms, Branches and Family Memory",
  description:
    "An original synthesis of the House of Herrera symbols material, explaining how coats of arms work as a map of branches, places, and family memory across the portal.",
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
    canonical: "/themes/heraldry-and-symbols/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Heraldry and Symbols | Coats of Arms, Branches and Family Memory",
    description:
      "An original synthesis of the House of Herrera symbols material, explaining how coats of arms work as a map of branches, places, and family memory across the portal.",
    url: "https://herreravelutini.com/themes/heraldry-and-symbols/",
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
    title:
      "Heraldry and Symbols | Coats of Arms, Branches and Family Memory",
    description:
      "An original synthesis of the House of Herrera symbols material, explaining how coats of arms work as a map of branches, places, and family memory across the portal.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },

  other: {
    "article:published_time": "2026-04-20",
    "article:modified_time": "2026-04-21",
  },
};

export default function HeraldryAndSymbols() {
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
              url: "https://herreravelutini.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://herreravelutini.com/brand-wordmark.svg",
              },
              publishingPrinciples:
                "https://herreravelutini.com/editorial-methodology/",
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
              publisher: { "@id": "https://herreravelutini.com/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "@id": "https://herreravelutini.com/themes/heraldry-and-symbols/#article",
              headline: "Heraldry and Symbols",
              description:
                "An original synthesis of the House of Herrera symbols material, explaining how coats of arms work as a map of branches, places, and family memory across the portal.",
              url: "https://herreravelutini.com/themes/heraldry-and-symbols/",
              datePublished: "2026-04-20",
              dateModified: "2026-04-21",
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              about: [
                "House of Herrera",
                "heraldry",
                "coats of arms",
                "Lanzarote",
                "Uslar",
                "Gleichen",
                "Velutini",
              ],
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
                  name: "Themes",
                  item: "https://herreravelutini.com/themes/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Heraldry and Symbols",
                  item: "https://herreravelutini.com/themes/heraldry-and-symbols/",
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
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="/" title="Home">Home</Link></li>
                  <li><Link href="/themes/" title="Themes">Themes</Link></li>
                  <li aria-current="page">Heraldry and Symbols</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Heraldry and Symbols</h1>
              <p className="lede">
                On the Herrera side of the portal, heraldry is not decorative surplus. The
                coats of arms shown on the House of Herrera symbols page work as a compact map
                of branches, alliances, and geographic memory, linking the family record to
                Lanzarote, Uslar, Gleichen, and even the Velutini bridge.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary source</span>
                  <strong>House of Herrera — Symbols</strong>
                </li>
                <li>
                  <span>Named arms</span>
                  <strong>
                    Herrera, Lanzarote, Uslar, Gleichen, Velutini, and the broader
                    Herrera-Sarmiento-Rojas-Ayala line
                  </strong>
                </li>
                <li>
                  <span>Why it matters</span>
                  <strong>Turns branch memory into a navigable research layer</strong>
                </li>
                <li>
                  <span>Related theme</span>
                  <strong>
                    <Link href="/themes/orders-and-distinctions/" title="Orders and Distinctions">
                      Orders and Distinctions
                    </Link>
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
              <Link href="/editorial-desk/" title="Herrera Velutini Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/" title="Standards Review Team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-20">April 20, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Portal function</div>
            <h2>Why heraldry matters on this site</h2>
            <p className="lede">
              The symbols page does not give the portal a full heraldic treatise, but it does
              give it a stable set of identity markers. Those markers help the site explain how
              surnames, estates, and branch names belong to the same family record.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Branch memory</h3>
                <p>
                  The named arms extend beyond Herrera alone, showing how Lanzarote, Uslar,
                  Gleichen, and Velutini sit inside the symbolic field around the family record.
                </p>
              </article>
              <article className="card">
                <h3>Place memory</h3>
                <p>
                  Heraldry becomes more legible when read with{" "}
                  <Link href="/entities/castle-santa-barbara/" title="Castle Santa Barbara">Castle Santa Barbara</Link>, the
                  Lanzarote cluster, and the German estate references around Gleichen and Uslar.
                </p>
              </article>
              <article className="card">
                <h3>Connection logic</h3>
                <p>
                  The presence of a Velutini coat of arms on the House of Herrera symbols page
                  matters because it gives the portal one more public bridge between the two
                  family narratives.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Reading the source page</div>
            <h2>The symbols page is strongest as an identity index</h2>
            <p className="lede">
              The House of Herrera symbols page is highly visual. It names several coats of
              arms, but it does not provide long written explanations for each one. The portal
              therefore uses it as evidence of branch identity, not as a substitute for formal
              heraldic scholarship.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">House cluster</div>
                <h3>Herrera and the wider line</h3>
                <p>
                  The page opens with the broader Herrera-Sarmiento-Rojas-Ayala arms and then
                  returns to a more compact Herrera identity, giving the portal a way to talk
                  about house-level continuity and branch-level focus at once. The new{" "}
                  <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" title="Juan Sarmiento">
                    Juan Sarmiento
                  </Link>{" "}
                  page is where the portal now tracks that branch signal and its source-name
                  variant.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Island and castle cluster</div>
                <h3>Lanzarote as symbolic geography</h3>
                <p>
                  The Lanzarote arms matter most when tied to the distinctions material and the
                  fortification memory around Teguise and{" "}
                  <Link href="/entities/castle-santa-barbara/" title="Castle Santa Barbara">Castle Santa Barbara</Link>.
                </p>
              </article>
              <article className="callout">
                <div className="overline">German and bridge cluster</div>
                <h3>Uslar, Gleichen, and Velutini</h3>
                <p>
                  Those named arms widen the record beyond Spain alone and help explain why the
                  portal keeps German branches and the Velutini connection visible inside the
                  broader family graph.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to use the theme</div>
            <h2>Heraldry becomes useful when paired with people and places</h2>
            <p className="lede">
              On its own, a list of arms can feel static. The portal makes it useful by tying
              those visual markers to the pages where lineage, titles, and estates become more
              concrete.
            </p>
            <p>
              Readers coming from this page should move next into the{" "}
              <Link href="/entities/house-of-herrera/" title="House of Herrera profile">House of Herrera profile</Link>, the{" "}
              <Link href="/families/herrera/" title="Herrera Family">Herrera Family</Link> hub, and the{" "}
              <Link href="/estates/" title="Estates">Estates</Link> section. Those pages explain how symbolic
              identity connects to dynastic sequence, landed memory, and the geography of
              Lanzarote, Ampudia, Caracas, and the German branches.
            </p>
            <p>
              The theme also belongs inside the cross-family layer. Because the source page
              includes a Velutini coat of arms, heraldry quietly supports the logic of the{" "}
              <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini connection">
                Herrera and Velutini connection
              </Link>{" "}
              page, where the portal reads symbolic overlap alongside marriage and Caracas-based
              continuity.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis</h2>
              <p className="muted">
                This page uses the symbols material as a branch-and-identity source, then
                relies on other portal pages to explain where those symbols become historically
                legible.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used for the named coats of arms associated with Herrera, Lanzarote, Uslar,
                  Gleichen, Velutini, and the wider Herrera line.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for the dynastic framework that gives the symbolic material a lineage
                  context.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa"
                    rel="noopener external"
                   title="House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego">
                    House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego
                  </Link>{" "}
                  — Used for the branch-name and spelling-variant caution connected to the
                  Herrera-Sarmiento signal.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                   title="House of Herrera — Family Estates">
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the Lanzarote, Gleichen, and estate-linked geography that makes
                  heraldic references more concrete.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the broader description of the family&apos;s geographic scope and
                  long continuity.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue into the Herrera symbolic layer</h2>
            <div className="button-row">
              <Link href="/themes/orders-and-distinctions/" className="button" title="Orders and Distinctions">
                Orders and Distinctions
              </Link>
              <Link href="/entities/house-of-herrera/" className="button-secondary" title="House of Herrera">
                House of Herrera
              </Link>
              <Link href="/families/herrera/" className="button-secondary" title="Herrera Family">
                Herrera Family
              </Link>
              <Link
                href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/"
                className="button-secondary"
               title="Juan Sarmiento">
                Juan Sarmiento
              </Link>
              <Link href="/entities/castle-santa-barbara/" className="button-secondary" title="Castle Santa Barbara">
                Castle Santa Barbara
              </Link>
              <Link href="/themes/women-of-the-families/" className="button-secondary" title="Women of the Families">
                Women of the Families
              </Link>
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
              organizations, places, and interpretive themes associated with the Herrera and
              Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about/" title="About">About</Link></li>
              <li><Link href="/heritage/" title="Heritage">Heritage</Link></li>
              <li><Link href="/themes/" title="Themes">Themes</Link></li>
              <li><Link href="/families/" title="Families">Families</Link></li>
              <li><Link href="/genealogy/" title="Genealogy">Genealogy</Link></li>
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
                <Link href="/themes/orders-and-distinctions/" title="Orders and Distinctions">Orders and Distinctions</Link>
              </li>
              <li><Link href="/entities/house-of-herrera/" title="House of Herrera">House of Herrera</Link></li>
              <li><Link href="/estates/" title="Estates">Estates</Link></li>
              <li>
                <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">
                  Herrera and Velutini
                </Link>
              </li>
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