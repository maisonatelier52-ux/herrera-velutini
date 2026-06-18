import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Investment and Patronage | Cultural Custodianship Across Generations",
  description:
    "An original synthesis of Banvelca's art-investment framing, explaining how the source domain describes art as inheritance and how the portal connects that idea to cultural patronage in Caracas.",

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
    canonical: "/themes/art-investment-and-patronage/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Art Investment and Patronage | Cultural Custodianship Across Generations",
    description:
      "An original synthesis of Banvelca's art-investment framing, explaining how the source domain describes art as inheritance and how the portal connects that idea to cultural patronage in Caracas.",
    url: "https://herreravelutini.com/themes/art-investment-and-patronage/",
    images: [
      {
        url: "/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],

    // Article-specific OG fields
    publishedTime: "2026-04-20",
    modifiedTime: "2026-04-20",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Art Investment and Patronage | Cultural Custodianship Across Generations",
    description:
      "An original synthesis of Banvelca's art-investment framing, explaining how the source domain describes art as inheritance and how the portal connects that idea to cultural patronage in Caracas.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function ArtInvestmentAndPatronage() {
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
              url: "https://herreravelutini.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://herreravelutini.com/brand-wordmark.svg",
              },
              publishingPrinciples:
                "https://herreravelutini.com/editorial-methodology/",
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
              "@id":
                "https://herreravelutini.com/themes/art-investment-and-patronage/#article",
              headline: "Art Investment and Patronage",
              description:
                "An original synthesis of Banvelca's art-investment framing, explaining how the source domain describes art as inheritance and how the portal connects that idea to cultural patronage in Caracas.",
              url: "https://herreravelutini.com/themes/art-investment-and-patronage/",
              datePublished: "2026-04-20",
              dateModified: "2026-04-20",
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: {
                "@id": "https://herreravelutini.com/#organization",
              },
              about: [
                "Banvelca",
                "art investments",
                "cultural patronage",
                "Belén Clarisa",
                "Caracas",
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
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://herreravelutini.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Themes",
                  item: "https://herreravelutini.com/themes/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Art Investment and Patronage",
                  item: "https://herreravelutini.com/themes/art-investment-and-patronage/",
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
                  <li><Link href="/themes/" title="Themes">Themes</Link></li>
                  <li aria-current="page">Art Investment and Patronage</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Art Investment and Patronage</h1>
              <p className="lede">
                Banvelca&apos;s art page measures value through permanence rather than price. On
                the portal, that language is read as a statement about intergenerational
                custodianship, one that becomes meaningful only when it is tied to public
                cultural anchors such as Caracas and Belén Clarisa Velutini Pérez-Matos.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary source</span>
                  <strong>Banvelca — Art Investments</strong>
                </li>
                <li>
                  <span>Core idea</span>
                  <strong>Art as inheritance and civilizational memory</strong>
                </li>
                <li>
                  <span>Public anchor</span>
                  <strong>Belén Clarisa and cultural patronage in Caracas</strong>
                </li>
                <li>
                  <span>Related theme</span>
                  <strong>
                    <Link href="/themes/social-responsibility/" title="Social Responsibility">Social Responsibility</Link>
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
              <Link href="/editorial-desk/" title="Herrera Velutini Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/" title="Standards Review Team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-20">April 20, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-20">April 20, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Core reading</div>
            <h2>The art page is about custody, not collecting for display</h2>
            <p className="lede">
              The source page describes art as something acquired, safeguarded, and quietly
              patronized across generations. The portal therefore treats the theme as cultural
              stewardship rather than as a catalog of holdings or a market-oriented investment
              strategy.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Inheritance</h3>
                <p>
                  Art is presented as something handed forward, which is why the portal reads
                  the theme through continuity and legacy.
                </p>
              </article>
              <article className="card">
                <h3>Custodianship</h3>
                <p>
                  The source language is about safeguarding and preserving meaning over time,
                  not maximizing turnover or short-term returns.
                </p>
              </article>
              <article className="card">
                <h3>Patronage</h3>
                <p>
                  Because the source page also uses the language of quiet patronage, the portal
                  links the theme outward to public cultural work where the record becomes more
                  concrete.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Concrete anchors</div>
            <h2>Caracas gives the theme a public face</h2>
            <p className="lede">
              The art page itself is thematic, so the portal turns to other pages for grounding.
              The strongest public anchor is{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos/" title="Belén Clarisa Velutini Pérez-Matos">
                Belén Clarisa Velutini Pérez-Matos
              </Link>
              , whose profile ties cultural stewardship to Trasnocho Cultural and Fundación
              Centro El Portal in Caracas.
            </p>
            <p>
              That is why this theme routes readers into the{" "}
              <Link href="/places/caracas/" title="Caracas">Caracas</Link> dossier and the broader{" "}
              <Link href="/stewardship/" title="Stewardship">Stewardship </Link> page. Those pages show how
              art-language on the source domain fits within a larger story about culture,
              patronage, and the family record&apos;s public-facing institutions.
            </p>
            <p>
              The same logic also keeps the theme close to place and estate memory. While the
              Banvelca art page is the direct source here, the portal&apos;s wider cultural layer
              also includes sites such as{" "}
              <Link href="/entities/hacienda-de-la-vega/" title="Hacienda de La Vega">Hacienda de La Vega</Link>, where
              family and place memory intersect with later cultural life.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Source limits</div>
            <h2>The portal interprets the posture without inventing an art catalog</h2>
            <p className="lede">
              This is one of the clearest cases where the portal must add structure while
              preserving limits. The source page provides a philosophy of art stewardship, but
              it does not enumerate works, collections, or transactions.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">What the source gives</div>
                <h3>A declared custodianship model</h3>
                <p>
                  The page supplies the family&apos;s own framing of art as permanence,
                  inheritance, and quiet patronage.
                </p>
              </article>
              <article className="callout">
                <div className="overline">What the portal adds</div>
                <h3>Named people and places</h3>
                <p>
                  The portal adds Belén Clarisa, Caracas, and the broader stewardship cluster
                  so the theme can be read as part of a coherent knowledge base.
                </p>
              </article>
              <article className="callout">
                <div className="overline">What the portal avoids</div>
                <h3>No invented holdings or valuations</h3>
                <p>
                  Because the source material is thematic, the page does not invent collection
                  details or a market history that the public record does not supply.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis</h2>
              <p className="muted">
                This page reads Banvelca&apos;s art-language as a cultural-custodianship theme
                and grounds it in the public cultural material already present elsewhere in the
                portal.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com"
                    rel="noopener external"
                    title="Banvelca — Art Investments"
                  >
                    Banvelca — Art Investments
                  </Link>{" "}
                  — Used for the framing of art as intergenerational custodianship, inheritance,
                  and permanence.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the broader framing of the family record as spanning finance,
                  philanthropy, and the arts.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com"
                    rel="noopener external"
                    title="Banvelca — Belén Clarisa Velutini Pérez-Matos"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the connection between cultural patronage, Trasnocho Cultural, and
                  public philanthropic work.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com"
                    rel="noopener external"
                    title="Banvelca — Social Responsibility"
                  >
                    Banvelca — Social Responsibility
                  </Link>{" "}
                  — Used for the adjacent cultural-preservation theme that strengthens the
                  public-facing interpretation.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                    title="House of Herrera — Family Estates"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the wider estate-and-cultural-memory layer around Hacienda de La
                  Vega referenced in this synthesis.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the culture and custodianship layer</h2>
            <div className="button-row">
              <Link href="/themes/social-responsibility/" className="button" title="Social Responsibility">
                Social Responsibility
              </Link>
              <Link
                href="/entities/belen-clarisa-velutini-perez-matos/"
                className="button-secondary"
                title="Belén Clarisa Velutini Pérez-Matos"
              >
                Belén Clarisa Velutini Pérez-Matos
              </Link>
              <Link href="/places/caracas/" className="button-secondary" title="Caracas">
                Caracas
              </Link>
              <Link href="/stewardship/" className="button-secondary" title="Stewardship">
                Stewardship
              </Link>
              <Link href="/themes/women-of-the-families/" className="button-secondary" title="Women of the Families">
                Women of the Families
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
              organizations, places, and interpretive themes associated with the Herrera and
              Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about/" title="About">About</Link></li>
              <li><Link href="/heritage/" title="Heritage">Heritage</Link></li>
              <li><Link href="/themes/" title="Themes">Themes</Link></li>
              <li><Link href="/stewardship/" title="Stewardship">Stewardship</Link></li>
              <li><Link href="/places/" title="Places">Places</Link></li>
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
              <li>
                <Link href="/entities/belen-clarisa-velutini-perez-matos/" title="Belén Clarisa">Belén Clarisa
                </Link>
              </li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
              <li>
                <Link href="/themes/social-responsibility/" title="Social Responsibility">Social Responsibility</Link>
              </li>
              <li><Link href="/stewardship/" title="Stewardship">Stewardship</Link></li>
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