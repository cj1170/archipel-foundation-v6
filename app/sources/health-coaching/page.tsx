import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Le Health Coaching Coordonné — Nos Sources',
  description: 'Ce que la recherche dit sur le changement. Et ce que cela implique pour le modèle Sherpa d\'ARCHIPEL.',
}

export default function HealthCoachingPage() {
  return (
    <>
      <Section variant="slate" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Nos Sources', href: '/sources' },
              { label: 'Le Health Coaching Coordonné' },
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
            Le Health Coaching Coordonné
          </h1>
          <p className="font-body text-body-lg leading-[1.6] text-linen/80">
            Ce que la recherche dit sur le changement. Et ce que cela implique
            pour le modèle Sherpa.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
          <p>
            Vous savez que dormir huit heures est important. Vous savez que le
            stress chronique abîme le corps. Vous savez que l&apos;alimentation
            joue un rôle. Vous le savez depuis longtemps. Et pourtant.
          </p>
          <p>
            La méta-analyse de Sforzo et al. (<em>BMC Public Health</em>, 2018)
            examine l&apos;efficacité du health coaching comme intervention
            comportementale. Résultat : des effets significatifs sur
            l&apos;activité physique, les marqueurs métaboliques et la qualité
            de vie, à une condition. Que l&apos;intervention cible les
            mécanismes de motivation et d&apos;auto-efficacité. Pas seulement
            la transmission d&apos;information.
          </p>
          <p>
            C&apos;est la différence entre savoir et changer.
          </p>
          <p>
            Le modèle Sherpa d&apos;ARCHIPEL est né de cette réalité. Le Sherpa
            n&apos;est pas un coach générique. Il est coordonné avec les
            praticiens de La Guilde et informé par Iris, ce qui permet une
            continuité et une personnalisation impossibles dans les modèles
            existants. La qualité de la relation Sherpa dans les six premières
            semaines est la variable critique du parcours.
          </p>

          <div className="border-l-2 border-sand/40 pl-6 mt-8">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Référence
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic">
              <li>Sforzo, G.A. et al. (2018). Compendium of the Health and Wellness Coaching Literature. <em>BMC Public Health</em>.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="outline-light" href="/sources">
              Retour à Nos Sources
            </Button>
            <Button variant="outline-light" href="/approche/sherpas">
              Découvrir les Sherpas
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
