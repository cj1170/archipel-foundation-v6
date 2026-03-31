import type { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';
import PioneerForm from '@/components/PioneerForm';

export const metadata: Metadata = {
  title: 'ARCHIPEL Foundation — Réinventer la santé. Pour qu\'elle dure.',
  description:
    'ARCHIPEL Foundation est un fonds de dotation en création, dédié à la santé préventive et intégrative fondée sur la Salutogénèse.',
  openGraph: {
    images: [{ url: '/og/accueil.jpg', width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="hero" className="min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Picto Foundation */}
          <img
            src="/images/picto-foundation.png"
            alt=""
            aria-hidden="true"
            className="w-32 h-32 lg:w-48 lg:h-48 mb-4"
          />

          {/* Triptyque */}
          <span className="font-label text-body-sm lg:text-body uppercase tracking-[0.12em] text-sand mb-6">
            SOIGNER • RELIER • TRANSFORMER
          </span>

          {/* Accroche */}
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-2">
            La santé se crée. Ensemble.
          </h1>
          <p className="font-heading text-h3 lg:text-h1 tracking-[-0.02em] text-linen/70 mb-8">
            Elle ne se subit pas. Seul·e.
          </p>

          {/* Sous-titre */}
          <p className="font-body text-body lg:text-h4 text-sand max-w-2xl mb-10">
            Vous voulez créer les conditions de votre santé ?
            Nous avons construit l&apos;espace pour le faire.
          </p>

          {/* CTA */}
          <Button variant="accent" size="lg" href="#pionniers">
            Rejoindre les pionniers
          </Button>

          {/* Indicateur de scroll */}
          <div className="mt-8 animate-bounce">
            <svg
              className="w-6 h-6 text-sand/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — LE CONSTAT
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Colonne chiffre — mobile first */}
          <div className="lg:col-span-2 lg:order-last self-center bg-slate_f rounded-lg p-8 text-center">
            <span className="font-heading text-hero text-sand block mb-2">76%</span>
            <p className="font-body text-body text-linen/80 mb-4">
              des personnes interrogées gèrent seules la coordination de leur santé.
            </p>
            <p className="font-body text-caption text-sand/60">
              Enquête ARCHIPEL Foundation, 2025, 662 répondants.
            </p>
          </div>

          {/* Colonne texte */}
          <div className="lg:col-span-3">
            <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
              Le constat
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
              Personne ne relie les points de votre santé.
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-4">
              Vous avez un médecin pour chaque organe. Un spécialiste pour chaque symptôme.
              Un praticien pour chaque douleur. Mais qui voit l&apos;ensemble ? Qui relie votre
              sommeil à votre alimentation, votre stress à votre dos, votre histoire à vos
              signaux d&apos;aujourd&apos;hui ?
            </p>
            <p className="font-body text-body leading-[1.6] text-slate_f/80">
              Le système de santé est conçu pour intervenir quand vous êtes malade.
              Pas pour créer les conditions de votre santé quand tout semble encore aller
              ou que vos symptômes ne correspondent pas à la connaissance du spécialiste.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — LA RÉPONSE
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Golden quote */}
          <blockquote className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-12 max-w-3xl">
            Le médecin
            <br />
            est le confident de la maladie.
            <br />
            <span className="text-sand">ARCHIPEL</span>
            <br />
            <span className="text-sand">est le confident de la santé.</span>
          </blockquote>

          {/* Séparateur */}
          <div className="w-16 h-px bg-sand/40 mb-12" />

          {/* Salutogénèse */}
          <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
            La Salutogénèse
          </span>
          <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen mb-6">
            La science de ce qui crée la santé.
          </h2>

          {/* Visuel T•C•C — placeholder en attendant le composant DotsTCC */}
          <div className="my-8 lg:my-12 flex items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-tete" />
              <span className="font-label text-caption uppercase tracking-[0.08em] text-tete">Tête</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-coeur" />
              <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">Cœur</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-corps" />
              <span className="font-label text-caption uppercase tracking-[0.08em] text-corps">Corps</span>
            </div>
          </div>

          <p className="font-body text-body leading-[1.6] text-linen/80 max-w-2xl">
            Fondée en 1979 par Aaron Antonovsky, la Salutogénèse étudie ce qui construit la
            santé, là où la médecine conventionnelle étudie ce qui crée la maladie. ARCHIPEL
            en fait le socle de son approche : créer les conditions de votre santé, pas
            seulement traiter vos symptômes.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — CE QUE NOUS CONSTRUISONS
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
            Ce que nous construisons
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Un modèle à deux corps.
          </h2>
          <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-10">
            ARCHIPEL Foundation supervise le développement d&apos;un service de santé préventive
            opéré par ARCHIPEL LIFE, sa structure opérationnelle.
          </p>

          {/* Card Foundation */}
          <Card
            variant="principe"
            title="ARCHIPEL Foundation"
            label="Fonds de dotation en création"
            description="La mission, l'éthique, la recherche. Fonds de dotation en création, futur Fondation d'utilité publique. Aucun intérêt commercial."
          />

          {/* Connecteur visuel */}
          <div className="flex flex-col items-center py-1">
            <div className="w-px h-12 bg-sand/40" />
            <span className="font-label text-caption uppercase tracking-[0.12em] text-sand py-2">
              supervise &amp; finance
            </span>
            <div className="w-px h-12 bg-sand/40" />
          </div>

          {/* Card Life */}
          <Card
            variant="feature"
            title="ARCHIPEL LIFE"
            label="SAS en cours de création"
            description="Le service opérationnel. Iris, les Sherpas, La Guilde, le parcours Odyssea. SAS à mission dont les résultats financent la Fondation."
          />
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — LES PREUVES DE SÉRIEUX
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="default">
        <div className="text-center mb-12">
          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
            Nos engagements
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
            La gouvernance d&apos;une fondation qui veut durer.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <Card
            variant="feature"
            onDark
            title="Comité d'Éthique"
            description="9 membres indépendants. Droit de veto absolu sur toute décision stratégique, technologique ou opérationnelle."
          />
          <Card
            variant="feature"
            onDark
            title="Comité Interdisciplinaire d'Expertise Scientifique (CIES)"
            description="9 membres, présidé par le Chief Medical Officer. Garant de la rigueur scientifique."
          />
          <Card
            variant="feature"
            onDark
            title="9 Principes Fondateurs"
            description="Inscrits dans la Charte Fondatrice v2.0. Ils définissent ce qu'ARCHIPEL s'engage à faire et à ne jamais faire."
            href="/mission/9-principes"
          />
        </div>

        <p className="font-body text-body-sm text-sand/70 text-center max-w-2xl mx-auto mb-8">
          Fondée sur la Salutogénèse (Antonovsky, 1979). Éclairée par les dernières recherches
          (Shenhar et al., <em>Science</em>, janvier 2026 : environ 50% des facteurs de santé
          sont modifiables).
        </p>

        <div className="text-center">
          <Button variant="secondary" href="/gouvernance">
            Découvrir notre gouvernance
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — TRIPLE CTA
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default" id="pionniers">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f">
            Trouvez votre place dans l&apos;archipel.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <Card
            variant="cta"
            title="Soutenir ARCHIPEL"
            description="Vous croyez qu'un autre rapport à la santé est possible ? Rejoignez les fondateurs."
            href="/soutenir"
            ctaLabel="Soutenir"
          >
            {/* Icône cœur */}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </Card>
          <Card
            variant="cta"
            title="Rejoindre La Guilde"
            description="Vous êtes praticien de santé ? Intégrez un réseau de coordination sans précédent."
            href="/guilde"
            ctaLabel="Candidater"
          >
            {/* Icône réseau */}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </Card>
          <Card
            variant="cta"
            title="Rejoindre les pionniers"
            description="Vous voulez être parmi les premiers à vivre l'approche ARCHIPEL ?"
            ctaLabel="S'inscrire"
            href="#pionniers-form"
          >
            {/* Icône fusée */}
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </Card>
        </div>

        {/* Formulaire Pionniers */}
        <div className="mt-8 max-w-md mx-auto" id="pionniers-form">
          <PioneerForm variant="on-light" />
        </div>
      </Section>
    </>
  );
}
