import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'La Salutogénèse — Nos Sources',
  description: 'En 1979, Aaron Antonovsky renverse la question fondamentale de la médecine. La Salutogénèse, socle opérationnel d\'ARCHIPEL.',
}

export default function SalutogenesePage() {
  return (
    <>
      <Section variant="slate" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Nos Sources', href: '/sources' },
              { label: 'La Salutogénèse' },
            ]}
            variant="on-dark"
          />
        </div>
      </Section>

      <Section variant="slate" padding="hero">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-label text-caption uppercase tracking-[0.12em] text-sand mb-4">
            Nos Sources
          </p>
          <h1 className="font-heading text-h1 tracking-[-0.02em] text-linen mb-6">
            La Salutogénèse
          </h1>
          <p className="font-body text-body-lg leading-[1.6] text-linen/80">
            Ce que la médecine ne cherche pas. Et ce qu&apos;ARCHIPEL cherche
            à la place.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
          <p>
            En 1979, Aaron Antonovsky publie <em>Health, Stress, and Coping</em>.
            Il y propose un renversement : au lieu de chercher ce qui rend malade
            (pathogénèse), chercher ce qui crée la santé (Salutogénèse).
          </p>
          <p>
            Son étude sur des femmes survivantes de la Shoah révèle que certaines
            d&apos;entre elles, malgré un trauma extrême, présentent des
            indicateurs de santé remarquablement stables. La question n&apos;est
            plus &quot;pourquoi tombons-nous malades ?&quot; mais &quot;comment
            restons-nous en bonne santé ?&quot;
          </p>
          <p>
            Ce renversement n&apos;est pas rhétorique. Il change ce qu&apos;on
            mesure, ce qu&apos;on cherche, et ce qu&apos;on renforce. Le système
            médical est conçu pour intervenir quand quelque chose va mal. La
            Salutogénèse s&apos;intéresse à ce qui tient quand tout pourrait
            aller mal.
          </p>
          <p>
            ARCHIPEL fait de ce cadre son socle opérationnel : créer les
            conditions de votre santé, pas seulement traiter vos symptômes.
          </p>

          <div className="border-l-2 border-sand/40 pl-6 mt-8">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic">
              <li>Antonovsky, A. (1979). <em>Health, Stress, and Coping</em>. Jossey-Bass.</li>
              <li>Antonovsky, A. (1987). <em>Unraveling the Mystery of Health</em>. Jossey-Bass.</li>
            </ul>
          </div>

          <div className="pt-4">
            <Button variant="outline-light" href="/sources">
              Retour à Nos Sources
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
