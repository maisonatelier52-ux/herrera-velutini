import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Caracas | Family Geography, Estates, Banking and Culture",
  description:
    "Place dossier connecting family geography, estates, Banco Caracas, marriage, and culture in Caracas.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/places/caracas/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Caracas | Family Geography, Estates, Banking and Culture",
    description:
      "Place dossier connecting family geography, estates, Banco Caracas, marriage, and culture in Caracas.",
    url: "https://herreravelutini.com/places/caracas/",
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
    title: "Caracas | Family Geography, Estates, Banking and Culture",
    description:
      "Place dossier connecting family geography, estates, Banco Caracas, marriage, and culture in Caracas.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function CaracasPage() {
  return (
    <>
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

      {/* Profile Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name:
              "Caracas | Family Geography, Estates, Banking and Culture",
            url: "https://herreravelutini.com/places/caracas/",
            description:
              "Place dossier connecting family geography, estates, Banco Caracas, marriage, and culture in Caracas.",
            isPartOf: {
              "@id": "https://herreravelutini.com/#website",
            },
            mainEntity: {
              "@type": "Place",
              name: "Caracas",
              url: "https://herreravelutini.com/places/caracas/",
              description:
                "Place dossier for Caracas across the Herrera and Velutini record.",
            },
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
                name: "Places",
                item: "https://herreravelutini.com/places/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Caracas",
                item: "https://herreravelutini.com/places/caracas/",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    
      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <header className="site-header">
        <div className="container header-wrap">
          <Link aria-label="Herrera Velutini home" className="brand" href="/">
            <Image
              alt="Herrera Velutini"
              src="/brand-wordmark.svg"
              width={200}
              height={40}
              priority
            />
          </Link>
          <button
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="nav-toggle"
            data-nav-toggle=""
            type="button"
          >
            Menu
          </button>
          <nav aria-label="Primary" className="site-nav" data-site-nav="">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/heritage/">Heritage</Link></li>
              <li><Link href="/families/">Families</Link></li>
              <li><Link href="/genealogy/">Genealogy</Link></li>
              <li><Link href="/estates/">Estates</Link></li>
              <li><Link href="/timeline/">Timeline</Link></li>
              <li><Link href="/entities/">Entities</Link></li>
              <li><Link href="/sources/">Sources</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/places/">Places</Link></li>
                  <li aria-current="page">Caracas</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Caracas</h1>
              <p className="lede">
                Caracas is the portal&apos;s first fully built place dossier because it is where the two family narratives overlap most visibly. Estate memory, banking history, matriarchal continuity, marriage alliance, and cultural patronage all meet here, making the city indispensable to any serious reading of the Herrera and Velutini record.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>Shared city for estate, bank, marriage, and culture</strong>
                </li>
                <li>
                  <span>Strongest anchors</span>
                  <strong>
                    <Link href="/entities/hacienda-de-la-vega/">Hacienda de La Vega</Link>
                    {" and "}
                    <Link href="/entities/banco-caracas/">Banco Caracas</Link>
                  </strong>
                </li>
                <li>
                  <span>Key figures</span>
                  <strong>Belén María, Clementina, Belén Clarisa, and José Herrera Von Uslar</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong><Link href="/families/herrera-velutini-connection/">Herrera and Velutini</Link></strong>
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
              <time dateTime="2026-04-18">April 18, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-23">April 23, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why Caracas matters</div>
            <h2>This is the city where the portal&apos;s topics stop being abstract</h2>
            <p className="lede">
              Caracas is not just another location mentioned in passing. It is the place where estate, family, institution, and culture reinforce one another in the public material.
            </p>
            <div className="media-split">
              <div>
                <p>
                  On the Herrera side, the city matters because of{" "}
                  <Link href="/entities/hacienda-de-la-vega/">Hacienda de La Vega</Link>, one of the oldest haciendas in Venezuela and a symbolic landmark in the House of Herrera estate narrative. On the Velutini side, Caracas matters because of Banco Caracas, Belén María, Clementina, Belén Clarisa, and the civic-cultural networks those figures occupy.
                </p>
                <p>
                  That means Caracas is the place where the portal&apos;s main subjects all become legible at once: family continuity, marriage alliance, financial institution, women&apos;s leadership, culture, and philanthropy. This is why the city deserves its own page rather than being left scattered across estate notes and biographies.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing Caracas connected to Hacienda de La Vega, Banco Caracas, Clementina, and Belén Clarisa."
                  loading="lazy"
                  src="/illustrations/caracas-network.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  The Caracas dossier gathers the city&apos;s estate, institution, and biography layer into one readable map.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Caracas anchors in the current portal</div>
            <h2>The city can be read through four recurring nodes</h2>
            <p className="lede">
              These four nodes are the fastest way to understand why Caracas matters across the portal.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Hacienda de La Vega</h3>
                <p>
                  The estate ties Caracas to the Herrera side and gives the city a landmark physical site in the family record.
                </p>
                <p><Link href="/entities/hacienda-de-la-vega/">Open Hacienda de La Vega</Link></p>
              </article>
              <article className="card">
                <h3>Banco Caracas</h3>
                <p>
                  The bank turns the city into an institutional anchor for the Velutini narrative and later continuity pages.
                </p>
                <p><Link href="/entities/banco-caracas/">Open Banco Caracas</Link></p>
              </article>
              <article className="card">
                <h3>Clementina</h3>
                <p>
                  Her 1912 birth in Caracas and 1932 marriage make the city central to the cross-family bridge story.
                </p>
                <p><Link href="/entities/clementina-velutini-perez-matos/">Open Clementina</Link></p>
              </article>
              <article className="card">
                <h3>Belén Clarisa</h3>
                <p>
                  Her Banco Caracas leadership, Trasnocho Cultural, and philanthropic work turn Caracas into a culture-and-civic node.
                </p>
                <p><Link href="/entities/belen-clarisa-velutini-perez-matos/">Open Belén Clarisa</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Estate, bank, marriage, culture</div>
            <h2>The city holds four different kinds of memory</h2>
            <p className="lede">
              Taken together, these layers explain why Caracas is indispensable to the site&apos;s topical graph.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Caracas-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Estate memory</td>
                    <td>Hacienda de La Vega</td>
                    <td>Provides a physical landmark on the Herrera side and ties lineage to the Caracas Valley.</td>
                  </tr>
                  <tr>
                    <td>Institutional history</td>
                    <td>Banco Caracas</td>
                    <td>Gives the Velutini narrative an institution that recurs across Julio César, Belén Clarisa, and later generations.</td>
                  </tr>
                  <tr>
                    <td>Marriage alliance</td>
                    <td>Clementina + José Herrera Von Uslar</td>
                    <td>Makes Caracas the city where the public record most clearly merges the two family narratives.</td>
                  </tr>
                  <tr>
                    <td>Cultural patronage</td>
                    <td>Trasnocho Cultural and philanthropic initiatives</td>
                    <td>Shows that the family&apos;s Caracas footprint extends beyond finance into cultural and civic life.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">A note on elite-memory language</div>
            <h2>How the portal handles socially charged phrases</h2>
            <p className="lede">
              Some family-domain material uses elite-social language when describing Caracas circles. The portal keeps the historical context but does not rely on prestige language as a substitute for evidence.
            </p>
            <p>
              Banvelca&apos;s Clementina page says that after her marriage she became part of the circle known as the &ldquo;Twenty Families,&rdquo; the so-called &ldquo;Masters of the Valley&rdquo; of Caracas. The portal records that because it is part of the public family narrative. But it also translates the claim into a more useful editorial question: what institutions, places, and biographies actually make the family presence in Caracas legible?
            </p>
            <p>
              The answer is the combination of Hacienda de La Vega, Banco Caracas, the Pérez-Matos bridge, Clementina&apos;s marriage, and Belén Clarisa&apos;s cultural work. Those are the concrete anchors that make the city page useful to readers and to search.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Caracas page</h2>
              <p className="muted">
                The Caracas page is a place-led synthesis that connects estate memory, institutional history, marriage, and culture into one geographic dossier.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external">House of Herrera — Family Estates</Link> — Used for the Hacienda de La Vega narrative, its Caracas-Valley setting, the 1899 acquisition note involving the late Banco de Caracas, and the estate&apos;s public-landmark status.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external">House of Herrera — About</Link> — Used for the broader Latin American and later banking reach attached to the Herrera family narrative.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external">Banvelca — Legacy</Link> — Used for the Caracas-linked sequence of Julio César, Belén María, Clementina, Belén Clarisa, Julio José, and later generations.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the Caracas social-elite and family-link chapter.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 Caracas birth year, marriage alliance, and elite-circle language.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for Banco Caracas, Trasnocho Cultural, and Fundación Centro El Portal.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/julio-cesar-velutini-couturier" rel="noopener external">Banvelca — Julio César Velutini Couturier</Link> — Used for Banco Caracas leadership and the bank&apos;s historical importance in Caracas.
                </li>
                <li>
                  <Link href="https://www.britannica.com/place/Caracas" rel="noopener external">Britannica — Caracas</Link> — Used only for external city-level context: Caracas as Venezuela&apos;s capital and the Santiago de León de Caracas founding frame.
                </li>
                <li>
                  <Link href="https://books.google.com/books/about/Los_amos_del_valle.html?id=7KkNAAAAIAAJ" rel="noopener external">Google Books — Los amos del valle</Link> — Used for bibliography metadata around Francisco J. Herrera Luque&apos;s Caracas-Valley contextual work; not treated here as a standalone factual authority.
                </li>
                <li>
                  <Link href="https://books.google.com/books/about/La_Vega.html?id=MXtdAAAAMAAJ" rel="noopener external">Google Books — La Vega: A Colonial Casa</Link> — Used for bibliography metadata around the Hacienda de La Vega estate-context lead; not treated here as a standalone factual authority.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Caracas cluster</h2>
            <div className="button-row">
              <Link className="button" href="/entities/banco-caracas/">Banco Caracas</Link>
              <Link className="button-secondary" href="/entities/hacienda-de-la-vega/">Hacienda de La Vega</Link>
              <Link className="button-secondary" href="/entities/clementina-velutini-perez-matos/">Clementina Velutini Pérez-Matos</Link>
              <Link className="button-secondary" href="/families/herrera-velutini-connection/">Herrera and Velutini</Link>
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