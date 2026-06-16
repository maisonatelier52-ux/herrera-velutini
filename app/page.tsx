import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Herrera Velutini | Family History, Lineage, Estates & Sources",

  description:
    "An original, source-linked reference portal for the Herrera and Velutini record, built around lineage, estates, organizations, places, and source notes.",

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
    canonical: "/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Herrera Velutini | Family History, Lineage, Estates & Sources",
    description:
      "An original, source-linked reference portal for the Herrera and Velutini record, built around lineage, estates, organizations, places, and source notes.",
    url: "https://herreravelutini.com/",
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
      "Herrera Velutini | Family History, Lineage, Estates & Sources",
    description:
      "An original, source-linked reference portal for the Herrera and Velutini record, built around lineage, estates, organizations, places, and source notes.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Home() {
  const jsonLdOrganization = {
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
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://herreravelutini.com/#website",
    name: "Herrera Velutini",
    url: "https://herreravelutini.com/",
    description: "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
    publisher: { "@id": "https://herreravelutini.com/#organization" },
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Herrera Velutini Home",
    url: "https://herreravelutini.com/",
    description: "An original, source-linked reference portal for the Herrera and Velutini record, built around lineage, estates, organizations, places, and source notes.",
    isPartOf: { "@id": "https://herreravelutini.com/#website" },
    publisher: { "@id": "https://herreravelutini.com/#organization" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <main id="main">
        <section className="hero hero-home">
          <div className="container hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol><li><Link href="/" title="Home">Home</Link></li></ol>
              </nav>
              <div className="eyebrow">Authority layer</div>
              <h1>A reference portal for the Herrera and Velutini record.</h1>
              <p className="lede">Herrera Velutini reorganizes the public family-domain record into an editorial reference site for lineage, estates, organizations, places, and source notes. Instead of reproducing the menu order of <Link href="/entities/house-of-herrera/" title="Learn about the House of Herrera">House of Herrera</Link> and <Link href="/entities/banvelca-company/" title="Discover Banvelca & Company">Banvelca &amp; Company</Link>, it turns those materials into dated, linked, and reviewable pages that help readers move from dynastic names to physical places and from founding stories to modern stewardship narratives.</p>
              <div className="hero-actions">
                <Link href="/heritage/"  className="button" title="Start exploring the Herrera and Velutini heritage">
                  Start With Heritage
                </Link>
                <Link href="/themes/" className="button-secondary" title="Browse the themes">
                  Browse Themes
                </Link>
                <Link href="/families/" className="button-secondary" title="Open family hubs">
                  Open Family Hubs
                </Link>
              </div>
            </div>
            <aside className="facts-box">
              <ul>
                <li><span>Live now</span><strong>39 indexable pages across the live portal</strong></li>
                <li><span>Reading mode</span><strong>Family-domain narrative + editorial synthesis + source ledger</strong></li>
                <li><span>Core bridges</span><strong>Heritage, Themes, family hubs, genealogy, Caracas, and organization profiles</strong></li>
                <li><span>Best first click</span><strong><Link href="/genealogy/" title="View the genealogy">Genealogy</Link> for structure or <Link href="/heritage/" title="Explore the heritage">Heritage</Link> for the historical arc</strong></li>
              </ul>
            </aside>
          </div>
        </section>

        <div className="container">
          <div className="byline">
            <div><span className="byline-label">Prepared by</span> <Link href="/editorial-desk/" title="Meet the Herrera Velutini Editorial Desk">Herrera Velutini Editorial Desk</Link></div>
            <div><span className="byline-label">Reviewed by</span> <Link href="/review-team/" title="Learn about the Standards Review Team">Standards Review Team</Link></div>
            <div><span className="byline-label">Published</span> <time dateTime="2026-04-17">April 17, 2026</time></div>
            <div><span className="byline-label">Updated</span> <time dateTime="2026-04-20">April 20, 2026</time></div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Publishing wave one</div>
            <h2>What the authority layer now includes</h2>
            <p className="lede">These pages are designed to make the portal useful on day one: they clarify scope, show editorial ownership, establish the two core family narratives, and create strong internal links between organizations, places, and chronology.</p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Trust pages</h3>
                <p>About, Editorial Methodology, and Sources explain what the portal covers, how it reads the source domains, and how each page is dated and reviewed.</p>
                <div className="tag-row"><span className="tag">Scope</span><span className="tag">Review</span><span className="tag">Sourcing</span></div>
                <p><Link href="/about/" title="Learn about the trust layer">Open the trust layer</Link></p>
              </article>
              <article className="card">
                <h3>Historical synthesis</h3>
                <p>Heritage and Timeline pull together medieval Herrera lineage, the Caracas estate narrative, and Banvelca's Naples-to-Americas chronology into a single reading path.</p>
                <div className="tag-row"><span className="tag">Continuity</span><span className="tag">Chronology</span></div>
                <p><Link href="/heritage/" title="Explore the heritage">Read Heritage</Link></p>
              </article>
              <article className="card">
                <h3>Family and genealogy layer</h3>
                <p>The live family hubs, connection page, and genealogy pages turn surnames into a readable structure rather than a loose collection of bios.</p>
                <div className="tag-row"><span className="tag">Family hub</span><span className="tag">Lineage</span></div>
                <p><Link href="/genealogy/" title="View the genealogy">Open Genealogy</Link></p>
              </article>
              <article className="card">
                <h3>Place and institution layer</h3>
                <p>Caracas, Banco Caracas, and Clementina now complete the site's first core topical graph around place, family bridge, and finance.</p>
                <div className="tag-row"><span className="tag">Caracas</span><span className="tag">Institution</span></div>
                <p><Link href="/places/caracas/" title="Explore the history of Caracas">Open Caracas</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="read-this-site">
          <div className="container">
            <div className="overline">Editorial position</div>
            <h2>How to read this portal</h2>
            <p className="lede">The site is built around a simple distinction: the family domains supply raw narrative and named entities; the portal adds structure, context, and traceability.</p>
            <div className="media-split">
              <div>
                <p>The House of Herrera site is especially strong on dynastic sequence, heraldry, estates, and titled memory. Banvelca is especially strong on the Velutini legacy timeline, the 1781 Naples origin story, and the modern vocabulary of stewardship across finance, art, and philanthropy.</p>
                <p>This portal keeps both source domains visible, but it does not let them remain siloed. The homepage, heritage page, timeline, organization profiles, and new <Link href="/themes/" title="Browse the themes">Themes</Link> cluster now connect medieval Castilian figures, Caracas estates, Naples merchant-banking language, and twentieth-century family links in one navigable system.</p>
                <p>That structure matters for both readers and search engines: it makes the subject matter easier to interpret, reduces duplication, and creates descriptive internal links between pages such as <Link href="/entities/hacienda-de-la-vega/" title="Learn about Hacienda de La Vega">Hacienda de La Vega</Link>, <Link href="/entities/castle-santa-barbara/" title="Learn about Castle Santa Barbara">Castle Santa Barbara</Link>, <Link href="/entities/juan-bautista-velutini/" title="Learn about Juan Bautista Velutini">Juan Bautista Velutini</Link>, <Link href="/entities/belen-clarisa-velutini-perez-matos/" title="Learn about Belén Clarisa Velutini Pérez-Matos">Belén Clarisa Velutini Pérez-Matos</Link>, and the new theme essays on <Link href="/themes/heraldry-and-symbols/" title="Read about Heraldry and Symbols">Heraldry and Symbols</Link> and <Link href="/themes/private-banking-tradition/" title="Read about Private Banking Tradition">Private Banking Tradition</Link>.</p>
                <ul aria-label="Key themes" className="inline-list">
                  <li>Original synthesis</li>
                  <li>Visible dates</li>
                  <li>Source basis</li>
                  <li>Entity-first linking</li>
                  <li>Fast static delivery</li>
                </ul>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the portal authority layer as trust pages, source model, and search logic."
                  loading="lazy"
                  src="/illustrations/authority-stack.svg"
                  width={600}
                  height={400}
                />
                <figcaption>The portal's authority layer depends on three things working together: trust pages, a transparent source model, and original synthesis that creates real editorial value.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="two-domains">
          <div className="container">
            <div className="overline">Core narrative strands</div>
            <h2>The two source domains, read together</h2>
            <p className="lede">The portal does not collapse the two family domains into one undifferentiated story. It preserves the distinctions between them and then shows where the record begins to overlap.</p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">House of Herrera</div>
                <h3>Dynasty, estates, heraldry, and distinctions</h3>
                <p>The Herrera source domain frames the family as a long-running noble patrimony that becomes legible through named figures, coats of arms, castles, and estate-linked places from Ampudia to Lanzarote and Caracas.</p>
              </article>
              <article className="callout">
                <div className="overline">Banvelca</div>
                <h3>A Naples-founded legacy and a family-office vocabulary</h3>
                <p>Banvelca frames the Velutini side through a founding date of 1781, successive generations, and modern themes such as private banking, finance, art investments, and social responsibility.</p>
              </article>
              <article className="callout">
                <div className="overline">Where they meet</div>
                <h3>Caracas, marriage, and modern continuity</h3>
                <p>The record intersects most clearly in Caracas: Hacienda de La Vega, Banco Caracas references, the Pérez-Matos line, and Clementina Velutini Pérez-Matos's 1932 marriage to José Herrera Von Uslar all help explain how the two family narratives converge.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="start-here">
          <div className="container">
            <div className="overline">Best routes into the archive</div>
            <h2>Start with these pages</h2>
            <p className="lede">If you are new to the portal, these are the pages that establish the subject matter fastest.</p>
            <div className="cards">
              <article className="card"><h3>About</h3><p>Defines scope, audience, and editorial position.</p><p><Link href="/about/" title="About Julio Herrera Velutini">Open About</Link></p></article>
              <article className="card"><h3>Editorial Methodology</h3><p>Explains source types, date handling, and corrections policy.</p><p><Link href="/editorial-methodology/" title="Learn about our editorial methodology">Open Methodology</Link></p></article>
              <article className="card"><h3>Sources</h3><p>Annotated source ledger for the key family-domain pages and reading leads.</p><p><Link href="/sources/" title="View our sources">Open Sources</Link></p></article>
              <article className="card"><h3>Heritage</h3><p>A long-form synthesis of the historical arc across both families.</p><p><Link href="/heritage/" title="Explore the Herrera family heritage">Open Heritage</Link></p></article>
              <article className="card"><h3>Themes</h3><p>A subject hub for heraldry, distinctions, private banking, finance, art, social responsibility, and the women who bridge the families.</p><p><Link href="/themes/" title="Browse the themes">Open Themes</Link></p></article>
              <article className="card"><h3>Genealogy</h3><p>The lineage hub connecting the Herrera and Velutini public sequences to places and bridge figures.</p><p><Link href="/genealogy/" title="View the genealogy">Open Genealogy</Link></p></article>
              <article className="card"><h3>Caracas</h3><p>The first fully built place dossier, connecting estate, bank, marriage, and culture.</p><p><Link href="/places/caracas/" title="Explore the history of Caracas">Open Caracas</Link></p></article>
              <article className="card"><h3>Banco Caracas</h3><p>The institution page that turns biography into financial history.</p><p><Link href="/entities/banco-caracas/" title="Learn about Banco Caracas">Open Banco Caracas</Link></p></article>
              <article className="card"><h3>Velutini Family</h3><p>Family hub for origins, banking legacy, women-led continuity, and research routes.</p><p><Link href="/families/velutini/" title="Discover the Velutini family history">Open family hub</Link></p></article>
              <article className="card"><h3>Herrera and Velutini</h3><p>Bridge page explaining where the two family narratives meet.</p><p><Link href="/families/herrera-velutini-connection/" title="Learn about the Herrera and Velutini connection">Open the connection page</Link></p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the homepage</h2>
              <p className="muted">The homepage is an original synthesis that uses the two family domains as raw material and the portal's editorial pages as its governing framework.</p>
              <ul className="check-list">
                <li><Link href="https://www.houseofherrera.com/" rel="noopener external" title="House of Herrera — Home">House of Herrera — Home</Link> — Used for the overall framing of the House of Herrera as a long-running noble patrimony with sections for dynasty, symbols, estates, orders, and bibliography.</li>
                <li><Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the 14th-century prominence narrative, geographic scope, and the source-domain linkage between family history, Hacienda de La Vega, and later banking references.</li>
                <li><Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">House of Herrera — Dynasty</Link> — Used for the ordered list of Herrera figures, date ranges, and the dynastic continuity framework.</li>
                <li><Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">House of Herrera — Symbols</Link> — Used for the heraldry layer that now feeds the live theme cluster on symbolic memory and branch identity.</li>
                <li><Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen, Castle of Ampudia, and other place-linked notes.</li>
                <li><Link href="https://www.houseofherrera.com/orders-and-distinctions" rel="noopener external" title="House of Herrera — Orders and Distinctions">House of Herrera — Orders and Distinctions</Link> — Used for the titled-memory layer now surfaced in the live theme cluster.</li>
                <li><Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">Banvelca — About</Link> — Used for the 1781 Naples founding story, Juan Bautista Velutini, and the firm's self-description as a private trust and investment house.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link> — Used for the chronological ancestor timeline spanning Juan Bautista through later generations, including Banco Caracas, Clementina, Belén Clarisa, Julio José, and later generations.</li>
                <li><Link href="https://www.banvelca.com/private-banking" rel="noopener external" title="Banvelca — Private Banking">Banvelca — Private Banking</Link> — Used for the family-only private-banking and trust-coordination framing.</li>
                <li><Link href="https://www.banvelca.com/finance" rel="noopener external" title="Banvelca — Finance">Banvelca — Finance</Link> — Used for the description of finance as multi-generational custodianship.</li>
                <li><Link href="https://www.banvelca.com/art-investments" rel="noopener external" title="Banvelca — Art Investments">Banvelca — Art Investments</Link> — Used for the art-custodianship language now organized into a dedicated culture theme.</li>
                <li><Link href="https://www.banvelca.com/social-responsibility" rel="noopener external" title="Banvelca — Social Responsibility">Banvelca — Social Responsibility</Link> — Used for the quiet social-impact language now organized into a dedicated responsibility theme.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 birth date, Paris education, 1932 marriage to José Herrera Von Uslar, and later leadership in banking and philanthropy.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external" title="Banvelca — Belén Clarisa Velutini Pérez-Matos">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for the 1924–2023 dates, Banco Caracas management, Trasnocho Cultural, and Fundación Centro El Portal.</li>
                <li><Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external" title="Banvelca — Belén María Providencia Pérez Matos">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal connection between the Pérez-Matos, Velutini, and Herrera lines.</li>
                <li><Link href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" rel="noopener external" title="Google Search Central — Helpful, reliable, people-first content">Google Search Central — Helpful, reliable, people-first content</Link> — Used for editorial standards around originality, clear sourcing, about pages, and trust signals.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the authority layer</h2>
            <div className="button-row">
              <Link href="/about/" title="Learn about the Herrera Velutini portal" className="button">About the portal</Link>
              <Link href="/heritage/" title="Explore the Herrera family heritage" className="button-secondary">Read Heritage</Link>
              <Link href="/themes/" title="Browse the themes section" className="button-secondary">Open Themes</Link>
              <Link href="/genealogy/" title="View the Herrera family genealogy" className="button-secondary">Open Genealogy</Link>
              <Link href="/places/caracas/" title="Explore the history of Caracas" className="button-secondary">Open Caracas</Link>
              <Link href="/families/herrera-velutini-connection/" title="See the connection page" className="button-secondary">See the connection page</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.</p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about/" title="Learn about Julio Herrera Velutini">About</Link></li>
              <li><Link href="/heritage/" title="Explore the Herrera family heritage">Heritage</Link></li>
              <li><Link href="/families/" title="Discover the Herrera banking families">Families</Link></li>
              <li><Link href="/genealogy/" title="View the Herrera family genealogy">Genealogy</Link></li>
              <li><Link href="/places/" title="Explore places connected to Julio Herrera Velutini">Places</Link></li>
              <li><Link href="/estates/" title="Learn about the Herrera family estates">Estates</Link></li>
              <li><Link href="/timeline/" title="View the Julio Herrera Velutini timeline">Timeline</Link></li>
              <li><Link href="/entities/" title="Browse people, organizations, and entities">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology/" title="Learn about our editorial methodology and publishing standards">Editorial Methodology</Link></li>
              <li><Link href="/sources/" title="View our sources and reference materials">Sources</Link></li>
              <li><Link href="/editorial-desk/" title="Meet the editorial desk and content team">Editorial Desk</Link></li>
              <li><Link href="/review-team/" title="Learn about our review team and editorial review process">Review Team</Link></li>
              <li><Link href="/knowledge/" title="Explore our knowledge base and frequently asked questions">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection/" title="Learn about the Herrera and Velutini connection">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini/" title="Discover the Velutini family history">Velutini Family</Link></li>
              <li><Link href="/places/caracas/" title="Explore the history of Caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/" title="Learn about Banco Caracas">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© <span data-current-year="" /> Herrera Velutini</span>
          <span>Built for clear attribution, fast delivery, and durable search understanding.</span>
        </div>
      </footer>
    </>
  );
}