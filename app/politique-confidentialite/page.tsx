import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-h1 tracking-[-0.02em] text-linen">
            Politique de Confidentialité
          </h1>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Responsable du traitement */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Responsable du traitement
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>
                ARCHIPEL Foundation — Fonds de dotation en cours
                d&apos;enregistrement auprès de la Préfecture de Paris.
              </p>
              <p>
                Contact :{' '}
                <a
                  href="mailto:contact@archipel.foundation"
                  className="text-steel-blue hover:text-slate_f transition-colors underline"
                >
                  contact@archipel.foundation
                </a>
              </p>
            </div>
          </div>

          {/* Données collectées */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Données collectées
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>
                Les données personnelles collectées via les formulaires du site
                sont les suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Formulaire Pionniers :</strong> prénom, email
                </li>
                <li>
                  <strong>Formulaire Soutenir :</strong> prénom, nom, email,
                  organisation (optionnel), cercle d&apos;intérêt, message
                  (optionnel)
                </li>
                <li>
                  <strong>Formulaire Guilde :</strong> prénom, nom, email,
                  profession, ville, spécialités, motivation
                </li>
              </ul>
              <p>
                Aucun cookie n&apos;est déposé sur votre navigateur.
                L&apos;analytics est assurée par Plausible (hébergé en UE, sans
                cookies, sans bandeau de consentement).
              </p>
            </div>
          </div>

          {/* Finalités */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Finalités du traitement
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  La gestion des contacts et des demandes de soutien ou de
                  candidature
                </li>
                <li>
                  L&apos;envoi de communications relatives au projet ARCHIPEL
                  (newsletter, avancées, événements)
                </li>
                <li>
                  Le suivi interne des candidatures praticiens (La Guilde)
                </li>
              </ul>
            </div>
          </div>

          {/* Base légale */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Base légale
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              Le traitement de vos données repose sur votre consentement
              explicite, recueilli via la case à cocher présente sur chaque
              formulaire. Vous pouvez retirer votre consentement à tout moment
              en nous contactant.
            </p>
          </div>

          {/* Durée de conservation */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Durée de conservation
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              Vos données sont conservées pendant une durée maximale de 3 ans à
              compter de votre dernier contact avec ARCHIPEL Foundation, sauf
              obligation légale contraire. Vous pouvez demander leur suppression
              anticipée à tout moment.
            </p>
          </div>

          {/* Droits des personnes */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Vos droits
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition au traitement</li>
              </ul>
              <p>
                Pour exercer ces droits, adressez votre demande à{' '}
                <a
                  href="mailto:contact@archipel.foundation"
                  className="text-steel-blue hover:text-slate_f transition-colors underline"
                >
                  contact@archipel.foundation
                </a>
                . Une réponse vous sera apportée dans un délai de 30 jours.
              </p>
              <p>
                Vous disposez également du droit d&apos;introduire une
                réclamation auprès de la CNIL (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-blue hover:text-slate_f transition-colors underline"
                >
                  www.cnil.fr
                </a>
                ).
              </p>
            </div>
          </div>

          {/* Hébergement des données */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Hébergement et sous-traitants
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>
                Les données collectées sont hébergées et traitées par les
                prestataires suivants, tous conformes au RGPD :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Notion API</strong> — stockage des données de
                  formulaires (serveurs UE)
                </li>
                <li>
                  <strong>Vercel</strong> — hébergement du site web
                </li>
                <li>
                  <strong>Brevo</strong> — envoi d&apos;emails transactionnels
                  et newsletter (RGPD-natif, serveurs UE)
                </li>
                <li>
                  <strong>Plausible Analytics</strong> — analytics sans cookies
                  (hébergé en UE)
                </li>
              </ul>
              <p>
                Aucune donnée personnelle n&apos;est transférée hors de
                l&apos;Union Européenne sans garanties appropriées.
              </p>
            </div>
          </div>

          {/* Contact DPO */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Contact — Protection des données
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              Pour toute question relative à la protection de vos données
              personnelles :{' '}
              <a
                href="mailto:contact@archipel.foundation"
                className="text-steel-blue hover:text-slate_f transition-colors underline"
              >
                contact@archipel.foundation
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
