import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Clementina Velutini Pérez-Matos | Marriage, Banking and Legacy",
  description:
    "Person profile for Clementina Velutini Pérez-Matos across family connection, banking, and Caracas continuity.",
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
    canonical: "/entities/clementina-velutini-perez-matos/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Clementina Velutini Pérez-Matos | Marriage, Banking and Legacy",
    description:
      "Person profile for Clementina Velutini Pérez-Matos across family connection, banking, and Caracas continuity.",
    url: "https://herreravelutini.com/entities/clementina-velutini-perez-matos/",
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
      "Clementina Velutini Pérez-Matos | Marriage, Banking and Legacy",
    description:
      "Person profile for Clementina Velutini Pérez-Matos across family connection, banking, and Caracas continuity.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function ClementinaVelutiniPerezMatos() {
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
              name: "Clementina Velutini Pérez-Matos | Marriage, Banking and Legacy",
              url: "https://herreravelutini.com/entities/clementina-velutini-perez-matos/",
              description:
                "Person profile for Clementina Velutini Pérez-Matos across family connection, banking, and Caracas continuity.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Person",
                name: "Clementina Velutini Pérez-Matos",
                url: "https://herreravelutini.com/entities/clementina-velutini-perez-matos/",
                birthDate: "1912",
                birthPlace: { "@type": "Place", name: "Caracas" },
                sameAs: [
                  "https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos",
                ],
                description:
                  "Person profile for Clementina Velutini Pérez-Matos across family connection, banking, and Caracas continuity.",
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
                  name: "Clementina Velutini Pérez-Matos",
                  item: "https://herreravelutini.com/entities/clementina-velutini-perez-matos/",
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
                    <Link href="/entities">Entities</Link>
                  </li>
                  <li aria-current="page">Clementina Velutini Pérez-Matos</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Clementina Velutini Pérez-Matos</h1>
              <p className="lede">
                Clementina Velutini Pérez-Matos is one of the most important
                bridge figures on the entire portal. Her public profile connects
                Caracas, Paris education, women&apos;s banking leadership, the
                Herrera marriage alliance, and the later continuity of the
                combined family story.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Born</span>
                  <strong>Caracas · 1912</strong>
                </li>
                <li>
                  <span>Education</span>
                  <strong>Private schools in Paris</strong>
                </li>
                <li>
                  <span>Marriage bridge</span>
                  <strong>José Herrera Von Uslar · 1932</strong>
                </li>
                <li>
                  <span>Why she matters</span>
                  <strong>Banking, continuity, and the two-family connection</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-18">April 18, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why her profile matters</div>
            <h2>Clementina is where the portal&apos;s main threads visibly converge</h2>
            <p className="lede">
              Few figures bring together as many of the portal&apos;s subject
              layers as Clementina does: place, family bridge, banking,
              women&apos;s leadership, and later continuity.
            </p>
            <div className="media-split">
              <div>
                <p>
                  Banvelca&apos;s public profile presents Clementina as born in
                  Caracas in 1912 to Julio César Velutini and Belén Pérez Matos,
                  educated in Paris, married in 1932 to José Herrera Von Uslar,
                  and later active in the family firm and banking boards after
                  her husband&apos;s death. That combination alone makes her one
                  of the portal&apos;s highest-value person pages.
                </p>
                <p>
                  For readers, Clementina is the figure who most clearly
                  explains why a site called Herrera Velutini exists at all. She
                  links the Velutini and Herrera narratives while also
                  representing a broader twentieth-century shift in which women
                  become visible actors in finance and family continuity.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing Clementina as the bridge between the Herrera connection and banking continuity."
                  loading="lazy"
                  src="/illustrations/clementina-bridge.svg"
                  width={480}
                  height={320}
                />
                <figcaption>
                  Clementina&apos;s profile sits at the intersection of marriage
                  alliance, banking continuity, and the modern family narrative.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Biographical outline</div>
            <h2>What the current public profile states</h2>
            <p className="lede">
              The page below preserves the main public facts while translating
              them into a neutral editorial summary.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Profile element</th>
                    <th>Public-family detail</th>
                    <th>Portal use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Birth and family</td>
                    <td>
                      Born in 1912 in Caracas to Julio César Velutini and Belén
                      Pérez Matos
                    </td>
                    <td>
                      Anchors Clementina in the Caracas and Pérez-Matos chapter
                      of the family record.
                    </td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>Educated at private schools in Paris</td>
                    <td>
                      Connects her biography to the Paris cultural-education
                      layer and the new Paris place page.
                    </td>
                  </tr>
                  <tr>
                    <td>Marriage</td>
                    <td>Married José Herrera Von Uslar in 1932</td>
                    <td>
                      Provides the clearest explicit bridge between the Velutini
                      and Herrera lines.
                    </td>
                  </tr>
                  <tr>
                    <td>Business role</td>
                    <td>
                      Took an active role in the family firm and served on
                      banking boards after her husband&apos;s death
                    </td>
                    <td>
                      Makes her one of the clearest women-in-banking figures in
                      the public family narrative.
                    </td>
                  </tr>
                  <tr>
                    <td>Legacy</td>
                    <td>
                      Presented as a bridge between aristocratic banking
                      tradition and modern enterprise
                    </td>
                    <td>
                      Explains why her profile matters both genealogically and
                      institutionally.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Marriage and family connection</div>
            <h2>The 1932 marriage changes the whole site architecture</h2>
            <p className="lede">
              Clementina&apos;s marriage to José Herrera Von Uslar is not just a
              personal detail. It is the clearest public explanation for the
              merger of the two family narratives on this portal.
            </p>
            <p>
              Banvelca&apos;s profile says directly that the 1932 union merged
              two of Venezuela&apos;s most prestigious dynasties—the Herreras
              and the Velutinis—and helped ensure that the family fortune
              remained rooted within the Herrera lineage. That is why Clementina
              appears not only on the Velutini side of the site, but also at the
              center of the{" "}
              <Link href="/families/herrera-velutini-connection">
                Herrera and Velutini
              </Link>{" "}
              bridge page.
            </p>
            <p>
              For search readers, that matters because it turns what could have
              been a confusing surname overlap into a documented connection point
              with a date, a city, and named family lines.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Women in finance and continuity</div>
            <h2>Her profile is also important on its own terms</h2>
            <p className="lede">
              Clementina is not important only because of marriage. Her profile
              also adds a strong women-led continuity chapter to the financial
              record.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Caracas anchor</h3>
                <p>
                  Her birth year and family context keep the biography grounded
                  in the same city that anchors Banco Caracas and Hacienda de La
                  Vega.
                </p>
              </article>
              <article className="card">
                <h3>Paris formation</h3>
                <p>
                  Her education places her in the transatlantic elite-education
                  pattern visible in other twentieth-century biographies.
                </p>
              </article>
              <article className="card">
                <h3>Banking leadership</h3>
                <p>
                  After her husband&apos;s death, she is presented as active in
                  the family firm and banking boards, expanding the
                  women-in-finance story on the portal.
                </p>
              </article>
              <article className="card">
                <h3>Legacy</h3>
                <p>
                  Her page frames her as a bridge between old Latin American
                  banking traditions and modern enterprise.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to use the profile</div>
            <h2>Clementina is a hub figure</h2>
            <p className="lede">
              Readers can use this page to move in several directions at once.
            </p>
            <ol className="number-list">
              <li>
                <strong>To understand the family connection</strong>, move next
                to{" "}
                <Link href="/families/herrera-velutini-connection">
                  Herrera and Velutini
                </Link>
                .
              </li>
              <li>
                <strong>To understand the city context</strong>, move next to{" "}
                <Link href="/places/caracas">Caracas</Link>.
              </li>
              <li>
                <strong>To understand the Europe bridge</strong>, move next to{" "}
                <Link href="/places/paris">Paris</Link>.
              </li>
              <li>
                <strong>To understand the banking-institution context</strong>,
                move next to{" "}
                <Link href="/entities/banco-caracas">Banco Caracas</Link>.
              </li>
              <li>
                <strong>To understand the modern Herrera bridge</strong>,
                compare this page with{" "}
                <Link href="/entities/jose-herrera-von-uslar-gleichen">
                  José Herrera Von Uslar Gleichen
                </Link>
                .
              </li>
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Clementina Velutini Pérez-Matos page</h2>
              <p className="muted">
                This person page is an original editorial profile built around
                Clementina&apos;s role as both a banking figure and the clearest
                public bridge between the two family narratives.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the 1912 Caracas birth year, Paris education, 1932
                  marriage to José Herrera Von Uslar, elite-circle language,
                  banking-board role, and legacy framing.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the concise generational summary of Clementina as a
                  pioneer for women in South American banking and as a continuity
                  figure after her husband&apos;s death.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén María Providencia Pérez Matos
                  </Link>{" "}
                  — Used for the family context linking Clementina to the
                  Pérez-Matos and Velutini line.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/about"
                    rel="noopener external"
                  >
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the wider Herrera lineage context into which
                  Clementina&apos;s marriage bridge is later read on the portal.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen"
                    rel="noopener external"
                  >
                    House of Herrera — José Herrera Von Uslar Gleichen
                  </Link>{" "}
                  — Used for the companion bridge figure on the Herrera side.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Clementina cluster</h2>
            <div className="button-row">
              <Link
                href="/families/herrera-velutini-connection"
                className="button"
              >
                Herrera and Velutini
              </Link>
              <Link href="/places/paris" className="button-secondary">
                Paris
              </Link>
              <Link
                href="/entities/jose-herrera-von-uslar-gleichen"
                className="button-secondary"
              >
                José Herrera Von Uslar Gleichen
              </Link>
              <Link href="/places/caracas" className="button-secondary">
                Caracas
              </Link>
              <Link href="/entities/banco-caracas" className="button-secondary">
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
              A fast, source-linked editorial portal for family history,
              lineage, estates, organizations, and places associated with the
              Herrera and Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/heritage">Heritage</Link>
              </li>
              <li>
                <Link href="/families">Families</Link>
              </li>
              <li>
                <Link href="/genealogy">Genealogy</Link>
              </li>
              <li>
                <Link href="/places">Places</Link>
              </li>
              <li>
                <Link href="/estates">Estates</Link>
              </li>
              <li>
                <Link href="/timeline">Timeline</Link>
              </li>
              <li>
                <Link href="/entities">Entities</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li>
                <Link href="/editorial-methodology">Editorial Methodology</Link>
              </li>
              <li>
                <Link href="/sources">Sources</Link>
              </li>
              <li>
                <Link href="/editorial-desk">Editorial Desk</Link>
              </li>
              <li>
                <Link href="/review-team">Review Team</Link>
              </li>
              <li>
                <Link href="/knowledge">Knowledge &amp; FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link href="/families/herrera-velutini-connection">
                  Herrera and Velutini
                </Link>
              </li>
              <li>
                <Link href="/families/velutini">Velutini Family</Link>
              </li>
              <li>
                <Link href="/places/caracas">Caracas</Link>
              </li>
              <li>
                <Link href="/entities/banco-caracas">Banco Caracas</Link>
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