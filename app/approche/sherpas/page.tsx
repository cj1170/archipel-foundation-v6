import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Les Sherpas',
  description:
    'Les Sherpas sont des coachs santé formés et certifiés qui vous accompagnent dans la durée. Le lien humain au cœur du parcours ARCHIPEL.',
};

export default function SherpasPage() {
  return (
    <>
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60"
          >
            <a href="/" className="hover:text-sand transition-colors">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/approche" className="hover:text-sand transition-colors">Approche</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Les Sherpas</span>
          </nav>

          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
            Le lien humain
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Les Sherpas
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Des coachs santé formés et certifiés qui vous accompagnent dans la
            durée. Votre premier interlocuteur humain dans le parcours.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Le rôle du Sherpa
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Le Sherpa observe vos rythmes, écoute votre histoire, lit les
                signaux subtils et les non-dits, propose des ajustements, et
                reste votre premier interlocuteur humain dans le parcours.
                C&apos;est la dimension CŒUR incarnée.
              </p>
              <p>
                Contrairement à un coach classique, le Sherpa travaille en
                coordination permanente avec Iris et La Guilde. Il a accès à une
                vue globale de votre parcours et peut mobiliser les ressources
                de l&apos;écosystème quand c&apos;est nécessaire.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Formation et certification
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Chaque Sherpa suit une formation ARCHIPEL certifiante qui
                couvre la philosophie salutogénique, le cadre
                TÊTE&bull;CŒUR&bull;CORPS, les outils de coordination (Iris),
                les protocoles d&apos;accompagnement, et le cadre déontologique.
              </p>
              <p>
                Les Sherpas passent un entretien annuel devant le CIES pour
                maintenir leur certification. Ce n&apos;est pas une formalité :
                c&apos;est un engagement de qualité continu.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              La relation avec Iris
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Iris augmente les capacités du Sherpa. Elle lui fournit des
                observations longitudinales, des patterns identifiés, des
                alertes contextualisées. Le Sherpa apporte ce qu&apos;Iris ne
                peut pas offrir : l&apos;empathie, l&apos;intuition clinique,
                la capacité à lire les non-dits.
              </p>
              <p>
                Ensemble, ils forment un binôme complémentaire : l&apos;IA et
                l&apos;humain, chacun dans son rôle, au service de la personne.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              La primauté de l&apos;humain
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80">
              Dans le parcours ARCHIPEL, le Sherpa a toujours le dernier mot
              face à Iris. Si une suggestion d&apos;Iris ne correspond pas à ce
              que le Sherpa observe dans la relation, c&apos;est le jugement
              humain qui prévaut. La technologie sert l&apos;humain, jamais
              l&apos;inverse.
            </p>
          </div>

          <div className="pt-4">
            <Button variant="outline-light" href="/approche">
              Retour à Notre Approche
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
