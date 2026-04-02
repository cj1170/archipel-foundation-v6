import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Fondements Scientifiques',
  description:
    'Les fondements scientifiques d\u2019ARCHIPEL : Salutogénèse, Sens de Cohérence, health coaching coordonné. Références académiques sourcées.',
};

export default function FondementsPage() {
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
            <span className="text-sand">Fondements Scientifiques</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            La science derrière ARCHIPEL
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            Fondements Scientifiques
          </h1>
          <p className="font-body text-h4 text-linen/70">
            ARCHIPEL ne repose pas sur des intuitions. Chaque pilier de
            l&apos;approche s&apos;appuie sur des travaux de recherche
            identifiés et référencés.
          </p>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Salutogénèse */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              La Salutogénèse (Antonovsky, 1979)
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                En 1979, le sociologue médical Aaron Antonovsky publie
                &laquo;&nbsp;Health, Stress, and Coping&nbsp;&raquo;. Il y
                propose un renversement de perspective : au lieu de chercher ce
                qui rend malade (pathogénèse), chercher ce qui crée la santé
                (Salutogénèse).
              </p>
              <p>
                Son étude sur des femmes survivantes de la Shoah révèle que
                certaines d&apos;entre elles, malgré un trauma extrême,
                présentent des indicateurs de santé remarquablement stables.
                La question n&apos;est plus &laquo;&nbsp;pourquoi tombons-nous
                malades ?&nbsp;&raquo; mais &laquo;&nbsp;comment restons-nous
                en bonne santé ?&nbsp;&raquo;.
              </p>
            </div>
            <p className="font-body text-caption text-steel-blue mt-4 italic">
              Antonovsky, A. (1979). Health, Stress, and Coping. Jossey-Bass.
            </p>
          </div>

          {/* Sens de Cohérence */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Le Sens de Cohérence (SOC)
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Antonovsky identifie un concept central : le Sense of Coherence
                (SOC), la capacité d&apos;une personne à percevoir le monde
                comme compréhensible (je comprends ce qui m&apos;arrive),
                gérable (j&apos;ai les ressources pour y faire face) et porteur
                de sens (cela vaut la peine de s&apos;engager).
              </p>
              <p>
                Des décennies de recherche confirment que le SOC est un
                prédicteur robuste de santé physique et mentale, indépendamment
                du contexte socio-économique. Le cadre TÊTE&bull;CŒUR&bull;CORPS
                d&apos;ARCHIPEL en est la traduction opérationnelle.
              </p>
            </div>
            <p className="font-body text-caption text-steel-blue mt-4 italic">
              Antonovsky, A. (1987). Unraveling the Mystery of Health. Jossey-Bass.
            </p>
          </div>

          {/* Shenhar et al. */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Cohérence de sens et marqueurs biologiques (Shenhar et al., 2026)
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                Les travaux récents de Shenhar et al. explorent les corrélations
                entre le Sens de Cohérence et des marqueurs biologiques
                mesurables : inflammation systémique, réponse immunitaire,
                marqueurs de stress oxydatif.
              </p>
              <p>
                Ces recherches ouvrent la voie à une validation objective de
                l&apos;approche salutogénique, au-delà des questionnaires
                déclaratifs. ARCHIPEL Foundation finance des projets de recherche
                dans cette direction.
              </p>
            </div>
            <p className="font-body text-caption text-steel-blue mt-4 italic">
              Shenhar, Y. et al. (2026). Science. (Référence à confirmer.)
            </p>
          </div>

          {/* Health coaching */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Health coaching coordonné (Sforzo et al., 2018)
            </h2>
            <div className="font-body text-body leading-[1.6] text-slate_f/80 space-y-4">
              <p>
                La méta-analyse de Sforzo et al. (2018) dans BMC Health Services
                Research examine l&apos;efficacité du health coaching comme
                intervention comportementale. Les résultats montrent des effets
                significatifs sur l&apos;activité physique, la gestion du poids,
                les marqueurs métaboliques et la qualité de vie auto-déclarée.
              </p>
              <p>
                Le modèle Sherpa d&apos;ARCHIPEL s&apos;inscrit dans cette
                lignée, avec une différence structurelle : le coaching est
                coordonné avec les praticiens de La Guilde et informé par Iris,
                ce qui permet une personnalisation et une continuité
                impossibles dans les modèles existants.
              </p>
            </div>
            <p className="font-body text-caption text-steel-blue mt-4 italic">
              Sforzo, G.A. et al. (2018). Compendium of the Health and Wellness
              Coaching Literature. BMC Health Services Research.
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
