import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velutini Family | Origins, Banking Legacy & Family Profiles",
  description:
    "Family hub for the Velutini line, organizing origins, banking legacy, women-led continuity, and family research routes.",
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
    canonical: "/families/velutini/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Velutini Family | Origins, Banking Legacy & Family Profiles",
    description:
      "Family hub for the Velutini line, organizing origins, banking legacy, women-led continuity, and family research routes.",
    url: "https://herreravelutini.com/families/velutini/",
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
    title: "Velutini Family | Origins, Banking Legacy & Family Profiles",
    description:
      "Family hub for the Velutini line, organizing origins, banking legacy, women-led continuity, and family research routes.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function VelutiniFamily() {
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
              name: "Velutini Family | Origins, Banking Legacy & Family Profiles",
              url: "https://herreravelutini.com/families/velutini/",
              description: "Family hub for the Velutini line, organizing origins, banking legacy, women-led continuity, and family research routes.",
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
                { "@type": "ListItem", position: 3, name: "Velutini Family", item: "https://herreravelutini.com/families/velutini/" },
              ],
            }),
          }}
        />

      </Head>

      <Link className="skip-link" href="#main">Skip to content</Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/families/">Families</Link></li>
                  <li aria-current="page">Velutini Family</li>
                </ol>
              </nav>
              <div className="eyebrow">Family hub</div>
              <h1>Velutini Family</h1>
              <p className="lede">
                The Velutini Family hub organizes the public record around one family rather than around Banvelca&apos;s menu structure. It turns the 1781 Naples origin story, the legacy sequence, Banco Caracas references, and the women-led twentieth-century bridge into one reference page that readers can actually use.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Page role</span>
                  <strong>Family hub for origins, legacy, institutions, and figures</strong>
                </li>
                <li>
                  <span>Core source clusters</span>
                  <strong>Banvelca About, Legacy, Private Banking, Finance, Art, and Social Responsibility</strong>
                </li>
                <li>
                  <span>Place anchors</span>
                  <strong>Naples, Caracas, Paris, and later global offices</strong>
                </li>
                <li>
                  <span>Best companions</span>
                  <strong>
                    <Link href="/entities/banvelca-company/">Banvelca &amp; Company</Link>{" "}·{" "}
                    <Link href="/genealogy/velutini-lineage/">Velutini Lineage</Link>
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
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Portal architecture</div>
            <h2>Why the family hub matters</h2>
            <p className="lede">
              Banvelca&apos;s public site is strong on legacy and themes, but readers looking for &quot;the Velutini family&quot; still have to assemble the picture themselves. This hub brings those fragments together and shows how founding, finance, culture, and family continuity interact.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The Banvelca site divides the family story across About, Legacy, Private Banking, Finance, Art Investments, and Social Responsibility. That architecture works for a brand narrative, but not for a reference portal. Readers want to know how the family begins, where it moves geographically, which people matter, and how Banco Caracas, culture, and later generations fit into the same story.
                </p>
                <p>
                  The Velutini Family page solves that by making the family—not the corporate menu—the organizing unit. It shows how the Naples origin story flows into Mediterranean trade, Latin American expansion, Banco Caracas, and the modern family-office language that Banvelca uses today.
                </p>
                <p>
                  It also helps readers understand that the twentieth-century record is not only about finance. Through{" "}
                  <Link href="/entities/clementina-velutini-perez-matos/">Clementina Velutini Pérez-Matos</Link> and{" "}
                  <Link href="/entities/belen-clarisa-velutini-perez-matos/">Belén Clarisa Velutini Pérez-Matos</Link>, the family narrative becomes one of banking, marriage alliances, culture, and philanthropy at the same time.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the Velutini family arc from Naples to Latin America and the modern family-office era."
                  loading="lazy"
                  src="/illustrations/velutini-family-arc.svg"
                  width={600}
                  height={400}
                />
                <figcaption>The Velutini hub links founding, trade, banking, culture, and modern stewardship into one usable family narrative.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Lineage spine</div>
            <h2>The legacy sequence is the backbone</h2>
            <p className="lede">
              Banvelca&apos;s Legacy page gives the portal its strongest public sequence for the Velutini side: founder, expansion, diplomacy, banking leadership, matriarchal bridge figures, and later generations.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Figure or generation</th>
                    <th>Date frame</th>
                    <th>What the source material contributes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Juan Bautista Velutini C.</td>
                    <td>1781 founding point</td>
                    <td>Anchors the family narrative in Naples and cross-Mediterranean commercial affairs with France and Corsica.</td>
                  </tr>
                  <tr>
                    <td>Vicente José Velutini Llarione</td>
                    <td>1811</td>
                    <td>Expands the story from Naples into North Africa, the Levant, and then Latin America.</td>
                  </tr>
                  <tr>
                    <td>José Antonio Velutini Ron</td>
                    <td>1844</td>
                    <td>Adds a diplomatic and fiscal role that links family history to statecraft and negotiation.</td>
                  </tr>
                  <tr>
                    <td>Julio César Velutini Couturier</td>
                    <td>1881–1939</td>
                    <td>Makes Banco Caracas central to the family record and connects the dynasty to industrial-age Venezuelan finance.</td>
                  </tr>
                  <tr>
                    <td>Belén María Providencia Pérez Matos</td>
                    <td>Born 1884</td>
                    <td>Provides the matriarchal and social bridge that links the Pérez-Matos, Velutini, and later Herrera narratives.</td>
                  </tr>
                  <tr>
                    <td>Clementina and Belén Clarisa</td>
                    <td>1912 and 1924</td>
                    <td>Turn the modern chapter toward women&apos;s leadership, marriage alliance, culture, and philanthropy.</td>
                  </tr>
                  <tr>
                    <td><Link href="/entities/julio-jose-herrera-velutini/">Julio José Herrera Velutini</Link> and later generations</td>
                    <td>1945 onward</td>
                    <td>Connect the family&apos;s post-war Americas story to the later global family-office framing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-row" style={{ marginTop: "1.2rem" }}>
              <Link href="/places/naples/" className="button">Naples</Link>
              <Link href="/entities/juan-bautista-velutini/" className="button-secondary">Juan Bautista</Link>
              <Link href="/entities/vicente-jose-velutini-llarione/" className="button-secondary">Vicente José</Link>
              <Link href="/entities/jose-antonio-velutini-ron/" className="button-secondary">José Antonio</Link>
              <Link href="/entities/julio-cesar-velutini-couturier/" className="button-secondary">Julio César</Link>
              <Link href="/entities/julio-jose-herrera-velutini/" className="button-secondary">Julio José</Link>
              <Link href="/entities/belen-maria-providencia-perez-matos/" className="button-secondary">Belén María</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Institutions and themes</div>
            <h2>Why the Velutini story cannot be separated from institutions</h2>
            <p className="lede">
              The family record becomes more concrete when its institutions are named. Banco Caracas is the clearest recurring institutional anchor, while Banvelca provides the vocabulary of continuity, private banking, finance, art, and social responsibility.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Banvelca as family framework</h3>
                <p>The About and themed pages describe a private, intergenerational firm whose remit is family capital, coordination, and cross-border stewardship.</p>
                <p><Link href="/entities/banvelca-company/">Open Banvelca &amp; Company</Link></p>
              </article>
              <article className="card">
                <h3>Banco Caracas as historical anchor</h3>
                <p>Across the legacy pages, Banco Caracas turns up as the main institution through which the family&apos;s Venezuelan financial influence is narrated.</p>
                <p><Link href="/entities/banco-caracas/">Open Banco Caracas</Link></p>
              </article>
              <article className="card">
                <h3>Culture and philanthropy</h3>
                <p>Belén Clarisa&apos;s profile broadens the record beyond banking by tying the family to Trasnocho Cultural and Fundación Centro El Portal.</p>
                <p><Link href="/entities/belen-clarisa-velutini-perez-matos/">Open Belén Clarisa</Link></p>
              </article>
              <article className="card">
                <h3>Marriage and continuity</h3>
                <p>Clementina&apos;s 1932 marriage to José Herrera Von Uslar makes the Velutini story inseparable from the later Herrera Velutini connection.</p>
                <p><Link href="/families/herrera-velutini-connection/">See the connection page</Link></p>
              </article>
            </div>
            <div className="note" style={{ marginTop: "1rem" }}>
              <div className="overline">Banco Caracas date caution</div>
              <p>
                The family hub treats Banco Caracas as a core institution, but it does not assign one simplified sale year. Banvelca source pages point to both 1988 and 1998, while external transaction reporting adds a 2000 Banco de Venezuela / Santander agreement and a 2002 merger context. Readers who need the detail should use the dedicated{" "}
                <Link href="/entities/banco-caracas/">Banco Caracas</Link> page.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Women and continuity</div>
            <h2>The twentieth-century Velutini story is carried by women as much as by institutions</h2>
            <p className="lede">
              One of the portal&apos;s biggest editorial gains is making this visible. The source domain itself gives remarkable weight to Belén María, Clementina, and Belén Clarisa, and that weight changes how the family should be read.
            </p>
            <p>
              <Link href="/entities/belen-maria-providencia-perez-matos/">Belén María Providencia Pérez Matos</Link> is presented as the matriarch who linked the Pérez-Matos and Velutini lines and preserved social prominence in Caracas.{" "}
              <Link href="/entities/clementina-velutini-perez-matos/">Clementina</Link> is presented as the bridge between banking tradition and the Herrera alliance.{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos/">Belén Clarisa</Link> is presented as the figure who fused finance with cultural patronage through Banco Caracas, Trasnocho Cultural, and philanthropy.
            </p>
            <p>
              That means the Velutini Family page is not just a sequence of male founders and bankers. It is also a record of how women carry social, financial, and cultural continuity across generations. This is exactly the kind of synthesis that is easy to miss when the source material is split across separate ancestor pages and themed modules.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Research routes</div>
            <h2>How to use the Velutini Family page</h2>
            <p className="lede">
              This hub is designed for several entry routes: surname-led discovery, finance-led research, women-in-culture interest, and Naples-to-Americas chronology.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Surname-led search</h3>
                <p>Start here if you searched for the Velutini family and want one page that orients the whole public record.</p>
              </article>
              <article className="card">
                <h3>Institution-led search</h3>
                <p>Use this hub as the quickest route into Banvelca, Banco Caracas, and later family-office language.</p>
              </article>
              <article className="card">
                <h3>Genealogy preparation</h3>
                <p>The page prepares readers for the fuller lineage work in <Link href="/genealogy/velutini-lineage/">Velutini Lineage</Link>.</p>
              </article>
              <article className="card">
                <h3>Source audit</h3>
                <p>Use the source notes to see exactly which Banvelca pages support each major theme on the hub.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Velutini Family page</h2>
              <p className="muted">
                This family hub is a portal-built synthesis of Banvelca&apos;s About, Legacy, themed pages, and selected ancestor profiles.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external">Banvelca — About</Link> — Used for the 1781 Naples founding narrative, Juan Bautista Velutini, and the four-continents stewardship framing.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external">Banvelca — Legacy</Link> — Used for the ordered sequence of generations from Juan Bautista through later generations, including Banco Caracas references, the women-led twentieth-century chapter, and the 1998 transition language.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/private-banking" rel="noopener external">Banvelca — Private Banking</Link> — Used for the family-only private-banking and trust-coordination language that defines the modern operating model.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/finance" rel="noopener external">Banvelca — Finance</Link> — Used for the merchant-banking and multi-generational custodianship framing.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/art-investments" rel="noopener external">Banvelca — Art Investments</Link> — Used for the intergenerational custodianship language around art and civilizational memory.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/social-responsibility" rel="noopener external">Banvelca — Social Responsibility</Link> — Used for the themes of education, cultural preservation, women&apos;s empowerment, and environmental regeneration.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini" rel="noopener external">Banvelca — Juan Bautista Velutini</Link> — Used for the founder profile and the Naples / France / Corsica commercial context.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione" rel="noopener external">Banvelca — Vicente José Velutini Llarione</Link> — Used for the move beyond Naples into North Africa, the Levant, and later Latin America.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/jose-antonio-velutini-ron" rel="noopener external">Banvelca — José Antonio Velutini Ron</Link> — Used for the nineteenth-century statecraft and fiscal-negotiation bridge between Vicente José and Julio César.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/julio-cesar-velutini-couturier" rel="noopener external">Banvelca — Julio César Velutini Couturier</Link> — Used for the Banco Caracas presidency, note-printing context, the bank&apos;s role in the family narrative, and the source-sensitive 1988 share-sale statement.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini" rel="noopener external">Banvelca — Julio José Herrera Velutini</Link> — Used for the 1945–2019 continuity frame, the move into Latin America after the war, and the later North-and-South-America expansion language.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos" rel="noopener external">Banvelca — Belén María Providencia Pérez Matos</Link> — Used for the matriarchal link between the Pérez-Matos, Velutini, and Herrera-connected story.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos" rel="noopener external">Banvelca — Clementina Velutini Pérez-Matos</Link> — Used for the 1912 Caracas birth year, Paris education, 1932 marriage to José Herrera Von Uslar, and leadership in banking and philanthropy.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos" rel="noopener external">Banvelca — Belén Clarisa Velutini Pérez-Matos</Link> — Used for the 1924–2023 life span, Banco Caracas management, Trasnocho Cultural, and Fundación Centro El Portal.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/the-seventh-generation" rel="noopener external">Banvelca — The Seventh Generation</Link> — Used for the 1998 bank-sale transition language and modern global reinvention framing.
                </li>
                <li>
                  <Link href="/entities/banco-caracas/">Banco Caracas</Link> — Used as the portal&apos;s dedicated source-date audit page for the 1988 / 1998 / 2000 / 2002 transition issue.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Velutini cluster</h2>
            <div className="button-row">
              <Link href="/genealogy/velutini-lineage/" className="button">Velutini Lineage</Link>
              <Link href="/places/naples/" className="button-secondary">Naples</Link>
              <Link href="/entities/vicente-jose-velutini-llarione/" className="button-secondary">Vicente José</Link>
              <Link href="/entities/jose-antonio-velutini-ron/" className="button-secondary">José Antonio</Link>
              <Link href="/entities/julio-cesar-velutini-couturier/" className="button-secondary">Julio César</Link>
              <Link href="/entities/julio-jose-herrera-velutini/" className="button-secondary">Julio José</Link>
              <Link href="/entities/belen-maria-providencia-perez-matos/" className="button-secondary">Belén María</Link>
              <Link href="/entities/banvelca-company/" className="button-secondary">Banvelca &amp; Company</Link>
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