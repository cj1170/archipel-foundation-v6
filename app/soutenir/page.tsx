import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';
import SoutenirForm from './SoutenirForm';

export const metadata: Metadata = {
  title: 'Soutenir ARCHIPEL',
  description:
    'Rejoignez les Cercles de Fondateurs et soutenez la création d\'un écosystème de santé préventive ouvert à tous.',
  openGraph: {
    images: [{ url: '/images/og-soutenir.jpg', width: 1200, height: 630 }],
  },
};

const CERCLES = [
  {
    nom: 'Explorateur',
    sousTitre: 'Donateurs',
    description:
      'Vous croyez en cette vision et souhaitez contribuer à son développement.',
    benefices: [
      'Accès prioritaire à la liste d\u2019attente',
      'Newsletter exclusive',
      'Invitation événements annuels',
      'Reconnaissance mur des soutiens',
    ],
    border: 'border border-sand/30',
    badge: null,
  },
  {
    nom: 'Bâtisseur',
    sousTitre: 'Mécènes',
    description:
      'Vous investissez dans la construction de l\u2019écosystème ARCHIPEL.',
    benefices: [
      'Tout Explorateur',
      'Rencontres trimestrielles équipe fondatrice',
      'Accès anticipé au programme quand il sera disponible',
      'Influence feuille de route',
      'Reconnaissance nominative',
    ],
    border: 'border-2 border-sand',
    badge: 'Recommandé',
  },
  {
    nom: 'Architecte',
    sousTitre: 'Co-fondateurs',
    description:
      'Vous co-construisez ARCHIPEL et façonnez son avenir aux côtés de l\u2019équipe.',
    benefices: [
      'Tout Bâtisseur',
      'Accès direct au fondateur',
      'Co-construction feuille de route',
      'Siège observateur Conseil',
      'Rapports trimestriels',
    ],
    border: 'border-2 border-coeur',
    badge: null,
  },
];

export default function SoutenirPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO SOUTENIR
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="hero">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6 block">
            Soutenir
          </span>

          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Devenez fondateur d&apos;un autre rapport à la santé.
          </h1>

          <p className="font-body text-h4 text-sand">
            ARCHIPEL Foundation construit l&apos;infrastructure d&apos;une santé
            qui ne commence pas par la maladie. Votre soutien en est le socle.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — POURQUOI SOUTENIR
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Texte — 60% */}
          <div className="lg:col-span-3">
            <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
              Votre impact
            </span>
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
              5 axes financés par votre soutien.
            </h2>
            <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
              <p>
                Chaque contribution, quelle que soit sa forme, finance
                directement les cinq axes de mission : accessibilité, éducation,
                recherche, plaidoyer, souveraineté des données.
              </p>
              <p>
                Un don permet de financer l&apos;accès au programme pour une
                personne qui n&apos;en a pas les moyens, via le Fonds de
                Bourses.
              </p>
            </div>
          </div>

          {/* Visuel — 40% */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-dashed border-steel-blue/30 flex items-center justify-center">
              <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue/40 text-center px-4">
                Don &rarr; Foundation &rarr; 5 axes &rarr; Impact
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — LES CERCLES DE FONDATEURS
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="default">
        <div className="text-center mb-12">
          <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
            Les Cercles de Fondateurs
          </span>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
            Trois niveaux d&apos;engagement pour façonner l&apos;avenir de la
            santé.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CERCLES.map((cercle) => (
            <div
              key={cercle.nom}
              className={`bg-linen rounded-lg p-6 lg:p-8 ${cercle.border} flex flex-col relative`}
            >
              {cercle.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sand text-slate_f font-label text-caption uppercase tracking-[0.08em] px-3 py-1 rounded-full">
                  {cercle.badge}
                </span>
              )}
              <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue mb-1">
                {cercle.sousTitre}
              </span>
              <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
                Cercle {cercle.nom}
              </h3>
              <p className="font-body text-body-sm text-slate_f/70 mb-6">
                {cercle.description}
              </p>
              <ul className="space-y-2 mt-auto font-body text-body-sm text-slate_f/80">
                {cercle.benefices.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-sand mt-0.5" aria-hidden="true">
                      &bull;
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — STATUT JURIDIQUE ET FISCAL
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-body-sm text-slate_f/60 leading-[1.6]">
            ARCHIPEL Foundation est un fonds de dotation en cours
            d&apos;enregistrement auprès de la Préfecture, conformément à la loi
            n° 2008-776 du 4 août 2008.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — FORMULAIRE SOUTENIR
          ═══════════════════════════════════════════ */}
      <Section variant="steel" padding="default" id="formulaire-soutenir">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Contexte — 2/5 */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
              Je souhaite soutenir ARCHIPEL
            </h2>
            <p className="font-body text-body leading-[1.6] text-linen/80 mb-4">
              Ce formulaire ne constitue pas un engagement financier. Il nous
              permet de prendre contact avec vous pour discuter de votre soutien
              et de la forme qu&apos;il pourrait prendre.
            </p>
            <p className="font-body text-body-sm text-tete/70 italic">
              Toute information transmise est confidentielle et traitée
              conformément à notre politique de confidentialité.
            </p>
          </div>

          {/* Formulaire — 3/5 */}
          <div className="lg:col-span-3">
            <SoutenirForm />
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — CTA FINAL
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-8 italic">
            &laquo;&nbsp;Le médecin est le confident de la maladie. ARCHIPEL est
            le confident de la santé.&nbsp;&raquo;
          </blockquote>

          <Button variant="accent" size="lg" href="/#pionniers">
            Rejoindre les pionniers
          </Button>
        </div>
      </Section>
    </>
  );
}
