import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Iris, le compagnon de santé',
  description:
    'Iris est le compagnon IA d\u2019ARCHIPEL. Elle écoute, observe, relie, oriente et archive. Elle ne diagnostique pas, ne prescrit pas, ne remplace aucun professionnel.',
};

const FONCTIONNALITES = [
  {
    titre: 'Écoute',
    texte:
      'Iris est disponible 24h/24. Elle recueille vos observations, vos ressentis, vos questions. Elle se souvient de ce que vous lui confiez et construit, au fil du temps, une compréhension fine de votre parcours.',
  },
  {
    titre: 'Observation',
    texte:
      'Iris observe vos rythmes, vos habitudes, les signaux subtils que vous ne remarquez pas toujours. Elle identifie des patterns et les partage avec votre Sherpa pour enrichir l\u2019accompagnement.',
  },
  {
    titre: 'Liaison',
    texte:
      'Iris relie les informations entre vos différents praticiens, dans le respect de la confidentialité et avec votre consentement explicite. Elle est le fil conducteur de votre parcours coordonné.',
  },
  {
    titre: 'Orientation',
    texte:
      'Iris oriente vers les ressources et les praticiens de La Guilde adaptés à vos besoins identifiés. Elle propose, elle n\u2019impose jamais. La décision reste la vôtre et celle de vos professionnels de santé.',
  },
  {
    titre: 'Archivage',
    texte:
      'Iris archive l\u2019historique de votre parcours de manière sécurisée. Vos données vous appartiennent. Vous pouvez les consulter, les exporter ou les supprimer à tout moment.',
  },
  {
    titre: 'Silence intentionnel',
    texte:
      'Iris respecte vos rythmes et observe des périodes de silence intentionnel. Elle ne sollicite pas en permanence. Elle sait quand se taire. Ce silence est une fonctionnalité, pas un bug.',
  },
];

const REGLES_NON_SUBSTITUTION = [
  'Iris ne pose aucun diagnostic médical.',
  'Iris ne prescrit aucun traitement, médicament ou complément.',
  'Iris ne remplace aucun professionnel de santé, qu\u2019il soit conventionnel ou complémentaire.',
  'Iris ne prend aucune décision clinique. Elle informe, elle ne décide pas.',
];

export default function IrisPage() {
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
            <span className="text-sand">Iris</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Le compagnon IA
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Iris, votre compagnon de santé
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Iris écoute, observe, relie, oriente et archive. Elle se souvient.
            Elle augmente vos capacités de décision. Mais elle ne pose pas de
            diagnostic et ne prescrit rien.
          </p>
        </div>
      </Section>

      {/* Non-substitution */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <img src="/images/photo-iris.webp" alt="" className="w-full rounded-lg object-cover h-64 lg:h-80 mb-8" />
          <div className="bg-coeur/10 border border-coeur/20 rounded-lg p-6 lg:p-8 mb-12">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Iris n&apos;est pas un assistant médical
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-6">
              Conformément au EU AI Act et aux principes fondateurs
              d&apos;ARCHIPEL, Iris opère dans un cadre strict de
              non-substitution. Ces quatre règles sont inscrites dans la
              Constitution Iris, gardée par le Comité d&apos;Éthique.
            </p>
            <ul className="space-y-3">
              {REGLES_NON_SUBSTITUTION.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="text-coeur mt-1 shrink-0" aria-hidden="true">
                    &bull;
                  </span>
                  <span className="font-body text-body-sm text-slate_f/80">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fonctionnalités */}
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-8">
            Ce que fait Iris
          </h2>
          <div className="space-y-8">
            {FONCTIONNALITES.map((f) => (
              <div key={f.titre}>
                <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
                  {f.titre}
                </h3>
                <p className="font-body text-body leading-[1.6] text-slate_f/80">
                  {f.texte}
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
