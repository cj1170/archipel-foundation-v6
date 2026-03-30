'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Gouvernance', href: '/gouvernance' },
  { label: 'Soutenir', href: '/soutenir' },
  { label: 'La Guilde', href: '/guilde' },
  { label: 'Actualités', href: '/actualites' },
] as const;

const DROPDOWN_LINKS = [
  {
    label: 'Notre Mission',
    href: '/mission',
    description: 'Le pourquoi : notre raison d\u2019exister',
  },
  {
    label: 'Notre Approche',
    href: '/approche',
    description: 'Le comment : notre méthode intégrative',
  },
] as const;

const MOBILE_LINKS = [
  { label: 'Notre Mission', href: '/mission' },
  { label: 'Notre Approche', href: '/approche' },
  { label: 'Gouvernance', href: '/gouvernance' },
  { label: 'Soutenir', href: '/soutenir' },
  { label: 'La Guilde', href: '/guilde' },
  { label: 'Actualités', href: '/actualites' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Dropdown hover with enter/leave delays
  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(true), 100);
  }, []);

  const closeDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const isVisionActive =
    isActive('/mission') || isActive('/approche');

  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>

      <header className="sticky top-0 z-50 bg-slate_f/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-[60px] lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/images/logo-header.png"
              alt="ARCHIPEL Foundation"
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            className="hidden lg:flex items-center gap-8 font-label text-label uppercase tracking-[0.08em] text-sand"
            role="navigation"
            aria-label="Navigation principale"
          >
            {/* Dropdown: Notre Vision */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                type="button"
                className={`flex items-center gap-1 font-label text-label uppercase tracking-[0.08em] transition-colors duration-base hover:text-linen ${
                  isVisionActive ? 'text-linen' : ''
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((v) => !v)}
                onFocus={openDropdown}
                onBlur={closeDropdown}
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

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-slate_f border border-steel-blue rounded-lg shadow-dropdown py-2 transition-all duration-base origin-top ${
                  dropdownOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                }`}
                role="menu"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                {DROPDOWN_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className={`block px-5 py-3 transition-colors duration-base hover:bg-steel-blue/20 ${
                      isActive(item.href) ? 'text-linen' : ''
                    }`}
                    onClick={() => setDropdownOpen(false)}
                    onFocus={openDropdown}
                    onBlur={closeDropdown}
                  >
                    <span className="block text-label font-label uppercase tracking-[0.08em]">
                      {item.label}
                    </span>
                    <span className="block font-body text-body-sm normal-case tracking-normal text-sand mt-0.5">
                      {item.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct links */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-base hover:text-linen ${
                  isActive(link.href) ? 'text-linen' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <Link
            href="#pionniers"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base"
          >
            Rejoindre les pionniers
          </Link>

          {/* ── Hamburger mobile ── */}
          <button
            type="button"
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">
              {mobileOpen ? 'Fermer' : 'Ouvrir'} le menu
            </span>
            {/* Three bars → X animation */}
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

        {/* ── Mobile menu ── */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 top-[60px] bg-slate_f z-40 transition-all duration-base ${
            mobileOpen
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          role="navigation"
          aria-label="Navigation mobile"
        >
          <nav className="flex flex-col px-6 pt-8 gap-1">
            {MOBILE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-4 font-label text-label uppercase tracking-[0.08em] border-b border-steel-blue/20 transition-colors duration-base ${
                  isActive(link.href)
                    ? 'text-linen'
                    : 'text-sand hover:text-linen'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* CTA mobile */}
            <Link
              href="#pionniers"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base"
            >
              Rejoindre les pionniers
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
