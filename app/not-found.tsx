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

      <Link className="skip-link" href="#main">Skip to content</Link>

      <main id="main">
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <div className="eyebrow">404</div>
              <h1>The page you requested is not here.</h1>
              <p className="lede">Use the homepage, the entity hub, or the sources page to get back onto the main reading paths.</p>
              <div className="button-row">
                <Link href="/" className="button">Home</Link>
                <Link href="/entities/" className="button-secondary">Entity hub</Link>
                <Link href="/sources/" className="button-secondary">Sources</Link>
              </div>
            </div>
            <aside className="panel">
              <div className="overline">Suggested paths</div>
              <ul className="footer-links">
                <li><Link href="/about/">About</Link></li>
                <li><Link href="/heritage/">Heritage</Link></li>
                <li><Link href="/stewardship/">Stewardship</Link></li>
                <li><Link href="/timeline/">Timeline</Link></li>
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