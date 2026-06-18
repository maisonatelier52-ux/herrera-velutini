import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Belén Clarisa Velutini Pérez-Matos | Person Profile",
  description:
    "A person profile for Belén Clarisa Velutini Pérez-Matos, linking Banco Caracas, Trasnocho Cultural, and philanthropic institutions.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical:
      "https://herreravelutini.com/entities/belen-clarisa-velutini-perez-matos/",
  },
  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Belén Clarisa Velutini Pérez-Matos | Person Profile",
    description:
      "A person profile for Belén Clarisa Velutini Pérez-Matos, linking Banco Caracas, Trasnocho Cultural, and philanthropic institutions.",
    url: "https://herreravelutini.com/entities/belen-clarisa-velutini-perez-matos/",
    images: [
      {
        url: "https://herreravelutini.com/og/herreravelutini-og.png",
        width: 1200,
        height: 630,
      },
    ],
    publishedTime: "2026-04-17",
    modifiedTime: "2026-04-17",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belén Clarisa Velutini Pérez-Matos | Person Profile",
    description:
      "A person profile for Belén Clarisa Velutini Pérez-Matos, linking Banco Caracas, Trasnocho Cultural, and philanthropic institutions.",
    images: ["https://herreravelutini.com/sets/og/herreravelutini-og.png"],
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
    "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
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
    "Hacienda de La Vega",
    "Castle Santa Barbara",
    "family history",
    "heritage research",
    "stewardship",
    "cultural patronage",
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
    "A fast, source-linked editorial portal for heritage, stewardship, places, chronology, and public figures related to the Herrera Velutini record.",
  publisher: { "@id": "https://herreravelutini.com/#organization" },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://herreravelutini.com/entities/belen-clarisa-velutini-perez-matos/",
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntity: {
    "@type": "Person",
    name: "Belén Clarisa Velutini Pérez-Matos",
    birthDate: "1924",
    deathDate: "2023",
    description:
      "A person profile connecting finance, cultural patronage, and philanthropy on the portal.",
  },
  author: { "@id": "https://herreravelutini.com/editorial-desk/#org" },
  editor: { "@id": "https://herreravelutini.com/review-team/#org" },
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
      name: "Belén Clarisa Velutini Pérez-Matos",
      item: "https://herreravelutini.com/entities/belen-clarisa-velutini-perez-matos/",
    },
  ],
};

export default function BelenClarisaPage() {
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

      <Link className="skip-link" href="#main" title="Skip to main content">
        Skip to content
      </Link>

      <main id="main">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                <ol>
                  <li><Link href="/" title="View the Home page">Home</Link></li>
                  <li><Link href="/entities" title="View the Entities page">Entities</Link></li>
                  <li aria-current="page" title="You are here">
                    Belén Clarisa Velutini Pérez-Matos
                  </li>
                </ol>
              </nav>
              <div className="eyebrow">Person profile</div>
              <h1>Belén Clarisa Velutini Pérez-Matos</h1>
              <p className="lede">
                Belén Clarisa Velutini Pérez-Matos is one of the portal&apos;s
                most distinctive figures because her public profile joins
                finance, culture, and philanthropy in a single page. She makes
                it possible for the site to explain that legacy in this record
                is not only about banking or title, but also about the
                institutions that shape public life.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Person</strong>
                </li>
                <li>
                  <span>Life dates</span>
                  <strong>1924–2023</strong>
                </li>
                <li>
                  <span>Portal role</span>
                  <strong>Culture-and-finance bridge</strong>
                </li>
                <li>
                  <span>Associated pages</span>
                  <strong>Banvelca · Stewardship · Timeline</strong>
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
              <Link href="/editorial-desk" title="View the Editorial Desk page">
                Herrera Velutini Editorial Desk
              </Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team" title="View the Review Team page">
                Standards Review Team
              </Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
          </div>
        </div>

        {/* Why this figure matters */}
        <section className="section">
          <div className="container">
            <div className="overline">Why this figure matters</div>
            <h2>
              A cultural patronage page that expands the meaning of stewardship.
            </h2>
            <p className="lede">
              The source material describes Belén Clarisa as banker,
              entrepreneur, major Banco Caracas shareholder, founding president
              of Trasnocho Cultural, and supporter of social initiatives through
              Fundación Centro El Portal. This portal treats those facts as one
              unified story: a figure whose page helps readers understand how
              financial history, arts patronage, and public service can coexist
              inside the same family record.
            </p>
            <div className="cards" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Finance</h3>
                <p>
                  Her page keeps Banco Caracas in view without letting the
                  portal collapse into a single-sector story.
                </p>
                <p>
                  <Link href="/entities/banvelca-company" title="View the Banvelca Company page">
                    Open page
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Culture</h3>
                <p>
                  Trasnocho Cultural turns the page into a clear cultural entry
                  point for readers who arrive through arts or Caracas topics.
                </p>
                <p>
                  <Link href="/stewardship" title="View the Stewardship page">
                    Open page
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Philanthropy</h3>
                <p>
                  The charitable dimension gives the stewardship cluster a civic
                  expression beyond internal wealth coordination.
                </p>
                <p>
                  <Link href="/about" title="View the About page">
                    Open page
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Callouts */}
        <section className="section">
          <div className="container note-grid">
            <article className="callout">
              <div className="overline">Public institution</div>
              <h3>Trasnocho Cultural makes the page locally legible.</h3>
              <p>
                The cultural institution gives the figure page a public landmark
                readers can immediately recognize and research.
              </p>
            </article>
            <article className="callout">
              <div className="overline">Bridge role</div>
              <h3>She links finance to civic culture.</h3>
              <p>
                That bridge is exactly why this page matters for the
                portal&apos;s originality and usefulness.
              </p>
            </article>
            <article className="callout">
              <div className="overline">Search value</div>
              <h3>
                This is the kind of entity page that generic content cannot
                replace.
              </h3>
              <p>
                The page serves a durable named subject with strong
                relationships to the broader Banvelca cluster.
              </p>
            </article>
          </div>
        </section>

        {/* Source basis */}
        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Belén Clarisa profile</h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the
                source pages in sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="View the Banvelca Legacy page"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for sequence placement and summary context.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/"
                    rel="noopener external"
                    title="View the Belén Clarisa Velutini Pérez-Matos page"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the culture, philanthropy, and Banco Caracas
                  details.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the portal</h2>
            <div className="button-row">
              <Link className="button" href="/entities/banvelca-company" title="View the Banvelca Company page">
                Banvelca &amp; Company
              </Link>
              <Link className="button-secondary" href="/stewardship" title="View the Stewardship page">
                Stewardship cluster
              </Link>
              <Link className="button-secondary" href="/timeline" title="View the Timeline page">
                Timeline
              </Link>
              <Link className="button-secondary" href="/entities" title="View the Entities page">
                Entity hub
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
              <li><Link href="/knowledge" title="View the Knowledge & FAQ page">Knowledge &amp; FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link href="/families/herrera-velutini-connection" title="View the Herrera and Velutini page">
                  Herrera and Velutini
                </Link>
              </li>
              <li><Link href="/families/velutini" title="View the Velutini Family page">Velutini Family</Link></li>
              <li><Link href="/places/caracas" title="View the Caracas page">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas" title="View the Banco Caracas page">Banco Caracas</Link></li>
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