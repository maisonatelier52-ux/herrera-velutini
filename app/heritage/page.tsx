import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Heritage | Seven Centuries of Herrera and Velutini Continuity",
  description:
    "A synthesis page connecting the Herrera dynastic record to the Velutini and Banvelca legacy record through lineage, estates, chronology, and family links.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/heritage/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Heritage | Seven Centuries of Herrera and Velutini Continuity",
    description:
      "A synthesis page connecting the Herrera dynastic record to the Velutini and Banvelca legacy record through lineage, estates, chronology, and family links.",
    url: "https://herreravelutini.com/heritage/",
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
    title: "Heritage | Seven Centuries of Herrera and Velutini Continuity",
    description:
      "A synthesis page connecting the Herrera dynastic record to the Velutini and Banvelca legacy record through lineage, estates, chronology, and family links.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function HeritagePage() {
  return (
    <>
      {/* Organization */}
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
          }).replace(/</g, "\\u003c"),
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
              "@id": "https://herreravelutini.com/#organization",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Heritage | Seven Centuries of Herrera and Velutini Continuity",
            description:
              "A long-form synthesis connecting the Herrera dynastic record to the Velutini and Banvelca legacy record.",
            datePublished: "2026-04-17",
            dateModified: "2026-04-21",
            author: {
              "@type": "Organization",
              "@id":
                "https://herreravelutini.com/editorial-desk/#org",
              name: "Herrera Velutini Editorial Desk",
            },
            editor: {
              "@type": "Organization",
              "@id":
                "https://herreravelutini.com/review-team/#org",
              name: "Standards Review Team",
            },
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
            mainEntityOfPage:
              "https://herreravelutini.com/heritage/",
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumbs */}
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
                name: "Heritage",
                item: "https://herreravelutini.com/heritage/",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li aria-current="page">Heritage</li>
                </ol>
              </nav>
              <div className="eyebrow">Historical synthesis</div>
              <h1>Heritage</h1>
              <p className="lede">
                Across the source domains reviewed for this portal, two broad narratives emerge. The first is the Herrera line: a dynastic and place-rich record that begins in medieval Castile and expands through titles, heraldry, estates, and transatlantic memory. The second is the Velutini / Banvelca line: a Naples-founded merchant-banking and stewardship narrative that moves through generations, institutions, and later cultural and philanthropic roles. This page reads those narratives together without flattening their differences.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Arc one</span>
                  <strong>Medieval Herrera lineage, heraldry, titles, estates</strong>
                </li>
                <li>
                  <span>Arc two</span>
                  <strong>Banvelca&apos;s 1781 founding and generational legacy</strong>
                </li>
                <li>
                  <span>Bridge points</span>
                  <strong>Caracas, Hacienda de La Vega, Banco Caracas, Clementina&apos;s 1932 marriage</strong>
                </li>
                <li>
                  <span>Next page</span>
                  <strong><Link href="/timeline/">Timeline</Link></strong>
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
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="dual-narrative">
          <div className="container">
            <div className="overline">How the portal reads the record</div>
            <h2>A dual narrative, not a merged blur</h2>
            <p className="lede">
              The portal&apos;s heritage work begins by respecting the source structure. House of Herrera and Banvelca are not interchangeable. They emphasize different eras, different vocabularies, and different forms of authority.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Medieval and early-modern Herrera</h3>
                <p>
                  The Herrera source domain places the family&apos;s prominence in the 14th century and then traces a dynastic line through named figures such as Hernán de Herrera, Pedro García de Herrera y Rojas,{" "}
                  <Link href="/entities/diego-garcia-de-herrera-y-ayala/">Diego García de Herrera y Ayala</Link>,{" "}
                  <Link href="/entities/agustin-de-herrera-y-rojas-ayala/">Agustín de Herrera y Rojas Ayala</Link>, and{" "}
                  <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/">Juan Sarmiento de Herrera y Fernández Pacheco</Link>.
                </p>
                <p><Link href="/entities/house-of-herrera/">See the House of Herrera profile</Link></p>
              </article>
              <article className="card">
                <h3>Atlantic and Caracas memory</h3>
                <p>
                  The estate narrative around Hacienda de La Vega and the Caracas Valley gives the record a concrete place-based layer that links lineage, local memory, and later financial associations.
                </p>
                <p><Link href="/estates/">Read Estates</Link></p>
              </article>
              <article className="card">
                <h3>The Velutini-Banvelca line</h3>
                <p>
                  Banvelca&apos;s legacy pages begin in Naples in 1781 with Juan Bautista Velutini and then map a generational passage through Mediterranean trade, Latin America, Banco Caracas references, and later family-office language.
                </p>
                <p><Link href="/families/velutini/">See the Velutini Family hub</Link></p>
              </article>
              <article className="card">
                <h3>Twentieth-century convergence</h3>
                <p>
                  Belén María, Clementina, Belén Clarisa, and Julio José create the most visible modern bridge between family, institution, culture, and place in the public material used by this portal.
                </p>
                <p><Link href="/families/herrera-velutini-connection/">See the connection page</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="herrera-strand">
          <div className="container">
            <div className="overline">Dynasty, places, and memory</div>
            <h2>The Herrera strand</h2>
            <p className="lede">
              The Herrera material is strongest where lineage, heraldry, and estates reinforce each other. The dynasty page supplies names and dates; the symbols page supplies coats of arms; the estate pages supply geography and physical landmarks.
            </p>
            <div className="media-split">
              <div>
                <p>
                  On the House of Herrera site, the family is presented as a longstanding patrimony of Spanish nobility that gained prominence in the 14th century and later carried influence across Spain, the Canaries, Latin America, Germany, and England. The dynasty sequence then provides a named chain of figures that starts with Hernán de Herrera Lord of Ampudia and continues through Pedro García de Herrera y Rojas,{" "}
                  <Link href="/entities/diego-garcia-de-herrera-y-ayala/">Diego García de Herrera y Ayala</Link>,{" "}
                  <Link href="/entities/agustin-de-herrera-y-rojas-ayala/">Agustín de Herrera y Rojas Ayala</Link>,{" "}
                  <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/">Juan Sarmiento de Herrera y Fernández Pacheco</Link>, and later generations.
                </p>
                <p>
                  The portal treats that material as a dynastic framework rather than as a complete standalone history. It uses the names and dates to build internal structure, but it also asks where the figures become more concrete: in estate associations, in heraldic material, in distinctions tied to Lanzarote, and in later Caracas-linked references.
                </p>
                <p>
                  That is why the Herrera strand on this portal leads naturally from the{" "}
                  <Link href="/entities/house-of-herrera/">House of Herrera profile</Link> to{" "}
                  <Link href="/families/herrera/">Herrera Family</Link>,{" "}
                  <Link href="/estates/">Estates</Link>, and{" "}
                  <Link href="/entities/pedro-garcia-de-herrera-y-rojas/">Pedro García de Herrera y Rojas</Link> instead of remaining a single long list of names.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram representing the heritage network of the portal."
                  loading="lazy"
                  src="/illustrations/heritage-network.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  The heritage layer is strongest when the portal treats lineage, symbols, and estates as connected evidence rather than separate menus.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="estate-turn">
          <div className="container">
            <div className="overline">Why place matters</div>
            <h2>The Caracas and estate turn</h2>
            <p className="lede">
              Family history becomes much easier to understand when it can be anchored to physical places. In the current source base, Hacienda de La Vega is the most important example.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Hacienda de La Vega</div>
                <h3>A symbolic Caracas anchor</h3>
                <p>
                  The House of Herrera estate material describes Hacienda de La Vega as one of the oldest haciendas in Venezuela and a continuing symbolic place for later generations.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Castle Santa Barbara</div>
                <h3>Titles and Lanzarote memory</h3>
                <p>
                  The Lanzarote fortification cluster matters because it connects the family record to the island&apos;s historical geography, titled memory, and heraldic material.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Ampudia and German estates</div>
                <h3>Place as lineage memory</h3>
                <p>
                  Ampudia, Gleichen, Freudenthal, and related castle references widen the geographic field and help explain why the family record is read across more than one country or era.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="velutini-strand">
          <div className="container">
            <div className="overline">From Naples to later generations</div>
            <h2>The Velutini / Banvelca strand</h2>
            <p className="lede">
              Banvelca&apos;s material is organized less as medieval lineage and more as a modernizing institutional lineage. It begins with a founding point, then builds identity through successive generations and themed pages about stewardship.
            </p>
            <p>
              Banvelca&apos;s About page presents the firm as a private trust and investment house founded in the Kingdom of Naples in 1781 by Juan Bautista Velutini. The Legacy pages then map a sequence through Vicente José Velutini Llarione, José Antonio Velutini Ron, Julio César Velutini Couturier, Belén María, Clementina, Belén Clarisa, Julio José Herrera Velutini, and later generations. That is a different kind of historical architecture from the House of Herrera dynasty page, but it is still highly useful for the portal because it provides a chronological spine and specific public figures.
            </p>
            <p>
              The thematic pages on private banking, finance, art investments, and social responsibility broaden that lineage into a modern stewardship vocabulary. On the portal, those themes are not left as stand-alone marketing headings. They now live inside the{" "}
              <Link href="/themes/">Themes</Link> cluster, where{" "}
              <Link href="/themes/private-banking-tradition/">Private Banking Tradition</Link>,{" "}
              <Link href="/themes/finance-and-capital-stewardship/">Finance and Capital Stewardship</Link>,{" "}
              <Link href="/themes/art-investment-and-patronage/">Art Investment and Patronage</Link>, and{" "}
              <Link href="/themes/social-responsibility/">Social Responsibility</Link> are tied back to people, institutions, and places such as{" "}
              <Link href="/entities/banvelca-company/">Banvelca &amp; Company</Link>,{" "}
              <Link href="/entities/juan-bautista-velutini/">Juan Bautista Velutini</Link>,{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos/">Belén Clarisa Velutini Pérez-Matos</Link>, and Caracas.
            </p>
          </div>
        </section>

        <section className="section" id="connection-logic">
          <div className="container">
            <div className="overline">Connection logic</div>
            <h2>Where the two lines become one portal</h2>
            <p className="lede">
              The families become most legible together in the twentieth-century Caracas material.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Belén María Providencia Pérez Matos</h3>
                <p>
                  Banvelca&apos;s profile for Belén María positions her as a matriarchal bridge between the Pérez-Matos, Velutini, and Herrera lines.
                </p>
                <p><Link href="/entities/belen-clarisa-velutini-perez-matos/">See related profile</Link></p>
              </article>
              <article className="card">
                <h3>Clementina and José Herrera Von Uslar</h3>
                <p>
                  Clementina&apos;s profile states that her 1932 marriage to José Herrera Von Uslar merged the Herreras and Velutinis in a publicly articulated family narrative.
                </p>
                <p><Link href="/entities/clementina-velutini-perez-matos/">Read Clementina Velutini Pérez-Matos</Link></p>
              </article>
              <article className="card">
                <h3>Belén Clarisa and cultural stewardship</h3>
                <p>
                  Belén Clarisa&apos;s page expands the record beyond banking by tying Banco Caracas to culture and philanthropy through Trasnocho Cultural and Fundación Centro El Portal.
                </p>
                <p><Link href="/entities/belen-clarisa-velutini-perez-matos/">Open Belén Clarisa</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="why-it-matters">
          <div className="container">
            <div className="overline">Authority-building function</div>
            <h2>Why this page matters</h2>
            <p className="lede">
              Heritage is not just an overview page. It is the portal&apos;s interpretive bridge.
            </p>
            <p>
              Without a synthesis page like this one, readers would have to infer the relationship between medieval Herrera material and the later Banvelca legacy pages on their own. The portal&apos;s job is to do that interpretive work openly: to show where the source domains are strongest, where they overlap, and which pages to visit next if the reader wants lineage, place, organization, or chronology.
            </p>
            <p>
              That makes Heritage one of the most important authority pages in the first publishing wave. It gives the portal a subject-level center of gravity rather than leaving the site as a collection of disconnected tabs.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Heritage page</h2>
              <p className="muted">
                This page synthesizes several source-domain strands and labels them as such. It does not claim to replace archival or scholarly history.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external">House of Herrera — About</Link> — Used for the 14th-century prominence narrative, geographic scope, and the source-domain linkage between family history, Hacienda de La Vega, and later banking references.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external">House of Herrera — Dynasty</Link> — Used for the ordered list of Herrera figures, date ranges, and the dynastic continuity framework.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala" rel="noopener external">House of Herrera — Diego García de Herrera y Ayala</Link> — Used for the Canary Islands bridge in the early Herrera strand.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa" rel="noopener external">House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego</Link> — Used for the seventeenth-century sequence point, estate language, and visible spelling variation.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external">House of Herrera — Symbols</Link> — Used for the set of coats of arms associated with Herrera, Lanzarote, Uslar, Gleichen, and Velutini.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external">House of Herrera — Family Estates</Link> — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen, Castle of Ampudia, and other place-linked notes.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/orders-and-distinctions" rel="noopener external">House of Herrera — Orders and Distinctions</Link> — Used for titles, distinctions, and the Lanzarote / Herrera / Torre Casa / Fuerteventura cluster.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external">Banvelca — About</Link> — Used for the 1781 Naples founding story, Juan Bautista Velutini, and the firm&apos;s self-description as a private trust and investment house.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external">Banvelca — Legacy</Link> — Used for the chronological ancestor timeline spanning Juan Bautista through later generations, including Banco Caracas, Clementina, Belén Clarisa, Julio José, and later generations.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 birth date, Paris education, 1932 marriage to José Herrera Von Uslar, and later leadership in banking and philanthropy.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for the 1924–2023 dates, Banco Caracas management, Trasnocho Cultural, and Fundación Centro El Portal.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal connection between the Pérez-Matos, Velutini, and Herrera lines.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione" rel="noopener external">Banvelca — Vicente José Velutini Llarione</Link> — Used for the transition from Mediterranean trade to a Venezuela-linked transatlantic commercial network.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini" rel="noopener external">Banvelca — Julio José Herrera Velutini</Link> — Used for the post-war family narrative and the shift into the Americas.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue into chronology and family hubs</h2>
            <div className="button-row">
              <Link className="button" href="/timeline/">Open Timeline</Link>
              <Link className="button-secondary" href="/themes/">Open Themes</Link>
              <Link className="button-secondary" href="/estates/">Read Estates</Link>
              <Link className="button-secondary" href="/entities/house-of-herrera/">House of Herrera</Link>
              <Link className="button-secondary" href="/families/herrera/">Herrera Family</Link>
              <Link className="button-secondary" href="/entities/diego-garcia-de-herrera-y-ayala/">Diego García</Link>
              <Link className="button-secondary" href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/">Juan Sarmiento</Link>
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
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/heritage/">Heritage</Link></li>
              <li><Link href="/families/">Families</Link></li>
              <li><Link href="/genealogy/">Genealogy</Link></li>
              <li><Link href="/places/">Places</Link></li>
              <li><Link href="/estates/">Estates</Link></li>
              <li><Link href="/timeline/">Timeline</Link></li>
              <li><Link href="/entities/">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology/">Editorial Methodology</Link></li>
              <li><Link href="/sources/">Sources</Link></li>
              <li><Link href="/editorial-desk/">Editorial Desk</Link></li>
              <li><Link href="/review-team/">Review Team</Link></li>
              <li><Link href="/knowledge/">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection/">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini/">Velutini Family</Link></li>
              <li><Link href="/places/caracas/">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/">Banco Caracas</Link></li>
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