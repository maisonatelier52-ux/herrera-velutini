import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stewardship | Banvelca, Family Office Logic, Culture & Responsibility",
  description:
    "An original synthesis of Banvelca's public pages, explaining the founding story, family-office model, cultural custodianship, and social responsibility.",
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
    canonical: "/stewardship/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Stewardship | Banvelca, Family Office Logic, Culture & Responsibility",
    description:
      "An original synthesis of Banvelca's public pages, explaining the founding story, family-office model, cultural custodianship, and social responsibility.",
    url: "https://herreravelutini.com/stewardship/",
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
      "Stewardship | Banvelca, Family Office Logic, Culture & Responsibility",
    description:
      "An original synthesis of Banvelca's public pages, explaining the founding story, family-office model, cultural custodianship, and social responsibility.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  },

  other: {
    "article:published_time": "2026-04-17",
    "article:modified_time": "2026-04-20",
  },
};

export default function StewardshipPage() {
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
              logo: {
                "@type": "ImageObject",
                url: "https://herreravelutini.com/brand-wordmark.svg",
              },
              description:
                "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "editorial inquiries",
                  url: "https://herreravelutini.com/about/#contact",
                  availableLanguage: ["English", "Spanish"],
                },
              ],
              publishingPrinciples: "https://herreravelutini.com/editorial-methodology/",
              areaServed: ["Europe", "North America", "Latin America", "Middle East"],
              knowsAbout: [
                "House of Herrera",
                "Banvelca & Company",
                "Hacienda de La Vega",
                "Castle Santa Barbara",
                "family history",
                "heritage research",
                "stewardship",
                "cultural patronage",
              ],
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
              description:
                "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
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
              "@id": "https://herreravelutini.com/stewardship/#article",
              headline: "Stewardship",
              description:
                "An original synthesis of Banvelca's public pages, explaining the founding story, family-office model, cultural custodianship, and social responsibility.",
              url: "https://herreravelutini.com/stewardship/",
              datePublished: "2026-04-17",
              dateModified: "2026-04-20",
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              about: ["Banvelca", "family office", "stewardship", "culture", "social responsibility"],
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
                { "@type": "ListItem", position: 2, name: "Stewardship", item: "https://herreravelutini.com/stewardship/" },
              ],
            }),
          }}
        />
      </Head>

      <Link className="skip-link" href="#main">Skip to content</Link>

      <main id="main">
        <section className="page-hero">
          <div className="container dossier-hero">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li aria-current="page">Stewardship</li>
                </ol>
              </nav>
              <div className="eyebrow">Editorial dossier</div>
              <h1>Read Banvelca through stewardship, not through retail-banking expectations.</h1>
              <p className="lede">
                The Banvelca pages are most coherent when read as an internal stewardship model: a family office that
                describes capital coordination, intergenerational continuity, art custodianship, and social
                responsibility without positioning itself as a public branch network or a public product marketer.
              </p>
              <div className="theme-ribbon">
                <span>Private Banking</span>
                <span>Capital Stewardship</span>
                <span>Art and Culture</span>
                <span>Social Responsibility</span>
              </div>
              <div className="hero-actions">
                <Link className="button" href="/themes/private-banking-tradition/">Private Banking</Link>
                <Link className="button-secondary" href="/themes/finance-and-capital-stewardship/">Capital Stewardship</Link>
                <Link className="button-secondary" href="/themes/art-investment-and-patronage/">Art and Patronage</Link>
              </div>
            </div>
            <aside className="dossier-note">
              <div className="overline">Reading frame</div>
              <h2>Treat the Banvelca record as one stewardship system.</h2>
              <p>
                The point of this page is interpretive clarity. It groups finance, private banking, art, and social
                responsibility into one quieter editorial model, so readers do not import expectations from public
                consumer banking.
              </p>
              <div className="quote">Continuity first. Products second.</div>
              <div className="dossier-ledger">
                <div className="dossier-entry">
                  <span>Core entity</span>
                  <strong>Banvelca &amp; Company</strong>
                </div>
                <div className="dossier-entry">
                  <span>Founding point</span>
                  <strong>Naples · 1781</strong>
                </div>
                <div className="dossier-entry">
                  <span>Mode</span>
                  <strong>Private family-office and trust language</strong>
                </div>
                <div className="dossier-entry">
                  <span>Supporting pages</span>
                  <strong>
                    <Link href="/themes/">Themes</Link> · Juan Bautista · Belén Clarisa · Timeline
                  </strong>
                </div>
              </div>
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
              <time dateTime="2026-04-20">April 20, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container dossier-principles">
            <div>
              <div className="dossier-summary">
                <div className="overline">How to interpret the record</div>
                <h2>Stewardship on this portal means internal capital coordination, long memory, and cultural responsibility.</h2>
                <p className="lede">
                  The public Banvelca pages talk about finance, private banking, mergers and acquisitions, art, and
                  social responsibility. This portal treats those topics as parts of one stewardship model. Finance is
                  about continuity. Art is about custodianship. Social responsibility is about durable impact. The
                  through-line is not sales but intergenerational management.
                </p>
                <p>
                  The live <Link href="/themes/">Themes</Link> cluster now breaks that stewardship model into dedicated
                  essays on{" "}
                  <Link href="/themes/private-banking-tradition/">Private Banking Tradition</Link>,{" "}
                  <Link href="/themes/finance-and-capital-stewardship/">Finance and Capital Stewardship</Link>,{" "}
                  <Link href="/themes/art-investment-and-patronage/">Art Investment and Patronage</Link>, and{" "}
                  <Link href="/themes/social-responsibility/">Social Responsibility</Link>, making the Banvelca
                  vocabulary easier to navigate without losing its chronology.
                </p>
                <figure className="feature-figure">
                  <Image
                    src="/illustrations/stewardship-cycle.svg"
                    alt="Diagram showing Banvelca at the center of private family office, finance, art and culture, and social responsibility."
                    width={900}
                    height={500}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    Original stewardship-cycle diagram explaining how the Banvelca topic cluster works on the portal.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="dossier-rail">
              <div className="dossier-entry">
                <span>Founding logic</span>
                <strong>Naples and the 1781 origin story explain why the institution is framed through continuity and inherited responsibility.</strong>
                <p><Link href="/entities/juan-bautista-velutini/">Read Juan Bautista Velutini</Link></p>
              </div>
              <div className="dossier-entry">
                <span>Operating model</span>
                <strong>Finance and private-banking pages frame Banvelca as serving the family's own capital architecture rather than the general public.</strong>
                <p><Link href="/themes/private-banking-tradition/">Read Private Banking Tradition</Link></p>
              </div>
              <div className="dossier-entry">
                <span>Culture</span>
                <strong>Art language and public legacy become more concrete when paired with Belén Clarisa and Caracas.</strong>
                <p><Link href="/themes/art-investment-and-patronage/">Read Art Investment and Patronage</Link></p>
              </div>
              <div className="dossier-entry">
                <span>Responsibility</span>
                <strong>Social impact is presented as a quiet, durable responsibility rather than an advertising posture.</strong>
                <p><Link href="/themes/social-responsibility/">Read Social Responsibility</Link></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Core essays</div>
            <h2>Use the stewardship cluster as a small editorial dossier.</h2>
            <div className="dossier-essay-grid">
              <article className="dossier-essay">
                <h3>Private Banking Tradition</h3>
                <p>
                  Clarifies that Banvelca's public language is about private coordination and discretion, not public
                  branch or retail banking.
                </p>
                <p><Link href="/themes/private-banking-tradition/">Open theme page</Link></p>
              </article>
              <article className="dossier-essay">
                <h3>Finance and Capital Stewardship</h3>
                <p>
                  Frames finance pages as policy, portfolio continuity, mergers, and long-horizon management across
                  generations.
                </p>
                <p><Link href="/themes/finance-and-capital-stewardship/">Open theme page</Link></p>
              </article>
              <article className="dossier-essay">
                <h3>Art Investment and Patronage</h3>
                <p>
                  Shows how art language on the Banvelca domain works as custodianship and cultural memory, not simply
                  asset display.
                </p>
                <p><Link href="/themes/art-investment-and-patronage/">Open theme page</Link></p>
              </article>
              <article className="dossier-essay">
                <h3>Social Responsibility</h3>
                <p>
                  Interprets the social-responsibility pages as durable impact work in culture, education, and women's
                  empowerment.
                </p>
                <p><Link href="/themes/social-responsibility/">Open theme page</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Use the stewardship cluster with these supporting entities.</h2>
            <div className="button-row">
              <Link className="button" href="/entities/banvelca-company/">Banvelca &amp; Company</Link>
              <Link className="button-secondary" href="/themes/">Open Themes</Link>
              <Link className="button-secondary" href="/entities/juan-bautista-velutini/">Juan Bautista Velutini</Link>
              <Link className="button-secondary" href="/entities/belen-clarisa-velutini-perez-matos/">Belén Clarisa Velutini Pérez-Matos</Link>
              <Link className="button-secondary" href="/timeline/">Timeline</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis</h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the source pages in sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external">Banvelca — About</Link> — Used for the
                  1781 founding context, Naples origin, and multi-continent framing.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/private-banking" rel="noopener external">Banvelca — Private Banking</Link>{" "}
                  — Used for the distinction between internal family coordination and public branch banking.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/finance" rel="noopener external">Banvelca — Finance</Link> — Used for
                  the custodianship and family-office language.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/m-and-a" rel="noopener external">Banvelca — Mergers &amp; Acquisitions</Link>{" "}
                  — Used for the internal-portfolio framing rather than outside advisory work.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/art-investments" rel="noopener external">Banvelca — Art Investments</Link>{" "}
                  — Used for the art-custodianship interpretation.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/social-responsibility" rel="noopener external">Banvelca — Social Responsibility</Link>{" "}
                  — Used for the social-impact section of this cluster.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external">Banvelca — Legacy</Link> —
                  Used for chronology and succession.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Herrera Velutini</div>
            <p className="muted">
              A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places
              associated with the Herrera and Velutini record.
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