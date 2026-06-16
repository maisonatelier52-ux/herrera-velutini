import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Herrera Velutini",

  description: "The page you requested could not be found.",

  robots: {
    index: false,
    follow: true,
  },

  themeColor: "#f6f1e7",

  metadataBase: new URL("https://herreravelutini.com"),

  alternates: {
    canonical: "/not-found",
  },

  icons: {
    icon: "/favicon.svg",
  },

  manifest: "/site.webmanifest",
};

export default function NotFound() {

  return (
    <>

      <Link className="skip-link" title="Skip" href="#main">Skip to content</Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <div className="eyebrow">404</div>
              <h1>The page you requested is not here.</h1>
              <p className="lede">Use the homepage, the entity hub, or the sources page to get back onto the main reading paths.</p>
              <div className="button-row">
                <Link
                  href="/"
                  title="Go to the Julio Herrera Velutini homepage"
                  className="button"
                >
                  Home
                </Link>

                <Link
                  href="/entities/"
                  title="Explore the Entity Hub"
                  className="button-secondary"
                >
                  Entity hub
                </Link>

                <Link
                  href="/sources/"
                  title="View sources and references"
                  className="button-secondary"
                >
                  Sources
                </Link>

              </div>
            </div>

            <aside className="panel">
              <div className="overline">Suggested paths</div>

              <ul className="footer-links">
                <li>
                  <Link href="/about/" title="Learn about Julio Herrera Velutini">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/heritage/" title="Explore the Herrera family heritage">
                    Heritage
                  </Link>
                </li>

                <li>
                  <Link href="/stewardship/" title="Learn about responsible stewardship and leadership">
                    Stewardship
                  </Link>
                </li>

                <li>
                  <Link href="/timeline/" title="View the Julio Herrera Velutini timeline">
                    Timeline
                  </Link>
                </li>
              </ul>
            </aside>
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
              <li>
                <Link href="/about/" title="Learn about Julio Herrera Velutini">
                  About
                </Link>
              </li>

              <li>
                <Link href="/heritage/" title="Explore the Herrera family heritage">
                  Heritage
                </Link>
              </li>

              <li>
                <Link href="/families/" title="Discover the Herrera banking families">
                  Families
                </Link>
              </li>

              <li>
                <Link href="/genealogy/" title="View the Herrera family genealogy">
                  Genealogy
                </Link>
              </li>

              <li>
                <Link href="/places/" title="Explore places connected to Julio Herrera Velutini">
                  Places
                </Link>
              </li>

              <li>
                <Link href="/estates/" title="Learn about the Herrera family estates">
                  Estates
                </Link>
              </li>

              <li>
                <Link href="/timeline/" title="View the Julio Herrera Velutini timeline">
                  Timeline
                </Link>
              </li>

              <li>
                <Link href="/entities/" title="Browse people, organizations, and entities">
                  Entities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Trust</h2>
            <ul className="footer-links">
              <li>
                <Link
                  href="/editorial-methodology/"
                  title="Learn about our editorial methodology and publishing standards"
                >
                  Editorial Methodology
                </Link>
              </li>

              <li>
                <Link
                  href="/sources/"
                  title="View our sources and reference materials"
                >
                  Sources
                </Link>
              </li>

              <li>
                <Link
                  href="/editorial-desk/"
                  title="Meet the editorial desk and content team"
                >
                  Editorial Desk
                </Link>
              </li>

              <li>
                <Link
                  href="/review-team/"
                  title="Learn about our review team and editorial review process"
                >
                  Review Team
                </Link>
              </li>

              <li>
                <Link
                  href="/knowledge/"
                  title="Explore our knowledge base and frequently asked questions"
                >
                  Knowledge &amp; FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="overline">Featured pages</h2>
            <ul className="footer-links">
              <li>
                <Link
                  href="/families/herrera-velutini-connection/"
                  title="Learn about the Herrera and Velutini connection"
                >
                  Herrera and Velutini
                </Link>
              </li>
              <li>
                <Link
                  href="/families/velutini/"
                  title="Discover the Velutini family history"
                >
                  Velutini Family
                </Link>
              </li>
              <li>
                <Link
                  href="/places/caracas/"
                  title="Explore the history of Caracas"
                >
                  Caracas
                </Link>
              </li>
              <li>
                <Link
                  href="/entities/banco-caracas/"
                  title="Learn about Banco Caracas"
                >
                  Banco Caracas
                </Link>
              </li>
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