import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le Parcours Odyssea',
  description:
    'Odyssea est le parcours de transformation ARCHIPEL. En spirale, pas en ligne droite. 6 dimensions ARKÉ, 4 phases, adapté à vos rythmes.',
};

const ARKE_DIMENSIONS = [
  { nom: 'Médicale', desc: 'Antécédents, traitements en cours, bilans biologiques.' },
  { nom: 'Fonctionnelle', desc: 'Sommeil, alimentation, mouvement, énergie quotidienne.' },
  { nom: 'Psychologique', desc: 'Stress, anxiété, estime de soi, résilience.' },
  { nom: 'Comportementale', desc: 'Habitudes, addictions, routines, écrans.' },
  { nom: 'Contexte biographique', desc: 'Histoire de vie, événements marquants, trajectoire.' },
  { nom: 'Milieu de vie', desc: 'Environnement, rythmes circadiens, relation à la nature, cadre.' },
];

const PHASES = [
  {
    nom: 'ARKÉ — Le bilan d\u2019entrée',
    desc: 'Évaluation complète sur 6 dimensions. Le point de départ objectif de votre parcours. Réalisé avec votre Sherpa, informé par Iris.',
  },
  {
    nom: 'Activation',
    desc: 'Phase d\u2019exploration et d\u2019ajustements. Vous testez, vous découvrez, vous progressez. Iris et votre Sherpa orchestrent les services de La Guilde selon vos besoins.',
  },
  {
    nom: 'Consolidation',
    desc: 'Phase d\u2019intégration et de stabilisation. Vous intégrez ce qui fonctionne, vous stabilisez vos acquis, vous vous reposez. Le rythme ralentit intentionnellement.',
  },
  {
    nom: 'Évolution',
    desc: 'La spirale reprend. De nouveaux objectifs émergent, de nouvelles dimensions s\u2019ouvrent. Le parcours se construit tout au long de votre vie, selon vos saisons.',
  },
];

export default function OdysseaPage() {
  return (
    <>
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60"
          >
            <a href="/" className="hover:text-sand transition-colors">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/approche" className="hover:text-sand transition-colors">Approche</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Odyssea</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Le parcours
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Odyssea : un parcours en spirale, pas une ligne droite
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Odyssea alterne des phases d&apos;activation et de consolidation,
            adaptées à vos rythmes et à vos saisons.
          </p>
        </div>
      </Section>

      {/* Placeholder spirale */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <img src="/images/schema-odyssea-le-parcours.svg" alt="Parcours Odyssea — spirale en 4 phases avec les 6 dimensions ARKÉ" className="w-full max-w-2xl mx-auto mb-12" />

          {/* 6 dimensions ARKÉ */}
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Les 6 dimensions ARKÉ
          </h2>
          <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-8">
            Tout commence par ARKÉ, le bilan d&apos;entrée. Six dimensions
            évaluées pour construire une photographie complète de votre point de
            départ.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {ARKE_DIMENSIONS.map((d) => (
              <div
                key={d.nom}
                className="bg-steel-blue/10 rounded-lg p-5"
              >
                <h3 className="font-heading text-h4 tracking-[-0.02em] text-slate_f mb-1">
                  {d.nom}
                </h3>
                <p className="font-body text-body-sm text-slate_f/70">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 phases */}
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Les 4 phases du parcours
          </h2>
          <div className="space-y-6">
            {PHASES.map((p, i) => (
              <div
                key={p.nom}
                className="bg-slate_f text-linen rounded-lg p-6 lg:p-8"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-heading text-h2 tracking-[-0.02em] text-sand">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-h3 tracking-[-0.02em] text-linen">
                    {p.nom}
                  </h3>
                </div>
                <p className="font-body text-body-sm leading-[1.6] text-linen/80">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="outline-light" href="/approche">
              Retour à Notre Approche
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
