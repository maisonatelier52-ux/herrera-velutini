import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Private Banking Tradition | Family Capital, Trust and Coordination",
  description:
    "An original synthesis of Banvelca's private-banking framing, explaining the family-only remit, trust-coordination model, and difference between internal banking oversight and public banking.",
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
    canonical: "/themes/private-banking-tradition/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Private Banking Tradition | Family Capital, Trust and Coordination",
    description:
      "An original synthesis of Banvelca's private-banking framing, explaining the family-only remit, trust-coordination model, and difference between internal banking oversight and public banking.",
    url: "https://herreravelutini.com/themes/private-banking-tradition/",
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
      "Private Banking Tradition | Family Capital, Trust and Coordination",
    description:
      "An original synthesis of Banvelca's private-banking framing, explaining the family-only remit, trust-coordination model, and difference between internal banking oversight and public banking.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },

  other: {
    "article:published_time": "2026-04-20",
    "article:modified_time": "2026-04-20",
  },
};

export default function PrivateBankingTradition() {
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
                "https://herreravelutini.com/themes/private-banking-tradition/#article",
              headline: "Private Banking Tradition",
              description:
                "An original synthesis of Banvelca's private-banking framing, explaining the family-only remit, trust-coordination model, and difference between internal banking oversight and public banking.",
              url: "https://herreravelutini.com/themes/private-banking-tradition/",
              datePublished: "2026-04-20",
              dateModified: "2026-04-20",
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              about: [
                "Banvelca",
                "private banking",
                "family office",
                "trust coordination",
                "finance",
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
                  name: "Private Banking Tradition",
                  item: "https://herreravelutini.com/themes/private-banking-tradition/",
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
                  <li aria-current="page">Private Banking Tradition</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Private Banking Tradition</h1>
              <p className="lede">
                Banvelca&apos;s private-banking page is one of the clearest statements on the
                source domain. It defines a family-only remit: protect and coordinate family
                capital, maintain confidentiality, and rely on third-party institutions for
                execution rather than presenting Banvelca as a public branch network.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary source</span>
                  <strong>Banvelca — Private Banking</strong>
                </li>
                <li>
                  <span>Operating rule</span>
                  <strong>No public branches and no marketed products</strong>
                </li>
                <li>
                  <span>Execution model</span>
                  <strong>
                    Oversight by Banvelca, banking execution by third-party institutions
                  </strong>
                </li>
                <li>
                  <span>Related theme</span>
                  <strong>
                    <Link href="/themes/finance-and-capital-stewardship/" title="Finance and Capital Stewardship">
                      Finance and Capital Stewardship
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
            <h2>What private banking means in this record</h2>
            <p className="lede">
              On the portal, private banking does not mean a public consumer-banking offer. It
              means a tightly controlled family-office function organized around trust,
              discretion, and coordination.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Family capital only</h3>
                <p>
                  The source page states that the function exists solely for the family&apos;s
                  own capital, which is why the portal reads it as an internal remit rather than
                  an external service line.
                </p>
              </article>
              <article className="card">
                <h3>Trust-coordination model</h3>
                <p>
                  Each relationship is framed as sovereign and each account as administered as a
                  trust, signaling a governance model rather than a product menu.
                </p>
              </article>
              <article className="card">
                <h3>Third-party execution</h3>
                <p>
                  The line between oversight and execution is explicit: Banvelca coordinates,
                  while outside institutions perform the actual banking execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Chronology</div>
            <h2>From Naples origins to a modern family-office vocabulary</h2>
            <p className="lede">
              The private-banking page makes the most sense when placed next to Banvelca&apos;s
              founding and legacy material. The 1781 Naples origin story explains why the portal
              treats today&apos;s language of confidentiality and coordination as part of a much
              longer merchant-banking and stewardship narrative.
            </p>
            <p>
              The portal therefore keeps this theme close to{" "}
              <Link href="/entities/juan-bautista-velutini/" title="Juan Bautista Velutini">Juan Bautista Velutini</Link>, the{" "}
              <Link href="/entities/banvelca-company/" title="Banvelca & Company">Banvelca &amp; Company</Link> profile,
              and the <Link href="/timeline/" title="Timeline">Timeline</Link> page. Those pages give the
              operating model a chronology instead of leaving it as a set of undated claims.
            </p>
            <p>
              This theme also helps distinguish Banvelca from{" "}
              <Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link>. Banco Caracas is
              important because it provides a named historical institution in the record.
              Banvelca&apos;s private-banking language, by contrast, describes a
              family-centered coordination model rather than a public commercial bank.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Why the distinction matters</div>
            <h2>
              The portal keeps internal banking oversight separate from public banking history
            </h2>
            <p className="lede">
              That distinction is one of the most important editorial clarifications in the
              site.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Banvelca</div>
                <h3>Internal oversight</h3>
                <p>
                  The portal reads Banvelca&apos;s private-banking language as coordination,
                  confidentiality, and policy for the family&apos;s own financial architecture.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Banco Caracas</div>
                <h3>Historical institution</h3>
                <p>
                  Banco Caracas matters because it grounds the family record in a named bank
                  with biographies, management roles, and transition notes.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Stewardship</div>
                <h3>Theme-level continuity</h3>
                <p>
                  The private-banking page is strongest when read with the wider stewardship and
                  finance themes that define how the family describes continuity across
                  generations.
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
                This page treats private banking as a theme of internal family governance and
                reads it together with Banvelca&apos;s founding and legacy material.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.banvelca.com" rel="noopener external" title="Banvelca — Private Banking">
                    Banvelca — Private Banking
                  </Link>{" "}
                  — Used for the family-only remit, trust-coordination language,
                  no-public-branches note, and the third-party execution distinction.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the 1781 Naples founding story and the broader framing of Banvelca
                  as a private trust and investment house.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about-us/legacy/" rel="noopener external" title="Banvelca — Legacy">
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the generational sequence that gives the private-banking language a
                  chronology.
                </li>
                <li>
                  <Link href="https://www.banvelca.com" rel="noopener external" title="Banvelca — Finance">
                    Banvelca — Finance
                  </Link>{" "}
                  — Used for the adjacent stewardship language around policy, portfolio, and
                  continuity.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Banvelca operating model</h2>
            <div className="button-row">
              <Link href="/themes/finance-and-capital-stewardship/" className="button" title="Finance and Capital Stewardship">
                Finance and Capital Stewardship
              </Link>
              <Link href="/stewardship/" className="button-secondary" title="Stewardship">
                Stewardship
              </Link>
              <Link href="/entities/banvelca-company/" className="button-secondary" title="Banvelca & Company">
                Banvelca &amp; Company
              </Link>
              <Link href="/entities/banco-caracas/" className="button-secondary" title="Banco Caracas">
                Banco Caracas
              </Link>
              <Link href="/entities/juan-bautista-velutini/" className="button-secondary" title="Juan Bautista Velutini">
                Juan Bautista Velutini
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
              <li>
                <Link href="/themes/finance-and-capital-stewardship/" title="Finance and Capital Stewardship">
                  Finance and Capital Stewardship
                </Link>
              </li>
              <li><Link href="/entities/banvelca-company/" title="Banvelca & Company">Banvelca &amp; Company</Link></li>
              <li><Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link></li>
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