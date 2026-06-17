import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Places | Family Geography, Estates and Institutional Context",
  description:
    "Section hub for place dossiers across the Herrera Velutini portal.",
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
    canonical: "/places/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Places | Family Geography, Estates and Institutional Context",
    description:
      "Section hub for place dossiers across the Herrera Velutini portal.",
    url: "https://herreravelutini.com/places/",
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
    title: "Places | Family Geography, Estates and Institutional Context",
    description:
      "Section hub for place dossiers across the Herrera Velutini portal.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function PlacesPage() {
  return (
    <>

      <Head>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Places | Family Geography, Estates and Institutional Context"
        />
        <meta
          name="twitter:description"
          content="Section hub for place dossiers across the Herrera Velutini portal."
        />
        <meta
          name="twitter:image"
          content="https://herreravelutini.com/og/herreravelutini-og.png"
        />

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
              publisher: {
                "@id": "https://herreravelutini.com/#organization",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Places | Family Geography, Estates and Institutional Context",
              url: "https://herreravelutini.com/places/",
              description:
                "Section hub for place dossiers across the Herrera Velutini portal.",
              isPartOf: {
                "@id": "https://herreravelutini.com/#website",
              },
              publisher: {
                "@id": "https://herreravelutini.com/#organization",
              },
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
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="https://herreravelutini.com/" title="Home">Home</Link>
                  </li>
                  <li aria-current="page">Places</li>
                </ol>
              </nav>
              <div className="eyebrow">Section hub</div>
              <h1>Places</h1>
              <p className="lede">
                The Places section turns geography into editorial structure. It
                shows where estates, banks, marriages, and cultural initiatives
                become legible as a lived map rather than a list of names.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Live now</span>
                  <strong>
                    <Link href="/places/caracas/" title="Caracas">Caracas</Link>
                    {" · "}
                    <Link href="/places/naples/" title="Naples">Naples</Link>
                    {" · "}
                    <Link href="/places/paris/" title="Paris">Paris</Link>
                    {" · "}
                    <Link href="/places/lanzarote/" title="Lanzarote">Lanzarote</Link>
                    {" · "}
                    <Link href="/places/ampudia/" title="Ampudia">Ampudia</Link>
                    {" · "}
                    <Link href="/places/uslar/" title="Uslar">Uslar</Link>
                    {" · "}
                    <Link href="/places/gleichen/" title="Gleichen">Gleichen</Link>
                  </strong>
                </li>
                <li>
                  <span>Next queue</span>
                  <strong>
                    Vicente José, José Antonio, and early Herrera anchors
                  </strong>
                </li>
                <li>
                  <span>Cross-links</span>
                  <strong>
                    Estates, Genealogy, Entity pages, and the family connection
                    layer
                  </strong>
                </li>
                <li>
                  <span>Reading mode</span>
                  <strong>Place dossier + source basis + related entities</strong>
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
              <time dateTime="2026-04-18">April 18, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Live dossiers</div>
            <h2>The place layer now has seven distinct entry points</h2>
            <p className="lede">
              The live place network now covers the city bridge, the Banvelca
              origin city, the Paris education-and-Europe hinge, the strongest
              symbolic island cluster, the earliest Castilian anchor, and the
              two-page German branch pair. Together, those pages make the section
              feel like a real geography layer rather than a placeholder.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Caracas</h3>
                <p>
                  A place dossier connecting estate memory, Banco Caracas,
                  marriage alliance, and cultural patronage.
                </p>
                <p>
                  <Link href="/places/caracas/" title="Open Caracas">Open Caracas</Link>
                </p>
              </article>
              <article className="card">
                <h3>Naples</h3>
                <p>
                  The founding geography of Banvelca and the first Mediterranean
                  chapter of the Velutini record.
                </p>
                <p>
                  <Link href="/places/naples/" title="Open Naples">Open Naples</Link>
                </p>
              </article>
              <article className="card">
                <h3>Paris</h3>
                <p>
                  A bridge city tying Clementina's Paris education to Banvelca's
                  later European office geography.
                </p>
                <p>
                  <Link href="/places/paris/" title="Open Paris">Open Paris</Link>
                </p>
              </article>
              <article className="card">
                <h3>Lanzarote</h3>
                <p>
                  An island dossier connecting Castle Santa Barbara, heraldry,
                  and the Marquisate of Lanzarote.
                </p>
                <p>
                  <Link href="/places/lanzarote/" title="Open Lanzarote">Open Lanzarote</Link>
                </p>
              </article>
              <article className="card">
                <h3>Ampudia</h3>
                <p>
                  An early Castilian anchor that ties lineage memory to manor and
                  fortress geography.
                </p>
                <p>
                  <Link href="/places/ampudia/" title="Open Ampudia">Open Ampudia</Link>
                </p>
              </article>
              <article className="card">
                <h3>Uslar</h3>
                <p>
                  A German branch page connecting Freudenthal, the Uslar coat of
                  arms, and surname continuity.
                </p>
                <p>
                  <Link href="/places/uslar/" title="Open Uslar">Open Uslar</Link>
                </p>
              </article>
              <article className="card">
                <h3>Gleichen</h3>
                <p>
                  A castle-memory landscape page explaining the Drei Gleichen and
                  the Uslar-Gleichen layer.
                </p>
                <p>
                  <Link href="/places/gleichen/" title="Open Gleichen">Open Gleichen</Link>
                </p>
              </article>
            </div>
            <figure className="feature-figure">
              <Image
                src="/illustrations/place-atlas.svg"
                alt="Diagram mapping the place layer from Caracas to Lanzarote and Naples."
                width={900}
                height={500}
                loading="lazy"
              />
              <figcaption>
                The Places section is designed to connect estates, institutions,
                and biographies through geography.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Use places with the core authority layer</h2>
            <div className="button-row">
              <Link className="button" href="/places/caracas/" title="Caracas">Caracas</Link>
              <Link className="button-secondary" href="/places/naples/" title="Naples">Naples</Link>
              <Link className="button-secondary" href="/places/paris/" title="Paris">Paris</Link>
              <Link className="button-secondary" href="/places/lanzarote/" title="Lanzarote">Lanzarote</Link>
              <Link className="button-secondary" href="/places/ampudia/" title="Ampudia">Ampudia</Link>
              <Link className="button-secondary" href="/places/uslar/" title="Uslar">Uslar</Link>
              <Link className="button-secondary" href="/places/gleichen/" title="Gleichen">Gleichen</Link>
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
              A fast, source-linked editorial portal for family history, lineage,
              estates, organizations, and places associated with the Herrera and
              Velutini record.
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
              <li>
                <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">
                  Herrera and Velutini
                </Link>
              </li>
              <li><Link href="/families/velutini/" title="Velutini Family">Velutini Family</Link></li>
              <li><Link href="/places/caracas/" title="Caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas/" title="Banco Caracas">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>
        <div className="container footer-base">
          <span>© {new Date().getFullYear()} Herrera Velutini</span>
          <span>
            Built for clear attribution, fast delivery, and durable search
            understanding.
          </span>
        </div>
      </footer>
    </>
  );
}