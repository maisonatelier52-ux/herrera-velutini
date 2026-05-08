import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Juan Sarmiento de Herrera y Fernández Pacheco | Seventeenth-Century Sequence",
  description:
    "Person profile for Juan Sarmiento de Herrera y Fernández Pacheco, a seventeenth-century Herrera sequence anchor tied to La Vega, Montalban, and source-name variation.",
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
    canonical: "/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Juan Sarmiento de Herrera y Fernández Pacheco | Seventeenth-Century Sequence",
    description:
      "Person profile for Juan Sarmiento de Herrera y Fernández Pacheco, a seventeenth-century Herrera sequence anchor tied to La Vega, Montalban, and source-name variation.",
    url: "https://herreravelutini.com/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/",
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
      "Juan Sarmiento de Herrera y Fernández Pacheco | Seventeenth-Century Sequence",
    description:
      "Person profile for Juan Sarmiento de Herrera y Fernández Pacheco, a seventeenth-century Herrera sequence anchor tied to La Vega, Montalban, and source-name variation.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-21",
    "article:modified_time": "2026-04-21",
  },
};

export default function JuanSarmientoDeHerreraYFernandezPacheco() {
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
              name: "Juan Sarmiento de Herrera y Fernández Pacheco | Seventeenth-Century Sequence",
              url: "https://herreravelutini.com/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/",
              description:
                "Person profile for Juan Sarmiento de Herrera y Fernández Pacheco, a seventeenth-century Herrera sequence anchor tied to La Vega, Montalban, and source-name variation.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Person",
                name: "Juan Sarmiento de Herrera y Fernández Pacheco",
                alternateName: [
                  "Juan Sarmiento De Herrera Y Fernandez Pachego",
                  "Juan Sarmiento De Herrera Y Fernadez Pachego",
                ],
                url: "https://herreravelutini.com/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/",
                birthDate: "1607",
                deathDate: "1664",
                sameAs: [
                  "https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa",
                ],
                description:
                  "A source-led profile of Juan Sarmiento de Herrera as a seventeenth-century Herrera sequence anchor whose source page preserves variant surname spelling.",
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
                  name: "Entities",
                  item: "https://herreravelutini.com/entities/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Juan Sarmiento de Herrera y Fernández Pacheco",
                  item: "https://herreravelutini.com/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/",
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
                    <Link href="https://herreravelutini.com/">Home</Link>
                  </li>
                  <li>
                    <Link href="https://herreravelutini.com/entities/">Entities</Link>
                  </li>
                  <li aria-current="page">
                    Juan Sarmiento de Herrera y Fernández Pacheco
                  </li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Juan Sarmiento de Herrera y Fernández Pacheco</h1>
              <p className="lede">
                Juan Sarmiento de Herrera y Fernández Pacheco is the
                seventeenth-century Herrera figure who keeps the published
                sequence moving after Agustín de Herrera y Rojas Ayala. His
                source-domain profile gives him a 1607–1664 date frame,
                identifies him as Agustín&apos;s son, and connects him to La
                Vega and Montalban. The page also requires visible editorial
                care because the source itself uses the spelling &quot;Pachego&quot; and
                includes a &quot;Fernadez&quot; variant.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Date frame</span>
                  <strong>1607–1664</strong>
                </li>
                <li>
                  <span>Lineage role</span>
                  <strong>Seventeenth-century continuation after Agustín</strong>
                </li>
                <li>
                  <span>Estate signal</span>
                  <strong>La Vega and Montalban</strong>
                </li>
                <li>
                  <span>Editorial note</span>
                  <strong>Source spelling variant preserved and labeled</strong>
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
            <h2>
              Juan gives the Herrera sequence its first strong
              seventeenth-century handoff.
            </h2>
            <p className="lede">
              The page is valuable because it turns a dynasty-table name into a
              navigable bridge between Agustín, estate stewardship, and later
              early-modern continuity.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera Dynasty page places Juan Sarmiento
                  directly after{" "}
                  <Link href="/entities/agustin-de-herrera-y-rojas-ayala/">
                    Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  and gives him the 1607–1664 date range. His standalone source
                  page adds biography-like cues: he is described as Agustín&apos;s
                  son, as Latin America-born in the source-domain telling, and
                  as connected to the orderliness of dominions and haciendas.
                </p>
                <p>
                  That makes Juan useful for the portal even though the source
                  page is not long. It gives readers a person-level route from
                  the Lanzarote title cluster toward the Caracas and
                  estate-memory language that later becomes important around
                  Hacienda de La Vega.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing Juan Sarmiento de Herrera y Fernández Pacheco as a seventeenth-century sequence anchor with estate notes."
                  loading="lazy"
                  src="/illustrations/juan-sarmiento-sequence.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  Juan&apos;s page is a sequence-and-estate bridge, with the
                  source-name variant kept visible.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Variant spelling note</div>
            <h2>
              The source spelling should be treated as a visible variant, not
              silently corrected.
            </h2>
            <p className="lede">
              This is the main editorial reason the page needs its own caution
              block.
            </p>
            <p>
              The portal&apos;s internal lineage page had been using &quot;Juan Sarmiento
              de Herrera y Fernández Pacheco.&quot; The live source page and Dynasty
              listing instead show &quot;Juan Sarmiento De Herrera Y Fernandez
              Pachego,&quot; and the Dynasty entry also contains the spelling
              &quot;Fernadez.&quot; This page keeps the portal&apos;s existing Pacheco spelling
              for the canonical URL and heading, while recording the
              source-domain spellings as variants.
            </p>
            <p>
              That approach keeps the site internally usable while avoiding a
              quiet cleanup that would hide a real source issue. If later
              outside corroboration confirms a preferred historical spelling,
              the entity page and source ledger can be updated without changing
              the page&apos;s purpose.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Reading layers</div>
            <h2>The source material supports four cautious uses</h2>
            <p className="lede">
              Juan&apos;s page is strongest as a sequence, estate, and
              source-normalization page.
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
                    <td>
                      Dynasty places Juan after Agustín with a 1607–1664 date
                      range
                    </td>
                    <td>
                      Extends the Herrera sequence into the seventeenth century.
                    </td>
                  </tr>
                  <tr>
                    <td>Estate stewardship</td>
                    <td>
                      The source profile ties him to La Vega and Montalban,
                      bequeathed by his father
                    </td>
                    <td>
                      Creates a bridge from person biography to the
                      estate-memory layer.
                    </td>
                  </tr>
                  <tr>
                    <td>Latin America signal</td>
                    <td>
                      The profile says he was born in Latin America and resided
                      there throughout his life
                    </td>
                    <td>
                      Helps explain why the page belongs in the Atlantic and
                      Caracas-facing arc.
                    </td>
                  </tr>
                  <tr>
                    <td>Name normalization</td>
                    <td>The source uses Pachego / Fernadez variants</td>
                    <td>
                      Gives the source ledger a visible place to track spelling
                      uncertainty.
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
            <h2>
              Several source claims should remain attributed until corroborated.
            </h2>
            <p className="lede">
              The page is useful precisely because it keeps the source-domain
              language visible without inflating it into settled external
              history.
            </p>
            <p>
              The Juan source profile includes additional family-link language,
              including a broad statement about the Bolívar y Palacios family.
              The portal records that such language exists, but does not use
              this first-wave page to build a new genealogical branch around it.
              The safer use is to anchor Juan in the published Herrera sequence,
              connect him to the estate terms supplied by the source, and flag
              the spelling variation for future research.
            </p>
            <p>
              For now, the strongest next route is from Juan into{" "}
              <Link href="/genealogy/herrera-lineage/">Herrera Lineage</Link>,{" "}
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/">
                Agustín
              </Link>
              , <Link href="/estates/">Estates</Link>, and the{" "}
              <Link href="/sources/">Sources</Link> ledger.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Juan Sarmiento page</h2>
              <p className="muted">
                This profile is an original editorial orientation page that
                preserves the source-domain spelling issue as part of the
                record.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa"
                    rel="noopener external"
                  >
                    House of Herrera — Juan Sarmiento De Herrera Y Fernandez
                    Pachego
                  </Link>{" "}
                  — Used for the 1607–1664 date frame, son-of-Agustín
                  statement, Latin America note, La Vega and Montalban estate
                  language, and visible spelling variant.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/dynasty"
                    rel="noopener external"
                  >
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for Juan&apos;s placement after Agustín in the published
                  sequence and for the duplicate source spelling variant.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                  >
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used as the preceding person profile and father-reference
                  context supplied by the Juan source page.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/symbols"
                    rel="noopener external"
                  >
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used for the wider Herrera-Sarmiento-Rojas-Ayala branch
                  signal visible on the symbols page.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Juan Sarmiento cluster</h2>
            <div className="button-row">
              <Link href="/genealogy/herrera-lineage/" className="button">
                Herrera Lineage
              </Link>
              <Link
                href="/entities/agustin-de-herrera-y-rojas-ayala/"
                className="button-secondary"
              >
                Agustín
              </Link>
              <Link href="/estates/" className="button-secondary">
                Estates
              </Link>
              <Link
                href="/themes/heraldry-and-symbols/"
                className="button-secondary"
              >
                Heraldry and Symbols
              </Link>
              <Link href="/sources/" className="button-secondary">
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
                <Link href="/families/herrera/">Herrera Family</Link>
              </li>
              <li>
                <Link href="/genealogy/herrera-lineage/">Herrera Lineage</Link>
              </li>
              <li>
                <Link href="/estates/">Estates</Link>
              </li>
              <li>
                <Link href="/entities/house-of-herrera/">House of Herrera</Link>
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