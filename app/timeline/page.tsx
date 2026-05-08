import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | Herrera and Velutini Family Chronology",

  description:
    "A chronology linking medieval Herrera figures, estate memory, Banvelca's founding, and the modern family-connection record.",

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
    canonical: "/timeline/",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    siteName: "Herrera Velutini",
    title: "Timeline | Herrera and Velutini Family Chronology",
    description:
      "A chronology linking medieval Herrera figures, estate memory, Banvelca's founding, and the modern family-connection record.",
    url: "https://herreravelutini.com/timeline/",
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
    title: "Timeline | Herrera and Velutini Family Chronology",
    description:
      "A chronology linking medieval Herrera figures, estate memory, Banvelca's founding, and the modern family-connection record.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function Timeline() {
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
              "@type": "Article",
              headline: "Timeline | Herrera and Velutini Family Chronology",
              description:
                "A chronology that connects the medieval Herrera line, estate memory, Banvelca's founding, and the modern family connection record.",
              datePublished: "2026-04-17",
              dateModified: "2026-04-25",
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
              mainEntityOfPage: "https://herreravelutini.com/timeline/",
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
                  name: "Timeline",
                  item: "https://herreravelutini.com/timeline/",
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
                  <li aria-current="page">Timeline</li>
                </ol>
              </nav>
              <div className="eyebrow">Chronology</div>
              <h1>Timeline</h1>
              <p className="lede">
                This chronology is the quickest way to see how the portal&apos;s subject matter
                fits together. It spans medieval Herrera figures, estate memory in Caracas and
                Lanzarote, Banvelca&apos;s 1781 founding in Naples, and the twentieth-century
                pages where the public record of the two families becomes visibly interconnected.
                When a date is approximate, the portal labels it as such rather than pretending
                precision.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Timeline range</span>
                  <strong>Circa 1355 to the late 20th century</strong>
                </li>
                <li>
                  <span>Core strands</span>
                  <strong>
                    Herrera dynasty, estates, Banvelca legacy, Caracas family connections
                  </strong>
                </li>
                <li>
                  <span>Date handling</span>
                  <strong>
                    Exact where stated, circa where approximate, ranges where provided
                  </strong>
                </li>
                <li>
                  <span>Companion pages</span>
                  <strong>
                    <Link href="/heritage/">Heritage</Link>
                    {" · "}
                    <Link href="/families/herrera/">Herrera Family</Link>
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
              <Link href="/editorial-desk/">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span>{" "}
              <Link href="/review-team/">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span>{" "}
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        <section className="section" id="reading-the-timeline">
          <div className="container">
            <div className="overline">Date discipline</div>
            <h2>How to read the chronology</h2>
            <p className="lede">
              The timeline is intentionally selective. It highlights the milestones most useful
              for understanding the portal&apos;s current authority layer.
            </p>
            <div className="media-split">
              <div>
                <p>
                  Not every item in the source domains belongs on the first-wave timeline. The
                  purpose here is to show the main continuity points: early Herrera lineage, the
                  estate turn, Banvelca&apos;s founding, the Venezuela-linked generational arc,
                  and the twentieth-century family connections that give the portal its modern
                  focus.
                </p>
                <p>
                  Where the source pages use approximate dates or present a year without a full
                  day and month, the portal preserves that level of certainty. Where a date
                  reflects an event rather than a birth year—for example, the 1932 marriage of
                  Clementina Velutini Pérez-Matos and José Herrera Von Uslar—the page labels
                  the event directly.
                </p>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/timeline-bridge.svg"
                  alt="Timeline bridge illustration connecting medieval Herrera memory to modern Velutini continuity."
                  width={600}
                  height={400}
                  loading="lazy"
                />
                <figcaption>
                  The portal timeline bridges several types of chronology: dynastic names, estate
                  memory, institutional founding, marriage links, and later generational
                  transitions.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="chronology">
          <div className="container">
            <div className="overline">Selected milestones</div>
            <h2>The chronology</h2>
            <p className="lede">
              These entries form the interpretive backbone of the first-wave portal.
            </p>
            <div className="timeline-grid">
              <article className="timeline-item">
                <div className="timeline-year">1355</div>
                <div className="timeline-stamp">Circa</div>
                <h3>Hernán de Herrera enters the public dynastic record</h3>
                <p>
                  The House of Herrera dynasty sequence begins with{" "}
                  <Link href="/entities/hernan-de-herrera-lord-of-ampudia/">
                    Hernán de Herrera, Lord of Ampudia I
                  </Link>
                  , giving the portal its earliest named anchor in the medieval Herrera line.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1390</div>
                <div className="timeline-stamp">1390–1455</div>
                <h3>Pedro García de Herrera y Rojas becomes a key early reference figure</h3>
                <p>
                  The source-domain profile identifies Pedro García de Herrera y Rojas as a
                  Castilian nobleman and Marshal of Castile, making him one of the strongest
                  named points in the early Herrera chain.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1417</div>
                <div className="timeline-stamp">Circa</div>
                <h3>Diego García de Herrera y Ayala extends the dynasty sequence</h3>
                <p>
                  <Link href="/entities/diego-garcia-de-herrera-y-ayala/">
                    Diego García de Herrera y Ayala
                  </Link>{" "}
                  keeps the chain moving after Pedro García and gives the early Herrera sequence
                  a Canary Islands and Atlantic-facing turn.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1567</div>
                <div className="timeline-stamp">Title record</div>
                <h3>
                  Agustín de Herrera y Rojas Ayala becomes a Lanzarote title-memory anchor
                </h3>
                <p>
                  <Link href="/entities/agustin-de-herrera-y-rojas-ayala/">
                    Agustín&apos;s
                  </Link>{" "}
                  chronology is now anchored to archival title records: a 1567 count-title
                  grant, a 1569 corroboration, and a 1584 marquisate grant. That makes him one
                  of the portal&apos;s strongest bridges between lineage, distinctions, and
                  Lanzarote context.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1590</div>
                <div className="timeline-stamp">Estate memory</div>
                <h3>Hacienda de La Vega enters the Caracas layer</h3>
                <p>
                  House of Herrera&apos;s About page and estate material place Hacienda de La
                  Vega at the heart of the family&apos;s Caracas and Atlantic memory.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1607</div>
                <div className="timeline-stamp">1607–1664</div>
                <h3>Juan Sarmiento carries the sequence into the seventeenth century</h3>
                <p>
                  <Link href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/">
                    Juan Sarmiento de Herrera y Fernández Pacheco
                  </Link>{" "}
                  extends the published sequence after Agustín and adds a source-sensitive
                  estate link to La Vega and Montalban.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1781</div>
                <div className="timeline-stamp">Founding</div>
                <h3>Juan Bautista Velutini founds Banvelca in Naples</h3>
                <p>
                  Banvelca&apos;s public narrative begins in the Kingdom of Naples, where Juan
                  Bautista is said to have managed commercial interests linking Naples, France,
                  and Corsica.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1811</div>
                <div className="timeline-stamp">Legacy</div>
                <h3>Vicente José Velutini Llarione expands the network</h3>
                <p>
                  Banvelca&apos;s legacy sequence presents Vicente José as the generation that
                  extended the business beyond Italy and into a Venezuela-linked transatlantic
                  role.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1844</div>
                <div className="timeline-stamp">Statesman</div>
                <h3>José Antonio Velutini Ron enters the lineage</h3>
                <p>
                  The legacy narrative describes José Antonio as a statesman and minister who
                  shaped fiscal and diplomatic negotiations.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1881</div>
                <div className="timeline-stamp">Banco Caracas</div>
                <h3>Julio César Velutini Couturier becomes linked to Banco Caracas</h3>
                <p>
                  Banvelca&apos;s legacy timeline places Julio César at the bank&apos;s helm in
                  the 1890s and uses him to anchor the family&apos;s banking-era prominence in
                  Venezuela.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1884</div>
                <div className="timeline-stamp">Matriarch</div>
                <h3>Belén María Providencia Pérez Matos enters the modern bridge</h3>
                <p>
                  Belén María&apos;s profile matters because it links the Pérez-Matos, Velutini,
                  and later Herrera strands in a single family narrative.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1912</div>
                <div className="timeline-stamp">Profile</div>
                <h3>Clementina Velutini Pérez-Matos is born in Caracas</h3>
                <p>
                  Her profile later becomes the clearest public bridge between the Velutini and
                  Herrera lines through marriage, banking, and philanthropy.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1932</div>
                <div className="timeline-stamp">Marriage</div>
                <h3>Clementina marries José Herrera Von Uslar</h3>
                <p>
                  Banvelca&apos;s Clementina page states that this union merged two of
                  Caracas&apos;s most prominent dynastic lines and kept the family narrative
                  rooted in the Herrera lineage.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1924</div>
                <div className="timeline-stamp">1924–2023</div>
                <h3>Belén Clarisa Velutini Pérez-Matos becomes a culture-and-finance anchor</h3>
                <p>
                  Her public profile connects Banco Caracas, engineering, Trasnocho Cultural,
                  and philanthropy, expanding the portal&apos;s understanding of modern
                  stewardship.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1945</div>
                <div className="timeline-stamp">1945–2019</div>
                <h3>Julio José Herrera Velutini marks the post-war shift</h3>
                <p>
                  <Link href="/entities/julio-jose-herrera-velutini/">
                    Banvelca&apos;s profile for Julio José
                  </Link>{" "}
                  frames him as a figure of the post-war Americas and a carrier of the
                  family&apos;s modern financial continuity.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1971</div>
                <div className="timeline-stamp">Generation seven</div>
                <h3>A new generation restructures the family enterprise</h3>
                <p>
                  Banvelca&apos;s legacy material says the seventh generation led the transition
                  following the Banco Caracas sale and reoriented the family enterprise globally.
                  The exact sale chronology is source-sensitive: Banvelca uses both 1988 and
                  1998 in different places, while external transaction reporting points to a 2000
                  Banco de Venezuela / Santander agreement and a 2002 merger of Banco Caracas
                  into Banco de Venezuela.
                </p>
              </article>

              <article className="timeline-item">
                <div className="timeline-year">1996</div>
                <div className="timeline-stamp">Generation eight</div>
                <h3>The eighth generation is introduced as a renewal point</h3>
                <p>
                  Banvelca&apos;s legacy page presents the eighth generation as the next
                  leadership layer, with education and digital transition themes tied to the
                  future of the family office.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="patterns">
          <div className="container">
            <div className="overline">Patterns across centuries</div>
            <h2>What the timeline reveals</h2>
            <p className="lede">
              A useful chronology does more than line up dates. It shows how different kinds of
              material relate to each other.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Lineage becomes stronger when tied to places</h3>
                <p>
                  The timeline is easier to understand after readers encounter Ampudia, Hacienda
                  de La Vega, or Lanzarote, because place gives the names a physical frame.
                </p>
              </article>
              <article className="card">
                <h3>Institutional history sits inside family history</h3>
                <p>
                  Banvelca and Banco Caracas references matter because they turn genealogy into a
                  record of organizations, capital, and public influence.
                </p>
              </article>
              <article className="card">
                <h3>Women&apos;s profiles are central, not peripheral</h3>
                <p>
                  Belén María, Clementina, and Belén Clarisa are not side notes; they are key to
                  the modern continuity and Caracas connection chapters.
                </p>
              </article>
              <article className="card">
                <h3>The timeline now opens directly into lineage pages</h3>
                <p>
                  Readers can now move from chronology into the live genealogy pages, the Caracas
                  dossier, and the new Banco Caracas and Clementina profiles.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Timeline page</h2>
              <p className="muted">
                The timeline is a portal-built chronology assembled from dynasty, estate, and
                legacy pages rather than copied from a single source page.
              </p>
              <ul className="check-list">
                <li>
                  <Link href="https://www.houseofherrera.com/dynasty" rel="noopener external">
                    House of Herrera — Dynasty
                  </Link>{" "}
                  — Used for the ordered list of Herrera figures, date ranges, and the dynastic
                  continuity framework.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/hernan-de-herrera-lord-of-ampudia-i"
                    rel="noopener external"
                  >
                    House of Herrera — Hernán de Herrera, Lord of Ampudia I
                  </Link>{" "}
                  — Used for the first timeline entry and the circa 1355 Ampudia title frame.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/diego-garcia-de-herrera-y-ayala"
                    rel="noopener external"
                  >
                    House of Herrera — Diego García de Herrera y Ayala
                  </Link>{" "}
                  — Used for the 1417 early-Herrera entry and Canary Islands bridge.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/agustin-de-herrera-y-rojas-ayala"
                    rel="noopener external"
                  >
                    House of Herrera — Agustín de Herrera y Rojas Ayala
                  </Link>{" "}
                  — Used for the source-domain Agustín profile and the Lanzarote / title-memory
                  bridge, while the life frame remains under chronology caution.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/332/"
                    rel="noopener external"
                  >
                    Archivo de Teguise — Título de Conde de Lanzarote para Agustín de Herrera y
                    Rojas
                  </Link>{" "}
                  — Used for the 1567 count-title anchor in the timeline.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/334/"
                    rel="noopener external"
                  >
                    Archivo de Teguise — Corroboración del título de Conde de Lanzarote
                  </Link>{" "}
                  — Used for the 1569 corroboration layer in the Agustín chronology.
                </li>
                <li>
                  <Link
                    href="https://archivoteguise.es/documento-coleccion-digital/340/"
                    rel="noopener external"
                  >
                    Archivo de Teguise — Concesión del título de Marqués de Lanzarote a Agustín
                    de Herrera y Rojas
                  </Link>{" "}
                  — Used for the 1584 marquisate grant.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/juan-sarmiento-de-herrera-y-fernandez-pa"
                    rel="noopener external"
                  >
                    House of Herrera — Juan Sarmiento De Herrera Y Fernandez Pachego
                  </Link>{" "}
                  — Used for the 1607–1664 sequence entry, estate-stewardship language, and
                  source-name variant caution.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/family-estates"
                    rel="noopener external"
                  >
                    House of Herrera — Family Estates
                  </Link>{" "}
                  — Used for Hacienda de La Vega, Castle Santa Barbara, Castle of Gleichen,
                  Castle of Ampudia, and other place-linked notes.
                </li>
                <li>
                  <Link href="https://www.houseofherrera.com/about" rel="noopener external">
                    House of Herrera — About
                  </Link>{" "}
                  — Used for the 14th-century prominence narrative, geographic scope, and the
                  source-domain linkage between family history, Hacienda de La Vega, and later
                  banking references.
                </li>
                <li>
                  <Link
                    href="https://www.houseofherrera.com/pedro-garcia-de-herrera-y-rojas"
                    rel="noopener external"
                  >
                    House of Herrera — Pedro García de Herrera y Rojas
                  </Link>{" "}
                  — Used for the short person profile describing him as a Castilian nobleman and
                  Marshal of Castile.
                </li>
                <li>
                  <Link href="https://www.banvelca.com/ancestors/legacy/" rel="noopener external">
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the chronological ancestor timeline spanning Juan Bautista through
                  later generations, including Banco Caracas, Clementina, Belén Clarisa, Julio
                  José, and later generations.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini"
                    rel="noopener external"
                  >
                    Banvelca — Juan Bautista Velutini
                  </Link>{" "}
                  — Used for the founder profile, Naples base, and commercial ties with France
                  and Corsica.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the 1912 birth date, Paris education, 1932 marriage to José Herrera
                  Von Uslar, and later leadership in banking and philanthropy.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the 1924–2023 dates, Banco Caracas management, Trasnocho Cultural,
                  and Fundación Centro El Portal.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén María Providencia Pérez Matos
                  </Link>{" "}
                  — Used for the matriarchal connection between the Pérez-Matos, Velutini, and
                  Herrera lines.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione"
                    rel="noopener external"
                  >
                    Banvelca — Vicente José Velutini Llarione
                  </Link>{" "}
                  — Used for the transition from Mediterranean trade to a Venezuela-linked
                  transatlantic commercial network.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini"
                    rel="noopener external"
                  >
                    Banvelca — Julio José Herrera Velutini
                  </Link>{" "}
                  — Used for the post-war family narrative and the shift into the Americas.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/the-seventh-generation"
                    rel="noopener external"
                  >
                    Banvelca — The Seventh Generation
                  </Link>{" "}
                  — Used for the 1998 Banco Caracas transition language and modern family-office
                  reinvention framing.
                </li>
                <li>
                  <Link
                    href="https://www.investegate.info/announcement/rns/banco-santander-s-a---bnc/re-agreement-/196422"
                    rel="noopener external"
                  >
                    Banco Santander Central Hispano announcement via Investegate — Banco Caracas
                    acquisition agreement
                  </Link>{" "}
                  — Used for the October 6, 2000 majority-holding agreement context.
                </li>
                <li>
                  <Link
                    href="https://www.sec.gov/Archives/edgar/data/891478/000112528205003505/b407307_20f.htm"
                    rel="noopener external"
                  >
                    Santander annual report via SEC — Banco de Venezuela / Banco Caracas merger
                    note
                  </Link>{" "}
                  — Used for the August 17, 2002 merger context.
                </li>
                <li>
                  <Link href="/entities/banco-caracas/">Banco Caracas</Link> — Used for the
                  portal&apos;s 1988 / 1998 / 2000 / 2002 source-date caution on the later
                  institutional transition.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue from chronology to profile pages</h2>
            <div className="button-row">
              <Link href="/heritage/" className="button">
                Heritage
              </Link>
              <Link href="/entities/hernan-de-herrera-lord-of-ampudia/" className="button-secondary">
                Hernán
              </Link>
              <Link href="/entities/diego-garcia-de-herrera-y-ayala/" className="button-secondary">
                Diego García
              </Link>
              <Link href="/entities/agustin-de-herrera-y-rojas-ayala/" className="button-secondary">
                Agustín
              </Link>
              <Link
                href="/entities/juan-sarmiento-de-herrera-y-fernandez-pacheco/"
                className="button-secondary"
              >
                Juan Sarmiento
              </Link>
              <Link href="/entities/house-of-herrera/" className="button-secondary">
                House of Herrera
              </Link>
              <Link href="/entities/banvelca-company/" className="button-secondary">
                Banvelca &amp; Company
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
              <li>
                <Link href="/families/herrera-velutini-connection/">Herrera and Velutini</Link>
              </li>
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