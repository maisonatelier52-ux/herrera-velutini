import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entities | Organizations, Places & Public Figures",
  description:
    "The portal's entity hub linking the strongest profile pages for organizations, places, and public figures.",
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
    canonical: "/entities/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Entities | Organizations, Places & Public Figures",
    description:
      "The portal's entity hub linking the strongest profile pages for organizations, places, and public figures.",
    url: "https://herreravelutini.com/entities/",
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
    title: "Entities | Organizations, Places & Public Figures",
    description:
      "The portal's entity hub linking the strongest profile pages for organizations, places, and public figures.",
    images: ["/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-25",
  },
};

export default function EntitiesHub() {
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
                "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
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
                "Hacienda de La Vega",
                "Castle Santa Barbara",
                "family history",
                "heritage research",
                "stewardship",
                "cultural patronage",
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
                "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
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
              name: "Entity Hub",
              url: "https://herreravelutini.com/entities/",
              description:
                "The portal's entity hub linking the strongest profile pages for organizations, places, and public figures.",
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
              "@type": "ItemList",
              itemListElement: [
                { "@type": "ListItem", position: 1, url: "https://herreravelutini.com/entities/house-of-herrera/", name: "House of Herrera" },
                { "@type": "ListItem", position: 2, url: "https://herreravelutini.com/entities/banvelca-company/", name: "Banvelca & Company" },
                { "@type": "ListItem", position: 3, url: "https://herreravelutini.com/entities/hacienda-de-la-vega/", name: "Hacienda de La Vega" },
                { "@type": "ListItem", position: 4, url: "https://herreravelutini.com/entities/castle-santa-barbara/", name: "Castle Santa Barbara" },
                { "@type": "ListItem", position: 5, url: "https://herreravelutini.com/entities/banco-caracas/", name: "Banco Caracas" },
                { "@type": "ListItem", position: 6, url: "https://herreravelutini.com/entities/hernan-de-herrera-lord-of-ampudia/", name: "Hernán de Herrera, Lord of Ampudia I" },
                { "@type": "ListItem", position: 7, url: "https://herreravelutini.com/entities/pedro-garcia-de-herrera-y-rojas/", name: "Pedro García de Herrera y Rojas" },
                { "@type": "ListItem", position: 8, url: "https://herreravelutini.com/entities/diego-garcia-de-herrera-y-ayala/", name: "Diego García de Herrera y Ayala" },
                { "@type": "ListItem", position: 9, url: "https://herreravelutini.com/entities/agustin-de-herrera-y-rojas-ayala/", name: "Agustín de Herrera y Rojas Ayala" },
                { "@type": "ListItem", position: 10, url: "https://herreravelutini.com/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/", name: "Juan Sarmiento de Herrera y Fernández Pacheco" },
                { "@type": "ListItem", position: 11, url: "https://herreravelutini.com/entities/jose-herrera-von-uslar-gleichen/", name: "José Herrera Von Uslar Gleichen" },
                { "@type": "ListItem", position: 12, url: "https://herreravelutini.com/entities/juan-bautista-velutini/", name: "Juan Bautista Velutini" },
                { "@type": "ListItem", position: 13, url: "https://herreravelutini.com/entities/vicente-jose-velutini-llarione/", name: "Vicente José Velutini Llarione" },
                { "@type": "ListItem", position: 14, url: "https://herreravelutini.com/entities/jose-antonio-velutini-ron/", name: "José Antonio Velutini Ron" },
                { "@type": "ListItem", position: 15, url: "https://herreravelutini.com/entities/julio-cesar-velutini-couturier/", name: "Julio César Velutini Couturier" },
                { "@type": "ListItem", position: 16, url: "https://herreravelutini.com/entities/julio-jose-herrera-velutini/", name: "Julio José Herrera Velutini" },
                { "@type": "ListItem", position: 17, url: "https://herreravelutini.com/entities/belen-maria-providencia-perez-matos/", name: "Belén María Providencia Pérez Matos" },
                { "@type": "ListItem", position: 18, url: "https://herreravelutini.com/entities/clementina-velutini-perez-matos/", name: "Clementina Velutini Pérez-Matos" },
                { "@type": "ListItem", position: 19, url: "https://herreravelutini.com/entities/belen-clarisa-velutini-perez-matos/", name: "Belén Clarisa Velutini Pérez-Matos" },
              ],
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
                { "@type": "ListItem", position: 2, name: "Entities", item: "https://herreravelutini.com/entities/" },
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
                  <li aria-current="page" title="View the Entities page">Entities</li>
                </ol>
              </nav>
              <div className="eyebrow">Entity hub</div>
              <h1>The portal’s strongest pages, organized by durable search entities.</h1>
              <p className="lede">
                The portal invests in durable subjects: organizations, places, and selected public figures that already matter within the public record. Each entity page adds context, visible dates, related-page links, and a concise source basis rather than forcing readers to reconstruct that information from separate menus.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity library</span>
                  <strong>19 live pages across organizations, institutions, places, and people</strong>
                </li>
                <li>
                  <span>Best for</span>
                  <strong>Direct search entry points</strong>
                </li>
                <li>
                  <span>Schema</span>
                  <strong>ProfilePage and AboutPage</strong>
                </li>
                <li>
                  <span>Maintenance</span>
                  <strong>Cluster-linked and source-traced</strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk/" title="View the Editorial Desk page">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/" title="View the Review Team page">Standards Review Team</Link>
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

        <section className="section">
          <div className="container media-split">
            <div>
              <div className="overline">Why entities matter</div>
              <h2>Entity pages give the site a stable knowledge backbone.</h2>
              <p className="lede">
                A strong portal does not rely only on generic &quot;about&quot; pages. It also builds pages around durable entities that people search for by name. On this site, those entities include five organization, institution, and place anchors plus fourteen figures whose public profiles help readers move across periods, geographies, and themes.
              </p>
            </div>
            <div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram grouping organizations, places, and people into an entity library."
                  decoding="async"
                  loading="lazy"
                  src="/illustrations/entity-grid.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  Original entity-library diagram explaining the logic behind the portal&apos;s highest-value pages.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Entity library</div>
            <h2>Profile pages</h2>
            <div className="cards cards-four" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <div className="timeline-stamp">Organization</div>
                <h3>House of Herrera</h3>
                <p>The dynastic framework used to organize titles, heraldry, estates, and historical figures.</p>
                <div className="tag-row">
                  <span className="tag">Heritage</span>
                  <span className="tag">Dynasty</span>
                </div>
                <p><Link href="/entities/house-of-herrera/" title="View the House of Herrera page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Organization</div>
                <h3>Banvelca &amp; Company</h3>
                <p>The stewardship institution whose pages frame a private family-office model rooted in Naples in 1781.</p>
                <div className="tag-row">
                  <span className="tag">Stewardship</span>
                  <span className="tag">Finance</span>
                </div>
                <p><Link href="/entities/banvelca-company/" title="View the Banvelca & Company page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Place</div>
                <h3>Hacienda de La Vega</h3>
                <p>A place page for the Caracas estate that anchors the record in public memory and architecture.</p>
                <div className="tag-row">
                  <span className="tag">Caracas</span>
                  <span className="tag">Estate</span>
                </div>
                <p><Link href="/entities/hacienda-de-la-vega/" title="View the Hacienda de La Vega page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Place</div>
                <h3>Castle Santa Barbara</h3>
                <p>A Lanzarote fortification page that connects the record to place, title, and defense history.</p>
                <div className="tag-row">
                  <span className="tag">Lanzarote</span>
                  <span className="tag">Estate</span>
                </div>
                <p><Link href="/entities/castle-santa-barbara/" title="View the Castle Santa Barbara page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Institution</div>
                <h3>Banco Caracas</h3>
                <p>An institution page explaining how Banco Caracas operates inside the public family record.</p>
                <div className="tag-row">
                  <span className="tag">Finance</span>
                  <span className="tag">Caracas</span>
                </div>
                <p><Link href="/entities/banco-caracas/" title="View the Banco Caracas page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Hernán de Herrera, Lord of Ampudia I</h3>
                <p>The earliest named anchor in the published House of Herrera dynasty sequence.</p>
                <div className="tag-row">
                  <span className="tag">Ampudia</span>
                  <span className="tag">Medieval</span>
                </div>
                <p><Link href="/entities/hernan-de-herrera-lord-of-ampudia/" title="View the Hernán de Herrera, Lord of Ampudia I page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Pedro García de Herrera y Rojas</h3>
                <p>A medieval anchor page for one of the earliest clearly named figures in the House record.</p>
                <div className="tag-row">
                  <span className="tag">Medieval</span>
                  <span className="tag">Castile</span>
                </div>
                <p><Link href="/entities/pedro-garcia-de-herrera-y-rojas/" title="View the Pedro García de Herrera y Rojas page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Diego García de Herrera y Ayala</h3>
                <p>An Atlantic-facing Herrera profile linking the early sequence to Canary Islands command and family stature.</p>
                <div className="tag-row">
                  <span className="tag">Canaries</span>
                  <span className="tag">Lineage</span>
                </div>
                <p><Link href="/entities/diego-garcia-de-herrera-y-ayala/" title="View the Diego García de Herrera y Ayala page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Agustín de Herrera y Rojas Ayala</h3>
                <p>An early-modern profile linking Lanzarote, title memory, Crown service, and Atlantic expansion.</p>
                <div className="tag-row">
                  <span className="tag">Lanzarote</span>
                  <span className="tag">Titles</span>
                </div>
                <p><Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="View the Agustín de Herrera y Rojas Ayala page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Juan Sarmiento de Herrera y Fernández Pacheco</h3>
                <p>A seventeenth-century sequence page tied to Agustín, La Vega, Montalban, and source-name variation.</p>
                <div className="tag-row">
                  <span className="tag">Sequence</span>
                  <span className="tag">Source note</span>
                </div>
                <p><Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/" title="View the Juan Sarmiento de Herrera y Fernández Pacheco page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>José Herrera Von Uslar Gleichen</h3>
                <p>A diplomatic bridge page connecting titles, public service, and later twentieth-century humanitarian action.</p>
                <div className="tag-row">
                  <span className="tag">Diplomacy</span>
                  <span className="tag">Humanitarian</span>
                </div>
                <p><Link href="/entities/jose-herrera-von-uslar-gleichen/" title="View the José Herrera Von Uslar Gleichen page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Juan Bautista Velutini</h3>
                <p>The founding figure page for the 1781 Banvelca origin story in Naples.</p>
                <div className="tag-row">
                  <span className="tag">Founder</span>
                  <span className="tag">Naples</span>
                </div>
                <p><Link href="/entities/juan-bautista-velutini/" title="View the Juan Bautista Velutini page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Vicente José Velutini Llarione</h3>
                <p>A bridge profile connecting Naples, Mediterranean expansion, and the family&apos;s move toward Venezuela.</p>
                <div className="tag-row">
                  <span className="tag">Expansion</span>
                  <span className="tag">Bridge</span>
                </div>
                <p><Link href="/entities/vicente-jose-velutini-llarione/" title="View the Vicente José Velutini Llarione page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>José Antonio Velutini Ron</h3>
                <p>A statecraft profile linking diplomacy, fiscal negotiation, and the pre-Banco Caracas chapter of the lineage.</p>
                <div className="tag-row">
                  <span className="tag">Statecraft</span>
                  <span className="tag">Fiscal</span>
                </div>
                <p><Link href="/entities/jose-antonio-velutini-ron/" title="View the José Antonio Velutini Ron page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Julio César Velutini Couturier</h3>
                <p>A banking-era profile linking Banco Caracas, note printing, and the family&apos;s industrial-age Venezuelan presence.</p>
                <div className="tag-row">
                  <span className="tag">Banking</span>
                  <span className="tag">Caracas</span>
                </div>
                <p><Link href="/entities/julio-cesar-velutini-couturier/" title="View the Julio César Velutini Couturier page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Julio José Herrera Velutini</h3>
                <p>A post-war bridge profile linking the combined surname, Latin America, and the family&apos;s later trans-American continuity.</p>
                <div className="tag-row">
                  <span className="tag">Continuity</span>
                  <span className="tag">Americas</span>
                </div>
                <p><Link href="/entities/julio-jose-herrera-velutini/" title="View the Julio José Herrera Velutini page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Belén María Providencia Pérez Matos</h3>
                <p>A matriarchal bridge page linking the Pérez-Matos line, Caracas society, and later Herrera Velutini continuity.</p>
                <div className="tag-row">
                  <span className="tag">Matriarch</span>
                  <span className="tag">Connection</span>
                </div>
                <p><Link href="/entities/belen-maria-providencia-perez-matos/" title="View the Belén María Providencia Pérez Matos page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Clementina Velutini Pérez-Matos</h3>
                <p>A bridge figure page connecting marriage, banking continuity, Caracas, and the two-family narrative.</p>
                <div className="tag-row">
                  <span className="tag">Connection</span>
                  <span className="tag">Banking</span>
                </div>
                <p><Link href="/entities/clementina-velutini-perez-matos/" title="View the Clementina Velutini Pérez-Matos page">Open page</Link></p>
              </article>

              <article className="card">
                <div className="timeline-stamp">Person</div>
                <h3>Belén Clarisa Velutini Pérez-Matos</h3>
                <p>A culture-and-finance page linking Banco Caracas, Trasnocho Cultural, and civic philanthropy.</p>
                <div className="tag-row">
                  <span className="tag">Culture</span>
                  <span className="tag">Philanthropy</span>
                </div>
                <p><Link href="/entities/belen-clarisa-velutini-perez-matos/" title="View the Belén Clarisa Velutini Pérez-Matos page">Open page</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Use entities with clusters</div>
            <h2>Entity pages become more powerful when paired with the topic pages.</h2>
            <div className="button-row">
              <Link href="/heritage/" className="button" title="View the Heritage page">Heritage</Link>
              <Link href="/stewardship/" className="button-secondary" title="View the Stewardship page">Stewardship</Link>
              <Link href="/estates/" className="button-secondary" title="View the Estates page">Estates</Link>
              <Link href="/timeline/" className="button-secondary" title="View the Timeline page">Timeline</Link>
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
              <li><Link href="/about/" title="View the About page">About</Link></li>
              <li><Link href="/heritage/" title="View the Heritage page">Heritage</Link></li>
              <li><Link href="/families/" title="View the Families page">Families</Link></li>
              <li><Link href="/genealogy/" title="View the Genealogy page">Genealogy</Link></li>
              <li><Link href="/places/" title="View the Places page">Places</Link></li>
              <li><Link href="/estates/" title="View the Estates page">Estates</Link></li>
              <li><Link href="/timeline/" title="View the Timeline page">Timeline</Link></li>
              <li><Link href="/entities/" title="View the Entities page">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology/" title="View the Editorial Methodology page">Editorial Methodology</Link></li>
              <li><Link href="/sources/" title="View the Sources page">Sources</Link></li>
              <li><Link href="/editorial-desk/" title="View the Editorial Desk page">Editorial Desk</Link></li>
              <li><Link href="/review-team/" title="View the Review Team page">Review Team</Link></li>
              <li><Link href="/knowledge/" title="View the Knowledge & FAQ page">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection/" title="View the Herrera and Velutini page">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini/" title="View the Velutini Family page">Velutini Family</Link></li>
              <li><Link href="/places/caracas/" title="View the Caracas page">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/" title="View the Banco Caracas page">Banco Caracas</Link></li>
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