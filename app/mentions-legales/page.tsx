import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-h1 tracking-[-0.02em] text-linen">
            Mentions Légales
          </h1>
        </div>
      </Section>

      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Éditeur */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Éditeur du site
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>
                ARCHIPEL Foundation — Fonds de dotation en cours
                d&apos;enregistrement auprès de la Préfecture de Paris,
                conformément à la loi n° 2008-776 du 4 août 2008.
              </p>
              <p>Siège social : Paris, France.</p>
            </div>
          </div>

          {/* Directeur de la publication */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Directeur de la publication
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              Cyril Jamot, Président-Fondateur d&apos;ARCHIPEL Foundation.
            </p>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Hébergement
            </h2>
            <div className="font-body text-body leading-relaxed text-slate_f/80 space-y-2">
              <p>
                Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789,
                États-Unis.
              </p>
              <p>
                Site web :{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-blue hover:text-slate_f transition-colors underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Propriété intellectuelle
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              L&apos;ensemble des contenus présents sur le site
              archipel.foundation (textes, images, logos, icônes, éléments
              graphiques) est protégé par le droit de la propriété
              intellectuelle. Toute reproduction, représentation ou diffusion,
              totale ou partielle, sans autorisation écrite préalable
              d&apos;ARCHIPEL Foundation est interdite.
            </p>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Données personnelles
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              Les informations relatives au traitement de vos données
              personnelles sont détaillées dans notre{' '}
              <a
                href="/politique-confidentialite"
                className="text-steel-blue hover:text-slate_f transition-colors underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-4">
              Contact
            </h2>
            <p className="font-body text-body leading-relaxed text-slate_f/80">
              Pour toute question relative au site ou à son contenu :{' '}
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
