import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Genealogy | Family Trees, Branches and Lineage Maps",
  description: "Section hub for the genealogy layer of the Herrera Velutini portal.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/genealogy/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Genealogy | Family Trees, Branches and Lineage Maps",
    description: "Section hub for the genealogy layer of the Herrera Velutini portal.",
    url: "https://herreravelutini.com/genealogy/",
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
    title: "Genealogy | Family Trees, Branches and Lineage Maps",
    description: "Section hub for the genealogy layer of the Herrera Velutini portal.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  }
};

export default function GenealogyPage() {
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

      {/* Collection Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name:
              "Genealogy | Family Trees, Branches and Lineage Maps",
            url: "https://herreravelutini.com/genealogy/",
            description:
              "Section hub for the genealogy layer of the Herrera Velutini portal.",
            isPartOf: {
              "@id": "https://herreravelutini.com/#website",
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
                name: "Genealogy",
                item: "https://herreravelutini.com/genealogy/",
              },
            ],
          }).replace(/</g, "\\u003c"),
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
                  <li aria-current="page">Genealogy</li>
                </ol>
              </nav>
              <div className="eyebrow">Section hub</div>
              <h1>Genealogy</h1>
              <p className="lede">
                The Genealogy section organizes the portal&apos;s lineage work. It does not pretend that the public family domains are full archival trees; instead, it turns their published sequences into transparent, readable lineage maps that show where the record is ordered, where it is branch-like, and where connection pages are more reliable than an unbroken chain.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Live lineage pages</span>
                  <strong>
                    <Link href="/genealogy/herrera-lineage/" title="Herrera Lineage">Herrera Lineage</Link>
                    {" and "}
                    <Link href="/genealogy/velutini-lineage/" title="Velutini Lineage">Velutini Lineage</Link>
                  </strong>
                </li>
                <li>
                  <span>Companion pages</span>
                  <strong>Families, Timeline, Caracas, and key person profiles</strong>
                </li>
                <li>
                  <span>Method note</span>
                  <strong>Published sequence, branch logic, and source-led caution</strong>
                </li>
                <li>
                  <span>Best first click</span>
                  <strong>
                    <Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link>
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
              <Link href="/editorial-desk/" title="Editorial Desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/" title="Review Team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-18">April 18, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why this section exists</div>
            <h2>Public family domains are rich, but they are not formal archives</h2>
            <p className="lede">
              The genealogy layer creates order without overclaiming certainty. It makes the strongest public sequences readable and labels where the record shifts from direct succession into branch, marriage, or thematic continuity.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera dynasty page is powerful because it gives a long chronological run of names. Banvelca&apos;s Legacy page is powerful because it gives a multi-generational sequence anchored by founder, diplomatic expansion, banking leadership, and later family-office continuity. But neither page functions like a traditional genealogical chart with every relationship explicitly proven.
                </p>
                <p>
                  The Genealogy section therefore adopts a careful method. It treats published order as a lineage backbone, marks when later figures are better read as branches or continuity figures, and links out to biographies, places, and connection pages wherever those supply stronger public evidence.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing the genealogy hub branching into Herrera, Velutini, Ampudia, Caracas, Naples, and the Americas."
                  loading="lazy"
                  src="/illustrations/genealogy-map-portal.svg"
                  width={600}
                  height={400}
                />
                <figcaption>
                  The genealogy layer connects sequence, place, and family-connection pages rather than pretending that every public page is already a full archival tree.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Live routes</div>
            <h2>The two lineage pages do different jobs</h2>
            <p className="lede">
              The Herrera and Velutini sequences are structurally different, so the portal treats them differently.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Herrera Lineage</h3>
                <p>
                  Reads the House of Herrera dynasty page as a long-duration backbone from Ampudia through Castile, the Canaries, estate memory, and the Caracas-linked modern bridge.
                </p>
                <p><Link href="/genealogy/herrera-lineage/" title="Herrera Lineage">Open Herrera Lineage</Link></p>
              </article>
              <article className="card">
                <h3>Velutini Lineage</h3>
                <p>
                  Reads Banvelca&apos;s Legacy page as a Naples-to-Americas family sequence, with Banco Caracas and the twentieth-century women&apos;s chapter treated as central rather than secondary.
                </p>
                <p><Link href="/genealogy/velutini-lineage/" title="Velutini Lineage">Open Velutini Lineage</Link></p>
              </article>
              <article className="card">
                <h3>Connection page</h3>
                <p>
                  The cross-family bridge belongs on its own family page because marriage, Caracas, and institutional continuity are stronger public evidence than forcing both lines into a third genealogy route.
                </p>
                <p><Link href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Open the connection page</Link></p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">How to use the section</div>
            <h2>Start with sequence, then move to entities and places</h2>
            <p className="lede">
              Genealogy becomes much easier when users do not treat it as names alone.
            </p>
            <ol className="number-list">
              <li>
                <strong>Start with the family hub</strong> to understand whether you are reading a Herrera, Velutini, or connection problem.
              </li>
              <li>
                <strong>Read the lineage page</strong> for the ordered public sequence.
              </li>
              <li>
                <strong>Switch to entity pages</strong> when you need a closer reading of people such as Pedro García, Juan Bautista, Clementina, or Belén Clarisa.
              </li>
              <li>
                <strong>Switch to place pages</strong> when estate and city context matter, especially in Caracas.
              </li>
              <li>
                <strong>Use the timeline</strong> if the problem is chronology rather than family structure.
              </li>
            </ol>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Genealogy section</h2>
              <p className="muted">
                The Genealogy section uses the published sequence pages on the two family domains as its raw material and adds caution where the public record does not yet function as a complete archival tree.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external" title="House of Herrera — Dynasty">House of Herrera — Dynasty</Link> — Used for the ordered Herrera sequence and its date frames.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external" title="House of Herrera — About">House of Herrera — About</Link> — Used for the 14th-century prominence narrative and the transregional scope of the family record.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external" title="Banvelca — Legacy">Banvelca — Legacy</Link> — Used for the Velutini generational sequence from 1781 onward.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/about" rel="noopener external" title="Banvelca — About">Banvelca — About</Link> — Used for the Naples founding context and the later intergenerational firm framing.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the genealogy layer</h2>
            <div className="button-row">
              <Link className="button" href="/genealogy/herrera-lineage/" title="Herrera Lineage">Herrera Lineage</Link>
              <Link className="button-secondary" href="/genealogy/velutini-lineage/" title="Velutini Lineage">Velutini Lineage</Link>
              <Link className="button-secondary" href="/families/herrera-velutini-connection/" title="Herrera and Velutini">Herrera and Velutini</Link>
              <Link className="button-secondary" href="/timeline/">Timeline</Link>
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