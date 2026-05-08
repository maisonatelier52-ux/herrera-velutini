import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://herreravelutini.com"),
  title:
    "Naples | Banvelca Origins, Mediterranean Trade and Family Expansion",
  description:
    "Place dossier for Naples as the founding geography of Banvelca, Juan Bautista Velutini, and the early Mediterranean phase of the Velutini record.",
  applicationName: "Herrera Velutini",
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

  alternates: {
    canonical: "/places/naples/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Naples | Banvelca Origins, Mediterranean Trade and Family Expansion",
    description:
      "Place dossier for Naples as the founding geography of Banvelca, Juan Bautista Velutini, and the early Mediterranean phase of the Velutini record.",
    url: "/places/naples/",
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
    title:
      "Naples | Banvelca Origins, Mediterranean Trade and Family Expansion",
    description:
      "Place dossier for Naples as the founding geography of Banvelca, Juan Bautista Velutini, and the early Mediterranean phase of the Velutini record.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Naples() {
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
              areaServed: ["Europe", "North America", "Latin America", "Middle East"],
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
                "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
              publisher: { "@id": "https://herreravelutini.com/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              name: "Naples | Banvelca Origins, Mediterranean Trade and Family Expansion",
              url: "https://herreravelutini.com/places/naples/",
              description:
                "Place dossier for Naples as the founding geography of Banvelca, Juan Bautista Velutini, and the early Mediterranean phase of the Velutini record.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Place",
                name: "Naples",
                url: "https://herreravelutini.com/places/naples/",
                description:
                  "Place dossier for Naples across the Velutini and Banvelca record.",
              },
              author: {
                "@type": "Organization",
                "@id": "https://herreravelutini.com/editorial-desk/#org",
                name: "Herrera Velutini Editorial Desk",
              },
              editor: {
                "@type": "Organization",
                "@id": "https://herreravelutini.com/review-team/#org",
                name: "Standards Review Team",
              },
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
                  name: "Places",
                  item: "https://herreravelutini.com/places/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Naples",
                  item: "https://herreravelutini.com/places/naples/",
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
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/places/">Places</Link></li>
                  <li aria-current="page">Naples</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Naples</h1>
              <p className="lede">
                Naples is the portal&rsquo;s founding place on the Velutini side. It is where
                Banvelca&rsquo;s public record begins in 1781 with Juan Bautista Velutini and
                where the family&rsquo;s early commercial world is framed through Mediterranean
                trade, diplomacy, and continuity before the story later widens toward Venezuela
                and the Americas.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>Founding geography of Banvelca and the Velutini line</strong>
                </li>
                <li>
                  <span>Strongest anchors</span>
                  <strong>
                    <Link href="/entities/juan-bautista-velutini/">Juan Bautista Velutini</Link>
                    {" and "}
                    <Link href="/entities/banvelca-company/">Banvelca &amp; Company</Link>
                  </strong>
                </li>
                <li>
                  <span>Trade arc</span>
                  <strong>Naples, France, Corsica, then wider Mediterranean routes</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong>
                    <Link href="/families/velutini/">Velutini Family</Link>
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
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-23">April 23, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why Naples matters</div>
            <h2>The family record starts here as a place, not just as a date.</h2>
            <p className="lede">
              Naples gives the Banvelca story a real civic and commercial setting. Without it,
              the 1781 founding risks reading like an abstract institutional slogan rather than a
              place-bound origin tied to trade routes, political alliances, and merchant-banking
              practice.
            </p>
            <div className="media-split">
              <div>
                <p>
                  Banvelca&rsquo;s About page says the firm was founded in the Kingdom of Naples
                  in 1781 by Juan Bautista Velutini, who managed commercial affairs between
                  Naples, France, and Corsica. Juan Bautista&rsquo;s own profile adds that the
                  firm first worked through staple trades such as olive oil, wine, and textiles
                  while building the political relationships needed to secure trading rights.
                </p>
                <p>
                  That makes Naples the site&rsquo;s clearest origin point for stewardship
                  language on the Velutini side. It is not yet the place of Banco Caracas,
                  matriarchal bridge figures, or later cultural patronage. It is the place of
                  founding scale, Mediterranean commerce, and the first version of the family
                  office before the narrative expands outward.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/naples-origin.svg"
                  alt="Diagram showing Naples connected to France, Corsica, Mediterranean trade, and the later Caracas chapter."
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption>
                  The Naples dossier explains the first geographic layer of the Banvelca and
                  Velutini record.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Founding ledger</div>
            <h2>The current public record gives Naples four main functions</h2>
            <p className="lede">
              These functions explain why Naples deserves its own place page instead of appearing
              only inside founder and organization profiles.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Naples-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Founding point</td>
                    <td>Banvelca, 1781</td>
                    <td>
                      Gives the institution a stable origin in the Kingdom of Naples rather than
                      a generic multinational backstory.
                    </td>
                  </tr>
                  <tr>
                    <td>Founder geography</td>
                    <td>Juan Bautista Velutini</td>
                    <td>
                      Places the first Banvelca chapter in a named city connected to France and
                      Corsica.
                    </td>
                  </tr>
                  <tr>
                    <td>Commercial world</td>
                    <td>Mediterranean staples and trade diplomacy</td>
                    <td>
                      Explains how the family narrative begins in merchant-banking and
                      cross-border trade before later institutional finance.
                    </td>
                  </tr>
                  <tr>
                    <td>Expansion pivot</td>
                    <td>Vicente José born in Naples in 1811</td>
                    <td>
                      Shows how the next generation carries the Naples base outward toward North
                      Africa, the Levant, and eventually Venezuela.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">From city to lineage</div>
            <h2>Naples matters because the site can trace movement away from it.</h2>
            <p className="lede">
              A place becomes more useful when it explains a transition. Naples does that for the
              Velutini record better than any other city currently in the portal.
            </p>
            <p>
              Vicente José Velutini Llarione&rsquo;s public profile says he was born in Naples in
              1811, expanded the business into North Africa and the Levant, and later moved to
              Venezuela. That lets the portal read Naples as a base of departure rather than a
              decorative origin myth. The move from Naples to Caracas is one of the clearest
              geographic transitions on the whole site.
            </p>
            <p>
              Readers who want the modern Caracas and banking chapter should therefore start in
              Naples only long enough to understand the origin logic, then continue into the{" "}
              <Link href="/families/velutini/">Velutini Family</Link> hub,{" "}
              <Link href="/entities/juan-bautista-velutini/">Juan Bautista Velutini</Link>, and
              the later <Link href="/places/caracas/">Caracas</Link> dossier.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Naples page</h2>
              <p className="muted">
                The Naples page is a place-led synthesis built around Banvelca&rsquo;s founding
                geography and the early Mediterranean phase of the Velutini record.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external">
                    Banvelca — About
                  </Link>{" "}
                  — Used for the 1781 founding in the Kingdom of Naples, Juan Bautista Velutini,
                  and the France/Corsica commercial-affairs framing.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini"
                    rel="noopener external"
                  >
                    Banvelca — Juan Bautista Velutini
                  </Link>{" "}
                  — Used for the founder-specific Naples narrative, staple-trade description,
                  marriage, and continuity framing.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione"
                    rel="noopener external"
                  >
                    Banvelca — Vicente José Velutini Llarione
                  </Link>{" "}
                  — Used for the 1811 Naples birth year, Mediterranean expansion, and later move
                  toward Venezuela.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the wider generational sequence into which the Naples chapter fits.
                </li>
                <li>
                  <Link href="https://whc.unesco.org/en/list/726/" rel="noopener external">
                    UNESCO — Historic Centre of Naples
                  </Link>{" "}
                  — Used only for external heritage context around Naples as a long-duration
                  Mediterranean city.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Naples cluster</h2>
            <div className="button-row">
              <Link href="/entities/juan-bautista-velutini/" className="button">
                Juan Bautista Velutini
              </Link>
              <Link href="/entities/banvelca-company/" className="button-secondary">
                Banvelca &amp; Company
              </Link>
              <Link href="/families/velutini/" className="button-secondary">
                Velutini Family
              </Link>
              <Link href="/places/caracas/" className="button-secondary">
                Caracas
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
              organizations, and places associated with the Herrera and Velutini record.
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
              <li>
                <Link href="/families/herrera-velutini-connection/">Herrera and Velutini</Link>
              </li>
              <li><Link href="/families/velutini/">Velutini Family</Link></li>
              <li><Link href="/places/caracas/">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/">Banco Caracas</Link></li>
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