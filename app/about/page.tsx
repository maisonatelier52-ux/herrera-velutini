import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Herrera Velutini | Scope, Mission & Editorial Position",
  description:
    "What the Herrera Velutini portal covers, how it adds original value, and where its editorial boundaries begin and end.",
  alternates: {
    canonical: "https://herreravelutini.com/about/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "About Herrera Velutini | Scope, Mission & Editorial Position",
    description:
      "What the Herrera Velutini portal covers, how it adds original value, and where its editorial boundaries begin and end.",
    url: "https://herreravelutini.com/about/",
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
    title:
      "About Herrera Velutini | Scope, Mission & Editorial Position",
    description:
      "What the Herrera Velutini portal covers, how it adds original value, and where its editorial boundaries begin and end.",
    images: [
      "https://herreravelutini.com/og/herreravelutini-og.png",
    ],
  },
};

export default function AboutPage() {
  return (
    <>

      {/* JSON-LD */}
      <Script
        id="schema-organization"
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
          }),
        }}
      />

      {/* Website */}
      <Script
        id="schema-website"
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
          }),
        }}
      />

      {/* Article */}
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "About Herrera Velutini | Scope, Mission & Editorial Position",
            description:
              "An overview of the portal’s scope, mission, quality standards, and trust boundaries.",
            datePublished: "2026-04-17",
            dateModified: "2026-04-17",
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
            mainEntityOfPage:
              "https://herreravelutini.com/about/",
          }),
        }}
      />

      {/* Breadcrumb */}
      <Script
        id="schema-breadcrumb"
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
                name: "About",
                item: "https://herreravelutini.com/about/",
              },
            ],
          }),
        }}
      />

      <Link className="skip-link" href="#main">
        Skip to content
      </Link>

      <main id="main">
        {/* HERO */}
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <nav className="breadcrumbs">
                <ol>
                  <li><Link href="/">Home</Link></li>
                  <li>About</li>
                </ol>
              </nav>

              <div className="eyebrow">Trust layer</div>
							<h1>About Herrera Velutini</h1>
							<p className="lede">Herrera Velutini is a reference portal built to organize the public record around the Herrera and Velutini families. It does not function as a brochure site, a private-family noticeboard, or a mirrored copy of the source domains. Its purpose is to turn dispersed family-domain material into a dated, traceable, and easier-to-read editorial system for history, lineage, estates, organizations, and key figures.</p>
						</div>
						<aside className="facts-box">
              <ul>
                <li>
                  <span>Primary scope</span><strong>Family history, lineage, estates, places, organizations, and source notes</strong>
                </li>
						    <li>
                  <span>What it adds</span><strong>Structure, synthesis, dates, bylines, breadcrumbs, schema, and internal links</strong>
                </li>
						    <li>
                  <span>What it avoids</span><strong>Thin rewrites, unlabeled copying, and unsupported extrapolation</strong>
                </li>
						    <li>
                  <span>Next page</span><strong><Link href="../editorial-methodology">Editorial Methodology</Link></strong>
                </li>
              </ul>
            </aside>
					</div>
				</section>

        <div className="container">
          <div className="byline">
            <div>
              <span className="byline-label">Prepared by</span> <Link href="../editorial-desk">Herrera Velutini Editorial Desk</Link>
            </div>
            <div>
              <span className="byline-label">Reviewed by</span> <Link href="../review-team">Standards Review Team</Link>
            </div>
            <div>
              <span className="byline-label">Published</span> 
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
            <div>
              <span className="byline-label">Updated</span>
              <time dateTime="2026-04-17">April 17, 2026</time>
            </div>
          </div>
        </div>
							
        <section className="section" id="what-this-site-is">
          <div className="container">
            <div className="overline">Mission</div>
            <h2>What this site is</h2>
            <p className="lede">The portal is designed to behave like a specialized family-reference library. Each page should help a reader answer at least one concrete question: who is this figure, what is this estate, how do the families connect, where does this claim come from, and what other pages deepen the subject?</p>
            <div className="cards">
              <article className="card">
                <h3>A research-oriented portal</h3>
                <p>Pages are grouped by entity, family, place, chronology, and editorial trust—not by marketing funnel or generic blog category.</p>
              </article>
              <article className="card">
                <h3>A source-linked reading model</h3>
                <p>Every major page identifies the source-domain pages it relies on and explains how those pages were used.</p>
              </article>
              <article className="card">
                <h3>A publication with visible ownership</h3>
                <p>Article-style pages show authorship, review ownership, publication dates, and update dates in plain view.</p>
              </article>
            </div>
          </div>
        </section>
						
        <section className="section" id="boundaries">
          <div className="container">
            <div className="overline">Boundaries</div>
            <h2>What this site is not</h2>
            <p className="lede">Clear boundaries make the portal more trustworthy. Not every claim in the source domains can be independently validated from the domains alone, and not every family or institutional detail belongs in a public indexable page.</p>
            <div className="note-grid">
              <article className="callout">
                <div className="overline">Not a mirror</div>
                <h3>The site does not lightly rewrite source-domain copy.</h3>
                <p>If a source page already says something clearly, the portal either cites it in a source-basis block or adds new structure around it. It does not duplicate the page in slightly altered wording.</p>
              </article>
              <article className="callout">
                <div className="overline">Not a private archive</div>
                <h3>The portal does not publish private or sensitive family material by default.</h3>
                <p>Private documents, unpublished correspondence, or low-value archival scans should remain protected or be excluded from indexing unless they serve a clear public-reference purpose.</p>
              </article>
              <article className="callout">
                <div className="overline">Not a substitute for formal scholarship</div>
                <h3>The portal is a guided entry point, not the final word.</h3>
                <p>Where the source domains are brief, promotional, or internally framed, the portal labels that reality and points to further reading or future-source priorities instead of pretending certainty.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="audience">
          <div className="container">
            <div className="overline">Audience</div>
            <h2>Who the portal is for</h2>
            <p className="lede">The first publishing wave is written for several overlapping audiences: readers exploring family history, journalists or researchers looking for structured background, and search users who need a clear, source-led overview instead of scattered snippets.</p>
            <div className="media-split">
              <div>
                <p>For heritage readers, the site translates names, dates, estates, and symbols into a navigable map. For professional researchers, it provides a quicker route to the source-domain materials and the specific pages that carry the most useful details. For search engines, it creates a better-defined subject graph built around organizations, people, places, and chronology.</p>
                <p>That is why the portal prioritizes pages such as <Link href="../entities/house-of-herrera">House of Herrera</Link>, <Link href="../entities/banvelca-company">Banvelca &amp; Company</Link>, <Link href="../heritage">Heritage</Link>, <Link href="../timeline">Timeline</Link>, and the new <Link href="../families/herrera">Herrera Family</Link> hub before expanding into the full 50-page map.</p>
                <ul aria-label="Key themes" className="inline-list">
                  <li>Researchers</li>
                  <li>Writers</li>
                  <li>Curious readers</li>
                  <li>Entity searchers</li>
                  <li>Place-led discovery</li>
                </ul>
              </div>
              <figure className="feature-figure">
                <Image
                  src="/illustrations/authority-stack.svg"
                  alt="Diagram showing trust pages, source model, and search logic in the portal authority layer."
                  width={800}
                  height={500}
                />
                <figcaption>The About page defines the site’s public role: a structured reference portal with clear sourcing and editorial ownership.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="section" id="quality">
          <div className="container">
            <div className="overline">Editorial standards in plain language</div>
            <h2>How the portal defines quality</h2>
            <p className="lede">Quality on this site means more than polished prose. A page is only ready when it adds real value beyond the source domains and gives a reader enough context to judge what they are reading.</p>
            <div className="cards cards-four">
              <article className="card">
                <h3>Original value</h3>
                <p>Pages should synthesize, connect, or annotate. They should not exist merely to restate what another page already says.</p>
              </article>
              <article className="card">
                <h3>Traceability</h3>
                <p>Core claims should map back to named sources, especially when the material comes from family-owned domains or profile pages.</p>
              </article>
              <article className="card">
                <h3>Usable structure</h3>
                <p>A good page creates internal routes to related people, estates, organizations, and timelines so readers can continue the research journey.</p>
              </article>
              <article className="card">
                <h3>Honest framing</h3>
                <p>Where the portal is relying on source-domain self-description, it says so. Where dates are approximate, it marks them as circa.</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section" id="governance">
          <div className="container">
            <div className="overline">Editorial ownership</div>
            <h2>Governance and contact roles</h2>
            <p className="lede">The portal already includes separate pages for the editorial desk and review team so readers can understand who is responsible for publication standards. A dedicated public contact workflow can be added once domain mail is provisioned for launch.</p>
            <div className="contact-grid" id="contact">
              <article className="panel">
                <div className="overline">Editorial desk</div>
                <h3>Page creation and source shaping</h3>
                <p>The editorial desk assembles page briefs, writes production copy, assigns source-basis notes, and coordinates internal linking across the portal.</p>
                <p className="contact-line">
                  <Link href="../editorial-desk">Open the Editorial Desk page</Link>
                </p>
              </article>
              <article className="panel">
                <div className="overline">Review team</div>
                <h3>Fact checking, consistency, and update discipline</h3>
                <p>The review team checks that dates, family names, and source references remain consistent and that update dates only change when the page materially changes.</p>
                <p className="contact-line">
                  <Link href="../review-team">Open the Review Team page</Link>
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="source-basis">
              <div className="overline">Traceability</div>
              <h2>Source basis for the About page</h2>
              <p className="muted">The About page uses the two family domains only for subject framing. Its editorial standards and trust model are defined separately by the portal.</p>
              <ul className="check-list">
                <li><Link href="https://www.houseofherrera.com/about" rel="noopener external">House of Herrera — About</Link> — Used for the 14th-century prominence narrative, geographic scope, and the source-domain linkage between family history, Hacienda de La Vega, and later banking references.</li>
                <li><Link href="https://www.banvelca.com/about" rel="noopener external">Banvelca — About</Link> — Used for the 1781 Naples founding story, Juan Bautista Velutini, and the firm’s self-description as a private trust and investment house.</li>
                <li><Link href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" rel="noopener external">Google Search Central — Helpful, reliable, people-first content</Link> — Used for editorial standards around originality, clear sourcing, about pages, and trust signals.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container panel">
            <div className="overline">Related pages</div>
            <h2>Continue into the trust layer</h2>
            <div className="button-row">
            <Link className="button" href="../editorial-methodology">Editorial Methodology</Link>
            <Link className="button-secondary" href="../sources">Sources</Link>
            <Link className="button-secondary" href="../heritage">Heritage</Link>
            <Link className="button-secondary" href="../families/herrera">Herrera Family</Link>
            </div>
          </div>
        </section>
			</main>
			<footer className="site-footer">
				<div className="container footer-grid">
					<div>
						<div className="footer-brand">Herrera Velutini</div>
						<p className="muted">A fast, source-linked editorial portal for family history, lineage, estates, organizations, and places associated with the Herrera and Velutini record.</p>
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
              <li><Link href="/knowledge">Knowledge & FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li><Link href="/families/herrera-velutini-connection">Herrera and Velutini</Link></li>
              <li><Link href="/families/velutini">Velutini Family</Link></li>
              <li><Link href="/places/caracas">Caracas</Link></li>
              <li><Link href="/entities/banco-caracas">Banco Caracas</Link></li>
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