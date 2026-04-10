import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';
import GuildeForm from './GuildeForm';

export const metadata: Metadata = {
  title: 'La Guilde',
  description:
    'La Guilde ARCHIPEL réunit des praticiens de santé engagés dans une coordination intégrative. Candidatures ouvertes Paris et Bordeaux.',
  openGraph: {
    images: [{ url: '/images/og-la-guilde.jpg', width: 1200, height: 630 }],
  },
};

const AVANTAGES = [
  {
    title: 'Coordination',
    description:
      'Vous n\u2019êtes plus seul dans un silo. Chaque praticien de La Guilde a accès à une vue coordonnée du parcours de la personne, dans le respect de la confidentialité et de la primauté médicale. Et selon la volonté de la personne.',
  },
  {
    title: 'Réseau pluridisciplinaire',
    description:
      'Médecine conventionnelle, professions de santé réglementées, thérapies complémentaires, pratiques ouvertes : cardiologues et ostéopathes, internistes et naturopathes, pneumologues et psychologues, sages-femmes et coachs santé, pneumologues et acupuncteurs, phlébologues et hypnothérapeutes... Nous n\u2019excluons aucune pratique a priori. La Guilde réunit les compétences. Iris facilite la communication. Vous travaillez avec des pairs.',
  },
  {
    title: 'Cadre déontologique',
    description:
      'Un cadre clair, pas une charte de bons sentiments. Non-prescription, non-substitution, gradient clinique, information transparente. Chaque praticien sait ce qu\u2019il peut faire et ce qu\u2019il ne fait pas. ARCHIPEL ne diagnostique pas, n\u2019examine pas et ne prescrit pas. Sherpa et Iris coordonnent, n\u2019arbitrent pas les décisions.',
  },
  {
    title: 'Personnes engagées',
    description:
      'Les personnes orientées vers La Guilde sont déjà engagées dans un parcours de santé coordonné. Pas de personnes cherchant un rendez-vous ponctuel. Pas de tourisme médical.',
  },
];

const CATEGORIES = [
  {
    title: 'Médecine conventionnelle',
    examples:
      'Médecins toutes spécialités, chirurgiens, pharmaciens, sages-femmes',
    evaluation:
      'Ouverture à la santé intégrative. Acceptation d\u2019une coordination entre conventionnel et non-conventionnel. Acceptation du gradient clinique.',
  },
  {
    title: 'Professions de santé réglementées',
    examples:
      'Kinésithérapeutes, orthophonistes, psychologues, podologues-pédicures, diététiciens, ostéopathes, chiropracteurs',
    evaluation:
      'Formation certifiée. Transparence avec le conventionnel. Engagement déontologique.',
  },
  {
    title: 'Thérapies complémentaires',
    examples:
      'Médecine chinoise, ayurvédique, naturopathie, réflexologie, sophrologie, étiopathie, hypnothérapie...',
    evaluation:
      'Certification vérifiable. Non-substitution explicite. Transparence totale sur le cadre.',
  },
  {
    title: 'Pratiques ouvertes',
    examples: 'Soins énergétiques, massages...',
    evaluation:
      'Formation attestée. Non-substitution explicite. Consentement éclairé documenté. (Garde-fous renforcés)',
  },
];

const PRINCIPES = [
  {
    title: 'Non-prescription',
    formulation:
      'ARCHIPEL ne diagnostique pas, n\u2019examine pas et ne prescrit pas. Sherpa et Iris coordonnent, n\u2019arbitrent pas les décisions.',
    pourVous:
      'Votre expertise reste la vôtre. Iris informe, elle ne concurrence pas.',
  },
  {
    title: 'Gradient clinique',
    formulation:
      'En cas de désaccord clinique, le médecin a primauté décisionnelle. Principe non négociable.',
    pourVous:
      'Médecin : primauté formalisée. Complémentaire : clarté protectrice.',
  },
  {
    title: 'Gestion inter-praticiens',
    formulation:
      'Les désaccords circulent entre praticiens, pas vers le patient.',
    pourVous: 'Le patient ne porte pas vos divergences.',
  },
  {
    title: 'Information transparente',
    formulation:
      'ARCHIPEL informe les patients du niveau de preuve. Sans jugement.',
    pourVous: 'La confiance du patient est renforcée.',
  },
];

