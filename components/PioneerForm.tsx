'use client';

import { useState, FormEvent } from 'react';

interface PioneerFormProps {
  /** 'on-dark' = fond Slate/Steel (footer, hero) ; 'on-light' = fond Linen */
  variant?: 'on-dark' | 'on-light';
  /** Layout inline (footer) ou stacked (page) */
  layout?: 'inline' | 'stacked';
  className?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function PioneerForm({
  variant = 'on-dark',
  layout = 'stacked',
  className = '',
}: PioneerFormProps) {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [rgpd, setRgpd] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isDark = variant === 'on-dark';

  const inputClasses = isDark
    ? 'bg-transparent border-sand/40 text-linen placeholder:text-sand/50 focus:border-linen focus:ring-linen'
    : 'bg-transparent border-slate_f/20 text-slate_f placeholder:text-slate_f/40 focus:border-steel-blue focus:ring-steel-blue';

  const errors: Record<string, string> = {};
  if (touched.prenom && prenom.length < 2) errors.prenom = 'Minimum 2 caractères';
  if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email invalide';
  if (touched.rgpd && !rgpd) errors.rgpd = 'Consentement requis';

  const isValid = prenom.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && rgpd;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ prenom: true, email: true, rgpd: true });
    if (!isValid) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'pionnier', prenom, email, rgpd: true }),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-lg p-6 bg-corps/10 ${className}`}>
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-corps shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className={`font-body text-body ${isDark ? 'text-linen' : 'text-slate_f'}`}>
            Bienvenue parmi les pionniers ! Vous recevrez bientôt de nos nouvelles.
          </p>
        </div>
      </div>
    );
  }

  const isInline = layout === 'inline';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${className}`}
    >
      <div className={isInline ? 'flex flex-col sm:flex-row gap-3' : 'flex flex-col gap-5'}>
        {/* Prénom */}
        <div className={`flex flex-col gap-1.5 ${isInline ? 'sm:flex-1' : ''}`}>
          {!isInline && (
            <label className="font-label text-label uppercase tracking-[0.08em]">
              Prénom <span className="text-coeur">*</span>
            </label>
          )}
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, prenom: true }))}
            disabled={status === 'submitting'}
            placeholder="Prénom"
            aria-label="Prénom"
            aria-invalid={!!errors.prenom}
            className={`w-full px-4 py-3 border rounded-md font-body text-body focus:ring-1 focus:outline-none transition-colors duration-base ${inputClasses} ${
              errors.prenom ? 'border-coeur' : touched.prenom && prenom.length >= 2 ? 'border-corps' : ''
            }`}
          />
          {errors.prenom && (
            <p className="font-body text-caption text-coeur" role="alert">{errors.prenom}</p>
          )}
        </div>

        {/* Email */}
        <div className={`flex flex-col gap-1.5 ${isInline ? 'sm:flex-1' : ''}`}>
          {!isInline && (
            <label className="font-label text-label uppercase tracking-[0.08em]">
              Email <span className="text-coeur">*</span>
            </label>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            disabled={status === 'submitting'}
            placeholder="Email"
            aria-label="Email"
            aria-invalid={!!errors.email}
            className={`w-full px-4 py-3 border rounded-md font-body text-body focus:ring-1 focus:outline-none transition-colors duration-base ${inputClasses} ${
              errors.email ? 'border-coeur' : touched.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'border-corps' : ''
            }`}
          />
          {errors.email && (
            <p className="font-body text-caption text-coeur" role="alert">{errors.email}</p>
          )}
        </div>

        {/* Submit (inline) */}
        {isInline && (
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-md hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Envoi...
              </>
            ) : (
              'Rejoindre'
            )}
          </button>
        )}
      </div>

      {/* RGPD */}
      <label className="flex items-start gap-3 cursor-pointer mt-4">
        <input
          type="checkbox"
          checked={rgpd}
          onChange={(e) => { setRgpd(e.target.checked); setTouched((t) => ({ ...t, rgpd: true })); }}
          disabled={status === 'submitting'}
          className="mt-1 w-5 h-5 rounded-sm border-sand/40 text-steel-blue focus:ring-steel-blue"
        />
        <span className={`font-body text-body-sm leading-[1.6] ${isDark ? 'text-linen/80' : 'text-slate_f/80'}`}>
          J&apos;accepte que mes données soient traitées par ARCHIPEL Foundation conformément à sa{' '}
          <a href="/politique-confidentialite" className={`underline transition-colors ${isDark ? 'hover:text-linen' : 'hover:text-steel-blue'}`}>
            politique de confidentialité
          </a>.
        </span>
      </label>
      {errors.rgpd && (
        <p className="font-body text-caption text-coeur mt-1" role="alert">{errors.rgpd}</p>
      )}

      {/* Submit (stacked) */}
      {!isInline && (
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Envoi en cours...
            </>
          ) : (
            'Rejoindre les pionniers'
          )}
        </button>
      )}

      {/* Error serveur */}
      {status === 'error' && (
        <div className="mt-4 rounded-lg p-4 bg-coeur/10">
          <p className={`font-body text-body-sm ${isDark ? 'text-linen' : 'text-slate_f'}`}>
            Une erreur est survenue. Veuillez réessayer.
          </p>
        </div>
      )}
    </form>
  );
}
