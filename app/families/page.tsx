import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Families | Herrera Velutini",
  description:
    "Section hub for the family-level pages of the Herrera Velutini portal.",
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
    canonical: "/families/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Families | Herrera Velutini",
    description:
      "Section hub for the family-level pages of the Herrera Velutini portal.",
    url: "https://herreravelutini.com/families/",
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
    title: "Families | Herrera Velutini",
    description:
      "Section hub for the family-level pages of the Herrera Velutini portal.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function Families() {
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
              name: "Families | Herrera Velutini",
              url: "https://herreravelutini.com/families/",
              description: "Section hub for the family-level pages of the Herrera Velutini portal.",
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
              ],
            }),
          }}
        />

      </Head>

      <Link className="skip-link" href="#main">Skip to content</Link>

      <main id="main">
        <section className="page-hero">
          <div className="container family-hero-shell">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/">Home</Link></li>
                  <li aria-current="page">Families</li>
                </ol>
              </nav>
              <div className="eyebrow">Family atlas</div>
              <h1>Families</h1>
              <p className="lede">
                The Families section now contains the three pages that define the portal&apos;s highest-value family layer: the Herrera Family hub, the Velutini Family hub, and a connection page explaining where the two lineages meet through marriage, Caracas, and institutional continuity.
              </p>
              <div className="family-tags">
                <span>Herrera</span>
                <span>Velutini</span>
                <span>Caracas</span>
                <span>Bridge Figures</span>
                <span>Lineage</span>
                <span>Institutions</span>
              </div>
              <div className="hero-actions">
                <Link href="/families/herrera-velutini-connection/" className="button">Read the Connection</Link>
                <Link href="/families/herrera/" className="button-secondary">Herrera Family</Link>
                <Link href="/families/velutini/" className="button-secondary">Velutini Family</Link>
              </div>
            </div>
            <aside className="family-pillars">
              <article className="family-pillar">
                <span>House page</span>
                <h3>Herrera Family</h3>
                <p>Dynasty, heraldry, distinctions, estates, and the family memory route.</p>
              </article>
              <article className="family-pillar">
                <span>Banking house</span>
                <h3>Velutini Family</h3>
                <p>Naples origin, Caracas continuity, Banvelca legacy, and modern bridge figures.</p>
              </article>
              <article className="family-pillar">
                <span>Connection page</span>
                <h3>Herrera and Velutini</h3>
                <p>The fastest way to understand where the two records meet through marriage, place, and institutional continuity.</p>
              </article>
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
              <time dateTime="2026-04-20">April 20, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Three family views</div>
            <h2>Each page answers a different family question.</h2>
            <p className="lede">
              The structure here is comparative on purpose. One page helps readers understand the Herrera house. One explains the Velutini line. One is the bridge page for readers who arrive with the combined surname and need the shared context first.
            </p>
            <div className="family-comparison">
              <article className="family-column">
                <header>
                  <div className="overline">Herrera page</div>
                  <h3>For readers starting with dynasty and heraldry</h3>
                </header>
                <p>Builds a family-level route through the dynasty sequence, estate geography, heraldry, distinctions, and modern Caracas links.</p>
                <ul className="inline-list">
                  <li>Dynasty</li>
                  <li>Estates</li>
                  <li>Heraldry</li>
                  <li>Distinctions</li>
                </ul>
                <ul className="family-link-list">
                  <li><Link href="/families/herrera/">Open Herrera Family</Link></li>
                  <li><Link href="/themes/heraldry-and-symbols/">Pair with Heraldry and Symbols</Link></li>
                </ul>
              </article>
              <article className="family-column">
                <header>
                  <div className="overline">Velutini page</div>
                  <h3>For readers starting with Naples, banking, and legacy</h3>
                </header>
                <p>Organizes the Naples founding story, Banvelca legacy pages, Banco Caracas references, and the women who define the modern record.</p>
                <ul className="inline-list">
                  <li>Naples</li>
                  <li>Banvelca</li>
                  <li>Banco Caracas</li>
                  <li>Legacy</li>
                </ul>
                <ul className="family-link-list">
                  <li><Link href="/families/velutini/">Open Velutini Family</Link></li>
                  <li><Link href="/themes/private-banking-tradition/">Pair with Private Banking Tradition</Link></li>
                </ul>
              </article>
              <article className="family-column">
                <header>
                  <div className="overline">Bridge page</div>
                  <h3>For readers starting with the modern combined surname</h3>
                </header>
                <p>Explains how the two houses connect through Belén María, Clementina, José Herrera Von Uslar, Caracas, and the modern Herrera Velutini surname.</p>
                <ul className="inline-list">
                  <li>Marriage</li>
                  <li>Caracas</li>
                  <li>Bridge figures</li>
                  <li>Institutional continuity</li>
                </ul>
                <ul className="family-link-list">
                  <li><Link href="/families/herrera-velutini-connection/">Open the connection page</Link></li>
                  <li><Link href="/themes/women-of-the-families/">Pair with Women of the Families</Link></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container family-route">
            <div className="family-paths">
              <div className="overline">Reading path</div>
              <h3>A cleaner route through the family record</h3>
              <div className="family-path-list">
                <div className="family-step">
                  <div className="family-step-index">1</div>
                  <div>
                    <span>Start</span>
                    <strong>Begin with the connection page if the combined surname is your first reference point.</strong>
                    <br />
                    It gives the quickest explanation of how the two family records meet.
                  </div>
                </div>
                <div className="family-step">
                  <div className="family-step-index">2</div>
                  <div>
                    <span>Split</span>
                    <strong>Move into the Herrera and Velutini hubs once the bridge figures are clear.</strong>
                    <br />
                    That lets each family keep its own historical logic instead of being flattened into one story.
                  </div>
                </div>
                <div className="family-step">
                  <div className="family-step-index">3</div>
                  <div>
                    <span>Deepen</span>
                    <strong>Use genealogy, estates, and places to turn surnames into a mapped record.</strong>
                    <br />
                    The family layer is strongest when connected to Ampudia, Lanzarote, Caracas, Naples, and later institutions.
                  </div>
                </div>
                <div className="family-step">
                  <div className="family-step-index">4</div>
                  <div>
                    <span>Cross over</span>
                    <strong>Use theme pages when you want motifs instead of surnames.</strong>
                    <br />
                    Heraldry, distinctions, private banking, and women-of-the-families give readers alternate entry points.
                  </div>
                </div>
              </div>
            </div>
            <div className="family-route-note">
              <div className="overline">Theme routes</div>
              <h3>Family pages now connect directly to the live topic layer.</h3>
              <p>
                Readers who start with surnames can move into the subject pages that explain heraldry, distinctions, private banking, and the women who carry the modern bridge between the two houses.
              </p>
              <div className="button-row">
                <Link href="/themes/women-of-the-families/" className="button">Women of the Families</Link>
                <Link href="/themes/heraldry-and-symbols/" className="button-secondary">Heraldry and Symbols</Link>
                <Link href="/themes/orders-and-distinctions/" className="button-secondary">Orders and Distinctions</Link>
                <Link href="/themes/" className="button-secondary">Open Themes</Link>
                <Link href="/genealogy/" className="button-secondary">Genealogy</Link>
              </div>
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