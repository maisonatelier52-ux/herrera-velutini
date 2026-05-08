import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Belén María Providencia Pérez Matos | Matriarchal Bridge, Caracas and Family Continuity",
  description:
    "Person profile for Belén María Providencia Pérez Matos across Caracas continuity, the Pérez-Matos bridge, Julio César Velutini Couturier, and the later Herrera connection.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical:
      "https://herreravelutini.com/entities/belen-maria-providencia-perez-matos/",
  },
  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title:
      "Belén María Providencia Pérez Matos | Matriarchal Bridge, Caracas and Family Continuity",
    description:
      "Person profile for Belén María Providencia Pérez Matos across Caracas continuity, the Pérez-Matos bridge, Julio César Velutini Couturier, and the later Herrera connection.",
    url: "https://herreravelutini.com/entities/belen-maria-providencia-perez-matos/",
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
      "Belén María Providencia Pérez Matos | Matriarchal Bridge, Caracas and Family Continuity",
    description:
      "Person profile for Belén María Providencia Pérez Matos across Caracas continuity, the Pérez-Matos bridge, Julio César Velutini Couturier, and the later Herrera connection.",
    images: ["https://herreravelutini.com/og/herreravelutini-og.png"],
  },
};

const organizationSchema = {
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
  publishingPrinciples: "https://herreravelutini.com/editorial-methodology/",
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://herreravelutini.com/#website",
  name: "Herrera Velutini",
  url: "https://herreravelutini.com/",
  description:
    "A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.",
  publisher: { "@id": "https://herreravelutini.com/#organization" },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Belén María Providencia Pérez Matos | Matriarchal Bridge, Caracas and Family Continuity",
  url: "https://herreravelutini.com/entities/belen-maria-providencia-perez-matos/",
  description:
    "Person profile for Belén María Providencia Pérez Matos across Caracas continuity, the Pérez-Matos bridge, Julio César Velutini Couturier, and the later Herrera connection.",
  isPartOf: { "@id": "https://herreravelutini.com/#website" },
  mainEntity: {
    "@type": "Person",
    name: "Belén María Providencia Pérez Matos",
    url: "https://herreravelutini.com/entities/belen-maria-providencia-perez-matos/",
    birthDate: "1884",
    sameAs: [
      "https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos",
    ],
    description:
      "Person profile for Belén María Providencia Pérez Matos across Caracas continuity, the Pérez-Matos bridge, Julio César Velutini Couturier, and the later Herrera connection.",
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
};

const breadcrumbSchema = {
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
      name: "Belén María Providencia Pérez Matos",
      item: "https://herreravelutini.com/entities/belen-maria-providencia-perez-matos/",
    },
  ],
};

