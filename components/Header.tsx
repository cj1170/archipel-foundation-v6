'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePath, setActivePath] = useState('');
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Hydration-safe activePath
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [mobileOpen]);

  const isActive = (path: string) => activePath === path;
  const isVisionActive = activePath === '/mission' || activePath === '/approche';

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const navLinks = [
    { href: '/mission', label: 'Notre Mission' },
    { href: '/approche', label: 'Notre Approche' },
    { href: '/gouvernance', label: 'Gouvernance' },
    { href: '/soutenir', label: 'Soutenir' },
    { href: '/guilde', label: 'La Guilde' },
    { href: '/actualites', label: 'Actualités' },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 bg-slate_f/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-[60px] lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/logo-header.png"
            alt="ARCHIPEL Foundation"
            className="h-6 lg:h-8 w-auto"
          />
        </Link>

        {/* Nav desktop */}
        <nav
          className="hidden lg:flex items-center gap-5 font-label text-label uppercase tracking-[0.08em] text-sand whitespace-nowrap"
          role="navigation"
          aria-label="Navigation principale"
        >
          {/* Dropdown "Notre Vision" */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1 font-label text-label uppercase tracking-[0.08em] transition-colors duration-base hover:text-linen ${
                isVisionActive ? 'text-linen' : ''
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Notre Vision
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-base ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate_f border border-steel-blue rounded-lg shadow-dropdown py-2 transition-all duration-base origin-top ${
                dropdownOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
              }`}
              role="menu"
            >
              <Link
                href="/mission"
                role="menuitem"
                className={`block px-5 py-3 transition-colors duration-base hover:bg-steel-blue/20 ${
                  isActive('/mission') ? 'bg-steel-blue/10' : ''
                }`}
              >
                <span className="block text-label font-label uppercase tracking-[0.08em]">
                  Notre Mission
                </span>
                <span className="block font-body text-body-sm normal-case tracking-normal text-sand mt-0.5">
                  Le pourquoi
                </span>
              </Link>
              <Link
                href="/approche"
                role="menuitem"
                className={`block px-5 py-3 transition-colors duration-base hover:bg-steel-blue/20 ${
                  isActive('/approche') ? 'bg-steel-blue/10' : ''
                }`}
              >
                <span className="block text-label font-label uppercase tracking-[0.08em]">
                  Notre Approche
                </span>
                <span className="block font-body text-body-sm normal-case tracking-normal text-sand mt-0.5">
                  Le comment
                </span>
              </Link>
            </div>
          </div>

          <Link
            href="/gouvernance"
            className={`transition-colors duration-base hover:text-linen ${
              isActive('/gouvernance') ? 'text-linen' : ''
            }`}
          >
            Gouvernance
          </Link>
          <Link
            href="/soutenir"
            className={`transition-colors duration-base hover:text-linen ${
              isActive('/soutenir') ? 'text-linen' : ''
            }`}
          >
            Soutenir
          </Link>
          <Link
            href="/guilde"
            className={`transition-colors duration-base hover:text-linen ${
              isActive('/guilde') ? 'text-linen' : ''
            }`}
          >
            La Guilde
          </Link>
          <Link
            href="/actualites"
            className={`transition-colors duration-base hover:text-linen ${
              isActive('/actualites') ? 'text-linen' : ''
            }`}
          >
            Actualités
          </Link>
        </nav>

        {/* CTA desktop */}
        <a
          className="hidden lg:inline-flex items-center px-4 py-2 bg-sand text-slate_f font-label text-caption uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base whitespace-nowrap"
          href="#pionniers"
        >
          Rejoindre les pionniers
        </a>

        {/* Hamburger button (visible < 1024px — mobile ET desktop réduit) */}
        <button
          type="button"
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">
            {mobileOpen ? 'Fermer' : 'Ouvrir'} le menu
          </span>
          <span
            className={`absolute h-0.5 w-6 bg-sand transition-all duration-base ${
              mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-sand transition-all duration-base ${
              mobileOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-sand transition-all duration-base ${
              mobileOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

    </header>

    <div
      id="mobile-menu"
      className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 z-[9999] overflow-y-auto"
      style={{
        backgroundColor: '#1A2B35',
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'auto' : 'none',
        visibility: mobileOpen ? 'visible' : 'hidden',
        transition: 'opacity 300ms ease, visibility 300ms ease',
      }}
      role="navigation"
      aria-label="Navigation mobile"
      aria-hidden={!mobileOpen}
    >
      <nav className="flex flex-col px-6 pt-8 gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block py-4 font-label text-label uppercase tracking-[0.08em] border-b border-steel-blue/20 transition-colors duration-base hover:text-linen ${
              isActive(link.href) ? 'text-linen' : 'text-sand'
            }`}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}

        <a
          className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base"
          href="#pionniers"
          onClick={() => setMobileOpen(false)}
          tabIndex={mobileOpen ? 0 : -1}
        >
          Rejoindre les pionniers
        </a>
      </nav>
    </div>
    </>
  );
}
