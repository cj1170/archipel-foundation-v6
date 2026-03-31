import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Notre Mission',
  description:
    'ARCHIPEL construit un écosystème de santé préventive fondé sur la Salutogénèse. 5 axes : accessibilité, éducation, recherche, plaidoyer, souveraineté des données.',
  openGraph: {
    images: [{ url: '/og/mission.jpg', width: 1200, height: 630 }],
  },
};

/* ── Status Badge ── */
function StatusBadge({ status }: { status: 'acte' | 'construction' | 'projete' }) {
  const styles = {
    acte: 'bg-corps/20 text-corps',
    construction: 'bg-sand/20 text-sand',
    projete: 'bg-tete/20 text-tete',
  };
  const labels = {
    acte: 'ACTE \u2713',
    construction: 'EN CONSTRUCTION \u25D0',
    projete: 'PROJETE \u25CB',
  };
  return (
    <span
      className={`font-label text-caption uppercase tracking-[0.08em] px-2 py-1 rounded-sm ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

/* ── Données des 5 axes ── */
interface Axe {
  title: string;
  status: 'acte' | 'construction' | 'projete';
  description: string;
  href?: string;
}

const AXES: Axe[] = [
  {
    title: 'Accessibilité',
    status: 'construction',
    description:
      'La santé préventive est aujourd\u2019hui structurellement inaccessible à la majorité. ARCHIPEL agit via le Fonds de Bourses et une architecture tarifaire conçue pour que le premium finance l\u2019accès. Ce mécanisme Robin Hood est inscrit dans les statuts.',
    href: '/mission/robin-hood',
  },
  {
    title: 'Éducation',
    status: 'projete',
    description:
      'La Salutogénèse n\u2019a jamais atteint le grand public sous une forme opérationnelle. ARCHIPEL finance des programmes éducatifs pour les enfants, les femmes face aux angles morts du système, et les populations les plus éloignées d\u2019un parcours coordonné.',
  },
  {
    title: 'Recherche',
    status: 'projete',
    description:
      'Les interactions entre TÊTE, CŒUR et CORPS, l\u2019efficacité du health coaching coordonné, les liens entre cohérence de sens et marqueurs biologiques : ces terrains sont sous-financés. La Fondation les finance via des appels à projets ouverts, en accès libre.',
  },
  {
    title: 'Plaidoyer',
    status: 'projete',
    description:
      'Une fondation qui influence les systèmes transforme. ARCHIPEL porte des positions sur l\u2019intégration de la coordination préventive dans les politiques de remboursement et la reconnaissance des approches complémentaires validées.',
  },
  {
    title: 'Souveraineté des données',
    status: 'construction',
    description:
      'Les données de santé restent la propriété des personnes qui les produisent. Pas de la plateforme, pas des partenaires, pas des financeurs. Ce n\u2019est pas une clause de conformité. C\u2019est une position de fond.',
  },
];

export default function MissionPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO MISSION
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="hero">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6 block">
            Notre mission
          </span>

          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            ARCHIPEL n&apos;est pas une réponse à l&apos;échec de la médecine.
            <br />
            <span className="text-sand">
              C&apos;est une réponse à son incomplétude.
            </span>
          </h1>

          <p className="font-body text-h4 text-linen/70 mb-8">
            Une fondation qui ne soigne pas. Qui crée les conditions pour que la
            santé dure.
          </p>

          <p className="font-body text-body-sm text-sand/60 italic">
            ARCHIPEL est née d&apos;un constat vécu avant d&apos;être théorisé.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — LES 5 AXES DE MISSION
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
            5 axes permanents
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Ce que nous voulons changer dans le monde.
          </h2>
          <p className="font-body text-body leading-[1.6] text-slate_f/80">
            Ces cinq axes forment un tout. L&apos;accessibilité sans recherche
            reste une promesse sans fondement. La recherche sans plaidoyer reste
            sans effet systémique. Et aucun ne tient sans la souveraineté des
            données.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {AXES.map((axe, i) => (
            <div
              key={axe.title}
              className="bg-slate_f text-linen rounded-lg p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-label text-caption text-sand">
                  0{i + 1}
                </span>
                <StatusBadge status={axe.status} />
              </div>
              <h3 className="font-heading text-h3 tracking-[-0.02em] text-linen mb-3">
                {axe.title}
              </h3>
              <p className="font-body text-body-sm leading-[1.6] text-linen/80">
                {axe.description}
              </p>
              {axe.href && (
                <a
                  href={axe.href}
                  className="font-label text-caption uppercase tracking-[0.08em] text-sand hover:text-linen mt-4 inline-block transition-colors"
                >
                  En savoir plus &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — LA SALUTOGÉNÈSE SITUÉE
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
              Notre philosophie
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
              La Salutogénèse : ce qui crée la santé, pas ce qui traite la
              maladie.
            </h2>
            <div className="space-y-4 font-body text-body leading-[1.6] text-linen/80">
              <p>
                La médecine conventionnelle pose la question : comment
                éliminons-nous vos symptômes ? La Salutogénèse pose une autre
                question : comment construisons-nous votre capacité à être en
                bonne santé ?
              </p>
              <p>
                Le cadre TÊTE&bull;CŒUR&bull;CORPS d&apos;ARCHIPEL en est la
                traduction opérationnelle. La santé se construit dans la
                cohérence entre les dimensions cognitive et mentale,
                émotionnelle et relationnelle, physique et corporelle.
              </p>
              <p>
                Ces trois dimensions s&apos;enracinent dans un MILIEU :
                l&apos;environnement vivant de la personne, ses rythmes
                circadiens, sa relation à la nature, la qualité de son cadre de
                vie. Le MILIEU n&apos;est pas un quatrième pilier. Il est le sol
                dans lequel TÊTE, CŒUR et CORPS s&apos;enracinent.
              </p>
            </div>
          </div>

          {/* Placeholder visuel — à remplacer par DotsTCC */}
          <div className="order-first lg:order-last flex items-center justify-center">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-linen/30 flex items-center justify-center">
              <span className="font-label text-caption uppercase tracking-[0.08em] text-linen/40">
                Schéma T&bull;C&bull;C + Milieu
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — LE MODÈLE À DEUX CORPS
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
            Notre architecture
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Foundation et Life : deux corps, une mission.
          </h2>

          <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80 mb-8">
            <p>
              Le premier corps est ARCHIPEL Foundation, fonds de dotation en
              création, future fondation d&apos;utilité publique. Elle ne vend
              rien. Elle ne dispose d&apos;aucun intérêt commercial. C&apos;est
              précisément cette indépendance qui fait d&apos;elle un tiers de
              confiance.
            </p>
            <p>
              Le second corps est ARCHIPEL LIFE SAS, société à mission au sens
              de la loi PACTE. Elle opère la mission sur le terrain. Une partie
              de ses résultats est reversée annuellement à la Fondation, via une
              clause statutaire irrévocable, pour financer les cinq axes de
              mission.
            </p>
          </div>

          {/* Placeholder visuel — schéma flux */}
          <div className="rounded-lg border-2 border-dashed border-steel-blue/30 p-8 flex items-center justify-center mb-8">
            <span className="font-label text-caption uppercase tracking-[0.08em] text-slate_f/40">
              Schéma flux : Personnes &rarr; LIFE &rarr; Reversement &rarr;
              Foundation &rarr; Impact
            </span>
          </div>

          <Button variant="primary" href="/soutenir">
            Soutenir cette mission
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — CTA MISSION
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-8 italic">
            &laquo;&nbsp;La santé n&apos;est pas un état à conquérir. C&apos;est
            un rythme à retrouver.&nbsp;&raquo;
          </blockquote>

          <Button variant="accent" size="lg" href="/soutenir">
            Soutenir cette mission
          </Button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/mission/9-principes"
              className="font-label text-label uppercase tracking-[0.08em] text-sand hover:text-linen transition-colors"
            >
              Les 9 Principes Fondateurs &rarr;
            </a>
            <a
              href="/mission/robin-hood"
              className="font-label text-label uppercase tracking-[0.08em] text-sand hover:text-linen transition-colors"
            >
              Le Modèle Robin Hood &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