export default function GuildePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO GUILDE
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-slate_f text-linen pt-32 pb-16 lg:pt-40 lg:pb-24">
        <img src="/images/photo-guilde.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-slate_f/25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-6 block">
            La Guilde
          </span>

          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Vous ne serez plus seul&middot;e face à la complexité d&apos;un
            patient.
          </h1>

          <p className="font-body text-h4 text-linen/70">
            La Guilde est un réseau de praticiens certifiés qui partagent une
            conviction : la santé se coordonne, elle ne se fragmente pas.
          </p>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — PROPOSITION DE VALEUR PRATICIEN
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="text-center mb-12">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-steel-blue mb-4 block">
            Pourquoi rejoindre La Guilde
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f max-w-2xl mx-auto">
            Ce que La Guilde change pour vous.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {AVANTAGES.map((a, i) => (
            <div
              key={a.title}
              className="bg-steel-blue/10 border border-steel-blue/20 rounded-lg p-6 lg:p-8"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-heading text-h1 text-coeur">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
                  {a.title}
                </h3>
              </div>
              <p className="font-body text-body leading-[1.6] text-slate_f/80">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — PROFILS RECHERCHÉS
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-tete mb-4 block">
              Profils recherchés
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
              Un écosystème pluridisciplinaire.
            </h2>
            <p className="font-body text-body leading-[1.6] text-linen/80 mb-4">
              Ce qui compte, c&apos;est votre engagement, pas votre spécialité.
              Chaque praticien accepte le cadre déontologique d&apos;ARCHIPEL, y
              compris la primauté décisionnelle médicale.
            </p>
          </div>

          {/* 4 catégories — grille 2×2 (non numérotées) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="bg-linen/10 border border-linen/20 rounded-lg p-6"
              >
                <h3 className="font-heading text-h4 tracking-[-0.02em] text-linen mb-2">
                  {cat.title}
                </h3>
                <p className="font-body text-body-sm text-linen/60 mb-3">
                  {cat.examples}
                </p>
                <p className="font-body text-caption text-tete italic">
                  Ce qu&apos;on évalue : {cat.evaluation}
                </p>
              </div>
            ))}
          </div>

          <p className="font-heading text-h2 font-bold text-linen text-center italic">
            Nous n&apos;excluons aucune pratique a priori.
          </p>

          <p className="font-body text-body-sm text-sand text-center mt-4">
            Candidatures ouvertes : Paris et Bordeaux.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — LE CADRE DÉONTOLOGIQUE
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-4xl mx-auto">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-steel-blue mb-4 block text-center">
            Le cadre
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-8 text-center">
            Quatre principes. Non négociables.
          </h2>

          {/* Tableau desktop */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-sand/30">
                  <th className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue py-3 pr-6 w-1/4">
                    Principe
                  </th>
                  <th className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue py-3 pr-6 w-5/12">
                    Formulation
                  </th>
                  <th className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue py-3 w-1/3">
                    Pour vous
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRINCIPES.map((p) => (
                  <tr key={p.title} className="border-b border-sand/15">
                    <td className="font-heading text-h4 tracking-[-0.02em] text-slate_f py-4 pr-6 align-top">
                      {p.title}
                    </td>
                    <td className="font-body text-body-sm text-slate_f/80 py-4 pr-6 align-top leading-[1.6]">
                      {p.formulation}
                    </td>
                    <td className="font-body text-body-sm text-steel-blue py-4 align-top italic leading-[1.6]">
                      {p.pourVous}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards mobile */}
          <div className="lg:hidden space-y-6">
            {PRINCIPES.map((p) => (
              <div
                key={p.title}
                className="border border-sand/20 rounded-lg p-5"
              >
                <h3 className="font-heading text-h4 tracking-[-0.02em] text-slate_f mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-body-sm text-slate_f/80 mb-3">
                  {p.formulation}
                </p>
                <p className="font-body text-body-sm text-steel-blue italic">
                  {p.pourVous}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/guilde/deontologie"
              className="font-label text-label uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors"
            >
              Lire le cadre déontologique complet &rarr;
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FORMULAIRE CANDIDATURE
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default" id="candidature-guilde">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Contexte — 2/5 */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
              Candidater pour La Guilde
            </h2>
            <p className="font-body text-body leading-[1.6] text-linen/80">
              Ce formulaire ouvre un échange, pas un engagement. Nous prendrons
              contact avec vous pour discuter de votre profil et de la manière
              dont votre pratique s&apos;inscrit dans l&apos;écosystème ARCHIPEL.
            </p>
          </div>

          {/* Formulaire — 3/5 */}
          <div className="lg:col-span-3">
            <GuildeForm />
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CTA GUILDE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-8">
            Vous n&apos;êtes pas praticien ? Rejoignez les pionniers.
          </h2>

          <Button variant="accent" size="lg" href="/#pionniers">
            Rejoindre les pionniers
          </Button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/guilde/deontologie"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Le Cadre Déontologique &rarr;
            </a>
            <a
              href="/guilde/candidature"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Processus de candidature &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
