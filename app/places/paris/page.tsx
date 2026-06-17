import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://herreravelutini.com"),

  title:
    "Paris | Education Bridge, European Presence and Family Continuity",

  description:
    "Place dossier for Paris as a bridge between Clementina Velutini's education and Banvelca's later European office presence.",

  applicationName: "Herrera Velutini",
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

  alternates: {
    canonical: "/places/paris/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Paris | Education Bridge, European Presence and Family Continuity",
    description:
      "Place dossier for Paris as a bridge between Clementina Velutini's education and Banvelca's later European office presence.",
    url: "/places/paris/",
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
    title:
      "Paris | Education Bridge, European Presence and Family Continuity",
    description:
      "Place dossier for Paris as a bridge between Clementina Velutini's education and Banvelca's later European office presence.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Paris() {
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
              areaServed: ["Europe", "North America", "Latin America", "Middle East"],
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
              name: "Paris | Education Bridge, European Presence and Family Continuity",
              url: "https://herreravelutini.com/places/paris/",
              description:
                "Place dossier for Paris as a bridge between Clementina Velutini's education and Banvelca's later European office presence.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Place",
                name: "Paris",
                url: "https://herreravelutini.com/places/paris/",
                description:
                  "Place dossier for Paris across the modern Velutini and Banvelca record.",
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
                  name: "Places",
                  item: "https://herreravelutini.com/places/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Paris",
                  item: "https://herreravelutini.com/places/paris/",
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
                  <li><Link href="https://herreravelutini.com/" title="Home">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/places/" title="Places">Places</Link></li>
                  <li aria-current="page">Paris</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Paris</h1>
              <p className="lede">
                Paris is one of the portal&rsquo;s most useful bridge cities. It links a
                documented twentieth-century family-education route through Clementina Velutini
                Pérez-Matos with Banvelca&rsquo;s later European operating presence, giving the
                site a city that sits between biography and contemporary institutional geography.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>Education bridge and modern Europe node</strong>
                </li>
                <li>
                  <span>Strongest anchors</span>
                  <strong>
                    <Link href="/entities/clementina-velutini-perez-matos/" title="Clementina Velutini Pérez-Matos">
                      Clementina Velutini Pérez-Matos
                    </Link>
                    {" and "}
                    <Link href="/entities/banvelca-company/" title="Banvelca & Company">Banvelca &amp; Company</Link>
                  </strong>
                </li>
                <li>
                  <span>Time layers</span>
                  <strong>Paris schooling, later office network, ongoing Europe presence</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong>
                    <Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link>
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
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-23">April 23, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why Paris matters</div>
            <h2>Paris turns a passing biographical detail into a real geography layer.</h2>
            <p className="lede">
              Without a place page, Paris would sit in the portal as an isolated education note.
              The source material allows a richer reading than that.
            </p>
            <div className="media-split">
              <div>
                <p>
                  Banvelca&rsquo;s profile for{" "}
                  <Link href="/entities/clementina-velutini-perez-matos/" title="Clementina Velutini Pérez-Matos">
                    Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  says she was educated at private schools in Paris. That detail matters because
                  it gives the twentieth-century Velutini story a named European city rather than
                  a generic cosmopolitan backdrop.
                </p>
                <p>
                  Paris also appears in Banvelca&rsquo;s contemporary geography. The current
                  Banvelca site lists Paris among its active city nodes, and the Seventh
                  Generation page explicitly describes the family enterprise as operating offices
                  in London, Paris, Geneva, New York, and Dubai. Taken together, those sources
                  let the portal read Paris as a bridge between formation and later operational
                  presence.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/paris-bridge.svg"
                  alt="Diagram showing Paris connected to Clementina's education and Banvelca's later European office network."
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption>
                  Paris works on this portal as both a biographical and institutional bridge
                  city.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Three Paris layers</div>
            <h2>The sources support three distinct ways of reading the city</h2>
            <p className="lede">
              Those layers explain why Paris belongs inside the place system instead of remaining
              a stray detail on person and company pages.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Paris-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Education</td>
                    <td>Clementina&rsquo;s schooling in Paris</td>
                    <td>
                      Gives the twentieth-century family record a documented European formation
                      point.
                    </td>
                  </tr>
                  <tr>
                    <td>Continuity</td>
                    <td>Transatlantic family bridge</td>
                    <td>
                      Connects Caracas and the later Herrera alliance to a named European city
                      in the same biography.
                    </td>
                  </tr>
                  <tr>
                    <td>Modern operations</td>
                    <td>Banvelca office network</td>
                    <td>
                      Shows that Paris remains part of the firm&rsquo;s published geography
                      rather than only a historical memory.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to use the page</div>
            <h2>Paris is not a founder city or a castle memory. It is a hinge.</h2>
            <p className="lede">That difference gives the place layer more range.</p>
            <p>
              Readers should not use Paris the way they use{" "}
              <Link href="/places/naples/" title="Naples">Naples</Link>, which anchors the 1781 origin story,
              or the way they use <Link href="/places/lanzarote/" title="Lanzarote">Lanzarote</Link>, which gathers
              fortification, heraldry, and titled memory. Paris matters because it connects the
              modern family biographies to the firm&rsquo;s later European footprint.
            </p>
            <p>
              That makes it especially useful for readers moving between{" "}
              <Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link>, the{" "}
              <Link href="/entities/clementina-velutini-perez-matos/" title="Clementina profile">
                Clementina profile
              </Link>
              , and the more contemporary Banvelca framing presented on the current site.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Paris page</h2>
              <p className="muted">
                The Paris page is a place-led synthesis built from the Clementina biography and
                Banvelca&rsquo;s current Europe-facing operating geography.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos"
                    rel="noopener external"
                   title="Banvelca — Clementina Velutini Pérez-Matos">
                    Banvelca — Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the statement that Clementina was educated at private schools in
                  Paris.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/the-seventh-generation"
                    rel="noopener external"
                   title="Banvelca — The Seventh Generation">
                    Banvelca — The Seventh Generation
                  </Link>{" "}
                  — Used for the active-office description naming Paris alongside London, Geneva,
                  New York, and Dubai.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Home">
                    Banvelca — Home
                  </Link>{" "}
                  — Used for the current public city list that includes Paris.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the broader Europe-presence framing across the current firm
                  description.
                </li>
                <li>
                  <Link href="https://whc.unesco.org/en/list/600" rel="noopener external" title="UNESCO — Paris, Banks of the Seine">
                    UNESCO — Paris, Banks of the Seine
                  </Link>{" "}
                  — Used only for external urban-heritage context around Paris; family-specific
                  Paris claims remain sourced to Banvelca.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Paris bridge</h2>
            <div className="button-row">
              <Link href="/entities/clementina-velutini-perez-matos/" className="button" title="Clementina Velutini Pérez-Matos">
                Clementina Velutini Pérez-Matos
              </Link>
              <Link href="/families/velutini/" className="button-secondary" title="Velutini Family">
                Velutini Family
              </Link>
              <Link href="/entities/banvelca-company/" className="button-secondary" title="Banvelca & Company">
                Banvelca &amp; Company
              </Link>
              <Link href="/places/naples/" className="button-secondary" title="Naples">
                Naples
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