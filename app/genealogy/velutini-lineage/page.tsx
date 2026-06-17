import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Velutini Lineage | Family Tree from Naples to the Americas",
  description:
    "Lineage page translating the public Velutini sequence into a readable family map from Naples to the Americas.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/genealogy/velutini-lineage/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Velutini Lineage | Family Tree from Naples to the Americas",
    description:
      "Lineage page translating the public Velutini sequence into a readable family map from Naples to the Americas.",
    url: "https://herreravelutini.com/genealogy/velutini-lineage/",
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
    title: "Velutini Lineage | Family Tree from Naples to the Americas",
    description:
      "Lineage page translating the public Velutini sequence into a readable family map from Naples to the Americas.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function VelutiniLineagePage() {
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
              "Velutini Lineage | Family Tree from Naples to the Americas",
            description:
              "Lineage page translating the public Velutini sequence into a readable family map from Naples to the Americas.",
            datePublished: "2026-04-18",
            dateModified: "2026-04-25",
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
              "https://herreravelutini.com/genealogy/velutini-lineage/",
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
                name: "Genealogy",
                item: "https://herreravelutini.com/genealogy/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Velutini Lineage",
                item:
                  "https://herreravelutini.com/genealogy/velutini-lineage/",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <Link className="skip-link" href="#main" title="Skip to content">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/" title="Home">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/genealogy/" title="Genealogy">Genealogy</Link></li>
                  <li aria-current="page">Velutini Lineage</li>
                </ol>
              </nav>
              <div className="eyebrow">Lineage page</div>
              <h1>Velutini Lineage</h1>
              <p className="lede">
                The Velutini Lineage page translates Banvelca&apos;s Legacy sequence into a lineage map from Naples to the Americas. It preserves the public chronology, marks where the record becomes institutional through Banco Caracas, and treats the women&apos;s chapter as central to continuity rather than as a side branch.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Lineage frame</span>
                  <strong>Naples to the Americas</strong>
                </li>
                <li>
                  <span>Backbone source</span>
                  <strong>Banvelca — Legacy</strong>
                </li>
                <li>
                  <span>Institutional anchor</span>
                  <strong><Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link></strong>
                </li>
                <li>
                  <span>Connection pivot</span>
                  <strong><Link href="/entities/clementina-velutini-perez-matos/" title="Clementina Velutini Pérez-Matos">Clementina Velutini Pérez-Matos</Link></strong>
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
            <div className="overline">Method note</div>
            <h2>This lineage mixes direct succession, branch continuity, and public-family narrative</h2>
            <p className="lede">
              Banvelca&apos;s Legacy page is especially valuable because it provides named generations in order. But some later figures are better read as continuity anchors, siblings, or strategic generations rather than as one simple vertical tree.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The public Velutini record is clearer than many family websites because it begins with a founder, moves through a trade-expansion generation and a statesman, then anchors itself in Banco Caracas, the Pérez-Matos bridge, and later generations. That gives the portal a much stronger nineteenth- and twentieth-century lineage than it would otherwise have.
                </p>
                <p>
                  At the same time, the page&apos;s public sequence includes siblings and generations whose relationship to one another is thematic as well as genealogical. The portal therefore keeps the order while explaining the function of each figure: founder, expansion, finance, matriarch, banking sisters, post-war continuity, and later generational stewardship.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the Velutini lineage route from Naples to Mediterranean trade, Latin America, Banco Caracas, and global offices."
                  loading="lazy"
                  src="/illustrations/velutini-lineage-route.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  The Velutini sequence is strongest when read as founder-to-expansion-to-banking-to-modern-stewardship continuity.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Published backbone</div>
            <h2>The current public sequence from the Banvelca Legacy page</h2>
            <p className="lede">
              This table preserves the published chronology while noting how the portal interprets the role of each figure.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Figure or generation</th>
                    <th>Date frame</th>
                    <th>Portal reading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juan Bautista Velutini C.</td>
                    <td>1781</td>
                    <td>Founder of Banvelca in Naples and the clearest origin point for the family narrative.</td>
                  </tr>
                  <tr>
                    <td>Vicente José Velutini Llarione</td>
                    <td>1811</td>
                    <td>Trade-expansion figure who extends the story toward North Africa, the Levant, and then Latin America.</td>
                  </tr>
                  <tr>
                    <td>José Antonio Velutini Ron</td>
                    <td>1844</td>
                    <td>Statesman and fiscal negotiator who brings the family into a diplomatic and financial statecraft frame.</td>
                  </tr>
                  <tr>
                    <td>Julio César Velutini Couturier</td>
                    <td>1881–1939</td>
                    <td>The key Banco Caracas figure and the most important institutional anchor for the lineage.</td>
                  </tr>
                  <tr>
                    <td>Belén María Providencia Pérez Matos</td>
                    <td>Born 1884</td>
                    <td>Matriarchal figure who ties the Pérez-Matos family into the line and strengthens the later Herrera bridge.</td>
                  </tr>
                  <tr>
                    <td>Clementina Velutini Pérez-Matos</td>
                    <td>1912</td>
                    <td>Marriage bridge to José Herrera Von Uslar and a women-in-banking continuity figure.</td>
                  </tr>
                  <tr>
                    <td>Belén Clarisa Velutini Pérez-Matos</td>
                    <td>1924–2023</td>
                    <td>Banking, culture, and philanthropy figure whose profile widens the meaning of continuity.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/julio-jose-herrera-velutini/" title="Julio José Herrera Velutini">Julio José Herrera Velutini</Link></td>
                    <td>1945–2019</td>
                    <td>Post-war Americas figure who makes the combined surname visible in the continuity story.</td>
                  </tr>
                  <tr>
                    <td>Seventh and eighth generations</td>
                    <td>1971 and 1996</td>
                    <td>Modern stewardship figures who move the story into global finance, digital assets, and later family-office language.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-row" style={{ marginTop: "1.2rem" }}>
              <Link className="button" href="/entities/juan-bautista-velutini/" title="Juan Bautista Velutini">Juan Bautista</Link>
              <Link className="button-secondary" href="/entities/vicente-jose-velutini-llarione/" title="Vicente José Velutini Llarione">Vicente José</Link>
              <Link className="button-secondary" href="/entities/jose-antonio-velutini-ron/" title="José Antonio Velutini Ron">José Antonio</Link>
              <Link className="button-secondary" href="/entities/julio-cesar-velutini-couturier/" title="Julio César Velutini Couturier">Julio César</Link>
              <Link className="button-secondary" href="/entities/julio-jose-herrera-velutini/" title="Julio José Herrera Velutini">Julio José</Link>
              <Link className="button-secondary" href="/places/naples/" title="Naples">Naples</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Banco Caracas changes the lineage</div>
            <h2>Institutional history becomes part of family history</h2>
            <p className="lede">
              On the Velutini side, lineage is not only a matter of kinship. It is also a matter of institutions that persist across generations.
            </p>
            <p>
              <Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas </Link> is the clearest example. The Julio César page identifies him as president of Banco Caracas in the 1890s and places the bank at the center of the family&apos;s industrial-age success. Belén Clarisa&apos;s profile then links the bank to twentieth-century management, major shareholding, and culture. The later-generation page frames a bank-sale transition as the turning point that preceded the family&apos;s modern global reinvention.
            </p>
            <p>
              The transition date is source-sensitive: Banvelca points to both 1988 and 1998 in different places, while external transaction reporting adds a 2000 Banco de Venezuela / Santander agreement and a 2002 merger context. That means the Velutini lineage is unusually rich for a public family narrative, but it must be read simultaneously as genealogy, institutional history, and source-date audit.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">The women&apos;s chapter is central</div>
            <h2>Belén María, Clementina, and Belén Clarisa are not side notes</h2>
            <p className="lede">
              The source material itself makes them central to continuity, and the portal follows that lead.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Matriarchal bridge</div>
                <h3>Belén María</h3>
                <p>Links the Pérez-Matos and Velutini lines and prepares the later Herrera connection.</p>
              </article>
              <article className="callout">
                <div className="overline">Marriage and banking</div>
                <h3>Clementina</h3>
                <p>Joins the Herrera and Velutini stories while also being presented as a pioneer for women in banking.</p>
              </article>
              <article className="callout">
                <div className="overline">Culture and institution</div>
                <h3>Belén Clarisa</h3>
                <p>Makes finance, Banco Caracas, culture, and philanthropy part of the same continuity chapter.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Velutini Lineage page</h2>
              <p className="muted">
                This lineage page is a source-led synthesis that preserves Banvelca&apos;s published sequence while explaining where the public record works as a direct line and where it works better as a continuity map.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">Banvelca — About</Link> — Used for the 1781 Naples founding story and the long-duration firm framing.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link> — Used for the published generation sequence from Juan Bautista to later generations, including the 1998 transition language.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini" rel="noopener external" title="Banvelca — Juan Bautista Velutini">Banvelca — Juan Bautista Velutini</Link> — Used for the founder profile and cross-Mediterranean commercial context.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione" rel="noopener external" title="Banvelca — Vicente José Velutini Llarione">Banvelca — Vicente José Velutini Llarione</Link> — Used for the trade-expansion chapter and the move toward Latin America.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/jose-antonio-velutini-ron" rel="noopener external" title="Banvelca — José Antonio Velutini Ron">Banvelca — José Antonio Velutini Ron</Link> — Used for the statesman and fiscal-negotiation layer between Vicente José and Julio César.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/julio-cesar-velutini-couturier" rel="noopener external" title="Banvelca — Julio César Velutini Couturier">Banvelca — Julio César Velutini Couturier</Link> — Used for Banco Caracas, note printing before a central bank, the long institutional hold of the family, and the 1988 share-sale statement.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external" title="Banvelca — Belén María Providencia Pérez Matos">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal bridge between the Pérez-Matos and later Herrera-connected line.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external" title="Banvelca — Clementina Velutini Pérez-Matos">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 Caracas birth year, Paris education, 1932 marriage, and banking/philanthropic leadership.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external" title="Banvelca — Belén Clarisa Velutini Pérez-Matos">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for the culture-and-banking chapter, Trasnocho Cultural, and Banco Caracas management.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini" rel="noopener external" title="Banvelca — Julio José Herrera Velutini">Banvelca — Julio José Herrera Velutini</Link> — Used for the post-war Americas continuity chapter.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/the-seventh-generation" rel="noopener external" title="Banvelca — The Seventh Generation">Banvelca — The Seventh Generation</Link> — Used for the 1998 bank-sale transition and the modern global family-office reinvention.
                </li>
                <li>
                  <Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link> — Used as the dedicated institutional page documenting the 1988 / 1998 / 2000 / 2002 source-date issue.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Velutini lineage cluster</h2>
            <div className="button-row">
              <Link className="button" href="/families/velutini/" title="Velutini Family">Velutini Family</Link>
              <Link className="button-secondary" href="/entities/vicente-jose-velutini-llarione/" title="Vicente José Velutini Llarione">Vicente José</Link>
              <Link className="button-secondary" href="/entities/jose-antonio-velutini-ron/" title="José Antonio Velutini Ron">José Antonio</Link>
              <Link className="button-secondary" href="/entities/julio-cesar-velutini-couturier/" title="Julio César Velutini Couturier">Julio César</Link>
              <Link className="button-secondary" href="/entities/julio-jose-herrera-velutini/" title="Julio José Herrera Velutini">Julio José</Link>
              <Link className="button-secondary" href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link>
              <Link className="button-secondary" href="/entities/clementina-velutini-perez-matos/" title="Clementina Velutini Pérez-Matos">Clementina Velutini Pérez-Matos</Link>
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