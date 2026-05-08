import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedro García de Herrera y Rojas | Person Profile",
  description:
    "A person profile for Pedro García de Herrera y Rojas, used on the portal as one of the earliest named anchors in the House of Herrera record.",
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
    canonical: "/entities/pedro-garcia-de-herrera-y-rojas/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Pedro García de Herrera y Rojas | Person Profile",
    description:
      "A person profile for Pedro García de Herrera y Rojas, used on the portal as one of the earliest named anchors in the House of Herrera record.",
    url: "https://herreravelutini.com/entities/pedro-garcia-de-herrera-y-rojas/",
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
    title: "Pedro García de Herrera y Rojas | Person Profile",
    description:
      "A person profile for Pedro García de Herrera y Rojas, used on the portal as one of the earliest named anchors in the House of Herrera record.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-17",
  }
};

export default function PedroGarciaDeHerreraYRojas() {
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
              url: "https://herreravelutini.com/entities/pedro-garcia-de-herrera-y-rojas/",
              datePublished: "2026-04-17",
              dateModified: "2026-04-17",
              mainEntity: {
                "@type": "Person",
                name: "Pedro García de Herrera y Rojas",
                birthDate: "1390",
                deathDate: "1455",
                description:
                  "A Castilian nobleman used on the portal as one of the earliest named anchors in the House of Herrera record.",
              },
              author: {
                "@id": "https://herreravelutini.com/editorial-desk/#org",
              },
              editor: {
                "@id": "https://herreravelutini.com/review-team/#org",
              },
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
                  name: "Pedro García de Herrera y Rojas",
                  item: "https://herreravelutini.com/entities/pedro-garcia-de-herrera-y-rojas/",
                },
              ],
            }),
          }}
        />
      </Head>

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/entities/">Entities</Link>
                  </li>
                  <li aria-current="page">Pedro García de Herrera y Rojas</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Pedro García de Herrera y Rojas</h1>
              <p className="lede">
                Pedro García de Herrera y Rojas is one of the earliest clearly
                named figures in the House of Herrera sequence. On this portal,
                he functions as a medieval anchor: the person page readers can
                use when they need the House record to become specific rather
                than abstract. He is especially useful as the opening figure in
                the <Link href="/timeline/">Timeline</Link> and as a concrete
                entry point into the wider{" "}
                <Link href="/heritage/">Heritage</Link> cluster.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Person</strong>
                </li>
                <li>
                  <span>Life dates</span>
                  <strong>1390–1455</strong>
                </li>
                <li>
                  <span>Portal role</span>
                  <strong>Medieval anchor figure</strong>
                </li>
                <li>
                  <span>Associated pages</span>
                  <strong>House of Herrera · Heritage · Timeline</strong>
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
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why this figure matters</div>
            <h2>The House record needs an early named reference point.</h2>
            <p className="lede">
              Long dynastic stories can feel distant unless readers can attach
              them to individual figures. Pedro García de Herrera y Rojas
              performs that role on this portal. The source material identifies
              him as a Castilian nobleman and Marshal of Castile, which makes
              him useful not only as a genealogical figure but as a marker of
              rank and public office in the early House sequence.
            </p>
            <div className="cards" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Named early anchor</h3>
                <p>
                  He gives the timeline a recognisable medieval starting figure
                  instead of a vague opening century.
                </p>
                <p>
                  <Link href="/timeline/">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Public office</h3>
                <p>
                  The Marshal of Castile reference helps readers understand the
                  House record as tied to office and responsibility, not only
                  family succession.
                </p>
                <p>
                  <Link href="/heritage/">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>House context</h3>
                <p>
                  His page works best when paired with the wider House profile
                  and heritage cluster.
                </p>
                <p>
                  <Link href="/entities/house-of-herrera/">Open page</Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Pedro García profile</h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the
                source pages in sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/dynasty"
                    rel="noopener external"
                  >
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for the sequence placement and life dates.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas"
                    rel="noopener external"
                  >
                    House of Herrera — Pedro García de Herrera y Rojas
                  </Link>{" "}
                  — Used for the Castilian nobleman and Marshal of Castile
                  description.
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
              <Link href="/entities/house-of-herrera/" className="button">
                House of Herrera
              </Link>
              <Link href="/heritage/" className="button-secondary">
                Heritage cluster
              </Link>
              <Link href="/timeline/" className="button-secondary">
                Timeline
              </Link>
              <Link href="/entities/" className="button-secondary">
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
                <Link href="/about/">About</Link>
              </li>
              <li>
                <Link href="/heritage/">Heritage</Link>
              </li>
              <li>
                <Link href="/families/">Families</Link>
              </li>
              <li>
                <Link href="/genealogy/">Genealogy</Link>
              </li>
              <li>
                <Link href="/places/">Places</Link>
              </li>
              <li>
                <Link href="/estates/">Estates</Link>
              </li>
              <li>
                <Link href="/timeline/">Timeline</Link>
              </li>
              <li>
                <Link href="/entities/">Entities</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li>
                <Link href="/editorial-methodology/">Editorial Methodology</Link>
              </li>
              <li>
                <Link href="/sources/">Sources</Link>
              </li>
              <li>
                <Link href="/editorial-desk/">Editorial Desk</Link>
              </li>
              <li>
                <Link href="/review-team/">Review Team</Link>
              </li>
              <li>
                <Link href="/knowledge/">Knowledge &amp; FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link href="/families/herrera-velutini-connection/">
                  Herrera and Velutini
                </Link>
              </li>
              <li>
                <Link href="/families/velutini/">Velutini Family</Link>
              </li>
              <li>
                <Link href="/places/caracas/">Caracas</Link>
              </li>
              <li>
                <Link href="/entities/banco-caracas/">Banco Caracas</Link>
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