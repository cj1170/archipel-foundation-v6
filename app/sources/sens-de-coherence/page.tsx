import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Le Sens de Cohérence — Nos Sources',
  description: 'Trois capacités documentées et modifiables. Ce qui distingue ceux qui traversent les épreuves de ceux qui s\'effondrent.',
}

export default function SensDeCoherencePage() {
  return (
    <>
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60">
            <a href="/" className="hover:text-sand transition-colors">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/sources" className="hover:text-sand transition-colors">Nos Sources</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Le Sens de Cohérence</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Nos Sources
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Sens de Cohérence
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Trois capacités. Documentées. Modifiables.
            Ce qui distingue ceux qui traversent les épreuves de ceux qui s&apos;effondrent.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Ce qui tient les gens debout
            </h2>
            <p>
              Antonovsky identifie un facteur commun chez les personnes qui traversent les épreuves sans s&apos;effondrer. Trois capacités combinées — ni de l&apos;optimisme, ni du courage en général. Un mécanisme précis, mesuré, modifiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#E8E2D8] rounded-lg p-6 space-y-3">
              <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
                Compréhensibilité
              </p>
              <p className="font-heading text-h4 tracking-[-0.02em] text-slate_f">
                Ce qui m&apos;arrive a une logique.
              </p>
              <p className="font-body text-body-sm leading-[1.7] text-slate_f/70">
                Je peux le comprendre, même si c&apos;est difficile. Le monde n&apos;est pas chaotique.
              </p>
              <p className="font-body text-body-sm leading-[1.7] text-slate_f/60 italic">
                Exemple : comprendre pourquoi on est épuisé — le rythme imposé, les décisions accumulées, le manque de récupération — c&apos;est déjà voir la logique de ce qui arrive. C&apos;est le premier levier.
              </p>
            </div>

            <div className="bg-[#E8E2D8] rounded-lg p-6 space-y-3">
              <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
                Gérabilité
              </p>
              <p className="font-heading text-h4 tracking-[-0.02em] text-slate_f">
                J&apos;ai les ressources pour y faire face.
              </p>
              <p className="font-body text-body-sm leading-[1.7] text-slate_f/70">
                Pas forcément seul. Pas forcément immédiatement. Mais il existe des leviers, des personnes, des outils.
              </p>
              <p className="font-body text-body-sm leading-[1.7] text-slate_f/60 italic">
                Exemple : la différence entre &quot;je ne peux rien faire&quot; et &quot;je ne sais pas encore quoi faire, mais il y a forcément quelque chose&quot;. Iris, les Sherpas, La Guilde sont des ressources de gérabilité.
              </p>
            </div>

            <div className="bg-[#E8E2D8] rounded-lg p-6 space-y-3">
              <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
                Significativité
              </p>
              <p className="font-heading text-h4 tracking-[-0.02em] text-slate_f">
                Cela vaut la peine de s&apos;engager.
              </p>
              <p className="font-body text-body-sm leading-[1.7] text-slate_f/70">
                Il y a du sens à agir. Ce n&apos;est pas &quot;ça va aller&quot; : c&apos;est &quot;ça vaut la peine que j&apos;y mette de l&apos;énergie.&quot;
              </p>
              <p className="font-body text-body-sm leading-[1.7] text-slate_f/60 italic">
                Exemple : les personnes qui se remettent le mieux d&apos;une épreuve ne sont pas celles qui souffrent le moins. Ce sont souvent celles qui ont trouvé une raison de traverser.
              </p>
            </div>
          </div>

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Ce que la recherche dit
            </h2>
            <p>
              Des décennies d&apos;études confirment que le Sens de Cohérence prédit la santé physique et mentale de façon robuste, indépendamment du niveau de revenus, de l&apos;âge ou du contexte social.
            </p>
            <p>
              Les travaux de Shenhar et al. (<em>Science</em>, janvier 2026) précisent que la génétique représente environ 55% des déterminants de longévité. Les 45 à 50% restants sont modifiables. Comportement, relations, sens qu&apos;on donne aux choses, environnement dans lequel on vit : c&apos;est le territoire du Sens de Cohérence. C&apos;est là qu&apos;ARCHIPEL travaille.
            </p>
          </div>

          <div className="space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              TÊTE, COEUR et CORPS — la traduction concrète
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">TÊTE — compréhensibilité</p>
                <p>Donner du sens à ce qui arrive, construire une représentation cohérente de sa situation.</p>
              </div>
              <div className="space-y-1">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">COEUR — significativité</p>
                <p>La dimension émotionnelle et relationnelle, ce qui connecte à quelque chose de plus grand que le symptôme du moment.</p>
              </div>
              <div className="space-y-1">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">CORPS — gérabilité</p>
                <p>Les ressources physiques, les pratiques qui ancrent dans le concret.</p>
              </div>
              <div className="space-y-1">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">MILIEU — le sol</p>
                <p>Les rythmes circadiens, les saisons, la qualité du cadre de vie, la relation au vivant. Pas un pilier de plus. Le sol dans lequel tout s&apos;enracine.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#E8E2D8] rounded-lg px-8 py-8 space-y-3">
            <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
              Ce que mesure ARKÉ
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              Le bilan ARKÉ, réalisé en entrée de parcours, cartographie l&apos;état du Sens de Cohérence à travers six dimensions : médicale, fonctionnelle, psychologique, comportementale, contexte biographique, et milieu de vie. Pas un diagnostic. Une cartographie de départ.
            </p>
          </div>

          <div className="border-l-2 border-sand/40 pl-6">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic font-body">
              <li>Antonovsky, A. (1987). <em>Unraveling the Mystery of Health</em>. Jossey-Bass.</li>
              <li>Shenhar, Y. et al. (2026). <em>Science</em>, vol. 391, pp. 504-510.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/sources/salutogenese" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              &larr; La Salutogénèse
            </a>
            <a href="/sources" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Retour à Nos Sources
            </a>
            <a href="/sources/health-coaching" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Le Health Coaching &rarr;
            </a>
          </div>

        </div>
      </Section>
    </>
  )
}
