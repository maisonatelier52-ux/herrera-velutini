import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ampudia | Early Herrera Lineage, Castle Memory and Castilian Place Anchor",
  description:
    "Place dossier for Ampudia as an early Castilian anchor in the Herrera record through Hernán de Herrera, Pedro García de Herrera y Rojas, and the Castle of Ampudia.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/places/ampudia/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Ampudia | Early Herrera Lineage, Castle Memory and Castilian Place Anchor",
    description:
      "Place dossier for Ampudia as an early Castilian anchor in the Herrera record through Hernán de Herrera, Pedro García de Herrera y Rojas, and the Castle of Ampudia.",
    url: "https://herreravelutini.com/places/ampudia/",
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
    title: "Ampudia | Early Herrera Lineage, Castle Memory and Castilian Place Anchor",
    description:
      "Place dossier for Ampudia as an early Castilian anchor in the Herrera record through Hernán de Herrera, Pedro García de Herrera y Rojas, and the Castle of Ampudia.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function AmpudiaPage() {
  return (
    <>
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
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Website */}
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
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Profile Page (Ampudia) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name:
              "Ampudia | Early Herrera Lineage, Castle Memory and Castilian Place Anchor",
            url: "https://herreravelutini.com/places/ampudia/",
            description:
              "Place dossier for Ampudia as an early Castilian anchor in the Herrera record through Hernán de Herrera, Pedro García de Herrera y Rojas, and the Castle of Ampudia.",
            isPartOf: {
              "@id": "https://herreravelutini.com/#website",
            },
            mainEntity: {
              "@type": "Place",
              name: "Ampudia",
              url: "https://herreravelutini.com/places/ampudia/",
              description:
                "Place dossier for Ampudia across the House of Herrera record.",
            },
            author: {
              "@type": "Organization",
              "@id":
                "https://herreravelutini.com/editorial-desk/#org",
              name: "Herrera Velutini Editorial Desk",
            },
            editor: {
              "@type": "Organization",
              "@id":
                "https://herreravelutini.com/review-team/#org",
              name: "Standards Review Team",
            },
            publisher: {
              "@id": "https://herreravelutini.com/#organization",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumbs */}
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
                name: "Ampudia",
                item: "https://herreravelutini.com/places/ampudia/",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

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
                  <li aria-current="page">Ampudia</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Ampudia</h1>
              <p className="lede">
                Ampudia is one of the earliest place anchors in the Herrera record. It matters less as a modern family center than as a deep Castilian memory node where lineage, lordship, and castle history become concrete through Hernán de Herrera, Pedro García de Herrera y Rojas, and the Castle of Ampudia.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>Early Castilian lineage anchor</strong>
                </li>
                <li>
                  <span>Figure anchors</span>
                  <strong>
                    <Link href="/entities/hernan-de-herrera-lord-of-ampudia/">Hernán de Herrera</Link>
                    {" · "}
                    <Link href="/entities/pedro-garcia-de-herrera-y-rojas/">Pedro García</Link>
                  </strong>
                </li>
                <li>
                  <span>Estate anchor</span>
                  <strong>Castle of Ampudia in Palencia</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong><Link href="/genealogy/herrera-lineage/">Herrera Lineage</Link></strong>
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
            <div className="overline">Why Ampudia matters</div>
            <h2>This is one of the clearest places where early Herrera lineage becomes physical.</h2>
            <p className="lede">
              Ampudia is useful because it keeps the early Herrera record from dissolving into distant names alone. It gives the portal a place where manor memory, martial rank, and dynasty sequence can all be read together.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera dynasty page begins with Hernán de Herrera, Lord of Ampudia I, and then moves quickly into Pedro García de Herrera y Rojas, the early figure the portal already treats as one of the clearest medieval anchors. The family-estates page strengthens that sequence by identifying the Castle of Ampudia as a fifteenth-century Gothic fortress built by the descendants of Pedro García Herrera and tying the place to the manor of Ampudia.
                </p>
                <p>
                  That makes Ampudia different from Caracas or Lanzarote. It is not the main bridge into modern banking or theme clusters. It is the early Castilian place where the lineage can still be visualized as land, fortification, and lordship.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing Ampudia connected to castle memory and the early Herrera lineage."
                  loading="lazy"
                  src="/illustrations/ampudia-fortress.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  The Ampudia dossier gives the Herrera line an early place anchor instead of leaving the medieval chapter abstract.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Place and lineage</div>
            <h2>The current public material gives Ampudia four useful roles</h2>
            <p className="lede">
              Together, these roles explain why Ampudia belongs in the place layer and not only in the dynasty sequence.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Ampudia-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lineage opening</td>
                    <td>Hernán de Herrera, Lord of Ampudia I</td>
                    <td>Gives the Herrera sequence its earliest named territorial anchor in the dynasty page.</td>
                  </tr>
                  <tr>
                    <td>Early power node</td>
                    <td>Pedro García de Herrera y Rojas</td>
                    <td>Connects Ampudia to one of the clearest early figures and to the Marshal-of-Castile chapter.</td>
                  </tr>
                  <tr>
                    <td>Estate memory</td>
                    <td>Castle of Ampudia</td>
                    <td>Turns the place into a built symbol of lineage rather than a name on a chart.</td>
                  </tr>
                  <tr>
                    <td>Historical texture</td>
                    <td>Later ownership and battle memory</td>
                    <td>Adds the local-history layer that keeps the site from flattening Ampudia into genealogy alone.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How the portal reads Ampudia</div>
            <h2>Ampudia is the best place-led entry into the medieval Herrera chapter</h2>
            <p className="lede">
              Readers who start with later Caracas and Banvelca material can miss how old the Herrera side of the portal really is. Ampudia helps solve that.
            </p>
            <p>
              The Pedro García profile identifies him as a Castilian nobleman and Marshal of Castile, while the estate page anchors his descendants in the castle and manor of Ampudia. That lets the portal route readers from a short medieval profile into a longer territorial memory. It also makes the later estate and symbol pages feel like part of one evolving family geography rather than isolated prestige references.
            </p>
            <p>
              With <Link href="/entities/hernan-de-herrera-lord-of-ampudia/">Hernán de Herrera, Lord of Ampudia I</Link> now live, Ampudia can do its strongest work: it links the first named Herrera anchor to the later Pedro García profile and the Castle of Ampudia place-memory layer.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Ampudia page</h2>
              <p className="muted">
                The Ampudia page is a place-led synthesis built from the earliest Herrera sequence and the estate material tied to the manor and castle of Ampudia.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external">House of Herrera — Dynasty</Link> — Used for Hernán de Herrera, Lord of Ampudia I, and the ordered early Herrera sequence.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i" rel="noopener external">House of Herrera — Hernán de Herrera, Lord of Ampudia I</Link> — Used for the sparse first-anchor profile and the circa 1355 Ampudia title frame.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas" rel="noopener external">House of Herrera — Pedro García de Herrera y Rojas</Link> — Used for the identification of Pedro García as a Castilian nobleman and Marshal of Castile.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external">House of Herrera — Family Estates</Link> — Used for the Castle of Ampudia, the manor connection, the Gothic-fortress description, and later local-history notes.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external">House of Herrera — About</Link> — Used for the wider long-duration framing of the Herrera family record.
                </li>
                <li>
                  <Link href="https://www.turismocastillayleon.com/en/heritage-culture/castle-ampudia" rel="noopener external">Castilla y León Tourism — Castle of Ampudia</Link> — Used only for external local place context around the castle and Ampudia setting.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Ampudia cluster</h2>
            <div className="button-row">
              <Link className="button" href="/entities/hernan-de-herrera-lord-of-ampudia/">Hernán de Herrera</Link>
              <Link className="button-secondary" href="/entities/pedro-garcia-de-herrera-y-rojas/">Pedro García de Herrera y Rojas</Link>
              <Link className="button-secondary" href="/genealogy/herrera-lineage/">Herrera Lineage</Link>
              <Link className="button-secondary" href="/entities/house-of-herrera/">House of Herrera</Link>
              <Link className="button-secondary" href="/estates/">Estates</Link>
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