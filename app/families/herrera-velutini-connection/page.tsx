import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herrera and Velutini | How the Families Connect",
  description:
    "Bridge page explaining how the Herrera and Velutini family narratives connect through marriage, Caracas, and institutional continuity.",
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
    canonical: "/families/herrera-velutini-connection/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Herrera and Velutini | How the Families Connect",
    description:
      "Bridge page explaining how the Herrera and Velutini family narratives connect through marriage, Caracas, and institutional continuity.",
    url: "https://herreravelutini.com/families/herrera-velutini-connection/",
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
    title: "Herrera and Velutini | How the Families Connect",
    description:
      "Bridge page explaining how the Herrera and Velutini family narratives connect through marriage, Caracas, and institutional continuity.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function HerreraVelutiniConnection() {
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
              headline: "Herrera and Velutini | How the Families Connect",
              description: "Bridge page explaining how the Herrera and Velutini family narratives connect through marriage, Caracas, and institutional continuity.",
              datePublished: "2026-04-18",
              dateModified: "2026-04-25",
              author: { "@type": "Organization", "@id": "https://herreravelutini.com/editorial-desk/#org", name: "Herrera Velutini Editorial Desk" },
              editor: { "@type": "Organization", "@id": "https://herreravelutini.com/review-team/#org", name: "Standards Review Team" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              mainEntityOfPage: "https://herreravelutini.com/families/herrera-velutini-connection/",
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
                { "@type": "ListItem", position: 3, name: "Herrera and Velutini", item: "https://herreravelutini.com/families/herrera-velutini-connection/" },
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
                  <li><Link href="https://herreravelutini.com/families/" title="Families">Families</Link></li>
                  <li aria-current="page">Herrera and Velutini</li>
                </ol>
              </nav>
              <div className="eyebrow">Connection page</div>
              <h1>Herrera and Velutini</h1>
              <p className="lede">
                This page explains how the two family narratives intersect in the public record. Its job is not to flatten the families into one undifferentiated story, but to show the specific bridges—marriage, Caracas, Pérez-Matos continuity, Banco Caracas, and the later Herrera Velutini surname—that make the portal coherent.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary bridge</span>
                  <strong>Clementina Velutini Pérez-Matos and José Herrera Von Uslar</strong>
                </li>
                <li>
                  <span>Place bridge</span>
                  <strong>Caracas and Hacienda de La Vega</strong>
                </li>
                <li>
                  <span>Institutional bridge</span>
                  <strong>Banco Caracas and later family finance</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong><Link href="/genealogy/" title="Genealogy">Genealogy</Link></strong>
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
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Editorial function</div>
            <h2>Why a connection page is necessary</h2>
            <p className="lede">
              Without this page, readers have to infer the relationship between the Herrera and Velutini sides from scattered biographies. The connection page makes the links explicit and marks where the source record is strongest.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera site is organized around dynasty, estates, symbols, and distinctions. Banvelca is organized around legacy, private banking, finance, art, and social responsibility. Neither site exists primarily to explain the relationship between them. The portal therefore adds an explicit connection page so that users are not forced to reconstruct the relationship from menus and biographies alone.
                </p>
                <p>
                  The strongest bridge is the one Banvelca states directly:{" "}
                  <Link href="/entities/clementina-velutini-perez-matos/" title="Clementina Velutini Pérez-Matos">Clementina Velutini Pérez-Matos</Link>{" "}
                  married José Herrera Von Uslar in 1932, and that union merged the Herreras and the Velutinis in the public family narrative. But the bridge is wider than one marriage. It also runs through Belén María&apos;s matriarchal role, Caracas as a shared place, Banco Caracas as an institutional anchor, and later figures such as{" "}
                  <Link href="/entities/julio-jose-herrera-velutini/" title="Julio José Herrera Velutini">Julio José Herrera Velutini</Link>.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the Herrera and Velutini lines connected by marriage, Caracas, and Banco Caracas."
                  loading="lazy"
                  src="/illustrations/family-bridge.svg"
                  width={600}
                  height={400}
                />
                <figcaption>The portal treats the family connection as a network of marriage, place, institution, and later continuity—not as a single isolated event.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Connection matrix</div>
            <h2>The main bridges in the current public record</h2>
            <p className="lede">
              The connection is clearest when its components are separated into people, place, institution, and narrative continuity.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Bridge type</th>
                    <th>Anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Marriage</td>
                    <td>Clementina Velutini Pérez-Matos + José Herrera Von Uslar (1932)</td>
                    <td>Banvelca presents this union as the explicit merger point of the Herreras and the Velutinis.</td>
                  </tr>
                  <tr>
                    <td>Matriarchal continuity</td>
                    <td>Belén María Providencia Pérez Matos</td>
                    <td>Her profile positions her as the figure linking the Pérez-Matos, Velutini, and later Herrera-connected story.</td>
                  </tr>
                  <tr>
                    <td>Place</td>
                    <td>Caracas and Hacienda de La Vega</td>
                    <td>Caracas is where estate memory, social prominence, marriage alliance, and cultural institutions overlap most clearly.</td>
                  </tr>
                  <tr>
                    <td>Institution</td>
                    <td>Banco Caracas</td>
                    <td>The bank gives the family story a concrete institutional thread across Julio César, Belén Clarisa, and later generations.</td>
                  </tr>
                  <tr>
                    <td>Modern surname continuity</td>
                    <td><Link href="/entities/julio-jose-herrera-velutini/" title="Julio José Herrera Velutini">Julio José Herrera Velutini</Link></td>
                    <td>The surname itself makes the convergence visible in the post-war Americas chapter.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Caracas matters more than any other city</div>
            <h2>The connection is most readable in Caracas</h2>
            <p className="lede">
              Caracas is the place where family, estate, social prominence, and banking history overlap in the public material used by the portal.
            </p>
            <p>
              <Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Hacienda de La Vega </Link>gives the Herrera side a landmark estate in the Caracas Valley. Banvelca&apos;s ancestor pages add the Pérez-Matos family, Clementina and Belén Clarisa, and the Banco Caracas storyline. Together, these elements make Caracas the clearest urban setting in which the two families stop being parallel narratives and become a shared one.
            </p>
            <p>
              That is why the portal now gives Caracas its own place dossier. It is the city where the connection can be seen most concretely: estate memory, elite family circles, marriage alliance, banking leadership, and later cultural patronage all accumulate there.
            </p>
            <p>
              <Link href="/places/caracas/" title="Caracas">Open the Caracas dossier</Link> to see the place layer that sits behind this connection page.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to read the connection responsibly</div>
            <h2>Bridge page, not total genealogy proof</h2>
            <p className="lede">
              This page maps the public connection points. It does not claim to be a complete archival genealogy of every branch and collateral line.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Use it for synthesis</h3>
                <p>Start here if you want the shortest explanation of how the portal connects the two surnames.</p>
              </article>
              <article className="card">
                <h3>Use genealogy pages for sequence</h3>
                <p>
                  Move next to <Link href="/genealogy/herrera-lineage/" title="Herrera Lineage">Herrera Lineage</Link> and{" "}
                  <Link href="/genealogy/velutini-lineage/" title="Velutini Lineage">Velutini Lineage</Link> for ordered public-family sequences.
                </p>
              </article>
              <article className="card">
                <h3>Use place pages for geography</h3>
                <p>
                  The link is strongest when read alongside <Link href="/places/caracas/" title="Caracas">Caracas</Link> and the estate dossier for Hacienda de La Vega.
                </p>
              </article>
              <article className="card">
                <h3>Use entity pages for details</h3>
                <p>José Herrera Von Uslar, Clementina, Julio José, Belén Clarisa, and Banvelca supply the concrete details behind the bridge.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Herrera and Velutini connection page</h2>
              <p className="muted">
                This page is an original bridge essay built from the strongest public connection points across the two family domains.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the long-duration Herrera family framing and the Caracas-linked estate references within the wider family narrative.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 birth year, 1932 marriage to José Herrera Von Uslar, and the explicit statement that the union merged the Herreras and the Velutinis.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Belén María Providencia Pérez Matos">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal connection between the Pérez-Matos and the later Herrera-linked line.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about-us/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link> — Used for the generational context around Clementina, Belén Clarisa, Julio José Herrera Velutini, and the Banco Caracas thread.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/" rel="noopener external" title="Banvelca — Julio José Herrera Velutini">Banvelca — Julio José Herrera Velutini</Link> — Used for the post-war family continuity under the combined surname.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for the Caracas-linked Hacienda de La Vega narrative that anchors the Herrera side in the city where the family connection becomes clearest.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the connection cluster</h2>
            <div className="button-row">
              <Link href="/places/caracas/" className="button" title="Caracas">Caracas</Link>
              <Link href="/entities/clementina-velutini-perez-matos/" className="button-secondary" title="Clementina Velutini Pérez-Matos">Clementina Velutini Pérez-Matos</Link>
              <Link href="/entities/jose-herrera-von-uslar-gleichen/" className="button-secondary" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link>
              <Link href="/entities/julio-jose-herrera-velutini/" className="button-secondary" title="Julio José Herrera Velutini">Julio José Herrera Velutini</Link>
              <Link href="/genealogy/" className="button-secondary" title="Genealogy">Genealogy</Link>
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