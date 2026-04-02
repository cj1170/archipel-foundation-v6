import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';
import GuildeForm from '../GuildeForm';

export const metadata: Metadata = {
  title: 'Candidature Praticien — La Guilde',
  description:
    'Processus de candidature pour rejoindre La Guilde ARCHIPEL. 4 étapes : candidature, rencontre, alignement, engagement.',
};

const ETAPES = [
  {
    nom: 'Candidature',
    demande: 'Formulaire court + spécialité + ville + pourquoi La Guilde',
    evalue: 'Cohérence pratique/philosophie',
    donne: 'Accusé 48h, retour humain 15 jours',
  },
  {
    nom: 'Rencontre',
    demande: 'Échange 45 min sur valeurs, pratique, vision coordination',
    evalue: 'Vision du soin + présentation cadre déontologique et serment',
    donne: 'Retour argumenté 7 jours',
  },
  {
    nom: 'Alignement',
    demande: 'Formation ARCHIPEL : philosophie, outils (Iris, Sherpa), protocoles',
    evalue: 'Compréhension du cadre et des protocoles',
    donne: 'Certification ARCHIPEL, accès Academia, badge',
  },
  {
    nom: 'Engagement',
    demande: 'Accès plateforme, premières personnes orientées',
    evalue: 'Retours sur les premiers parcours',
    donne: 'Dashboard praticien, réseau actif, communauté',
  },
];

export default function CandidaturePage() {
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
            <a href="/guilde" className="hover:text-sand transition-colors">La Guilde</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-sand">Candidature</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Rejoindre La Guilde
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Processus de candidature
          </h1>
          <p className="font-body text-h4 text-linen/70">
            4 étapes pour rejoindre La Guilde. Un processus transparent, exigeant
            et respectueux de votre expertise.
          </p>
        </div>
      </Section>

      {/* 4 étapes */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 mb-16">
            {ETAPES.map((e, i) => (
              <div
                key={e.nom}
                className="bg-slate_f text-linen rounded-lg p-6 lg:p-8"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-heading text-h2 tracking-[-0.02em] text-sand">
                    0{i + 1}
                  </span>
                  <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen">
                    {e.nom}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="font-label text-caption uppercase tracking-[0.08em] text-tete block mb-1">
                      Ce qu&apos;on demande
                    </span>
                    <p className="font-body text-body-sm text-linen/80">
                      {e.demande}
                    </p>
                  </div>
                  <div>
                    <span className="font-label text-caption uppercase tracking-[0.08em] text-tete block mb-1">
                      Ce qu&apos;on évalue
                    </span>
                    <p className="font-body text-body-sm text-linen/80">
                      {e.evalue}
                    </p>
                  </div>
                  <div>
                    <span className="font-label text-caption uppercase tracking-[0.08em] text-tete block mb-1">
                      Ce qu&apos;on donne
                    </span>
                    <p className="font-body text-body-sm text-linen/80">
                      {e.donne}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Praticien fondateur */}
          <div className="bg-steel-blue/10 border border-steel-blue/20 rounded-lg p-6 lg:p-8 mb-16">
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
              Statut Praticien fondateur
            </h2>
            <p className="font-body text-body leading-[1.6] text-slate_f/80">
              Praticien fondateur — statut temporaire lié à la phase de
              constitution. Co-construction des protocoles, participation aux
              premiers retours d&apos;expérience, voix dans les décisions du
              réseau. Ce n&apos;est pas un titre honorifique : c&apos;est une
              responsabilité réelle.
            </p>
          </div>
        </div>
      </Section>

      {/* Formulaire */}
      <Section variant="steel" padding="default" id="formulaire-candidature">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
              Candidater pour La Guilde
            </h2>
            <p className="font-body text-body leading-[1.6] text-linen/80">
              Ce formulaire ouvre un échange, pas un engagement. Nous prendrons
              contact avec vous pour discuter de votre profil et de la manière
              dont votre pratique s&apos;inscrit dans l&apos;écosystème ARCHIPEL.
            </p>
          </div>

          <div className="lg:col-span-3">
            <GuildeForm />
          </div>
        </div>
      </Section>

      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="secondary" href="/guilde">
              Retour à La Guilde
            </Button>
            <Button variant="secondary" href="/guilde/deontologie">
              Le Cadre Déontologique
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
