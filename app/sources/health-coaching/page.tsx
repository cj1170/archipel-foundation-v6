import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Le Health Coaching Coordonné — Nos Sources',
  description: 'Ce n\'est pas un problème de volonté. C\'est un problème de mécanisme.',
}

export default function HealthCoachingPage() {
  return (
    <>
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60">
            <a href="/" className="hover:text-sand transition-colors">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/sources" className="hover:text-sand transition-colors">Nos Sources</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Le Health Coaching Coordonné</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Nos Sources
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Health Coaching Coordonné
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Ce n&apos;est pas un problème de volonté.
            C&apos;est un problème de mécanisme.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Pourquoi l&apos;information seule ne suffit pas
            </h2>
            <p>
              Vous savez que dormir huit heures est important. Vous savez que le stress chronique abîme le corps. Vous savez que ce que vous mangez joue un rôle. Vous le savez depuis longtemps. Et pourtant.
            </p>
            <p>
              La méta-analyse de Sforzo et al. (<em>BMC Public Health</em>, 2018) le confirme : des effets significatifs sur l&apos;activité physique, les marqueurs métaboliques et la qualité de vie sont possibles, à une condition. Que l&apos;intervention cible les mécanismes de motivation et d&apos;auto-efficacité, pas seulement la transmission d&apos;information.
            </p>
            <p className="font-heading text-h4 tracking-[-0.02em] text-slate_f">
              Savoir n&apos;est pas changer.
            </p>
          </div>

          <div className="space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Les six stades du changement
            </h2>
            <p>
              Prochaska et DiClemente (1983) ont cartographié comment le changement se produit réellement. Pas en une décision. En six stades.
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-sand/30">
              <p><span className="font-label text-caption uppercase tracking-[0.08em] text-sand">Pré-contemplation</span> — on ne voit pas encore que quelque chose doit changer.</p>
              <p><span className="font-label text-caption uppercase tracking-[0.08em] text-sand">Contemplation</span> — on y pense, sans avoir décidé.</p>
              <p><span className="font-label text-caption uppercase tracking-[0.08em] text-sand">Préparation</span> — on se prépare à agir.</p>
              <p><span className="font-label text-caption uppercase tracking-[0.08em] text-sand">Action</span> — on agit.</p>
              <p><span className="font-label text-caption uppercase tracking-[0.08em] text-sand">Maintien</span> — on consolide.</p>
            </div>
            <p>
              La plupart des services de santé interviennent au stade Action : ils supposent que vous avez déjà décidé. Tout ce qui se passe avant — les stades où se joue en réalité la décision — est ignoré.
            </p>
            <p>
              Le Sherpa d&apos;ARCHIPEL adapte sa posture au stade où se trouve la personne. Proposer un plan d&apos;action à quelqu&apos;un en contemplation ne sert à rien. L&apos;écouter, en revanche, peut tout changer.
            </p>
          </div>

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              La motivation vient de l&apos;intérieur
            </h2>
            <p>
              Miller et Rollnick (1991) ont formalisé ce constat : argumenter pour le changement renforce la résistance. Faire émerger la voix interne du changement l&apos;accélère.
            </p>
            <p>
              Le réflexe naturel quand on accompagne quelqu&apos;un est de corriger, d&apos;informer, de prescrire. C&apos;est contre-productif. Le Sherpa apprend à faire l&apos;inverse : écouter ce que la personne sait déjà, et l&apos;aider à l&apos;entendre elle-même.
            </p>
          </div>

          <div className="bg-[#E8E2D8] rounded-lg px-8 py-8 space-y-3">
            <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
              Ce qui rend les six premières semaines décisives
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              La variable critique du parcours ARCHIPEL, ce n&apos;est pas Iris. Ce n&apos;est pas La Guilde. C&apos;est la qualité de la relation Sherpa dans les six premières semaines.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              C&apos;est dans cet intervalle que se joue le basculement. La personne comprend-elle ce qui se passe ? Se sent-elle capable d&apos;agir ? Trouve-t-elle que ça vaut la peine ? Ces trois questions sont exactement les trois dimensions du Sens de Cohérence. Le Sherpa est l&apos;agent qui les rend opérantes dans la vie réelle de chaque personne.
            </p>
          </div>

          <div className="border-l-2 border-sand/40 pl-6">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic font-body">
              <li>Sforzo, G.A. et al. (2018). Compendium of the Health and Wellness Coaching Literature. <em>BMC Public Health</em>.</li>
              <li>Prochaska, J.O. &amp; DiClemente, C.C. (1983). Journal of Consulting and Clinical Psychology, 51(3), 390-395.</li>
              <li>Miller, W.R. &amp; Rollnick, S. (2013). <em>Motivational Interviewing</em>, 3e éd. Guilford Press.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/sources/sens-de-coherence" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              &larr; Le Sens de Cohérence
            </a>
            <a href="/sources" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Retour à Nos Sources
            </a>
            <a href="/sources/phronesis" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              La Phronésis &rarr;
            </a>
            <a href="/approche/sherpas" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Découvrir les Sherpas &rarr;
            </a>
          </div>

        </div>
      </Section>
    </>
  )
}
