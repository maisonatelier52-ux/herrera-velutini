import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herrera Lineage | Family Tree from Ampudia to Caracas",
  description:
    "Lineage page translating the public Herrera dynasty sequence into a readable family map from Ampudia to the Caracas bridge.",
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
    canonical: "/genealogy/herrera-lineage/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Herrera Lineage | Family Tree from Ampudia to Caracas",
    description:
      "Lineage page translating the public Herrera dynasty sequence into a readable family map from Ampudia to the Caracas bridge.",
    url: "https://herreravelutini.com/genealogy/herrera-lineage/",
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
    title: "Herrera Lineage | Family Tree from Ampudia to Caracas",
    description:
      "Lineage page translating the public Herrera dynasty sequence into a readable family map from Ampudia to the Caracas bridge.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function HerreraLineage() {
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
              logo: { "@type": "ImageObject", url: "https://herreravelutini.com/brand-wordmark.svg" },
              description: "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
              contactPoint: [{ "@type": "ContactPoint", contactType: "editorial inquiries", url: "https://herreravelutini.com/about/#contact", availableLanguage: ["English", "Spanish"] }],
              publishingPrinciples: "https://herreravelutini.com/editorial-methodology/",
              areaServed: ["Europe", "North America", "Latin America", "Middle East"],
              knowsAbout: ["House of Herrera", "Banvelca & Company", "Herrera family history", "Velutini family history", "Hacienda de La Vega", "Castle Santa Barbara", "family lineage research", "heritage documentation", "source-led editorial publishing"],
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
              description: "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
              publisher: { "@id": "https://herreravelutini.com/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Herrera Lineage | Family Tree from Ampudia to Caracas",
              description: "Lineage page translating the public Herrera dynasty sequence into a readable family map from Ampudia to the Caracas bridge.",
              datePublished: "2026-04-18",
              dateModified: "2026-04-24",
              author: { "@type": "Organization", "@id": "https://herreravelutini.com/editorial-desk/#org", name: "Herrera Velutini Editorial Desk" },
              editor: { "@type": "Organization", "@id": "https://herreravelutini.com/review-team/#org", name: "Standards Review Team" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              mainEntityOfPage: "https://herreravelutini.com/genealogy/herrera-lineage/",
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
                { "@type": "ListItem", position: 2, name: "Genealogy", item: "https://herreravelutini.com/genealogy/" },
                { "@type": "ListItem", position: 3, name: "Herrera Lineage", item: "https://herreravelutini.com/genealogy/herrera-lineage/" },
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
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/" title="Home">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/genealogy/" title="Genealogy">Genealogy</Link></li>
                  <li aria-current="page">Herrera Lineage</li>
                </ol>
              </nav>
              <div className="eyebrow">Lineage page</div>
              <h1>Herrera Lineage</h1>
              <p className="lede">
                The Herrera Lineage page translates the House of Herrera dynasty sequence into an editorially readable lineage map. It treats the published dynasty as a backbone, identifies where estate and place memory deepen the line, and shows how the later Caracas-linked bridge should be read without pretending that the public page is already a complete scholarly genealogy.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Lineage frame</span>
                  <strong>Ampudia to Caracas</strong>
                </li>
                <li>
                  <span>Backbone source</span>
                  <strong>House of Herrera — Dynasty</strong>
                </li>
                <li>
                  <span>Place anchors</span>
                  <strong>Ampudia, Lanzarote, Uslar, Gleichen, and Caracas</strong>
                </li>
                <li>
                  <span>Bridge figure</span>
                  <strong><Link href="/entities/jose-herrera-von-uslar-gleichen/" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link></strong>
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
              <time dateTime="2026-04-18">April 18, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-24">April 24, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Method note</div>
            <h2>This is a published sequence read as lineage, not a notarized family tree</h2>
            <p className="lede">
              The House of Herrera dynasty page supplies a long run of names and date frames. The portal treats that as an ordered lineage backbone and then uses estate and bridge pages to make the later chapters more concrete.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The strength of the Herrera record is duration. The source domain explicitly frames the family as a patrimony of Spanish nobility that became prominent in the 14th century and then supplies a sequence of named figures stretching across centuries. That is exactly the kind of material a reference portal should organize.
                </p>
                <p>
                  The limit of the public record is that the dynasty page is a sequence page, not a documentary register. For that reason, this lineage page does two things at once: it preserves the order of the published sequence, and it marks where estate, heraldic, or modern bridge material is needed to make the line understandable for a reader arriving from search.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the Herrera lineage route from Ampudia through Castile and the Canaries to Caracas."
                  loading="lazy"
                  src="/illustrations/herrera-lineage-route.svg"
                  width={600}
                  height={400}
                />
                <figcaption>The Herrera sequence becomes easier to understand when the lineage is read alongside the places that make it visible.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Published backbone</div>
            <h2>The current public sequence from the House of Herrera site</h2>
            <p className="lede">This table preserves the order of the live dynasty page and explains how the portal uses each name.</p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Published figure</th>
                    <th>Date frame on source page</th>
                    <th>Portal reading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Link href="/entities/hernan-de-herrera-lord-of-ampudia/" title="Hernán de Herrera, Lord of Ampudia I">Hernán de Herrera, Lord of Ampudia I</Link></td>
                    <td>Circa 1355</td>
                    <td>Earliest named anchor and the best starting point for Ampudia-linked lineage memory.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/pedro-garcia-de-herrera-y-rojas/" title="Pedro García de Herrera y Rojas">Pedro García de Herrera y Rojas</Link></td>
                    <td>1390–1455</td>
                    <td>One of the clearest early figures; the short profile describes him as a Castilian nobleman and Marshal of Castile.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/diego-garcia-de-herrera-y-ayala/" title="Diego García de Herrera y Ayala">Diego García de Herrera y Ayala</Link></td>
                    <td>c. 1417–1485</td>
                    <td>Keeps the sequence moving into the next generation and connects the Herrera line to the Canary Islands turn.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín de Herrera y Rojas Ayala">Agustín de Herrera y Rojas Ayala</Link></td>
                    <td>House page says 1569–1632; title record 1567 / 1584</td>
                    <td>Best read through the Lanzarote title chronology rather than as a settled life frame.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" title="Juan Sarmiento de Herrera y Fernández Pacheco">Juan Sarmiento de Herrera y Fernández Pacheco</Link></td>
                    <td>1607–1664</td>
                    <td>Maintains the ordered sequence into the seventeenth century, with a visible source spelling variant.</td>
                  </tr>
                  <tr>
                    <td>Agustín Nicolás de Herrera y Loaisa</td>
                    <td>1633–1695</td>
                    <td>Part of the later early-modern continuity sequence.</td>
                  </tr>
                  <tr>
                    <td>Francisco Carlos Herrera y Ascanio</td>
                    <td>1671–1730</td>
                    <td>Extends the family story toward the eighteenth century.</td>
                  </tr>
                  <tr>
                    <td>Juan Manuel de Herrera y Misones</td>
                    <td>1712–1767</td>
                    <td>Another continuity anchor in the long-duration sequence.</td>
                  </tr>
                  <tr>
                    <td>Martín Eugenio de Herrera y Rada</td>
                    <td>1754–1810</td>
                    <td>Transitions the line into the modern era.</td>
                  </tr>
                  <tr>
                    <td>Mariano José Herrera y Rodríguez del Toro Ibarra</td>
                    <td>Circa 1789</td>
                    <td>Begins to pull the sequence closer to the Atlantic and Latin American frame readers care about today.</td>
                  </tr>
                  <tr>
                    <td>José de Herrera y Irogoyen</td>
                    <td>Circa 1813</td>
                    <td>One of the latest names on the current public dynasty page before the portal must rely more heavily on bridge figures and places.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-row" style={{ marginTop: "1.2rem" }}>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" className="button" title="Hernán de Herrera, Lord of Ampudia I">Hernán</Link>
              <Link href="/entities/pedro-garcia-de-herrera-y-rojas/" className="button-secondary" title="Pedro García de Herrera y Rojas">Pedro García</Link>
              <Link href="/entities/diego-garcia-de-herrera-y-ayala/" className="button-secondary" title="Diego García de Herrera y Ayala">Diego García</Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary" title="Agustín de Herrera y Rojas Ayala">Agustín</Link>
              <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" className="button-secondary" title="Juan Sarmiento de Herrera y Fernández Pacheco">Juan Sarmiento</Link>
              <Link href="/places/ampudia/" className="button-secondary" title="Ampudia">Ampudia</Link>
              <Link href="/places/lanzarote/" className="button-secondary" title="Lanzarote">Lanzarote</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Places that clarify the line</div>
            <h2>The Herrera lineage is strongest when it is read with its places</h2>
            <p className="lede">
              Place gives the long name sequence physical meaning and helps search-led readers understand why the line matters.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Ampudia</div>
                <h3>Origins and early memory</h3>
                <p>Ampudia is where the earliest named line becomes legible as more than a surname. It anchors the medieval chapter and the idea of lordship.</p>
              </article>
              <article className="callout">
                <div className="overline">Lanzarote</div>
                <h3>Distinctions and island memory</h3>
                <p>Agustín de Herrera y Rojas Ayala and the distinctions page make Lanzarote central to the early-modern identity layer.</p>
              </article>
              <article className="callout">
                <div className="overline">Germany</div>
                <h3>Uslar and Gleichen branch memory</h3>
                <p>The new Uslar and Gleichen pages make the German branch layer legible through Freudenthal, the Drei Gleichen landscape, heraldry, and the compound surname.</p>
              </article>
            </div>
            <div className="button-row" style={{ marginTop: "1.2rem" }}>
              <Link href="/places/ampudia/" className="button" title="Ampudia">Ampudia</Link>
              <Link href="/places/lanzarote/" className="button-secondary" title="Lanzarote">Lanzarote</Link>
              <Link href="/places/uslar/" className="button-secondary" title="Uslar">Uslar</Link>
              <Link href="/places/gleichen/" className="button-secondary" title="Gleichen">Gleichen</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Modern bridge logic</div>
            <h2>Why José Herrera Von Uslar matters to the lineage page</h2>
            <p className="lede">
              The public House of Herrera dynasty page stops earlier than the modern cross-family record. The portal therefore uses modern bridge figures to connect the older line to the twentieth-century Caracas chapter.
            </p>
            <p>
              <Link href="/entities/jose-herrera-von-uslar-gleichen/" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link> is one of the most important currently live bridge figures on the Herrera side. His short source-domain profile adds twentieth-century public life and humanitarian action. Banvelca&apos;s Clementina page then makes him even more important by identifying his 1932 marriage to Clementina Velutini Pérez-Matos as the bridge between the two family narratives.
            </p>
            <p>
              That does not mean the portal simply pastes the modern marriage onto the medieval sequence. Instead, it uses the older dynasty page for long-duration lineage, then uses modern bridge figures and place pages to explain how the Herrera story remains relevant in the later Caracas-connected chapter.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Herrera Lineage page</h2>
              <p className="muted">
                This lineage page uses the House of Herrera dynasty page as a published backbone and adds estate and bridge context to keep the sequence readable and trustworthy.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the 14th-century prominence narrative and the family&apos;s transregional scope.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">House of Herrera — Dynasty</Link> — Used for the ordered sequence of published Herrera figures and date frames.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i" rel="noopener external" title="House of Herrera — Hernán de Herrera, Lord of Ampudia I">House of Herrera — Hernán de Herrera, Lord of Ampudia I</Link> — Used for the first named profile in the sequence and the circa 1355 Ampudia title frame.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas" rel="noopener external" title="House of Herrera — Pedro García de Herrera y Rojas">House of Herrera — Pedro García de Herrera y Rojas</Link> — Used for the short profile identifying Pedro García as a Castilian nobleman and Marshal of Castile.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala" rel="noopener external" title="House of Herrera — Diego García de Herrera y Ayala">House of Herrera — Diego García de Herrera y Ayala</Link> — Used for the early Herrera-to-Canary Islands sequence bridge and c. 1417–1485 frame.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala" rel="noopener external" title="House of Herrera — Agustín de Herrera y Rojas Ayala">House of Herrera — Agustín de Herrera y Rojas Ayala</Link> — Used for the source-domain profile, Lanzarote title language under chronology caution, Royal Council note, and Latin America expansion framing.
                </li>
                <li>
                  <Link href="https://archivoteguise.es/documento-coleccion-digital/332/" rel="noopener external" title="Archivo de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas">Archivo de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas</Link> — Used for the externally corroborated 1567 count-title anchor.
                </li>
                <li>
                  <Link href="https://archivoteguise.es/documento-coleccion-digital/340/" rel="noopener external" title="Archivo de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas">Archivo de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas</Link> — Used for the externally corroborated 1584 marquisate grant.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa" rel="noopener external" title="House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego">House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego</Link> — Used for the 1607–1664 sequence point, estate language, and name-variant caution.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for Ampudia, Lanzarote, Castle of Freudenthal, Uslar-Gleichen Castle, other German estate notes, and the Caracas-linked Hacienda de La Vega material.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/orders-and-distinctions" rel="noopener external" title="House of Herrera — Orders and Distinctions">House of Herrera — Orders and Distinctions</Link> — Used for the Lanzarote and titled-memory layer that deepens the Agustín chapter.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen" rel="noopener external" title="House of Herrera — José Herrera Von Uslar Gleichen">House of Herrera — José Herrera Von Uslar Gleichen</Link> — Used for the modern bridge figure later connected to Clementina Velutini Pérez-Matos.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1932 marriage bridge that links the later Herrera chapter to the Velutini side.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Herrera lineage cluster</h2>
            <div className="button-row">
              <Link href="/families/herrera/" className="button" title="Herrera Family">Herrera Family</Link>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" className="button-secondary" title="Hernán de Herrera, Lord of Ampudia I">Hernán</Link>
              <Link href="/entities/diego-garcia-de-herrera-y-ayala/" className="button-secondary" title="Diego García de Herrera y Ayala">Diego García</Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary" title="Agustín de Herrera y Rojas Ayala">Agustín</Link>
              <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" className="button-secondary" title="Juan Sarmiento de Herrera y Fernández Pacheco">Juan Sarmiento</Link>
              <Link href="/entities/house-of-herrera/" className="button-secondary" title="House of Herrera">House of Herrera</Link>
              <Link href="/entities/jose-herrera-von-uslar-gleichen/" className="button-secondary" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link>
              <Link href="/places/uslar/" className="button-secondary" title="Uslar">Uslar</Link>
              <Link href="/places/gleichen/" className="button-secondary" title="Gleichen">Gleichen</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">
              A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.
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