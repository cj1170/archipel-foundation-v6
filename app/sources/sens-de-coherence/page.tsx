import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Le Sens de Cohérence — Nos Sources',
  description: 'Trois capacités documentées qui prédisent la santé. Le Sens de Cohérence d\'Antonovsky au coeur du modèle ARCHIPEL.',
}

export default function SensDeCoherencePage() {
  return (
    <>
      <Section variant="slate" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Nos Sources', href: '/sources' },
              { label: 'Le Sens de Cohérence' },
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
            Le Sens de Cohérence
          </h1>
          <p className="font-body text-body-lg leading-[1.6] text-linen/80">
            Trois capacités. Documentées. Modifiables. Au coeur de tout ce
            qu&apos;ARCHIPEL construit.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
          <p>
            Antonovsky identifie un facteur commun chez les personnes qui
            traversent les épreuves sans s&apos;effondrer. Il l&apos;appelle
            le Sense of Coherence (Sens de Cohérence). Trois capacités
            combinées.
          </p>
          <ul className="space-y-3 pl-4 list-none">
            <li>Comprendre ce qui arrive : le monde n&apos;est pas chaotique, ce qui se passe a une logique.</li>
            <li>Se sentir capable d&apos;y faire face : on n&apos;est pas seul, on a des ressources.</li>
            <li>Trouver que ça vaut la peine de s&apos;engager : ça a du sens.</li>
          </ul>
          <p>
            Ce n&apos;est pas de l&apos;optimisme. Ce n&apos;est pas du coaching
            positif. C&apos;est un mécanisme documenté, mesuré et robuste. Des
            décennies de recherche confirment que le Sens de Cohérence prédit
            la santé physique et mentale indépendamment du niveau de revenus ou
            du contexte social.
          </p>
          <p>
            Les travaux de Shenhar et al. (<em>Science</em>, janvier 2026)
            précisent que la génétique représente environ 55% des déterminants
            de longévité. Les 45 à 50% restants sont modifiables.
            C&apos;est là qu&apos;ARCHIPEL travaille.
          </p>
          <p>
            TÊTE, COEUR et CORPS sont la traduction concrète du Sens de
            Cohérence : votre façon de penser et de comprendre, votre vie
            émotionnelle et relationnelle, votre corps et ce qu&apos;il
            ressent. Ces trois dimensions s&apos;enracinent dans un MILIEU :
            vos rythmes, vos saisons, la qualité de votre cadre de vie. Pas
            un pilier de plus. Le sol dans lequel tout le reste pousse.
          </p>

          <div className="border-l-2 border-sand/40 pl-6 mt-8">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic">
              <li>Antonovsky, A. (1987). <em>Unraveling the Mystery of Health</em>. Jossey-Bass.</li>
              <li>Shenhar, Y. et al. (2026). <em>Science</em>, vol. 391, pp. 504-510.</li>
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
