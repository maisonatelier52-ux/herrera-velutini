import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herrera Family | Lineage, Estates, Symbols & Historical Notes",
  description:
    "Family hub for the Herrera line, organizing lineage, estates, symbols, distinctions, and research routes.",
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
    canonical: "/families/herrera/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Herrera Family | Lineage, Estates, Symbols & Historical Notes",
    description:
      "Family hub for the Herrera line, organizing lineage, estates, symbols, distinctions, and research routes.",
    url: "https://herreravelutini.com/families/herrera/",
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
      "Herrera Family | Lineage, Estates, Symbols & Historical Notes",
    description:
      "Family hub for the Herrera line, organizing lineage, estates, symbols, distinctions, and research routes.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function HerreraFamily() {
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
              "@type": "CollectionPage",
              name: "Herrera Family | Lineage, Estates, Symbols & Historical Notes",
              url: "https://herreravelutini.com/families/herrera/",
              description: "Family hub for the Herrera line, organizing lineage, estates, symbols, distinctions, and research routes.",
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
                { "@type": "ListItem", position: 2, name: "Families", item: "https://herreravelutini.com/families/" },
                { "@type": "ListItem", position: 3, name: "Herrera Family", item: "https://herreravelutini.com/families/herrera/" },
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
                  <li><Link href="/" title="Home">Home</Link></li>
                  <li><Link href="/families/" title="Families">Families</Link></li>
                  <li aria-current="page">Herrera Family</li>
                </ol>
              </nav>
              <div className="eyebrow">Family hub</div>
              <h1>Herrera Family</h1>
              <p className="lede">
                The Herrera Family hub is the portal&apos;s first full family-reference page. It is designed to gather the major Herrera strands—lineage, estates, symbols, distinctions, and modern bridge figures—into one route that is easier to use than a dynasty list alone. The page does not replace the House of Herrera profile; it complements it by focusing on the family itself rather than on the source domain that presents it.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Page role</span>
                  <strong>Family hub for lineage, places, symbols, and research routes</strong>
                </li>
                <li>
                  <span>Core source clusters</span>
                  <strong>Dynasty, estates, symbols, distinctions, bibliography</strong>
                </li>
                <li>
                  <span>Best live companions</span>
                  <strong>House of Herrera, Heritage, Estates, Timeline</strong>
                </li>
                <li>
                  <span>Figure anchors</span>
                  <strong>Hernán, Pedro García, Diego García, Agustín, Juan Sarmiento, José Herrera Von Uslar</strong>
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
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="why-hub">
          <div className="container">
            <div className="overline">Portal architecture</div>
            <h2>Why the family hub exists</h2>
            <p className="lede">
              The House of Herrera profile explains the source domain. The Herrera Family hub explains the family record that readers are actually trying to understand.
            </p>
            <div className="media-split">
              <div>
                <p>
                  On the source domain, the Herrera material is divided into separate menus for dynasty, symbols, family estates, orders and distinctions, and bibliography. That structure is visually tidy, but it forces readers to assemble the family picture for themselves.
                </p>
                <p>
                  The family hub reverses that problem. It starts with the family as the organizing concept, then draws in the named figures, place layers, and symbolic material that make the record intelligible. In other words, it turns menu logic into subject logic.
                </p>
                <p>
                  That change is particularly useful for readers who arrive through search queries about a surname, a castle, a title, or a figure such as{" "}
                  <Link href="/entities/pedro-garcia-de-herrera-y-rojas/" title="Pedro García de Herrera y Rojas">Pedro García de Herrera y Rojas</Link>. Instead of landing on a narrow fragment, they get a page that maps the surrounding family context.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the Herrera family hub connected to lineage, estates, heraldry, figures, and sources."
                  loading="lazy"
                  src="/illustrations/family-hub-map.svg"
                  width={600}
                  height={400}
                />
                <figcaption>The family hub turns five separate content layers—lineage, estates, symbols, figure pages, and source notes—into one coherent route.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="lineage">
          <div className="container">
            <div className="overline">Named anchors</div>
            <h2>The lineage backbone</h2>
            <p className="lede">
              The current portal does not yet publish every figure in the dynasty sequence as a full entity page. It does, however, define the main backbone clearly enough to support expansion.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Figure</th>
                    <th>Date frame</th>
                    <th>Why it matters in the live portal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Link href="/entities/hernan-de-herrera-lord-of-ampudia/" title="Hernán de Herrera, Lord of Ampudia I">Hernán de Herrera, Lord of Ampudia I</Link></td>
                    <td>Circa 1355</td>
                    <td>Earliest named anchor in the dynasty sequence.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/pedro-garcia-de-herrera-y-rojas/" title="Pedro García de Herrera y Rojas">Pedro García de Herrera y Rojas</Link></td>
                    <td>1390–1455</td>
                    <td>One of the clearest early figures; described as Marshal of Castile on his short profile page.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/diego-garcia-de-herrera-y-ayala/" title="Diego García de Herrera y Ayala">Diego García de Herrera y Ayala</Link></td>
                    <td>c. 1417–1485</td>
                    <td>Connects the early Herrera sequence to the Canary Islands and Atlantic-facing memory.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín de Herrera y Rojas Ayala">Agustín de Herrera y Rojas Ayala</Link></td>
                    <td>House page says 1569–1632; title record 1567 / 1584</td>
                    <td>Important for the early-modern cluster linking titles, Lanzarote, and bibliography, but now best read through the title chronology rather than as a settled life frame.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" title="Juan Sarmiento de Herrera y Fernández Pacheco">Juan Sarmiento de Herrera y Fernández Pacheco</Link></td>
                    <td>1607–1664</td>
                    <td>Extends the sequence after Agustín and carries a visible source-name variant note.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/jose-herrera-von-uslar-gleichen/" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link></td>
                    <td>Circa 1906</td>
                    <td>Modern bridge figure linking the Herrera record to Caracas and the Clementina narrative.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-row" style={{ marginTop: "1.2rem" }}>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" className="button" title="Hernán de Herrera">Hernán de Herrera</Link>
              <Link href="/entities/pedro-garcia-de-herrera-y-rojas/" className="button-secondary" title="Pedro García de Herrera y Rojas">Pedro García</Link>
              <Link href="/entities/diego-garcia-de-herrera-y-ayala/" className="button-secondary" title="Diego García de Herrera y Ayala">Diego García</Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary" title="Agustín de Herrera y Rojas Ayala">Agustín de Herrera</Link>
              <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" className="button-secondary" title="Juan Sarmiento de Herrera y Fernández Pacheco">Juan Sarmiento</Link>
              <Link href="/places/ampudia/" className="button-secondary" title="Ampudia">Ampudia</Link>
              <Link href="/places/lanzarote/" className="button-secondary" title="Lanzarote">Lanzarote</Link>
            </div>
          </div>
        </section>

        <section className="section" id="places">
          <div className="container">
            <div className="overline">Geography and memory</div>
            <h2>How estates deepen the family record</h2>
            <p className="lede">The Herrera family is easiest to understand when its lineage is read alongside its places.</p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Caracas</div>
                <h3>Hacienda de La Vega</h3>
                <p>The estate provides the strongest Latin American place anchor for the family and ties lineage to the Caracas Valley, local memory, and later institutional references.</p>
              </article>
              <article className="callout">
                <div className="overline">Lanzarote</div>
                <h3>Castle Santa Barbara and titled memory</h3>
                <p>Lanzarote matters because it appears not only as a place but also through symbols and distinctions tied to the family record.</p>
              </article>
              <article className="callout">
                <div className="overline">Ampudia, Uslar, and Gleichen</div>
                <h3>Early and transnational place memory</h3>
                <p>Ampudia anchors the early lineage, while the new Uslar and Gleichen pages make the German branch geography legible through Freudenthal, heraldry, and castle memory.</p>
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

        <section className="section" id="symbols">
          <div className="container">
            <div className="overline">Identity layer</div>
            <h2>Symbols and distinctions are not decorative extras</h2>
            <p className="lede">
              The symbols and distinctions pages on House of Herrera do real interpretive work. They show how the family record expresses identity across branches, territories, and titled memory.
            </p>
            <p>
              The symbols page presents coats of arms for Herrera, Lanzarote, Uslar, Gleichen, and Velutini. Read together, these images show that the family record is not just a flat surname story; it is also a heraldic and branch-linked one. The distinctions page extends that idea through marquisates and titles associated with Herrera, Torre Casa, and Fuerteventura.
            </p>
            <p>
              For the family hub, that matters because it means identity is being expressed visually, geographically, and politically at the same time. A future page on heraldry and symbols will deepen this, but even now the family hub can point readers to where those layers become visible.
            </p>
            <p>
              <Link href="/entities/house-of-herrera/" title="House of Herrera">See the House of Herrera profile</Link> for the organization-level view of those materials.
            </p>
          </div>
        </section>

        <section className="section" id="modern">
          <div className="container">
            <div className="overline">Why the twentieth century matters</div>
            <h2>Modern continuity in the Herrera line</h2>
            <p className="lede">
              The modern Herrera story on this portal becomes clearest where the family record intersects with Caracas, the Uslar branch, and the Velutini profiles.
            </p>
            <div className="cards">
              <article className="card">
                <h3>José Herrera Von Uslar Gleichen</h3>
                <p>His source-domain profile makes him the most important currently live bridge figure on the Herrera side of the modern record.</p>
                <p><Link href="/entities/jose-herrera-von-uslar-gleichen/" title="José Herrera Von Uslar Gleichen">Open profile</Link></p>
              </article>
              <article className="card">
                <h3>Clementina connection</h3>
                <p>Clementina&apos;s Banvelca profile says that her 1932 marriage to José Herrera Von Uslar merged the two family narratives now being organized on this portal.</p>
                <p><Link href="/heritage/" title="Heritage">Read Heritage</Link></p>
              </article>
              <article className="card">
                <h3>Julio José Herrera Velutini</h3>
                <p>The Banvelca legacy sequence uses Julio José to frame the post-war movement of the family narrative into the Americas and later modern finance.</p>
                <p><Link href="/entities/julio-jose-herrera-velutini/" title="Julio José Herrera Velutini">Open profile</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="use-the-page">
          <div className="container">
            <div className="overline">Research routes</div>
            <h2>How to use the Herrera Family page</h2>
            <p className="lede">This hub is built to support several kinds of user journey.</p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Surname-led search</h3>
                <p>Start here if you searched for the Herrera family and want a structured overview rather than one isolated profile or estate page.</p>
              </article>
              <article className="card">
                <h3>Place-led discovery</h3>
                <p>Use the page as a route into Caracas, Lanzarote, Ampudia, Uslar, or Gleichen depending on which territorial layer you need first.</p>
              </article>
              <article className="card">
                <h3>Genealogy preparation</h3>
                <p>This hub now works as the quickest route into the live genealogy pages, especially for readers who need the ordered public sequence before they move into estate and bridge material.</p>
              </article>
              <article className="card">
                <h3>Source audit</h3>
                <p>Use the source-basis notes and the Sources page to see which source-domain pages currently support each major claim.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Herrera Family page</h2>
              <p className="muted">
                This family hub is a portal-built synthesis using the House of Herrera dynasty, symbol, estate, distinctions, bibliography, and selected short-profile pages, along with the modern bridge material surfaced on Banvelca.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the 14th-century prominence narrative, geographic scope, and the source-domain linkage between family history, Hacienda de La Vega, and later banking references.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">House of Herrera — Dynasty</Link> — Used for the ordered list of Herrera figures, date ranges, and the dynastic continuity framework.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i" rel="noopener external" title="House of Herrera — Hernán de Herrera, Lord of Ampudia I">House of Herrera — Hernán de Herrera, Lord of Ampudia I</Link> — Used for the sparse first-anchor profile and the circa 1355 Ampudia title frame.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala" rel="noopener external" title="House of Herrera — Diego García de Herrera y Ayala">House of Herrera — Diego García de Herrera y Ayala</Link> — Used for the early Herrera-to-Canary Islands bridge and the c. 1417–1485 source frame.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala" rel="noopener external" title="House of Herrera — Agustín de Herrera y Rojas Ayala">House of Herrera — Agustín de Herrera y Rojas Ayala</Link> — Used for the early-modern Lanzarote, title, Royal Council, and Atlantic-expansion profile.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa" rel="noopener external" title="House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego">House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego</Link> — Used for the 1607–1664 sequence anchor, La Vega / Montalban estate language, and source spelling note.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">House of Herrera — Symbols</Link> — Used for the set of coats of arms associated with Herrera, Lanzarote, Uslar, Gleichen, and Velutini.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen, Castle of Ampudia, Castle of Freudenthal, Uslar-Gleichen Castle, and other place-linked notes.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/orders-and-distinctions" rel="noopener external" title="House of Herrera — Orders and Distinctions">House of Herrera — Orders and Distinctions</Link> — Used for titles, distinctions, and the Lanzarote / Herrera / Torre Casa / Fuerteventura cluster.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/bibliography" rel="noopener external" title="House of Herrera — Bibliography">House of Herrera — Bibliography</Link> — Used for reading leads surfaced on the family domain, including Los Amos del Valle, Don Agustín de Herrera y Rojas, and La Vega.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas" rel="noopener external" title="House of Herrera — Pedro García de Herrera y Rojas">House of Herrera — Pedro García de Herrera y Rojas</Link> — Used for the short person profile describing him as a Castilian nobleman and Marshal of Castile.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen" rel="noopener external" title="House of Herrera — José Herrera Von Uslar Gleichen">House of Herrera — José Herrera Von Uslar Gleichen</Link> — Used for the short profile linking José Herrera Von Uslar Gleichen to law, public life, and humanitarian action.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 birth date, Paris education, 1932 marriage to José Herrera Von Uslar, and later leadership in banking and philanthropy.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Belén María Providencia Pérez Matos">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal connection between the Pérez-Matos, Velutini, and Herrera lines.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Julio José Herrera Velutini">Banvelca — Julio José Herrera Velutini</Link> — Used for the post-war family narrative and the shift into the Americas.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Herrera cluster</h2>
            <div className="button-row">
              <Link href="/entities/house-of-herrera/" className="button" title="House of Herrera">House of Herrera</Link>
              <Link href="/genealogy/herrera-lineage/" className="button-secondary" title="Herrera Lineage">Herrera Lineage</Link>
              <Link href="/entities/julio-jose-herrera-velutini/" className="button-secondary" title="Julio José Herrera Velutini">Julio José</Link>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" className="button-secondary" title="Hernán de Herrera, Lord of Ampudia I">Hernán</Link>
              <Link href="/entities/diego-garcia-de-herrera-y-ayala/" className="button-secondary" title="Diego García de Herrera y Ayala">Diego García</Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary" title="Agustín de Herrera y Rojas Ayala">Agustín</Link>
              <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" className="button-secondary" title="Juan Sarmiento de Herrera y Fernández Pacheco">Juan Sarmiento</Link>
              <Link href="/places/ampudia/" className="button-secondary" title="Ampudia">Ampudia</Link>
              <Link href="/places/lanzarote/" className="button-secondary" title="Lanzarote">Lanzarote</Link>
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