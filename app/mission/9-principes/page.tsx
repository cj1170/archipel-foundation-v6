import { Metadata } from 'next';
import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Les 9 Principes Fondateurs',
  description:
    'Les 9 principes fondateurs de la Charte ARCHIPEL Foundation : les engagements irréductibles qui guident chaque décision.',
};

const PRINCIPES = [
  {
    titre: 'La santé est un bien commun',
    texte:
      'La santé n\u2019appartient à aucune institution, aucune entreprise, aucun système. Elle appartient aux personnes qui la vivent. ARCHIPEL existe pour servir ce bien commun, pas pour le capturer.',
  },
  {
    titre: 'Non-substitution',
    texte:
      'ARCHIPEL ne diagnostique pas, ne prescrit pas, ne remplace aucun professionnel de santé. La Fondation coordonne, relie et transforme le parcours. Elle ne se substitue jamais à l\u2019acte médical.',
  },
  {
    titre: 'Primauté décisionnelle médicale',
    texte:
      'En cas de désaccord clinique entre praticiens, le médecin a primauté décisionnelle. Ce principe est non négociable et inscrit dans le cadre déontologique de La Guilde.',
  },
  {
    titre: 'Souveraineté des données',
    texte:
      'Les données de santé appartiennent aux personnes qui les produisent. Elles ne sont ni un produit, ni un levier d\u2019influence, ni une monnaie d\u2019échange. Ce principe est gardé par le Comité d\u2019Éthique.',
  },
  {
    titre: 'Accessibilité structurelle',
    texte:
      'Le modèle Robin Hood est inscrit dans les statuts : le premium finance l\u2019accès. La santé préventive coordonnée ne peut pas rester un privilège réservé à ceux qui en ont les moyens.',
  },
  {
    titre: 'Transparence radicale',
    texte:
      'Chaque personne accompagnée est informée du niveau de preuve des approches proposées, sans jugement. La confiance se construit sur la transparence, pas sur l\u2019opacité.',
  },
  {
    titre: 'Indépendance de la Fondation',
    texte:
      'ARCHIPEL Foundation ne vend rien. Elle ne dispose d\u2019aucun intérêt commercial. C\u2019est cette indépendance qui fait d\u2019elle un tiers de confiance légitime pour garder la mission.',
  },
  {
    titre: 'Coordination, pas pratique',
    texte:
      'ARCHIPEL coordonne les parcours de santé. Iris informe, les Sherpas accompagnent, La Guilde intervient. Aucun d\u2019entre eux ne pratique la médecine. Le rôle est structurel, pas clinique.',
  },
  {
    titre: 'Pérennité',
    texte:
      'ARCHIPEL Foundation est construite pour survivre à ses fondateurs. Chaque rôle a un titulaire et un relais identifié. Le sens est inscrit dans des documents qui survivent à l\u2019absence de leur auteur.',
  },
];

export default function NeufPrincipesPage() {
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
            <span className="text-sand">9 Principes</span>
          </nav>

          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-4 block">
            Charte Fondatrice
          </span>
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen">
            Les 9 Principes Fondateurs
          </h1>
        </div>
      </Section>

      {/* PRINCIPES */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-12">
            Ces neuf principes sont inscrits dans la Charte Fondatrice
            d&apos;ARCHIPEL Foundation. Ils ne sont pas des intentions. Ce sont
            des engagements irréductibles, publics et opposables, gardés par le
            Comité d&apos;Éthique.
          </p>

          <div className="space-y-8">
            {PRINCIPES.map((p, i) => (
              <div
                key={p.titre}
                className="bg-slate_f text-linen rounded-lg p-6 lg:p-8"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-heading text-h2 tracking-[-0.02em] text-sand">
                    0{i + 1}
                  </span>
                  <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen">
                    {p.titre}
                  </h2>
                </div>
                <p className="font-body text-body-sm leading-[1.6] text-linen/80">
                  {p.texte}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" href="/mission">
              Retour à Notre Mission
            </Button>
            <Button variant="outline-light" href="/gouvernance/charte">
              Lire la Charte Fondatrice
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
