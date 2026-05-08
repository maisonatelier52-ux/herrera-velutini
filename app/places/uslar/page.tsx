import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://herreravelutini.com"),

  title: "Uslar | Freudenthal, Coat of Arms and Branch Geography",

  description:
    "Place dossier for Uslar as the town behind Castle of Freudenthal, the Uslar coat of arms, and the German branch layer in the Herrera record.",

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
    canonical: "/places/uslar/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Uslar | Freudenthal, Coat of Arms and Branch Geography",
    description:
      "Place dossier for Uslar as the town behind Castle of Freudenthal, the Uslar coat of arms, and the German branch layer in the Herrera record.",
    url: "/places/uslar/",
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
    title: "Uslar | Freudenthal, Coat of Arms and Branch Geography",
    description:
      "Place dossier for Uslar as the town behind Castle of Freudenthal, the Uslar coat of arms, and the German branch layer in the Herrera record.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Uslar() {
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
              alternateName: ["Herrera Velutini Portal", "Herrera Velutini Editorial Portal"],
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
              subjectOf: ["https://www.houseofherrera.com/", "https://www.banvelca.com/"],
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
              name: "Uslar | Freudenthal, Coat of Arms and Branch Geography",
              url: "https://herreravelutini.com/places/uslar/",
              description:
                "Place dossier for Uslar as the town behind Castle of Freudenthal, the Uslar coat of arms, and the German branch layer in the Herrera record.",
              isPartOf: { "@id": "https://herreravelutini.com/#website" },
              mainEntity: {
                "@type": "Place",
                name: "Uslar",
                url: "https://herreravelutini.com/places/uslar/",
                description:
                  "Place dossier for Uslar across the House of Herrera estate and heraldry material.",
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
                { "@type": "ListItem", position: 1, name: "Home", item: "https://herreravelutini.com/" },
                { "@type": "ListItem", position: 2, name: "Places", item: "https://herreravelutini.com/places/" },
                { "@type": "ListItem", position: 3, name: "Uslar", item: "https://herreravelutini.com/places/uslar/" },
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
                  <li><Link href="https://herreravelutini.com/">Home</Link></li>
                  <li><Link href="https://herreravelutini.com/places/">Places</Link></li>
                  <li aria-current="page">Uslar</li>
                </ol>
              </nav>
              <div className="eyebrow">Place dossier</div>
              <h1>Uslar</h1>
              <p className="lede">
                Uslar matters because it turns the German branch of the Herrera record into a
                readable place. On the source domain, the town appears through Castle of
                Freudenthal, the Uslar coat of arms, and the later compound memory of
                Uslar-Gleichen. That combination makes Uslar a branch geography rather than a
                stray German footnote.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Place role</span>
                  <strong>German branch geography and estate memory</strong>
                </li>
                <li>
                  <span>Estate anchor</span>
                  <strong>Castle of Freudenthal</strong>
                </li>
                <li>
                  <span>Symbolic anchor</span>
                  <strong>Uslar coat of arms</strong>
                </li>
                <li>
                  <span>Best companion</span>
                  <strong><Link href="/places/gleichen/">Gleichen</Link></strong>
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
            <div className="overline">Why Uslar matters</div>
            <h2>Uslar is where branch identity becomes territorial.</h2>
            <p className="lede">
              The German layer of the Herrera record is easy to mention and hard to explain.
              Uslar helps solve that problem.
            </p>
            <div className="media-split">
              <div>
                <p>
                  The House of Herrera estate page says Uslar was first mentioned in 1006 or
                  1007 and that Castle of Freudenthal was built there in 1599, burned in 1612,
                  and was followed by another destructive fire in parts of the town in 1819.
                  Even in brief form, that gives the portal a real urban and architectural
                  timeline rather than a floating castle name.
                </p>
                <p>
                  The same source cluster and the symbols page then make Uslar more important by
                  tying it to the Uslar coat of arms and to the later compound memory of
                  Uslar-Gleichen. That is why the portal treats Uslar as the town-level anchor
                  for one side of the German branch geography.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/uslar-branch.svg"
                  alt="Diagram showing Uslar connected to Freudenthal, heraldry, and the Uslar-Gleichen branch layer."
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <figcaption>
                  Uslar gives the German branch layer a town, a castle, and a heraldic identity.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="overline">Four Uslar layers</div>
            <h2>The town carries four different kinds of value on the portal</h2>
            <p className="lede">
              That range is what makes Uslar worth publishing as a place page instead of leaving
              it buried inside estate notes.
            </p>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Uslar-linked anchor</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Town chronology</td>
                    <td>First mentioned in 1006/1007</td>
                    <td>Gives the branch a durable geographic reference point in Germany.</td>
                  </tr>
                  <tr>
                    <td>Estate memory</td>
                    <td>Castle of Freudenthal</td>
                    <td>Provides the clearest named Uslar site on the family-estates page.</td>
                  </tr>
                  <tr>
                    <td>Heraldry</td>
                    <td>Uslar coat of arms</td>
                    <td>
                      Shows that the branch appears in the symbolic system as well as the estate
                      layer.
                    </td>
                  </tr>
                  <tr>
                    <td>Surname continuity</td>
                    <td>Uslar-Gleichen naming</td>
                    <td>
                      Connects the town to the compound branch identity later visible in modern
                      family names.
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
            <h2>Uslar explains the left side of the German cluster.</h2>
            <p className="lede">
              Readers should use this page together with{" "}
              <Link href="/places/gleichen/">Gleichen</Link>, not instead of it.
            </p>
            <p>
              Uslar is the better page for readers starting from Freudenthal, from the Uslar
              coat of arms, or from the modern compound surname{" "}
              <Link href="/entities/jose-herrera-von-uslar-gleichen/">
                José Herrera Von Uslar Gleichen
              </Link>
              . Gleichen, by contrast, is the better page for the wider castle-memory cluster
              and the Drei Gleichen landscape.
            </p>
            <p>
              Together, the two pages turn what used to be one vague German reference into a
              navigable pair of branch geographies.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Uslar page</h2>
              <p className="muted">
                The Uslar page is a place-led synthesis built from the German estate notes,
                heraldry page, and the modern compound-surname layer.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/family-estates" rel="noopener external">
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for the Uslar town note, Castle of Freudenthal, the 1599 construction
                  date, the 1612 fire, and the 1819 town-fire reference.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/symbols" rel="noopener external">
                    House of Herrera — Symbols
                  </Link>{" "}
                  — Used for the Uslar coat of arms and the town&rsquo;s role in the heraldic
                  branch system.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/jose-herrera-von-uslar-gleichen"
                    rel="noopener external"
                  >
                    House of Herrera — José Herrera Von Uslar Gleichen
                  </Link>{" "}
                  — Used for the modern bridge figure whose surname preserves the compound
                  Uslar-Gleichen layer.
                </li>
                <li>
                  <Link
                    href="https://www.uslar.de/portal/seiten/stadtgeschichte-900000103-30090.html"
                    rel="noopener external"
                  >
                    Stadt Uslar — Stadtgeschichte
                  </Link>{" "}
                  — Used as official municipal context for Uslar&rsquo;s first documentary
                  mention and broader town-history frame.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the German branch cluster</h2>
            <div className="button-row">
              <Link href="/places/gleichen/" className="button">
                Gleichen
              </Link>
              <Link href="/entities/jose-herrera-von-uslar-gleichen/" className="button-secondary">
                José Herrera Von Uslar Gleichen
              </Link>
              <Link href="/families/herrera/" className="button-secondary">
                Herrera Family
              </Link>
              <Link href="/estates/" className="button-secondary">
                Estates
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