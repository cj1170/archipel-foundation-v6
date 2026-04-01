import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Gouvernance & Éthique',
  description:
    'Charte Fondatrice, Comité d\'Éthique indépendant, CIES, Corpus Normatif : la gouvernance d\'ARCHIPEL Foundation est conçue pour durer.',
  openGraph: {
    images: [{ url: '/og/gouvernance.jpg', width: 1200, height: 630 }],
  },
};

const INSTANCES_SYNTH = [
  {
    instance: 'Conseil de Fondation',
    controle: 'Mission, valeurs, direction',
    mecanismes: 'Rapport trimestriel Direction, audit externe annuel',
  },
  {
    instance: 'Comité d\u2019Éthique',
    controle: 'Iris, données, cadre déontologique',
    mecanismes: 'Audit Iris, traitement signalements, veto',
  },
  {
    instance: 'Comité Interdisciplinaire d\u2019Expertise Scientifique',
    controle: 'Iris, Sherpas, La Guilde',
    mecanismes: 'Entretien annuel Sherpas, admissions Guilde, revue parcours',
  },
  {
    instance: 'Direction',
    controle: 'Opérations, partenariats',
    mecanismes: 'Reporting KPIs, saisine CE/CIES',
  },
];

const CORPUS_LEVELS = [
  {
    level: 1,
    title: 'Charte Fondatrice',
    desc: 'Rang suprême — document public',
    bg: 'bg-slate_f',
    text: 'text-linen',
  },
  {
    level: 2,
    title: 'Constitutions',
    desc: 'Rang constitutionnel — dont Constitution Iris',
    bg: 'bg-steel-blue',
    text: 'text-linen',
  },
  {
    level: 3,
    title: 'Codes',
    desc: 'Rang législatif — Code Iris, Code Patient, Code Guilde, Code Sherpa',
    bg: 'bg-steel-blue/20',
    text: 'text-slate_f',
  },
  {
    level: 4,
    title: 'Décrets d\u2019application',
    desc: 'Rang réglementaire — procédures opérationnelles',
    bg: 'bg-sand/20',
    text: 'text-slate_f',
  },
];

