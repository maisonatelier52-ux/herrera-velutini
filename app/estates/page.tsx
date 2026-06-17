import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estates | Hacienda de La Vega, Castles & Family Places",
  description:
    "A place-first atlas of the estates and symbolic locations that shape the Herrera and Velutini record.",
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
    canonical: "/estates/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Estates | Hacienda de La Vega, Castles & Family Places",
    description:
      "A place-first atlas of the estates and symbolic locations that shape the Herrera and Velutini record.",
    url: "https://herreravelutini.com/estates/",
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
    title: "Estates | Hacienda de La Vega, Castles & Family Places",
    description:
      "A place-first atlas of the estates and symbolic locations that shape the Herrera and Velutini record.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function Estates() {
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
              headline: "Estates | Hacienda de La Vega, Castles & Family Places",
              description: "A place-first atlas of the estates and symbolic locations that shape the Herrera and Velutini record.",
              datePublished: "2026-04-17",
              dateModified: "2026-04-23",
              author: { "@type": "Organization", "@id": "https://herreravelutini.com/editorial-desk/#org", name: "Herrera Velutini Editorial Desk" },
              editor: { "@type": "Organization", "@id": "https://herreravelutini.com/review-team/#org", name: "Standards Review Team" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              mainEntityOfPage: "https://herreravelutini.com/estates/",
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
                { "@type": "ListItem", position: 2, name: "Estates", item: "https://herreravelutini.com/estates/" },
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
                  <li aria-current="page">Estates</li>
                </ol>
              </nav>
              <div className="eyebrow">Place and estate atlas</div>
              <h1>Estates</h1>
              <p className="lede">
                The estate layer is where the family record becomes physical. Instead of reading the Herrera and Velutini narratives only as names and generations, this page turns them into a geography of haciendas, castles, capitals, and symbolic places. In the first publishing wave, Caracas and Lanzarote matter most, but the site also tracks Ampudia and the German estate cluster because those places help explain how lineage, heraldry, and titles are remembered across time.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Best-known place</span>
                  <strong>Hacienda de La Vega in Caracas</strong>
                </li>
                <li>
                  <span>Title-linked place</span>
                  <strong>Castle Santa Barbara and Lanzarote</strong>
                </li>
                <li>
                  <span>Memory layer</span>
                  <strong>Ampudia, Paris, and the German branch cluster</strong>
                </li>
                <li>
                  <span>Related pages</span>
                  <strong>
                    <Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Hacienda de La Vega</Link>{" "}·{" "}
                    <Link href="/entities/castle-santa-barbara/" title="Castle Santa Barbara">Castle Santa Barbara</Link>
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
              <time dateTime="2026-04-23">April 23, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="why-estates-matter">
          <div className="container">
            <div className="overline">Place makes lineage legible</div>
            <h2>Why the estates matter</h2>
            <p className="lede">
              Family history becomes easier to understand when names are attached to landscapes, fortifications, and urban memory. The estate layer also helps the portal avoid generic prose by grounding pages in concrete locations.
            </p>
            <div className="media-split">
              <div>
                <p>
                  In the current source base, the House of Herrera estate material does most of this work. It moves from Caracas to Lanzarote, Palencia, and several German sites, giving the record a spatial frame that complements the dynasty page. That matters because estates are often the point where titles, heraldry, lineage, and local history intersect.
                </p>
                <p>
                  The portal therefore treats estate pages as more than visual galleries. They are reference anchors. A reader who starts with{" "}
                  <Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Hacienda de La Vega</Link> should be able to move to Caracas, family figures, source notes, and timeline entries. A reader who starts with{" "}
                  <Link href="/entities/castle-santa-barbara/" title="Castle Santa Barbara">Castle Santa Barbara</Link> should be able to understand why Lanzarote, symbols, and distinctions keep appearing in the wider Herrera record.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Illustration representing an atlas of family estates and places."
                  loading="lazy"
                  src="/illustrations/estate-atlas.svg"
                  width={600}
                  height={400}
                />
                <figcaption>The estate layer turns abstract family history into a map of places, buildings, symbols, and memory.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="current-atlas">
          <div className="container">
            <div className="overline">Current atlas</div>
            <h2>The core estate set in the first publishing wave</h2>
            <p className="lede">These are the places doing the heaviest interpretive work in the live portal.</p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Region</th>
                    <th>Primary place</th>
                    <th>Main source cluster</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Caracas</td>
                    <td>Hacienda de La Vega</td>
                    <td>House of Herrera estate page</td>
                    <td>Oldest-hacienda framing, later Jorge Uslar acquisition note, cultural landmark status.</td>
                  </tr>
                  <tr>
                    <td>Lanzarote</td>
                    <td>Castle Santa Barbara</td>
                    <td>House of Herrera estate and symbols pages</td>
                    <td>Fortification, titled memory, and Lanzarote heraldic context.</td>
                  </tr>
                  <tr>
                    <td>Palencia</td>
                    <td>Castle of Ampudia</td>
                    <td>House of Herrera family-estates page</td>
                    <td>Early lineage place memory tied to Pedro García Herrera and the Ampudia manor.</td>
                  </tr>
                  <tr>
                    <td>Germany</td>
                    <td>Gleichen / Uslar / Freudenthal cluster</td>
                    <td>House of Herrera family-estates and symbols pages</td>
                    <td>Shows the transnational estate-memory layer associated with the broader family record.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="caracas">
          <div className="container">
            <div className="overline">The strongest place anchor</div>
            <h2>Caracas and Hacienda de La Vega</h2>
            <p className="lede">
              Among all the current place references, Hacienda de La Vega is the most effective bridge between family history, local memory, and later institutional narratives.
            </p>
            <p>
              The House of Herrera estate page describes Hacienda de La Vega as a historical monument in Caracas and one of the family&apos;s earliest Latin American properties. It also says the estate later became a cultural and social landmark and notes that Jorge Uslar acquired it in 1899 after an agreement with Banco de Caracas. On the portal, that makes Hacienda de La Vega more than a backdrop. It becomes a place where estate memory, the Caracas Valley, the Uslar branch, and the banking narrative start to touch each other.
            </p>
            <p>
              That is why the portal already gives the estate its own entity page and now extends the place network outward to the live Caracas and Banco Caracas pages. That makes the estate layer much richer than abstract lineage alone because readers can move directly from the hacienda to the city and institution that surround it.
            </p>
            <p><Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Open the Hacienda de La Vega entity page</Link></p>
          </div>
        </section>

        <section className="section" id="lanzarote">
          <div className="container">
            <div className="overline">Titles, heraldry, and island memory</div>
            <h2>Lanzarote and Castle Santa Barbara</h2>
            <p className="lede">
              The Lanzarote material matters because it ties military architecture, titled memory, and heraldic symbolism together in one cluster.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Fortification</div>
                <h3>A watchpoint over Teguise</h3>
                <p>The House of Herrera estate page presents Castle Santa Barbara as the oldest fortification on Lanzarote, tied to the protection of the island&apos;s historic capital.</p>
              </article>
              <article className="callout">
                <div className="overline">Symbolic geography</div>
                <h3>Lanzarote reappears beyond the estate page</h3>
                <p>The island is not just a place name. It also appears in the symbols page and the distinctions cluster, which makes it central to understanding titled and heraldic memory.</p>
              </article>
              <article className="callout">
                <div className="overline">Why the portal keeps it prominent</div>
                <h3>A concrete route into abstract family language</h3>
                <p>For readers who encounter Lanzarote through titles or coats of arms first, the castle page gives them an actual location to study.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="ampudia-and-germany">
          <div className="container">
            <div className="overline">Place memory beyond the Atlantic</div>
            <h2>Ampudia and the German castle cluster</h2>
            <p className="lede">
              Not every estate in the source domains serves the same purpose. Some act as deep historical anchors, while others signal the transnational breadth of the family record.
            </p>
            <p>
              Castle of Ampudia gives the portal an early Castilian anchor associated with Pedro García Herrera and the manor of Ampudia. The German references—Gleichen, Freudenthal, and Uslar-Gleichen—serve a different role. They reinforce the idea that the family record, at least as presented on the source domains, is not confined to Iberia and Latin America. It also carries a central-European memory layer expressed through estate names, heraldic symbols, and later compound surnames.
            </p>
            <p>
              Ampudia, Uslar, and Gleichen now all have live place pages, which lets the early Castilian and German branch chapters stand on their own. The new{" "}
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" title="Hernán de Herrera">Hernán de Herrera</Link> profile also gives Ampudia a direct person-level opening anchor, while{" "}
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín de Herrera y Rojas Ayala">Agustín de Herrera y Rojas Ayala</Link> gives Lanzarote a stronger early-modern person route. Freudenthal remains folded into the Uslar dossier, where the town chronology, branch heraldry, and castle-memory layer are easier to read together.
            </p>
          </div>
        </section>

        <section className="section" id="next-up">
          <div className="container">
            <div className="overline">Live place network</div>
            <h2>The estates atlas now routes into dedicated place pages</h2>
            <p className="lede">
              The place network is now deeper and clearer: city bridge, origin city, Europe bridge, symbolic island, early Castilian anchor, and the two-page German branch cluster all have their own destinations.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Caracas</h3>
                <p>The dossier connects Hacienda de La Vega, Banco Caracas, Clementina, Belén Clarisa, and local cultural geography in one page.</p>
                <p><Link href="/places/caracas/" title="Caracas">Open Caracas</Link></p>
              </article>
              <article className="card">
                <h3>Naples</h3>
                <p>The place page gives the Banvelca and Velutini record a real founding geography instead of a floating origin story.</p>
                <p><Link href="/places/naples/" title="Naples">Open Naples</Link></p>
              </article>
              <article className="card">
                <h3>Paris</h3>
                <p>The Europe bridge page connects Clementina&apos;s Paris education to Banvelca&apos;s later operating geography.</p>
                <p><Link href="/places/paris/" title="Paris">Open Paris</Link></p>
              </article>
              <article className="card">
                <h3>Lanzarote</h3>
                <p>The island dossier connects Castle Santa Barbara, heraldry, and the Agustín / Marquisate of Lanzarote title-memory cluster.</p>
                <p><Link href="/places/lanzarote/" title="Lanzarote">Open Lanzarote</Link></p>
              </article>
              <article className="card">
                <h3>Ampudia</h3>
                <p>The early-lineage place page now links Hernán, Pedro García, and the Castilian territorial anchor.</p>
                <p><Link href="/places/ampudia/" title="Ampudia">Open Ampudia</Link></p>
              </article>
              <article className="card">
                <h3>Uslar</h3>
                <p>The branch dossier makes Freudenthal, the Uslar coat of arms, and German town memory legible together.</p>
                <p><Link href="/places/uslar/" title="Uslar">Open Uslar</Link></p>
              </article>
              <article className="card">
                <h3>Gleichen</h3>
                <p>The castle-memory page explains the Drei Gleichen landscape and the Uslar-Gleichen layer.</p>
                <p><Link href="/places/gleichen/" title="Gleichen">Open Gleichen</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Estates page</h2>
              <p className="muted">
                The estates atlas is built primarily from House of Herrera&apos;s estate, symbol, and distinctions material, with Banvelca references added where Caracas or later family memory helps contextualize the place layer.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen, Castle of Ampudia, Castle of Freudenthal, Uslar-Gleichen Castle, and other place-linked notes.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">House of Herrera — Symbols</Link> — Used for the set of coats of arms associated with Herrera, Lanzarote, Uslar, Gleichen, and Velutini.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/orders-and-distinctions" rel="noopener external" title="House of Herrera — Orders and Distinctions">House of Herrera — Orders and Distinctions</Link> — Used for titles, distinctions, and the Lanzarote / Herrera / Torre Casa / Fuerteventura cluster.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i" rel="noopener external" title="House of Herrera — Hernán de Herrera, Lord of Ampudia I">House of Herrera — Hernán de Herrera, Lord of Ampudia I</Link> — Used for the direct Ampudia figure anchor now connected to the estates layer.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala" rel="noopener external" title="House of Herrera — Agustín de Herrera y Rojas Ayala">House of Herrera — Agustín de Herrera y Rojas Ayala</Link> — Used for the person-level Lanzarote and title-memory route.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/bibliography" rel="noopener external" title="House of Herrera — Bibliography">House of Herrera — Bibliography</Link> — Used for reading leads surfaced on the family domain, including Los Amos del Valle, Don Agustín de Herrera y Rojas, and La Vega.
                </li>
                <li>
                  <Link href="/sources/#external-corroboration" title="Sources — external corroboration table">Sources — external corroboration table</Link> — Used as the central roll-up for institutional and local place references now attached to the estates and place-memory pages.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the 14th-century prominence narrative, geographic scope, and the source-domain linkage between family history, Hacienda de La Vega, and later banking references.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link> — Used for the chronological ancestor timeline spanning Juan Bautista through later generations, including Banco Caracas, Clementina, Belén Clarisa, Julio José, and later generations.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 birth date, Paris education, 1932 marriage to José Herrera Von Uslar, and later leadership in banking and philanthropy.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external" title="Banvelca — Belén Clarisa Velutini Pérez-Matos">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for the 1924–2023 dates, Banco Caracas management, Trasnocho Cultural, and Fundación Centro El Portal.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external" title="Banvelca — Belén María Providencia Pérez Matos">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal connection between the Pérez-Matos, Velutini, and Herrera lines.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue into estate and place profiles</h2>
            <div className="button-row">
              <Link href="/entities/hacienda-de-la-vega/" className="button" title="Hacienda de La Vega">Hacienda de La Vega</Link>
              <Link href="/entities/castle-santa-barbara/" className="button-secondary" title="Castle Santa Barbara">Castle Santa Barbara</Link>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" className="button-secondary" title="Hernán de Herrera">Hernán</Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary" title="Agustín de Herrera y Rojas Ayala">Agustín</Link>
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