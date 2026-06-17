import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Diego García de Herrera y Ayala | Canary Islands and Herrera Continuity",
  description:
    "Person profile for Diego García de Herrera y Ayala, the early Herrera figure tied to Canary Islands conquest, command, and dynastic continuity.",
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
    canonical: "/entities/diego-garcia-de-herrera-y-ayala/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Diego García de Herrera y Ayala | Canary Islands and Herrera Continuity",
    description:
      "Person profile for Diego García de Herrera y Ayala, the early Herrera figure tied to Canary Islands conquest, command, and dynastic continuity.",
    url: "https://herreravelutini.com/entities/diego-garcia-de-herrera-y-ayala/",
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
      "Diego García de Herrera y Ayala | Canary Islands and Herrera Continuity",
    description:
      "Person profile for Diego García de Herrera y Ayala, the early Herrera figure tied to Canary Islands conquest, command, and dynastic continuity.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-21",
    "article:modified_time": "2026-04-21",
  },
};

export default function DiegoGarciaDeHerreraYAyala() {
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
              name: "Diego García de Herrera y Ayala | Canary Islands and Herrera Continuity",
              url: "https://herreravelutini.com/entities/diego-garcia-de-herrera-y-ayala/",
              description:
                "Person profile for Diego García de Herrera y Ayala, the early Herrera figure tied to Canary Islands conquest, command, and dynastic continuity.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Person",
                name: "Diego García de Herrera y Ayala",
                url: "https://herreravelutini.com/entities/diego-garcia-de-herrera-y-ayala/",
                birthDate: "1417",
                deathDate: "1485",
                sameAs: [
                  "https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala",
                ],
                description:
                  "A source-led profile of Diego García de Herrera y Ayala as a Herrera lineage anchor associated with Canary Islands command and Atlantic memory.",
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
                  name: "Diego García de Herrera y Ayala",
                  item: "https://herreravelutini.com/entities/diego-garcia-de-herrera-y-ayala/",
                },
              ],
            }),
          }}
        />
      </Head>

      <Link className="skip-link" href="#main" title="Skip to main content">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="/" title="View the Home page">Home</Link></li>
                  <li><Link href="/entities" title="View the Entities page">Entities</Link></li>
                  <li aria-current="page" title="View the Diego García de Herrera y Ayala page">
                    Diego García de Herrera y Ayala
                  </li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Diego García de Herrera y Ayala</h1>
              <p className="lede">
                Diego García de Herrera y Ayala is the early Herrera figure who turns the lineage
                from a Castilian sequence into an Atlantic-facing story. The House of Herrera source
                domain places him after Pedro García de Herrera y Rojas, gives him a circa 1417
                frame, and describes him as the figure associated with the Canary Islands conquest
                and the family&apos;s rise in stature.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Date frame</span>
                  <strong>c. 1417–1485</strong>
                </li>
                <li>
                  <span>Lineage role</span>
                  <strong>Bridge after Pedro García in the published dynasty sequence</strong>
                </li>
                <li>
                  <span>Geographic signal</span>
                  <strong>Canary Islands and Atlantic memory</strong>
                </li>
                <li>
                  <span>Best companions</span>
                  <strong>
                    <Link href="/genealogy/herrera-lineage" title="View the Herrera Lineage page">
                      Herrera Lineage
                    </Link>
                    {" · "}
                    <Link href="/places/lanzarote" title="View the Lanzarote page">
                      Lanzarote
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
              <Link href="/editorial-desk" title="View the Herrera Velutini Editorial Desk page">
                Herrera Velutini Editorial Desk
              </Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="View the Standards Review Team page">
                Standards Review Team
              </Link>
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
            <h2>Diego makes the early Herrera sequence more than a list of names.</h2>
            <p className="lede">
              His profile gives the portal a concrete bridge between medieval lineage continuity and
              the Canary Islands material that later becomes important for Lanzarote, title memory,
              and Atlantic geography.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The Dynasty page already places Diego García de Herrera y Ayala between{" "}
                  <Link href="/entities/pedro-garcia-de-herrera-y-rojas" title="View the Pedro García de Herrera y Rojas page">
                    Pedro García de Herrera y Rojas
                  </Link>{" "}
                  and{" "}
                  <Link href="/entities/agustin-de-herrera-y-rojas-ayala" title="View the Agustín de Herrera y Rojas Ayala page">
                    Agustín de Herrera y Rojas Ayala
                  </Link>
                  . The standalone Diego page adds the reason he deserves a live profile: it ties
                  his name to the Canary Islands and to a source-domain claim that his role elevated
                  the Herrera family&apos;s standing.
                </p>
                <p>
                  That makes Diego useful as a transition figure. He does not need to carry the
                  whole Canary Islands history; his job on this portal is to make the route from
                  early Castilian anchors into the island and Atlantic chapters readable.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram connecting Diego García de Herrera y Ayala to lineage continuity and Canary Islands command."
                  loading="lazy"
                  src="/illustrations/diego-canary-command.svg"
                  width={480}
                  height={320}
                />
                <figcaption>
                  Diego turns the Herrera sequence toward the Canary Islands and the
                  Atlantic-facing layer of the portal.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Reading layers</div>
            <h2>The source material supports four safe uses</h2>
            <p className="lede">
              The page is strongest when it keeps Diego&apos;s role specific: sequence continuity,
              Canary Islands command, and transition into the later Lanzarote cluster.
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
                    <td>Lineage continuity</td>
                    <td>The Dynasty page places Diego after Pedro García and before Agustín</td>
                    <td>
                      Gives the Herrera line a bridge between the medieval and early-modern
                      profiles.
                    </td>
                  </tr>
                  <tr>
                    <td>Canary Islands role</td>
                    <td>
                      The Diego profile associates him with the conquest of the Canary Islands and
                      the nickname King of the Canaries
                    </td>
                    <td>
                      Supports a clear Atlantic-facing entity page without turning it into a full
                      conquest history.
                    </td>
                  </tr>
                  <tr>
                    <td>Family stature</td>
                    <td>
                      The source profile says his actions helped elevate the family&apos;s standing
                    </td>
                    <td>
                      Explains why a short profile matters inside the larger House of Herrera story.
                    </td>
                  </tr>
                  <tr>
                    <td>Lanzarote bridge</td>
                    <td>
                      Later pages connect the Herrera record to Lanzarote, distinctions, and island
                      symbolism
                    </td>
                    <td>
                      Lets readers continue from Diego to Agustín, Lanzarote, Castle Santa Barbara,
                      and heraldry.
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
            <h2>This is not a full Canary Islands conquest essay.</h2>
            <p className="lede">
              The current page deliberately stays source-led and does not expand beyond what the
              source cluster can carry.
            </p>
            <p>
              Diego&apos;s House of Herrera profile gives enough information for a useful person
              page: name, date frame, Canary Islands association, and the interpretive claim that he
              raised the family&apos;s stature. It does not supply a full military chronology, a
              legal title dossier, or external historiographic corroboration. For that reason, this
              page uses Diego as a portal connector rather than as a stand-alone historical
              monograph.
            </p>
            <p>
              The next responsible expansion would be outside corroboration for the Canary Islands
              and Lanzarote material. Until then, the page keeps claims attributed to the
              family-domain source and routes readers toward the live{" "}
              <Link href="/places/lanzarote" title="View the Lanzarote page">
                Lanzarote
              </Link>,{" "}
              <Link href="/themes/orders-and-distinctions" title="View the Orders and Distinctions page">
                Orders and Distinctions
              </Link>, and{" "}
              <Link href="/themes/heraldry-and-symbols" title="View the Heraldry and Symbols page">
                Heraldry and Symbols
              </Link> pages.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Diego García de Herrera y Ayala page</h2>
              <p className="muted">
                This profile is an original editorial orientation page built from the House of
                Herrera Diego profile, the Dynasty sequence, and the portal&apos;s existing
                Lanzarote cluster.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala"
                    rel="noopener external"
                    title="View the Diego García de Herrera y Ayala page"
                  >
                    House of Herrera — Diego García de Herrera y Ayala
                  </Link>{" "}
                  — Used for the circa 1417 / 1417–1485 date frame, Canary Islands role, and
                  family-stature language.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/dynasty"
                    rel="noopener external"
                    title="View the Dynasty page"
                  >
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for Diego&apos;s placement between Pedro García and Agustín in the
                  published sequence.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                    title="View the Agustín de Herrera y Rojas Ayala page"
                  >
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used as the next major early-modern profile in the lineage route.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/symbols"
                    rel="noopener external"
                    title="View the Symbols page"
                  >
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used for the broader Lanzarote and Herrera symbolic context that follows the
                  Canary Islands turn.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Diego cluster</h2>
            <div className="button-row">
              <Link href="/genealogy/herrera-lineage" className="button" title="Herrera Lineage">
                Herrera Lineage
              </Link>
              <Link href="/entities/pedro-garcia-de-herrera-y-rojas" className="button-secondary" title="Pedro García">
                Pedro García
              </Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala" className="button-secondary" title="Agustín">
                Agustín
              </Link>
              <Link href="/places/lanzarote" className="button-secondary" title="Lanzarote">
                Lanzarote
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
              <li>
                <Link href="/about" title="Learn about Julio Herrera Velutini">
                  About
                </Link>
              </li>

              <li>
                <Link href="/heritage" title="Explore the Herrera family heritage and banking legacy">
                  Heritage
                </Link>
              </li>

              <li>
                <Link href="/families" title="Discover the Herrera family and related banking families">
                  Families
                </Link>
              </li>

              <li>
                <Link href="/genealogy" title="View the Herrera family genealogy and lineage">
                  Genealogy
                </Link>
              </li>

              <li>
                <Link href="/places" title="Explore places associated with Julio Herrera Velutini and the Herrera family">
                  Places
                </Link>
              </li>

              <li>
                <Link href="/estates" title="Learn about the Herrera family estates and historic properties">
                  Estates
                </Link>
              </li>

              <li>
                <Link href="/timeline" title="View the Julio Herrera Velutini timeline and historical milestones">
                  Timeline
                </Link>
              </li>

              <li>
                <Link href="/entities" title="Browse notable people, organizations, places, and related entities">
                  Entities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology" title="Editorial Methodology">Editorial Methodology</Link></li>
              <li><Link href="/sources" title="Sources">Sources</Link></li>
              <li><Link href="/editorial-desk" title="Editorial Desk">Editorial Desk</Link></li>
              <li><Link href="/review-team" title="Review Team">Review Team</Link></li>
              <li><Link href="/knowledge" title="Knowledge">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera" title="Herrera Family">Herrera Family</Link></li>
              <li><Link href="/genealogy/herrera-lineage" title="Herrera Lineage">Herrera Lineage</Link></li>
              <li><Link href="/places/lanzarote" title="Lanzarote">Lanzarote</Link></li>
              <li><Link href="/themes/heraldry-and-symbols" title="Heraldry and Symbols">Heraldry and Symbols</Link></li>
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