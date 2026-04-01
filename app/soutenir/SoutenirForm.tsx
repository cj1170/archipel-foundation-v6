'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const CERCLE_OPTIONS = ['Explorateur', 'Bâtisseur', 'Architecte'];

export default function SoutenirForm() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    organisation: '',
    cercle: '',
    message: '',
  });
  const [rgpd, setRgpd] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function blur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  const errors: Record<string, string> = {};
  if (touched.prenom && form.prenom.length < 2) errors.prenom = 'Minimum 2 caractères';
  if (touched.nom && form.nom.length < 2) errors.nom = 'Minimum 2 caractères';
  if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Email invalide';
  if (touched.cercle && !form.cercle) errors.cercle = 'Veuillez choisir un cercle';
  if (touched.rgpd && !rgpd) errors.rgpd = 'Consentement requis';

  const isValid =
    form.prenom.length >= 2 &&
    form.nom.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    !!form.cercle &&
    rgpd;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ prenom: true, nom: true, email: true, cercle: true, rgpd: true });
    if (!isValid) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'mecene',
          prenom: form.prenom,
          nom: form.nom,
          email: form.email,
          organisation: form.organisation || undefined,
          cercle: form.cercle,
          message: form.message || undefined,
          rgpd: true,
        }),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg p-6 bg-corps/10">
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-corps shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-body text-body text-linen">
            Merci pour votre soutien ! Nous vous recontacterons très
            prochainement.
          </p>
        </div>
      </div>
    );
  }

  const inputBase =
    'w-full px-4 py-3 border rounded-md font-body text-body bg-transparent border-sand/40 text-linen placeholder:text-sand/50 focus:border-linen focus:ring-1 focus:ring-linen focus:outline-none transition-colors duration-base';

  function fieldClass(field: string, valid: boolean) {
    if (errors[field]) return 'border-coeur';
    if (touched[field] && valid) return 'border-corps';
    return '';
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Prénom / Nom — côte à côte desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
            Prénom <span className="text-coeur">*</span>
          </label>
          <input
            type="text"
            value={form.prenom}
            onChange={(e) => update('prenom', e.target.value)}
            onBlur={() => blur('prenom')}
            disabled={status === 'submitting'}
            placeholder="Prénom"
            aria-invalid={!!errors.prenom}
            className={`${inputBase} ${fieldClass('prenom', form.prenom.length >= 2)}`}
          />
          {errors.prenom && (
            <p className="font-body text-caption text-coeur" role="alert">
              {errors.prenom}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
            Nom <span className="text-coeur">*</span>
          </label>
          <input
            type="text"
            value={form.nom}
            onChange={(e) => update('nom', e.target.value)}
            onBlur={() => blur('nom')}
            disabled={status === 'submitting'}
            placeholder="Nom"
            aria-invalid={!!errors.nom}
            className={`${inputBase} ${fieldClass('nom', form.nom.length >= 2)}`}
          />
          {errors.nom && (
            <p className="font-body text-caption text-coeur" role="alert">
              {errors.nom}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
          Email <span className="text-coeur">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          onBlur={() => blur('email')}
          disabled={status === 'submitting'}
          placeholder="Email"
          aria-invalid={!!errors.email}
          className={`${inputBase} ${fieldClass('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))}`}
        />
        {errors.email && (
          <p className="font-body text-caption text-coeur" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Organisation */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
          Organisation
        </label>
        <input
          type="text"
          value={form.organisation}
          onChange={(e) => update('organisation', e.target.value)}
          disabled={status === 'submitting'}
          placeholder="Organisation (optionnel)"
          className={inputBase}
        />
      </div>

      {/* Cercle d'intérêt */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
          Cercle d&apos;intérêt <span className="text-coeur">*</span>
        </label>
        <select
          value={form.cercle}
          onChange={(e) => {
            update('cercle', e.target.value);
            blur('cercle');
          }}
          disabled={status === 'submitting'}
          aria-invalid={!!errors.cercle}
          className={`${inputBase} ${fieldClass('cercle', !!form.cercle)} ${
            !form.cercle ? 'text-sand/50' : ''
          }`}
        >
          <option value="" disabled>
            Choisir un cercle
          </option>
          {CERCLE_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="text-slate_f bg-linen">
              {opt}
            </option>
          ))}
        </select>
        {errors.cercle && (
          <p className="font-body text-caption text-coeur" role="alert">
            {errors.cercle}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          disabled={status === 'submitting'}
          placeholder="Votre message (optionnel)"
          maxLength={500}
          rows={4}
          className={`${inputBase} resize-none`}
        />
        <p className="font-body text-caption text-sand/50 text-right">
          {form.message.length}/500
        </p>
      </div>

      {/* RGPD */}
      <label className="flex items-start gap-3 cursor-pointer mb-6">
        <input
          type="checkbox"
          checked={rgpd}
          onChange={(e) => {
            setRgpd(e.target.checked);
            blur('rgpd');
          }}
          disabled={status === 'submitting'}
          className="mt-1 w-5 h-5 rounded-sm border-sand/40 text-steel-blue focus:ring-steel-blue"
        />
        <span className="font-body text-body-sm leading-[1.6] text-linen/80">
          J&apos;accepte que mes données soient traitées par ARCHIPEL Foundation
          conformément à sa{' '}
          <a
            href="/politique-confidentialite"
            className="underline hover:text-linen transition-colors"
          >
            politique de confidentialité
          </a>
          . <span className="text-coeur">*</span>
        </span>
      </label>
      {errors.rgpd && (
        <p className="font-body text-caption text-coeur -mt-4 mb-4" role="alert">
          {errors.rgpd}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center px-8 py-4 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] active:scale-[0.98] transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Envoi en cours...
          </>
        ) : (
          'Envoyer ma demande'
        )}
      </button>

      {/* Erreur serveur */}
      {status === 'error' && (
        <div className="mt-4 rounded-lg p-4 bg-coeur/10">
          <p className="font-body text-body-sm text-linen">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        </div>
      )}
    </form>
  );
}
