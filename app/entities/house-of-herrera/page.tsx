import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House of Herrera | History, Lineage, Estates & Symbols",
  description:
    "Organization profile for the House of Herrera as interpreted by the Herrera Velutini portal.",
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
    canonical: "/entities/house-of-herrera/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "House of Herrera | History, Lineage, Estates & Symbols",
    description:
      "Organization profile for the House of Herrera as interpreted by the Herrera Velutini portal.",
    url: "https://herreravelutini.com/entities/house-of-herrera/",
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
    title: "House of Herrera | History, Lineage, Estates & Symbols",
    description:
      "Organization profile for the House of Herrera as interpreted by the Herrera Velutini portal.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function HouseOfHerrera() {
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
              name: "House of Herrera | History, Lineage, Estates & Symbols",
              url: "https://herreravelutini.com/entities/house-of-herrera/",
              description:
                "Organization profile for the House of Herrera as interpreted by the Herrera Velutini portal.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Organization",
                name: "House of Herrera",
                url: "https://herreravelutini.com/entities/house-of-herrera/",
                sameAs: ["https://www.houseofherrera.com/"],
                description:
                  "A source-domain and family-history profile centered on dynastic sequence, estates, heraldry, distinctions, and bibliography.",
                knowsAbout: [
                  "Herrera dynasty",
                  "family estates",
                  "heraldry",
                  "orders and distinctions",
                  "bibliography",
                ],
                subjectOf: "https://www.houseofherrera.com/",
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
                  name: "House of Herrera",
                  item: "https://herreravelutini.com/entities/house-of-herrera/",
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
                  <li aria-current="page">House of Herrera</li>
                </ol>
              </nav>
              <div className="eyebrow">Organization profile</div>
              <h1>House of Herrera</h1>
              <p className="lede">
                On this portal, the House of Herrera is treated as both a family-historical subject
                and a source-domain framework. The public site organizes its material around
                dynasty, symbols, family estates, orders and distinctions, and bibliography. This
                profile page explains how those pieces fit together, where the material is
                strongest, and how readers should move from the organization-level framing to
                individual figures, places, and the broader Herrera family hub.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Dynastic house and source-domain framework</strong>
                </li>
                <li>
                  <span>Primary clusters</span>
                  <strong>Dynasty, estates, heraldry, distinctions, bibliography</strong>
                </li>
                <li>
                  <span>Strongest live routes</span>
                  <strong>
                    Heritage, Estates, Herrera Family, Hernán, Diego, Agustín, Juan Sarmiento,
                    José Herrera Von Uslar
                  </strong>
                </li>
                <li>
                  <span>Related domain</span>
                  <strong>
                    <Link href="https://www.houseofherrera.com/" rel="noopener external" title="houseofherrera.com">
                      houseofherrera.com
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
              <Link href="/editorial-desk" title="Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="Review Team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="what-this-profile-adds">
          <div className="container">
            <div className="overline">Portal function</div>
            <h2>What this profile adds</h2>
            <p className="lede">
              A reader arriving from search should not have to infer how the House of Herrera site
              is structured or which parts of it matter most. This profile page makes the internal
              logic explicit.
            </p>
            <div className="cards">
              <article className="card">
                <h3>It names the core clusters</h3>
                <p>
                  Dynasty, symbols, estates, distinctions, and bibliography are treated as
                  complementary parts of one subject rather than separate decorative tabs.
                </p>
              </article>
              <article className="card">
                <h3>It clarifies the source-domain voice</h3>
                <p>
                  The page explains when the portal is drawing on family-domain self-description
                  and when it is using a shorter person or estate page to ground the narrative.
                </p>
              </article>
              <article className="card">
                <h3>It creates research routes</h3>
                <p>
                  Readers can move directly from the organization-level profile to the family hub,
                  estate pages, and figure pages that deepen the record.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="public-framing">
          <div className="container">
            <div className="overline">Public narrative</div>
            <h2>How the source domain frames the House of Herrera</h2>
            <p className="lede">
              The House of Herrera site presents the family as a longstanding patrimony of Spanish
              nobility that gained prominence in the 14th century and later carried influence across
              Spain, the Canaries, Latin America, Germany, and England.
            </p>
            <p>
              That framing matters because it establishes the scale of the subject: the site does
              not describe a single estate or a single branch, but a long-running house with
              military, political, commercial, banking, and cultural associations across several
              regions. The portal retains that framing while organizing it more carefully.
            </p>
            <p>
              The organization-level profile therefore acts as a map. The{" "}
              <Link href="/heritage" title="Heritage">Heritage</Link> page handles the cross-family synthesis; the{" "}
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala" title="Herrera Family">Herrera Family</Link> hub
              handles the broader Herrera line; <Link href="/estates" title="Estates">Estates</Link> and specific
              place pages handle the spatial layer; and person pages such as{" "}
              <Link href="/entities/pedro-garcia-de-herrera-y-rojas" title="Pedro García de Herrera y Rojas">
                Pedro García de Herrera y Rojas
              </Link>
              ,{" "}
              <Link href="/entities/diego-garcia-de-herrera-y-ayala" title="Diego García de Herrera y Ayala">
                Diego García de Herrera y Ayala
              </Link>
              ,{" "}
              <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco" title="Juan Sarmiento de Herrera y Fernández Pacheco">
                Juan Sarmiento de Herrera y Fernández Pacheco
              </Link>
              , and{" "}
              <Link href="/entities/jose-herrera-von-uslar-gleichen" title="José Herrera Von Uslar Gleichen">
                José Herrera Von Uslar Gleichen
              </Link>{" "}
              give the record individual anchors.
            </p>
          </div>
        </section>

        <section className="section" id="clusters">
          <div className="container">
            <div className="overline">What readers should use first</div>
            <h2>The strongest clusters inside the House of Herrera record</h2>
            <p className="lede">
              The organization profile is most useful when it points readers to the parts of the
              record that carry the most distinct information.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Dynasty</h3>
                <p>
                  The dynasty page provides the ordered Herrera sequence from Hernán de Herrera
                  through Julio José Herrera Velutini.
                </p>
                <div className="tag-row">
                  <span className="tag">Names</span>
                  <span className="tag">Dates</span>
                </div>
                <p><Link href="/timeline" title="See Timeline">See Timeline</Link></p>
              </article>
              <article className="card">
                <h3>Symbols</h3>
                <p>
                  The symbols page shows the coats of arms associated with Herrera, Lanzarote,
                  Uslar, Gleichen, and Velutini.
                </p>
                <div className="tag-row">
                  <span className="tag">Heraldry</span>
                  <span className="tag">Identity</span>
                </div>
                <p><Link href="/themes/heraldry-and-symbols" title="Open theme page">Open theme page</Link></p>
              </article>
              <article className="card">
                <h3>Estates</h3>
                <p>
                  The estates page grounds the family record in Caracas, Lanzarote, Ampudia, and
                  Germany.
                </p>
                <div className="tag-row">
                  <span className="tag">Place</span>
                  <span className="tag">Memory</span>
                </div>
                <p><Link href="/estates" title="Open Estates">Open Estates</Link></p>
              </article>
              <article className="card">
                <h3>Orders and distinctions</h3>
                <p>
                  The distinctions material connects titles and marquisates to the wider symbolic
                  geography of Lanzarote and Herrera memory.
                </p>
                <div className="tag-row">
                  <span className="tag">Titles</span>
                  <span className="tag">Distinctions</span>
                </div>
                <p><Link href="/themes/orders-and-distinctions" title="Open theme page">Open theme page</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="figures">
          <div className="container">
            <div className="overline">Selected people</div>
            <h2>Figure anchors inside the Herrera record</h2>
            <p className="lede">
              Not every named person in the dynasty sequence currently has a full portal page, but
              several figures already act as key anchors for future expansion.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Medieval anchor</div>
                <h3>Hernán de Herrera</h3>
                <p>
                  The dynasty page begins with Hernán de Herrera, giving the portal its earliest
                  named anchor and a live entry point for Ampudia lineage work.
                </p>
                <p>
                  <Link href="/entities/hernan-de-herrera-lord-of-ampudia" title="Open Hernán">Open Hernán</Link>
                </p>
              </article>
              <article className="callout">
                <div className="overline">Early power node</div>
                <h3>Pedro García de Herrera y Rojas</h3>
                <p>
                  Because he has a short source-domain profile and a clearer role description,
                  Pedro is one of the best early figures for an entity-led reading route.
                </p>
                <p>
                  <Link href="/entities/pedro-garcia-de-herrera-y-rojas" title="Open Pedro García">Open Pedro García</Link>
                </p>
              </article>
              <article className="callout">
                <div className="overline">Canary Islands bridge</div>
                <h3>Diego García de Herrera y Ayala</h3>
                <p>
                  Diego gives the early sequence an Atlantic-facing turn through the source-domain
                  Canary Islands profile.
                </p>
                <p>
                  <Link href="/entities/diego-garcia-de-herrera-y-ayala" title="Open Diego García">Open Diego García</Link>
                </p>
              </article>
              <article className="callout">
                <div className="overline">Early-modern title route</div>
                <h3>Agustín de Herrera y Rojas Ayala</h3>
                <p>
                  Agustín connects the dynasty sequence to Lanzarote, title memory, Royal Council
                  language, and the Atlantic-facing Herrera layer.
                </p>
                <p>
                  <Link href="/entities/agustin-de-herrera-y-rojas-ayala" title="Open Agustín">Open Agustín</Link>
                </p>
              </article>
              <article className="callout">
                <div className="overline">Seventeenth-century sequence</div>
                <h3>Juan Sarmiento de Herrera y Fernández Pacheco</h3>
                <p>
                  Juan extends the sequence after Agustín and gives the portal a place to label the
                  source-domain Pachego / Fernadez spelling variant.
                </p>
                <p>
                  <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco" title="Open Juan Sarmiento">
                    Open Juan Sarmiento
                  </Link>
                </p>
              </article>
              <article className="callout">
                <div className="overline">Modern bridge figure</div>
                <h3>José Herrera Von Uslar Gleichen</h3>
                <p>
                  His profile matters because it links public life, the Uslar branch, and later
                  Caracas family connections relevant to the Clementina narrative.
                </p>
                <p>
                  <Link href="/entities/jose-herrera-von-uslar-gleichen" title="Open José Herrera Von Uslar">
                    Open José Herrera Von Uslar
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="why-reorganize">
          <div className="container">
            <div className="overline">Why the portal reorganizes the material</div>
            <h2>Estates, symbols, and distinctions work better together than apart</h2>
            <p className="lede">
              On the source domain, these elements live on separate pages. On the portal, they
              become a more coherent interpretive set.
            </p>
            <p>
              Castle Santa Barbara is easier to understand when it is read with Lanzarote heraldry
              and distinctions. Hacienda de La Vega becomes more meaningful when it sits inside the
              Caracas and banking memory layer. Ampudia becomes stronger when tied to early-lineage
              figures. By reorganizing the material this way, the portal creates pages that are more
              useful than isolated lists of titles or uncontextualized image galleries.
            </p>
            <p>
              The live{" "}
              <Link href="/themes/heraldry-and-symbols" title="Heraldry and Symbols">Heraldry and Symbols</Link> and{" "}
              <Link href="/themes/orders-and-distinctions" title="Orders and Distinctions">Orders and Distinctions</Link> pages now
              make that logic explicit by pulling the symbolic and titled material into a readable
              subject layer.
            </p>
            <p>
              This is the core logic of the entity-first architecture: a reader should leave the
              House of Herrera profile knowing which figures, places, and subtopics deserve a closer
              look next.
            </p>
          </div>
        </section>

        <section className="section" id="research-use">
          <div className="container">
            <div className="overline">Reading the profile responsibly</div>
            <h2>Research use and caution</h2>
            <p className="lede">
              The House of Herrera profile is strong as a family-domain map. It is less strong as a
              complete standalone historical apparatus. The portal therefore labels it as a
              source-domain framework and pushes readers toward its most concrete supporting pages.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Use it for orientation</h3>
                <p>
                  Start here when you need the big picture: what the Herrera material covers, which
                  pages matter most, and where the portal adds structure.
                </p>
              </article>
              <article className="card">
                <h3>Use profile and estate pages for detail</h3>
                <p>
                  When you need dates, places, or more grounded narrative, move from the
                  organization profile to the corresponding figure or place page.
                </p>
              </article>
              <article className="card">
                <h3>Expect the portal to expand this layer</h3>
                <p>
                  Future work will deepen the Herrera record through genealogy pages, additional
                  biographies, and dedicated place dossiers.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the House of Herrera profile</h2>
              <p className="muted">
                This profile interprets the structure of the House of Herrera domain and uses its
                dynasty, symbol, estate, distinction, bibliography, and short profile pages as raw
                material.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/" rel="noopener external" title="House of Herrera — Home">
                    House of Herrera — Home
                  </Link>{" "}
                  — Used for the overall framing of the House of Herrera as a long-running noble
                  patrimony with sections for dynasty, symbols, estates, orders, and bibliography.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the 14th-century prominence narrative, geographic scope, and the
                  source-domain linkage between family history, Hacienda de La Vega, and later
                  banking references.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for the ordered list of Herrera figures, date ranges, and the dynastic
                  continuity framework.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i"
                    rel="noopener external"
                    title="House of Herrera — Hernán de Herrera, Lord of Ampudia I"
                  >
                    House of Herrera — Hernán de Herrera, Lord of Ampudia I
                  </Link>{" "}
                  — Used for the sparse first-anchor profile and the Ampudia title frame.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                    title="House of Herrera — Agustín de Herrera y Rojas Ayala"
                  >
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used for the early-modern Lanzarote, Royal Council, title-memory, and Latin
                  America expansion profile.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala"
                    rel="noopener external"
                    title="House of Herrera — Diego García de Herrera y Ayala"
                  >
                    House of Herrera — Diego García de Herrera y Ayala
                  </Link>{" "}
                  — Used for the Canary Islands bridge and the c. 1417–1485 source profile.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa"
                    rel="noopener external"
                    title="House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego"
                  >
                    House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego
                  </Link>{" "}
                  — Used for the 1607–1664 sequence point, estate language, and visible source-name
                  variant.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used for the set of coats of arms associated with Herrera, Lanzarote, Uslar,
                  Gleichen, and Velutini.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen, Castle
                  of Ampudia, and other place-linked notes.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/orders-and-distinctions"
                    rel="noopener external"
                    title="House of Herrera — Orders and Distinctions"
                  >
                    House of Herrera — Orders and Distinctions
                  </Link>{" "}
                  — Used for titles, distinctions, and the Lanzarote / Herrera / Torre Casa /
                  Fuerteventura cluster.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/bibliography" rel="noopener external" title="House of Herrera — Bibliography">
                    House of Herrera — Bibliography
                  </Link>{" "}
                  — Used for reading leads surfaced on the family domain, including Los Amos del
                  Valle, Don Agustín de Herrera y Rojas, and La Vega.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas"
                    rel="noopener external"
                    title="House of Herrera — Pedro García de Herrera y Rojas"
                  >
                    House of Herrera — Pedro García de Herrera y Rojas
                  </Link>{" "}
                  — Used for the short person profile describing him as a Castilian nobleman and
                  Marshal of Castile.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen"
                    rel="noopener external"
                    title="House of Herrera — José Herrera Von Uslar Gleichen"
                  >
                    House of Herrera — José Herrera Von Uslar Gleichen
                  </Link>{" "}
                  — Used for the short profile linking José Herrera Von Uslar Gleichen to law,
                  public life, and humanitarian action.
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
              <Link href="/families/herrera" className="button" title="Herrera Family">
                Herrera Family
              </Link>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia" className="button-secondary" title="Hernán">
                Hernán
              </Link>
              <Link href="/entities/diego-garcia-de-herrera-y-ayala" className="button-secondary" title="Diego García">
                Diego García
              </Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala" className="button-secondary" title="Agustín">
                Agustín
              </Link>
              <Link
                href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco"
                className="button-secondary"
                title="Juan Sarmiento"
              >
                Juan Sarmiento
              </Link>
              <Link href="/themes/heraldry-and-symbols" className="button-secondary" title="Heraldry and Symbols">
                Heraldry and Symbols
              </Link>
              <Link href="/themes/orders-and-distinctions" className="button-secondary" title="Orders and Distinctions">
                Orders and Distinctions
              </Link>
              <Link href="/estates" className="button-secondary" title="Estates">
                Estates
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