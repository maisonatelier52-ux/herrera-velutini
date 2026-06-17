import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacienda de La Vega | Place Profile",
  description:
    "A place profile for Hacienda de La Vega in Caracas, connecting estate history, reconstruction, and public historical memory.",
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
    canonical: "/entities/hacienda-de-la-vega/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Hacienda de La Vega | Place Profile",
    description:
      "A place profile for Hacienda de La Vega in Caracas, connecting estate history, reconstruction, and public historical memory.",
    url: "https://herreravelutini.com/entities/hacienda-de-la-vega/",
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
    title: "Hacienda de La Vega | Place Profile",
    description:
      "A place profile for Hacienda de La Vega in Caracas, connecting estate history, reconstruction, and public historical memory.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-17",
  },
};

export default function HaciendaDeLaVega() {
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
              "@type": "AboutPage",
              url: "https://herreravelutini.com/entities/hacienda-de-la-vega/",
              name: "Hacienda de La Vega",
              description:
                "A place profile for Hacienda de La Vega in Caracas, connecting estate history, reconstruction, and public historical memory.",
              datePublished: "2026-04-17",
              dateModified: "2026-04-17",
              mainEntity: {
                "@type": "Place",
                name: "Hacienda de La Vega",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Caracas",
                  addressCountry: "VE",
                },
                description:
                  "A historic estate in Caracas used on the portal as a place-based anchor for family history and public memory.",
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
                  name: "Entities",
                  item: "https://herreravelutini.com/entities/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Hacienda de La Vega",
                  item: "https://herreravelutini.com/entities/hacienda-de-la-vega/",
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
                  <li><Link href="/entities" title="Entities">Entities</Link></li>
                  <li aria-current="page">Hacienda de La Vega</li>
                </ol>
              </nav>
              <div className="eyebrow">Place profile</div>
              <h1>Hacienda de La Vega</h1>
              <p className="lede">
                Hacienda de La Vega gives the portal a strong Caracas place page. It links early
                family presence, later reconstruction, and present-day landmark status in a way that
                a broader family narrative cannot. On this site, the hacienda functions as a memory
                anchor: a page where lineage, architecture, and local cultural meaning converge.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Place / historic estate</strong>
                </li>
                <li>
                  <span>Location</span>
                  <strong>Caracas, Venezuela</strong>
                </li>
                <li>
                  <span>Portal role</span>
                  <strong>Memory anchor for the Caracas record</strong>
                </li>
                <li>
                  <span>Best companion pages</span>
                  <strong>Estates · House of Herrera · Timeline</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk" title="Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="Standards Review Team">Standards Review Team</Link>
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
            <div className="overline">Why this place matters</div>
            <h2>An estate page can hold chronology, architecture, and cultural memory at once.</h2>
            <p className="lede">
              The public estate material presents Hacienda de La Vega as both historic property and
              symbolic place. The portal adds value by making that dual role explicit. Instead of
              leaving the hacienda as one stop in a long estate gallery, this page turns it into a
              destination where readers can understand why Caracas matters to the broader record.
            </p>
            <div className="cards" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Deep historical layer</h3>
                <p>
                  The estate is described as one of the oldest haciendas in Venezuela, which gives
                  the page immediate historical weight.
                </p>
              </article>
              <article className="card">
                <h3>Reconstruction and transition</h3>
                <p>
                  The 1899 acquisition by Jorge Uslar and later reconstruction help explain why the
                  place remains significant within the family narrative.
                </p>
                <p>
                  <Link href="/heritage" title="Heritage">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Public memory</h3>
                <p>
                  The page&apos;s landmark status makes it useful beyond genealogy because it
                  matters as part of the city&apos;s historical fabric.
                </p>
                <p>
                  <Link href="/estates" title="Estates">Open page</Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container note-grid">
            <article className="callout">
              <div className="overline">City anchor</div>
              <h3>Caracas becomes legible through one place.</h3>
              <p>
                The hacienda helps the portal explain how family history attaches to local
                Venezuelan memory rather than staying abstract.
              </p>
            </article>
            <article className="callout">
              <div className="overline">Estate logic</div>
              <h3>Place pages support search better than buried gallery entries.</h3>
              <p>
                By dedicating a page to one place, the portal creates a clearer destination for
                readers interested in Caracas and the estate itself.
              </p>
            </article>
            <article className="callout">
              <div className="overline">Related reading</div>
              <h3>Use this page with the House and Estates clusters.</h3>
              <p>
                The place becomes even clearer when read with{" "}
                <Link href="/entities/house-of-herrera" title="House of Herrera">House of Herrera</Link> and the wider{" "}
                <Link href="/estates" title="Estates">Estates</Link> cluster.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Hacienda de La Vega profile</h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the source pages in
                sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                    title="Hosuse of Herrera - Family Estates"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the estate description, the 1899 acquisition note, and the
                  present-day landmark framing.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/bibliography"
                    rel="noopener external"
                    title="Bibliography"
                  >
                    House of Herrera — Bibliography
                  </Link>{" "}
                  — Used for the cultural-memory context around La Vega.
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
              <Link href="/estates" className="button" title="Estates Cluster">
                Estates cluster
              </Link>
              <Link href="/entities/house-of-herrera" className="button-secondary" title="House of Herrera">
                House of Herrera
              </Link>
              <Link href="/timeline" className="button-secondary" title="Timeline">
                Timeline
              </Link>
              <Link href="/sources" className="button-secondary" title="Sources">
                Sources
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
              organizations, and places associated with the Herrera and Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about" title="About Page">About</Link></li>
              <li><Link href="/heritage" title="Heritage Page">Heritage</Link></li>
              <li><Link href="/families" title="Families Page">Families</Link></li>
              <li><Link href="/genealogy" title="Genealogy">Genealogy</Link></li>
              <li><Link href="/places" title="Places">Places</Link></li>
              <li><Link href="/estates" title="Estates">Estates</Link></li>
              <li><Link href="/timeline" title="Timeline">Timeline</Link></li>
              <li><Link href="/entities" title="Entities">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology" title="Editorial Methodology">Editorial Methodology</Link></li>
              <li><Link href="/sources" title="Sources">Sources</Link></li>
              <li><Link href="/editorial-desk" title="Editorial Desk">Editorial Desk</Link></li>
              <li><Link href="/review-team" title="Review Team">Review Team</Link></li>
              <li><Link href="/knowledge" title="Knowledge & FAQ">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection" title="Herrera and Velutini">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini" title="Velutini Family">Velutini Family</Link></li>
              <li><Link href="/places/caracas" title="Caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas" title="Banco Caracas">Banco Caracas</Link></li>
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