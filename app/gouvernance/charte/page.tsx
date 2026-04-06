import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'La Charte Fondatrice',
  description:
    'La Charte Fondatrice est le document de rang suprême d\u2019ARCHIPEL Foundation. 9 articles, publique, opposable, gardée par le Comité d\u2019Éthique.',
};

const ARTICLES = [
  { titre: 'Objet et mission', resume: 'Définit la raison d\u2019être d\u2019ARCHIPEL Foundation : créer les conditions d\u2019une santé préventive, coordonnée et accessible.' },
  { titre: 'Philosophie', resume: 'Inscrit la Salutogénèse et le cadre TÊTE\u2022CŒUR\u2022CORPS + MILIEU comme fondements philosophiques de la Fondation.' },
  { titre: 'Les 9 Principes Fondateurs', resume: 'Énonce les neuf engagements irréductibles qui guident chaque décision d\u2019ARCHIPEL Foundation.' },
  { titre: 'Écosystème', resume: 'Décrit l\u2019architecture à deux corps (Foundation + LIFE) et les mécanismes de coordination entre les entités.' },
  { titre: 'Engagements envers les bénéficiaires', resume: 'Formalise les engagements de non-substitution, de transparence, de propriété des données et d\u2019accessibilité.' },
  { titre: 'Gouvernance', resume: 'Établit les quatre instances (Conseil, Comité d\u2019Éthique, CIES, Direction) et leurs périmètres respectifs.' },
  { titre: 'Comité d\u2019Éthique', resume: 'Inscrit le droit de veto absolu du Comité d\u2019Éthique dans les statuts. Définit ses périmètres d\u2019intervention.' },
  { titre: 'Corpus Normatif', resume: 'Établit la hiérarchie normative : Charte (suprême) > Constitutions > Codes > Décrets. En cas de conflit, la norme supérieure prévaut.' },
  { titre: 'Clause de Pérennité', resume: 'ARCHIPEL Foundation est construite pour survivre à ses fondateurs. Chaque rôle a un titulaire et un relais identifié.' },
];

export default function ChartePage() {
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
            <span className="text-sand">Charte Fondatrice</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Document fondateur
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-3">
            La Charte Fondatrice
          </h1>
          <p className="font-label text-caption uppercase tracking-[0.08em] text-sand/60 mb-6">
            Charte Fondatrice v2.0 — avril 2026
          </p>
          <p className="font-body text-h4 text-linen/70">
            Le document de rang suprême d&apos;ARCHIPEL Foundation. Publique,
            opposable, gardée par le Comité d&apos;Éthique. Toute décision
            d&apos;ARCHIPEL doit lui être conforme.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-12">
            La Charte Fondatrice définit la mission, la philosophie,
            l&apos;écosystème, les engagements envers les bénéficiaires, et les
            9 principes fondateurs. Elle est organisée en 9 articles.
          </p>

          <div className="space-y-6">
            {ARTICLES.map((a, i) => (
              <div
                key={a.titre}
                className="border-b border-sand/20 pb-6"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-heading text-h3 tracking-[-0.02em] text-sand">
                    {i + 1}
                  </span>
                  <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
                    {a.titre}
                  </h2>
                </div>
                <p className="font-body text-body-sm leading-[1.6] text-slate_f/70 ml-12">
                  {a.resume}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" href="/mission/9-principes">
              Les 9 Principes Fondateurs
            </Button>
            <Button variant="outline-light" href="/gouvernance">
              Retour à Gouvernance
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
