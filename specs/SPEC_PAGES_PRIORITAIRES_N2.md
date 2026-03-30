# SPECS PAGES PRIORITAIRES — NIVEAU 2 DU SDD
## Pages : Accueil (/) • Mission (/mission) • Soutenir (/soutenir)

**Version : 30 mars 2026**
**Statut : À VALIDER**
**Dépendance : Spec Système N1 (29/03/2026, corrigée)**
**Source de vérité contenu : Brief SDD (29/03/2026, ACTÉ) + Charte Fondatrice v2.0 + Charte Mission MAJ 27/03/2026**

---

## CONVENTIONS DE LECTURE

Chaque section de page est spécifiée selon ce schéma :

```
SECTION [N] — [Nom]
├── Variante fond : slate | steel | linen
├── Composant Section : variant + padding
├── Layout : grille, colonnes, alignement
├── Contenu : texte exact ou contraintes
├── Composants instanciés : avec props
├── Responsive : comportement par breakpoint
├── Animation : entrée, interactions
└── Garde-fous : failles applicables
```

Les textes marqués `[CONTENU DÉFINITIF]` sont actés et ne doivent pas être modifiés sans validation. Les textes marqués `[CONTENU PROVISOIRE — À VALIDER]` sont des propositions à confirmer. Les zones marquées `[PLACEHOLDER — EN ATTENTE]` dépendent d'un livrable tiers (photos, validation juridique, etc.).

---

# PAGE 1 — ACCUEIL (/)

