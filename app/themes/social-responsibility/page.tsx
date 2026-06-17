import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Social Responsibility | Quiet Stewardship, Culture and Women's Empowerment",

  description:
    "An original synthesis of Banvelca's social-responsibility framing, explaining how the portal reads education, cultural preservation, women's empowerment, and environmental regeneration with explicit source limits.",

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
    canonical: "/themes/social-responsibility/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Social Responsibility | Quiet Stewardship, Culture and Women's Empowerment",
    description:
      "An original synthesis of Banvelca's social-responsibility framing, explaining how the portal reads education, cultural preservation, women's empowerment, and environmental regeneration with explicit source limits.",
    url: "https://herreravelutini.com/themes/social-responsibility/",
    images: [
      {
        url: "/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-04-20",
    modifiedTime: "2026-04-20",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Social Responsibility | Quiet Stewardship, Culture and Women's Empowerment",
    description:
      "An original synthesis of Banvelca's social-responsibility framing, explaining how the portal reads education, cultural preservation, women's empowerment, and environmental regeneration with explicit source limits.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function SocialResponsibility() {
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
                "https://herreravelutini.com/themes/social-responsibility/#article",
              headline: "Social Responsibility",
              description:
                "An original synthesis of Banvelca's social-responsibility framing, explaining how the portal reads education, cultural preservation, women's empowerment, and environmental regeneration with explicit source limits.",
              url: "https://herreravelutini.com/themes/social-responsibility/",
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
                "Banvelca",
                "social responsibility",
                "cultural preservation",
                "women's empowerment",
                "environmental regeneration",
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
                  name: "Social Responsibility",
                  item: "https://herreravelutini.com/themes/social-responsibility/",
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
                  <li aria-current="page">Social Responsibility</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Social Responsibility</h1>
              <p className="lede">
                Banvelca&apos;s social-responsibility page frames influence as quiet, durable, and
                largely unannounced. The portal reads that posture through four recurring themes
                the source page names directly: education, cultural preservation, women&apos;s
                empowerment, and environmental regeneration.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary source</span>
                  <strong>Banvelca — Social Responsibility</strong>
                </li>
                <li>
                  <span>Named areas</span>
                  <strong>
                    Education, cultural preservation, women&apos;s empowerment, environmental
                    regeneration
                  </strong>
                </li>
                <li>
                  <span>Editorial posture</span>
                  <strong>Declared ethos with selective public anchors</strong>
                </li>
                <li>
                  <span>Related theme</span>
                  <strong>
                    <Link href="/themes/art-investment-and-patronage/" title="Art Investment and Patronage">
                      Art Investment and Patronage
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
            <div className="overline">Core reading</div>
            <h2>The source page defines an ethos of quiet responsibility</h2>
            <p className="lede">
              The public material does not present a long program list. Instead, it establishes a
              moral and operational posture: help without spectacle, preserve culture without
              excessive self-promotion, and treat responsibility as part of stewardship rather
              than as marketing.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Education</h3>
                <p>
                  The source page identifies education as one of the enduring areas of focus,
                  giving the portal a clear thematic anchor even where program detail remains
                  limited.
                </p>
              </article>
              <article className="card">
                <h3>Cultural preservation</h3>
                <p>
                  This theme becomes more legible when paired with the site&apos;s culture pages,
                  Belén Clarisa&apos;s profile, and the Caracas material.
                </p>
              </article>
              <article className="card">
                <h3>Women&apos;s empowerment</h3>
                <p>
                  The portal treats this theme seriously because Banvelca&apos;s own public record
                  foregrounds women such as Belén María, Clementina, and Belén Clarisa in the
                  modern continuity narrative.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Where the theme becomes concrete</div>
            <h2>Public anchors matter because the source page stays intentionally restrained</h2>
            <p className="lede">
              A quiet-responsibility model can become vague if it is left entirely at the level of
              declared values. The portal therefore anchors it to the public figures and
              institutions already visible in the record.
            </p>
            <p>
              The most important named bridge is{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos/" title="Belén Clarisa Velutini Pérez-Matos">
                Belén Clarisa Velutini Pérez-Matos
              </Link>
              , whose profile links finance to cultural work through Trasnocho Cultural and
              Fundación Centro El Portal. The{" "}
              <Link href="/places/caracas/" title="Caracas">Caracas</Link> page then shows why that matters
              geographically, while the{" "}
              <Link href="/themes/women-of-the-families/" title="Women of the Families">Women of the Families</Link> page
              explains why women&apos;s empowerment is not peripheral to the portal&apos;s modern
              family story.
            </p>
            <p>
              That is also why this theme sits beside{" "}
              <Link href="/themes/art-investment-and-patronage/" title="Art Investment and Patronage">
                Art Investment and Patronage
              </Link>{" "}
              rather than far from it. Cultural preservation and art custodianship are separate
              themes, but the public record makes them easier to interpret together.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Source limits</div>
            <h2>The page explains declared responsibility without overstating evidence</h2>
            <p className="lede">
              The social-responsibility page is strong on ethos and direction, but lighter on
              named initiatives. The portal preserves that boundary instead of manufacturing a
              larger philanthropic apparatus than the public record supports.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">What is explicit</div>
                <h3>The four named areas</h3>
                <p>
                  Education, cultural preservation, women&apos;s empowerment, and environmental
                  regeneration are all plainly identified on the source page.
                </p>
              </article>
              <article className="callout">
                <div className="overline">What becomes concrete</div>
                <h3>Culture and family continuity</h3>
                <p>
                  Belén Clarisa and the Caracas layer provide the clearest public anchors for
                  turning the declared ethos into a readable portal theme.
                </p>
              </article>
              <article className="callout">
                <div className="overline">What remains limited</div>
                <h3>No invented program inventory</h3>
                <p>
                  Because the source page is intentionally discreet, the portal does not claim a
                  full catalog of institutions, grants, or campaigns.
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
                This page reads the Banvelca social-responsibility language as a declared ethos
                and grounds it in the portal&apos;s most concrete public-facing cultural and
                family pages.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/social-responsibility"
                    rel="noopener external"
                    title="Banvelca — Social Responsibility"
                  >
                    Banvelca — Social Responsibility
                  </Link>{" "}
                  — Used for the quiet-responsibility framing and the named areas of education,
                  cultural preservation, women&apos;s empowerment, and environmental regeneration.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos"
                    rel="noopener external"
                    title="Banvelca — Belén Clarisa Velutini Pérez-Matos"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the strongest public cultural anchor in the modern family record.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos"
                    rel="noopener external"
                    title="Banvelca — Belén María Providencia Pérez Matos"
                  >
                    Banvelca — Belén María Providencia Pérez Matos
                  </Link>{" "}
                  — Used for the matriarchal bridge that keeps women&apos;s roles central in the
                  family narrative.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the broader intergenerational and philanthropic framing of the
                  institution.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the responsibility and culture layer</h2>
            <div className="button-row">
              <Link href="/themes/art-investment-and-patronage/" className="button" title="Art Investment and Patronage">
                Art Investment and Patronage
              </Link>
              <Link href="/themes/women-of-the-families/" className="button-secondary" title="Women of the Families">
                Women of the Families
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
                <Link href="/themes/art-investment-and-patronage/" title="Art Investment and Patronage">
                  Art Investment and Patronage
                </Link>
              </li>
              <li>
                <Link href="/themes/women-of-the-families/" title="Women of the Families">Women of the Families</Link>
              </li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
              <li><Link href="/stewardship/" title="Stewardship">Stewardship</Link></li>
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