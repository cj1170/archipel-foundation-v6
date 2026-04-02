import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le Cadre Déontologique',
  description:
    'Le cadre déontologique de La Guilde ARCHIPEL : 4 principes non négociables, un serment commun, la primauté médicale inscrite dans le cadre.',
};

const PRINCIPES = [
  {
    titre: 'Primauté décisionnelle médicale',
    formulation:
      'En cas de désaccord clinique, le médecin a primauté décisionnelle. Ce principe est non négociable. Il protège le praticien complémentaire autant que le patient.',
    application:
      'Chaque praticien de La Guilde signe ce principe lors de son admission. Le gradient clinique est formalisé dans les protocoles de coordination.',
  },
  {
    titre: 'Transparence et information',
    formulation:
      'ARCHIPEL informe les personnes accompagnées du niveau de preuve de chaque approche proposée. Sans jugement. La confiance se construit sur la transparence, pas sur l\u2019opacité.',
    application:
      'Iris affiche systématiquement le niveau de preuve. Les praticiens s\u2019engagent à communiquer ouvertement sur les limites de leur pratique.',
  },
  {
    titre: 'Coordination inter-praticiens',
    formulation:
      'Les désaccords circulent entre praticiens, pas vers le patient. Le patient ne porte pas les divergences de ses soignants. Les échanges sont documentés et archivés.',
    application:
      'Iris facilite la communication entre praticiens. Les divergences sont traitées en coordination, avec l\u2019arbitrage du gradient clinique si nécessaire.',
  },
  {
    titre: 'Formation continue',
    formulation:
      'Chaque praticien de La Guilde s\u2019engage dans un processus de formation continue. Entretien annuel devant le CIES. Accès à l\u2019ARCHIPEL Academia.',
    application:
      'La certification n\u2019est pas un acquis définitif. Elle se maintient par l\u2019engagement continu dans le cadre déontologique et la formation.',
  },
];

export default function DeontologiePage() {
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
            <a href="/guilde" className="hover:text-sand transition-colors">La Guilde</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Cadre Déontologique</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Le cadre
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Cadre Déontologique
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Un cadre clair, pas une charte de bons sentiments. Quatre principes
            non négociables et un serment commun.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* 4 principes */}
          <div>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-8">
              Quatre principes. Non négociables.
            </h2>
            <div className="space-y-8">
              {PRINCIPES.map((p, i) => (
                <div
                  key={p.titre}
                  className="border-b border-sand/20 pb-8"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-heading text-h2 tracking-[-0.02em] text-sand">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
                      {p.titre}
                    </h3>
                  </div>
                  <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-3">
                    {p.formulation}
                  </p>
                  <p className="font-body text-body-sm text-steel-blue italic">
                    {p.application}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Le Serment */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Le Serment
            </h2>
            <div className="bg-slate_f text-linen rounded-lg p-6 lg:p-8">
              <p className="font-body text-body leading-[1.6] text-linen/80">
                La Guilde repose sur un Serment — une promesse envers vos
                patients, les personnes accompagnées, vos pairs, les autres
                soignants, votre propre intégrité professionnelle — et la santé
                comme bien commun. Vous en prendrez connaissance lors de la
                Rencontre (étape 2 du processus de candidature).
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="outline-light" href="/guilde">
              Retour à La Guilde
            </Button>
            <Button variant="outline-light" href="/guilde/candidature">
              Processus de candidature
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
