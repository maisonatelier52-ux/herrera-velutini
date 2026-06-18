import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "José Antonio Velutini Ron | Statecraft, Fiscal Negotiation and Nineteenth-Century Continuity",
  description:
    "Person profile for José Antonio Velutini Ron as the statecraft and fiscal bridge in the public Velutini sequence.",
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
    canonical: "/entities/jose-antonio-velutini-ron/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "José Antonio Velutini Ron | Statecraft, Fiscal Negotiation and Nineteenth-Century Continuity",
    description:
      "Person profile for José Antonio Velutini Ron as the statecraft and fiscal bridge in the public Velutini sequence.",
    url: "https://herreravelutini.com/entities/jose-antonio-velutini-ron/",
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
      "José Antonio Velutini Ron | Statecraft, Fiscal Negotiation and Nineteenth-Century Continuity",
    description:
      "Person profile for José Antonio Velutini Ron as the statecraft and fiscal bridge in the public Velutini sequence.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-21",
    "article:modified_time": "2026-04-21",
  },
};

export default function JoseAntonioVelutiniRon() {
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
              name: "José Antonio Velutini Ron | Statecraft, Fiscal Negotiation and Nineteenth-Century Continuity",
              url: "https://herreravelutini.com/entities/jose-antonio-velutini-ron/",
              description:
                "Person profile for José Antonio Velutini Ron as the statecraft and fiscal bridge in the public Velutini sequence.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Person",
                name: "José Antonio Velutini Ron",
                url: "https://herreravelutini.com/entities/jose-antonio-velutini-ron/",
                birthDate: "1844",
                description:
                  "A source-led profile of José Antonio Velutini Ron as the statecraft and fiscal bridge inside the nineteenth-century Velutini sequence.",
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
                  name: "José Antonio Velutini Ron",
                  item: "https://herreravelutini.com/entities/jose-antonio-velutini-ron/",
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
                  <li aria-current="page">José Antonio Velutini Ron</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>José Antonio Velutini Ron</h1>
              <p className="lede">
                José Antonio Velutini Ron is the public figure who turns the Velutini sequence from
                expansion into statecraft. On the Banvelca ancestor page he is framed through
                diplomacy and fiscal negotiation, giving the nineteenth-century record a bridge
                between Vicente José&apos;s geographic expansion and Julio César&apos;s later
                banking chapter.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Date frame</span>
                  <strong>1844</strong>
                </li>
                <li>
                  <span>Public frame</span>
                  <strong>Statecraft and fiscal negotiation</strong>
                </li>
                <li>
                  <span>Lineage role</span>
                  <strong>Bridge between Vicente José and Julio César</strong>
                </li>
                <li>
                  <span>Best companions</span>
                  <strong>
                    <Link href="/entities/agustin-de-herrera-y-rojas-ayala" title="Velutini Lineage">Velutini Lineage</Link>
                    {" · "}
                    <Link href="/entities/julio-cesar-velutini-couturier" title="Julio César">Julio César</Link>
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
            <h2>José Antonio gives the Velutini record a real nineteenth-century public-life chapter.</h2>
            <p className="lede">
              Without this page, the family sequence moves too quickly from Mediterranean expansion
              into industrial-age banking. José Antonio makes room for the statecraft layer that
              sits between those chapters.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The Banvelca source material presents José Antonio as a statesman and fiscal
                  negotiator. That wording matters because it places him in a different register
                  from both Juan Bautista and Vicente José. The family record is no longer only
                  mercantile and geographic; it now intersects with negotiation, public finance, and
                  diplomatic responsibility.
                </p>
                <p>
                  For the portal, this is the figure who slows the chronology down in the right
                  place. He helps readers understand that Banco Caracas-era prominence does not
                  appear from nowhere. A public-statecraft chapter exists before the banking
                  institution becomes the strongest visible anchor.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram combining civic papers, fiscal lines, and a balance motif for José Antonio Velutini Ron."
                  loading="lazy"
                  src="/illustrations/jose-antonio-statecraft.svg"
                  width={480}
                  height={320}
                />
                <figcaption>
                  José Antonio turns the Velutini sequence toward diplomacy, fiscal negotiation, and
                  public life.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Statecraft outline</div>
            <h2>The current public material gives him four durable functions</h2>
            <p className="lede">
              Those functions are enough to justify a page even when the public record is more
              concise than it is for Julio César.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Public-family detail</th>
                    <th>Portal use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nineteenth-century bridge</td>
                    <td>Placed in the sequence at 1844 between Vicente José and Julio César</td>
                    <td>Prevents the family line from leaping directly from expansion to banking.</td>
                  </tr>
                  <tr>
                    <td>Statesman frame</td>
                    <td>Presented as a statesman in the ancestor material</td>
                    <td>Adds a civic and governmental dimension to the family story.</td>
                  </tr>
                  <tr>
                    <td>Fiscal negotiation</td>
                    <td>Explicitly linked to fiscal negotiation in the public profile</td>
                    <td>Connects family history to finance before Banco Caracas becomes central.</td>
                  </tr>
                  <tr>
                    <td>Institutional prelude</td>
                    <td>Precedes the Julio César chapter in the published order</td>
                    <td>
                      Makes later banking prominence feel historically prepared rather than abrupt.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Why the page changes the site</div>
            <h2>He gives Julio César&apos;s banking chapter a proper lead-in.</h2>
            <p className="lede">
              The portal already had founder, bank, and matriarch pages. José Antonio fills the
              missing middle layer that links those stronger chapters into one sequence.
            </p>
            <p>
              Readers who arrive through{" "}
              <Link href="/entities/julio-cesar-velutini-couturier" title="Julio César Velutini Couturier">
                Julio César Velutini Couturier
              </Link>{" "}
              can now see a clearer prehistory: first the founder in Naples, then Vicente
              José&apos;s expansion chapter, then José Antonio&apos;s statecraft and fiscal frame,
              and only after that the full Banco Caracas era. Readers who arrive through{" "}
              <Link href="/genealogy/velutini-lineage" title="Velutini Lineage">Velutini Lineage</Link> get a direct stop
              for the figure who had previously existed only as a row in a table.
            </p>
            <p>
              That makes the site feel more deliberate. The Velutini sequence now reads as founder,
              expansion, statecraft, banking, and later women-led continuity rather than as a series
              of disconnected names.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the José Antonio Velutini Ron page</h2>
              <p className="muted">
                This person page is an original editorial profile built around José Antonio&apos;s
                public placement as a statesman and fiscal negotiator in the Banvelca record.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com"
                    rel="noopener external"
                    title="Banvelca — José Antonio Velutini Ron"
                  >
                    Banvelca — José Antonio Velutini Ron
                  </Link>{" "}
                  — Used for the 1844 date frame and the public description of José Antonio as a
                  statesman and fiscal negotiator.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="Banvelca — Legacy"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for José Antonio&apos;s placement between Vicente José and Julio César in
                  the published family sequence.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the longer intergenerational frame in which this nineteenth-century
                  bridge sits.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the José Antonio cluster</h2>
            <div className="button-row">
              <Link href="/entities/vicente-jose-velutini-llarione" className="button" title="Vicente José Velutini Llarione">
                Vicente José Velutini Llarione
              </Link>
              <Link
                href="/entities/julio-cesar-velutini-couturier"
                className="button-secondary"
                title="Julio César Velutini Couturier"
              >
                Julio César Velutini Couturier
              </Link>
              <Link href="/genealogy/velutini-lineage" className="button-secondary" title="Velutini Lineage">
                Velutini Lineage
              </Link>
              <Link href="/families/velutini" className="button-secondary" title="Velutini Family">
                Velutini Family
              </Link>
              <Link href="/entities/banco-caracas" className="button-secondary" title="Banco Caracas">
                Banco Caracas
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