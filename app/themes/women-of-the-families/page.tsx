import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Women of the Families | Belén María, Clementina and Belén Clarisa",

  description:
    "An original synthesis showing why Belén María Providencia Pérez Matos, Clementina Velutini Pérez-Matos, and Belén Clarisa Velutini Pérez-Matos are central to the portal's modern family bridge.",

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
    canonical: "/themes/women-of-the-families/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Women of the Families | Belén María, Clementina and Belén Clarisa",
    description:
      "An original synthesis showing why Belén María Providencia Pérez Matos, Clementina Velutini Pérez-Matos, and Belén Clarisa Velutini Pérez-Matos are central to the portal's modern family bridge.",
    url: "https://herreravelutini.com/themes/women-of-the-families/",
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
      "Women of the Families | Belén María, Clementina and Belén Clarisa",
    description:
      "An original synthesis showing why Belén María Providencia Pérez Matos, Clementina Velutini Pérez-Matos, and Belén Clarisa Velutini Pérez-Matos are central to the portal's modern family bridge.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function WomenOfTheFamilies() {
  return (
    <>
      <Head>

        {/* Article dates */}
        <meta property="article:published_time" content="2026-04-20" />
        <meta property="article:modified_time" content="2026-04-20" />

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
                "https://herreravelutini.com/themes/women-of-the-families/#article",
              headline: "Women of the Families",
              description:
                "An original synthesis showing why Belén María Providencia Pérez Matos, Clementina Velutini Pérez-Matos, and Belén Clarisa Velutini Pérez-Matos are central to the portal's modern family bridge.",
              url: "https://herreravelutini.com/themes/women-of-the-families/",
              datePublished: "2026-04-20",
              dateModified: "2026-04-20",
              author: {
                "@id": "https://herreravelutini.com/editorial-desk/#org",
              },
              editor: {
                "@id": "https://herreravelutini.com/review-team/#org",
              },
              publisher: {
                "@id": "https://herreravelutini.com/#organization",
              },
              about: [
                "Belén María Providencia Pérez Matos",
                "Clementina Velutini Pérez-Matos",
                "Belén Clarisa Velutini Pérez-Matos",
                "Herrera and Velutini connection",
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
                  name: "Women of the Families",
                  item: "https://herreravelutini.com/themes/women-of-the-families/",
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
                  <li aria-current="page">Women of the Families</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Women of the Families</h1>
              <p className="lede">
                The portal&apos;s modern family bridge is impossible to explain without the women
                whose profiles carry it. Belén María Providencia Pérez Matos, Clementina Velutini
                Pérez-Matos, and Belén Clarisa Velutini Pérez-Matos are not side figures in this
                knowledge base. They are the clearest public anchors for marriage, banking,
                culture, philanthropy, and the Caracas-centered continuity between the Velutini
                and Herrera lines.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Core figures</span>
                  <strong>Belén María, Clementina, and Belén Clarisa</strong>
                </li>
                <li>
                  <span>Bridge points</span>
                  <strong>
                    Pérez-Matos lineage, 1932 marriage, Banco Caracas, cultural patronage
                  </strong>
                </li>
                <li>
                  <span>Why it matters</span>
                  <strong>The modern record becomes legible through their roles</strong>
                </li>
                <li>
                  <span>Companion page</span>
                  <strong>
                    <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">
                      Herrera and Velutini
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
            <div className="overline">Why this page exists</div>
            <h2>The women are central to the portal&apos;s modern continuity layer</h2>
            <p className="lede">
              The House of Herrera material is strongest on dynasty, estates, symbols, and
              distinctions. Banvelca&apos;s legacy pages add something equally important: a public
              record in which women are central to the family&apos;s modern bridge. This page
              brings those women together so the site can explain continuity without treating them
              as marginal notes.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">1884</div>
                <h3>Belén María Providencia Pérez Matos</h3>
                <p>
                  Belén María is the matriarchal bridge in the Banvelca record, linking the
                  Pérez-Matos line to Julio César Velutini Couturier and, through her daughters,
                  to the later Herrera connection.
                </p>
              </article>
              <article className="callout">
                <div className="overline">1912</div>
                <h3>Clementina Velutini Pérez-Matos</h3>
                <p>
                  Clementina&apos;s profile makes two things public and legible at once: her role
                  in banking and philanthropy, and her 1932 marriage to José Herrera Von Uslar,
                  which the source domain presents as a merger of the two families.
                </p>
              </article>
              <article className="callout">
                <div className="overline">1924 to 2023</div>
                <h3>Belén Clarisa Velutini Pérez-Matos</h3>
                <p>
                  Belén Clarisa extends the record into management, culture, and philanthropy
                  through Banco Caracas, Trasnocho Cultural, and Fundación Centro El Portal.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How the bridge works</div>
            <h2>Marriage, banking, and Caracas are the main connecting threads</h2>
            <p className="lede">
              This theme does not try to flatten three different lives into one archetype. Instead,
              it shows how each figure strengthens a different part of the portal&apos;s family
              graph.
            </p>
            <p>
              Belén María is strongest as a social and familial connector, a figure whose profile
              keeps the Pérez-Matos line visible inside the wider banking and family story.
              Clementina is strongest as the explicit marriage bridge and as a figure who enters
              the family firm after her husband&apos;s death. Belén Clarisa is strongest where
              finance and culture overlap, giving the site one of its clearest public routes from
              Banco Caracas into cultural patronage in Caracas.
            </p>
            <p>
              That is why this page should be read with the{" "}
              <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini connection">
                Herrera and Velutini connection
              </Link>{" "}
              page, the <Link href="/places/caracas/" title="Caracas">Caracas</Link> dossier, the{" "}
              <Link href="/entities/clementina-velutini-perez-matos/" title="Clementina">Clementina</Link> profile,
              and the{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos/" title="Belén Clarisa">Belén Clarisa</Link>{" "}
              profile. Together, those pages explain how women&apos;s roles carry the modern
              continuity of the site.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Source limits</div>
            <h2>
              The portal makes women&apos;s roles visible without inventing a complete social
              history
            </h2>
            <p className="lede">
              The public family-domain record gives real substance here, but it still has limits.
              Belén María&apos;s influence is described primarily through family and patronage.
              Clementina and Belén Clarisa have clearer public-facing role descriptions. The
              portal keeps those differences visible rather than forcing the three profiles into
              one identical template.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Belén María</h3>
                <p>
                  The public record emphasizes lineage, marriage, hosting, patronage, and her role
                  as a matriarchal link between branches.
                </p>
              </article>
              <article className="card">
                <h3>Clementina</h3>
                <p>
                  The public record is stronger on banking, philanthropy, education in Paris, and
                  the importance of the 1932 marriage to José Herrera Von Uslar.
                </p>
              </article>
              <article className="card">
                <h3>Belén Clarisa</h3>
                <p>
                  The public record is strongest on long management at Banco Caracas and her role
                  in cultural and charitable institutions.
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
                This page synthesizes the Banvelca women-centered profiles and uses them as the
                strongest public anchors for the portal&apos;s modern family bridge.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos"
                    rel="noopener external"
                    title="Banvelca — Belén María Providencia Pérez Matos"
                  >
                    Banvelca — Belén María Providencia Pérez Matos
                  </Link>{" "}
                  — Used for the matriarchal link between the Pérez-Matos, Velutini, and later
                  Herrera lines.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos"
                    rel="noopener external"
                    title="Banvelca — Clementina Velutini Pérez-Matos"
                  >
                    Banvelca — Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the 1932 marriage to José Herrera Von Uslar and the
                  banking-and-philanthropy continuity narrative.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos"
                    rel="noopener external"
                    title="Banvelca — Belén Clarisa Velutini Pérez Matos"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez Matos
                  </Link>{" "}
                  — Used for the Banco Caracas role, cultural patronage, and philanthropic
                  institutions.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                    title="Banvelca — Legacy"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the chronological placement of the three figures inside the wider
                  family sequence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the modern family bridge</h2>
            <div className="button-row">
              <Link href="/families/herrera-velutini-connection/" className="button" title="Herrera and Velutini">
                Herrera and Velutini
              </Link>
              <Link
                href="/entities/clementina-velutini-perez-matos/"
                className="button-secondary"
                title="Clementina"
              >
                Clementina
              </Link>
              <Link
                href="/entities/belen-clarisa-velutini-perez-matos/"
                className="button-secondary"
                title="Belén Clarisa"
              >
                Belén Clarisa
              </Link>
              <Link href="/places/caracas/" className="button-secondary" title="Caracas">
                Caracas
              </Link>
              <Link href="/themes/social-responsibility/" className="button-secondary" title="Social Responsibility">
                Social Responsibility
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
              <li><Link href="/families/" title="Families">Families</Link></li>
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
                <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link>
              </li>
              <li>
                <Link href="/entities/clementina-velutini-perez-matos/" title="Clementina">Clementina</Link>
              </li>
              <li>
                <Link href="/entities/belen-clarisa-velutini-perez-matos/" title="Belén Clarisa">Belén Clarisa</Link>
              </li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
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