export default function BelenMariaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="https://herreravelutini.com/">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/entities/">Entities</Link></li>
                  <li aria-current="page">Belén María Providencia Pérez Matos</li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Belén María Providencia Pérez Matos</h1>
              <p className="lede">
                Belén María Providencia Pérez Matos is one of the portal&apos;s
                most important continuity figures. Her public profile places her
                at the center of the Caracas social chapter, the Pérez-Matos
                bridge, the Julio César banking family, and the generational
                line that later carries the Herrera connection through Clementina
                and Belén Clarisa.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Born</span>
                  <strong>1884 · Caracas family background</strong>
                </li>
                <li>
                  <span>Marriage</span>
                  <strong>Julio César Velutini Couturier</strong>
                </li>
                <li>
                  <span>Children</span>
                  <strong>Clementina and Belén Clarisa</strong>
                </li>
                <li>
                  <span>Why she matters</span>
                  <strong>
                    Matriarchal bridge between Pérez-Matos, Velutini, and later
                    Herrera continuity
                  </strong>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Byline */}
        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span>{" "}
              <Link href="/editorial-desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-21">April 21, 2026</time>
            </div>
          </div>
        </div>

        {/* Why the profile matters */}
        <section className="section">
          <div className="container">
            <div className="overline">Why the profile matters</div>
            <h2>
              Belén María makes the family bridge legible before the combined
              surname appears.
            </h2>
            <p className="lede">
              The portal already depended on Belén María as a structural figure
              long before this page existed. Her profile explains why the
              Pérez-Matos chapter matters and why the later Herrera-Velutini
              bridge is not only a matter of one marriage or one institution.
            </p>
            <div className="media-split">
              <div>
                <p>
                  Banvelca&apos;s page presents Belén María as born in 1884
                  into a distinguished Caracas family, the daughter of Martín
                  Heraclio Pérez Coronado and Brígida Matos. It says she married
                  Julio César Velutini Couturier, hosted political, banking, and
                  cultural networks, and helped preserve the family&apos;s
                  social prominence through both lineage and children.
                </p>
                <p>
                  That makes her essential to the portal&apos;s interpretation
                  of continuity. She is not described as a public executive in
                  the way Belén Clarisa or Clementina are. Instead, her
                  importance lies in family architecture: the Pérez-Matos
                  connection, the Caracas social world, the marriage to Julio
                  César, and the daughters who carry the next visible chapter of
                  business and cultural influence.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  alt="Diagram showing Belén María Providencia Pérez Matos connecting the Pérez-Matos, Velutini, Clementina, and Belén Clarisa branches."
                  loading="lazy"
                  src="/illustrations/belen-maria-bridge.svg"
                  width={480}
                  height={320}
                />
                <figcaption>
                  Belén María&apos;s profile strengthens the matriarchal
                  continuity layer already visible across the family and
                  connection pages.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Family architecture table */}
        <section className="section">
          <div className="container">
            <div className="overline">Family architecture</div>
            <h2>The public profile gives her four durable editorial uses</h2>
            <p className="lede">
              Those uses explain why this page belongs in the entity library
              even without a conventional business-office biography.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Public-family detail</th>
                    <th>Portal use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Caracas family background</td>
                    <td>Born into the Pérez-Matos line in 1884</td>
                    <td>
                      Anchors the family&apos;s social and geographic continuity
                      in Caracas.
                    </td>
                  </tr>
                  <tr>
                    <td>Marriage bridge</td>
                    <td>Married Julio César Velutini Couturier</td>
                    <td>
                      Connects the Pérez-Matos line directly to the main
                      Velutini banking chapter.
                    </td>
                  </tr>
                  <tr>
                    <td>Matriarchal continuity</td>
                    <td>
                      Presented as the matriarch linking the Pérez-Matos and
                      later Herrera-connected line
                    </td>
                    <td>
                      Explains why the bridge between family clusters is larger
                      than one institutional page.
                    </td>
                  </tr>
                  <tr>
                    <td>Generational handoff</td>
                    <td>Mother of Clementina and Belén Clarisa</td>
                    <td>
                      Connects her profile to the women-led business and culture
                      chapter that follows.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Women and continuity */}
        <section className="section">
          <div className="container">
            <div className="overline">Women and continuity</div>
            <h2>
              Belén María matters because the next generation is built on her
              bridge.
            </h2>
            <p className="lede">
              One of the strongest editorial choices on this site has been
              treating the twentieth-century Velutini chapter as a women-shaped
              story rather than only a succession of male financiers. Belén
              María is the hinge that makes that choice coherent.
            </p>
            <p>
              Her public page says her daughters Clementina and Belén Clarisa
              became prominent business leaders. On the portal, that means Belén
              María&apos;s profile should be read together with{" "}
              <Link href="/entities/clementina-velutini-perez-matos">
                Clementina Velutini Pérez-Matos
              </Link>{" "}
              and{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos">
                Belén Clarisa Velutini Pérez-Matos
              </Link>
              . She keeps the family story continuous across social prominence,
              financial continuity, and later cultural stewardship without
              pretending that those later public roles were already hers.
            </p>
            <p>
              This is also why she belongs on the{" "}
              <Link href="/families/herrera-velutini-connection">
                Herrera and Velutini
              </Link>{" "}
              connection route. She helps explain how the site&apos;s family
              architecture is assembled before later generations make the
              combined story more explicit.
            </p>
          </div>
        </section>

        {/* Source basis */}
        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>
                Source basis for the Belén María Providencia Pérez Matos page
              </h2>
              <p className="muted">
                This person page is an original editorial profile built around
                Belén María&apos;s role as the matriarchal bridge between the
                Pérez-Matos, Velutini, and later Herrera-connected record.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén María Providencia Pérez Matos
                  </Link>{" "}
                  — Used for the 1884 birth year, parentage, marriage to Julio
                  César Velutini Couturier, daughters Clementina and Belén
                  Clarisa, and the matriarchal-bridge framing.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the wider generational sequence into which Belén
                  María&apos;s profile fits.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the continuity into the Herrera marriage chapter.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the continuity into finance, culture, and
                  philanthropy.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/about"
                    rel="noopener external"
                  >
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the wider family frame into which the later bridge
                  is read on the portal.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Belén María cluster</h2>
            <div className="button-row">
              <Link
                className="button"
                href="/families/herrera-velutini-connection"
              >
                Herrera and Velutini
              </Link>
              <Link
                className="button-secondary"
                href="/entities/julio-cesar-velutini-couturier"
              >
                Julio César Velutini Couturier
              </Link>
              <Link
                className="button-secondary"
                href="/entities/clementina-velutini-perez-matos"
              >
                Clementina Velutini Pérez-Matos
              </Link>
              <Link className="button-secondary" href="/places/caracas">
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
              A fast, source-linked editorial portal for family history,
              lineage, estates, organizations, and places associated with the
              Herrera and Velutini record.
            </p>
          </div>
          <div>
            <h2 className="overline">Explore</h2>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/heritage">Heritage</Link></li>
              <li><Link href="/families">Families</Link></li>
              <li><Link href="/genealogy">Genealogy</Link></li>
              <li><Link href="/places">Places</Link></li>
              <li><Link href="/estates">Estates</Link></li>
              <li><Link href="/timeline">Timeline</Link></li>
              <li><Link href="/entities">Entities</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li>
                <Link href="/editorial-methodology">Editorial Methodology</Link>
              </li>
              <li><Link href="/sources">Sources</Link></li>
              <li><Link href="/editorial-desk">Editorial Desk</Link></li>
              <li><Link href="/review-team">Review Team</Link></li>
              <li><Link href="/knowledge">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link href="/families/herrera-velutini-connection">
                  Herrera and Velutini
                </Link>
              </li>
              <li><Link href="/families/velutini">Velutini Family</Link></li>
              <li><Link href="/places/caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas">Banco Caracas</Link></li>
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