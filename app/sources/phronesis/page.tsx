import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'La Phronésis — Nos Sources',
  description: 'Pas une limitation d\'Iris. Une conception délibérée. Ce qu\'une IA ne peut pas faire à votre place.',
}

export default function PhronesisPage() {
  return (
    <>
      <Section variant="slate" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Nos Sources', href: '/sources' },
              { label: 'La Phronésis' },
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
            La Phronésis
          </h1>
          <p className="font-body text-body-lg leading-[1.6] text-linen/80">
            Pas une limitation d&apos;Iris. Une conception délibérée.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
          <p>
            Iris, le compagnon IA d&apos;ARCHIPEL, peut beaucoup. Elle retient
            tout ce que vous lui confiez, fait des liens que personne ne ferait
            en consultation de quinze minutes, prépare le terrain pour chaque
            échange avec votre Sherpa.
          </p>
          <p>
            Mais il y a quelque chose qu&apos;Iris ne fera jamais. Pas parce
            qu&apos;elle n&apos;est pas assez avancée. Parce que c&apos;est
            structurellement impossible.
          </p>
          <p>
            Aristote distinguait trois formes de savoir. L&apos;épistèmè : le
            savoir théorique, universel, transmissible. La technè : le
            savoir-faire technique, reproductible. La phronésis : la sagesse
            pratique, la capacité de délibérer correctement sur ce qui est juste
            pour une personne singulière, dans une situation singulière, avec
            son histoire et ses contraintes.
          </p>
          <p>
            Une IA maîtrise l&apos;épistèmè et la technè. Elle ne peut pas
            exercer la phronésis. Décider ce qui est juste pour vous,
            maintenant, dans ce contexte précis, avec ce que vous portez sans
            forcément le dire, demande l&apos;engagement moral d&apos;un sujet
            humain.
          </p>
          <p>
            Savoir n&apos;est pas juger. Iris sait. Le Sherpa juge. Les deux
            sont nécessaires. Aucun des deux ne remplace l&apos;autre.
          </p>
          <p>
            Ce n&apos;est pas un compromis. C&apos;est une architecture
            délibérée.
          </p>

          <div className="border-l-2 border-sand/40 pl-6 mt-8">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic">
              <li>Aristote, <em>Éthique à Nicomaque</em>, Livre VI.</li>
              <li>Pellegrino, E.D. &amp; Thomasma, D.C. (1993). <em>The Virtues in Medical Practice</em>. Oxford University Press.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="outline-light" href="/sources">
              Retour à Nos Sources
            </Button>
            <Button variant="outline-light" href="/approche/iris">
              Découvrir Iris
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
