import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Les 9 Principes Fondateurs — ARCHIPEL Foundation',
  description:
    'Inscrits dans la Charte Fondatrice v2.0, les 9 principes définissent ce qu\u2019ARCHIPEL s\u2019engage à faire et à ne jamais faire.',
};

const principles = [
  { id: '01', title: 'SANTÉ CO-CRÉÉE', text: "La santé n'est pas un service que l'on reçoit. C'est un processus que l'on co-construit avec les praticiens, les outils, ressources et services, et la communauté. La personne n'est jamais spectatrice de sa propre santé." },
  { id: '02', title: 'COORDINATION INTÉGRATIVE', text: "ARCHIPEL relie ce que le système fragmente. Elle coordonne, sans se substituer, les approches conventionnelles et complémentaires autour d'une vision unifiée de la personne." },
  { id: '03', title: 'HUMANITÉ CHALEUREUSE', text: "La technologie amplifie. Elle ne remplace pas. Chaque interaction ARCHIPEL, qu'elle implique Iris, un Sherpa ou un praticien de La Guilde, est conçue pour être humaine, digne et respectueuse." },
  { id: '04', title: 'RIGUEUR SCIENTIFIQUE', text: "ARCHIPEL ne promeut aucune approche sans base de preuve suffisante. Elle distingue rigoureusement données factuelles, estimations publiées et analyses qualitatives. L'opinion n'est jamais présentée comme un fait." },
  { id: '05', title: 'PROPRIÉTÉ DES DONNÉES', text: "Les données de santé appartiennent à la personne, et à elle seule. ARCHIPEL en est le gardien temporaire, jamais le propriétaire. Aucune exploitation commerciale de données individuelles n'est autorisée." },
  { id: '06', title: 'ACCESSIBILITÉ UNIVERSELLE', text: "La santé de qualité ne peut pas être un privilège. Le modèle économique d'ARCHIPEL, dans lequel le premium finance l'accessibilité, est une conséquence directe de ce principe, pas une posture marketing." },
  { id: '07', title: 'SANTÉ COMME BIEN COMMUN', text: "La santé est un bien commun, pas un marché. ARCHIPEL FOUNDATION agit en fondation de service : ses excédents sont réinvestis dans la mission, dans la recherche, dans l'accessibilité." },
  { id: '08', title: 'CONSTRUCTIVITÉ POSITIVE', text: "ARCHIPEL augmente l'écosystème de santé. Elle ne le critique pas. Elle ne concurrence pas : elle complète, elle relie, elle enrichit. Chaque partenariat est pensé comme un levier multiplicateur, jamais comme une substitution." },
  { id: '09', title: 'RYTHMES DU VIVANT', text: "La santé humaine s'inscrit dans les rythmes de la nature. ARCHIPEL reconnaît que les cycles circadiens, les saisons, et la relation au vivant sont des déterminants de santé au même titre que les comportements individuels. Toute approche qui déconnecte la personne de son environnement naturel est structurellement incomplète. ARCHIPEL conçoit ses parcours, ses outils et ses recommandations en cohérence avec les rythmes du vivant, pas contre eux." },
];

export default function NeufPrincipesPage() {
  return (
    <>
      {/* HERO */}
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60"
          >
            <Link
              href="/mission"
              className="hover:text-sand transition-colors"
            >
              &larr; Notre Mission
            </Link>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Charte Fondatrice v2.0
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Les 9 Principes Fondateurs
          </h1>
          <p className="font-body text-body leading-[1.6] text-linen/70 max-w-2xl">
            Ces neuf engagements définissent ce qu&apos;ARCHIPEL s&apos;oblige
            à faire et ce à quoi elle renonce.
          </p>
        </div>
      </Section>

      {/* PRINCIPES */}
      <Section variant="linen" padding="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {principles.map((p) => (
            <article key={p.id} className="flex flex-col">
              <span className="font-label text-[2.5rem] leading-none text-sand/50 mb-3">
                {p.id}
              </span>
              <h2 className="font-heading text-h3 uppercase tracking-[-0.02em] text-slate_f mb-3">
                {p.title}
              </h2>
              <p className="font-body text-body leading-relaxed text-slate_f/75">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* FOOTER CTA */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-body italic leading-[1.6] text-linen/70 mb-8">
            La Charte Fondatrice est publique, opposable, et gardée par le
            Comité d&apos;Éthique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/gouvernance/charte">
              Lire la Charte intégrale
            </Button>
            <Button variant="secondary" href="/mission">
              Retour à Notre Mission
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
