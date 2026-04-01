'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function GuildeForm() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    profession: '',
    ville: '',
    specialites: '',
    motivation: '',
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
  if (touched.profession && form.profession.length < 2)
    errors.profession = 'Minimum 2 caractères';
  if (touched.ville && form.ville.length < 2) errors.ville = 'Minimum 2 caractères';
  if (touched.specialites && form.specialites.length < 2)
    errors.specialites = 'Minimum 2 caractères';
  if (touched.motivation && form.motivation.length < 20)
    errors.motivation = 'Minimum 20 caractères';
  if (touched.rgpd && !rgpd) errors.rgpd = 'Consentement requis';

  const isValid =
    form.prenom.length >= 2 &&
    form.nom.length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.profession.length >= 2 &&
    form.ville.length >= 2 &&
    form.specialites.length >= 2 &&
    form.motivation.length >= 20 &&
    rgpd;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({
      prenom: true,
      nom: true,
      email: true,
      profession: true,
      ville: true,
      specialites: true,
      motivation: true,
      rgpd: true,
    });
    if (!isValid) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'praticien',
          ...form,
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
            Candidature envoyée ! Nous vous recontacterons sous 15 jours.
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
      {/* Prénom / Nom */}
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
            <p className="font-body text-caption text-coeur" role="alert">{errors.prenom}</p>
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
            <p className="font-body text-caption text-coeur" role="alert">{errors.nom}</p>
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
          <p className="font-body text-caption text-coeur" role="alert">{errors.email}</p>
        )}
      </div>

      {/* Profession / Ville */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
            Profession <span className="text-coeur">*</span>
          </label>
          <input
            type="text"
            value={form.profession}
            onChange={(e) => update('profession', e.target.value)}
            onBlur={() => blur('profession')}
            disabled={status === 'submitting'}
            placeholder="Profession"
            aria-invalid={!!errors.profession}
            className={`${inputBase} ${fieldClass('profession', form.profession.length >= 2)}`}
          />
          {errors.profession && (
            <p className="font-body text-caption text-coeur" role="alert">{errors.profession}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
            Ville <span className="text-coeur">*</span>
          </label>
          <input
            type="text"
            value={form.ville}
            onChange={(e) => update('ville', e.target.value)}
            onBlur={() => blur('ville')}
            disabled={status === 'submitting'}
            placeholder="Ville"
            aria-invalid={!!errors.ville}
            className={`${inputBase} ${fieldClass('ville', form.ville.length >= 2)}`}
          />
          {errors.ville && (
            <p className="font-body text-caption text-coeur" role="alert">{errors.ville}</p>
          )}
        </div>
      </div>

      {/* Spécialité(s) */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
          Spécialité(s) <span className="text-coeur">*</span>
        </label>
        <input
          type="text"
          value={form.specialites}
          onChange={(e) => update('specialites', e.target.value)}
          onBlur={() => blur('specialites')}
          disabled={status === 'submitting'}
          placeholder="Vos spécialités"
          aria-invalid={!!errors.specialites}
          className={`${inputBase} ${fieldClass('specialites', form.specialites.length >= 2)}`}
        />
        {errors.specialites && (
          <p className="font-body text-caption text-coeur" role="alert">{errors.specialites}</p>
        )}
      </div>

      {/* Motivation */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-label text-label uppercase tracking-[0.08em] text-linen">
          Pourquoi souhaitez-vous rejoindre La Guilde ? <span className="text-coeur">*</span>
        </label>
        <textarea
          value={form.motivation}
          onChange={(e) => update('motivation', e.target.value)}
          onBlur={() => blur('motivation')}
          disabled={status === 'submitting'}
          placeholder="Votre motivation (min. 20 caractères)"
          maxLength={1000}
          rows={5}
          aria-invalid={!!errors.motivation}
          className={`${inputBase} resize-none ${fieldClass('motivation', form.motivation.length >= 20)}`}
        />
        <p className="font-body text-caption text-sand/50 text-right">
          {form.motivation.length}/1000
        </p>
        {errors.motivation && (
          <p className="font-body text-caption text-coeur" role="alert">{errors.motivation}</p>
        )}
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
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          'Envoyer ma candidature'
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