**Fichier :** `app/page.tsx`
**Intention :** Le récit en 60 secondes de scroll. Tout le monde comprend. Chacun trouve son chemin.
**Format :** Homepage longue en scroll, 6 sections alternant Slate et Linen.

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'ARCHIPEL Foundation — Réinventer la santé. Pour qu\'elle dure.',
  description: 'ARCHIPEL Foundation est un fonds de dotation en création, dédié à la santé préventive et intégrative fondée sur la Salutogénèse.',
  openGraph: {
    images: [{ url: '/og/accueil.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO

**Variante fond :** `slate` (padding `hero`)
**Hauteur minimum :** 100vh mobile, 90vh desktop (le visiteur voit un écran complet avant de scroller)

### Layout

```
Desktop (≥ lg) :
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│     [Picto Foundation]                                         │
│     centré ou asymétrique 60/40                                │
│                                                                │
│     SOIGNER • RELIER • TRANSFORMER                             │
│     (font-label, uppercase, tracking-wide, text-sand)          │
│                                                                │
│     La santé se crée. Ensemble.                                │
│     Elle ne se subit pas. Seul·e.                              │
│     (font-heading, text-hero, text-linen)                      │
│                                                                │
│     Vous voulez créer les conditions de votre                  │
│     santé ? Nous avons construit l'espace                      │
│     pour le faire.                                             │
│     (font-body, text-h4, text-sand)                            │
│                                                                │
│     [CTA : Rejoindre les pionniers]                            │
│     (Button variant="accent" size="lg")                        │
│                                                                │
│     ↓ indicateur de scroll (chevron animé)                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘

Mobile (< lg) :
Même structure, empilée et centrée.
Picto : taille réduite (max-w-[200px]).
Titre : text-h1 au lieu de text-hero.
Sous-titre : text-body.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Triptyque | SOIGNER • RELIER • TRANSFORMER | `[CONTENU DÉFINITIF]` |
| Accroche L1 | La santé se crée. Ensemble. | `[CONTENU DÉFINITIF]` |
| Accroche L2 | Elle ne se subit pas. Seul·e. | `[CONTENU DÉFINITIF]` |
| Sous-titre | Vous voulez créer les conditions de votre santé ? Nous avons construit l'espace pour le faire. | `[CONTENU DÉFINITIF]` |
| CTA | Rejoindre les pionniers | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="slate" padding="hero">
  <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

    <PictoFoundation variant="on-dark" className="w-32 h-32 lg:w-48 lg:h-48 mb-8" />

    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6">
      SOIGNER • RELIER • TRANSFORMER
    </span>

    <h1 className="font-heading text-hero tracking-[-0.02em] text-linen mb-2">
      La santé se crée. Ensemble.
    </h1>
    <p className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen/70 mb-8">
      Elle ne se subit pas. Seul·e.
    </p>

    <p className="font-body text-h4 text-sand max-w-2xl mb-10">
      Vous voulez créer les conditions de votre santé ?
      Nous avons construit l'espace pour le faire.
    </p>

    <Button variant="accent" size="lg" href="#pionniers">
      Rejoindre les pionniers
    </Button>

    {/* Indicateur de scroll */}
    <div className="mt-16 animate-bounce">
      <ChevronDown className="w-6 h-6 text-sand/50" />
    </div>
  </div>
</Section>
```

### Animation

| Élément | Animation | Délai |
|---------|-----------|-------|
| Picto | Fade-in + scale(0.9 → 1) | 0ms |
| Triptyque | Fade-in | 200ms |
| Titre L1 | Fade-in + translate-Y(20px → 0) | 400ms |
| Titre L2 | Fade-in + translate-Y(20px → 0) | 600ms |
| Sous-titre | Fade-in | 800ms |
| CTA | Fade-in + translate-Y(10px → 0) | 1000ms |
| Chevron | bounce (infini, 2s) | 1200ms |

Toutes les animations respectent `prefers-reduced-motion`.

---

## SECTION 2 — LE CONSTAT

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop (≥ lg) : 2 colonnes (texte 60% / chiffres 40%)
┌──────────────────────────────────┬─────────────────────────┐
│  Titre : Le constat              │  Chiffre clé            │
│                                  │  76%                    │
│  Paragraphe de constat           │  des personnes gèrent   │
│  universalisé.                   │  seules leur             │
│                                  │  coordination santé.    │
│  Paragraphe d'amplification.     │  (Source : Enquête      │
│                                  │  ARCHIPEL, 662 rép.)    │
└──────────────────────────────────┴─────────────────────────┘

Mobile : stack vertical, chiffre au-dessus du texte.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | LE CONSTAT | `[CONTENU DÉFINITIF]` |
| Titre | Personne ne relie les points de votre santé. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | Vous avez un médecin pour chaque organe. Un spécialiste pour chaque symptôme. Un praticien pour chaque douleur. Mais qui voit l'ensemble ? Qui relie votre sommeil à votre alimentation, votre stress à votre dos, votre histoire à vos signaux d'aujourd'hui ? | `[CONTENU PROVISOIRE — À VALIDER]` |
| P2 | Le système de santé est conçu pour intervenir quand vous êtes malade. Pas pour créer les conditions de votre santé quand tout semble encore aller. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Chiffre | 76% | `[CONTENU DÉFINITIF]` — Source : Enquête ARCHIPEL, 662 réponses |
| Légende chiffre | des personnes interrogées gèrent seules la coordination de leur santé. | `[CONTENU DÉFINITIF]` |
| Source | Enquête ARCHIPEL Foundation, 2025, 662 répondants. | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-start">

    {/* Colonne texte — 3/5 */}
    <div className="lg:col-span-3">
      <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
        Le constat
      </span>
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
        Personne ne relie les points de votre santé.
      </h2>
      <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-4">
        {/* P1 */}
      </p>
      <p className="font-body text-body leading-[1.6] text-slate_f/80">
        {/* P2 */}
      </p>
    </div>

    {/* Colonne chiffre — 2/5 */}
    <div className="lg:col-span-2 bg-slate_f rounded-lg p-8 text-center">
      <span className="font-heading text-hero text-sand block mb-2">76%</span>
      <p className="font-body text-body text-linen/80 mb-4">
        des personnes interrogées gèrent seules la coordination de leur santé.
      </p>
      <p className="font-body text-caption text-sand/60">
        Enquête ARCHIPEL Foundation, 2025, 662 répondants.
      </p>
    </div>

  </div>
</Section>
```

### Garde-fous

⚠ **F5** : Le texte du constat ne doit pas laisser entendre qu'ARCHIPEL remplace un parcours médical. Il décrit un manque de coordination, pas un échec thérapeutique.

---

## SECTION 3 — LA RÉPONSE

**Variante fond :** `steel` (padding `default`)

### Layout

```
Desktop (≥ lg) : centré, pleine largeur
┌────────────────────────────────────────────────────────────────┐
│  Golden quote centrée :                                        │
│  "Le médecin est le confident de la maladie.                   │
│   ARCHIPEL est le confident de la santé."                      │
│  (font-heading, text-h2, text-linen, max-w-3xl)               │
│                                                                │
│  ┌──────────────────────────────────────────────────────┐      │
│  │  Sous-titre Salutogénèse                             │      │
│  │  + Visuel TÊTE•CŒUR•CORPS + MILIEU                   │      │
│  │  (picto décomposé ou schéma explicatif)               │      │
│  └──────────────────────────────────────────────────────┘      │
│                                                                │
│  Explication en 2-3 lignes                                     │
└────────────────────────────────────────────────────────────────┘
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Golden quote | Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé. | `[CONTENU DÉFINITIF]` |
| Label | LA SALUTOGÉNÈSE | `[CONTENU DÉFINITIF]` |
| Sous-titre | La science de ce qui crée la santé. | `[CONTENU DÉFINITIF]` |
| Explication | Fondée en 1979 par Aaron Antonovsky, la Salutogénèse étudie ce qui construit la santé, là où la médecine conventionnelle étudie ce qui crée la maladie. ARCHIPEL en fait le socle de son approche : créer les conditions de votre santé, pas seulement traiter vos symptômes. | `[CONTENU PROVISOIRE — À VALIDER ASD]` |
| Visuel | Picto Foundation décomposé : triangle + cercle MILIEU + 3 dots T•C•C avec légendes | `[PLACEHOLDER — À CONCEVOIR]` |

### Composants instanciés

```tsx
<Section variant="steel" padding="default">
  <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

    {/* Golden quote */}
    <blockquote className="font-heading text-h2 lg:text-h1 tracking-[-0.02em] text-linen mb-12 max-w-3xl">
      Le médecin est le confident de la maladie.
      <br />
      <span className="text-sand">ARCHIPEL est le confident de la santé.</span>
    </blockquote>

    {/* Séparateur visuel — ligne fine Sand */}
    <div className="w-16 h-px bg-sand/40 mb-12" />

    {/* Salutogénèse */}
    <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
      La Salutogénèse
    </span>
    <h2 className="font-heading text-h3 tracking-[-0.02em] text-linen mb-6">
      La science de ce qui crée la santé.
    </h2>

    {/* Visuel TÊTE•CŒUR•CORPS + MILIEU */}
    <div className="my-8 lg:my-12">
      <DotsTCC size="lg" showLabels showMilieu className="mx-auto" />
      {/* Composant SVG interactif : cercle MILIEU Steel Blue, */}
      {/* 3 dots avec couleurs invariantes, labels en font-label */}
    </div>

    <p className="font-body text-body leading-[1.6] text-linen/80 max-w-2xl">
      {/* Explication Salutogénèse */}
    </p>

  </div>
</Section>
```

### Animation

La golden quote apparaît en fade-in au scroll, avec un délai de 200ms entre les deux lignes. Le "ARCHIPEL est le confident de la santé" en Sand crée le contraste visuel.

---

## SECTION 4 — CE QUE NOUS CONSTRUISONS

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop (≥ lg) : 2 colonnes (texte gauche / schéma droite)
┌──────────────────────────────────┬─────────────────────────────┐
│  Label : CE QUE NOUS CONSTRUISONS│  Schéma deux corps          │
│                                   │  Foundation ↕ Life          │
│  Titre                            │  (SVG ou composant)         │
│  Paragraphe modèle deux corps     │                             │
│                                   │                             │
│  2 cards empilées :               │                             │
│  • Foundation (mission)           │                             │
│  • ARCHIPEL LIFE (opérationnel)   │                             │
└──────────────────────────────────┴─────────────────────────────┘

Mobile : stack vertical, schéma au-dessus, puis texte + cards.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | CE QUE NOUS CONSTRUISONS | `[CONTENU DÉFINITIF]` |
| Titre | Un modèle à deux corps. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | ARCHIPEL Foundation supervise le développement d'un service de santé préventive opéré par ARCHIPEL LIFE, sa structure opérationnelle. | `[CONTENU DÉFINITIF]` |
| Card Foundation titre | ARCHIPEL Foundation | `[CONTENU DÉFINITIF]` |
| Card Foundation desc | La mission, l'éthique, la recherche. Fonds de dotation en création, futur Fondation d'utilité publique. Aucun intérêt commercial. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Card Foundation statut | Fonds de dotation en création | `[CONTENU DÉFINITIF]` |
| Card Life titre | ARCHIPEL LIFE | `[CONTENU DÉFINITIF]` |
| Card Life desc | Le service opérationnel. Iris, les Sherpas, La Guilde, le parcours Odyssea. SAS à mission dont les résultats financent la Fondation. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Card Life statut | SAS en cours de création | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

    {/* Colonne texte */}
    <div>
      <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
        Ce que nous construisons
      </span>
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
        Un modèle à deux corps.
      </h2>
      <p className="font-body text-body leading-[1.6] text-slate_f/80 mb-8">
        {/* P1 */}
      </p>

      {/* Card Foundation */}
      <Card variant="principe" className="mb-4">
        <span className="font-label text-caption uppercase tracking-[0.08em] text-sand">
          Fonds de dotation en création
        </span>
        <h3>ARCHIPEL Foundation</h3>
        <p>{/* Card Foundation desc */}</p>
      </Card>

      {/* Card Life */}
      <Card variant="feature" className="mt-0">
        <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
          SAS en cours de création
        </span>
        <h3>ARCHIPEL LIFE</h3>
        <p>{/* Card Life desc */}</p>
      </Card>
    </div>

    {/* Colonne schéma */}
    <div className="order-first lg:order-last">
      <IconDeuxCorps className="w-full max-w-sm mx-auto" />
      {/* SVG schéma Foundation ↕ Life avec flèche reversement */}
    </div>

  </div>
</Section>
```

### Garde-fous

⚠ **F3** : La mention de Life est factuelle, pas promotionnelle. Aucun CTA vers ARCHIPEL LIFE. Le lien entre les deux est le reversement financier et l'alignement de mission, pas la vente d'un service.

---

## SECTION 5 — LES PREUVES DE SÉRIEUX

**Variante fond :** `slate` (padding `default`)

### Layout

```
Desktop (≥ lg) : titre centré, puis grille 3 colonnes
┌────────────────────────────────────────────────────────────────┐
│  Label : NOS ENGAGEMENTS                                       │
│  Titre centré                                                  │
│                                                                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │ Comité       │ │ CIES         │ │ 9 Principes  │           │
│  │ d'Éthique    │ │              │ │ Fondateurs   │           │
│  │ 9 membres    │ │ 9 membres    │ │ Charte v2.0  │           │
│  │ veto absolu  │ │ présidé CMedO│ │ → lien       │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
│                                                                │
│  Références scientifiques (inline, discret)                    │
│                                                                │
│  → Découvrir notre gouvernance (lien /gouvernance)             │
└────────────────────────────────────────────────────────────────┘

Mobile : stack vertical, cards en colonne.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | NOS ENGAGEMENTS | `[CONTENU DÉFINITIF]` |
| Titre | La gouvernance d'une fondation qui veut durer. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Card 1 titre | Comité d'Éthique | `[CONTENU DÉFINITIF]` |
| Card 1 desc | 9 membres indépendants. Droit de veto absolu sur toute décision stratégique, technologique ou opérationnelle. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Card 2 titre | CIES | `[CONTENU DÉFINITIF]` |
| Card 2 desc | Comité Interdisciplinaire d'Expertise Scientifique. 9 membres, présidé par le Chief Medical Officer. Garant de la rigueur scientifique. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Card 3 titre | 9 Principes Fondateurs | `[CONTENU DÉFINITIF]` |
| Card 3 desc | Inscrits dans la Charte Fondatrice v2.0. Ils définissent ce qu'ARCHIPEL s'engage à faire et à ne jamais faire. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Card 3 lien | Découvrir les 9 principes → /mission/9-principes | `[CONTENU DÉFINITIF]` |
| Références | Fondée sur la Salutogénèse (Antonovsky, 1979). Éclairée par les dernières recherches (Shenhar et al., Science, janvier 2026 : environ 50% des facteurs de santé sont modifiables). | `[CONTENU DÉFINITIF]` |
| Lien gouvernance | Découvrir notre gouvernance → /gouvernance | `[CONTENU DÉFINITIF]` |

### Composants instanciés

```tsx
<Section variant="slate" padding="default">
  <div className="text-center mb-12">
    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
      Nos engagements
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
      La gouvernance d'une fondation qui veut durer.
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
    <Card variant="feature" label="Comité d'Éthique" ... />
    <Card variant="feature" label="CIES" ... />
    <Card variant="feature" label="9 Principes Fondateurs" href="/mission/9-principes" ... />
  </div>

  <p className="font-body text-body-sm text-sand/70 text-center max-w-2xl mx-auto mb-8">
    {/* Références scientifiques */}
  </p>

  <div className="text-center">
    <Button variant="secondary" href="/gouvernance">
      Découvrir notre gouvernance
    </Button>
  </div>
</Section>
```

Note : les cards sur fond Slate utilisent la variante `feature` avec la prop `onDark={true}`. Cette prop inverse le schéma chromatique : fond `steel-blue/15`, bordure `steel-blue/25`, texte `linen`, label `tete`. **Action Spec N1 : ajouter la prop `onDark?: boolean` au composant Card, variante `feature`.** Le comportement par défaut (`onDark={false}`) reste celui décrit en Spec N1 §2.5 (fond Linen, bordure Steel Blue, texte Slate).

---

## SECTION 6 — TRIPLE CTA

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop (≥ lg) : grille 3 colonnes centrées
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│   [Icône]        │ │   [Icône]        │ │   [Icône]        │
│                  │ │                  │ │                  │
│  Soutenir        │ │  Rejoindre       │ │  Rejoindre les   │
│  ARCHIPEL        │ │  La Guilde       │ │  pionniers       │
│                  │ │                  │ │                  │
│  Vous croyez ... │ │  Vous êtes ...   │ │  Vous voulez ... │
│                  │ │                  │ │                  │
│  [CTA]           │ │  [CTA]           │ │  [CTA]           │
└──────────────────┘ └──────────────────┘ └──────────────────┘

Mobile : stack vertical, 1 card par ligne.
```

### Contenu

| Card | Titre | Description | CTA | Lien |
|------|-------|-------------|-----|------|
| 1 | Soutenir ARCHIPEL | Vous croyez qu'un autre rapport à la santé est possible ? Rejoignez les fondateurs. | Soutenir | /soutenir |
| 2 | Rejoindre La Guilde | Vous êtes praticien de santé ? Intégrez un réseau de coordination sans précédent. | Candidater | /guilde |
| 3 | Rejoindre les pionniers | Vous voulez être parmi les premiers à vivre l'approche ARCHIPEL ? | S'inscrire | #pionniers |

Statut : `[CONTENU PROVISOIRE — À VALIDER]` pour les descriptions. Titres et labels CTA `[CONTENU DÉFINITIF]`.

### Composants instanciés

```tsx
<Section variant="linen" padding="default" id="pionniers">
  <div className="text-center mb-12">
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f">
      Trouvez votre place dans l'archipel.
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    <Card variant="cta" title="Soutenir ARCHIPEL" href="/soutenir" ... />
    <Card variant="cta" title="Rejoindre La Guilde" href="/guilde" ... />
    <Card variant="cta" title="Rejoindre les pionniers" ... />
  </div>

  {/* Formulaire Pionniers intégré sous la 3e card */}
  <div className="mt-8 max-w-md mx-auto">
    <PioneerForm variant="on-light" />
  </div>
</Section>
```

### Note architecturale

L'ancre `#pionniers` est la destination du CTA header "Rejoindre les pionniers" sur la homepage. Sur les autres pages, le CTA header pointe vers `/#pionniers`. Le formulaire `PioneerForm` est le même composant que celui du footer, instancié ici avec la variante `on-light`.

---

## FIN DE PAGE — FOOTER

Le Footer (composant global, cf. Spec N1 §2.2) s'affiche après la Section 6. Le `PioneerForm` apparaît deux fois sur la page (Section 6 + Footer). Ce doublon est **intentionnel** : il maximise les points de conversion sans forcer le scroll. La déduplication se fait côté API (si l'email existe déjà dans la DB Notion, mise à jour du timestamp au lieu de création d'une nouvelle entrée).

---

# PAGE 2 — NOTRE MISSION (/mission)

**Fichier :** `app/mission/page.tsx`
**Intention :** Le POURQUOI. Pourquoi ARCHIPEL existe. Ce que la Fondation construit au-delà du service.
**Audience prioritaire :** Mécènes, institutionnels, partenaires académiques.

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'Notre Mission',
  description: 'ARCHIPEL construit un écosystème de santé préventive fondé sur la Salutogénèse. 5 axes : accessibilité, éducation, recherche, plaidoyer, souveraineté des données.',
  openGraph: {
    images: [{ url: '/og/mission.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO MISSION

**Variante fond :** `slate` (padding `hero`)

### Layout

```
Centré, max-w-3xl.
Pas d'image — texte seul, statutaire.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | NOTRE MISSION | `[CONTENU DÉFINITIF]` |
| Titre | ARCHIPEL n'est pas une réponse à l'échec de la médecine. C'est une réponse à son incomplétude. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.1 |
| Sous-titre | Une fondation qui ne soigne pas. Qui crée les conditions pour que la santé dure. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Mention | ARCHIPEL est née d'un constat vécu avant d'être théorisé. | `[CONTENU DÉFINITIF]` — Brief §8 |

### Composants instanciés

```tsx
<Section variant="slate" padding="hero">
  <div className="max-w-3xl mx-auto text-center">

    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6 block">
      Notre mission
    </span>

    <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
      ARCHIPEL n'est pas une réponse à l'échec de la médecine.
      <br />
      <span className="text-sand">C'est une réponse à son incomplétude.</span>
    </h1>

    <p className="font-body text-h4 text-linen/70 mb-8">
      Une fondation qui ne soigne pas.
      Qui crée les conditions pour que la santé dure.
    </p>

    <p className="font-body text-body-sm text-sand/60 italic">
      ARCHIPEL est née d'un constat vécu avant d'être théorisé.
    </p>

  </div>
</Section>
```

---

## SECTION 2 — LES 5 AXES DE MISSION

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop (≥ lg) : 
Texte introductif max-w-3xl, centré.
Puis 5 cards empilées verticalement (pas de grille — chaque axe mérite sa lecture).

**⚠ Vigilance visuelle :** 5 cards Slate successives sur fond Linen créent une densité sombre importante. À vérifier lors du prototypage. Si le poids visuel est excessif, alternatives possibles : alterner cards Slate et cards bordure-Steel-Blue sans fond, ou regrouper les axes projetés (2-5) sous un traitement plus léger que les axes en construction (1, 5).

Chaque card axe :
┌────────────────────────────────────────────────────────────────┐
│  [Numéro] [Statut badge]                         fond Slate   │
│  Titre de l'axe                                               │
│  Description (2-3 phrases, prose — pas de liste)              │
│  Lien vers sous-page si applicable                            │
└────────────────────────────────────────────────────────────────┘

Mobile : même structure, stack pleine largeur.
```

### Contenu

| # | Axe | Statut | Description (résumé pour le site) | Sous-page |
|---|-----|--------|----------------------------------|-----------|
| 1 | Accessibilité | ◐ En construction | La santé préventive est aujourd'hui structurellement inaccessible à la majorité. ARCHIPEL agit via le Fonds de Bourses et une architecture tarifaire conçue pour que le premium finance l'accès. Ce mécanisme Robin Hood est inscrit dans les statuts. | /mission/robin-hood |
| 2 | Éducation | ○ Projeté | La Salutogénèse n'a jamais atteint le grand public sous une forme opérationnelle. ARCHIPEL finance des programmes éducatifs pour les enfants, les femmes face aux angles morts du système, et les populations les plus éloignées d'un parcours coordonné. | — |
| 3 | Recherche | ○ Projeté | Les interactions entre TÊTE, CŒUR et CORPS, l'efficacité du health coaching coordonné, les liens entre cohérence de sens et marqueurs biologiques : ces terrains sont sous-financés. La Fondation les finance via des appels à projets ouverts, en accès libre. | — |
| 4 | Plaidoyer | ○ Projeté | Une fondation qui influence les systèmes transforme. ARCHIPEL porte des positions sur l'intégration de la coordination préventive dans les politiques de remboursement et la reconnaissance des approches complémentaires validées. | — |
| 5 | Souveraineté des données | ◐ En construction | Les données de santé restent la propriété des personnes qui les produisent. Pas de la plateforme, pas des partenaires, pas des financeurs. Ce n'est pas une clause de conformité. C'est une position de fond. | — |

Statut contenus : `[CONTENU PROVISOIRE — À VALIDER ASD]` — les textes sont synthétisés depuis la Charte v2.0 Art.1, à valider avec ASD pour le registre adapté au site.

### Badges de statut

```tsx
// Composant badge réutilisable
function StatusBadge({ status }: { status: 'acte' | 'construction' | 'projete' }) {
  const styles = {
    acte:         'bg-corps/20 text-corps',        // Vert Sage
    construction: 'bg-sand/20 text-sand',           // Sand
    projete:      'bg-tete/20 text-tete',           // Bleu-gris
  };
  const labels = {
    acte: 'ACTÉ ✓',
    construction: 'EN CONSTRUCTION ◐',
    projete: 'PROJETÉ ○',
  };
  return (
    <span className={`font-label text-caption uppercase tracking-[0.08em] px-2 py-1 rounded-sm ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
```

### Composants instanciés

```tsx
<Section variant="linen" padding="default">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <span className="font-label text-label uppercase tracking-[0.12em] text-steel-blue mb-4 block">
      5 axes permanents
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-6">
      Ce que nous voulons changer dans le monde.
    </h2>
    <p className="font-body text-body leading-[1.6] text-slate_f/80">
      Ces cinq axes forment un tout. L'accessibilité sans recherche reste
      une promesse sans fondement. La recherche sans plaidoyer reste sans
      effet systémique. Et aucun ne tient sans la souveraineté des données.
    </p>
  </div>

  <div className="max-w-3xl mx-auto space-y-6">
    {axes.map((axe, i) => (
      <Card variant="principe" key={i}>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-label text-caption text-sand">0{i + 1}</span>
          <StatusBadge status={axe.status} />
        </div>
        <h3 className="font-heading text-h3 tracking-[-0.02em] text-linen mb-3">
          {axe.title}
        </h3>
        <p className="font-body text-body-sm leading-[1.6] text-linen/80">
          {axe.description}
        </p>
        {axe.href && (
          <a href={axe.href} className="font-label text-caption uppercase tracking-[0.08em] text-sand hover:text-linen mt-4 inline-block transition-colors">
            En savoir plus →
          </a>
        )}
      </Card>
    ))}
  </div>
</Section>
```

---

## SECTION 3 — LA SALUTOGÉNÈSE SITUÉE

**Variante fond :** `steel` (padding `default`)

### Layout

```
Desktop : 2 colonnes (texte 50% / visuel 50%)
Mobile : stack vertical, visuel au-dessus.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | NOTRE PHILOSOPHIE | `[CONTENU DÉFINITIF]` |
| Titre | La Salutogénèse : ce qui crée la santé, pas ce qui traite la maladie. | `[CONTENU PROVISOIRE — À VALIDER ASD]` |
| P1 | La médecine conventionnelle pose la question : comment éliminons-nous vos symptômes ? La Salutogénèse pose une autre question : comment construisons-nous votre capacité à être en bonne santé ? | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.2 (adapté) |
| P2 | Le cadre TÊTE•CŒUR•CORPS d'ARCHIPEL en est la traduction opérationnelle. La santé se construit dans la cohérence entre les dimensions cognitive et mentale, émotionnelle et relationnelle, physique et corporelle. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.2 |
| P3 | Ces trois dimensions s'enracinent dans un MILIEU : l'environnement vivant de la personne, ses rythmes circadiens, sa relation à la nature, la qualité de son cadre de vie. Le MILIEU n'est pas un quatrième pilier. Il est le sol dans lequel TÊTE, CŒUR et CORPS s'enracinent. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.2 |
| Visuel | Schéma TÊTE•CŒUR•CORPS + MILIEU avec légendes développées | `[PLACEHOLDER — À CONCEVOIR]` |

### Composants instanciés

```tsx
<Section variant="steel" padding="default">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

    <div>
      <span className="font-label text-label uppercase tracking-[0.12em] text-tete mb-4 block">
        Notre philosophie
      </span>
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
        La Salutogénèse : ce qui crée la santé, pas ce qui traite la maladie.
      </h2>
      <div className="space-y-4 font-body text-body leading-[1.6] text-linen/80">
        <p>{/* P1 */}</p>
        <p>{/* P2 */}</p>
        <p>{/* P3 */}</p>
      </div>
    </div>

    <div className="order-first lg:order-last">
      <DotsTCC size="xl" showLabels showMilieu showDescriptions className="mx-auto" />
    </div>

  </div>
</Section>
```

### Garde-fous

⚠ **F1** : Le texte explique une philosophie, pas un protocole thérapeutique. Aucune promesse de résultat.

---

## SECTION 4 — LE MODÈLE À DEUX CORPS

**Variante fond :** `linen` (padding `default`)

Même structure que la Section 4 de la homepage mais en version développée : le schéma est plus détaillé, avec le flux financier (reversement statutaire) et la mention de la loi PACTE.

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | NOTRE ARCHITECTURE | `[CONTENU DÉFINITIF]` |
| Titre | Foundation et Life : deux corps, une mission. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | Le premier corps est ARCHIPEL Foundation, fonds de dotation en création, future fondation d'utilité publique. Elle ne vend rien. Elle ne dispose d'aucun intérêt commercial. C'est précisément cette indépendance qui fait d'elle un tiers de confiance. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.1 (adapté) |
| P2 | Le second corps est ARCHIPEL LIFE SAS, société à mission au sens de la loi PACTE. Elle opère la mission sur le terrain. Une partie de ses résultats est reversée annuellement à la Fondation, via une clause statutaire irrévocable, pour financer les cinq axes de mission. | `[CONTENU DÉFINITIF]` — Charte v2.0 Art.1 (adapté) |
| Visuel | Schéma flux : Personnes → LIFE (opère) → Reversement → Foundation (finance 5 axes) → Impact | `[PLACEHOLDER — À CONCEVOIR]` |

### CTA de fin de section

```tsx
<Button variant="primary" href="/soutenir">
  Soutenir cette mission
</Button>
```

---

## SECTION 5 — CTA MISSION

**Variante fond :** `slate` (padding `compact`)

Bande CTA pleine largeur avec la golden quote et le bouton principal.

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Quote | La santé n'est pas un état à conquérir. C'est un rythme à retrouver. | `[CONTENU DÉFINITIF]` |
| CTA | Soutenir cette mission | `[CONTENU DÉFINITIF]` |

### Sous-pages accessibles depuis /mission

Liens en bas de section ou intégrés dans le fil des sections :

| Lien | Label | Destination |
|------|-------|-------------|
| 1 | Les 9 Principes Fondateurs | /mission/9-principes |
| 2 | Le Modèle Robin Hood | /mission/robin-hood |

---

# PAGE 3 — SOUTENIR (/soutenir)

**Fichier :** `app/soutenir/page.tsx`
**Intention :** Conversion mécénat/don. Formulaire actif.
**Audience prioritaire :** Mécènes, donateurs, philanthropes.

**Metadata :**

```typescript
export const metadata: Metadata = {
  title: 'Soutenir ARCHIPEL',
  description: 'Rejoignez les Cercles de Fondateurs et soutenez la création d\'un écosystème de santé préventive ouvert à tous.',
  openGraph: {
    images: [{ url: '/og/soutenir.jpg', width: 1200, height: 630 }],
  },
};
```

---

## SECTION 1 — HERO SOUTENIR

**Variante fond :** `slate` (padding `hero`)

### Layout

Centré, max-w-3xl. Même pattern que le hero Mission mais avec un ton d'engagement.

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | SOUTENIR | `[CONTENU DÉFINITIF]` |
| Titre | Devenez fondateur d'un autre rapport à la santé. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Sous-titre | ARCHIPEL Foundation construit l'infrastructure d'une santé qui ne commence pas par la maladie. Votre soutien en est le socle. | `[CONTENU PROVISOIRE — À VALIDER]` |

### Composants instanciés

```tsx
<Section variant="slate" padding="hero">
  <div className="max-w-3xl mx-auto text-center">
    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-6 block">
      Soutenir
    </span>
    <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
      Devenez fondateur d'un autre rapport à la santé.
    </h1>
    <p className="font-body text-h4 text-sand">
      {/* Sous-titre */}
    </p>
  </div>
</Section>
```

---

## SECTION 2 — POURQUOI SOUTENIR

**Variante fond :** `linen` (padding `default`)

### Layout

```
Desktop : 2 colonnes (texte 60% / illustration 40%)
Mobile : stack vertical.
```

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Label | VOTRE IMPACT | `[CONTENU DÉFINITIF]` |
| Titre | 5 axes financés par votre soutien. | `[CONTENU PROVISOIRE — À VALIDER]` |
| P1 | Chaque contribution, quelle que soit sa forme, finance directement les cinq axes de mission : accessibilité, éducation, recherche, plaidoyer, souveraineté des données. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Impact concret | Un don permet de financer l'accès au programme pour une personne qui n'en a pas les moyens, via le Fonds de Bourses. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Visuel | Schéma simplifié : Don → Foundation → 5 axes → Impact | `[PLACEHOLDER — À CONCEVOIR]` |

Note : aucun montant spécifique n'est mentionné ("un don" sans chiffre, pas "un don de 10 000€"). Le Brief acte l'absence de montants sur le site public.

---

## SECTION 3 — LES CERCLES DE FONDATEURS

**Variante fond :** `slate` (padding `default`)

### Layout

```
Desktop (≥ lg) : grille 3 colonnes (1 card par cercle)
┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
│  EXPLORATEUR     │ │  BÂTISSEUR       │ │  ARCHITECTE      │
│  Donateurs       │ │  Mécènes         │ │  Co-fondateurs   │
│                  │ │                  │ │                  │
│  Description     │ │  Description     │ │  Description     │
│                  │ │                  │ │                  │
│  • Bénéfice 1    │ │  • Tout Explor.  │ │  • Tout Bâtiss.  │
│  • Bénéfice 2    │ │  • Bénéfice +    │ │  • Bénéfice ++   │
│  • Bénéfice 3    │ │  • Bénéfice +    │ │  • Bénéfice ++   │
│                  │ │                  │ │                  │
│  fd Linen        │ │  fd Linen        │ │  fd Linen        │
│  bordure Sand    │ │  bordure Sand    │ │  bordure Coeur   │
│  (base)          │ │  (recommandé)    │ │  (premium)       │
└──────────────────┘ └──────────────────┘ └──────────────────┘

Mobile : stack vertical, Bâtisseur en premier (recommandé).
```

### Contenu

| Cercle | Sous-titre | Description | Bénéfices | Bordure |
|--------|-----------|-------------|-----------|---------|
| Explorateur | Donateurs | Vous croyez en cette vision et souhaitez contribuer à son développement. | Accès prioritaire à la liste d'attente • Newsletter exclusive • Invitation événements annuels • Reconnaissance mur des soutiens | Sand/30 |
| Bâtisseur | Mécènes | Vous investissez dans la construction de l'écosystème ARCHIPEL. | Tout Explorateur + Rencontres trimestrielles équipe fondatrice • Accès anticipé au programme quand il sera disponible • Influence feuille de route • Reconnaissance nominative | Sand (plein) + badge "Recommandé" |
| Architecte | Co-fondateurs | Vous co-construisez ARCHIPEL et façonnez son avenir aux côtés de l'équipe. | Tout Bâtisseur + Accès direct au fondateur • Co-construction feuille de route • Siège observateur Conseil • Rapports trimestriels | Coeur #C85A30 |

Statut : `[CONTENU PROVISOIRE — À VALIDER]`. Les bénéfices sont issus du Dossier Mécènes mais adaptés pour le site (pas de montants).

### Technique : biais de désirabilité

Le Brief valide un mécanisme de "niveaux d'engagement croissant" pour créer l'aspiration. Cela se traduit visuellement par l'escalade des bordures (Sand neutre → Sand plein → Terracotta), le badge "Recommandé" sur Bâtisseur, et le fait que le Cercle Architecte est visuellement le plus distingué (bordure Coeur, icône premium).

### Composants instanciés

```tsx
<Section variant="slate" padding="default">
  <div className="text-center mb-12">
    <span className="font-label text-label uppercase tracking-[0.12em] text-sand mb-4 block">
      Les Cercles de Fondateurs
    </span>
    <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen max-w-2xl mx-auto">
      Trois niveaux d'engagement pour façonner l'avenir de la santé.
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

    {/* Explorateur */}
    <div className="bg-linen rounded-lg p-6 lg:p-8 border border-sand/30 flex flex-col">
      <IconExplorateur className="w-10 h-10 text-steel-blue mb-4" />
      {/* [PLACEHOLDER — À CRÉER] Icône non existante dans ArchipelIcons.tsx */}
      <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue mb-1">
        Donateurs
      </span>
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">
        Cercle Explorateur
      </h3>
      <p className="font-body text-body-sm text-slate_f/70 mb-6">{/* Description */}</p>
      <ul className="space-y-2 mt-auto font-body text-body-sm text-slate_f/80">
        {/* Bénéfices avec bullet • */}
      </ul>
    </div>

    {/* Bâtisseur — Recommandé */}
    <div className="bg-linen rounded-lg p-6 lg:p-8 border-2 border-sand relative flex flex-col">
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sand text-slate_f font-label text-caption uppercase tracking-[0.08em] px-3 py-1 rounded-full">
        Recommandé
      </span>
      <IconBatisseur className="w-10 h-10 text-steel-blue mb-4" />
      {/* [PLACEHOLDER — À CRÉER] Icône non existante dans ArchipelIcons.tsx */}
      {/* ... même structure ... */}
    </div>

    {/* Architecte — Premium */}
    <div className="bg-linen rounded-lg p-6 lg:p-8 border-2 border-coeur flex flex-col">
      <IconArchitecte className="w-10 h-10 text-coeur mb-4" />
      {/* [PLACEHOLDER — À CRÉER] Icône non existante dans ArchipelIcons.tsx */}
      {/* ... même structure ... */}
    </div>

  </div>
</Section>
```

---

## SECTION 4 — STATUT JURIDIQUE ET FISCAL

**Variante fond :** `linen` (padding `compact`)

### Contenu

| Élément | Texte | Statut |
|---------|-------|--------|
| Mention juridique | ARCHIPEL Foundation est un fonds de dotation en cours d'enregistrement auprès de la Préfecture, conformément à la loi n° 2008-776 du 4 août 2008. | `[CONTENU PROVISOIRE — À VALIDER AVOCAT]` |
| Mention fiscale | `[PLACEHOLDER — EN ATTENTE VALIDATION JURIDIQUE]` | Le Brief note : vérifier avec l'avocat la formulation exacte concernant les déductions fiscales. Aucune mention de déduction fiscale tant que l'avocat n'a pas validé. |

### Garde-fous

⚠ **Juridique critique** : Aucune mention de "Fondation RUP" (pas encore constituée). Aucune mention de déduction fiscale sans validation juridique explicite. Le wording "Fonds de dotation en création" est le seul autorisé.

### Composants instanciés

```tsx
<Section variant="linen" padding="compact">
  <div className="max-w-3xl mx-auto text-center">
    <p className="font-body text-body-sm text-slate_f/60 leading-[1.6]">
      ARCHIPEL Foundation est un fonds de dotation en cours d'enregistrement
      auprès de la Préfecture, conformément à la loi n° 2008-776 du 4 août 2008.
    </p>
    {/* PLACEHOLDER : mention fiscale après validation avocat */}
  </div>
</Section>
```

---

## SECTION 5 — FORMULAIRE SOUTENIR

**Variante fond :** `steel` (padding `default`)

### Layout

```
Desktop : 2 colonnes (texte de contexte 40% / formulaire 60%)
Mobile : stack vertical, texte puis formulaire.
```

### Contenu du contexte (colonne gauche)

| Élément | Texte | Statut |
|---------|-------|--------|
| Titre | Je souhaite soutenir ARCHIPEL | `[CONTENU DÉFINITIF]` |
| P1 | Ce formulaire ne constitue pas un engagement financier. Il nous permet de prendre contact avec vous pour discuter de votre soutien et de la forme qu'il pourrait prendre. | `[CONTENU PROVISOIRE — À VALIDER]` |
| Mention | Toute information transmise est confidentielle et traitée conformément à notre politique de confidentialité. | `[CONTENU DÉFINITIF]` |

### Formulaire (colonne droite)

Le formulaire "Soutenir" tel que défini en Spec N1 §2.6 :

| Champ | Type | Requis | Validation |
|-------|------|--------|------------|
| Prénom | text | oui | min 2 chars |
| Nom | text | oui | min 2 chars |
| Email | email | oui | Format email valide |
| Organisation | text | non | — |
| Cercle d'intérêt | select | oui | Explorateur / Bâtisseur / Architecte |
| Message | textarea | non | max 500 chars |
| Consentement RGPD | checkbox | oui | Doit être coché |

Payload API : `type: 'mecene'`, `statut: 'Nouveau'`, routé vers DB Notion `d0304717371c45768a2ee42779dd7da5`.

### Composants instanciés

```tsx
<Section variant="steel" padding="default" id="formulaire-soutenir">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">

    {/* Contexte — 2/5 */}
    <div className="lg:col-span-2">
      <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
        Je souhaite soutenir ARCHIPEL
      </h2>
      <p className="font-body text-body leading-[1.6] text-linen/80 mb-4">
        {/* P1 */}
      </p>
      <p className="font-body text-body-sm text-tete/70 italic">
        {/* Mention confidentialité */}
      </p>
    </div>

    {/* Formulaire — 3/5 */}
    <div className="lg:col-span-3">
      <Form
        formType="mecene"
        fields={[
          { name: 'prenom', label: 'Prénom', type: 'text', required: true },
          { name: 'nom', label: 'Nom', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'organisation', label: 'Organisation', type: 'text', required: false },
          { name: 'cercle', label: "Cercle d'intérêt", type: 'select', required: true,
            options: ['Explorateur', 'Bâtisseur', 'Architecte'] },
          { name: 'message', label: 'Message', type: 'textarea', required: false,
            maxLength: 500 },
        ]}
        submitLabel="Envoyer ma demande"
        variant="on-dark"
      />
    </div>

  </div>
</Section>
```

### Layout responsive des champs

| Breakpoint | Disposition des champs |
|-----------|----------------------|
| Mobile | 1 colonne, tous les champs empilés |
| Desktop | 2 colonnes pour Prénom/Nom (côte à côte), Email pleine largeur, Organisation pleine largeur, Select pleine largeur, Textarea pleine largeur, Checkbox + bouton pleine largeur |

---

## SECTION 6 — CTA FINAL

**Variante fond :** `slate` (padding `compact`)

Bande avec la golden quote et le CTA pionniers.

| Élément | Texte |
|---------|-------|
| Quote | Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé. |
| CTA | Rejoindre les pionniers |
| Destination | /#pionniers |

---

# ANNEXE — MATRICE RESPONSIVE PAR PAGE

## Page Accueil

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré, picto w-32, titre text-h1, CTA empilé | Idem mobile avec plus de marge | Picto w-48, titre text-hero, CTA centré |
| 2 Constat | Stack : chiffre puis texte | 2 colonnes | 2 colonnes (texte 3/5, chiffre 2/5) |
| 3 Réponse | Stack centré | Centré, max-w-2xl | Centré, max-w-4xl |
| 4 Deux corps | Stack : schéma puis texte+cards | 2 colonnes | 2 colonnes (texte gauche, schéma droite) |
| 5 Preuves | Stack : 1 card/ligne | 2 colonnes | 3 colonnes |
| 6 Triple CTA | Stack : 1 card/ligne | 2 colonnes (3e card pleine largeur) | 3 colonnes |

## Page Mission

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré, text-h1 | Centré, max-w-2xl | Centré, max-w-3xl, text-hero |
| 2 5 Axes | Stack : 5 cards | Stack : 5 cards (max-w-2xl) | Stack : 5 cards (max-w-3xl) |
| 3 Salutogénèse | Stack : visuel puis texte | 2 colonnes | 2 colonnes (texte 50/visuel 50) |
| 4 Deux corps | Stack : schéma puis texte | 2 colonnes | 2 colonnes |
| 5 CTA | Centré | Centré | Centré, pleine largeur |

## Page Soutenir

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| 1 Hero | Centré, text-h1 | Centré, max-w-2xl | Centré, max-w-3xl, text-hero |
| 2 Pourquoi | Stack | 2 colonnes | 2 colonnes (texte 60/illustration 40) |
| 3 Cercles | Stack (Bâtisseur en premier) | 2 colonnes + 1 | 3 colonnes |
| 4 Juridique | Centré | Centré | Centré, max-w-3xl |
| 5 Formulaire | Stack : texte puis formulaire | Stack large | 2 colonnes (contexte 2/5, form 3/5) |
| 6 CTA | Centré | Centré | Centré, pleine largeur |

---

# ANNEXE — ALERTES FAILLES PAR PAGE

| Page | Faille | Risque identifié | Garde-fou |
|------|--------|-----------------|-----------|
| Accueil §2 | F5 | Le constat pourrait être lu comme "le système est nul" | Texte universalisé, pas de critique nommée. "Pas conçu pour" ≠ "défaillant" |
| Accueil §3 | F1 | La Salutogénèse pourrait être comprise comme une méthode thérapeutique | Formulation : "la science de ce qui crée la santé", pas "une médecine alternative" |
| Accueil §4 | F3 | Le lien Foundation/Life pourrait être lu comme commercial | Mention factuelle uniquement. Pas de CTA vers LIFE |
| Mission §2 | F1 | Les 5 axes pourraient laisser croire qu'ARCHIPEL prescrit | Chaque axe décrit l'action de la Foundation, pas du service opérationnel |
| Mission §3 | F1 | La Salutogénèse située pourrait franchir la ligne | Philosophie et cadre, pas protocole thérapeutique |
| Soutenir §3 | F2 | Les cercles promettent un "accès pilote" | Formuler : "accès anticipé au programme quand il sera disponible", pas de promesse de date |
| Soutenir §4 | Juridique | Déduction fiscale avant validation | Aucune mention sans validation avocat |

---

# ANNEXE — CONTENU EN ATTENTE DE LIVRAISON

| Contenu | Dépendance | Bloquant pour |
|---------|-----------|---------------|
| Photos Cyril | Shooting (date TBD) | Hero Accueil (picto OK sans photo), Gouvernance |
| Validation ASD contenus scientifiques | Anne-Sophie Darrigade | Section 3 Mission (Salutogénèse), 5 axes |
| Validation avocat page Soutenir | Avocat mandaté 15/03/2026 | Section 4 Soutenir (mention fiscale) |
| Images OG (og/accueil.jpg, og/mission.jpg, og/soutenir.jpg) | Design (DA v3.1) | SEO Open Graph |
| Schéma deux corps (SVG) | Design | Accueil §4, Mission §4 |
| Schéma TÊTE•CŒUR•CORPS + MILIEU (SVG) | Design | Accueil §3, Mission §3 |
| Icônes Cercles : IconExplorateur, IconBatisseur, IconArchitecte | Design (à créer, absentes d'ArchipelIcons.tsx) | Soutenir §3 |

---

*Document produit le 30 mars 2026 — SPECS PAGES PRIORITAIRES Niveau 2 SDD*
*Usage : contrat page-par-page pour la génération du code*
*Dépendance : Spec Système N1 (29/03/2026, corrigée, validée)*
*Statut : À VALIDER par Cyril Jamot (CEO) avant génération de code*
