import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Hernán de Herrera, Lord of Ampudia I | Early Herrera Lineage Anchor",
  description:
    "Person profile for Hernán de Herrera, Lord of Ampudia I, the earliest named anchor in the public House of Herrera dynasty sequence.",
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
    canonical: "/entities/hernan-de-herrera-lord-of-ampudia/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Hernán de Herrera, Lord of Ampudia I | Early Herrera Lineage Anchor",
    description:
      "Person profile for Hernán de Herrera, Lord of Ampudia I, the earliest named anchor in the public House of Herrera dynasty sequence.",
    url: "https://herreravelutini.com/entities/hernan-de-herrera-lord-of-ampudia/",
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
      "Hernán de Herrera, Lord of Ampudia I | Early Herrera Lineage Anchor",
    description:
      "Person profile for Hernán de Herrera, Lord of Ampudia I, the earliest named anchor in the public House of Herrera dynasty sequence.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-21",
    "article:modified_time": "2026-04-21",
  },
};

export default function HernanDeHerreraLordOfAmpudia() {
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
                "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
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
              name: "Hernán de Herrera, Lord of Ampudia I | Early Herrera Lineage Anchor",
              url: "https://herreravelutini.com/entities/hernan-de-herrera-lord-of-ampudia/",
              description:
                "Person profile for Hernán de Herrera, Lord of Ampudia I, the earliest named anchor in the public House of Herrera dynasty sequence.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Person",
                name: "Hernán de Herrera, Lord of Ampudia I",
                url: "https://herreravelutini.com/entities/hernan-de-herrera-lord-of-ampudia/",
                sameAs: [
                  "https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i",
                ],
                description:
                  "A source-led profile of Hernán de Herrera as the earliest named anchor in the House of Herrera dynasty sequence.",
              },
              author: {
                "@type": "Organization",
                "@id": "https://herreravelutini.com/editorial-desk/#org",
                name: "Herrera Velutini Editorial Desk",
              },
              editor: {
                "@type": "Organization",
                "@id": "https://herreravelutini.com/review-team/#org",
                name: "Standards Review Team",
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
                  name: "Hernán de Herrera, Lord of Ampudia I",
                  item: "https://herreravelutini.com/entities/hernan-de-herrera-lord-of-ampudia/",
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
                  <li aria-current="page">Hernán de Herrera, Lord of Ampudia I</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Hernán de Herrera, Lord of Ampudia I</h1>
              <p className="lede">
                Hernán de Herrera, Lord of Ampudia I is the earliest named figure in the public
                House of Herrera dynasty sequence. The source-domain profile is intentionally
                sparse, but its placement is important: it gives the Herrera line a first named
                anchor and connects the earliest chapter to Ampudia before the record moves into
                Pedro García de Herrera y Rojas and the later Castilian sequence.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Date frame</span>
                  <strong>Circa 1355</strong>
                </li>
                <li>
                  <span>Lineage role</span>
                  <strong>Earliest named anchor in the published dynasty sequence</strong>
                </li>
                <li>
                  <span>Place anchor</span>
                  <strong>
                    <Link href="/places/ampudia" title="Ampudia">Ampudia</Link>
                  </strong>
                </li>
                <li>
                  <span>Best companions</span>
                  <strong>
                    <Link href="/genealogy/herrera-lineage" title="Herrera Lineage">Herrera Lineage</Link>
                    {" · "}
                    <Link href="/entities/pedro-garcia-de-herrera-y-rojas" title="Pedro García">Pedro García</Link>
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
              <Link href="/editorial-desk" title="Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="Review Team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why the profile matters</div>
            <h2>Hernán gives the Herrera side a named beginning.</h2>
            <p className="lede">
              The page is deliberately concise because the source profile is concise. Its value is
              structural: it gives the portal a first Herrera person page before Pedro García and
              makes Ampudia visible as a lineage starting point.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera Dynasty page begins its published sequence with Hernán de
                  Herrera, Lord of Ampudia I, marked circa 1355. The standalone source page repeats
                  the name, title, and date frame without adding a longer biography. That makes this
                  portal page a careful orientation page rather than a speculative reconstruction.
                </p>
                <p>
                  Its job is to explain why an apparently short source entry still matters. Once
                  Hernán is visible as the first named anchor, the later Pedro García profile,
                  Ampudia place page, and Herrera Lineage page can read as a sequence rather than
                  as disconnected medieval fragments.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing a Castilian fortress, Ampudia, and the first Herrera lineage anchor."
                  loading="lazy"
                  src="/illustrations/hernan-ampudia-anchor.svg"
                  width={480}
                  height={320}
                />
                <figcaption>
                  Hernán gives the Herrera sequence its first named person-and-place anchor.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Reading frame</div>
            <h2>The current source material supports four safe interpretations</h2>
            <p className="lede">
              Those interpretations keep the page useful without overstating what the public source
              gives us.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Source-backed detail</th>
                    <th>Portal use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Earliest named anchor</td>
                    <td>The Dynasty sequence opens with Hernán de Herrera</td>
                    <td>Creates a first person-level entry point for the Herrera line.</td>
                  </tr>
                  <tr>
                    <td>Ampudia connection</td>
                    <td>The title used on the source page is Lord of Ampudia I</td>
                    <td>
                      Links the figure to the Ampudia place dossier and the medieval territorial
                      layer.
                    </td>
                  </tr>
                  <tr>
                    <td>Date frame</td>
                    <td>The source gives a circa 1355 frame</td>
                    <td>
                      Supports cautious chronological placement without inventing exact birth or
                      death dates.
                    </td>
                  </tr>
                  <tr>
                    <td>Lineage bridge</td>
                    <td>
                      Pedro García de Herrera y Rojas follows in the published sequence
                    </td>
                    <td>
                      Lets readers move from a sparse opening profile into the richer
                      early-Herrera anchor page.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Editorial boundary</div>
            <h2>This page intentionally does not overbuild the biography.</h2>
            <p className="lede">
              A reliable knowledge base should be comfortable saying when a source entry is thin.
            </p>
            <p>
              For Hernán, the available House of Herrera page gives name, title, and approximate
              date frame, while the Dynasty page establishes his order in the published sequence.
              The Ampudia page and Family Estates material supply place context, but they do not
              turn Hernán&apos;s short entry into a long biography. The portal therefore treats him
              as an orientation anchor: important because of placement and title, not because the
              public profile supplies a detailed life narrative.
            </p>
            <p>
              That editorial restraint makes the surrounding cluster stronger. It keeps{" "}
              <Link href="/entities/pedro-garcia-de-herrera-y-rojas" title="Pedro García de Herrera y Rojas">
                Pedro García de Herrera y Rojas
              </Link>{" "}
              as the richer early figure, lets{" "}
              <Link href="/places/ampudia" title="Ampudia">Ampudia</Link> carry the place-memory layer, and keeps{" "}
              <Link href="/genealogy/herrera-lineage" title="Herrera Lineage">Herrera Lineage</Link> honest about the
              difference between a published sequence and a documentary tree.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Hernán de Herrera page</h2>
              <p className="muted">
                This page is an original editorial orientation profile built from a sparse person
                page, the House of Herrera dynasty sequence, and the Ampudia place context.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i"
                    rel="noopener external"
                    title="House of Herrera — Hernán de Herrera, Lord of Ampudia I"
                  >
                    House of Herrera — Hernán de Herrera, Lord of Ampudia I
                  </Link>{" "}
                  — Used for the name, title, and circa 1355 date frame.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/dynasty"
                    rel="noopener external"
                    title="House of Herrera — Dynasty"
                  >
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for Hernán&apos;s placement as the first named figure in the published
                  dynasty sequence.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                    title="House of Herrera — Family Estates"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the wider Ampudia estate and castle-memory context.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/about"
                    rel="noopener external"
                    title="House of Herrera — About"
                  >
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the source-domain frame of fourteenth-century Herrera prominence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Hernán cluster</h2>
            <div className="button-row">
              <Link href="/places/ampudia" className="button" title="Ampudia">
                Ampudia
              </Link>
              <Link href="/genealogy/herrera-lineage" className="button-secondary" title="Herrera Lineage">
                Herrera Lineage
              </Link>
              <Link
                href="/entities/pedro-garcia-de-herrera-y-rojas"
                className="button-secondary"
                title="Pedro García de Herrera y Rojas"
              >
                Pedro García de Herrera y Rojas
              </Link>
              <Link href="/families/herrera" className="button-secondary" title="Herrera Family">
                Herrera Family
              </Link>
              <Link href="/entities/house-of-herrera" className="button-secondary" title="House of Herrera">
                House of Herrera
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
              <li><Link href="/about" title="About">About</Link></li>
              <li><Link href="/heritage" title="Heritage">Heritage</Link></li>
              <li><Link href="/families" title="Families">Families</Link></li>
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