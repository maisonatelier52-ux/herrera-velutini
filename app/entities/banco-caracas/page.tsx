import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banco Caracas | Institution in the Family Historical Record",
  description:
    "Institution profile for Banco Caracas as it appears across the Herrera and Velutini public family record.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://herreravelutini.com/entities/banco-caracas/",
  },
  openGraph: {
    title:
      "Banco Caracas | Institution in the Family Historical Record",
    description:
      "Institution profile for Banco Caracas as it appears across the Herrera and Velutini public family record.",
    url: "https://herreravelutini.com/entities/banco-caracas/",
    siteName: "Herrera Velutini",
    images: [
      {
        url: "/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Banco Caracas | Institution in the Family Historical Record",
    description:
      "Institution profile for Banco Caracas as it appears across the Herrera and Velutini public family record.",
    images: ["/og/herreravelutini-og.png"],
  },
};

export default function Page() {
  const organization = {
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
  };

  const website = {
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
  };

  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Banco Caracas | Institution in the Family Historical Record",
    url: "https://herreravelutini.com/entities/banco-caracas/",
    description:
      "Institution profile for Banco Caracas as it appears across the Herrera and Velutini public family record.",
    datePublished: "2026-04-18",
    dateModified: "2026-04-24",
    isPartOf: {
      "@id": "https://herreravelutini.com/#website",
    },
    mainEntity: {
      "@type": "Organization",
      name: "Banco Caracas",
      url: "https://herreravelutini.com/entities/banco-caracas/",
      description:
        "Institution profile for Banco Caracas within the public family record.",
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
  };

  const breadcrumb = {
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
        name: "Entities",
        item: "https://herreravelutini.com/entities/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Banco Caracas",
        item: "https://herreravelutini.com/entities/banco-caracas/",
      },
    ],
  };
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profile).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />

      <Link className="skip-link" href="#main" title="Skip to main content">
        Skip to content
      </Link>

      <main id="main">
        {/* HERO */}
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav className="breadcrumbs">
                <ol>
                  <li>
                    <Link href="/" title="View the Home page">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href="/entities" title="View the Entities page">
                      Entities
                    </Link>
                  </li>

                  <li aria-current="page" title="View the Banco Caracas page">
                    Banco Caracas
                  </li>
                </ol>
              </nav>

              <div className="eyebrow">Institution profile</div>

              <h1>Banco Caracas</h1>

              <p className="lede">
                This page treats Banco Caracas as a recurring institution in the
                public family record. It is not a full corporate history; it is a
                source-led profile showing how the bank functions across the
                Herrera and Velutini narrative, where the evidence is strongest,
                and where the family-domain material itself still needs careful
                qualification.
              </p>
            </div>

            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>

                  <strong>
                    Institution in the family historical record
                  </strong>
                </li>

                <li>
                  <span>Strongest anchors</span>

                  <strong>
                    Julio César Velutini Couturier, Belén Clarisa, and later
                    generations
                  </strong>
                </li>

                <li>
                  <span>City context</span>

                  <strong>
                    <Link href="/places/caracas" title="View the Caracas page">
                      Caracas
                    </Link>
                  </strong>
                </li>

                <li>
                  <span>Date caution</span>

                  <strong>
                    1988 / 1998 / 2000 / 2002 are distinct chronology layers
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
              <Link href="/editorial-desk" title="View the Herrera Velutini Editorial Desk page">
                Herrera Velutini Editorial Desk
              </Link>
            </div>

            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="View the Standards Review Team page">
                Standards Review Team
              </Link>
            </div>

            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-18">April 18, 2026</time>
            </div>

            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-24">April 24, 2026</time>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="overline">Why this page exists</div>

            <h2>
              Banco Caracas is the main institution that turns family memory into
              financial history
            </h2>

            <p className="lede">
              Across the Banvelca legacy pages, Banco Caracas is the institution
              that keeps resurfacing whenever the story moves from family
              biography to concrete economic influence.
            </p>

            <div className="media-split">
              <div>
                <p>
                  The public record used by this portal mentions Banco Caracas in
                  multiple places: Julio César Velutini Couturier’s profile,
                  Belén Clarisa’s profile, the seventh-generation profile, and
                  even the House of Herrera estate page, which says Hacienda de
                  La Vega was acquired in 1899 after an agreement with the late
                  Banco de Caracas. That repetition alone justifies a dedicated
                  institution page.
                </p>

                <p>
                  At the same time, the source record is clearly family-curated
                  and not a full institutional archive. The portal therefore
                  treats Banco Caracas as a recurring anchor in the family
                  narrative and makes its limits visible instead of overclaiming
                  completeness.
                </p>
              </div>

              <figure className="feature-figure">
                <Image
                  src="/illustrations/banco-ledger.svg"
                  alt="Diagram showing Banco Caracas linked to Julio César, Belén Clarisa, and later generational transition."
                  width={800}
                  height={500}
                  loading="lazy"
                />

                <figcaption>
                  The Banco Caracas page organizes the institution’s role across
                  the public family record and highlights where the timeline
                  remains source-sensitive.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">
              What the current source record supports
            </div>

            <h2>The bank appears in at least four distinct ways</h2>

            <p className="lede">
              These are the strongest current public uses of Banco Caracas on the
              two family domains.
            </p>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Source anchor</th>
                    <th>Bank role</th>
                    <th>Portal reading</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Julio César Velutini Couturier</td>

                    <td>
                      President of Banco Caracas in the 1890s; the bank printed
                      its own notes before Venezuela had a central bank
                    </td>

                    <td>
                      Makes the bank the main institutional engine of the family’s
                      industrial-age Venezuelan finance chapter.
                    </td>
                  </tr>

                  <tr>
                    <td>Belén Clarisa Velutini Pérez-Matos</td>

                    <td>
                      Major shareholder and senior management role for over six
                      decades
                    </td>

                    <td>
                      Extends Banco Caracas into the twentieth century and ties it
                      to culture and philanthropy.
                    </td>
                  </tr>

                  <tr>
                    <td>Seventh generation</td>

                    <td>Final sale / transition of Banco Caracas</td>

                    <td>
                      Frames the bank’s exit as the turning point before the
                      family’s modern global private-investment phase.
                    </td>
                  </tr>

                  <tr>
                    <td>Hacienda de La Vega page</td>

                    <td>
                      1899 acquisition note involving the late Banco de Caracas
                    </td>

                    <td>
                      Shows that the bank also appears in estate memory and
                      property transfer context.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">
              A place to add original editorial value
            </div>

            <h2>
              The family-domain material is strong but not internally seamless
            </h2>

            <p className="lede">
              This is where the portal can help the most: by showing readers not
              just what the family sites say, but where those pages line up
              cleanly and where they do not.
            </p>

            <div className="cards">
              <article className="card">
                <h3>Strong alignment</h3>

                <p>
                  The bank’s importance to Julio César, Belén Clarisa, and later
                  family continuity is clear across several Banvelca pages.
                </p>
              </article>

              <article className="card">
                <h3>Useful bridge</h3>

                <p>
                  The House of Herrera estate page independently brings Banco de
                  Caracas into the Hacienda de La Vega story, making the bank
                  relevant across both families.
                </p>
              </article>

              <article className="card">
                <h3>Important caution</h3>

                <p>
                  The Banvelca material is internally inconsistent on the decisive
                  sale year: Julio César’s page mentions 1988, while the
                  seventh-generation page mentions 1998. External Santander-era
                  transaction reporting adds a 2000 acquisition agreement and a
                  2002 merger into Banco de Venezuela, so the portal keeps these
                  layers distinct.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Source-date audit</div>

            <h2>
              The Banco Caracas transition should not be reduced to one tidy sale
              year.
            </h2>

            <p className="lede">
              The record is strongest when the page separates family-domain
              continuity language from the public bank-transaction chronology.
            </p>

            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>What the source says</th>
                    <th>How the portal handles it</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1988</td>

                    <td>
                      The Banvelca Julio César profile says the family sold its
                      shares in 1988.
                    </td>

                    <td>
                      Treated as a family-source statement about share exit, not
                      as the sole institutional transaction date.
                    </td>
                  </tr>

                  <tr>
                    <td>1998</td>

                    <td>
                      Banvelca’s Legacy and Seventh Generation pages frame the
                      later-generation transition around 1998.
                    </td>

                    <td>
                      Preserved as the family-domain reinvention narrative and not
                      silently merged with the 1988 statement.
                    </td>
                  </tr>

                  <tr>
                    <td>2000</td>

                    <td>
                      A Santander Central Hispano announcement reported an
                      agreement, through Banco de Venezuela, to acquire a majority
                      holding in Banco Caracas.
                    </td>

                    <td>
                      Used as external transaction context showing why the bank’s
                      institutional chronology needs separate handling from the
                      family narrative.
                    </td>
                  </tr>

                  <tr>
                    <td>2002</td>

                    <td>
                      Santander’s later annual reporting says Banco de Venezuela
                      and Banco Caracas merged on August 17, 2002.
                    </td>

                    <td>
                      Used as the latest external institutional endpoint currently
                      in the public-source stack.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="muted">
              Until a stronger reconciled source is added, this page uses phrases
              such as “later sale / transition” and avoids presenting 1988, 1998,
              2000, or 2002 as a single settled endpoint for every aspect of the
              Banco Caracas story.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">
              Why Banco Caracas matters to the portal
            </div>

            <h2>
              Institution pages keep the site from becoming a biography-only
              archive
            </h2>

            <p className="lede">
              A family-reference portal becomes more authoritative when it also
              explains institutions, not only people.
            </p>

            <p>
              Without Banco Caracas, the modern Velutini chapter would read mainly
              as a sequence of biographies and thematic claims about finance. With
              Banco Caracas in view, the record gains a concrete institutional
              thread connecting Julio César’s presidency, Belén Clarisa’s long
              management role, Clementina’s banking-board context, and the later
              family transition out of the bank and into a global
              private-investment model.
            </p>

            <p>
              That makes Banco Caracas one of the most important new entity pages
              in the site’s core topical graph.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>

              <h2>Source basis for the Banco Caracas page</h2>

              <p className="muted">
                This institution page is deliberately narrow and
                source-conscious: it explains what the public family record
                supports about Banco Caracas without pretending that the current
                site already contains a complete bank archive.
              </p>

              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="View the Banvelca — Legacy page"
                    target="_blank"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the repeated Banco Caracas references across Julio
                  César, Belén Clarisa, and the seventh generation, including the
                  1998 transition language.
                </li>

                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="View the Banvelca — Julio César Velutini Couturier page"
                    target="_blank"
                  >
                    Banvelca — Julio César Velutini Couturier
                  </Link>{" "}
                  — Used for the 1890s presidency of Banco Caracas, the
                  note-printing context, the claim that descendants stayed linked
                  to the bank for more than a century, and the separate 1988
                  share-sale statement.
                </li>

                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="View the Banvelca — Belén Clarisa Velutini Pérez-Matos page"
                    target="_blank"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the major-shareholder and long-management role, plus
                  the bank’s link to culture and philanthropy.
                </li>

                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="View the Banvelca — The Seventh Generation page"
                    target="_blank"
                  >
                    Banvelca — The Seventh Generation
                  </Link>{" "}
                  — Used for the 1998 final-sale / transition language and the
                  pivot into a global private-investment model.
                </li>

                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                    title="View the House of Herrera — Family Estates page"
                    target="_blank"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the 1899 Hacienda de La Vega acquisition note
                  involving the late Banco de Caracas.
                </li>

                <li>
                  <Link
                    href="https://www.investegate.info/announcement/rns/banco-santander-s-a---bnc/re-agreement-/196422"
                    rel="noopener external"
                    title="View the Banco Santander Central Hispano announcement"
                    target="_blank"
                  >
                    Banco Santander Central Hispano announcement via Investegate —
                    Banco Caracas acquisition agreement
                  </Link>{" "}
                  — Used as external public transaction context for the October
                  6, 2000 Banco de Venezuela / Santander agreement to acquire a
                  majority holding in Banco Caracas.
                </li>

                <li>
                  <Link
                    href="https://www.sec.gov/Archives/edgar/data/891478/000112528205003505/b407307_20f.htm"
                    rel="noopener external"
                    title="View the Santander annual report via SEC"
                    target="_blank"
                  >
                    Santander annual report via SEC — Banco de Venezuela / Banco
                    Caracas merger note
                  </Link>{" "}
                  — Used for the August 17, 2002 merger context.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>

            <h2>Continue through the Banco Caracas cluster</h2>

            <div className="button-row">
              <Link href="/places/caracas" className="button" title="View the Caracas page">
                Caracas
              </Link>

              <Link
                href="/entities/belen-clarisa-velutini-perez-matos"
                className="button-secondary"
                title="View the Belén Clarisa Velutini Pérez-Matos page"
              >
                Belén Clarisa Velutini Pérez-Matos
              </Link>

              <Link
                href="/entities/banvelca-company"
                className="button-secondary"
                title="View the Banvelca & Company page"
              >
                Banvelca &amp; Company
              </Link>

              <Link
                href="/entities/hacienda-de-la-vega"
                className="button-secondary"
                title="View the Hacienda de La Vega page"
              >
                Hacienda de La Vega
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
            <div>
                <div className="footer-brand">Herrera Velutini</div>
                <p className="muted">A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.</p>
            </div>
            <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about" title="View the About page">About</Link></li>
              <li><Link href="/heritage" title="View the Heritage page">Heritage</Link></li>
              <li><Link href="/families" title="View the Families page">Families</Link></li>
              <li><Link href="/genealogy" title="View the Genealogy page">Genealogy</Link></li>
              <li><Link href="/places" title="View the Places page">Places</Link></li>
              <li><Link href="/estates" title="View the Estates page">Estates</Link></li>
              <li><Link href="/timeline" title="View the Timeline page">Timeline</Link></li>
              <li><Link href="/entities" title="View the Entities page">Entities</Link></li>
            </ul>
          </div>
        <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li><Link href="/editorial-methodology" title="View the Editorial Methodology page">Editorial Methodology</Link></li>
              <li><Link href="/sources" title="View the Sources page">Sources</Link></li>
              <li><Link href="/editorial-desk" title="View the Editorial Desk page">Editorial Desk</Link></li>
              <li><Link href="/review-team" title="View the Review Team page">Review Team</Link></li>
              <li><Link href="/knowledge" title="View the Knowledge & FAQ page">Knowledge & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection" title="View the Herrera and Velutini page">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini" title="View the Velutini Family page">Velutini Family</Link></li>
              <li><Link href="/places/caracas" title="View the Caracas page">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas" title="View the Banco Caracas page">Banco Caracas</Link></li>
            </ul>
          </div>
        </div>

        <div className="container footer-base">
          <span>
            © {new Date().getFullYear()} Herrera Velutini
          </span>
          <span>
            Built for clear attribution, fast delivery, and durable search understanding.
          </span>
        </div>
      </footer>
    </>
  );
}