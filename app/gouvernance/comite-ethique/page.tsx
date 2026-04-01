import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le Comité d\u2019Éthique',
  description:
    'Le Comité d\u2019Éthique d\u2019ARCHIPEL Foundation dispose d\u2019un droit de veto réel, inscrit dans les statuts. 9 membres indépendants.',
};

const PERIMETRES = [
  'Données de santé des membres',
  'Données des personnes accompagnées',
  'Périmètre d\u2019Iris (toute évolution soumise à validation)',
  'Cadre déontologique de La Guilde',
  'Partenariats impliquant des données de santé',
];

const COMPOSITION = [
  'Philosophe ou éthicien de la santé',
  'Expert IA et santé',
  'Médecin ou praticien de santé',
  'Juriste ou régulateur en droit de la santé',
  'Psychologue ou patient expert',
  'Économiste ou sociologue',
  'Représentant fondation ou ONG santé',
];

export default function ComiteEthiquePage() {
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
            <a href="/gouvernance" className="hover:text-sand transition-colors">Gouvernance</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Comité d&apos;Éthique</span>
          </nav>

          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
            Instance indépendante
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Comité d&apos;Éthique
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Il ne s&apos;agit pas d&apos;un comité consultatif. Il dispose
            d&apos;un droit de veto réel, inscrit dans les statuts.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Un veto absolu
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Le veto est inscrit dans les statuts d&apos;ARCHIPEL Foundation.
                Aucune décision dans les périmètres du Comité ne peut être prise
                sans son approbation — ni par la direction de la Fondation, ni
                par la SAS.
              </p>
              <p>
                Ce n&apos;est pas un pouvoir symbolique. C&apos;est un
                mécanisme de gouvernance conçu pour que la confiance des
                personnes accompagnées ne repose jamais sur la seule bonne
                volonté des dirigeants.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Périmètres d&apos;intervention
            </h2>
            <ul className="space-y-3">
              {PERIMETRES.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="text-coeur mt-1 shrink-0" aria-hidden="true">
                    &bull;
                  </span>
                  <span className="font-body text-body text-slate_f/80">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              9 membres indépendants
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Le Comité est composé de 9 membres indépendants, sans lien
                financier direct avec ARCHIPEL LIFE SAS. Chaque membre signe
                une Déclaration Publique d&apos;Intérêts conforme au cadre HAS.
              </p>
              <p>Profils recherchés :</p>
            </div>
            <ul className="mt-4 space-y-2">
              {COMPOSITION.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="text-steel-blue mt-1 shrink-0" aria-hidden="true">
                    &bull;
                  </span>
                  <span className="font-body text-body-sm text-slate_f/80">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Présidence
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80">
              En cours de désignation — personnalité indépendante sans lien avec
              ARCHIPEL LIFE SAS. La présidence sera annoncée dès confirmation.
            </p>
            <p className="font-body text-body-sm text-slate_f/50 italic mt-2">
              En cours de constitution. Profils publiés dès confirmation.
            </p>
          </div>

          <div className="pt-4">
            <Button variant="outline-light" href="/gouvernance">
              Retour à Gouvernance
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