export default function GouvernancePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO GOUVERNANCE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="hero">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6 block">
            Gouvernance &amp; Éthique
          </span>

          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Construite pour durer. Conçue pour être stable et harmonieuse.
          </h1>

          <p className="font-body text-h4 text-linen/70">
            La gouvernance d&apos;ARCHIPEL n&apos;est pas un décor. C&apos;est
            une architecture de confiance, avec des garde-fous qui ne dépendent
            pas de la bonne volonté de ses dirigeants.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — LA CHARTE FONDATRICE
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Visuel — à gauche (40%) */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-48 h-64 lg:w-56 lg:h-72 rounded-lg border-2 border-dashed border-steel-blue/30 flex items-center justify-center">
              <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue/40">
                Charte Fondatrice
              </span>
            </div>
          </div>

          {/* Texte — à droite (60%) */}
          <div className="lg:col-span-3">
            <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
              Document fondateur
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
              La Charte Fondatrice
            </h2>
            <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
              <p>
                La Charte Fondatrice est le document de rang suprême
                d&apos;ARCHIPEL Foundation. Elle définit la mission, la
                philosophie, l&apos;écosystème, les engagements envers les
                bénéficiaires, et les 9 principes fondateurs.
              </p>
              <p>
                Elle est publique, opposable, et gardée par le Comité
                d&apos;Éthique. Toute décision d&apos;ARCHIPEL doit lui être
                conforme.
              </p>
            </div>
            <a
              href="/gouvernance/charte"
              className="inline-block mt-6 font-label text-label uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors"
            >
              Lire la Charte Fondatrice intégrale &rarr;
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — LES INSTANCES DE GOUVERNANCE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="default">
        <div className="text-center mb-12">
          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
            Les instances de gouvernance
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
            Quatre instances. Aucune ne concentre tous les pouvoirs.
          </h2>
        </div>

        {/* Tableau synthétique */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-left font-body text-body-sm text-linen/80">
            <thead>
              <tr className="border-b border-sand/30">
                <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3 pr-4">
                  Instance
                </th>
                <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3 pr-4">
                  Contrôle sur
                </th>
                <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3">
                  Mécanismes
                </th>
              </tr>
            </thead>
            <tbody>
              {INSTANCES_SYNTH.map((row) => (
                <tr
                  key={row.instance}
                  className="border-b border-linen/10"
                >
                  <td className="py-3 pr-4 font-heading text-body-sm text-linen">
                    {row.instance}
                  </td>
                  <td className="py-3 pr-4">{row.controle}</td>
                  <td className="py-3">{row.mecanismes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 blocs détaillés */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Conseil de Fondation */}
          <div className="bg-linen rounded-lg p-6 lg:p-8">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-heading text-h1 text-coeur">9</span>
              <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
                membres &bull; instance souveraine
              </span>
            </div>
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              Le Conseil de Fondation<br />(Les Gardiens)
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-4">
              Instance souveraine de la Fondation. 9 membres représentant
              mécènes et donateurs, usagers, partenaires stratégiques et
              personnalités indépendantes.
            </p>
            <p className="font-body text-caption text-steel-blue">
              Présidence : Cyril Jamot — Président-Fondateur
            </p>
            <p className="font-body text-caption text-slate_f/50 mt-2 italic">
              En cours de constitution.
            </p>
          </div>

          {/* Comité d'Éthique */}
          <div className="bg-linen rounded-lg p-6 lg:p-8">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-heading text-h1 text-coeur">9</span>
              <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
                membres indépendants &bull; veto absolu
              </span>
            </div>
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              Le Comité d&apos;Éthique
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-2">
              Il ne s&apos;agit pas d&apos;un comité consultatif. Il dispose
              d&apos;un droit de veto réel.
            </p>
            <p className="font-body text-body-sm text-slate_f/70 mb-4">
              Instance indépendante de 9 membres. Le veto est inscrit dans les
              statuts. Aucune décision dans ses périmètres ne peut être prise
              sans son approbation — ni par la direction de la Fondation, ni par
              la SAS.
            </p>
            <p className="font-body text-caption text-slate_f/50 italic">
              En cours de constitution.
            </p>
            <a
              href="/gouvernance/comite-ethique"
              className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors mt-4 inline-block"
            >
              En savoir plus &rarr;
            </a>
          </div>

          {/* CIES */}
          <div className="bg-linen rounded-lg p-6 lg:p-8">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-heading text-h1 text-coeur">9</span>
              <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
                membres &bull; présidé par le CMedO
              </span>
            </div>
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              Le Comité Interdisciplinaire d&apos;Expertise Scientifique (CIES)
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-2">
              Le CIES est délibérément logé dans la Fondation — et non dans la
              SAS opérationnelle. Un comité médical intégré à une structure
              commerciale expose les experts à un risque déontologique réel.
            </p>
            <p className="font-body text-body-sm text-slate_f/70 mb-4">
              Domaines : parcours de soin individualisés, cadre opérationnel et
              supervision d&apos;Iris, admission La Guilde, partenariats
              recherche, révision déontologique.
            </p>
            <p className="font-body text-caption text-steel-blue">
              Présidente : Dr Anne-Sophie Darrigade, CMedO
            </p>
            <a
              href="/gouvernance/cies"
              className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors mt-4 inline-block"
            >
              En savoir plus &rarr;
            </a>
          </div>

          {/* Direction */}
          <div className="bg-linen rounded-lg p-6 lg:p-8">
            <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              La Direction
            </h3>
            <p className="font-body text-body-sm text-slate_f/70 mb-4">
              La Direction n&apos;est pas une instance de gouvernance autonome.
              Elle opère dans le cadre défini par les Gardiens, contrôlé par le
              Comité d&apos;Éthique, et orienté par le CIES.
            </p>
            <div className="space-y-3 mt-4">
              <div>
                <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">
                  CEO
                </span>
                <p className="font-body text-body-sm text-slate_f/80">
                  Cyril Jamot — Direction exécutive, partenariats
                  institutionnels, représentation de la Fondation. Saisine des
                  comités pour toute décision stratégique. Président
                  Non-Exécutif d&apos;ARCHIPEL LIFE.
                </p>
              </div>
              <div>
                <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">
                  CMedO
                </span>
                <p className="font-body text-body-sm text-slate_f/80">
                  Dr Anne-Sophie Darrigade — Responsable du cadre médical et
                  scientifique, de la qualité clinique, et de la supervision de
                  La Guilde et des recherches financées par la Fondation.
                  Préside le CIES. Également CMedO d&apos;ARCHIPEL LIFE.
                </p>
              </div>
              <div>
                <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">
                  CPTO
                </span>
                <p className="font-body text-body-sm text-slate_f/50 italic">
                  Poste en cours de recrutement
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — LE CORPUS NORMATIF
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block text-center">
            L&apos;architecture normative
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6 text-center">
            Un corpus hiérarchisé. Chaque norme est gardée.
          </h2>
          <p className="font-body text-body leading-[1.6] text-slate_f/80 text-center mb-12">
            La Charte Fondatrice est le document de rang suprême. Elle fonde et
            légitime l&apos;ensemble du Corpus Normatif. En cas de conflit entre
            deux niveaux, la norme de rang supérieur prévaut sans exception.
            Cette hiérarchie est gardée par le Comité d&apos;Éthique.
          </p>

          {/* Schéma hiérarchique — 4 niveaux empilés */}
          <div className="space-y-4">
            {CORPUS_LEVELS.map((item) => (
              <div
                key={item.level}
                className={`${item.bg} ${item.text} rounded-lg p-5 flex items-center gap-4`}
                style={{ marginLeft: `${(item.level - 1) * 16}px` }}
              >
                <span className="font-heading text-h3 opacity-50">
                  {item.level}
                </span>
                <div>
                  <h3 className="font-heading text-h4 tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-sm opacity-70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — TRAJECTOIRE SOCIOCRATIQUE ET PÉRENNITÉ
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
            Pérennité
          </span>
          <blockquote className="font-heading text-h2 tracking-[-0.02em] text-linen mb-8">
            ARCHIPEL Foundation est construite pour survivre à ses fondateurs.
          </blockquote>
          <div className="space-y-4 font-body text-body leading-[1.6] text-linen/80 text-left">
            <p>
              La gouvernance d&apos;ARCHIPEL évolue selon une trajectoire
              sociocratique progressive : de la voix prépondérante du fondateur
              en phase de lancement, vers la majorité qualifiée au Conseil, puis
              le consentement distribué à maturité.
            </p>
            <p>
              Chaque décision structurelle est documentée. Chaque rôle a un
              titulaire et un relais identifié. Le sens d&apos;ARCHIPEL est
              inscrit dans des documents qui survivent à l&apos;absence de leur
              auteur.
            </p>
          </div>

          {/* Mention fondateur */}
          <div className="mt-12 pt-8 border-t border-linen/20 flex items-center justify-center gap-4">
            <div className="text-left">
              <span className="font-heading text-h4 text-linen block">
                Cyril Jamot
              </span>
              <span className="font-body text-body-sm text-sand">
                Fondateur et CEO
              </span>
            </div>
            <a
              href="https://www.linkedin.com/in/cyriljamot/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-caption uppercase tracking-[0.08em] text-sand hover:text-linen transition-colors"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CTA GOUVERNANCE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-8">
            Cette gouvernance vous rassure ? Soutenez ce qu&apos;elle protège.
          </h2>

          <Button variant="accent" size="lg" href="/soutenir">
            Soutenir ARCHIPEL
          </Button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/gouvernance/charte"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Charte Fondatrice &rarr;
            </a>
            <a
              href="/gouvernance/comite-ethique"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Le Comité d&apos;Éthique &rarr;
            </a>
            <a
              href="/gouvernance/cies"
              className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors"
            >
              Le CIES &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
