import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Agustín de Herrera y Rojas Ayala | Lanzarote, Titles and Atlantic Memory",
  description:
    "Person profile for Agustín de Herrera y Rojas Ayala across Lanzarote, title memory, Royal Council language, and the early-modern Herrera sequence.",
  alternates: {
    canonical:
      "https://herreravelutini.com/entities/agustin-de-herrera-y-rojas-ayala/",
  },
  openGraph: {
    type: "website",
    title:
      "Agustín de Herrera y Rojas Ayala | Lanzarote, Titles and Atlantic Memory",
    description:
      "Person profile for Agustín de Herrera y Rojas Ayala across Lanzarote, title memory, Royal Council language, and the early-modern Herrera sequence.",
    url: "https://herreravelutini.com/entities/agustin-de-herrera-y-rojas-ayala/",
    siteName: "Herrera Velutini",
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
      "Agustín de Herrera y Rojas Ayala | Lanzarote, Titles and Atlantic Memory",
    description:
      "Person profile for Agustín de Herrera y Rojas Ayala across Lanzarote, title memory, Royal Council language, and the early-modern Herrera sequence.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Page() {
  return (
    <>
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
              "Herrera Velutini Editorial Portal"
            ],
            legalName: "Herrera Velutini",
            url: "https://herreravelutini.com/",
            logo: {
              "@type": "ImageObject",
              url: "https://herreravelutini.com/brand-wordmark.svg"
            },
            description:
              "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "editorial inquiries",
                url: "https://herreravelutini.com/about/#contact",
                availableLanguage: ["English", "Spanish"]
              }
            ],
            publishingPrinciples:
              "https://herreravelutini.com/editorial-methodology/",
            areaServed: [
              "Europe",
              "North America",
              "Latin America",
              "Middle East"
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
              "source-led editorial publishing"
            ],
            subjectOf: [
              "https://www.houseofherrera.com/",
              "https://www.banvelca.com/"
            ]
          })
        }}
      />

      {/* Website */}
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
            publisher: {
              "@id": "https://herreravelutini.com/#organization"
            }
          })
        }}
      />

      {/* Profile Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name:
              "Agustín de Herrera y Rojas Ayala | Lanzarote, Titles and Atlantic Memory",
            url:
              "https://herreravelutini.com/entities/agustin-de-herrera-y-rojas-ayala/",
            description:
              "Person profile for Agustín de Herrera y Rojas Ayala across Lanzarote, title memory, Royal Council language, and the early-modern Herrera sequence.",
            isPartOf: {
              "@id": "https://herreravelutini.com/#website"
            },
            mainEntity: {
              "@type": "Person",
              name: "Agustín de Herrera y Rojas Ayala",
              url:
                "https://herreravelutini.com/entities/agustin-de-herrera-y-rojas-ayala/",
              sameAs: [
                "https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
              ],
              description:
                "A source-led profile of Agustín de Herrera y Rojas Ayala as an early-modern Herrera figure associated with Lanzarote, title memory, and Atlantic expansion."
            },
            author: {
              "@type": "Organization",
              "@id": "https://herreravelutini.com/editorial-desk/#org",
              name: "Herrera Velutini Editorial Desk"
            },
            editor: {
              "@type": "Organization",
              "@id": "https://herreravelutini.com/review-team/#org",
              name: "Standards Review Team"
            },
            publisher: {
              "@id": "https://herreravelutini.com/#organization"
            }
          })
        }}
      />

      {/* Breadcrumb */}
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
                item: "https://herreravelutini.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Entities",
                item: "https://herreravelutini.com/entities/"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Agustín de Herrera y Rojas Ayala",
                item:
                  "https://herreravelutini.com/entities/agustin-de-herrera-y-rojas-ayala/"
              }
            ]
          })
        }}
      />

      <Link className="skip-link" href="#main" title="Skip to content">
        Skip to content
      </Link>

      <main id="main">
        {/* HERO */}
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav className="breadcrumbs">
                <ol>
                  <li>
                    <Link href="/" title="View the Home page">Home</Link>
                  </li>

                  <li>
                    <Link href="/entities" title="View the Entities page">Entities</Link>
                  </li>

                  <li>Agustín de Herrera y Rojas Ayala</li>
                </ol>
              </nav>

              <div className="eyebrow">Person profile</div>

              <h1>Agustín de Herrera y Rojas Ayala</h1>

              <p className="lede">
                Agustín de Herrera y Rojas Ayala is the early-modern Herrera
                figure who gives the portal its strongest bridge between the
                lineage sequence, Lanzarote, title memory, and Atlantic expansion.
                His source-domain page links him to the Lanzarote title tradition,
                royal service, and Spanish Crown activity in Latin America, while
                the Orders page adds a separate title chronology that the portal
                preserves as a source note.
              </p>
            </div>

            <aside className="facts-box">
              <ul>
                <li>
                  <span>Chronology anchor</span>

                  <strong>
                    Count in 1567; marquis grant in 1584
                  </strong>
                </li>

                <li>
                  <span>Place anchor</span>

                  <strong>
                    <Link href="/places/lanzarote" title="View the Lanzarote page">
                      Lanzarote
                    </Link>
                  </strong>
                </li>

                <li>
                  <span>Theme anchors</span>

                  <strong>
                    <Link href="/themes/orders-and-distinctions" title="View the Orders and Distinctions page">
                      Orders and Distinctions
                    </Link>{" "}
                    ·{" "}
                    <Link href="/themes/heraldry-and-symbols" title="View the Heraldry and Symbols page">
                      Heraldry
                    </Link>
                  </strong>
                </li>

                <li>
                  <span>Editorial note</span>

                  <strong>
                    1548 and the family-domain life frame remain unresolved
                  </strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* BYLINE */}
        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk" title="View the Editorial Desk page">
                Herrera Velutini Editorial Desk
              </Link>
            </div>

            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="View the Review Team page">
                Standards Review Team
              </Link>
            </div>

            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>

            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-24">April 24, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why the profile matters</div>

            <h2>
              Agustín is the Herrera figure where lineage, title, and island
              geography converge.
            </h2>

            <p className="lede">
              The page gives the early-modern Herrera chapter a stronger
              person-level anchor than the lineage table alone can provide.
            </p>

            <div className="media-split">
              <div>
                <p>
                  The House of Herrera dynasty page places Agustín de Herrera y
                  Rojas Ayala in the published sequence, and his standalone
                  profile associates him with the Lanzarote title tradition,
                  service to the Kingdom, Spanish Crown expansion into Latin
                  America, and the Royal Council. Archival records catalogued in
                  Teguise strengthen that picture by supporting a Count of
                  Lanzarote grant in 1567, a corroboration step in 1569, and a
                  marquis grant with data crónica of May 1, 1584.
                </p>

                <p>
                  For the portal, Agustín matters because he connects multiple
                  sections that already exist:{" "}
                  <Link href="/places/lanzarote" title="View the Lanzarote page">
                    Lanzarote
                  </Link>
                  ,{" "}
                  <Link href="/themes/orders-and-distinctions" title="View the Orders and Distinctions page">
                    Orders and Distinctions
                  </Link>
                  ,{" "}
                  <Link href="/themes/heraldry-and-symbols" title="View the Heraldry and Symbols page">
                    Heraldry and Symbols
                  </Link>
                  ,{" "}
                  <Link href="/genealogy/herrera-lineage" title="View the Herrera Lineage page">
                    Herrera Lineage
                  </Link>
                  , and the estate layer around Castle Santa Barbara.
                </p>
              </div>

              <figure className="feature-figure">
                <Image
                  src="/illustrations/agustin-lanzarote-title.svg"
                  alt="Diagram connecting Agustín de Herrera y Rojas Ayala with Lanzarote, title memory, and Atlantic expansion."
                  width={800}
                  height={500}
                  loading="lazy"
                />

                <figcaption>
                  Agustín is one of the cleanest bridges between person biography,
                  Lanzarote, and titled memory.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Interpretive layers</div>

            <h2>
              The current public material gives him four durable functions
            </h2>

            <p className="lede">
              Those functions make Agustín a more substantial entity page than a
              simple date-and-name profile.
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
                      Placed in the Dynasty sequence and reinforced by archival
                      title records in Teguise
                    </td>

                    <td>
                      Extends the Herrera line from medieval Castile into the
                      early-modern period without forcing an unstable birth-death
                      frame.
                    </td>
                  </tr>

                  <tr>
                    <td>Lanzarote title memory</td>

                    <td>
                      The profile and Orders page connect Agustín to Lanzarote
                      title language, while archival entries support the 1567
                      count title and 1584 marquis grant
                    </td>

                    <td>
                      Links a person page to the island, symbols, and distinctions
                      clusters with firmer chronology markers.
                    </td>
                  </tr>

                  <tr>
                    <td>Royal service</td>

                    <td>
                      The profile frames the title tradition as a reward for
                      service to the Kingdom and mentions Royal Council trust
                    </td>

                    <td>
                      Shows how the family story moves from lineage into public
                      responsibility and court context.
                    </td>
                  </tr>

                  <tr>
                    <td>Atlantic expansion</td>

                    <td>
                      The profile says Agustín was commissioned by King Philip for
                      territories in Latin America
                    </td>

                    <td>
                      Creates a bridge from the Canary and Spanish frame toward
                      the later Latin American record.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Source caution</div>

            <h2>
              The Lanzarote title chronology should be read carefully.
            </h2>

            <p className="lede">
              The source pages are useful, but they do not present a perfectly
              frictionless title chronology.
            </p>

            <p>
              The family-domain Agustín profile uses a 1569–1632 life frame and
              introduces 1548 / 1567 title language. Official archival entries in
              Teguise, however, support a Count of Lanzarote grant in 1567, a
              corroboration in 1569, and a Marqués de Lanzarote grant with data
              crónica of May 1, 1584.
            </p>

            <p>
              That means the strongest externally corroborated sequence now
              available is count title in 1567 followed by marquis grant in 1584.
              The portal therefore no longer treats 1548, 1567, and 1584 as
              equally grounded signals: it uses 1567 and 1584 as title markers
              and leaves 1548 plus the family-domain life frame flagged as
              unresolved.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">
              How the page changes the site
            </div>

            <h2>
              Agustín makes the Herrera side more balanced against the Velutini
              entity spine.
            </h2>

            <p className="lede">
              The Velutini side now has founder, expansion, statecraft, banking,
              and matriarchal continuity pages. Agustín helps the Herrera side
              gain comparable depth.
            </p>

            <p>
              With Hernán now serving as the sparse but essential Ampudia opening
              anchor, Agustín provides the next major Herrera-side expansion
              point. He connects early lineage to the Canary Islands, titled
              distinction, Crown service, and Latin American direction. That
              gives the Herrera cluster a stronger middle layer between{" "}
              <Link href="/entities/pedro-garcia-de-herrera-y-rojas" title="View the Pedro García de Herrera y Rojas page">
                Pedro García de Herrera y Rojas
              </Link>{" "}
              and{" "}
              <Link href="/entities/jose-herrera-von-uslar-gleichen" title="View the José Herrera Von Uslar Gleichen page">
                José Herrera Von Uslar Gleichen
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>

              <h2>
                Source basis for the Agustín de Herrera y Rojas Ayala page
              </h2>

              <p className="muted">
                This person page is an original editorial profile that preserves
                source-domain nuance rather than smoothing over conflicting
                title-date cues.
              </p>

              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                    title="View the Agustín de Herrera y Rojas Ayala page"
                    target="_blank"
                  >
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used for descent framing, the source-domain 1548 / 1567 title
                  language, King Philip / Spanish Crown commission, Royal Council
                  reference, and Latin America expansion note.
                </li>

                <li>
                  <Link
                    href="https://www.houseofherrera.com/dynasty"
                    rel="noopener external"
                    title="View the Dynasty page"
                    target="_blank"
                  >
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for Agustín&apos;s placement inside the published
                  Herrera sequence.
                </li>

                <li>
                  <Link
                    href="https://www.houseofherrera.com/orders-and-distinctions"
                    rel="noopener external"
                    title="View the Orders and Distinctions page"
                    target="_blank"
                  >
                    House of Herrera — Orders and Distinctions
                  </Link>{" "}
                  — Used for the separate Marquisate of Lanzarote entry and the
                  May 1, 1584 creation note.
                </li>

                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                    title="View the Family Estates page"
                    target="_blank"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the Lanzarote and Castle Santa Barbara place context.
                </li>

                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/332/"
                    rel="noopener external"
                    title="View the Archivo Histórico Municipal de Teguise"
                    target="_blank"
                  >
                    Archivo Histórico Municipal de Teguise — Título de Conde de
                    Lanzarote para Agustín de Herrera y Rojas
                  </Link>{" "}
                  — Used as official archival corroboration for the 1567 Count of
                  Lanzarote title grant.
                </li>

                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/334/"
                    rel="noopener external"
                    title="View the Archivo Histórico Municipal de Teguise"
                    target="_blank"
                  >
                    Archivo Histórico Municipal de Teguise — Corroboración del
                    título de Conde de Lanzarote
                  </Link>{" "}
                  — Used as official archival corroboration for the 1569
                  confirmation of the count title.
                </li>

                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/340/"
                    rel="noopener external"
                    title="View the Archivo Histórico Municipal de Teguise"
                    target="_blank"
                  >
                    Archivo Histórico Municipal de Teguise — Concesión del título
                    de Marqués de Lanzarote a Agustín de Herrera y Rojas
                  </Link>{" "}
                  — Used as official archival corroboration for the Marqués de
                  Lanzarote grant with data crónica of May 1, 1584.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* RELATED CTA */}
        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>

            <h2>Continue through the Agustín cluster</h2>

            <div className="button-row">
              <Link href="/places/lanzarote" className="button" title="View the Lanzarote page">
                Lanzarote
              </Link>

              <Link
                href="/themes/orders-and-distinctions"
                className="button-secondary"
                title="View the Orders and Distinctions page"
              >
                Orders and Distinctions
              </Link>

              <Link
                href="/themes/heraldry-and-symbols"
                className="button-secondary"
                title="View the Heraldry and Symbols page"
              >
                Heraldry and Symbols
              </Link>

              <Link
                href="/genealogy/herrera-lineage"
                className="button-secondary"
                title="View the Herrera Lineage page"
              >
                Herrera Lineage
              </Link>

              <Link
                href="/entities/house-of-herrera"
                className="button-secondary"
                title="View the House of Herrera page"
              >
                House of Herrera
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
            <div>
                <div className="footer-brand">Herrera Velutini</div>
                <p className="muted">A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.</p>
            </div>
            <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about" title="View the About page">About</Link></li>
              <li><Link href="/heritage" title="View the Heritage page">Heritage</Link></li>
              <li><Link href="/families" title="View the Families page">Families</Link></li>
              <li><Link href="/genealogy" title="View the Genealogy page">Genealogy</Link></li>
              <li><Link href="/places" title="View the Places page">Places</Link></li>
              <li><Link href="/estates" title="View the Estates page">Estates</Link></li>
              <li><Link href="/timeline" title="View the Timeline page">Timeline</Link></li>
              <li><Link href="/entities" title="View the Entities page">Entities</Link></li>
            </ul>
          </div>
        <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology" title="View the Editorial Methodology page">Editorial Methodology</Link></li>
              <li><Link href="/sources" title="View the Sources page">Sources</Link></li>
              <li><Link href="/editorial-desk" title="View the Editorial Desk page">Editorial Desk</Link></li>
              <li><Link href="/review-team" title="View the Review Team page">Review Team</Link></li>
              <li><Link href="/knowledge" title="View the Knowledge & FAQ page">Knowledge & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection" title="View the Herrera and Velutini page">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini" title="View the Velutini Family page">Velutini Family</Link></li>
              <li><Link href="/places/caracas" title="View the Caracas page">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas" title="View the Banco Caracas page">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>

        <div className="container footer-base">
          <span>
            © {new Date().getFullYear()} Herrera Velutini
          </span>
          <span>
            Built for clear attribution, fast delivery, and durable search understanding.
          </span>
        </div>
      </footer>
    </>
  );
}