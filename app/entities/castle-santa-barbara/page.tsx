import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Castle Santa Barbara | Place Profile",
  description:
    "A place profile for Castle Santa Barbara in Teguise, linking Lanzarote, defense history, and title-linked place memory.",
  authors: [{ name: "Herrera Velutini Editorial Desk" }],
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  themeColor: "#f6f1e7",
  alternates: {
    canonical: "https://herreravelutini.com/entities/castle-santa-barbara/",
  },
  openGraph: {
    type: "article",
    siteName: "Herrera Velutini",
    title: "Castle Santa Barbara | Place Profile",
    description:
      "A place profile for Castle Santa Barbara in Teguise, linking Lanzarote, defense history, and title-linked place memory.",
    url: "https://herreravelutini.com/entities/castle-santa-barbara/",
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
    title: "Castle Santa Barbara | Place Profile",
    description:
      "A place profile for Castle Santa Barbara in Teguise, linking Lanzarote, defense history, and title-linked place memory.",
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

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://herreravelutini.com/entities/castle-santa-barbara/",
  name: "Castle Santa Barbara",
  description:
    "A place profile for Castle Santa Barbara in Teguise, linking Lanzarote, defense history, and title-linked place memory.",
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntity: {
    "@type": "Place",
    name: "Castle Santa Barbara",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Teguise",
      addressRegion: "Lanzarote",
      addressCountry: "ES",
    },
    description:
      "A fortification in Teguise used on the portal to connect Lanzarote, defense history, and title-linked place memory.",
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
      name: "Castle Santa Barbara",
      item: "https://herreravelutini.com/entities/castle-santa-barbara/",
    },
  ],
};

export default function CastleSantaBarbaraPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
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
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/entities">Entities</Link></li>
                  <li aria-current="page">Castle Santa Barbara</li>
                </ol>
              </nav>
              <div className="eyebrow">Place profile</div>
              <h1>Castle Santa Barbara</h1>
              <p className="lede">
                Castle Santa Barbara gives the portal a Lanzarote place page
                with a different function from Caracas. Here the record is about
                fortification, visibility, and territorial memory. The page
                connects Teguise, Mount Guanapay, and Lanzarote&apos;s
                historical identity to the wider House narrative in a way that a
                general estate gallery cannot.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>Place / fortification</strong>
                </li>
                <li>
                  <span>Location</span>
                  <strong>Teguise, Lanzarote</strong>
                </li>
                <li>
                  <span>Portal role</span>
                  <strong>Defensive and territorial place page</strong>
                </li>
                <li>
                  <span>Best companion pages</span>
                  <strong>Estates · House of Herrera · Timeline</strong>
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
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
          </div>
        </div>

        {/* Why this place matters */}
        <section className="section">
          <div className="container">
            <div className="overline">Why this place matters</div>
            <h2>
              A fortification page adds defense history and topography to the
              record.
            </h2>
            <p className="lede">
              The source material describes Castle Santa Barbara as the oldest
              fortification on Lanzarote and places it above Teguise on Mount
              Guanapay. That gives this page three jobs: explaining the
              defensive logic of the site, connecting the place to
              Lanzarote&apos;s historical capital, and showing why titles and
              territories matter to the larger House narrative.
            </p>
            <div className="cards" style={{ marginTop: "1.2rem" }}>
              <article className="card">
                <h3>Fortification</h3>
                <p>
                  The page gives the portal a military and defensive layer that
                  differs from the civic memory of Caracas.
                </p>
              </article>
              <article className="card">
                <h3>Viewpoint and capital</h3>
                <p>
                  Its position over Teguise links geography to governance and
                  historical administration.
                </p>
                <p>
                  <Link href="/estates">Open page</Link>
                </p>
              </article>
              <article className="card">
                <h3>Lanzarote identity</h3>
                <p>
                  The site strengthens the relationship between the House record
                  and Lanzarote as a titled, place-specific context.
                </p>
                <p>
                  <Link href="/entities/house-of-herrera">Open page</Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Callouts */}
        <section className="section">
          <div className="container note-grid">
            <article className="callout">
              <div className="overline">Landscape</div>
              <h3>Topography is part of the story.</h3>
              <p>
                The position on Mount Guanapay makes the page feel spatially
                real and helps readers imagine why the place mattered.
              </p>
            </article>
            <article className="callout">
              <div className="overline">Capital context</div>
              <h3>Teguise gives the page an administrative dimension.</h3>
              <p>
                The record becomes clearer when the castle is understood in
                relation to the historical capital of the island.
              </p>
            </article>
            <article className="callout">
              <div className="overline">Title link</div>
              <h3>Place and distinction reinforce one another.</h3>
              <p>
                Use this page alongside the House and titles material when
                Lanzarote is the topic that brought you in.
              </p>
            </article>
          </div>
        </section>

        {/* Source basis */}
        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Castle Santa Barbara profile</h2>
              <p className="muted">
                This page is an original synthesis. It does not reproduce the
                source pages in sequence or structure.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the place description, Teguise location, and
                  defensive context.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/orders-and-distinctions"
                    rel="noopener external"
                  >
                    House of Herrera — Orders and Distinctions
                  </Link>{" "}
                  — Used for the title-linked Lanzarote context.
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
              <Link className="button" href="/estates">
                Estates cluster
              </Link>
              <Link
                className="button-secondary"
                href="/entities/house-of-herrera"
              >
                House of Herrera
              </Link>
              <Link className="button-secondary" href="/timeline">
                Timeline
              </Link>
              <Link className="button-secondary" href="/heritage">
                Heritage
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