# SPECS PAGES SECONDAIRES — NIVEAU 2 DU SDD
## Pages : Approche (/approche) • Gouvernance (/gouvernance) • La Guilde (/guilde) • Actualités (/actualites)

**Version : 30 mars 2026**
**Statut : À VALIDER**
**Dépendance : Spec Système N1 (29/03/2026, corrigée) + Specs Pages Prioritaires N2 (30/03/2026)**
**Sources contenu : Brief SDD (ACTÉ) + Charte Fondatrice v2.0 Art.4 + Cadre Déontologique v1 + Addendum Positionnement Iris**

---

## CONVENTIONS DE LECTURE

Identiques au document Specs Pages Prioritaires N2 :

```
[CONTENU DÉFINITIF]                → Acté, ne pas modifier sans validation
[CONTENU PROVISOIRE — À VALIDER]   → Proposition, à confirmer
[CONTENU PROVISOIRE — À VALIDER ASD] → Dépend de la validation CMedO
[PLACEHOLDER — À CONCEVOIR]        → Dépend d'un livrable tiers
[PLACEHOLDER — À CRÉER]            → Composant ou icône à produire
```

---

# PAGE 4 — NOTRE APPROCHE (/approche)

**Fichier :** `app/approche/page.tsx`
**Intention :** Le COMMENT. Ce que vit concrètement une personne dans l'écosystème ARCHIPEL.
**Audience prioritaire :** Futurs "Archipels" + praticiens (comprendre le système).

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'Notre Approche',
  description: 'L\'approche ARCHIPEL repose sur le cadre TÊTE•CŒUR•CORPS + MILIEU, un compagnon IA (Iris), des Sherpas humains et La Guilde de praticiens certifiés.',
  openGraph: {
    images: [{ url: '/og/approche.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO APPROCHE

**Variante fond :** `slate` (padding `hero`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | NOTRE APPROCHE | `[CONTENU DÉFINITIF]` |
| Titre | Créer les conditions de votre santé. Pas seulement traiter vos symptômes. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Sous-titre | Un compagnon IA. Des coachs humains. Un réseau de praticiens coordonnés. Un parcours sur-mesure. Et vous, au centre. | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="slate" padding="hero">
  <div className="max-w-3xl mx-auto text-center">
    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6 block">
      Notre approche
    </span>
    <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
      Créer les conditions de votre santé.
      <br />
      <span className="text-sand">Pas seulement traiter vos symptômes.</span>
    </h1>
    <p className="font-body text-h4 text-linen/70">
      Un compagnon IA. Des coachs humains. Un réseau de praticiens coordonnés.
      Un parcours sur-mesure. Et vous, au centre.
    </p>
  </div>
</Section>
```

---

## SECTION 2 — LE CADRE TÊTE•CŒUR•CORPS + MILIEU

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop (≥ lg) : 2 colonnes (visuel 50% / texte 50%)
Le visuel est à GAUCHE (contrairement à Mission §3 où il est à droite)
pour varier le rythme visuel entre les pages.

Mobile : stack vertical, visuel au-dessus.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | LE CADRE | `[CONTENU DÉFINITIF]` |
| Titre | TÊTE•CŒUR•CORPS : trois dimensions, un même être. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | La santé se construit dans la cohérence entre la dimension cognitive et mentale (TÊTE), la dimension émotionnelle et relationnelle (CŒUR), et la dimension physique et corporelle (CORPS). Aucune ne peut être traitée isolément sans réduire l'efficacité du tout. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.2 |
| P2 | Ces trois dimensions s'enracinent dans un MILIEU : vos rythmes circadiens, votre relation à la nature, la qualité de votre cadre de vie, les saisons qui rythment votre existence. Le MILIEU n'est pas un quatrième pilier. Il est le sol dans lequel tout s'enracine. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.2 (adapté au "vous") |
| Visuel | Schéma TÊTE•CŒUR•CORPS + MILIEU interactif : au survol de chaque dot, affichage de la description de la dimension | `[PLACEHOLDER — À CONCEVOIR]` |

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

    {/* Visuel — à gauche */}
    <div>
      <DotsTCC
        size="xl"
        showLabels
        showMilieu
        showDescriptions
        interactive
        className="mx-auto"
      />
    </div>

    {/* Texte — à droite */}
    <div>
      <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
        Le cadre
      </span>
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
        TÊTE•CŒUR•CORPS : trois dimensions, un même être.
      </h2>
      <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
        <p>{/* P1 — dimensions */}</p>
        <p>{/* P2 — MILIEU */}</p>
      </div>
    </div>

  </div>
</Section>
```

---

## SECTION 3 — LES TROIS PILIERS DE L'ÉCOSYSTÈME

**Variante fond :** `steel` (padding `default`)

### Layout

```
Desktop : 3 colonnes, 1 card par pilier
Chaque card est sur fond Linen avec une icône d'accent en couleur T•C•C
(Iris = TÊTE bleu-gris, Sherpas = CŒUR terracotta, Guilde = CORPS sage)

Mobile : stack vertical.
```

### Contenu

| Pilier | Titre | Description | Accent | Lien sous-page |
|--------|-------|-------------|--------|----------------|
| Iris | Iris, votre compagnon de santé | Iris est un compagnon IA, disponible 24h/24. Elle écoute, observe, relie et oriente. Elle ne pose pas de diagnostic, ne prescrit rien, ne remplace aucun professionnel de santé. Elle respecte vos rythmes et observe des périodes de silence intentionnel. | TÊTE #A0A8C0 | /approche/iris |
| Sherpas | Les Sherpas, le lien humain | Des coachs santé formés et certifiés qui vous accompagnent dans la durée. Le Sherpa observe vos rythmes, propose des ajustements, et reste votre premier interlocuteur humain dans le parcours. | CŒUR #C85A30 | /approche/sherpas |
| La Guilde | La Guilde, la coordination | Un réseau de praticiens certifiés, coordonnés par Iris et les Sherpas, avec primauté décisionnelle médicale. Médecins, ostéopathes, naturopathes, psychologues, coachs : chaque praticien voit l'ensemble. | CORPS #789878 | /guilde |

Statut contenus Iris et Sherpas : `[CONTENU DÉFINITIF]` — adapté de Charte v2.0 Art.4. Contenu Guilde : `[CONTENU PROVISOIRE — À VALIDER]`.

**⚡ DÉCISION ACTÉE — Mapping piliers ↔ accents T•C•C :**

| Pilier écosystème | Dimension T•C•C | Couleur accent | Logique |
|-------------------|-----------------|----------------|---------|
| Iris (compagnon IA) | TÊTE | #A0A8C0 Bleu-gris | Dimension cognitive et mentale |
| Sherpas (coachs humains) | CŒUR | #C85A30 Terracotta | Dimension émotionnelle et relationnelle |
| La Guilde (praticiens) | CORPS | #789878 Sage | Dimension physique et corporelle |

Ce mapping est utilisé partout où les 3 piliers sont présentés côte à côte (page Approche, homepage si applicable). **ACTION Spec N1 : ajouter ce tableau dans §1.1 Couleurs, sous-section "Rôles sémantiques T•C•C".**

### Composants instanciés

```tsx
<Section variant="steel" padding="default">
  <div className="text-center mb-12">
    <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
      L'écosystème
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
      Trois piliers. Un seul parcours.
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

    {/* Card Iris */}
    <div className="bg-linen rounded-lg p-6 lg:p-8 flex flex-col">
      <div className="w-10 h-10 rounded-full bg-tete/20 flex items-center justify-center mb-4">
        <span className="w-4 h-4 rounded-full bg-tete" />
      </div>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        Iris, votre compagnon de santé
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-6 flex-1">{/* Description */}</p>
      <a href="/approche/iris"
         className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors">
        Découvrir Iris →
      </a>
    </div>

    {/* Card Sherpas */}
    <div className="bg-linen rounded-lg p-6 lg:p-8 flex flex-col">
      <div className="w-10 h-10 rounded-full bg-coeur/20 flex items-center justify-center mb-4">
        <span className="w-4 h-4 rounded-full bg-coeur" />
      </div>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        Les Sherpas, le lien humain
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-6 flex-1">{/* Description */}</p>
      <a href="/approche/sherpas"
         className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors">
        Découvrir les Sherpas →
      </a>
    </div>

    {/* Card Guilde */}
    <div className="bg-linen rounded-lg p-6 lg:p-8 flex flex-col">
      <div className="w-10 h-10 rounded-full bg-corps/20 flex items-center justify-center mb-4">
        <span className="w-4 h-4 rounded-full bg-corps" />
      </div>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        La Guilde, la coordination
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-6 flex-1">{/* Description */}</p>
      <a href="/guilde"
         className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors">
        Découvrir La Guilde →
      </a>
    </div>

  </div>
</Section>
```

### Garde-fous

⚠ **F1** : Les descriptions d'Iris et des Sherpas contiennent explicitement la clause de non-substitution ("ne pose pas de diagnostic, ne prescrit rien"). Cette formulation est non négociable.

⚠ **F4** : La description de La Guilde ne promet pas de volume de praticiens. Pas de chiffre "100 praticiens" sur le site public (chiffre interne uniquement).

---

## SECTION 4 — LE PARCOURS ODYSSEA

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop : 2 colonnes (texte 50% / visuel spirale 50%)
Mobile : stack vertical, texte puis visuel.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | LE PARCOURS | `[CONTENU DÉFINITIF]` |
| Titre | Odyssea : un parcours en spirale, pas une ligne droite. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | Le parcours Odyssea relie Iris, les Sherpas et La Guilde en un parcours de transformation mesurable. Il alterne des phases d'activation avec des phases de consolidation, adaptées à vos rythmes et à vos saisons. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.4 (adapté) |
| P2 | Tout commence par ARKÉ, le bilan d'entrée. Six dimensions évaluées : médicale, fonctionnelle, psychologique, comportementale, contexte biographique, et milieu de vie. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.4 |
| P3 | Le parcours Odyssea se construit selon vos besoins, tout au long de votre vie. Iris et votre Sherpa orchestrent les services et vous accompagnent auprès des praticiens, selon vos objectifs. | `[CONTENU DÉFINITIF]` |
| ARKÉ 6 dimensions | Médicale • Fonctionnelle • Psychologique • Comportementale • Contexte biographique • Milieu de vie | `[CONTENU DÉFINITIF]` — Charte v2.0 |
| Visuel | Schéma spirale Odyssea avec les 3 phases (Activation / Consolidation / Approfondissement) | `[PLACEHOLDER — À CONCEVOIR]` |
| Lien | Découvrir le parcours Odyssea → /approche/odyssea | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

    <div>
      <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
        Le parcours
      </span>
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
        Odyssea : un parcours en spirale, pas une ligne droite.
      </h2>
      <div className="space-y-4 font-body text-body leading-[1.6] text-slate_f/80">
        <p>{/* P1 */}</p>
        <p>{/* P2 */}</p>
        <p>{/* P3 — parcours vie entière, orchestration Iris + Sherpa */}</p>
      </div>

      {/* 6 dimensions ARKÉ */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {['Médicale', 'Fonctionnelle', 'Psychologique',
          'Comportementale', 'Contexte biographique', 'Milieu de vie'].map(dim => (
          <span key={dim}
            className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue bg-steel-blue/10 px-3 py-2 rounded-sm text-center">
            {dim}
          </span>
        ))}
      </div>

      <a href="/approche/odyssea"
         className="inline-block mt-8 font-label text-label uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors">
        Découvrir le parcours Odyssea →
      </a>
    </div>

    <div className="order-first lg:order-last">
      {/* [PLACEHOLDER — À CONCEVOIR] Schéma spirale Odyssea */}
      <div className="aspect-square max-w-sm mx-auto bg-steel-blue/10 rounded-full flex items-center justify-center">
        <span className="font-label text-label text-steel-blue/50">Spirale Odyssea</span>
      </div>
    </div>

  </div>
</Section>
```

### Garde-fous

⚠ **F1** : ARKÉ est présenté comme un "bilan d'entrée", pas comme un diagnostic. Les 6 dimensions ne constituent pas un acte médical.

⚠ **F5** : Le parcours Odyssea ne promet aucun résultat thérapeutique. Formulation : "parcours de transformation mesurable", pas "parcours de guérison".

---

## SECTION 5 — CTA APPROCHE

**Variante fond :** `slate` (padding `compact`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | Vous voulez être parmi les premiers à vivre cette approche ? | `[CONTENU PROVISOIRE — À VALIDER]` |
| CTA | Rejoindre les pionniers | `[CONTENU DÉFINITIF]` |
| Destination | /#pionniers | |

### Sous-pages accessibles depuis /approche

| Lien | Label | Destination |
|------|-------|-------------|
| 1 | Fondements Scientifiques | /approche/fondements |
| 2 | Iris, le compagnon de santé | /approche/iris |
| 3 | Les Sherpas | /approche/sherpas |
| 4 | Le Parcours Odyssea | /approche/odyssea |

Liens affichés en fin de section 5 ou intégrés dans les sections concernées (comme fait ci-dessus).

---

# PAGE 5 — GOUVERNANCE & ÉTHIQUE (/gouvernance)

**Fichier :** `app/gouvernance/page.tsx`
**Intention :** Crédibilité institutionnelle. Rassurer le mécène exigeant et l'institutionnel.
**Audience prioritaire :** Mécènes, institutionnels, régulateurs, partenaires.

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'Gouvernance & Éthique',
  description: 'Charte Fondatrice, Comité d\'Éthique indépendant, CIES, Corpus Normatif : la gouvernance d\'ARCHIPEL Foundation est conçue pour durer.',
  openGraph: {
    images: [{ url: '/og/gouvernance.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO GOUVERNANCE

**Variante fond :** `slate` (padding `hero`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | GOUVERNANCE & ÉTHIQUE | `[CONTENU DÉFINITIF]` |
| Titre | Construite pour durer. Conçue pour être stable et harmonieuse. | `[CONTENU DÉFINITIF]` |
| Sous-titre | La gouvernance d'ARCHIPEL n'est pas un décor. C'est une architecture de confiance, avec des garde-fous qui ne dépendent pas de la bonne volonté de ses dirigeants. | `[CONTENU PROVISOIRE — À VALIDER]` |

---

## SECTION 2 — LA CHARTE FONDATRICE

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop : 2 colonnes (texte 60% / visuel 40%)
Visuel : représentation symbolique de la Charte (document stylisé)
ou icône IconCharte.
Mobile : stack, icône au-dessus.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | DOCUMENT FONDATEUR | `[CONTENU DÉFINITIF]` |
| Titre | La Charte Fondatrice | `[CONTENU DÉFINITIF]` |
| P1 | La Charte Fondatrice est le document de rang suprême d'ARCHIPEL Foundation. Elle définit la mission, la philosophie, l'écosystème, les engagements envers les bénéficiaires, et les 9 principes fondateurs. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P2 | Elle est publique, opposable, et gardée par le Comité d'Éthique. Toute décision d'ARCHIPEL doit lui être conforme. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Lien | Lire la Charte Fondatrice intégrale → /gouvernance/charte | `[CONTENU DÉFINITIF]` |
| Icône | IconCharte (depuis ArchipelIcons.tsx) | Migration chromatique effectuée (Spec N1 §2.10) |

---

## SECTION 3 — LES INSTANCES DE GOUVERNANCE

**Variante fond :** `slate` (padding `default`)

### Layout

```
Desktop : intro centrée, puis tableau synthétique des 4 instances,
puis 4 blocs détaillés empilés (1 par instance).

Mobile : stack vertical intégral.
```

### Contenu — Vue synthétique

| Instance | Contrôle sur | Mécanismes | Temporalité |
|----------|-------------|------------|-------------|
| Conseil de Fondation (Les Gardiens) | Mission, valeurs, direction | Rapport trimestriel Direction, audit externe annuel | Trimestrielle + extraordinaire |
| Comité d'Éthique | Iris, données, cadre déontologique | Audit Iris, traitement signalements, veto | Trimestriel + urgence 72h |
| CIES | Iris, Sherpas, La Guilde | Entretien annuel Sherpas, admissions Guilde, revue parcours | Trimestriel + continu (admissions) |
| Direction | Opérations, partenariats | Reporting KPIs, saisine CE/CIES | Mensuel + semestriel (Gardiens) |

Statut : `[CONTENU DÉFINITIF]` — architecture validée sur le site preview v5.

### Contenu — Détail par instance

#### Le Conseil de Fondation (Les Gardiens)

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | Le Conseil de Fondation — Les Gardiens | `[CONTENU DÉFINITIF]` |
| Description | Instance souveraine de la Fondation. 9 membres représentant mécènes et donateurs, usagers, partenaires stratégiques et personnalités indépendantes. | `[CONTENU DÉFINITIF]` |
| Présidence | Cyril Jamot — Président-Fondateur du Conseil de Fondation, CEO d'ARCHIPEL Foundation, Président Non-Exécutif d'ARCHIPEL LIFE SAS. | `[CONTENU DÉFINITIF]` |
| Composition cible | 9 membres — Président-Fondateur, représentants mécènes/donateurs, représentants usagers, partenaires stratégiques, personnalités indépendantes. | `[CONTENU DÉFINITIF]` |
| DPI | Déclaration Publique d'Intérêts obligatoire, conforme au cadre HAS. En cas de lien avec une décision, le membre concerné s'abstient. | `[CONTENU DÉFINITIF]` |
| Statut constitution | En cours de constitution. Noms et profils publiés dès confirmation. | `[CONTENU DÉFINITIF]` |
| Domaines | Mission et représentation, stratégie et écosystème, philanthropie et funding, gouvernance et légitimité, gestion financière, conformité et statuts. | `[CONTENU DÉFINITIF]` |

#### Le Comité d'Éthique

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | Le Comité d'Éthique | `[CONTENU DÉFINITIF]` |
| Accroche | Il ne s'agit pas d'un comité consultatif. Il dispose d'un droit de veto réel. | `[CONTENU DÉFINITIF]` |
| Description | Instance indépendante de 9 membres. Le veto est inscrit dans les statuts. Aucune décision dans ses périmètres ne peut être prise sans son approbation — ni par la direction de la Fondation, ni par la SAS. | `[CONTENU DÉFINITIF]` |
| Périmètres veto | Données de santé membres, données personnes accompagnées, périmètre d'Iris, cadre déontologique, partenariats données. | `[CONTENU DÉFINITIF]` |
| Présidence | En cours de désignation — personnalité indépendante sans lien avec ARCHIPEL LIFE SAS. | `[CONTENU DÉFINITIF]` |
| Composition cible | 9 membres indépendants — Philosophe/éthicien santé, expert IA/santé, médecin/praticien, juriste/régulateur droit de la santé, psychologue/patient expert, économiste/sociologue, représentant fondation/ONG santé. | `[CONTENU DÉFINITIF]` |
| DPI | Déclaration Publique d'Intérêts obligatoire, conforme HAS. Aucun lien financier direct avec ARCHIPEL LIFE SAS. | `[CONTENU DÉFINITIF]` |
| Statut | En cours de constitution. Profils publiés dès confirmation. | `[CONTENU DÉFINITIF]` |
| Lien | /gouvernance/comite-ethique | |

#### Le CIES

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | Le Comité Interdisciplinaire d'Expertise Scientifique (CIES) | `[CONTENU DÉFINITIF]` |
| Accroche | Le CIES est délibérément logé dans la Fondation — et non dans la SAS opérationnelle. Un comité médical intégré à une structure commerciale expose les experts à un risque déontologique réel. | `[CONTENU DÉFINITIF]` |
| Domaines | Parcours de soin individualisés, cadre opérationnel et supervision d'Iris, admission La Guilde, partenariats recherche, révision déontologique. | `[CONTENU DÉFINITIF]` |
| Présidente | Dr Anne-Sophie Darrigade, CMedO. | `[CONTENU DÉFINITIF]` |
| Composition cible | 9 membres indépendants — Experts en santé publique, spécialistes médecine conventionnelle/réglementée/évaluée, experts approches innovantes, méthodologiste/statisticien/économiste, usagers/patients experts. | `[CONTENU DÉFINITIF]` |
| DPI | Déclaration Publique d'Intérêts obligatoire, conforme HAS. Aucun lien financier direct avec ARCHIPEL LIFE SAS. | `[CONTENU DÉFINITIF]` |
| Statut | Profils publiés dès confirmation. | `[CONTENU DÉFINITIF]` |
| Lien | /gouvernance/cies | |

#### La Direction

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | La Direction | `[CONTENU DÉFINITIF]` |
| Accroche | La Direction n'est pas une instance de gouvernance autonome. Elle opère dans le cadre défini par les Gardiens, contrôlé par le Comité d'Éthique, et orienté par le CIES. | `[CONTENU DÉFINITIF]` |
| CEO | Cyril Jamot — Direction exécutive, partenariats institutionnels, représentation de la Fondation. Saisine des comités pour toute décision stratégique. Président Non-Exécutif d'ARCHIPEL LIFE. | `[CONTENU DÉFINITIF]` |
| CMedO | Dr Anne-Sophie Darrigade — Responsable du cadre médical et scientifique, de la qualité clinique, et de la supervision de La Guilde et des recherches financées par la Fondation. Préside le CIES. Également CMedO d'ARCHIPEL LIFE. | `[CONTENU DÉFINITIF]` |
| CPTO | Responsable du développement produit et technologique, dont Iris. Toute évolution du périmètre d'Iris est soumise à validation du Comité d'Éthique. Poste en cours de recrutement. | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="slate" padding="default">
  <div className="text-center mb-12">
    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
      Les instances de gouvernance
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
      Quatre instances. Aucune ne concentre tous les pouvoirs.
    </h2>
  </div>

  {/* Tableau synthétique des 4 instances */}
  <div className="overflow-x-auto mb-16">
    <table className="w-full text-left font-body text-body-sm text-linen/80">
      <thead>
        <tr className="border-b border-sand/30">
          <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3 pr-4">Instance</th>
          <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3 pr-4">Contrôle sur</th>
          <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3 pr-4">Mécanismes</th>
          <th className="font-label text-caption uppercase tracking-[0.08em] text-sand py-3">Temporalité</th>
        </tr>
      </thead>
      <tbody>{/* 4 lignes */}</tbody>
    </table>
  </div>

  {/* 4 blocs détaillés */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

    {/* Conseil de Fondation */}
    <div className="bg-linen rounded-lg p-6 lg:p-8">
      <span className="font-heading text-hero text-coeur block mb-1">9</span>
      <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue block mb-4">
        membres • instance souveraine
      </span>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        Le Conseil de Fondation — Les Gardiens
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-4">{/* Description */}</p>
      <p className="font-body text-caption text-steel-blue">
        Présidence : Cyril Jamot — Président-Fondateur
      </p>
      <p className="font-body text-caption text-slate_f/50 mt-2 italic">
        En cours de constitution.
      </p>
    </div>

    {/* Comité d'Éthique */}
    <div className="bg-linen rounded-lg p-6 lg:p-8">
      <IconEthique className="w-10 h-10 text-steel-blue mb-4" />
      <span className="font-heading text-hero text-coeur block mb-1">9</span>
      <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue block mb-4">
        membres indépendants • veto absolu
      </span>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        Le Comité d'Éthique
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-4">{/* Description + veto */}</p>
      <p className="font-body text-caption text-slate_f/50 italic">
        En cours de constitution.
      </p>
      <a href="/gouvernance/comite-ethique"
         className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors mt-4 inline-block">
        En savoir plus →
      </a>
    </div>

    {/* CIES */}
    <div className="bg-linen rounded-lg p-6 lg:p-8">
      <IconCIES className="w-10 h-10 text-steel-blue mb-4" />
      <span className="font-heading text-hero text-coeur block mb-1">9</span>
      <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue block mb-4">
        membres • présidé par le CMedO
      </span>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        Le CIES
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-4">{/* Description */}</p>
      <p className="font-body text-caption text-steel-blue">
        Présidente : Dr Anne-Sophie Darrigade, CMedO
      </p>
      <a href="/gouvernance/cies"
         className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors mt-4 inline-block">
        En savoir plus →
      </a>
    </div>

    {/* Direction */}
    <div className="bg-linen rounded-lg p-6 lg:p-8">
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        La Direction
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-4">
        La Direction n'est pas une instance de gouvernance autonome.
        Elle opère dans le cadre défini par les Gardiens, contrôlé par le
        Comité d'Éthique, et orienté par le CIES.
      </p>
      <div className="space-y-3 mt-4">
        <div>
          <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">CEO</span>
          <p className="font-body text-body-sm text-slate_f/80">Cyril Jamot</p>
        </div>
        <div>
          <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">CMedO</span>
          <p className="font-body text-body-sm text-slate_f/80">Dr Anne-Sophie Darrigade</p>
        </div>
        <div>
          <span className="font-label text-caption uppercase tracking-[0.08em] text-coeur">CPTO</span>
          <p className="font-body text-body-sm text-slate_f/50 italic">Poste en cours de recrutement</p>
        </div>
      </div>
    </div>

  </div>
</Section>
```

Note : les 4 blocs instances utilisent des cards Linen sur fond Slate en style inline. Même pattern que MOD-02 des Specs Prioritaires : ces cards utilisent la prop `onDark={true}` du composant Card (variante `feature`). **ACTION Spec N1 : regrouper avec l'action MOD-02 — une seule prop `onDark` couvre tous les cas.**

---

## SECTION 4 — LE CORPUS NORMATIF

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop : centré, max-w-3xl.
Schéma hiérarchique vertical :

    CHARTE FONDATRICE (rang suprême)
            ↓
    CONSTITUTIONS (rang constitutionnel)
            ↓
    CODES (rang législatif)
            ↓
    DÉCRETS (rang réglementaire)
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | L'ARCHITECTURE NORMATIVE | `[CONTENU DÉFINITIF]` |
| Titre | Un corpus hiérarchisé. Chaque norme est gardée. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | La Charte Fondatrice est le document de rang suprême. Elle fonde et légitime l'ensemble du Corpus Normatif. En cas de conflit entre deux niveaux, la norme de rang supérieur prévaut sans exception. Cette hiérarchie est gardée par le Comité d'Éthique. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.7 (adapté) |
| Niveau 1 | Charte Fondatrice — rang suprême, document public | `[CONTENU DÉFINITIF]` |
| Niveau 2 | Constitutions — rang constitutionnel (dont Constitution Iris) | `[CONTENU DÉFINITIF]` |
| Niveau 3 | Codes — rang législatif (Code Iris, Code Patient, Code Guilde, Code Sherpa) | `[CONTENU DÉFINITIF]` |
| Niveau 4 | Décrets d'application — rang réglementaire, procédures opérationnelles | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="max-w-3xl mx-auto">
    <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block text-center">
      L'architecture normative
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6 text-center">
      Un corpus hiérarchisé. Chaque norme est gardée.
    </h2>
    <p className="font-body text-body leading-[1.6] text-slate_f/80 text-center mb-12">
      {/* P1 */}
    </p>

    {/* Schéma hiérarchique — 4 niveaux empilés */}
    <div className="space-y-4">
      {[
        { level: 1, title: 'Charte Fondatrice', desc: 'Rang suprême — document public', bg: 'bg-slate_f', text: 'text-linen' },
        { level: 2, title: 'Constitutions', desc: 'Rang constitutionnel — dont Constitution Iris', bg: 'bg-steel-blue', text: 'text-linen' },
        { level: 3, title: 'Codes', desc: 'Rang législatif — Code Iris, Code Patient, Code Guilde, Code Sherpa', bg: 'bg-steel-blue/20', text: 'text-slate_f' },
        { level: 4, title: 'Décrets d\'application', desc: 'Rang réglementaire — procédures opérationnelles', bg: 'bg-sand/20', text: 'text-slate_f' },
      ].map(item => (
        <div key={item.level} className={`${item.bg} ${item.text} rounded-lg p-5 flex items-center gap-4`}
             style={{ marginLeft: `${(item.level - 1) * 16}px` }}>
          <span className="font-heading text-h3 opacity-50">{item.level}</span>
          <div>
            <h3 className="font-heading text-h4 tracking-[-0.02em]">{item.title}</h3>
            <p className="font-body text-body-sm opacity-70">{item.desc}</p>
          </div>
        </div>
      ))}
      {/* Flèches ↓ entre les niveaux gérées en CSS (pseudo-elements ou SVG inline) */}
    </div>
  </div>
</Section>
```

---

## SECTION 5 — TRAJECTOIRE SOCIOCRATIQUE ET PÉRENNITÉ

**Variante fond :** `steel` (padding `default`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | PÉRENNITÉ | `[CONTENU DÉFINITIF]` |
| Titre | ARCHIPEL Foundation est construite pour survivre à ses fondateurs. | `[CONTENU DÉFINITIF]` — Clause de Pérennité, Charte v2.0 |
| P1 | La gouvernance d'ARCHIPEL évolue selon une trajectoire sociocratique progressive : de la voix prépondérante du fondateur en phase de lancement, vers la majorité qualifiée au Conseil, puis le consentement distribué à maturité. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P2 | Chaque décision structurelle est documentée. Chaque rôle a un titulaire et un relais identifié. Le sens d'ARCHIPEL est inscrit dans des documents qui survivent à l'absence de leur auteur. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Fondateur | Cyril Jamot — Fondateur et CEO. Lien LinkedIn. | `[CONTENU DÉFINITIF]` — Brief §8 |

### Composants instanciés

```tsx
<Section variant="steel" padding="default">
  <div className="max-w-3xl mx-auto text-center">
    <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
      Pérennité
    </span>
    <blockquote className="font-heading text-h2 tracking-[-0.02em] text-linen mb-8">
      ARCHIPEL Foundation est construite pour survivre à ses fondateurs.
    </blockquote>
    <div className="space-y-4 font-body text-body leading-[1.6] text-linen/80 text-left">
      <p>{/* P1 — trajectoire sociocratique */}</p>
      <p>{/* P2 — documentation */}</p>
    </div>

    {/* Mention fondateur */}
    <div className="mt-12 pt-8 border-t border-linen/20 flex items-center justify-center gap-4">
      <div className="text-left">
        <span className="font-heading text-h4 text-linen block">Cyril Jamot</span>
        <span className="font-body text-body-sm text-sand">Fondateur et CEO</span>
      </div>
      <a href="https://www.linkedin.com/in/cyriljamot/"
         target="_blank" rel="noopener"
         className="font-label text-caption uppercase tracking-[0.08em] text-sand hover:text-linen transition-colors">
        LinkedIn →
      </a>
    </div>
  </div>
</Section>
```

---

## SECTION 6 — CTA GOUVERNANCE

**Variante fond :** `slate` (padding `compact`)

| Élément | Texte |
|---------|-------|
| Titre | Cette gouvernance vous rassure ? Soutenez ce qu'elle protège. |
| CTA | Soutenir ARCHIPEL |
| Destination | /soutenir |

### Sous-pages accessibles depuis /gouvernance

| Lien | Label | Destination |
|------|-------|-------------|
| 1 | Charte Fondatrice (texte intégral) | /gouvernance/charte |
| 2 | Le Comité d'Éthique | /gouvernance/comite-ethique |
| 3 | Le CIES | /gouvernance/cies |

---

# PAGE 6 — LA GUILDE (/guilde)

**Fichier :** `app/guilde/page.tsx`
**Intention :** Recrutement des 100 premiers praticiens (Paris + Bordeaux).
**Audience prioritaire :** Praticiens de santé, toutes strates.

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'La Guilde',
  description: 'La Guilde ARCHIPEL réunit des praticiens de santé engagés dans une coordination intégrative. Candidatures ouvertes Paris et Bordeaux.',
  openGraph: {
    images: [{ url: '/og/guilde.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO GUILDE

**Variante fond :** `slate` (padding `hero`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | LA GUILDE | `[CONTENU DÉFINITIF]` |
| Titre | Vous ne serez plus seul·e face à la complexité d'un patient. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Sous-titre | La Guilde est un réseau de praticiens certifiés qui partagent une conviction : la santé se coordonne, elle ne se fragmente pas. | `[CONTENU PROVISOIRE — À VALIDER]` |

---

## SECTION 2 — PROPOSITION DE VALEUR PRATICIEN

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop : grille 2×2 (4 cards avantages)
Mobile : stack vertical.
```

### Contenu

| # | Avantage | Description | Statut |
|---|---------|-------------|--------|
| 1 | Coordination | Vous n'êtes plus seul dans un silo. Chaque praticien de La Guilde a accès à une vue coordonnée du parcours de la personne, dans le respect de la confidentialité et de la primauté médicale. Et selon la volonté de la personne. | `[CONTENU DÉFINITIF]` |
| 2 | Réseau pluridisciplinaire | Médecine conventionnelle, professions de santé réglementées, thérapies complémentaires, pratiques ouvertes : cardiologues et ostéopathes, internistes et naturopathes, pneumologues et psychologues, sages-femmes et coachs santé, pneumologues et acupuncteurs, phlébologues et hypnothérapeutes... Nous n'excluons aucune pratique a priori. La Guilde réunit les compétences. Iris facilite la communication. Vous travaillez avec des pairs. | `[CONTENU DÉFINITIF]` |
| 3 | Cadre déontologique | Un cadre clair, pas une charte de bons sentiments. Non-prescription, non-substitution, gradient clinique, information transparente. Chaque praticien sait ce qu'il peut faire et ce qu'il ne fait pas. ARCHIPEL ne diagnostique pas, n'examine pas et ne prescrit pas. Sherpa et Iris coordonnent, n'arbitrent pas les décisions. | `[CONTENU DÉFINITIF]` |
| 4 | Personnes engagées | Les personnes orientées vers La Guilde sont déjà engagées dans un parcours de santé coordonné. Pas de patients isolés cherchant un rendez-vous ponctuel. Pas de tourisme médical. | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="text-center mb-12">
    <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
      Pourquoi rejoindre La Guilde
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f max-w-2xl mx-auto">
      Ce que La Guilde change pour vous.
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
    {avantages.map((a, i) => (
      <Card variant="feature" key={i} label={`0${i + 1}`} title={a.title} description={a.description} />
    ))}
  </div>
</Section>
```

### Garde-fous

⚠ **F4** : L'avantage 4 ("Personnes engagées") ne promet pas de volume. Formulation : "les personnes orientées", pas "les patients envoyés" ou "X patients par mois".

⚠ **F2** : Aucune promesse faite aux praticiens sans protocole de sélection validé CMedO. Les textes décrivent le cadre, pas les bénéfices garantis.

---

## SECTION 3 — PROFILS RECHERCHÉS

**Variante fond :** `steel` (padding `default`)

### Layout

```
Desktop : texte centré + grille de tags (profils).
Mobile : idem, tags en wrap.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | PROFILS RECHERCHÉS | `[CONTENU DÉFINITIF]` |
| Titre | Un écosystème pluridisciplinaire. | `[CONTENU DÉFINITIF]` |
| P1 | Ce qui compte, c'est votre engagement, pas votre spécialité. Chaque praticien accepte le cadre déontologique d'ARCHIPEL, y compris la primauté décisionnelle médicale. | `[CONTENU DÉFINITIF]` — v5 validé ASD |
| Villes | Paris et Bordeaux (au lancement) | `[CONTENU DÉFINITIF]` |

**4 catégories de praticiens (non numérotées, pas de hiérarchie affichée) :**

| Catégorie | Exemples | Ce qu'on évalue | Statut |
|-----------|----------|-----------------|--------|
| Médecine conventionnelle | Médecins toutes spécialités, chirurgiens, pharmaciens, sages-femmes | Ouverture à la santé intégrative. Acceptation d'une coordination entre conventionnel et non-conventionnel. Acceptation du gradient clinique. | `[CONTENU DÉFINITIF]` — v5 ASD |
| Professions de santé réglementées | Kinésithérapeutes, orthophonistes, psychologues, podologues-pédicures, diététiciens, ostéopathes, chiropracteurs | Formation certifiée. Transparence avec le conventionnel. Engagement déontologique. | `[CONTENU DÉFINITIF]` — v5 ASD |
| Thérapies complémentaires | Médecine chinoise, ayurvédique, naturopathie, réflexologie, sophrologie, étiopathie, hypnothérapie... Collaboration avec des plateformes telles que SAMED. | Certification vérifiable. Non-substitution explicite. Transparence totale sur le cadre. | `[CONTENU DÉFINITIF]` — v5 ASD |
| Pratiques ouvertes | Soins énergétiques, massages... | Formation attestée. Non-substitution explicite. Consentement éclairé documenté. (Garde-fous renforcés) | `[CONTENU DÉFINITIF]` — v5 ASD |

**Mention transversale :** "Nous n'excluons aucune pratique a priori." `[CONTENU DÉFINITIF]` — v5 ASD

Note : les catégories ne sont pas numérotées pour ne pas induire de hiérarchie publique. **ACTION à propager :** cette classification validée ASD remplace les "4 strates" dans le QG Notion.

### Composants instanciés

```tsx
<Section variant="steel" padding="default">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
        Profils recherchés
      </span>
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
        Un écosystème pluridisciplinaire.
      </h2>
      <p className="font-body text-body leading-[1.6] text-linen/80 mb-4">
        Ce qui compte, c'est votre engagement, pas votre spécialité.
      </p>
    </div>

    {/* 4 catégories — grille 2×2 (non numérotées) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-8">
      {categories.map(cat => (
        <div key={cat.title} className="bg-linen/10 border border-linen/20 rounded-lg p-6">
          <h3 className="font-heading text-h4 tracking-[-0.02em] text-linen mb-2">
            {cat.title}
          </h3>
          <p className="font-body text-body-sm text-linen/60 mb-3">{cat.examples}</p>
          <p className="font-body text-caption text-tete italic">
            Ce qu'on évalue : {cat.evaluation}
          </p>
        </div>
      ))}
    </div>

    <p className="font-body text-body text-linen text-center font-heading italic">
      Nous n'excluons aucune pratique a priori.
    </p>

    <p className="font-body text-body-sm text-sand text-center mt-4">
      Candidatures ouvertes : Paris et Bordeaux.
    </p>
  </div>
</Section>
```

---

## SECTION 4 — LE CADRE DÉONTOLOGIQUE

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop : max-w-4xl centré, tableau 3 colonnes (Principe / Formulation / Pour vous).
Mobile : cards empilées (chaque principe = 1 card avec les 3 champs).
```

### Contenu

Les 4 principes de non-substitution, conformes au v5 validé ASD :

| Principe | Formulation | Pour vous | Statut |
|----------|------------|-----------|--------|
| Non-prescription | ARCHIPEL ne diagnostique pas, n'examine pas et ne prescrit pas. Sherpa et Iris coordonnent, n'arbitrent pas les décisions. | Votre expertise reste la vôtre. Iris informe, elle ne concurrence pas. | `[CONTENU DÉFINITIF]` — v5 ASD |
| Gradient clinique | En cas de désaccord clinique, le médecin a primauté décisionnelle. Principe non négociable. | Médecin : primauté formalisée. Complémentaire : clarté protectrice. | `[CONTENU DÉFINITIF]` — v5 ASD |
| Gestion inter-praticiens | Les désaccords circulent entre praticiens, pas vers le patient. | Le patient ne porte pas vos divergences. | `[CONTENU DÉFINITIF]` — v5 ASD |
| Information transparente | ARCHIPEL informe les patients du niveau de preuve. Sans jugement. | La confiance du patient est renforcée. | `[CONTENU DÉFINITIF]` — v5 ASD |

Lien vers sous-page : /guilde/deontologie.

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="max-w-4xl mx-auto">
    <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block text-center">
      Le cadre
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-8 text-center">
      Quatre principes. Non négociables.
    </h2>

    {/* Tableau desktop, cards mobile */}
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-sand/30">
            <th className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue py-3 pr-6 w-1/4">Principe</th>
            <th className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue py-3 pr-6 w-5/12">Formulation</th>
            <th className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue py-3 w-1/3">Pour vous</th>
          </tr>
        </thead>
        <tbody>
          {principes.map(p => (
            <tr key={p.title} className="border-b border-sand/15">
              <td className="font-heading text-h4 tracking-[-0.02em] text-slate_f py-4 pr-6 align-top">{p.title}</td>
              <td className="font-body text-body-sm text-slate_f/80 py-4 pr-6 align-top leading-[1.6]">{p.formulation}</td>
              <td className="font-body text-body-sm text-steel-blue py-4 align-top italic leading-[1.6]">{p.pourVous}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Cards mobile */}
    <div className="lg:hidden space-y-6">
      {principes.map(p => (
        <div key={p.title} className="border border-sand/20 rounded-lg p-5">
          <h3 className="font-heading text-h4 tracking-[-0.02em] text-slate_f mb-2">{p.title}</h3>
          <p className="font-body text-body-sm text-slate_f/80 mb-3">{p.formulation}</p>
          <p className="font-body text-body-sm text-steel-blue italic">{p.pourVous}</p>
        </div>
      ))}
    </div>

    <div className="text-center mt-8">
      <a href="/guilde/deontologie"
         className="font-label text-label uppercase tracking-[0.08em] text-steel-blue hover:text-slate_f transition-colors">
        Lire le cadre déontologique complet →
      </a>
    </div>
  </div>
</Section>
```

---

## SECTION 5 — FORMULAIRE CANDIDATURE

**Variante fond :** `steel` (padding `default`)

### Layout

Identique au formulaire Soutenir : 2 colonnes (contexte 40% / formulaire 60%).

### Contenu contexte

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | Candidater pour La Guilde | `[CONTENU DÉFINITIF]` |
| P1 | Ce formulaire ouvre un échange, pas un engagement. Nous prendrons contact avec vous pour discuter de votre profil et de la manière dont votre pratique s'inscrit dans l'écosystème ARCHIPEL. | `[CONTENU PROVISOIRE — À VALIDER]` |

### Formulaire

Le formulaire "Guilde" tel que défini en Spec N1 §2.6 :

| Champ | Type | Requis |
|-------|------|--------|
| Prénom | text | oui |
| Nom | text | oui |
| Email | email | oui |
| Profession | text | oui |
| Ville | text | oui |
| Spécialité(s) | text | oui |
| Motivation | textarea | oui (min 20, max 1000 chars) |
| Consentement RGPD | checkbox | oui |

Payload API : `type: 'praticien'`, `statut: 'Nouveau'`.

### Layout responsive des champs

| Breakpoint | Disposition |
|-----------|------------|
| Mobile | 1 colonne, tous empilés |
| Desktop | 2 colonnes pour Prénom/Nom et Profession/Ville (côte à côte), reste pleine largeur |

### Composants instanciés

```tsx
<Section variant="steel" padding="default" id="candidature-guilde">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">

    <div className="lg:col-span-2">
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
        Candidater pour La Guilde
      </h2>
      <p className="font-body text-body leading-[1.6] text-linen/80">
        {/* P1 */}
      </p>
    </div>

    <div className="lg:col-span-3">
      <Form
        formType="praticien"
        fields={[
          { name: 'prenom', label: 'Prénom', type: 'text', required: true },
          { name: 'nom', label: 'Nom', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'profession', label: 'Profession', type: 'text', required: true },
          { name: 'ville', label: 'Ville', type: 'text', required: true },
          { name: 'specialites', label: 'Spécialité(s)', type: 'text', required: true },
          { name: 'motivation', label: 'Pourquoi souhaitez-vous rejoindre La Guilde ?',
            type: 'textarea', required: true, minLength: 20, maxLength: 1000 },
        ]}
        submitLabel="Envoyer ma candidature"
        variant="on-dark"
      />
    </div>

  </div>
</Section>
```

### Garde-fous

⚠ **F2** : Le formulaire ouvre un échange, il ne constitue pas un engagement ni une promesse d'intégration. La sélection dépend du protocole CMedO.

---

## SECTION 6 — CTA GUILDE

**Variante fond :** `slate` (padding `compact`)

| Élément | Texte |
|---------|-------|
| Titre | Vous n'êtes pas praticien ? Rejoignez les pionniers. |
| CTA | Rejoindre les pionniers |
| Destination | /#pionniers |

Cela redirige vers la page Accueil les visiteurs non-praticiens qui sont arrivés sur cette page.

### Sous-pages accessibles depuis /guilde

| Lien | Label | Destination |
|------|-------|-------------|
| 1 | Le Cadre Déontologique | /guilde/deontologie |
| 2 | Processus de candidature | /guilde/candidature |

**Note contenu /guilde/candidature :** Cette sous-page contient le processus complet en 4 étapes tel que validé sur le v5 :

| Étape | Nom | Ce qu'on demande | Ce qu'on évalue | Ce qu'on donne |
|-------|-----|-----------------|-----------------|----------------|
| 1 | Candidature | Formulaire court + spécialité + ville + pourquoi La Guilde | Cohérence pratique/philosophie | Accusé 48h, retour humain 15 jours |
| 2 | Rencontre | Échange 45 min sur valeurs, pratique, vision coordination | Vision du soin + présentation cadre déontologique et serment | Retour argumenté 7 jours |
| 3 | Alignement | Formation ARCHIPEL : philosophie, outils (Iris, Sherpa), protocoles | Compréhension du cadre et des protocoles | Certification ARCHIPEL, accès Academia, badge |
| 4 | Engagement | Accès plateforme, premières personnes orientées | Retours sur les premiers parcours | Dashboard praticien, réseau actif, communauté |

Statut : `[CONTENU DÉFINITIF]` — v5 validé ASD.

Éléments additionnels en sous-page uniquement (pas sur /guilde) :

• **Le Serment :** "La Guilde repose sur un Serment — une promesse envers vos patients, les personnes accompagnées, vos pairs, les autres soignants, votre propre intégrité professionnelle — et la santé comme bien commun. Vous en prendrez connaissance lors de la Rencontre (étape 2)." `[CONTENU DÉFINITIF]` — v5

• **Statut Praticien fondateur :** "Praticien fondateur — statut temporaire lié à la phase de constitution. Co-construction des protocoles, participation aux premiers retours d'expérience, voix dans les décisions du réseau. Ce n'est pas un titre honorifique : c'est une responsabilité réelle." `[CONTENU DÉFINITIF]` — v5

Sur la page /guilde, seul un **résumé en 4 étapes** apparaît (noms des étapes + 1 ligne chacune), avec un lien "Découvrir le processus complet → /guilde/candidature".

---

# PAGE 7 — ACTUALITÉS (/actualites)

**Fichier :** `app/actualites/page.tsx`
**Intention :** SEO/GEO. Contenu indexable pour le référencement organique.
**Format :** Blog avec catégories, articles datés, auteurs.

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Articles, analyses et réflexions sur la santé préventive, la Salutogénèse et l\'approche intégrative.',
  openGraph: {
    images: [{ url: '/og/actualites.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO BLOG

**Variante fond :** `slate` (padding `hero` réduit : `pt-32 pb-12 lg:pt-36 lg:pb-16`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | ACTUALITÉS | `[CONTENU DÉFINITIF]` |
| Titre | Réflexions, analyses, recherches. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Sous-titre | Ce que nous apprenons, ce que nous construisons, ce qui nous interroge. | `[CONTENU PROVISOIRE — À VALIDER]` |

---

## SECTION 2 — FILTRES CATÉGORIES

**Variante fond :** `linen` (padding : `py-6`, compact)

### Contenu

Barre horizontale de filtres par catégorie (tags cliquables). Pas de page dédiée par catégorie : le filtrage est côté client (JavaScript), l'URL reste `/actualites` avec un paramètre query optionnel (`?cat=salutogenese`).

| Catégorie | Slug |
|-----------|------|
| Tous | (défaut, pas de filtre) |
| Salutogénèse | salutogenese |
| TÊTE•CŒUR•CORPS | tete-coeur-corps |
| La Guilde | guilde |
| Recherche | recherche |
| Événements | evenements |

### Composants instanciés

```tsx
<div className="bg-linen border-b border-sand/20 py-6">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-wrap gap-3">
      {categories.map(cat => (
        <button key={cat.slug}
          onClick={() => setActiveCategory(cat.slug)}
          className={`font-label text-caption uppercase tracking-[0.08em] px-4 py-2 rounded-sm transition-colors
            ${active === cat.slug
              ? 'bg-slate_f text-linen'
              : 'bg-transparent text-slate_f/60 hover:text-slate_f border border-slate_f/20'}`}>
          {cat.label}
        </button>
      ))}
    </div>
  </div>
</div>
```

---

## SECTION 3 — GRILLE D'ARTICLES

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop (≥ lg) : grille 3 colonnes
Tablet (≥ sm) : grille 2 colonnes
Mobile : 1 colonne

Premier article (le plus récent) : mis en avant en pleine largeur
(2 colonnes image + 1 colonne texte) au-dessus de la grille.
```

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="mx-auto max-w-7xl">

    {/* Article vedette — le plus récent */}
    {featured && (
      <article className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
        <div className="lg:col-span-3 aspect-[16/9] rounded-lg overflow-hidden bg-steel-blue/10">
          {featured.image
            ? <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            : <div className="w-full h-full" />}
        </div>
        <div className="lg:col-span-2 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
              {featured.category}
            </span>
            <span className="text-sand/50">•</span>
            <time className="font-body text-caption text-slate_f/60">{featured.date}</time>
          </div>
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-3">
            <a href={`/actualites/${featured.slug}`} className="hover:text-steel-blue transition-colors">
              {featured.title}
            </a>
          </h2>
          <p className="font-body text-body leading-[1.6] text-slate_f/70 line-clamp-4">
            {featured.excerpt}
          </p>
        </div>
      </article>
    )}

    {/* Grille d'articles */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {articles.map(article => (
        <Card variant="blog" key={article.slug}
          title={article.title}
          label={article.category}
          date={article.date}
          description={article.excerpt}
          href={`/actualites/${article.slug}`}
          image={article.image} />
      ))}
    </div>

    {/* Pagination (si > 9 articles) */}
    {totalPages > 1 && (
      <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
        {/* Boutons page précédente / numéros / page suivante */}
      </nav>
    )}

  </div>
</Section>
```

### Données des articles

Les articles sont stockés en fichiers MDX dans `/content/articles/`. Chaque fichier contient un frontmatter :

```yaml
---
title: "La Salutogénèse : ce qui crée la santé"
slug: "salutogenese-ce-qui-cree-la-sante"
category: "Salutogénèse"
date: "2026-04-01"
author: "Cyril Jamot"
excerpt: "Aaron Antonovsky a posé une question que personne ne posait..."
image: "/images/articles/salutogenese.jpg"  # optionnel
---
```

Le fichier `lib/articles.ts` exporte les fonctions utilitaires :

```typescript
export async function getArticles(options?: {
  category?: string;
  page?: number;
  perPage?: number;
}): Promise<{ articles: ArticleData[]; total: number }>;

export async function getArticleBySlug(slug: string): Promise<ArticleData | null>;

export async function getArticleSlugs(): Promise<string[]>;

export async function getCategories(): Promise<string[]>;
```

### Contenu au lancement

8 articles adaptés de la série Fondements LinkedIn :

| # | Titre (provisoire) | Catégorie | Statut |
|---|-------------------|-----------|--------|
| 1 | La Salutogénèse : ce qui crée la santé | Salutogénèse | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 2 | TÊTE•CŒUR•CORPS : trois dimensions, un même être | TÊTE•CŒUR•CORPS | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 3 | Pourquoi personne ne relie les points de votre santé | Salutogénèse | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 4 | La Guilde : un réseau de praticiens qui se coordonnent | La Guilde | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 5 | Ce que la science dit de vos facteurs de santé | Recherche | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 6 | Le confident de la santé | Salutogénèse | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 7 | Le MILIEU : quand la santé retrouve ses rythmes | TÊTE•CŒUR•CORPS | `[CONTENU PROVISOIRE — À ADAPTER]` |
| 8 | La santé a un rythme | TÊTE•CŒUR•CORPS | `[CONTENU PROVISOIRE — À ADAPTER]` |

Ces articles nécessitent une conversation ad-hoc pour l'adaptation (mise à jour Charte v2.0, 9e principe, MILIEU, références Shenhar 2026).

### Page article individuel (/actualites/[slug])

Layout défini en Spec N1 §2.8 (ArticleLayout.tsx). Pas de spécifications supplémentaires nécessaires ici. Le composant est prêt.

---

# ANNEXE A — MATRICE RESPONSIVE PAR PAGE

## Page Approche

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré, text-h1 | Centré | Centré, text-hero |
| 2 Cadre T•C•C | Stack : visuel puis texte | 2 colonnes | 2 colonnes (visuel gauche, texte droite) |
| 3 Trois piliers | 1 card/ligne | 2 colonnes + 1 | 3 colonnes |
| 4 Odyssea | Stack : texte puis visuel | 2 colonnes | 2 colonnes |
| 5 CTA | Centré | Centré | Centré |

## Page Gouvernance

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré, text-h1 | Centré | Centré, text-hero |
| 2 Charte | Stack : icône puis texte | 2 colonnes | 2 colonnes (texte 60/visuel 40) |
| 3 Instances | Tableau : scroll horizontal. Cards : 1/ligne | Tableau lisible. Cards : 2×2 | Tableau pleine largeur. Cards : 2×2 |
| 4 Corpus | Stack centré | Centré max-w-2xl | Centré max-w-3xl |
| 5 Pérennité | Centré | Centré | Centré max-w-3xl |
| 6 CTA | Centré | Centré | Centré |

## Page La Guilde

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré, text-h1 | Centré | Centré, text-hero |
| 2 Proposition | 1 card/ligne | 2×2 | 2×2 (max-w-4xl centré) |
| 3 Profils | 4 catégories : 1 card/ligne | 2×2 | 2×2 (max-w-4xl centré) |
| 4 Déontologie | Cards empilées (1 card/principe) | Cards empilées (max-w-2xl) | Tableau 3 colonnes (max-w-4xl) |
| 5 Formulaire | Stack : contexte puis form | Stack large | 2 colonnes (2/5 + 3/5) |
| 6 CTA | Centré | Centré | Centré |

## Page Actualités

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré | Centré | Centré |
| 2 Filtres | Scroll horizontal | Wrap | Wrap |
| 3 Grille | 1 colonne, article vedette pleine largeur | 2 colonnes + vedette pleine largeur | 3 colonnes + vedette (3+2 colonnes) |

---

# ANNEXE B — ALERTES FAILLES PAR PAGE

| Page | Faille | Risque | Garde-fou |
|------|--------|--------|-----------|
| Approche §2 | F1 | Le cadre T•C•C pourrait être lu comme une méthode thérapeutique | C'est un cadre de lecture, pas un protocole de soin |
| Approche §3 | F1 | Iris pourrait être perçue comme un assistant médical | Clause de non-substitution dans la description (verbatim Charte v2.0) |
| Approche §3 | F4 | La Guilde promet des praticiens | Pas de chiffre, pas de volume, description du réseau en tant que concept |
| Approche §4 | F1, F5 | ARKÉ pourrait être perçu comme un diagnostic | "Bilan d'entrée", pas "diagnostic". 6 dimensions, pas des résultats médicaux |
| Gouvernance §3 | — | Crédibilité fragile si instances pas encore constituées | Mention "en cours de constitution" sur chaque instance. Noms publiés uniquement Cyril Jamot + ASD (engagement signé). Règle QG Notion |
| Guilde §2 | F4 | "Personnes engagées" + "Pas de tourisme médical" pourrait décourager | Formulation directe mais conforme v5 ASD. Cohérente avec la posture praticien |
| Guilde §3 | F2 | Liste de profils = promesse d'intégration | "Profils recherchés" ≠ "profils acceptés". Sélection via protocole CMedO |
| Guilde §5 | F2 | Formulaire = engagement | Texte explicite : "ouvre un échange, pas un engagement" |
| Actualités | — | Contenu non validé ASD | 8 articles à adapter dans une conversation dédiée |

---

# ANNEXE C — CONTENUS EN ATTENTE

| Contenu | Dépendance | Bloquant pour |
|---------|-----------|---------------|
| Schéma T•C•C + MILIEU interactif | Design + front-end | Approche §2 |
| Schéma spirale Odyssea | Design | Approche §4 |
| Images OG (/og/approche.jpg, gouvernance.jpg, guilde.jpg, actualites.jpg) | Design | SEO |
| Validation ASD cadre déontologique (textes site) | ✓ Validé — contenu repris du v5 approuvé ASD | — |
| Validation ASD profils recherchés (4 catégories) | ✓ Validé — contenu repris du v5 approuvé ASD | — |
| **ACTION À PROPAGER** : classification 4 catégories (v5 ASD) remplace les "4 strates" dans le QG Notion | Cyril + équipe | QG Notion |
| Validation ASD contenus scientifiques Approche | Anne-Sophie Darrigade | Approche §2, §4 |
| 8 articles Fondements adaptés pour le blog | Conversation ad-hoc | Actualités §3 |
| Photos praticiens / illustrations Guilde | Shooting / Design | Guilde §2 |

---

*Document produit le 30 mars 2026 — SPECS PAGES SECONDAIRES Niveau 2 SDD*
*Usage : contrat page-par-page pour la génération du code*
*Dépendance : Spec Système N1 + Specs Pages Prioritaires N2*
*Statut : À VALIDER par Cyril Jamot (CEO) avant génération de code*
