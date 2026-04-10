import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'La Phronésis — Nos Sources',
  description: 'Pas une limitation d\'Iris. Une architecture délibérée.',
}

export default function PhronesisPage() {
  return (
    <>
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60">
            <a href="/" className="hover:text-sand transition-colors">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/sources" className="hover:text-sand transition-colors">Nos Sources</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">La Phronésis</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Nos Sources
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            La Phronésis
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Pas une limitation d&apos;Iris.
            Une architecture délibérée.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Ce qu&apos;une IA ne peut pas faire à votre place
            </h2>
            <p>
              Iris peut beaucoup. Elle retient tout ce que vous lui confiez, fait des liens que personne ne ferait en consultation de quinze minutes, prépare chaque échange avec votre Sherpa, coordonne les informations entre les praticiens de La Guilde.
            </p>
            <p>
              Mais il y a quelque chose qu&apos;Iris ne fera jamais. Pas parce qu&apos;elle n&apos;est pas assez avancée. Parce que c&apos;est structurellement impossible.
            </p>
          </div>

          <div className="space-y-6 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Les trois formes du savoir
            </h2>
            <p>Aristote distinguait trois formes de savoir.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#E8E2D8] rounded-lg p-6 space-y-3">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">L&apos;épistèmè</p>
                <p className="font-body text-body-sm leading-[1.7] text-slate_f/80">
                  Le savoir théorique, universel, démontrable. Ce qui est vrai partout et toujours. Une loi physique, un résultat d&apos;étude, un fait biologique.
                </p>
                <p className="font-body text-body-sm text-slate_f/50 italic">Iris maîtrise l&apos;épistèmè.</p>
              </div>
              <div className="bg-[#E8E2D8] rounded-lg p-6 space-y-3">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">La technè</p>
                <p className="font-body text-body-sm leading-[1.7] text-slate_f/80">
                  Le savoir-faire technique, reproductible. Appliquer une méthode pour produire un résultat. Analyser des données, coordonner un parcours, détecter des signaux.
                </p>
                <p className="font-body text-body-sm text-slate_f/50 italic">Iris maîtrise la technè.</p>
              </div>
              <div className="bg-[#E8E2D8] rounded-lg p-6 space-y-3">
                <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">La phronésis</p>
                <p className="font-body text-body-sm leading-[1.7] text-slate_f/80">
                  La sagesse pratique. La capacité de délibérer correctement sur ce qui est juste pour une personne singulière, dans une situation singulière, avec son histoire et ses contraintes.
                </p>
                <p className="font-body text-body-sm text-slate_f/50 italic">Iris ne peut pas exercer la phronésis.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Ce n&apos;est pas de l&apos;intuition
            </h2>
            <p>
              La phronésis est souvent confondue avec l&apos;intuition. C&apos;est une erreur.
            </p>
            <p>
              L&apos;intuition est une impression qui vient sans qu&apos;on sache pourquoi. La phronésis est un jugement formé, forgé par l&apos;expérience, qui intègre la connaissance, le contexte et la dimension éthique de la décision.
            </p>
            <p>
              Un Sherpa qui ajuste son approche parce qu&apos;il sent que la personne n&apos;est pas prête ne le fait pas par instinct. Il le fait parce qu&apos;il a appris à reconnaître plusieurs lectures possibles d&apos;une situation, à tolérer l&apos;incertitude sans la résoudre prématurément, à hiérarchiser ce que la personne a besoin d&apos;entendre.
            </p>
          </div>

          <div className="space-y-4 font-body text-body leading-[1.7] text-slate_f/80">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f">
              Les cinq registres du jugement situé
            </h2>
            <div className="space-y-3 pl-4 border-l-2 border-sand/30">
              <p>Reconnaître plusieurs lectures possibles d&apos;une situation, sans choisir trop vite.</p>
              <p>Tolérer l&apos;incertitude sans la résoudre prématurément, parce que la précipitation fait plus de dégâts que l&apos;hésitation.</p>
              <p>Hiérarchiser les besoins de la personne sans les réduire, parce que ce qu&apos;elle demande n&apos;est pas toujours ce dont elle a besoin.</p>
              <p>Décider du moment et de la forme de l&apos;intervention, parce que le quand est aussi important que le quoi.</p>
              <p>Entendre ce que la personne cherche à comprendre d&apos;elle-même au-delà de sa demande explicite.</p>
            </div>
          </div>

          <div className="bg-[#E8E2D8] rounded-lg px-8 py-8 space-y-4">
            <p className="font-label text-caption uppercase tracking-[0.12em] text-sand">
              Iris rend le jugement possible. Elle ne le remplace pas.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              La distinction entre Iris et le Sherpa n&apos;est pas une hiérarchie. C&apos;est une complémentarité structurelle.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              Iris produit le savoir qui rend le jugement possible. Sans ce savoir, le Sherpa travaillerait à l&apos;aveugle. Avec lui, il peut exercer son jugement sur une base solide.
            </p>
            <p className="font-body text-body leading-[1.7] text-slate_f/80">
              Savoir n&apos;est pas juger. Iris sait. Le Sherpa juge. Aucun des deux ne peut faire le travail de l&apos;autre. C&apos;est cette architecture délibérée qui distingue ARCHIPEL des modèles où l&apos;IA est censée tout faire, ou des modèles où l&apos;humain travaille sans information.
            </p>
          </div>

          <div className="border-l-2 border-sand/40 pl-6">
            <p className="font-label text-caption uppercase tracking-[0.1em] text-sand mb-3">
              Références
            </p>
            <ul className="space-y-2 text-slate_f/60 text-sm italic font-body">
              <li>Aristote. <em>Éthique à Nicomaque</em>, Livre VI.</li>
              <li>Pellegrino, E.D. &amp; Thomasma, D.C. (1993). <em>The Virtues in Medical Practice</em>. Oxford University Press.</li>
              <li>Kaldjian, L.C. (2014). <em>Practicing Medicine and Ethics</em>. Cambridge University Press.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="/sources/health-coaching" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              &larr; Le Health Coaching
            </a>
            <a href="/sources" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Retour à Nos Sources
            </a>
            <a href="/approche/iris" className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-4 py-2 hover:bg-sand/10 transition-colors inline-block">
              Découvrir Iris &rarr;
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
