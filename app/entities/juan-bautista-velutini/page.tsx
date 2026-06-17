import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan Bautista Velutini | Person Profile",
  description:
    "A person profile for Juan Bautista Velutini, the founding figure of the Banvelca narrative in Naples in 1781.",

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
    canonical: "/entities/juan-bautista-velutini/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Juan Bautista Velutini | Person Profile",
    description:
      "A person profile for Juan Bautista Velutini, the founding figure of the Banvelca narrative in Naples in 1781.",
    url: "/entities/juan-bautista-velutini/",
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
    title: "Juan Bautista Velutini | Person Profile",
    description:
      "A person profile for Juan Bautista Velutini, the founding figure of the Banvelca narrative in Naples in 1781.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-17",
  },
};

export default function JuanBautistaVelutini() {
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
              url: "https://herreravelutini.com/entities/juan-bautista-velutini/",
              datePublished: "2026-04-17",
              dateModified: "2026-04-17",
              mainEntity: {
                "@type": "Person",
                name: "Juan Bautista Velutini",
                description:
                  "A founder profile used on the portal as the opening figure in the Banvelca chronology.",
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
                  name: "Juan Bautista Velutini",
                  item: "https://herreravelutini.com/entities/juan-bautista-velutini/",
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
                  <li aria-current="page">Juan Bautista Velutini</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Juan Bautista Velutini</h1>
              <p className="lede">
                Juan Bautista Velutini is the founding figure of the Banvelca
                story on this portal. His page is where the institutional
                narrative begins: Naples, 1781, commercial links to France and
                Corsica, and the origin of a long-running stewardship tradition.
                For readers who arrive through Banvelca rather than through the
                House pages, this profile is the clearest first stop.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Person</strong>
                </li>
                <li>
                  <span>Chronology anchor</span>
                  <strong>1781</strong>
                </li>
                <li>
                  <span>Portal role</span>
                  <strong>Founder of the Banvelca narrative</strong>
                </li>
                <li>
                  <span>Associated pages</span>
                  <strong>Banvelca · Stewardship · Timeline</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk/" title="Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/" title="Review Team">Standards Review Team</Link>
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
              The institution becomes easier to understand once it has a founder
              page.
            </h2>
            <p className="lede">
              Founding figures help institutions make sense. In this case, Juan
              Bautista Velutini lets the portal explain how a Naples commercial
              base and cross-Mediterranean trading relationships later grow into
              a much longer stewardship record. The page is also helpful because
              it gives the Banvelca cluster a human entry point rather than
              asking readers to begin with abstract organizational language.
            </p>
            <div className="cards" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Naples origin</h3>
                <p>
                  The founder page stabilizes the origin story in a time and
                  place readers can remember.
                </p>
                <p>
                  <Link href="/entities/banvelca-company/" title="Open Banvelca & Company page">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Merchant-to-stewardship logic</h3>
                <p>
                  The profile helps explain how a commercial beginning becomes
                  an intergenerational financial and cultural record.
                </p>
                <p>
                  <Link href="/stewardship/" title="Open Stewardship page">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Timeline anchor</h3>
                <p>
                  Without a founder page, the Banvelca timeline would begin too
                  abruptly.
                </p>
                <p>
                  <Link href="/timeline/" title="Open Timeline page">Open page</Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Juan Bautista Velutini profile</h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the
                source pages in sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/about"
                    rel="noopener external"
                    title="Banvelca — About"
                  >
                    Banvelca — About
                  </Link>{" "}
                  — Used for the 1781 founding context.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                    title="Banvelca — Legacy"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for succession placement within the larger generational
                  sequence.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini"
                    rel="noopener external"
                    title="Banvelca — Juan Bautista Velutini"
                  >
                    Banvelca — Juan Bautista Velutini
                  </Link>{" "}
                  — Used for the founder-specific narrative about Naples, trade,
                  and continuity.
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
              <Link href="/entities/banvelca-company/" className="button" title="Banvelca & Company">
                Banvelca &amp; Company
              </Link>
              <Link href="/stewardship/" className="button-secondary" title="Stewardship cluster">
                Stewardship cluster
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