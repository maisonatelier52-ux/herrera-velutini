import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Themes | Heraldry, Stewardship, Capital and Cultural Memory",

  description:
    "Section hub for the Herrera Velutini portal's theme pages across heraldry, distinctions, private banking, finance, art, social responsibility, and the women who bridge the families.",

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
    canonical: "/themes/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Themes | Heraldry, Stewardship, Capital and Cultural Memory",
    description:
      "Section hub for the Herrera Velutini portal's theme pages across heraldry, distinctions, private banking, finance, art, social responsibility, and the women who bridge the families.",
    url: "https://herreravelutini.com/themes/",
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
      "Themes | Heraldry, Stewardship, Capital and Cultural Memory",
    description:
      "Section hub for the Herrera Velutini portal's theme pages across heraldry, distinctions, private banking, finance, art, social responsibility, and the women who bridge the families.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Themes() {
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
                "A fast, source-linked editorial portal for family history, lineage, estates, organizations, places, and interpretive themes associated with the Herrera and Velutini record.",
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
              subjectOf: [
                "https://www.houseofherrera.com/",
                "https://www.banvelca.com/",
              ],
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
              "@type": "CollectionPage",
              name: "Themes | Heraldry, Stewardship, Capital and Cultural Memory",
              url: "https://herreravelutini.com/themes/",
              description:
                "Section hub for the portal's theme pages across symbolic memory, stewardship, and bridge figures.",
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
              ],
            }),
          }}
        />
      </Head>

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container atlas-shell">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li aria-current="page">Themes</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme atlas</div>
              <h1>Themes</h1>
              <p className="lede">
                The Themes section turns recurring motifs from House of Herrera and Banvelca into
                stable editorial entry points. Instead of leaving heraldry, distinctions, finance,
                art, social responsibility, and bridge figures scattered across source pages, the
                portal reads them through named people, places, and institutions that already exist
                elsewhere in the site.
              </p>
              <div className="theme-ribbon">
                <span>Heraldry</span>
                <span>Distinctions</span>
                <span>Private Banking</span>
                <span>Finance</span>
                <span>Art</span>
                <span>Social Responsibility</span>
                <span>Bridge Figures</span>
              </div>
              <div className="hero-actions">
                <Link href="/themes/heraldry-and-symbols/" className="button">
                  Start With Heraldry
                </Link>
                <Link href="/themes/private-banking-tradition/" className="button-secondary">
                  Private Banking Tradition
                </Link>
                <Link href="/themes/women-of-the-families/" className="button-secondary">
                  Women of the Families
                </Link>
              </div>
            </div>
            <aside className="atlas-aside">
              <div className="overline">Atlas logic</div>
              <h2>Three bands organize the portal&apos;s topic layer.</h2>
              <p>
                The cluster is intentionally split into Herrera memory, Banvelca stewardship, and
                the family bridge. That makes the section feel like an atlas of recurring motifs
                instead of a pile of unrelated essays.
              </p>
              <div className="atlas-stats">
                <div className="atlas-stat">
                  <span>Live now</span>
                  <strong>Seven source-led theme essays plus this hub</strong>
                </div>
                <div className="atlas-stat">
                  <span>Herrera memory</span>
                  <strong>
                    Heraldry and distinctions tied to Lanzarote, Ampudia, Gleichen, and family
                    memory
                  </strong>
                </div>
                <div className="atlas-stat">
                  <span>Banvelca stewardship</span>
                  <strong>
                    Private banking, capital stewardship, art, and social responsibility
                  </strong>
                </div>
                <div className="atlas-stat">
                  <span>Bridge page</span>
                  <strong>
                    <Link href="/themes/women-of-the-families/">Women of the Families</Link>
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
            <div className="overline">Browse by band</div>
            <h2>
              Choose a motif first, then move into the people, places, and institutions behind it.
            </h2>
            <p className="lede">
              Each band below organizes a different editorial mode. Herrera pages explain symbolic
              memory. Banvelca pages explain stewardship vocabulary. The bridge page keeps the
              family connection visible without flattening either side.
            </p>
            <div className="atlas-grid">
              <article className="atlas-card">
                <div className="overline">Herrera memory</div>
                <h3>Symbols, lineage marks, and titled memory</h3>
                <p>
                  This side of the atlas is strongest when read through heraldic signs,
                  marquisates, branch identity, and the places that keep those distinctions
                  legible.
                </p>
                <ul className="atlas-links">
                  <li>
                    <Link href="/themes/heraldry-and-symbols/">Heraldry and Symbols</Link>
                    <br />
                    Reads the House of Herrera symbols page as a map of branch identity across
                    Herrera, Lanzarote, Uslar, Gleichen, and Velutini.
                  </li>
                  <li>
                    <Link href="/themes/orders-and-distinctions/">Orders and Distinctions</Link>
                    <br />
                    Explains why the titles and marquisates matter mainly when tied back to places,
                    lineages, and named figures.
                  </li>
                </ul>
              </article>

              <article className="atlas-card">
                <div className="overline">Capital language</div>
                <h3>Private banking and portfolio continuity</h3>
                <p>
                  These pages interpret Banvelca&apos;s vocabulary as internal stewardship rather
                  than public retail banking or generalized corporate promotion.
                </p>
                <ul className="atlas-links">
                  <li>
                    <Link href="/themes/private-banking-tradition/">
                      Private Banking Tradition
                    </Link>
                    <br />
                    Clarifies Banvelca&apos;s internal-only private-banking language and
                    distinguishes it from public retail or branch banking.
                  </li>
                  <li>
                    <Link href="/themes/finance-and-capital-stewardship/">
                      Finance and Capital Stewardship
                    </Link>
                    <br />
                    Frames Banvelca finance pages as policy, continuity, and portfolio governance
                    across generations.
                  </li>
                </ul>
              </article>

              <article className="atlas-card">
                <div className="overline">Cultural remit</div>
                <h3>Custodianship beyond capital alone</h3>
                <p>
                  The Banvelca record becomes more intelligible when art and social responsibility
                  are treated as parallel stewardship practices, not side notes.
                </p>
                <ul className="atlas-links">
                  <li>
                    <Link href="/themes/art-investment-and-patronage/">
                      Art Investment and Patronage
                    </Link>
                    <br />
                    Connects art-language on the Banvelca domain to cultural custodianship,
                    Caracas, and Belén Clarisa&apos;s public legacy.
                  </li>
                  <li>
                    <Link href="/themes/social-responsibility/">Social Responsibility</Link>
                    <br />
                    Interprets Banvelca&apos;s declared ethos of quiet social responsibility
                    through culture, education, and women&apos;s empowerment.
                  </li>
                </ul>
              </article>

              <article className="atlas-card atlas-card--feature">
                <div>
                  <div className="overline">Family bridge</div>
                  <h3>The women who connect the atlas</h3>
                  <p>
                    The bridge page keeps Belén María, Clementina, and Belén Clarisa in view as
                    the figures who make the two family records feel connected rather than
                    adjacent. It is the best route for readers who arrive with the modern surname
                    and need the portal&apos;s family logic explained quickly.
                  </p>
                  <ul className="atlas-links">
                    <li>
                      <Link href="/themes/women-of-the-families/">Women of the Families</Link>
                      <br />
                      Shows why Belén María, Clementina, and Belén Clarisa are central to the
                      portal&apos;s modern family bridge.
                    </li>
                  </ul>
                  <div className="button-row">
                    <Link href="/families/" className="button">
                      Open Families
                    </Link>
                    <Link href="/heritage/" className="button-secondary">
                      Read Heritage
                    </Link>
                    <Link href="/stewardship/" className="button-secondary">
                      Read Stewardship
                    </Link>
                  </div>
                </div>
                <figure className="feature-figure">
                  <Image
                    src="/illustrations/theme-atlas.svg"
                    alt="Diagram connecting heraldry, distinctions, private banking, finance, art, social responsibility, and women of the families."
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                  <figcaption>
                    The theme layer turns recurring motifs from the two family domains into a
                    durable subject map.
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related sections</div>
            <h2>Move from motifs into the wider knowledge base</h2>
            <div className="button-row">
              <Link href="/families/" className="button">
                Families
              </Link>
              <Link href="/genealogy/" className="button-secondary">
                Genealogy
              </Link>
              <Link href="/places/" className="button-secondary">
                Places
              </Link>
              <Link href="/entities/" className="button-secondary">
                Entities
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
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/heritage/">Heritage</Link></li>
              <li><Link href="/themes/">Themes</Link></li>
              <li><Link href="/families/">Families</Link></li>
              <li><Link href="/genealogy/">Genealogy</Link></li>
              <li><Link href="/places/">Places</Link></li>
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
              <li>
                <Link href="/themes/women-of-the-families/">Women of the Families</Link>
              </li>
              <li>
                <Link href="/themes/heraldry-and-symbols/">Heraldry and Symbols</Link>
              </li>
              <li>
                <Link href="/themes/private-banking-tradition/">Private Banking Tradition</Link>
              </li>
              <li>
                <Link href="/themes/social-responsibility/">Social Responsibility</Link>
              </li>
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