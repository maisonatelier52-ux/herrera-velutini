import Head from "next/head";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "José Herrera Von Uslar Gleichen | Person Profile",
  description:
    "A person profile for José Herrera Von Uslar Gleichen, connecting titles, diplomacy, and humanitarian action in the House record.",
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
    canonical: "/entities/jose-herrera-von-uslar-gleichen/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "José Herrera Von Uslar Gleichen | Person Profile",
    description:
      "A person profile for José Herrera Von Uslar Gleichen, connecting titles, diplomacy, and humanitarian action in the House record.",
    url: "https://herreravelutini.com/entities/jose-herrera-von-uslar-gleichen/",
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
    title: "José Herrera Von Uslar Gleichen | Person Profile",
    description:
      "A person profile for José Herrera Von Uslar Gleichen, connecting titles, diplomacy, and humanitarian action in the House record.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-17",
  },
};

export default function JoseHerreraVonUslarGleichen() {
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
              url: "https://herreravelutini.com/entities/jose-herrera-von-uslar-gleichen/",
              datePublished: "2026-04-17",
              dateModified: "2026-04-17",
              mainEntity: {
                "@type": "Person",
                name: "José Herrera Von Uslar Gleichen",
                description:
                  "A public figure page connecting titles, diplomacy, and humanitarian action within the House of Herrera record.",
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
                  name: "Entities",
                  item: "https://herreravelutini.com/entities/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "José Herrera Von Uslar Gleichen",
                  item: "https://herreravelutini.com/entities/jose-herrera-von-uslar-gleichen/",
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
                  <li>
                    <Link href="/" title="Home">Home</Link>
                  </li>
                  <li>
                    <Link href="/entities/" title="Entities">Entities</Link>
                  </li>
                  <li aria-current="page">José Herrera Von Uslar Gleichen</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>José Herrera Von Uslar Gleichen</h1>
              <p className="lede">
                José Herrera Von Uslar Gleichen is one of the most useful
                twentieth-century bridge figures on the portal. His page
                connects the House record to diplomacy, legal training,
                title-bearing identity, and humanitarian action. That makes him
                more than a family figure: he becomes a way to understand how
                the record moves from noble distinction into public service and
                modern international context.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Person</strong>
                </li>
                <li>
                  <span>Life marker</span>
                  <strong>circa 1906</strong>
                </li>
                <li>
                  <span>Portal role</span>
                  <strong>Twentieth-century bridge figure</strong>
                </li>
                <li>
                  <span>Associated pages</span>
                  <strong>House of Herrera · Timeline · Heritage</strong>
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
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why this figure matters</div>
            <h2>
              A bridge between nobility, public service, and humanitarian
              memory.
            </h2>
            <p className="lede">
              The source material identifies José Herrera Von Uslar Gleichen as
              a lawyer, Marquis of Lanzarote, and Count of Palomar, and also
              describes diplomatic service in Sweden alongside advocacy
              connected to World War II orphans. This portal concentrates on
              that combination because it gives the broader House record a
              modern, public-facing shape that readers can quickly understand.
            </p>
            <div className="cards" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Diplomatic context</h3>
                <p>
                  His page brings formal public service into the House cluster
                  and helps explain why diplomacy belongs in the record.
                </p>
                <p>
                  <Link href="/heritage/" title="Open Heritage page">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Humanitarian dimension</h3>
                <p>
                  The source page&apos;s refugee-orphan initiative gives the
                  timeline a clear public-action chapter beyond lineage and
                  titles.
                </p>
                <p>
                  <Link href="/timeline/" title="Open Timeline page">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Title linkage</h3>
                <p>
                  His page also supports the house-level explanation of how
                  title, person, and place interconnect.
                </p>
                <p>
                  <Link href="/entities/house-of-herrera/" title="Open House of Herrera page">Open page</Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>
                Source basis for the José Herrera Von Uslar Gleichen profile
              </h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the
                source pages in sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/dynasty"
                    rel="noopener external"
                    title="House of Herrera — Dynasty"
                  >
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for sequence placement within the House record.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen"
                    rel="noopener external"
                    title="House of Herrera — José Herrera Von Uslar Gleichen"
                  >
                    House of Herrera — José Herrera Von Uslar Gleichen
                  </Link>{" "}
                  — Used for profession, titles, diplomatic reference, and
                  humanitarian note.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/orders-and-distinctions"
                    rel="noopener external"
                    title="House of Herrera — Orders and Distinctions"
                  >
                    House of Herrera — Orders and Distinctions
                  </Link>{" "}
                  — Used for title context.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the portal</h2>
            <div className="button-row">
              <Link href="/entities/house-of-herrera/" className="button" title="House of Herrera">
                House of Herrera
              </Link>
              <Link href="/heritage/" className="button-secondary" title="Heritage cluster">
                Heritage cluster
              </Link>
              <Link href="/timeline/" className="button-secondary" title="Timeline">
                Timeline
              </Link>
              <Link href="/entities/" className="button-secondary" title="Entity hub">
                Entity hub
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
              A fast, source-linked editorial portal for family history,
              lineage, estates, organizations, and places associated with the
              Herrera and Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li>
                <Link href="/about/" title="About">About</Link>
              </li>
              <li>
                <Link href="/heritage/" title="Heritage">Heritage</Link>
              </li>
              <li>
                <Link href="/families/" title="Families">Families</Link>
              </li>
              <li>
                <Link href="/genealogy/" title="Genealogy">Genealogy</Link>
              </li>
              <li>
                <Link href="/places/" title="Places">Places</Link>
              </li>
              <li>
                <Link href="/estates/" title="Estates">Estates</Link>
              </li>
              <li>
                <Link href="/timeline/" title="Timeline">Timeline</Link>
              </li>
              <li>
                <Link href="/entities/" title="Entities">Entities</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li>
                <Link href="/editorial-methodology/" title="Editorial Methodology">Editorial Methodology</Link>
              </li>
              <li>
                <Link href="/sources/" title="Sources">Sources</Link>
              </li>
              <li>
                <Link href="/editorial-desk/" title="Editorial Desk">Editorial Desk</Link>
              </li>
              <li>
                <Link href="/review-team/" title="Review Team">Review Team</Link>
              </li>
              <li>
                <Link href="/knowledge/" title="Knowledge & FAQ">Knowledge &amp; FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">
                  Herrera and Velutini
                </Link>
              </li>
              <li>
                <Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link>
              </li>
              <li>
                <Link href="/places/caracas/" title="Caracas">Caracas</Link>
              </li>
              <li>
                <Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© {new Date().getFullYear()} Herrera Velutini</span>
          <span>
            Built for clear attribution, fast delivery, and durable search
            understanding.
          </span>
        </div>
      </footer>
    </>
  );
}