import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Orders and Distinctions | Titles, Marquisates and Geographic Memory",
  description:
    "An original synthesis of the House of Herrera distinctions material, explaining how titles and marquisates work as a geography of lineage rather than a free-floating prestige list.",
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
    canonical: "/themes/orders-and-distinctions/",
  },

  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title:
      "Orders and Distinctions | Titles, Marquisates and Geographic Memory",
    description:
      "An original synthesis of the House of Herrera distinctions material, explaining how titles and marquisates work as a geography of lineage rather than a free-floating prestige list.",
    url: "https://herreravelutini.com/themes/orders-and-distinctions/",
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
      "Orders and Distinctions | Titles, Marquisates and Geographic Memory",
    description:
      "An original synthesis of the House of Herrera distinctions material, explaining how titles and marquisates work as a geography of lineage rather than a free-floating prestige list.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function OrdersAndDistinctions() {
  return (
    <>
      <Head>

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Orders and Distinctions | Titles, Marquisates and Geographic Memory"
        />
        <meta
          name="twitter:description"
          content="An original synthesis of the House of Herrera distinctions material, explaining how titles and marquisates work as a geography of lineage rather than a free-floating prestige list."
        />
        <meta
          name="twitter:image"
          content="https://herreravelutini.com/og/herreravelutini-og.png"
        />

        {/* Article times */}
        <meta property="article:published_time" content="2026-04-20" />
        <meta property="article:modified_time" content="2026-04-24" />

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
                "https://herreravelutini.com/themes/orders-and-distinctions/#article",
              headline: "Orders and Distinctions",
              description:
                "An original synthesis of the House of Herrera distinctions material, explaining how titles and marquisates work as a geography of lineage rather than a free-floating prestige list.",
              url: "https://herreravelutini.com/themes/orders-and-distinctions/",
              datePublished: "2026-04-20",
              dateModified: "2026-04-24",
              author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
              editor: { "@id": "https://herreravelutini.com/review-team/#org" },
              publisher: { "@id": "https://herreravelutini.com/#organization" },
              about: [
                "House of Herrera",
                "orders and distinctions",
                "Lanzarote",
                "marquisates",
                "titles",
                "source-date caution",
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
                  name: "Orders and Distinctions",
                  item: "https://herreravelutini.com/themes/orders-and-distinctions/",
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
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/themes/">Themes</Link></li>
                  <li aria-current="page">Orders and Distinctions</li>
                </ol>
              </nav>
              <div className="eyebrow">Theme page</div>
              <h1>Orders and Distinctions</h1>
              <p className="lede">
                The House of Herrera distinctions material matters less as a prestige list than
                as a guide to where lineage, titled memory, and geographic association become
                visible. On the portal, those titles are read alongside Lanzarote, estates, and
                the dynastic sequence rather than in isolation.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Primary source</span>
                  <strong>House of Herrera — Orders and Distinctions</strong>
                </li>
                <li>
                  <span>Strongest anchors</span>
                  <strong>
                    Marquisate de Lanzarote, Herrera and Vallehermoso, and Torre Casa
                  </strong>
                </li>
                <li>
                  <span>Reading mode</span>
                  <strong>Titles plus places plus named figures</strong>
                </li>
                <li>
                  <span>Chronology check</span>
                  <strong>1567 count; 1584 marquis grant externally corroborated</strong>
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
              <time dateTime="2026-04-20">April 20, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-24">April 24, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Portal function</div>
            <h2>What this theme adds</h2>
            <p className="lede">
              Titles and distinctions appear across the Herrera material, but they become
              meaningful only when they are tied back to the people and places the source page
              actually names.
            </p>
            <div className="cards">
              <article className="card">
                <h3>It prioritizes the clearest titles</h3>
                <p>
                  The portal gives more emphasis to the distinctions that include a date, ruler,
                  or named beneficiary, because those are the entries that can be grounded most
                  carefully.
                </p>
              </article>
              <article className="card">
                <h3>It turns titles into geography</h3>
                <p>
                  Lanzarote, Vallehermoso, Torre Casa, Fuerteventura, and Herrera are treated
                  as spatial memory points rather than as detached honorifics.
                </p>
              </article>
              <article className="card">
                <h3>It keeps source limits visible</h3>
                <p>
                  Some titles on the source page are only listed, not deeply explained. The
                  portal preserves that difference instead of pretending the record is uniform.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Most concrete entries</div>
            <h2>
              The distinctions page is strongest where it names a ruler, a date, or a
              beneficiary
            </h2>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">1584</div>
                <h3>Marquisate de Lanzarote</h3>
                <p>
                  The source page identifies this as a Spanish noble title created on May 1,
                  1584 by Philip II in favor of Agustín de Herrera y Rojas, linking the
                  distinction directly to Lanzarote&apos;s political and military geography.
                </p>
              </article>
              <article className="callout">
                <div className="overline">1750</div>
                <h3>Herrera and Vallehermoso</h3>
                <p>
                  The source page gives a creation date of January 20, 1750 under Fernando VI
                  in favor of José de Herrera and Juan Zarzosa of Trujillo, Peru, showing how
                  the titled record extends beyond the Canaries alone.
                </p>
              </article>
              <article className="callout">
                <div className="overline">1910 to 1992</div>
                <h3>Torre Casa</h3>
                <p>
                  The distinctions page ties this marquisate to Reinaldo Herrera Uslar and then
                  to Reinaldo Herrera Guevara, making it one of the clearest modern bridge
                  points on the page.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Lanzarote date caution</div>
            <h2>
              The Lanzarote title sequence is firmer than the family-domain Agustín page
              suggests.
            </h2>
            <p className="lede">
              The Orders page gives the strongest standalone title-creation statement for the
              Marquisate of Lanzarote, and archival records now support the broader sequence
              more clearly.
            </p>
            <p>
              Official archival entries in Teguise support a Count of Lanzarote grant in 1567,
              a corroboration in 1569, and a Marqués de Lanzarote grant with data crónica of
              May 1, 1584. That gives the Orders page&apos;s 1584 marquisate entry stronger
              footing than a flat 1548 / 1567 / 1584 tie would suggest.
            </p>
            <p>
              The family-domain Agustín page still introduces 1548 language beside a later life
              frame. This theme page therefore treats 1567 as the count-title step and 1584 as
              the marquisate grant, while leaving 1548 outside the settled sequence until a
              deeper reading pass explains it.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Why the portal reads titles geographically</div>
            <h2>Distinctions make more sense when they sit beside estates, symbols, and lineage</h2>
            <p className="lede">
              The titles do not stand alone on the portal. They help explain why Lanzarote
              matters, why the house keeps returning to estate-linked memory, and why the
              symbolic layer is so closely bound to place.
            </p>
            <p>
              That is why this page routes readers into{" "}
              <Link href="/entities/castle-santa-barbara/">Castle Santa Barbara</Link>, the{" "}
              <Link href="/estates/">Estates</Link> section, and the{" "}
              <Link href="/families/herrera/">Herrera Family</Link> hub. The distinctions
              material becomes easier to interpret once the reader can see how titled language,
              island geography, and the dynastic record reinforce each other.
            </p>
            <p>
              The same logic also explains why the portal keeps a visible source-audit posture
              here. The distinctions page lists additional titles such as Conde de Palomar,
              Marqués de Fuerteventura, and Marqués de Herrera, but the page gives less
              supporting prose for them. The portal therefore names those entries while giving
              fuller interpretation only where the source page itself is fuller.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis</h2>
              <p className="muted">
                This page interprets the House of Herrera distinctions material in conjunction
                with the dynasty, symbols, estate pages, and archival title records that make
                those distinctions readable.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/orders-and-distinctions"
                    rel="noopener external"
                  >
                    House of Herrera — Orders and Distinctions
                  </Link>{" "}
                  — Used for the listed titles, the May 1, 1584 Lanzarote creation note, the
                  1750 Herrera and Vallehermoso entry, and the Torre Casa succession note.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                  >
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used as the companion person profile whose 1548 language and family-domain
                  life frame remain under caution.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external">
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used to connect titled language back to the symbolic identity of Lanzarote
                  and the wider house.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the Lanzarote and estate geography that makes distinctions easier
                  to interpret.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external">
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for the named figures who anchor the longer Herrera sequence.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/332/"
                    rel="noopener external"
                  >
                    Archivo Histórico Municipal de Teguise — Título de Conde de Lanzarote para
                    Agustín de Herrera y Rojas
                  </Link>{" "}
                  — Used as official archival corroboration for the 1567 Count of Lanzarote
                  title grant.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/334/"
                    rel="noopener external"
                  >
                    Archivo Histórico Municipal de Teguise — Corroboración del título de Conde
                    de Lanzarote
                  </Link>{" "}
                  — Used as official archival corroboration for the 1569 confirmation step in
                  the count-title record.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/340/"
                    rel="noopener external"
                  >
                    Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de
                    Lanzarote a Agustín de Herrera y Rojas
                  </Link>{" "}
                  — Used as official archival corroboration for the Marqués de Lanzarote grant
                  with data crónica of May 1, 1584.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the titled Herrera layer</h2>
            <div className="button-row">
              <Link href="/themes/heraldry-and-symbols/" className="button">
                Heraldry and Symbols
              </Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary">
                Agustín de Herrera
              </Link>
              <Link href="/places/lanzarote/" className="button-secondary">
                Lanzarote
              </Link>
              <Link href="/entities/castle-santa-barbara/" className="button-secondary">
                Castle Santa Barbara
              </Link>
              <Link href="/families/herrera/" className="button-secondary">
                Herrera Family
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
              <li><Link href="/estates/">Estates</Link></li>
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
                <Link href="/themes/heraldry-and-symbols/">Heraldry and Symbols</Link>
              </li>
              <li><Link href="/entities/house-of-herrera/">House of Herrera</Link></li>
              <li><Link href="/entities/castle-santa-barbara/">Castle Santa Barbara</Link></li>
              <li><Link href="/heritage/">Heritage</Link></li>
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