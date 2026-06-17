import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://herreravelutini.com"),
  title:
    "Lanzarote | Castle Santa Barbara, Heraldry and Titled Memory",
  description:
    "Place dossier for Lanzarote across Castle Santa Barbara, the Marquisate of Lanzarote, and the island's symbolic role in the Herrera record.",
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
    canonical: "/places/lanzarote/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Lanzarote | Castle Santa Barbara, Heraldry and Titled Memory",
    description:
      "Place dossier for Lanzarote across Castle Santa Barbara, the Marquisate of Lanzarote, and the island's symbolic role in the Herrera record.",
    url: "/places/lanzarote/",
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
      "Lanzarote | Castle Santa Barbara, Heraldry and Titled Memory",
    description:
      "Place dossier for Lanzarote across Castle Santa Barbara, the Marquisate of Lanzarote, and the island's symbolic role in the Herrera record.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Lanzarote() {
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
              name: "Lanzarote | Castle Santa Barbara, Heraldry and Titled Memory",
              url: "https://herreravelutini.com/places/lanzarote/",
              description:
                "Place dossier for Lanzarote across Castle Santa Barbara, the Marquisate of Lanzarote, and the island's symbolic role in the Herrera record.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Place",
                name: "Lanzarote",
                url: "https://herreravelutini.com/places/lanzarote/",
                description:
                  "Place dossier for Lanzarote across the House of Herrera record.",
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
                  name: "Lanzarote",
                  item: "https://herreravelutini.com/places/lanzarote/",
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
                  <li><Link href="https://herreravelutini.com/" title="Home">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/places/" title="Places">Places</Link></li>
                  <li aria-current="page">Lanzarote</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Lanzarote</h1>
              <p className="lede">
                Lanzarote matters on this portal because the island is not just a setting. It is
                one of the clearest places where estate memory, heraldry, and titled distinction
                converge in the House of Herrera record, especially through Castle Santa Barbara,
                the old capital of Teguise, and the Marquisate of Lanzarote.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>Symbolic geography for fortification, title, and heraldry</strong>
                </li>
                <li>
                  <span>Strongest anchors</span>
                  <strong>
                    <Link href="/entities/castle-santa-barbara/" title="Castle Santa Barbara">Castle Santa Barbara</Link>
                    {" · "}
                    <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín de Herrera">
                      Agustín de Herrera
                    </Link>
                  </strong>
                </li>
                <li>
                  <span>Theme links</span>
                  <strong>
                    <Link href="/themes/heraldry-and-symbols/" title="Heraldry and Symbols">Heraldry and Symbols</Link>
                    {" and "}
                    <Link href="/themes/orders-and-distinctions/" title="Orders and Distinctions">Orders and Distinctions</Link>
                  </strong>
                </li>
                <li>
                  <span>Date caution</span>
                  <strong>1567 and 1584 are firmer than 1548</strong>
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
              <time dateTime="2026-04-24">April 24, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why Lanzarote matters</div>
            <h2>The island turns abstract family language into a visible place cluster.</h2>
            <p className="lede">
              In the Herrera material, Lanzarote keeps returning in different registers. That
              repetition is exactly why it deserves its own place page.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera estate page presents Castle Santa Barbara in Teguise as
                  the island&rsquo;s oldest fortification and describes it as a defensive
                  watchpoint over the historic capital. The same page also ties the castle to
                  sixteenth-century island protection under Philip II and Don Sanco de Herrera.
                </p>
                <p>
                  But Lanzarote does not stay confined to the estate page. It also appears in the
                  symbols page through the Lanzarote coat of arms and in the distinctions page
                  through the Marquisate of Lanzarote. Archival records catalogued in Teguise now
                  strengthen that titled-memory layer by supporting a Count of Lanzarote grant in
                  1567 and a marquis grant with data crónica of May 1, 1584. The island therefore
                  functions as a place where architecture, heraldic identity, and titled memory
                  all meet.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/lanzarote-symbol.svg"
                  alt="Diagram showing Lanzarote connected to Castle Santa Barbara, heraldry, and titled memory."
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption>
                  Lanzarote is one of the strongest symbolic-geography nodes in the Herrera
                  record.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Three layers</div>
            <h2>The island carries three different kinds of meaning on the portal</h2>
            <p className="lede">
              Those layers explain why Lanzarote belongs in the place system and not only in the
              theme system.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Lanzarote-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fortification</td>
                    <td>Castle Santa Barbara in Teguise</td>
                    <td>
                      Gives the island a built landmark connected to defense, administration, and
                      old-capital memory.
                    </td>
                  </tr>
                  <tr>
                    <td>Heraldry</td>
                    <td>Lanzarote coat of arms</td>
                    <td>
                      Shows that the island is part of the symbolic language of the House rather
                      than just a travel location.
                    </td>
                  </tr>
                  <tr>
                    <td>Titled distinction</td>
                    <td>Marquisate of Lanzarote</td>
                    <td>
                      Makes the island part of the nobiliary memory that later appears in the
                      distinctions cluster.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to use the page</div>
            <h2>Lanzarote is a bridge between places and themes</h2>
            <p className="lede">
              Readers can start here from several directions: an estate, a coat of arms, or a
              title.
            </p>
            <p>
              If a reader arrives through{" "}
              <Link href="/entities/castle-santa-barbara/" title="Castle Santa Barbara">Castle Santa Barbara</Link>, this page
              explains why the castle matters beyond architecture. If a reader arrives through{" "}
              <Link href="/themes/heraldry-and-symbols/" title="Heraldry and Symbols">Heraldry and Symbols</Link>, this page
              gives the island a concrete setting. If a reader arrives through{" "}
              <Link href="/themes/orders-and-distinctions/" title="Orders and Distinctions">Orders and Distinctions</Link>, this
              page shows that the title language is also tied to a defensible and symbolically
              dense place. The new{" "}
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" title="Agustín de Herrera y Rojas Ayala">
                Agustín de Herrera y Rojas Ayala
              </Link>{" "}
              profile adds the person-level route into that same Lanzarote cluster.
            </p>
            <p>
              That makes Lanzarote one of the site&rsquo;s cleanest examples of symbolic
              geography: a place that strengthens estates, heraldry, distinctions, and
              House-level identity all at once.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Title-date caution</div>
            <h2>
              The place page uses Lanzarote as symbolic geography, not as a fully reconciled
              legal-title chronology.
            </h2>
            <p className="lede">
              The title references are valuable because they show why Lanzarote matters in the
              Herrera record, but the date mechanics should stay visibly qualified.
            </p>
            <p>
              The family-domain Agustín profile introduces 1548 / 1567 title language beside a
              later life frame, but archival entries in Teguise support a Count of Lanzarote
              grant in 1567, a corroboration in 1569, and a marquis grant with data crónica of
              May 1, 1584. This page therefore treats Lanzarote as a title-memory and
              symbolic-geography node with firmer 1567 / 1584 anchors, while still routing
              readers to the person and distinctions pages for the unresolved 1548 and life-frame
              questions.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Lanzarote page</h2>
              <p className="muted">
                The Lanzarote page is a place-led synthesis built from the estate, heraldry, and
                titled-memory material on the House of Herrera domain.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                    title="House of Herrera — Family Estates">
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for Castle Santa Barbara, Teguise, the defensive-fortification framing,
                  and the island&rsquo;s administrative role.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external" title="House of Herrera — Symbols">
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used for the Lanzarote coat-of-arms layer and the island&rsquo;s place in
                  the symbolic system.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/orders-and-distinctions"
                    rel="noopener external"
                    title="House of Herrera — Orders and Distinctions">
                    House of Herrera — Orders and Distinctions
                  </Link>{" "}
                  — Used for the Marquisate of Lanzarote and its May 1, 1584 creation note for
                  Agustín de Herrera y Rojas.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                    title="House of Herrera — Agustín de Herrera y Rojas Ayala">
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used for the person-level route into Lanzarote, Crown service, and the
                  separate 1548 title language that remains under caution.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the wider Canary-Islands and multi-regional scope of the Herrera
                  record.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/332/"
                    rel="noopener external"
                    title="Archivo Histórico Municipal de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y Rojas">
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
                    title="Archivo Histórico Municipal de Teguise — Corroboración del título de Conde de Lanzarote">
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
                    title="Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de Lanzarote a Agustín de Herrera y Rojas">
                    Archivo Histórico Municipal de Teguise — Concesión del título de Marqués de
                    Lanzarote a Agustín de Herrera y Rojas
                  </Link>{" "}
                  — Used as official archival corroboration for the Marqués de Lanzarote grant
                  with data crónica of May 1, 1584.
                </li>
                <li>
                  <Link href="https://www.unesco.org/en/mab/lanzarote" rel="noopener external" title="UNESCO MAB — Lanzarote">
                    UNESCO MAB — Lanzarote
                  </Link>{" "}
                  — Used only for external island-level context around Lanzarote&rsquo;s volcanic
                  geography and biosphere-reserve setting.
                </li>
                <li>
                  <Link
                    href="https://memoriadelanzarote.com/item/10707-don-agustin-de-herrera-y-rojas-i-marques-de-lanzarote"
                    rel="noopener external"
                    title="Memoria de Lanzarote — Don Agustín de Herrera y Rojas, I Marqués de Lanzarote">
                    Memoria de Lanzarote — Don Agustín de Herrera y Rojas, I Marqués de
                    Lanzarote
                  </Link>{" "}
                  — Used for bibliography metadata around the Agustín monograph; claim-level use
                  requires a future reading pass.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Lanzarote cluster</h2>
            <div className="button-row">
              <Link href="/entities/castle-santa-barbara/" className="button" title="Castle Santa Barbara">
                Castle Santa Barbara
              </Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary" title="Agustín de Herrera">
                Agustín de Herrera
              </Link>
              <Link href="/themes/heraldry-and-symbols/" className="button-secondary" title="Heraldry and Symbols">
                Heraldry and Symbols
              </Link>
              <Link href="/themes/orders-and-distinctions/" className="button-secondary" title="Orders and Distinctions">
                Orders and Distinctions
              </Link>
              <Link href="/entities/house-of-herrera/" className="button-secondary" title="House of Herrera">
                House of Herrera
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
                <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link>
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
            Built for clear attribution, fast delivery, and durable search understanding.
          </span>
        </div>
      </footer>
    </>
  );
}