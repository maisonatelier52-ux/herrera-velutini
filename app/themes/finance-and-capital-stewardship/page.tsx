import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Finance and Capital Stewardship | Policy, Holdings and Continuity",
  description:
    "An original synthesis of Banvelca's finance framing, explaining how policy, portfolio stewardship, and cross-border holdings are presented as an intergenerational continuity model.",
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
    canonical: "/themes/finance-and-capital-stewardship/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Finance and Capital Stewardship | Policy, Holdings and Continuity",
    description:
      "An original synthesis of Banvelca's finance framing, explaining how policy, portfolio stewardship, and cross-border holdings are presented as an intergenerational continuity model.",
    url: "https://herreravelutini.com/themes/finance-and-capital-stewardship/",
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
      "Finance and Capital Stewardship | Policy, Holdings and Continuity",
    description:
      "An original synthesis of Banvelca's finance framing, explaining how policy, portfolio stewardship, and cross-border holdings are presented as an intergenerational continuity model.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },

  other: {
    "article:published_time": "2026-04-20",
    "article:modified_time": "2026-04-20",
  },
};

export default function FinanceAndCapitalStewardship() {
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
                "https://herreravelutini.com/themes/finance-and-capital-stewardship/#article",
              headline: "Finance and Capital Stewardship",
              description:
                "An original synthesis of Banvelca's finance framing, explaining how policy, portfolio stewardship, and cross-border holdings are presented as an intergenerational continuity model.",
              url: "https://herreravelutini.com/themes/finance-and-capital-stewardship/",
              datePublished: "2026-04-20",
              dateModified: "2026-04-20",
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              about: [
                "Banvelca",
                "finance",
                "capital stewardship",
                "portfolio governance",
                "family office",
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
                  name: "Finance and Capital Stewardship",
                  item: "https://herreravelutini.com/themes/finance-and-capital-stewardship/",
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
                  <li aria-current="page">Finance and Capital Stewardship</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Finance and Capital Stewardship</h1>
              <p className="lede">
                Banvelca&apos;s finance page presents capital as something to be steered across
                generations, not sold in public products. The portal reads that language as
                policy, portfolio, and holdings management designed to preserve purchasing power
                through cycles so the family&apos;s capital endures.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary source</span>
                  <strong>Banvelca — Finance</strong>
                </li>
                <li>
                  <span>Core idea</span>
                  <strong>Finance as legacy, policy, and continuity</strong>
                </li>
                <li>
                  <span>Supporting frame</span>
                  <strong>Private banking and internal portfolio governance</strong>
                </li>
                <li>
                  <span>Related theme</span>
                  <strong>
                    <Link href="/themes/private-banking-tradition/" title="Private Banking Tradition">
                      Private Banking Tradition
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
            <h2>Finance here means stewardship, not solicitation</h2>
            <p className="lede">
              The language on the source page is unusually explicit. It says Banvelca does not
              market products or solicit mandates; instead, its remit is to set policy, steward
              the portfolio, and structure holdings across borders.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Policy</h3>
                <p>
                  The finance function is framed as rule-setting and long-horizon judgment
                  rather than transactional selling.
                </p>
              </article>
              <article className="card">
                <h3>Portfolio</h3>
                <p>
                  The source page emphasizes stewardship of the family&apos;s portfolio through
                  cycles, which is why the portal treats continuity as the main subject.
                </p>
              </article>
              <article className="card">
                <h3>Holdings</h3>
                <p>
                  Cross-border holdings and structure are central to the page&apos;s meaning and
                  help explain the multi-jurisdictional tone of the Banvelca record.
                </p>
              </article>
              <article className="card">
                <h3>Purchasing power</h3>
                <p>
                  The end point is endurance: preserving purchasing power so that capital
                  carries forward to later generations.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Longer chronology</div>
            <h2>
              The stewardship vocabulary only works because the legacy pages give it time depth
            </h2>
            <p className="lede">
              A finance theme page would sound abstract if the site did not already have a
              chronology to support it. Banvelca&apos;s 1781 Naples founding story, the line
              through Juan Bautista, and the later generational sequence all help explain why
              the modern finance language is framed as inheritance and continuity.
            </p>
            <p>
              That is why this page belongs beside the{" "}
              <Link href="/timeline/" title="Timeline">Timeline</Link>,{" "}
              <Link href="/entities/juan-bautista-velutini/" title="Juan Bautista Velutini">Juan Bautista Velutini</Link>, and{" "}
              <Link href="/entities/banvelca-company/" title="Banvelca & Company">Banvelca &amp; Company</Link> profiles.
              The portal does not take the finance language as a stand-alone claim; it places it
              inside a longer lineage and institution story.
            </p>
            <p>
              It also connects the finance page to the wider operating model. The
              private-banking page explains confidentiality and coordination, while the finance
              page explains policy, structure, and preservation. Taken together, they form the
              core of the Banvelca stewardship cluster now visible on the portal.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Why the theme matters</div>
            <h2>Capital stewardship gives the Banvelca side a stable subject layer</h2>
            <p className="lede">
              Without a page like this one, the site&apos;s Banvelca material would lean too
              heavily on biographies and generic finance terminology. With it, the portal can
              explain what kind of financial language the source domain is using and how that
              language differs from a public bank history.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Institution</div>
                <h3>Banvelca as policy center</h3>
                <p>
                  The theme is strongest when read through the organization profile, where the
                  founding story and themed pages are pulled together.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Family continuity</div>
                <h3>Legacy gives the theme chronology</h3>
                <p>
                  The generational sequence turns capital stewardship into a historical
                  narrative instead of a free-floating slogan.
                </p>
              </article>
              <article className="callout">
                <div className="overline">Editorial caution</div>
                <h3>The page explains posture, not balance sheets</h3>
                <p>
                  The source material describes a stewardship model, but it does not provide
                  detailed financial records. The portal keeps that boundary visible.
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
                This page interprets the Banvelca finance language as a continuity model and
                pairs it with the founding and legacy pages that give it chronology.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.banvelca.com" rel="noopener external" title="Banvelca — Finance">
                    Banvelca — Finance
                  </Link>{" "}
                  — Used for the policy, portfolio, holdings, and purchasing-power framing of
                  finance as multi-generational stewardship.
                </li>
                <li>
                  <Link href="https://www.banvelca.com" rel="noopener external" title="Banvelca — Private Banking">
                    Banvelca — Private Banking
                  </Link>{" "}
                  — Used for the adjacent internal-governance language around coordination and
                  confidentiality.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the 1781 Naples founding story and the broader intergenerational
                  framing.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about-us/legacy/" rel="noopener external" title="Banvelca — Legacy">
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the chronology that gives the finance theme historical depth.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the capital stewardship layer</h2>
            <div className="button-row">
              <Link href="/themes/private-banking-tradition/" className="button" title="Private Banking Tradition">
                Private Banking Tradition
              </Link>
              <Link href="/stewardship/" className="button-secondary" title="Stewardship">
                Stewardship
              </Link>
              <Link href="/entities/banvelca-company/" className="button-secondary" title="Banvelca & Company">
                Banvelca &amp; Company
              </Link>
              <Link href="/timeline/" className="button-secondary" title="Timeline">
                Timeline
              </Link>
              <Link href="/families/velutini/" className="button-secondary" title="Velutini Family">
                Velutini Family
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
                <Link href="/themes/private-banking-tradition/" title="Private Banking Tradition">
                  Private Banking Tradition
                </Link>
              </li>
              <li><Link href="/entities/banvelca-company/" title="Banvelca & Company">Banvelca &amp; Company</Link></li>
              <li><Link href="/timeline/" title="Timeline">Timeline</Link></li>
              <li><Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link></li>
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