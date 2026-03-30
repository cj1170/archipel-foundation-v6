import Link from 'next/link';
import PioneerForm from './PioneerForm';

const NAV_LINKS = [
  { label: 'Notre Mission', href: '/mission' },
  { label: 'Notre Approche', href: '/approche' },
  { label: 'Gouvernance', href: '/gouvernance' },
  { label: 'Soutenir', href: '/soutenir' },
  { label: 'La Guilde', href: '/guilde' },
  { label: 'Actualités', href: '/actualites' },
] as const;

const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
] as const;

export default function Footer() {
  return (
    <footer className="bg-slate_f text-linen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 : Logo + baseline */}
          <div>
            <span className="font-heading text-h3 tracking-[-0.02em] text-sand">
              ARCHIPEL
            </span>
            <p className="mt-4 font-body text-body-sm italic text-sand leading-[1.6]">
              Réinventer la santé.<br />Pour qu&apos;elle dure.
            </p>
          </div>

          {/* Col 2 : Navigation */}
          <nav aria-label="Navigation footer">
            <h3 className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-label text-label uppercase tracking-[0.08em] text-linen/80 hover:text-linen transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 : Informations */}
          <div>
            <h3 className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6">
              Informations
            </h3>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-label text-label uppercase tracking-[0.08em] text-linen/80 hover:text-linen transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:contact@archipel.foundation"
                  className="font-body text-body-sm text-linen/80 hover:text-linen transition-colors"
                >
                  contact@archipel.foundation
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/archipel-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-linen/80 hover:text-linen transition-colors"
                  aria-label="ARCHIPEL Foundation sur LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="font-label text-label uppercase tracking-[0.08em]">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur + CTA Pionniers + Copyright */}
        <div className="mt-12 pt-8 border-t border-steel-blue/30">
          {/* CTA Pionniers */}
          <div className="mb-10" id="pionniers">
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-linen mb-2">
              Rejoindre les pionniers
            </h3>
            <p className="font-body text-body-sm text-sand mb-6">
              Recevez les avancées du projet et participez à l&apos;aventure ARCHIPEL.
            </p>
            <PioneerForm variant="on-dark" layout="inline" />
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sand/60 font-body text-caption">
            <p>&copy; 2026 ARCHIPEL Foundation — Fonds de dotation en création</p>
            <p>ARCHIPEL LIFE SAS — en cours de création</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
