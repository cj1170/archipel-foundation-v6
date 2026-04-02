import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le Parcours Diagnosis',
  description:
    'Diagnosis est le parcours structuré d\u2019évaluation initiale ARCHIPEL. Un questionnaire en 20 questions, 4 phases pour construire votre profil de santé.',
};

const PHASES = [
  {
    nom: 'Questionnaire initial',
    desc: '20 questions structurées couvrant les 6 dimensions ARKÉ. Remplissable en ligne, guidé par Iris. Durée estimée : 15-20 minutes. Les réponses alimentent directement votre profil de santé.',
  },
  {
    nom: 'Analyse croisée',
    desc: 'Iris croise vos réponses avec les patterns observés dans l\u2019écosystème (anonymisés). Elle identifie des convergences, des zones d\u2019attention, des pistes d\u2019exploration. Aucun diagnostic médical n\u2019est posé.',
  },
  {
    nom: 'Entretien Sherpa',
    desc: 'Votre Sherpa reprend les résultats de l\u2019analyse avec vous. Il contextualise, nuance, approfondit ce que le questionnaire ne peut pas capter : les non-dits, le ressenti, l\u2019histoire derrière les chiffres.',
  },
  {
    nom: 'Plan de parcours',
    desc: 'Ensemble, vous et votre Sherpa définissez les priorités, les objectifs et les premières actions. Le plan est vivant : il évolue avec vous, au rythme du parcours Odyssea.',
  },
];

export default function DiagnosisPage() {
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
            <span className="text-sand">Diagnosis</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Évaluation initiale
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Parcours Diagnosis
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Un parcours structuré d&apos;évaluation initiale. 20 questions, 4
            phases, pour construire la photographie de votre point de départ.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4 mb-12">
            <p>
              Avant de construire un parcours, il faut comprendre d&apos;où
              l&apos;on part. Diagnosis est la porte d&apos;entrée structurée de
              l&apos;écosystème ARCHIPEL. Ce n&apos;est pas un diagnostic
              médical — c&apos;est une évaluation multidimensionnelle qui
              couvre les 6 dimensions ARKÉ.
            </p>
            <p>
              Le questionnaire de 20 questions a été conçu pour être accessible,
              non-intrusif, et suffisamment riche pour alimenter une première
              analyse par Iris et un premier entretien avec votre Sherpa.
            </p>
          </div>

          {/* 4 phases */}
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-8">
            Les 4 phases
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

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="outline-light" href="/approche">
              Retour à Notre Approche
            </Button>
            <Button variant="outline-light" href="/approche/odyssea">
              Découvrir le parcours Odyssea
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
