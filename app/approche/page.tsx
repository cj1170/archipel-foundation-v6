import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Notre Approche',
  description:
    'L\u2019approche ARCHIPEL repose sur le cadre TÊTE\u2022CŒUR\u2022CORPS + MILIEU, un compagnon IA (Iris), des Sherpas humains et La Guilde de praticiens certifiés.',
  openGraph: {
    images: [{ url: '/images/og-approche.jpg', width: 1200, height: 630 }],
  },
};

const ARKE_DIMENSIONS = [
  'Médicale',
  'Fonctionnelle',
  'Psychologique',
  'Comportementale',
  'Contexte biographique',
  'Milieu de vie',
];

export default function ApprochePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO APPROCHE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="hero" className="relative overflow-hidden">
        <img src="/images/hero-approche.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-slate_f/25" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-6 block">
            Notre approche
          </span>

          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Créer les conditions de votre santé.
          </h1>

          <p className="font-body text-h4 text-linen/70">
            Un compagnon IA. Des coachs humains. Un réseau de praticiens
            coordonnés. Un parcours sur-mesure. Et vous, au centre.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — LE CADRE TÊTE•CŒUR•CORPS + MILIEU
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Visuel — à gauche */}
          <div className="flex items-center justify-center">
            <img src="/images/schema-tcc-milieu-complet.svg" alt="Cadre TÊTE•CŒUR•CORPS + MILIEU — Iris, Les Sherpas, La Guilde" className="w-full max-w-lg mx-auto" />
          </div>

          {/* Texte — à droite */}
          <div>
            <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-steel-blue mb-4 block">
              Le cadre
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
              TÊTE&bull;CŒUR&bull;CORPS : trois dimensions, un même être.
            </h2>
            <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
              <p>
                La santé se construit dans la cohérence entre la dimension
                cognitive et mentale (TÊTE), la dimension émotionnelle et
                relationnelle (CŒUR), et la dimension physique et corporelle
                (CORPS). Aucune ne peut être traitée isolément sans réduire
                l&apos;efficacité du tout.
              </p>
              <p>
                Ces trois dimensions s&apos;enracinent dans un MILIEU : vos
                rythmes circadiens, votre relation à la nature, la qualité de
                votre cadre de vie, les saisons qui rythment votre existence. Le
                MILIEU n&apos;est pas un quatrième pilier. Il est le sol dans
                lequel tout s&apos;enracine.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — LES TROIS PILIERS DE L'ÉCOSYSTÈME
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default">
        <div className="text-center mb-12">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-tete mb-4 block">
            L&apos;écosystème
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
            Trois piliers. Un seul parcours.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card Iris */}
          <div className="bg-linen rounded-lg p-6 lg:p-8 flex flex-col">
            <img src="/images/icon-iris.svg" alt="Iris" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              <span className="font-bold">Iris</span><br />votre compagnon de santé
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-6 flex-1">
              Iris est votre compagnon IA, disponible 24h/24. Elle écoute,
              observe, relie, oriente et archive. Elle se souvient et augmente
              vos décisions comme celles de votre Sherpa pour construire
              votre parcours sur-mesure. Elle respecte vos rythmes et
              observe des périodes de silence intentionnel. Mais elle ne pose pas
              de diagnostic, ne prescrit rien, ne remplace aucun professionnel
              de santé.
            </p>
            <a
              href="/approche/iris"
              className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors"
            >
              Découvrir Iris &rarr;
            </a>
          </div>

          {/* Card Sherpas */}
          <div className="bg-linen rounded-lg p-6 lg:p-8 flex flex-col">
            <img src="/images/icon-sherpas.svg" alt="Les Sherpas" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              <span className="font-bold">Les Sherpas</span><br />le lien humain
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-6 flex-1">
              Des coachs santé formés et certifiés qui vous accompagnent dans la
              durée. Le Sherpa observe vos rythmes, écoute votre histoire, lit
              les signaux subtils et les non-dits, propose des ajustements, et
              reste votre premier interlocuteur humain dans le parcours.
            </p>
            <a
              href="/approche/sherpas"
              className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors"
            >
              Découvrir les Sherpas &rarr;
            </a>
          </div>

          {/* Card Guilde */}
          <div className="bg-linen rounded-lg p-6 lg:p-8 flex flex-col">
            <img src="/images/icon-guilde.svg" alt="La Guilde" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              <span className="font-bold">La Guilde</span><br />la coordination
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-6 flex-1">
              Un réseau de praticiens certifiés, coordonnés par Iris et les
              Sherpas, avec primauté décisionnelle médicale. Médecins,
              ostéopathes, naturopathes, psychologues, coachs : chaque praticien
              voit l&apos;ensemble et défend une approche intégrative basée sur
              le lien et la co-construction de votre parcours de santé.
            </p>
            <a
              href="/guilde"
              className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors"
            >
              Découvrir La Guilde &rarr;
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — LE PARCOURS ODYSSEA
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-steel-blue mb-4 block">
              Le parcours
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
              Odyssea : un parcours en spirale, pas une ligne droite.
            </h2>
            <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
              <p>
                Le parcours Odyssea relie Iris, les Sherpas et La Guilde en un
                parcours de transformation mesurable. Il alterne des phases
                d&apos;activation avec des phases de consolidation, adaptées à
                vos rythmes et à vos saisons.
              </p>
              <p>
                Tout commence par ARKÉ, le bilan d&apos;entrée. Six dimensions
                évaluées : médicale, fonctionnelle, psychologique,
                comportementale, contexte biographique, et milieu de vie.
              </p>
              <p>
                Le parcours Odyssea se construit selon vos besoins, tout au long
                de votre vie. Iris et votre Sherpa orchestrent les services et
                vous accompagnent auprès des praticiens, selon vos objectifs.
              </p>
            </div>

            {/* 6 dimensions ARKÉ */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ARKE_DIMENSIONS.map((dim) => (
                <span
                  key={dim}
                  className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue bg-steel-blue/10 px-3 py-2 rounded-sm text-center"
                >
                  {dim}
                </span>
              ))}
            </div>

            <a
              href="/approche/odyssea"
              className="inline-block mt-8 font-label text-label uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors"
            >
              Découvrir le parcours Odyssea &rarr;
            </a>
          </div>

          {/* Schéma spirale Odyssea */}
          <div className="order-first lg:order-last">
            <img src="/images/schema-odyssea-le-parcours.svg" alt="Parcours Odyssea — spirale en 4 phases avec les 6 dimensions ARKÉ" className="w-full max-w-2xl mx-auto" />
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — CTA APPROCHE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-8">
            Vous voulez être parmi les premiers à vivre cette approche ?
          </h2>

          <Button variant="accent" size="lg" href="/#pionniers">
            Rejoindre les pionniers
          </Button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/approche/fondements"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Fondements Scientifiques &rarr;
            </a>
            <a
              href="/approche/iris"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Iris, le compagnon de santé &rarr;
            </a>
            <a
              href="/approche/sherpas"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Les Sherpas &rarr;
            </a>
            <a
              href="/approche/odyssea"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Le Parcours Odyssea &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
