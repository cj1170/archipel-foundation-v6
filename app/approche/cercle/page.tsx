import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le Cercle',
  description:
    'Le Cercle est le binôme Sherpa + Iris au service de la personne. Comment fonctionne la coordination au quotidien dans l\u2019écosystème ARCHIPEL.',
};

export default function CerclePage() {
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
            <span className="text-sand">Le Cercle</span>
          </nav>

          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
            Coordination
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Cercle
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Sherpa + Iris + vous. Le triangle de confiance qui coordonne votre
            parcours de santé au quotidien.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Un binôme complémentaire
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Le Cercle est la cellule de base du parcours ARCHIPEL. Il réunit
                votre Sherpa (le lien humain) et Iris (le compagnon IA) autour
                de vous. Chacun a un rôle distinct et complémentaire.
              </p>
              <p>
                Iris observe en continu, archive, identifie des patterns et
                prépare les échanges. Le Sherpa interprète, contextualise,
                décide avec vous et mobilise La Guilde quand c&apos;est
                nécessaire. Vous restez au centre : informé, consulté, décideur.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              La coordination au quotidien
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Concrètement, le Cercle fonctionne en boucle continue. Iris
                recueille vos observations et signaux entre les sessions avec
                votre Sherpa. Le Sherpa consulte la synthèse d&apos;Iris avant
                chaque échange avec vous. Si un praticien de La Guilde
                intervient, il reçoit le contexte pertinent via Iris, avec votre
                consentement.
              </p>
              <p>
                Le résultat : plus de continuité, moins de répétitions, une
                coordination invisible mais réelle. Vous n&apos;avez pas à
                raconter votre histoire à chaque nouveau praticien.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              La place de la personne
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80">
              Le Cercle ne fonctionne pas sans vous. Chaque partage
              d&apos;information nécessite votre consentement. Chaque
              orientation vers un praticien est discutée avec vous. Le Cercle
              coordonne, il ne décide pas à votre place. C&apos;est votre
              parcours. Le Cercle est là pour le rendre cohérent.
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
