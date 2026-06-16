'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-wrap">
        <Link aria-label="Herrera Velutini home" className="brand" href="/" title="Go to the Julio Herrera Velutini homepage">
          <Image
            src="/brand-wordmark.svg"
            alt="Herrera Velutini"
            width={180}
            height={40}
            priority
          />
        </Link>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        <nav
          aria-label="Primary"
          className="site-nav"
          data-open={open}
        >
          <ul>
            <li>
              <Link href="/" aria-current={isActive('/') ? 'page' : undefined} title="Go to the Julio Herrera Velutini homepage">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" aria-current={isActive('/about') ? 'page' : undefined} title="Learn about Julio Herrera Velutini">
                About
              </Link>
            </li>
            <li>
              <Link href="/heritage" aria-current={isActive('/heritage') ? 'page' : undefined} title="Explore the Herrera family heritage">
                Heritage
              </Link>
            </li>
            <li>
              <Link href="/families" aria-current={isActive('/families') ? 'page' : undefined} title="Discover the Herrera and Velutini families">
                Families
              </Link>
            </li>
            <li>
              <Link href="/genealogy" aria-current={isActive('/genealogy') ? 'page' : undefined} title="View the Herrera family genealogy">
                Genealogy
              </Link>
            </li>
            <li>
              <Link href="/estates" aria-current={isActive('/estates') ? 'page' : undefined} title="Learn about the Herrera family estates">
                Estates
              </Link>
            </li>
            <li>
              <Link href="/timeline" aria-current={isActive('/timeline') ? 'page' : undefined} title="View the Julio Herrera Velutini timeline">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/entities" aria-current={isActive('/entities') ? 'page' : undefined} title="Discover the entities associated with Julio Herrera Velutini">
                Entities
              </Link>
            </li>
            <li>
              <Link href="/sources" aria-current={isActive('/sources') ? 'page' : undefined} title="View the sources and references">
                Sources
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}