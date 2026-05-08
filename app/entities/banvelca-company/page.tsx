import Link from "next/link";
import Script from "next/script";

export async function generateMetadata() {
  const title =
    "Banvelca & Company | 1781 Origins, Legacy & Stewardship";

  const description =
    "Organization profile for Banvelca & Company, connecting its founding narrative, legacy sequence, and stewardship themes.";

  const url =
    "https://herreravelutini.com/entities/banvelca-company/";

  return {
    title,
    description,
    alternates: { canonical: url },
    authors: [{ name: "Herrera Velutini Editorial Desk" }],
    robots:
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Herrera Velutini",
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
      title,
      description,
      images: [
        "https://herreravelutini.com/og/herreravelutini-og.png",
      ],
    },
  };
}

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
    name: "Banvelca & Company | 1781 Origins, Legacy & Stewardship",
    url: "https://herreravelutini.com/entities/banvelca-company/",
    description:
      "Organization profile for Banvelca & Company as interpreted by the Herrera Velutini portal.",
    isPartOf: {
      "@id": "https://herreravelutini.com/#website",
    },
    mainEntity: {
      "@type": "Organization",
      name: "Banvelca & Company",
      url: "https://herreravelutini.com/entities/banvelca-company/",
      sameAs: ["https://www.banvelca.com/"],
      foundingDate: "1781",
      description:
        "A profile of Banvelca’s founding narrative, legacy sequence, and stewardship themes across finance, art, and social responsibility.",
      areaServed: [
        "Europe",
        "North America",
        "Latin America",
        "Middle East",
      ],
      knowsAbout: [
        "private banking",
        "finance",
        "art investments",
        "social responsibility",
        "family office",
        "legacy",
      ],
      subjectOf: "https://www.banvelca.com/",
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
        name: "Banvelca & Company",
        item:
          "https://herreravelutini.com/entities/banvelca-company/",
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
                  <li aria-current="page">Banvelca &amp; Company</li>
                </ol>
              </nav>
              <div className="eyebrow">Organization profile</div>
              <h1>Banvelca &amp; Company</h1>
              <p className="lede">
                On this portal, Banvelca &amp; Company is treated as a legacy
                institution described through two complementary layers: a
                founding narrative in Naples in 1781 and a modern stewardship
                vocabulary built around private banking, finance, art
                investments, social responsibility, and generational continuity.
                This profile explains how those pieces fit together, where the
                chronology is strongest, and how readers should move from
                Banvelca&apos;s themed pages to concrete people, places, and
                institutions.
              </p>
            </div>
            <aside className="facts-box">
              <ul>
                <li>
                  <span>Entity type</span>
                  <strong>
                    Legacy institution and family-office source-domain framework
                  </strong>
                </li>
                <li>
                  <span>Founding point</span>
                  <strong>Naples · 1781</strong>
                </li>
                <li>
                  <span>Main clusters</span>
                  <strong>
                    Legacy, private banking, finance, art, social responsibility
                  </strong>
                </li>
                <li>
                  <span>Related domain</span>
                  <strong>
                    <Link
                      href="https://www.banvelca.com/"
                      rel="noopener external"
                    >
                      banvelca.com
                    </Link>
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
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>{" "}
              <time dateTime="2026-04-25">April 25, 2026</time>
            </div>
          </div>
        </div>

        {/* What this profile adds */}
        <section className="section" id="what-this-profile-adds">
          <div className="container">
            <div className="overline">Portal function</div>
            <h2>What this profile adds</h2>
            <p className="lede">
              Banvelca&apos;s public pages are distributed across themed modules
              and ancestor pages. This profile brings them back together in one
              place and clarifies how the portal reads them.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Founding story in one place</h3>
                <p>
                  The page connects the 1781 Naples origin story to the later
                  generational sequence instead of leaving them on separate
                  source pages.
                </p>
              </article>
              <article className="card">
                <h3>Themed pages connected to people</h3>
                <p>
                  Private banking, finance, art investments, and social
                  responsibility become more meaningful when tied to named
                  figures such as Juan Bautista, Clementina, Belén Clarisa, and
                  Julio José.
                </p>
              </article>
              <article className="card">
                <h3>Modern vocabulary translated into neutral editorial language</h3>
                <p>
                  The portal treats Banvelca&apos;s family-office and
                  stewardship language as source-domain framing and then
                  explains what that framing does on the site.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Public framing */}
        <section className="section" id="public-framing">
          <div className="container">
            <div className="overline">Public narrative</div>
            <h2>How the source domain frames Banvelca</h2>
            <p className="lede">
              Banvelca&apos;s About page presents the firm as a private trust
              and investment house founded in the Kingdom of Naples in 1781 by
              Juan Bautista Velutini, with later activity across four continents.
            </p>
            <p>
              The legacy pages extend that story through generations: Juan
              Bautista, Vicente José, José Antonio, Julio César, Belén María,
              Clementina, Belén Clarisa, Julio José, and later generations. The
              themed pages add the modern vocabulary of private banking, finance,
              art custodianship, and social responsibility.
            </p>
            <p>
              The portal reads this as a layered institutional narrative. It
              begins with a merchant-banking origin story, grows into a Latin
              America-linked family banking narrative, and then reappears in
              contemporary language about family capital, cultural patronage, and
              multi-jurisdictional stewardship. That reading makes it easier to
              connect Banvelca not just to its own theme pages but also to{" "}
              <Link href="/heritage">Heritage</Link>,{" "}
              <Link href="/timeline">Timeline</Link>,{" "}
              <Link href="/themes">Themes</Link>, and the live Caracas dossier.
            </p>
          </div>
        </section>

        {/* Clusters */}
        <section className="section" id="clusters">
          <div className="container">
            <div className="overline">What readers should use first</div>
            <h2>The strongest Banvelca clusters in the live portal</h2>
            <p className="lede">
              Banvelca becomes easiest to understand when its content is grouped
              into chronology, operating model, and civic-cultural expression.
            </p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Legacy chronology</h3>
                <p>
                  The ancestor pages supply the clearest generational structure
                  and are the backbone of the Banvelca profile.
                </p>
                <div className="tag-row">
                  <span className="tag">Founding</span>
                  <span className="tag">Generations</span>
                </div>
                <p><Link href="/timeline">See Timeline</Link></p>
              </article>
              <article className="card">
                <h3>Private banking and finance</h3>
                <p>
                  These themed pages present the family-capital and
                  custodianship language that defines Banvelca&apos;s modern
                  self-description.
                </p>
                <div className="tag-row">
                  <span className="tag">Operating model</span>
                  <span className="tag">Finance</span>
                </div>
                <p>
                  <Link href="/themes/private-banking-tradition">
                    Open theme page
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Art and social responsibility</h3>
                <p>
                  These pages expand the subject beyond banking and help the
                  portal connect Banvelca to culture, philanthropy, and
                  public-facing initiatives.
                </p>
                <div className="tag-row">
                  <span className="tag">Culture</span>
                  <span className="tag">Philanthropy</span>
                </div>
                <p>
                  <Link href="/themes/art-investment-and-patronage">
                    Open theme page
                  </Link>
                </p>
              </article>
              <article className="card">
                <h3>Person pages as evidence anchors</h3>
                <p>
                  Juan Bautista, Clementina, Belén Clarisa, and Julio José are
                  the best current entry points for readers who want more than
                  thematic copy.
                </p>
                <div className="tag-row">
                  <span className="tag">Profiles</span>
                  <span className="tag">Chronology</span>
                </div>
                <p>
                  <Link href="/entities/julio-jose-herrera-velutini">
                    Read Julio José Herrera Velutini
                  </Link>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Generations */}
        <section className="section" id="generations">
          <div className="container">
            <div className="overline">Generational architecture</div>
            <h2>From Naples to the Americas</h2>
            <p className="lede">
              Banvelca&apos;s strongest contribution to the portal is its
              generational storyline. It provides a clearer nineteenth- and
              twentieth-century chronology than the themed pages alone could
              supply.
            </p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">1781</div>
                <h3>Juan Bautista Velutini</h3>
                <p>
                  The founder profile anchors the origin story in Naples and
                  commercial ties with France and Corsica.
                </p>
              </article>
              <article className="callout">
                <div className="overline">1811 and 1844</div>
                <h3>Vicente José and José Antonio</h3>
                <p>
                  These generations extend the story from Mediterranean trade
                  toward broader diplomatic and fiscal roles linked to Latin
                  America.
                </p>
              </article>
              <article className="callout">
                <div className="overline">1880s onward</div>
                <h3>Julio César, Belén María, Clementina, Belén Clarisa, Julio José</h3>
                <p>
                  This cluster is where institutional, family, Caracas, and
                  cultural history begin to overlap most visibly in the source
                  material.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* People and places */}
        <section className="section" id="people-and-places">
          <div className="container">
            <div className="overline">Interpretive choice</div>
            <h2>Why the portal reads Banvelca through people and places</h2>
            <p className="lede">
              Themed pages on their own can sound abstract. People and places
              make them legible.
            </p>
            <p>
              A statement about private banking becomes more meaningful when tied
              to{" "}
              <Link href="/entities/juan-bautista-velutini">
                Juan Bautista Velutini
              </Link>{" "}
              and the Naples origin story. A claim about cultural stewardship
              becomes more meaningful when linked to{" "}
              <Link href="/entities/belen-clarisa-velutini-perez-matos">
                Belén Clarisa Velutini Pérez-Matos
              </Link>
              , Trasnocho Cultural, and the Caracas sphere. A statement about
              family continuity becomes more meaningful when placed against the
              legacy sequence and the family links created through Belén María
              and Clementina.
            </p>
            <p>
              That is why the portal does not leave Banvelca as a stack of
              themed landing pages. It turns Banvelca into an organization
              profile with a surrounding network of people, places, and
              timelines.
            </p>
          </div>
        </section>

        {/* Research use */}
        <section className="section" id="research-use">
          <div className="container">
            <div className="overline">Reading the profile responsibly</div>
            <h2>Research use and caution</h2>
            <p className="lede">
              Banvelca&apos;s source-domain material is rich in self-description
              and generational storytelling. The portal keeps that value while
              making its framing explicit.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Use it for chronology and theme mapping</h3>
                <p>
                  Start here when you need the overall Banvelca narrative and
                  the quickest route into its strongest profiles and related
                  pages.
                </p>
              </article>
              <article className="card">
                <h3>Use person pages for the concrete details</h3>
                <p>
                  Profiles for{" "}
                  <Link href="/entities/juan-bautista-velutini">Juan Bautista</Link>,{" "}
                  <Link href="/entities/clementina-velutini-perez-matos">
                    Clementina
                  </Link>
                  ,{" "}
                  <Link href="/entities/belen-clarisa-velutini-perez-matos">
                    Belén Clarisa
                  </Link>
                  , and{" "}
                  <Link href="/entities/julio-jose-herrera-velutini">Julio José</Link>{" "}
                  provide the most reusable public details for the current
                  portal.
                </p>
              </article>
              <article className="card">
                <h3>Translate source-domain language carefully</h3>
                <p>
                  The portal preserves Banvelca&apos;s own vocabulary of
                  stewardship and private capital but marks it as public
                  family-domain framing where appropriate.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Source basis */}
        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the Banvelca profile</h2>
              <p className="muted">
                This profile is an original synthesis of Banvelca&apos;s About,
                Legacy, Private Banking, Finance, Art Investments, Social
                Responsibility, and selected ancestor pages.
              </p>
              <ul className="check-list">
                <li>
                  <Link
                    href="https://www.banvelca.com/about"
                    rel="noopener external"
                  >
                    Banvelca — About
                  </Link>{" "}
                  — Used for the 1781 Naples founding story, Juan Bautista
                  Velutini, and the firm&apos;s self-description as a private
                  trust and investment house.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/"
                    rel="noopener external"
                  >
                    Banvelca — Legacy
                  </Link>{" "}
                  — Used for the chronological ancestor timeline spanning Juan
                  Bautista through later generations, including Banco Caracas,
                  Clementina, Belén Clarisa, Julio José, and later generations.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/private-banking"
                    rel="noopener external"
                  >
                    Banvelca — Private Banking
                  </Link>{" "}
                  — Used for the family-only private-banking and
                  trust-coordination framing.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/finance"
                    rel="noopener external"
                  >
                    Banvelca — Finance
                  </Link>{" "}
                  — Used for the description of finance as multi-generational
                  custodianship.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/art-investments"
                    rel="noopener external"
                  >
                    Banvelca — Art Investments
                  </Link>{" "}
                  — Used for art as intergenerational custodianship and
                  inheritance.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/social-responsibility"
                    rel="noopener external"
                  >
                    Banvelca — Social Responsibility
                  </Link>{" "}
                  — Used for the themes of education, cultural preservation,
                  women&apos;s empowerment, and environmental regeneration.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/juan-bautista-velutini"
                    rel="noopener external"
                  >
                    Banvelca — Juan Bautista Velutini
                  </Link>{" "}
                  — Used for the founder profile, Naples base, and commercial
                  ties with France and Corsica.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/clementina-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Clementina Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the 1912 birth date, Paris education, 1932 marriage
                  to José Herrera Von Uslar, and later leadership in banking and
                  philanthropy.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-clarisa-velutini-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén Clarisa Velutini Pérez-Matos
                  </Link>{" "}
                  — Used for the 1924–2023 dates, Banco Caracas management,
                  Trasnocho Cultural, and Fundación Centro El Portal.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/belen-maria-providencia-perez-matos"
                    rel="noopener external"
                  >
                    Banvelca — Belén María Providencia Pérez Matos
                  </Link>{" "}
                  — Used for the matriarchal connection between the Pérez-Matos,
                  Velutini, and Herrera lines.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/vicente-jose-velutini-llarione"
                    rel="noopener external"
                  >
                    Banvelca — Vicente José Velutini Llarione
                  </Link>{" "}
                  — Used for the transition from Mediterranean trade to a
                  Venezuela-linked transatlantic commercial network.
                </li>
                <li>
                  <Link
                    href="https://www.banvelca.com/ancestors/legacy/julio-jose-herrera-velutini"
                    rel="noopener external"
                  >
                    Banvelca — Julio José Herrera Velutini
                  </Link>{" "}
                  — Used for the post-war family narrative and the shift into
                  the Americas.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue through the Banvelca and Velutini cluster</h2>
            <div className="button-row">
              <Link
                className="button"
                href="/entities/julio-jose-herrera-velutini"
              >
                Julio José Herrera Velutini
              </Link>
              <Link
                className="button-secondary"
                href="/entities/juan-bautista-velutini"
              >
                Juan Bautista Velutini
              </Link>
              <Link className="button-secondary" href="/themes">
                Open Themes
              </Link>
              <Link
                className="button-secondary"
                href="/entities/banco-caracas"
              >
                Banco Caracas
              </Link>
              <Link
                className="button-secondary"
                href="/genealogy/velutini-lineage"
              >
                Velutini Lineage
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
              <li><Link href="/editorial-methodology">Editorial Methodology</Link></li>
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
