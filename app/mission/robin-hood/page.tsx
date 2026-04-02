import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Le Modèle Robin Hood',
  description:
    'Le modèle Robin Hood d\u2019ARCHIPEL : le premium finance l\u2019accessibilité. Un mécanisme inscrit dans les statuts pour que la santé préventive ne reste pas un privilège.',
};

export default function RobinHoodPage() {
  return (
    <>
      {/* HERO */}
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mx-auto">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60"
          >
            <a href="/" className="hover:text-sand transition-colors">
              Accueil
            </a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a href="/mission" className="hover:text-sand transition-colors">
              Mission
            </a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Robin Hood</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Accessibilité
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Le Modèle Robin Hood
          </h1>
          <p className="font-body text-h4 text-linen/70">
            Le premium finance l&apos;accès. La santé préventive coordonnée ne
            peut pas rester un privilège.
          </p>
        </div>
      </Section>

      {/* LE PRINCIPE */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-steel-blue mb-4 block">
            Le principe
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Comment ça marche
          </h2>
          <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
            <p>
              La santé préventive est aujourd&apos;hui structurellement
              inaccessible à la majorité. Les parcours coordonnés, le health
              coaching, les approches intégratives : tout cela existe, mais
              uniquement pour ceux qui en ont les moyens.
            </p>
            <p>
              Le modèle Robin Hood d&apos;ARCHIPEL repose sur un mécanisme
              simple : une partie des revenus générés par ARCHIPEL LIFE SAS
              (société à mission) est reversée annuellement à la Fondation, via
              une clause statutaire irrévocable. Ce reversement finance
              directement les cinq axes de mission, dont l&apos;accessibilité.
            </p>
            <p>
              Concrètement, chaque personne qui bénéficie du programme premium
              contribue, par son engagement, à financer l&apos;accès pour une
              personne qui n&apos;en a pas les moyens. Le premium finance
              l&apos;accès. Ce n&apos;est pas une option caritative. C&apos;est
              un mécanisme structurel.
            </p>
          </div>
        </div>
      </Section>

      {/* LE FONDS DE BOURSES */}
      <Section variant="steel" padding="default">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-tete mb-4 block">
            Le levier
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
            Le Fonds de Bourses
          </h2>
          <div className="space-y-4 font-body text-body leading-[1.6] text-linen/80">
            <p>
              Le Fonds de Bourses est l&apos;instrument principal de
              l&apos;accessibilité. Il est alimenté par le reversement
              statutaire d&apos;ARCHIPEL LIFE, par les dons des mécènes et
              donateurs, et par les financements institutionnels.
            </p>
            <p>
              Il permet de financer l&apos;accès au programme pour des personnes
              identifiées comme éloignées d&apos;un parcours de santé coordonné
              : personnes en situation de précarité, populations isolées,
              personnes confrontées à des angles morts du système de santé.
            </p>
            <p>
              Le Fonds de Bourses est géré par la Fondation, sous le contrôle du
              Conseil de Fondation. Les critères d&apos;attribution sont
              publics. Les bénéficiaires sont anonymisés dans les rapports.
            </p>
          </div>
        </div>
      </Section>

      {/* L'ENGAGEMENT */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-steel-blue mb-4 block">
            La garantie
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
            Inscrit dans les statuts
          </h2>
          <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
            <p>
              Le modèle Robin Hood n&apos;est pas une promesse marketing.
              C&apos;est un engagement juridique. La clause de reversement est
              inscrite dans les statuts d&apos;ARCHIPEL LIFE SAS et dans la
              Charte Fondatrice d&apos;ARCHIPEL Foundation.
            </p>
            <p>
              Cette clause est irrévocable : elle ne peut être modifiée ni par
              la direction de la SAS, ni par la direction de la Fondation, sans
              l&apos;approbation du Conseil de Fondation et du Comité
              d&apos;Éthique. Le mécanisme est conçu pour survivre aux
              personnes qui l&apos;ont créé.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" href="/soutenir">
              Soutenir ARCHIPEL
            </Button>
            <Button variant="outline-light" href="/mission">
              Retour à Notre Mission
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
