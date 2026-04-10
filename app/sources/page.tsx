import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Nos Sources',
  description: 'Les fondements scientifiques et philosophiques d\'ARCHIPEL. Ce qui fonde ce que nous faisons, et pourquoi.',
  openGraph: {
    images: [{ url: '/images/og-sources.jpg', width: 1200, height: 630 }],
  },
}

export default function SourcesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden h-[60vh] flex items-center" style={{backgroundColor: '#1A2B35'}}>
        <img
          src="/images/hero-sources.webp"
          alt="Source d'eau vive dans un sous-bois"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{opacity: 0.50}}
        />
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(26,43,53,0.45)'}} />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-label text-[0.65rem] uppercase tracking-[0.15em] text-sand mb-4">
            NOS SOURCES
          </p>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-4">
            Ce qui nous fonde
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Les origines scientifiques et philosophiques d&apos;ARCHIPEL.
          </p>
        </div>
      </div>

      {/* Bloc intro avant témoignage */}
      <Section variant="linen" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="font-label text-caption uppercase tracking-[0.12em] text-sand mb-4">
            POINT DE DÉPART
          </p>
          <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
            Une reconstruction avant une fondation.
          </h2>
          <p className="font-body text-body leading-[1.7] text-slate_f/80">
            ARCHIPEL n&apos;est pas né d&apos;une théorie. Il est né
            d&apos;une expérience vécue puis d&apos;une découverte : ce que
            ce parcours avait construit sans le savoir avait un nom, des
            preuves, et une cohérence que des décennies de recherche
            confirmaient. Ce qui suit est d&apos;abord un témoignage.
            Puis une démonstration.
          </p>
        </div>
      </Section>

      {/* Bloc témoignage */}
      <Section variant="linen" padding="compact">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <blockquote className="bg-[#E8E2D8] rounded-lg px-8 py-10 space-y-4 border-l-4 border-sand/60">
            <p className="font-body text-body leading-[1.7] text-slate_f/90 italic">
              Pendant 35 ans, j&apos;ai consulté des dizaines de médecins.
              Chacun faisait bien son travail. Aucun ne voyait l&apos;ensemble.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/90 italic">
              En 2019, un neurologue m&apos;a annoncé que je ne remarcherais
              plus jamais. J&apos;étais en fauteuil roulant, sous morphine,
              après des mois de douleurs et d&apos;épisodes traumatiques.
              J&apos;ai quitté le protocole et la maison de santé contre avis
              médical. J&apos;ai cherché, tâtonné, trouvé des pratiques que la
              médecine conventionnelle ne m&apos;avait jamais proposées.
              J&apos;ai remarché. Je me suis sevré de la morphine.
              J&apos;ai créé du lien entre des approches médicales reconnues
              et d&apos;autres plus subtiles.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/90 italic">
              Ce que j&apos;ai fait sans le savoir, sans vocabulaire ni cadre,
              c&apos;est exactement ce que les chercheurs que nous citons ici
              ont mis des décennies à documenter. J&apos;ai renforcé ce qui me
              permettait de tenir debout. Pas malgré ma génétique et mes
              pathologies. Avec elles.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/90 italic">
              ARCHIPEL est né de là. Pas d&apos;une analyse de marché.
              D&apos;une reconstruction.
            </p>
            <footer className="pt-2">
              <span className="font-label text-caption uppercase tracking-[0.1em] text-sand not-italic">
                Cyril Jamot, fondateur
              </span>
            </footer>
          </blockquote>
        </div>
      </Section>

      {/* Liaison + 4 sources */}
      <Section variant="slate" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-12">
          <div>
            <p className="font-label text-caption uppercase tracking-[0.12em] text-sand mb-4">
              NOS FONDEMENTS
            </p>
            <p className="font-body text-body leading-[1.7] text-linen/70 italic">
              Ces quatre cadres scientifiques et philosophiques n&apos;ont
              pas été choisis pour justifier ARCHIPEL. Ils ont été reconnus,
              après coup, comme ce qui décrivait exactement ce qui
              s&apos;était passé, et ce qu&apos;il fallait construire.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen">
              La question qu&apos;on ne pose jamais
            </h2>
            <p className="font-body text-body leading-[1.7] text-linen/80">
              En 1979, un chercheur a retourné la question fondamentale de
              la médecine. Pas &quot;qu&apos;est-ce qui rend malade ?&quot;
              mais &quot;qu&apos;est-ce qui crée la santé ?&quot; Cette
              inversion reste largement ignorée. Elle change pourtant tout
              ce qu&apos;on fait ensuite.
            </p>
            <div>
              <Button variant="secondary" href="/sources/salutogenese">
                En savoir plus
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen">
              Ce qui tient les gens debout
            </h2>
            <p className="font-body text-body leading-[1.7] text-linen/80">
              Comprendre ce qui arrive. Se sentir capable d&apos;y faire
              face. Trouver que ça vaut la peine de s&apos;engager. Trois
              capacités documentées qui prédisent la santé mieux que
              beaucoup d&apos;analyses biologiques. Et 45 à 50% des
              facteurs de longévité qui restent modifiables (Shenhar et
              al., Science, janvier 2026).
            </p>
            <div>
              <Button variant="secondary" href="/sources/sens-de-coherence">
                En savoir plus
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen">
              Pourquoi l&apos;information seule ne suffit pas
            </h2>
            <p className="font-body text-body leading-[1.7] text-linen/80">
              Vous savez ce qu&apos;il faudrait faire. Vous le savez depuis
              longtemps. Ce qui manque, ce n&apos;est pas l&apos;information.
              C&apos;est l&apos;espace pour construire le changement, avec
              quelqu&apos;un qui connaît votre histoire.
            </p>
            <div>
              <Button variant="secondary" href="/sources/health-coaching">
                En savoir plus
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen">
              Ce qu&apos;une IA ne peut pas faire à votre place
            </h2>
            <p className="font-body text-body leading-[1.7] text-linen/80">
              Iris peut beaucoup. Mais décider ce qui est juste pour vous,
              dans votre vie, avec ce que vous portez sans le dire, cela
              demande autre chose que du savoir. Aristote avait un mot pour
              ça. Nos Sherpas le cultivent.
            </p>
            <div>
              <Button variant="secondary" href="/sources/phronesis">
                En savoir plus
              </Button>
            </div>
          </div>

        </div>
      </Section>

      {/* Conclusion + CTA */}
      <Section variant="linen" padding="default">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 space-y-6">
          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <p>
              Vous n&apos;êtes pas un dossier médical. Vous n&apos;êtes pas un
              ensemble de symptômes à corriger. ARCHIPEL crée les conditions
              pour que vous compreniez ce qui vous fait tenir debout, et pour
              que vous construisiez sur ça. Avec les bonnes personnes. Dans
              la durée.
            </p>
            <p>
              C&apos;est ce que la médecine n&apos;a jamais eu le temps de
              faire. C&apos;est exactement ce pour quoi ARCHIPEL a été fondé.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="secondary" href="/approche">
              Découvrir notre approche
            </Button>
            <Button variant="outline-light" href="#pionniers">
              Rejoindre les pionniers
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
