import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le CIES — Comité Interdisciplinaire d\u2019Expertise Scientifique',
  description:
    'Le CIES est délibérément logé dans la Fondation. Présidé par le CMedO, il supervise Iris, La Guilde, les parcours et la recherche.',
};

const DOMAINES = [
  {
    titre: 'Parcours de soin individualisés',
    desc: 'Revue et validation des protocoles de parcours. Le CIES s\u2019assure que chaque parcours respecte le cadre scientifique et déontologique.',
  },
  {
    titre: 'Cadre opérationnel et supervision d\u2019Iris',
    desc: 'Toute évolution du périmètre d\u2019Iris est soumise à validation du CIES avant d\u2019être présentée au Comité d\u2019Éthique. Le CIES évalue la pertinence scientifique.',
  },
  {
    titre: 'Admission La Guilde',
    desc: 'Le CIES définit les critères d\u2019admission des praticiens et évalue les candidatures. C\u2019est un processus continu, pas une validation ponctuelle.',
  },
  {
    titre: 'Partenariats recherche',
    desc: 'Évaluation des propositions de partenariats de recherche. Le CIES s\u2019assure de l\u2019indépendance scientifique et de la pertinence des projets financés.',
  },
  {
    titre: 'Révision déontologique',
    desc: 'Revue périodique du cadre déontologique de La Guilde. Entretien annuel des Sherpas pour maintien de certification.',
  },
];

export default function CiesPage() {
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
            <span className="text-sand">Le CIES</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Expertise scientifique
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Comité Interdisciplinaire d&apos;Expertise Scientifique
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Le CIES est délibérément logé dans la Fondation — et non dans la SAS
            opérationnelle. Un comité médical intégré à une structure commerciale
            expose les experts à un risque déontologique réel.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Pourquoi dans la Fondation
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Un comité scientifique logé dans une structure commerciale est
                structurellement exposé aux conflits d&apos;intérêts. Les
                experts risquent de voir leurs recommandations infléchies par
                des impératifs de rentabilité.
              </p>
              <p>
                En logeant le CIES dans la Fondation, ARCHIPEL garantit son
                indépendance. Le CIES répond au Conseil de Fondation, pas à la
                direction opérationnelle. Ses recommandations sont publiques.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Présidence
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80">
              Dr Anne-Sophie Darrigade, CMedO. Responsable du cadre médical et
              scientifique, de la qualité clinique, et de la supervision de La
              Guilde et des recherches financées par la Fondation. Également
              CMedO d&apos;ARCHIPEL LIFE.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-8">
              Domaines d&apos;intervention
            </h2>
            <div className="space-y-6">
              {DOMAINES.map((d) => (
                <div key={d.titre} className="border-b border-sand/20 pb-6">
                  <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-2">
                    {d.titre}
                  </h3>
                  <p className="font-body text-body-sm leading-[1.6] text-slate_f/70">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Composition
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                9 membres indépendants : experts en santé publique, spécialistes
                médecine conventionnelle et réglementée, experts approches
                innovantes, méthodologiste/statisticien/économiste, usagers et
                patients experts.
              </p>
              <p>
                Déclaration Publique d&apos;Intérêts obligatoire, conforme HAS.
                Aucun lien financier direct avec ARCHIPEL LIFE SAS.
              </p>
            </div>
            <p className="font-body text-body-sm text-slate_f/50 italic mt-4">
              Profils publiés dès confirmation.
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
