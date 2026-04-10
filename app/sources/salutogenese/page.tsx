import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'La Salutogénèse — Nos Sources',
  description: 'La médecine cherche ce qui rend malade. ARCHIPEL cherche ce qui crée la santé. Aaron Antonovsky, 1979.',
}

export default function SalutogenesePage() {
  return (
    <>
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60">
            <a href="/" className="hover:text-sand transition-colors">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/sources" className="hover:text-sand transition-colors">Nos Sources</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">La Salutogénèse</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Nos Sources
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            La Salutogénèse
          </h1>
          <p className="font-body text-h4 text-linen/70">
            La médecine cherche ce qui rend malade.
            ARCHIPEL cherche ce qui crée la santé.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              La question qu&apos;on ne pose jamais
            </h2>
            <p>
              En 1979, Aaron Antonovsky publie <em>Health, Stress, and Coping</em>. Il y propose un renversement : au lieu de chercher ce qui rend malade (pathogénèse), chercher ce qui crée la santé (Salutogénèse).
            </p>
            <p>
              Son étude sur des femmes survivantes de la Shoah révèle que certaines d&apos;entre elles, malgré un trauma extrême, présentent des indicateurs de santé remarquablement stables. La question n&apos;est plus &quot;pourquoi tombons-nous malades ?&quot; mais &quot;comment restons-nous en bonne santé ?&quot;
            </p>
            <p>
              Ce renversement n&apos;est pas rhétorique. Il change ce qu&apos;on mesure, ce qu&apos;on cherche, et ce qu&apos;on renforce.
            </p>
          </div>

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Deux regards sur la santé
            </h2>
            <p>
              La médecine conventionnelle fonctionne sur un modèle binaire : vous êtes malade, ou vous ne l&apos;êtes pas. Elle intervient quand vous franchissez la ligne. Tout ce qui se passe avant n&apos;est pas son territoire.
            </p>
            <p>
              Antonovsky propose autre chose. La santé n&apos;est pas un état. C&apos;est un curseur en mouvement permanent, quelque part entre deux pôles : la santé totale d&apos;un côté, la maladie totale de l&apos;autre. Personne n&apos;est jamais complètement à l&apos;un ou l&apos;autre bout. La question n&apos;est pas &quot;de quel côté êtes-vous ?&quot; mais &quot;dans quelle direction bougez-vous, et pourquoi ?&quot;
            </p>
            <p>
              C&apos;est cette direction qu&apos;ARCHIPEL travaille.
            </p>
          </div>

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Ce qui vous donne des ressources
            </h2>
            <p>
              Antonovsky identifie ce qu&apos;il appelle les ressources généralisées de résistance. Ce sont les éléments qui vous donnent la capacité de faire face : pas face à une maladie spécifique, mais face à ce que la vie apporte en général.
            </p>
            <p>
              Ces ressources sont multiples. Certaines sont individuelles : la connaissance de soi, la capacité à réguler ses émotions, un corps entretenu. D&apos;autres sont relationnelles : un entourage solide, des liens de confiance, un sentiment d&apos;appartenance. D&apos;autres encore sont liées au cadre de vie : la stabilité, des repères qui tiennent, un rythme qui respecte votre biologie.
            </p>
            <p>
              La plupart des approches de santé cherchent à éliminer les facteurs de risque. Personne ne cherche systématiquement à renforcer les ressources. C&apos;est exactement ce que fait ARCHIPEL.
            </p>
          </div>

          <div className="bg-[#E8E2D8] rounded-lg px-8 py-8 space-y-3">
            <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
              Ce que cela change pour vous
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              Dans un système classique, vous consultez quand quelque chose va mal. Le bilan ARKÉ, réalisé en entrée de parcours chez ARCHIPEL, ne cherche pas principalement des pathologies à traiter. Il cartographie vos ressources : ce qui tient, ce qui vacille, ce qui peut être renforcé. C&apos;est la Salutogénèse appliquée.
            </p>
          </div>

          <div className="border-l-2 border-sand/40 pl-6">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic font-body">
              <li>Antonovsky, A. (1979). <em>Health, Stress, and Coping</em>. Jossey-Bass.</li>
              <li>Antonovsky, A. (1987). <em>Unraveling the Mystery of Health</em>. Jossey-Bass.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/sources" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Retour à Nos Sources
            </a>
            <a href="/sources/sens-de-coherence" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Le Sens de Cohérence &rarr;
            </a>
          </div>

        </div>
      </Section>
    </>
  )
}
