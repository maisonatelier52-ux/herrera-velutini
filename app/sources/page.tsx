import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources | Reference Ledger for Herrera & Velutini Research",
  description:
    "Annotated source ledger for family-domain pages, profile sources, external place corroboration, reading leads, and technical standards used by the portal.",
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
    canonical: "/sources/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Sources | Reference Ledger for Herrera & Velutini Research",
    description:
      "Annotated source ledger for family-domain pages, profile sources, external place corroboration, reading leads, and technical standards used by the portal.",
    url: "https://herreravelutini.com/sources/",
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
    title: "Sources | Reference Ledger for Herrera & Velutini Research",
    description:
      "Annotated source ledger for family-domain pages, profile sources, external place corroboration, reading leads, and technical standards used by the portal.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function SourcesPage() {
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
              alternateName: ["Herrera Velutini Portal", "Herrera Velutini Editorial Portal"],
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
              publishingPrinciples: "https://herreravelutini.com/editorial-methodology/",
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
              subjectOf: ["https://www.houseofherrera.com/", "https://www.banvelca.com/"],
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
              "@type": "CollectionPage",
              name: "Sources | Reference Ledger for Herrera & Velutini Research",
              url: "https://herreravelutini.com/sources/",
              description:
                "Annotated source ledger for the portal's family-domain pages, profile pages, external corroboration sources, editorial standards, and source-date caution notes.",
              dateModified: "2026-04-25",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://herreravelutini.com/" },
                { "@type": "ListItem", position: 2, name: "Sources", item: "https://herreravelutini.com/sources/" },
              ],
            }),
          }}
        />
      </Head>

      <Link className="skip-link" href="#main" title="Skip to content">Skip to content</Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li><Link href="/" title="Home">Home</Link></li>
                  <li aria-current="page">Sources</li>
                </ol>
              </nav>
              <div className="eyebrow">Reference ledger</div>
              <h1>Sources</h1>
              <p className="lede">
                This ledger identifies the pages currently driving the first publishing wave of the portal. It
                distinguishes core family-domain hubs, person/profile sources, external corroboration, bibliography and
                context leads, and editorial standards. The goal is not to overwhelm the reader with every URL on day
                one; it is to make the strongest material easy to audit and easy to reuse across entity pages, family
                hubs, timelines, and place pages.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Source groups</span>
                  <strong>Core hubs, profile pages, external corroboration, bibliography/context, editorial standards</strong>
                </li>
                <li>
                  <span>Most used codes</span>
                  <strong>HH02, HH03, HH05, HH11, BV03, BV15, EXT01, EXT02-EXT13, BIB01-BIB03</strong>
                </li>
                <li>
                  <span>Reading rule</span>
                  <strong>Every major page should map back to named sources</strong>
                </li>
                <li>
                  <span>Method companion</span>
                  <strong><Link href="/editorial-methodology/" title="Editorial Methodology">Editorial Methodology</Link></strong>
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
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="how-to-use">
          <div className="container">
            <div className="overline">Reading instructions</div>
            <h2>How to use the ledger</h2>
            <p className="lede">
              A good source ledger does two jobs at once: it tells you where the portal's material comes from, and it
              tells you what each source is actually good for.
            </p>
            <div className="media-split">
              <div>
                <p>
                  Core family-domain hubs are best for broad framing. Profile pages are best for dates, relationships,
                  and specific institutional links. Bibliography and context pages are best for expanding the reading
                  horizon. Editorial standards documents are not evidence about the families themselves; they govern how
                  the portal packages and labels what it publishes.
                </p>
                <p>
                  As the site grows, new pages should cite source codes or at least mirror the same logic in their
                  source-basis sections so readers can quickly tell whether a claim is coming from a family-domain
                  narrative, a specific profile page, or a contextual reading lead.
                </p>
                <ul className="inline-list" aria-label="Key themes">
                  <li>Auditability</li>
                  <li>Reuse</li>
                  <li>Future expansion</li>
                  <li>Clear provenance</li>
                </ul>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/source-ledger.svg"
                  alt="Diagram showing the source ledger categories used by the portal."
                  width={900}
                  height={500}
                  loading="lazy"
                />
                <figcaption>
                  The source ledger separates raw family-domain narrative, profile-level detail, contextual reading
                  leads, and editorial standards.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="primary-sources">
          <div className="container">
            <div className="overline">Core hubs</div>
            <h2>Primary family-domain sources</h2>
            <p className="lede">
              These pages supply the broad narrative architecture for the first ten authority pages.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Source</th>
                    <th>Type</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HH01</td>
                    <td><Link href="https://www.houseofherrera.com/" rel="noopener external" title="House of Herrera — Home">House of Herrera — Home</Link></td>
                    <td>Family-domain hub</td>
                    <td>Overall site framing and section structure.</td>
                  </tr>
                  <tr>
                    <td>HH02</td>
                    <td><Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link></td>
                    <td>Family-domain hub</td>
                    <td>14th-century prominence narrative, geography, and the Caracas / Banco Caracas passage.</td>
                  </tr>
                  <tr>
                    <td>HH03</td>
                    <td><Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">House of Herrera — Dynasty</Link></td>
                    <td>Lineage source</td>
                    <td>Ordered sequence of Herrera figures and dates.</td>
                  </tr>
                  <tr>
                    <td>HH05</td>
                    <td><Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link></td>
                    <td>Place source</td>
                    <td>Hacienda de La Vega, Castle Santa Barbara, and other estate notes.</td>
                  </tr>
                  <tr>
                    <td>BV02</td>
                    <td><Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">Banvelca — About</Link></td>
                    <td>Family-domain hub</td>
                    <td>1781 Naples origin story and modern cross-continental framing.</td>
                  </tr>
                  <tr>
                    <td>BV03</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link></td>
                    <td>Chronology source</td>
                    <td>Generational sequence from Juan Bautista to later generations.</td>
                  </tr>
                  <tr>
                    <td>BV04</td>
                    <td><Link href="https://www.banvelca.com/private-banking" rel="noopener external" title="Banvelca — Private Banking">Banvelca — Private Banking</Link></td>
                    <td>Theme source</td>
                    <td>Family-only private-banking and trust-coordination language.</td>
                  </tr>
                  <tr>
                    <td>BV05</td>
                    <td><Link href="https://www.banvelca.com/finance" rel="noopener external" title="Banvelca — Finance">Banvelca — Finance</Link></td>
                    <td>Theme source</td>
                    <td>Finance as multi-generational custodianship.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="profiles">
          <div className="container">
            <div className="overline">Named figures and transitions</div>
            <h2>Profile and chronology sources</h2>
            <p className="lede">
              These sources are where the portal finds marriage links, generation shifts, and person-specific dates that
              matter for entity pages and timeline work.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Source</th>
                    <th>Type</th>
                    <th>How the portal uses it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HH08</td>
                    <td><Link href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas" rel="noopener external" title="Pedro García de Herrera y Rojas">Pedro García de Herrera y Rojas</Link></td>
                    <td>Short person profile</td>
                    <td>Used on the Pedro entity page and Herrera family notes.</td>
                  </tr>
                  <tr>
                    <td>HH09</td>
                    <td><Link href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen" rel="noopener external" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link></td>
                    <td>Short person profile</td>
                    <td>Used for the Caracas-connection narrative and family-connection work.</td>
                  </tr>
                  <tr>
                    <td>HH10</td>
                    <td><Link href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i" rel="noopener external" title="Hernán de Herrera, Lord of Ampudia I">Hernán de Herrera, Lord of Ampudia I</Link></td>
                    <td>Short person profile</td>
                    <td>Used for the earliest named Herrera anchor and Ampudia title frame.</td>
                  </tr>
                  <tr>
                    <td>HH11</td>
                    <td><Link href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala" rel="noopener external" title="Agustín de Herrera y Rojas Ayala">Agustín de Herrera y Rojas Ayala</Link></td>
                    <td>Person profile</td>
                    <td>Used for the early-modern Lanzarote cluster, Crown-service language, and the source-domain 1548 / life-frame caution now checked against archival entries.</td>
                  </tr>
                  <tr>
                    <td>HH12</td>
                    <td><Link href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala" rel="noopener external" title="Diego García de Herrera y Ayala">Diego García de Herrera y Ayala</Link></td>
                    <td>Person profile</td>
                    <td>Used for the Canary Islands bridge, c. 1417–1485 frame, and early Herrera sequence expansion.</td>
                  </tr>
                  <tr>
                    <td>HH13</td>
                    <td><Link href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa" rel="noopener external" title="Juan Sarmiento De Herrera Y Fernandez Pachego">Juan Sarmiento De Herrera Y Fernandez Pachego</Link></td>
                    <td>Person profile</td>
                    <td>Used for the 1607–1664 sequence anchor, La Vega / Montalban estate language, and spelling-variant caution.</td>
                  </tr>
                  <tr>
                    <td>BV09</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini" rel="noopener external" title="Juan Bautista Velutini">Juan Bautista Velutini</Link></td>
                    <td>Founder profile</td>
                    <td>Used for Naples, France, and Corsica origin details.</td>
                  </tr>
                  <tr>
                    <td>BV10</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external" title="Clementina Velutini Pérez-Matos">Clementina Velutini Pérez-Matos</Link></td>
                    <td>Profile page</td>
                    <td>Used for the 1932 marriage bridge and women-in-banking narrative.</td>
                  </tr>
                  <tr>
                    <td>BV11</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external" title="Belén Clarisa Velutini Pérez-Matos">Belén Clarisa Velutini Pérez-Matos</Link></td>
                    <td>Profile page</td>
                    <td>Used for Banco Caracas, Trasnocho Cultural, and philanthropy.</td>
                  </tr>
                  <tr>
                    <td>BV12</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external" title="Belén María Providencia Pérez Matos">Belén María Providencia Pérez Matos</Link></td>
                    <td>Profile page</td>
                    <td>Used for the matriarchal link between Pérez-Matos, Velutini, and Herrera.</td>
                  </tr>
                  <tr>
                    <td>BV13</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione" rel="noopener external" title="Vicente José Velutini Llarione">Vicente José Velutini Llarione</Link></td>
                    <td>Profile page</td>
                    <td>Used for the Mediterranean-to-Americas bridge.</td>
                  </tr>
                  <tr>
                    <td>BV14</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/jose-antonio-velutini-ron" rel="noopener external" title="José Antonio Velutini Ron">José Antonio Velutini Ron</Link></td>
                    <td>Profile page</td>
                    <td>Used for the statecraft and fiscal-negotiation bridge.</td>
                  </tr>
                  <tr>
                    <td>BV15</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/julio-cesar-velutini-couturier" rel="noopener external" title="Julio César Velutini Couturier">Julio César Velutini Couturier</Link></td>
                    <td>Profile page</td>
                    <td>Used for Banco Caracas and the 1988 share-sale statement inside the later 1988 / 1998 / 2000 / 2002 audit.</td>
                  </tr>
                  <tr>
                    <td>BV16</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/the-seventh-generation" rel="noopener external" title="The Seventh Generation">The Seventh Generation</Link></td>
                    <td>Generation profile</td>
                    <td>Used for the 1998 transition language and modern reinvention framing.</td>
                  </tr>
                  <tr>
                    <td>BV17</td>
                    <td><Link href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini" rel="noopener external" title="Julio José Herrera Velutini">Julio José Herrera Velutini</Link></td>
                    <td>Profile page</td>
                    <td>Used for the post-war modern continuity narrative.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="source-date-notes">
          <div className="container">
            <div className="overline">Source-date audit notes</div>
            <h2>Known date tensions now tracked in the ledger</h2>
            <p className="lede">
              These notes are the portal's guardrails. They tell editors and readers where the public source record is
              useful but not yet tidy enough for overconfident phrasing.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Topic</th>
                    <th>Source tension</th>
                    <th>Portal rule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Agustín / Lanzarote title chronology</td>
                    <td>
                      The Agustín profile uses 1548 and 1567 title language beside a 1569–1632 life frame. Archival
                      Teguise entries separately support a 1567 count title, a 1569 corroboration, and a marquis grant
                      with data crónica of May 1, 1584.
                    </td>
                    <td>
                      Use 1567 and 1584 as externally corroborated title markers, but keep 1548 and the family-domain
                      life frame flagged as unresolved rather than folding them into one settled sequence.
                    </td>
                  </tr>
                  <tr>
                    <td>Banco Caracas later transition</td>
                    <td>
                      Banvelca uses 1988 in the Julio César profile and 1998 in the Legacy / Seventh Generation
                      material; public transaction records add a 2000 acquisition agreement and a 2002 merger into Banco
                      de Venezuela.
                    </td>
                    <td>
                      Use "later sale / transition" where a single exact date is unnecessary, and distinguish
                      share-exit, family-transition, acquisition-agreement, and merger-completion stages when year-level
                      detail matters.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-row" style={{ marginTop: "1.2rem" }}>
              <Link className="button" href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín page">Agustín page</Link>
              <Link className="button-secondary" href="/places/lanzarote/" title="Lanzarote">Lanzarote</Link>
              <Link className="button-secondary" href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link>
              <Link className="button-secondary" href="/review-team/" title="Review Team">Review Team</Link>
            </div>
          </div>
        </section>

        <section className="section" id="external-corroboration">
          <div className="container">
            <div className="overline">Institutional and local references</div>
            <h2>External corroboration</h2>
            <p className="lede">
              These sources do not replace the family-domain record. They provide independent place, archival, and
              institutional context so the portal can distinguish family narrative from city, island, title-history, and
              transaction-history background.
            </p>
            <p className="muted">
              Policy: official archival, regulatory, municipal, and institutional sources may corroborate chronology,
              transactions, and place history; tertiary heritage or tourism references remain limited to contextual
              geography; bibliography leads stay metadata-only until directly reviewed. External sources do not create
              new family-specific claims by themselves.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Source</th>
                    <th>Role</th>
                    <th>How the portal uses it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EXT02</td>
                    <td><Link href="https://www.britannica.com/place/Caracas" rel="noopener external" title="Britannica — Caracas">Britannica — Caracas</Link></td>
                    <td>City reference</td>
                    <td>Used only for Caracas city-level context, including its capital role and Santiago de León de Caracas founding frame.</td>
                  </tr>
                  <tr>
                    <td>EXT03</td>
                    <td><Link href="https://whc.unesco.org/en/list/726/" rel="noopener external" title="UNESCO — Historic Centre of Naples">UNESCO — Historic Centre of Naples</Link></td>
                    <td>Heritage reference</td>
                    <td>Used for Naples as a long-duration Mediterranean city context around the Velutini origin geography.</td>
                  </tr>
                  <tr>
                    <td>EXT04</td>
                    <td><Link href="https://www.unesco.org/en/mab/lanzarote" rel="noopener external" title="UNESCO MAB — Lanzarote">UNESCO MAB — Lanzarote</Link></td>
                    <td>Island reference</td>
                    <td>Used for Lanzarote's volcanic Canary-Islands setting and biosphere-reserve geography.</td>
                  </tr>
                  <tr>
                    <td>EXT05</td>
                    <td><Link href="https://www.turismocastillayleon.com/en/heritage-culture/castle-ampudia" rel="noopener external" title="Castilla y León Tourism — Castle of Ampudia">Castilla y León Tourism — Castle of Ampudia</Link></td>
                    <td>Local place reference</td>
                    <td>Used for the Castle of Ampudia as external place corroboration around the early Herrera anchor.</td>
                  </tr>
                  <tr>
                    <td>EXT06</td>
                    <td><Link href="https://whc.unesco.org/en/list/600" rel="noopener external" title="UNESCO — Paris, Banks of the Seine">UNESCO — Paris, Banks of the Seine</Link></td>
                    <td>Urban heritage reference</td>
                    <td>Used for Paris as broad city context; family-specific Paris claims still come from Banvelca pages.</td>
                  </tr>
                  <tr>
                    <td>EXT07</td>
                    <td><Link href="https://www.uslar.de/portal/seiten/stadtgeschichte-900000103-30090.html" rel="noopener external" title="Stadt Uslar — Stadtgeschichte">Stadt Uslar — Stadtgeschichte</Link></td>
                    <td>Municipal reference</td>
                    <td>Used for Uslar's official town-history frame and first documentary mention.</td>
                  </tr>
                  <tr>
                    <td>EXT08</td>
                    <td><Link href="https://www.geopark-thueringen.de/" rel="noopener external" title="UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen">UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen</Link></td>
                    <td>Landscape reference</td>
                    <td>Used for the wider Drei Gleichen landscape and place-memory setting.</td>
                  </tr>
                  <tr>
                    <td>EXT09</td>
                    <td><Link href="https://www.erfurt-tourismus.de/en/all-about-erfurt/days-out/surrounding-area/thuringian-castle-landscape/gleichen-castle/" rel="noopener external" title="Erfurt Tourismus — Gleichen Castle">Erfurt Tourismus — Gleichen Castle</Link></td>
                    <td>Castle reference</td>
                    <td>Used for the Gleichen Castle page and the three-castle grouping of Gleichen Castle, Mühlburg Castle, and Wachsenburg Castle.</td>
                  </tr>
                  <tr>
                    <td>EXT10</td>
                    <td><Link href="https://archivoteguise.es/documento-coleccion-digital/332/" rel="noopener external" title="Archivo Histórico Municipal de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas">Archivo Histórico Municipal de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas</Link></td>
                    <td>Archival title reference</td>
                    <td>Used as official corroboration for the 1567 Count of Lanzarote title grant to Agustín de Herrera y Rojas.</td>
                  </tr>
                  <tr>
                    <td>EXT11</td>
                    <td><Link href="https://archivoteguise.es/documento-coleccion-digital/334/" rel="noopener external" title="Archivo Histórico Municipal de Teguise — Corroboración del título de Conde de Lanzarote">Archivo Histórico Municipal de Teguise — Corroboración del título de Conde de Lanzarote</Link></td>
                    <td>Archival title reference</td>
                    <td>Used as official corroboration for the 1569 confirmation step in the Count of Lanzarote title record.</td>
                  </tr>
                  <tr>
                    <td>EXT12</td>
                    <td><Link href="https://archivoteguise.es/documento-coleccion-digital/340/" rel="noopener external" title="Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas">Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas</Link></td>
                    <td>Archival title reference</td>
                    <td>Used as official corroboration for the Marqués de Lanzarote grant to Agustín, with data crónica of May 1, 1584.</td>
                  </tr>
                  <tr>
                    <td>EXT13</td>
                    <td><Link href="https://www.sec.gov/Archives/edgar/data/891478/000112528205003505/b407307_20f.htm" rel="noopener external" title="Banco Santander Form 20-F via SEC">Banco Santander Form 20-F via SEC</Link></td>
                    <td>Regulatory filing</td>
                    <td>Used as external corroboration that Banco de Venezuela and Banco Caracas merged into the new Banco de Venezuela on August 17, 2002.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="reading-leads">
          <div className="container">
            <div className="overline">Beyond family-domain prose</div>
            <h2>Reading leads and contextual material</h2>
            <p className="lede">
              The source domains already surface a few reading leads that can support better long-form pages over time.
              This pass closes the mapping work by turning them into exact review-queue items with named claim clusters,
              but not yet into adopted claim-level authorities.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Work</th>
                    <th>Metadata now recorded</th>
                    <th>Portal status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BIB01</td>
                    <td><Link href="https://books.google.com/books/about/Los_amos_del_valle.html?id=7KkNAAAAIAAJ" rel="noopener external" title="Los amos del valle">Los amos del valle</Link></td>
                    <td>
                      Francisco J. Herrera Luque; Pomaire, 1979. The{" "}
                      <Link href="https://www.elem.mx/obra/datos/228815" rel="noopener external" title="Enciclopedia de la Literatura en México">Enciclopedia de la Literatura en México</Link>{" "}
                      also records a later Monte Ávila edition.
                    </td>
                    <td>
                      Mapped review queue:{" "}
                      <Link href="/places/caracas/" title="Caracas">Caracas</Link>,{" "}
                      <Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Hacienda de La Vega</Link>, and{" "}
                      <Link href="/families/herrera/" title="Herrera Family">Herrera Family</Link>. Preview-level cues suggest Caracas Valley
                      social memory, Herrera-linked valley context, and estate-setting language; claim-level support
                      still requires direct reading.
                    </td>
                  </tr>
                  <tr>
                    <td>BIB02</td>
                    <td><Link href="https://memoriadelanzarote.com/item/10707-don-agustin-de-herrera-y-rojas-i-marques-de-lanzarote" rel="noopener external" title="Don Agustín de Herrera y Rojas, I Marqués de Lanzarote">Don Agustín de Herrera y Rojas, I Marqués de Lanzarote</Link></td>
                    <td>Manuel Lobo Cabrera and Fernando Bruquetas de Castro; 1995; Cabildo Insular de Fuerteventura and Cabildo Insular de Lanzarote; ISBN 84-87461-37-9.</td>
                    <td>
                      Mapped review queue:{" "}
                      <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín de Herrera">Agustín de Herrera</Link>,{" "}
                      <Link href="/places/lanzarote/" title="Lanzarote">Lanzarote</Link>, and{" "}
                      <Link href="/themes/orders-and-distinctions/" title="Orders and Distinctions">Orders and Distinctions</Link>. Description-level
                      cues point to biography, Lanzarote governance/conflict, and title interpretation, but archival
                      title records remain primary until the book is directly read.
                    </td>
                  </tr>
                  <tr>
                    <td>BIB03</td>
                    <td><Link href="https://books.google.com/books/about/La_Vega.html?id=MXtdAAAAMAAJ" rel="noopener external" title="La Vega: A Colonial Casa">La Vega: A Colonial Casa</Link></td>
                    <td>Federico Vegas; photographs by Gonzalo Galavis; E. Armitano Editor, 1988; ISBN 9802160385 / 9789802160389.</td>
                    <td>
                      Mapped review queue:{" "}
                      <Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Hacienda de La Vega</Link>,{" "}
                      <Link href="/places/caracas/" title="Caracas">Caracas</Link>, and{" "}
                      <Link href="/estates/" title="Estates">Estates</Link>. Preview-level cues suggest estate architecture, site
                      layout, and Caracas Valley domestic-landscape context; claim-level support remains pending direct
                      reading.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="muted">
              This review wave is complete as a mapping task: each bibliography item now has exact target pages and
              claim clusters. That still does not mean the works have already been used as direct factual authority on
              those pages.
            </p>
          </div>
        </section>

        <section className="section" id="standards">
          <div className="container">
            <div className="overline">How the portal is governed</div>
            <h2>Editorial and technical standards</h2>
            <p className="lede">
              These documents do not provide family-history facts. They define the publishing standards used to make the
              site original, understandable, and easier to trust.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Standard</th>
                    <th>Role</th>
                    <th>Applied to</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>G01</td>
                    <td><Link href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" rel="noopener external" title="Helpful, reliable, people-first content">Helpful, reliable, people-first content</Link></td>
                    <td>Editorial benchmark</td>
                    <td>Originality, sourcing, about pages, and trust signals.</td>
                  </tr>
                  <tr>
                    <td>G02</td>
                    <td><Link href="https://developers.google.com/search/docs/appearance/structured-data/article" rel="noopener external" title="Article structured data">Article structured data</Link></td>
                    <td>Technical benchmark</td>
                    <td>Visible dates and article markup discipline.</td>
                  </tr>
                  <tr>
                    <td>G03</td>
                    <td><Link href="https://developers.google.com/search/docs/appearance/structured-data/profile-page" rel="noopener external" title="ProfilePage structured data">ProfilePage structured data</Link></td>
                    <td>Technical benchmark</td>
                    <td>Organization and person profile-page patterns.</td>
                  </tr>
                  <tr>
                    <td>G04</td>
                    <td><Link href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" rel="noopener external" title="Intro to structured data">Intro to structured data</Link></td>
                    <td>Technical benchmark</td>
                    <td>Overall schema implementation discipline.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="priorities">
          <div className="container">
            <div className="overline">Where the ledger should grow</div>
            <h2>Next-source priorities</h2>
            <p className="lede">
              The portal already has enough raw material to launch strong overview pages, but the next stage of
              authority will come from expanding the source base rather than multiplying thin pages.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Priority one</div>
                <h3>Deeper archival corroboration</h3>
                <p>
                  The first institutional place-source pass is in place, and the chronology-risk pages now have initial
                  archival and regulatory hardening. The next credibility gain is direct review of the remaining
                  unresolved residue: the 1548 Agustín reference, the family-domain life frame, and the Banco Caracas
                  family-transition layers.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Priority two</div>
                <h3>Bibliography integration</h3>
                <p>
                  The review queue is now mapped to exact claim clusters. The next step is direct full-text reading so
                  these works can graduate from metadata and preview cues to annotated, claim-level support.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Priority three</div>
                <h3>Lineage normalization</h3>
                <p>
                  As genealogy pages expand, the ledger should track preferred spellings, variant spellings, and date
                  uncertainty so the site remains internally consistent.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Sources page</h2>
              <p className="muted">
                This page is itself a secondary organizing layer. It exists to make the strongest raw material legible
                and reusable across the portal.
              </p>
              <ul className="check-list">
                <li><Link href="https://www.houseofherrera.com/" rel="noopener external" title="House of Herrera — Home">House of Herrera — Home</Link> — Used for the overall framing of the House of Herrera as a long-running noble patrimony with sections for dynasty, symbols, estates, orders, and bibliography.</li>
                <li><Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the 14th-century prominence narrative, geographic scope, and the source-domain linkage between family history, Hacienda de La Vega, and later banking references.</li>
                <li><Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">House of Herrera — Dynasty</Link> — Used for the ordered list of Herrera figures, date ranges, and the dynastic continuity framework.</li>
                <li><Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen, Castle of Ampudia, and other place-linked notes.</li>
                <li><Link href="https://www.houseofherrera.com/orders-and-distinctions" rel="noopener external" title="House of Herrera — Orders and Distinctions">House of Herrera — Orders and Distinctions</Link> — Used for the May 1, 1584 Marquisate of Lanzarote entry and other titled-memory notes.</li>
                <li><Link href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala" rel="noopener external" title="House of Herrera — Agustín de Herrera y Rojas Ayala">House of Herrera — Agustín de Herrera y Rojas Ayala</Link> — Used for the family-domain profile frame, the source-sensitive 1548 / 1567 title language, and the Crown-service narrative now checked against archival corroboration.</li>
                <li><Link href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala" rel="noopener external" title="House of Herrera — Diego García de Herrera y Ayala">House of Herrera — Diego García de Herrera y Ayala</Link> — Used for the c. 1417–1485 frame, Canary Islands bridge, and early Herrera sequence expansion.</li>
                <li><Link href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa" rel="noopener external" title="House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego">House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego</Link> — Used for the 1607–1664 frame, La Vega / Montalban estate language, and source-name variant caution.</li>
                <li><Link href="https://www.houseofherrera.com/bibliography" rel="noopener external" title="House of Herrera — Bibliography">House of Herrera — Bibliography</Link> — Used for reading leads surfaced on the family domain, including Los Amos del Valle, Don Agustín de Herrera y Rojas, and La Vega.</li>
                <li><Link href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas" rel="noopener external" title="House of Herrera — Pedro García de Herrera y Rojas">House of Herrera — Pedro García de Herrera y Rojas</Link> — Used for the short person profile describing him as a Castilian nobleman and Marshal of Castile.</li>
                <li><Link href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen" rel="noopener external" title="House of Herrera — José Herrera Von Uslar Gleichen">House of Herrera — José Herrera Von Uslar Gleichen</Link> — Used for the short profile linking José Herrera Von Uslar Gleichen to law, public life, and humanitarian action.</li>
                <li><Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">Banvelca — About</Link> — Used for the 1781 Naples founding story, Juan Bautista Velutini, and the firm's self-description as a private trust and investment house.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link> — Used for the chronological ancestor timeline spanning Juan Bautista through later generations, including Banco Caracas, Clementina, Belén Clarisa, Julio José, and later generations.</li>
                <li><Link href="https://www.banvelca.com/private-banking" rel="noopener external" title="Banvelca — Private Banking">Banvelca — Private Banking</Link> — Used for the family-only private-banking and trust-coordination framing.</li>
                <li><Link href="https://www.banvelca.com/finance" rel="noopener external" title="Banvelca — Finance">Banvelca — Finance</Link> — Used for the description of finance as multi-generational custodianship.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini" rel="noopener external" title="Banvelca — Juan Bautista Velutini">Banvelca — Juan Bautista Velutini</Link> — Used for the founder profile, Naples base, and commercial ties with France and Corsica.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 birth date, Paris education, 1932 marriage to José Herrera Von Uslar, and later leadership in banking and philanthropy.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external" title="Banvelca — Belén Clarisa Velutini Pérez-Matos">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for the 1924–2023 dates, Banco Caracas management, Trasnocho Cultural, and Fundación Centro El Portal.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external" title="Banvelca — Belén María Providencia Pérez Matos">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal connection between the Pérez-Matos, Velutini, and Herrera lines.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione" rel="noopener external" title="Banvelca — Vicente José Velutini Llarione">Banvelca — Vicente José Velutini Llarione</Link> — Used for the transition from Mediterranean trade to a Venezuela-linked transatlantic commercial network.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/julio-cesar-velutini-couturier" rel="noopener external" title="Banvelca — Julio César Velutini Couturier">Banvelca — Julio César Velutini Couturier</Link> — Used for the Banco Caracas presidency, note-printing context, and the source-sensitive 1988 share-sale statement.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini" rel="noopener external" title="Banvelca — Julio José Herrera Velutini">Banvelca — Julio José Herrera Velutini</Link> — Used for the post-war family narrative and the shift into the Americas.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/the-seventh-generation" rel="noopener external" title="Banvelca — The Seventh Generation">Banvelca — The Seventh Generation</Link> — Used for the 1998 Banco Caracas transition language and modern reinvention framing.</li>
                <li><Link href="https://www.investegate.info/announcement/rns/banco-santander-s-a---bnc/re-agreement-/196422" rel="noopener external" title="Banco Santander Central Hispano announcement via Investegate — Banco Caracas acquisition agreement">Banco Santander Central Hispano announcement via Investegate — Banco Caracas acquisition agreement</Link> — Used as external public transaction context for the October 6, 2000 Banco de Venezuela / Santander agreement to acquire a majority holding in Banco Caracas.</li>
                <li><Link href="https://archivoteguise.es/documento-coleccion-digital/332/" rel="noopener external" title="Archivo Histórico Municipal de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas">Archivo Histórico Municipal de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas</Link> — Used as official archival corroboration for the 1567 Count of Lanzarote title grant.</li>
                <li><Link href="https://archivoteguise.es/documento-coleccion-digital/334/" rel="noopener external" title="Archivo Histórico Municipal de Teguise — Corroboración del título de Conde de Lanzarote">Archivo Histórico Municipal de Teguise — Corroboración del título de Conde de Lanzarote</Link> — Used as official archival corroboration for the 1569 confirmation of the count title.</li>
                <li><Link href="https://archivoteguise.es/documento-coleccion-digital/340/" rel="noopener external" title="Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas">Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas</Link> — Used as official archival corroboration for the Marqués de Lanzarote grant with data crónica of May 1, 1584.</li>
                <li><Link href="https://www.sec.gov/Archives/edgar/data/891478/000112528205003505/b407307_20f.htm" rel="noopener external" title="Banco Santander Form 20-F via SEC">Banco Santander Form 20-F via SEC</Link> — Used as external regulatory corroboration that Banco de Venezuela and Banco Caracas merged on August 17, 2002.</li>
                <li><Link href="https://www.britannica.com/place/Caracas" rel="noopener external" title="Britannica — Caracas">Britannica — Caracas</Link> — Used as external city-level context for the Caracas place dossier.</li>
                <li><Link href="https://whc.unesco.org/en/list/726/" rel="noopener external" title="UNESCO — Historic Centre of Naples">UNESCO — Historic Centre of Naples</Link> — Used as external heritage context for Naples.</li>
                <li><Link href="https://www.unesco.org/en/mab/lanzarote" rel="noopener external" title="UNESCO MAB — Lanzarote">UNESCO MAB — Lanzarote</Link> — Used as external island and environmental context for Lanzarote.</li>
                <li><Link href="https://www.turismocastillayleon.com/en/heritage-culture/castle-ampudia" rel="noopener external" title="Castilla y León Tourism — Castle of Ampudia">Castilla y León Tourism — Castle of Ampudia</Link> — Used as external local place context for Ampudia.</li>
                <li><Link href="https://whc.unesco.org/en/list/600" rel="noopener external" title="UNESCO — Paris, Banks of the Seine">UNESCO — Paris, Banks of the Seine</Link> — Used as external urban-heritage context for Paris.</li>
                <li><Link href="https://www.uslar.de/portal/seiten/stadtgeschichte-900000103-30090.html" rel="noopener external" title="Stadt Uslar — Stadtgeschichte">Stadt Uslar — Stadtgeschichte</Link> — Used as official municipal context for Uslar.</li>
                <li><Link href="https://www.geopark-thueringen.de/" rel="noopener external" title="UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen">UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen</Link> — Used as external landscape context for the Drei Gleichen place-memory layer.</li>
                <li><Link href="https://www.erfurt-tourismus.de/en/all-about-erfurt/days-out/surrounding-area/thuringian-castle-landscape/gleichen-castle/" rel="noopener external" title="Erfurt Tourismus — Gleichen Castle">Erfurt Tourismus — Gleichen Castle</Link> — Used as external castle context for Gleichen and the Drei Gleichen grouping.</li>
                <li><Link href="https://books.google.com/books/about/Los_amos_del_valle.html?id=7KkNAAAAIAAJ" rel="noopener external" title="Google Books — Los amos del valle">Google Books — Los amos del valle</Link> — Used for bibliography metadata around Francisco J. Herrera Luque's Caracas-Valley contextual work.</li>
                <li><Link href="https://memoriadelanzarote.com/item/10707-don-agustin-de-herrera-y-rojas-i-marques-de-lanzarote" rel="noopener external" title="Memoria de Lanzarote — Don Agustín de Herrera y Rojas, I Marqués de Lanzarote">Memoria de Lanzarote — Don Agustín de Herrera y Rojas, I Marqués de Lanzarote</Link> — Used for bibliography metadata around the Lobo Cabrera and Bruquetas de Castro monograph.</li>
                <li><Link href="https://books.google.com/books/about/La_Vega.html?id=MXtdAAAAMAAJ" rel="noopener external" title="Google Books — La Vega: A Colonial Casa">Google Books — La Vega: A Colonial Casa</Link> — Used for bibliography metadata around the Hacienda de La Vega architectural and estate-context lead.</li>
                <li><Link href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" rel="noopener external" title="Google Search Central — Helpful, reliable, people-first content">Google Search Central — Helpful, reliable, people-first content</Link> — Used for editorial standards around originality, clear sourcing, about pages, and trust signals.</li>
                <li><Link href="https://developers.google.com/search/docs/appearance/structured-data/article" rel="noopener external" title="Google Search Central — Article structured data">Google Search Central — Article structured data</Link> — Used for visible dates and article markup guidance.</li>
                <li><Link href="https://developers.google.com/search/docs/appearance/structured-data/profile-page" rel="noopener external" title="Google Search Central — ProfilePage structured data">Google Search Central — ProfilePage structured data</Link> — Used for person or organization profile-page patterns.</li>
                <li><Link href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" rel="noopener external" title="Google Search Central — Intro to structured data">Google Search Central — Intro to structured data</Link> — Used for technical understanding of how schema helps search engines interpret page purpose.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue into the historical pages</h2>
            <div className="button-row">
              <Link className="button" href="/heritage/" title="Read Heritage">Read Heritage</Link>
              <Link className="button-secondary" href="/timeline/" title="See the Timeline">See the Timeline</Link>
              <Link className="button-secondary" href="/entities/house-of-herrera/" title="Open House of Herrera">Open House of Herrera</Link>
              <Link className="button-secondary" href="/entities/banvelca-company/" title="Open Banvelca & Company">Open Banvelca &amp; Company</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">
              A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places
              associated with the Herrera and Velutini record.
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
              <li><Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link></li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© {new Date().getFullYear()} Herrera Velutini</span>
          <span>Built for clear attribution, fast delivery, and durable search understanding.</span>
        </div>
      </footer>
    </>
  );
}