import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gleichen | Castle Memory, Uslar-Gleichen and German Branch Identity",
  description:
    "Place dossier for Gleichen across castle memory, the Uslar-Gleichen line, and the German branch identity visible in the Herrera record.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/places/gleichen/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Gleichen | Castle Memory, Uslar-Gleichen and German Branch Identity",
    description:
      "Place dossier for Gleichen across castle memory, the Uslar-Gleichen line, and the German branch identity visible in the Herrera record.",
    url: "https://herreravelutini.com/places/gleichen/",
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
    title: "Gleichen | Castle Memory, Uslar-Gleichen and German Branch Identity",
    description:
      "Place dossier for Gleichen across castle memory, the Uslar-Gleichen line, and the German branch identity visible in the Herrera record.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function GleichenPage() {
  return (
    <>
      <Script
        id="ld-org"
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
            areaServed: [
              "Europe",
              "North America",
              "Latin America",
              "Middle East",
            ],
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

      {/* Website */}
      <Script
        id="ld-website"
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
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
          }),
        }}
      />

      {/* ProfilePage */}
      <Script
        id="ld-profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name:
              "Gleichen | Castle Memory, Uslar-Gleichen and German Branch Identity",
            url: "https://herreravelutini.com/places/gleichen/",
            description:
              "Place dossier for Gleichen across castle memory, the Uslar-Gleichen line, and the German branch identity visible in the Herrera record.",
            isPartOf: {
              "@id": "https://herreravelutini.com/#website",
            },
            mainEntity: {
              "@type": "Place",
              name: "Gleichen",
              url: "https://herreravelutini.com/places/gleichen/",
              description:
                "Place dossier for Gleichen across the German branch layer of the House of Herrera record.",
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
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
          }),
        }}
      />

      {/* Breadcrumbs */}
      <Script
        id="ld-breadcrumbs"
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
                name: "Gleichen",
                item: "https://herreravelutini.com/places/gleichen/",
              },
            ],
          }),
        }}
      />

      <Link className="skip-link" href="#main" title="Skip to content">
        Skip to content
      </Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/" title="Home">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/places/" title="Places">Places</Link></li>
                  <li aria-current="page">Gleichen</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Gleichen</h1>
              <p className="lede">
                Gleichen is the clearest castle-memory node in the German branch layer of the Herrera record. It appears through the famed Gleichen castle landscape, the later Uslar-Gleichen estate note, the Gleichen coat of arms, and the modern compound surname carried by José Herrera Von Uslar Gleichen.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>Castle-memory landscape for the German branch</strong>
                </li>
                <li>
                  <span>Strongest anchors</span>
                  <strong>Castle of Gleichen and Uslar-Gleichen Castle</strong>
                </li>
                <li>
                  <span>Symbolic layer</span>
                  <strong>Gleichen coat of arms</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong><Link href="/places/uslar/" title="Uslar">Uslar</Link></strong>
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
            <div className="overline">Why Gleichen matters</div>
            <h2>Gleichen gives the German layer a landscape, not just a surname.</h2>
            <p className="lede">
              That makes it one of the most useful deep-memory places on the Herrera side of the portal.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera estate page describes Gleichen Castle as part of the three castles known collectively as the Drei Gleichen: Gleichen Castle, Muhlburg Castle, and Wachsenburg Castle, all within the conservation area near Erfurt. That alone gives the portal a memorable German landscape cluster.
                </p>
                <p>
                  The same page then deepens the place by describing Uslar-Gleichen Castle as a site built around 1100, later transferred around 1270 to the Lords of Uslar, divided into Altengleichen and Neuengleichen, and ultimately tied to the House of Uslar-Gleichen after 1825. That combination is why Gleichen deserves its own page rather than staying folded into a single Germany footnote.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing Gleichen connected to the three-castles landscape and the Uslar-Gleichen branch memory."
                  loading="lazy"
                  src="/illustrations/gleichen-three-castles.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  Gleichen is the portal&apos;s clearest German castle-memory landscape.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Four Gleichen layers</div>
            <h2>The current public material supports four readings of Gleichen</h2>
            <p className="lede">
              Those readings explain the page&apos;s value inside the place layer.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Gleichen-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Landscape memory</td>
                    <td>Drei Gleichen castles</td>
                    <td>Turns the branch into a recognizable geographic cluster near Erfurt instead of one isolated site.</td>
                  </tr>
                  <tr>
                    <td>Dynastic transfer</td>
                    <td>Lords of Uslar take Gleichen around 1270</td>
                    <td>Explains how Gleichen enters the Uslar-connected branch narrative.</td>
                  </tr>
                  <tr>
                    <td>Heraldry</td>
                    <td>Gleichen coat of arms</td>
                    <td>Shows that the place is part of the House&apos;s symbolic system as well as the estate layer.</td>
                  </tr>
                  <tr>
                    <td>Modern continuity</td>
                    <td>José Herrera Von Uslar Gleichen</td>
                    <td>Keeps the place visible in a living compound surname on the portal.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to use the page</div>
            <h2>Gleichen is the broader memory field; Uslar is the closer town anchor.</h2>
            <p className="lede">
              Readers will usually get the best result by using both pages together.
            </p>
            <p>
              Start here if you are trying to understand the German castle cluster, the Drei Gleichen setting, or the reason the compound surname carries both Uslar and Gleichen. Move next to{" "}
              <Link href="/places/uslar/" title="Uslar">Uslar </Link> if you want the town chronology, the Freudenthal detail, and the branch&apos;s more local town-level anchor.
            </p>
            <p>
              That pairing gives the site a cleaner German geography: one page for the wider castle-memory landscape and one for the branch town tied to Freudenthal and heraldry.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Gleichen page</h2>
              <p className="muted">
                The Gleichen page is a place-led synthesis built from the House of Herrera estate and heraldry material and the modern compound-surname page.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external" title="House of Herrera — Family Estates">House of Herrera — Family Estates</Link> — Used for the Drei Gleichen description, the conservation-area note near Erfurt, and the detailed Uslar-Gleichen castle sequence from about 1100 through the 1825 naming.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">House of Herrera — Symbols</Link> — Used for the Gleichen coat of arms and the place&apos;s role in the heraldic branch system.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen" rel="noopener external" title="House of Herrera — José Herrera Von Uslar Gleichen">House of Herrera — José Herrera Von Uslar Gleichen</Link> — Used for the modern bridge figure whose surname preserves the Uslar-Gleichen layer in the current public record.
                </li>
                <li>
                  <Link href="https://www.geopark-thueringen.de/" rel="noopener external" title="UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen">UNESCO Global Geopark Thüringen Inselsberg - Drei Gleichen</Link> — Used as external landscape context for the wider Drei Gleichen setting.
                </li>
                <li>
                  <Link href="https://www.erfurt-tourismus.de/en/all-about-erfurt/days-out/surrounding-area/thuringian-castle-landscape/gleichen-castle/" rel="noopener external" title="Erfurt Tourismus — Gleichen Castle">Erfurt Tourismus — Gleichen Castle</Link> — Used as external castle context for Gleichen Castle and the three-castle grouping.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Gleichen cluster</h2>
            <div className="button-row">
              <Link className="button" href="/places/uslar/" title="Uslar">Uslar</Link>
              <Link className="button-secondary" href="/entities/jose-herrera-von-uslar-gleichen/" title="José Herrera Von Uslar Gleichen">José Herrera Von Uslar Gleichen</Link>
              <Link className="button-secondary" href="/families/herrera/" title="Herrera Family">Herrera Family</Link>
              <Link className="button-secondary" href="/estates/" title="Estates">Estates</Link>
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
              <li><Link href="/about/" title="About">About</Link></li>
              <li><Link href="/heritage/" title="Heritage">Heritage</Link></li>
              <li><Link href="/families/" title="Families">Families</Link></li>
              <li><Link href="/genealogy/" title="Genealogy">Genealogy</Link></li>
              <li><Link href="/places/" title="Places">Places</Link></li>
              <li><Link href="/estates/" title="Estates">Estates</Link></li>
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
              <li><Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link></li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link></li>
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