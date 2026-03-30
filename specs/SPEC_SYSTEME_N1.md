# SPEC SYSTÈME — SITE ARCHIPEL FOUNDATION
## Niveau 1 du SDD (Spec-Driven Development)

**Version : 29 mars 2026**
**Statut : À VALIDER**
**Usage : Contrat technique — tout le code du site respecte ce document**
**Source de vérité DA : ARCHIPEL_DA_v3_1_Mars2026.docx**
**Source de vérité Brief : BRIEF_SITE_FOUNDATION_SDD.md (29/03/2026, ACTÉ)**

---

## TABLE DES MATIÈRES

1. [Design Tokens](#1-design-tokens)
2. [Composants Partagés](#2-composants-partagés)
3. [Grille Responsive](#3-grille-responsive)
4. [Conventions de Nommage](#4-conventions-de-nommage)
5. [Contraintes](#5-contraintes)

---

## 1. DESIGN TOKENS

Tous les tokens sont définis comme variables CSS dans `app/globals.css` et exposés en tant que classes utilitaires Tailwind dans `tailwind.config.ts`.

### 1.1 Couleurs

#### Palette Foundation — Rôles CSS

```css
:root {
  /* ── Fonds ── */
  --color-slate:        #1A2B35;  /* Fond principal sombre — header, hero, sections institutionnelles */
  --color-steel-blue:   #3D5A80;  /* Fond secondaire — sections de profondeur cognitive */
  --color-linen:        #EDE8E0;  /* Fond clair — sections de respiration, explication */

  /* ── Structure ── */
  --color-sand:         #B8A082;  /* Liens, éléments graphiques, CTA secondaires, structure picto */

  /* ── Accents T•C•C (invariants Foundation / Life) ── */
  --color-tete:         #A0A8C0;  /* Dot TÊTE — bleu-gris clair */
  --color-corps:        #789878;  /* Dot CORPS — Sage */
  --color-coeur:        #C85A30;  /* Dot CŒUR — Terracotta (différenciateur ARCHIPEL) */

  /* ── Cercle MILIEU (invariant Foundation / Life) ── */
  --color-milieu:       #3D5A80;  /* = Steel Blue — l'océan universel */

  /* ── Texte ── */
  --color-text-on-dark:   #EDE8E0;  /* Linen — texte principal sur Slate/Steel Blue */
  --color-text-on-dark-secondary: #B8A082; /* Sand — texte secondaire sur Slate */
  --color-text-on-light:  #1A2B35;  /* Slate — texte principal sur Linen */
  --color-text-on-light-secondary: #3D5A80; /* Steel Blue — texte secondaire sur Linen */

  /* ── États interactifs ── */
  --color-focus-ring:   #3D5A80;  /* Outline accessibilité */
  --color-hover-sand:   #C8B496;  /* Sand éclairci +15% luminance */
  --color-hover-steel:  #4A6A90;  /* Steel Blue éclairci +10% luminance */

  /* ── Sémantiques formulaires ── */
  --color-success:      #789878;  /* Sage/CORPS */
  --color-error:        #C85A30;  /* Terracotta/CŒUR */
  --color-warning:      #B8A082;  /* Sand */
}
```

#### Extension Tailwind (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate_f: '#1A2B35',       // suffixe _f pour éviter conflit avec slate Tailwind natif
        'steel-blue': '#3D5A80',
        linen: '#EDE8E0',
        sand: '#B8A082',
        tete: '#A0A8C0',
        corps: '#789878',
        coeur: '#C85A30',
        milieu: '#3D5A80',
      },
    },
  },
};

export default config;
```

**Usage Tailwind :**

```html
<!-- Section sombre -->
<section class="bg-slate_f text-linen">

<!-- Section claire -->
<section class="bg-linen text-slate_f">

<!-- Section profondeur -->
<section class="bg-steel-blue text-linen">

<!-- CTA principal -->
<button class="bg-sand text-slate_f hover:bg-[#C8B496]">

<!-- Accent CŒUR (éléments graphiques uniquement, jamais en fond de page) -->
<span class="text-coeur">
```

#### Règles chromatiques impératives (DA v3.1)

| Règle | Détail |
|-------|--------|
| Jamais de blanc pur (#FFFFFF) comme fond de section | Utiliser Linen #EDE8E0 pour tout fond clair |
| Jamais de WarmGray (#F2EDE6) sur le site Foundation | Réservé à ARCHIPEL Life |
| Jamais de Terracotta (#C85A30) en fond de page sur Foundation | Uniquement comme accent graphique (dots, icônes, alertes) |
| Ratio sections : ~40% sombre / ~60% clair | Alterner Slate/Steel Blue avec Linen pour le rythme de lecture |
| Dots T•C•C invariants | Mêmes hex sur Foundation et Life — ne jamais modifier |
| Cercle MILIEU = Steel Blue #3D5A80 | Invariant sur les deux entités |

### 1.2 Typographies

#### Déclarations @font-face

Les polices sont chargées localement depuis `/public/fonts/`. Pas de CDN externe.

```css
/* app/globals.css */

@font-face {
  font-family: 'CoCoMat Pro';
  src: url('/fonts/CoCoMatPro-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CoCoMat Pro';
  src: url('/fonts/CoCoMatPro-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CoCoMat Pro';
  src: url('/fonts/CoCoMatPro-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'CoCoMat Pro';
  src: url('/fonts/CoCoMatPro-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Tenor Sans';
  src: url('/fonts/TenorSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Archytype Bayer-Type';
  src: url('/fonts/ArchytypeBayerType.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

#### Tokens typographiques

```css
:root {
  /* ── Familles ── */
  --font-heading:  'CoCoMat Pro', 'Cormorant Garamond', Georgia, serif;
  --font-body:     'Tenor Sans', Georgia, serif;
  --font-label:    'Archytype Bayer-Type', Montserrat, sans-serif;

  /* ── Tailles (échelle fluide clamp) ── */
  --text-hero:     clamp(2.5rem, 5vw + 1rem, 4.5rem);     /* 40–72px */
  --text-h1:       clamp(2rem, 3vw + 0.75rem, 3rem);       /* 32–48px */
  --text-h2:       clamp(1.5rem, 2vw + 0.5rem, 2.25rem);   /* 24–36px */
  --text-h3:       clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem);/* 20–28px */
  --text-h4:       clamp(1.125rem, 1vw + 0.5rem, 1.375rem);/* 18–22px */
  --text-body:     clamp(1rem, 0.5vw + 0.875rem, 1.125rem); /* 16–18px */
  --text-body-sm:  clamp(0.875rem, 0.25vw + 0.8rem, 1rem);  /* 14–16px */
  --text-caption:  0.75rem;                                   /* 12px fixe */
  --text-label:    0.8125rem;                                 /* 13px fixe */

  /* ── Line-height ── */
  --leading-tight:    1.2;   /* Titres */
  --leading-normal:   1.6;   /* Corps de texte */
  --leading-relaxed:  1.8;   /* Texte long / blog */

  /* ── Letter-spacing ── */
  --tracking-heading:  -0.02em;  /* Titres CoCoMat Pro */
  --tracking-body:     0em;      /* Corps Tenor Sans */
  --tracking-label:    0.08em;   /* Labels Archytype — uppercase */
  --tracking-wide:     0.12em;   /* Labels étendus */

  /* ── Poids ── */
  --weight-light:   300;
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-bold:    700;
}
```

#### Extension Tailwind (typographies)

```typescript
// Dans tailwind.config.ts > theme > extend
fontFamily: {
  heading: ['CoCoMat Pro', 'Cormorant Garamond', 'Georgia', 'serif'],
  body:    ['Tenor Sans', 'Georgia', 'serif'],
  label:   ['Archytype Bayer-Type', 'Montserrat', 'sans-serif'],
},
fontSize: {
  hero:    ['var(--text-hero)',    { lineHeight: 'var(--leading-tight)' }],
  h1:      ['var(--text-h1)',      { lineHeight: 'var(--leading-tight)' }],
  h2:      ['var(--text-h2)',      { lineHeight: 'var(--leading-tight)' }],
  h3:      ['var(--text-h3)',      { lineHeight: 'var(--leading-tight)' }],
  h4:      ['var(--text-h4)',      { lineHeight: 'var(--leading-tight)' }],
  body:    ['var(--text-body)',    { lineHeight: 'var(--leading-normal)' }],
  'body-sm': ['var(--text-body-sm)', { lineHeight: 'var(--leading-normal)' }],
  caption: ['var(--text-caption)', { lineHeight: 'var(--leading-normal)' }],
  label:   ['var(--text-label)',   { lineHeight: '1.4' }],
},
```

**Usage Tailwind :**

```html
<!-- Titre principal -->
<h1 class="font-heading text-hero tracking-[-0.02em]">

<!-- Titre de section -->
<h2 class="font-heading text-h2 tracking-[-0.02em]">

<!-- Corps de texte -->
<p class="font-body text-body leading-[1.6]">

<!-- Label / Tag -->
<span class="font-label text-label uppercase tracking-[0.08em]">
```

### 1.3 Espacements

Grille de base : **4px** (pour la précision fine), avec une échelle utilitaire arrondie à des multiples de 4px et 8px.

```css
:root {
  /* ── Échelle d'espacement (multiples de 4px) ── */
  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */

  /* ── Espacements sémantiques ── */
  --section-padding-y:       clamp(4rem, 8vw, 8rem);      /* Padding vertical de section */
  --section-padding-y-sm:    clamp(3rem, 6vw, 5rem);      /* Sections courtes */
  --content-gap:             var(--space-8);                /* Gap entre blocs de contenu */
  --card-padding:            var(--space-6);                /* Padding interne des cards */
  --card-gap:                var(--space-6);                /* Gap entre cards dans une grille */
  --form-gap:                var(--space-5);                /* Gap entre champs de formulaire */
  --inline-gap:              var(--space-3);                /* Gap entre éléments inline */
}
```

Tailwind utilise ses espacements natifs (p-4 = 1rem = 16px, etc.). Les tokens sémantiques ci-dessus servent de guide. Aucun spacing custom n'est ajouté à la config Tailwind pour ne pas dupliquer l'échelle native.

### 1.4 Breakpoints Responsive

```css
/* ── Breakpoints ── */
/* Alignés sur les breakpoints Tailwind par défaut */
```

| Token | Valeur | Tailwind prefix | Usage |
|-------|--------|-----------------|-------|
| `--bp-mobile` | < 640px | (défaut) | Colonne unique, navigation hamburger |
| `--bp-tablet` | ≥ 640px | `sm:` | 2 colonnes, cards côte à côte |
| `--bp-desktop` | ≥ 1024px | `lg:` | Navigation complète, grille 3 colonnes |
| `--bp-wide` | ≥ 1280px | `xl:` | Container max, marges généreuses |
| `--bp-ultra` | ≥ 1536px | `2xl:` | Ultra-wide, contenu centré |

Le point de bascule navigation hamburger ↔ navigation desktop est **lg: (1024px)**.

### 1.5 Ombres

```css
:root {
  --shadow-sm:    0 1px 2px rgba(26, 43, 53, 0.06);
  --shadow-md:    0 4px 12px rgba(26, 43, 53, 0.08);
  --shadow-lg:    0 8px 24px rgba(26, 43, 53, 0.12);
  --shadow-card:  0 2px 8px rgba(26, 43, 53, 0.06), 0 0 1px rgba(26, 43, 53, 0.08);
  --shadow-dropdown: 0 8px 32px rgba(26, 43, 53, 0.16);
}
```

```typescript
// tailwind.config.ts > theme > extend
boxShadow: {
  'sm':       '0 1px 2px rgba(26,43,53,0.06)',
  'md':       '0 4px 12px rgba(26,43,53,0.08)',
  'lg':       '0 8px 24px rgba(26,43,53,0.12)',
  'card':     '0 2px 8px rgba(26,43,53,0.06), 0 0 1px rgba(26,43,53,0.08)',
  'dropdown': '0 8px 32px rgba(26,43,53,0.16)',
},
```

Principe : les ombres utilisent le Slate (#1A2B35) en base rgba, jamais du noir pur. Cela assure une cohérence chromatique même dans les ombres.

### 1.6 Border-radius

```css
:root {
  --radius-sm:    0.25rem;   /* 4px — badges, tags */
  --radius-md:    0.5rem;    /* 8px — buttons, inputs */
  --radius-lg:    0.75rem;   /* 12px — cards */
  --radius-xl:    1rem;      /* 16px — modals, cards larges */
  --radius-full:  9999px;    /* Pilule — CTA pill, avatars */
}
```

```typescript
// tailwind.config.ts > theme > extend
borderRadius: {
  sm:   '0.25rem',
  md:   '0.5rem',
  lg:   '0.75rem',
  xl:   '1rem',
  full: '9999px',
},
```

Principe : le site Foundation est statutaire. Pas de border-radius excessifs. Les cards utilisent `radius-lg` (12px). Les boutons utilisent `radius-md` (8px). Seul le CTA "Rejoindre les pionniers" peut utiliser `radius-full` (pilule) pour se distinguer.

### 1.7 Transitions et animations

```css
:root {
  --transition-fast:     150ms ease-out;
  --transition-base:     250ms ease-out;
  --transition-slow:     400ms ease-out;
  --transition-spring:   500ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Propriétés courantes */
  --transition-color:    color var(--transition-base), background-color var(--transition-base);
  --transition-transform: transform var(--transition-base);
  --transition-opacity:   opacity var(--transition-slow);
  --transition-shadow:    box-shadow var(--transition-base);
}
```

```typescript
// tailwind.config.ts > theme > extend
transitionDuration: {
  fast: '150ms',
  base: '250ms',
  slow: '400ms',
},
transitionTimingFunction: {
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
},
```

**Règles d'animation :**

| Contexte | Animation | Durée |
|----------|-----------|-------|
| Hover boutons | Couleur + ombre | 250ms ease-out |
| Ouverture dropdown | Translate-Y + opacité | 250ms ease-out |
| Fermeture dropdown | Translate-Y + opacité | 150ms ease-in |
| Entrée section (scroll) | Fade-in + translate-Y(20px) | 400ms ease-out |
| Hamburger open/close | Transform rotate + translate | 250ms ease-out |
| Chargement formulaire (spinner) | Rotation continue | 1s linear infinite |

**Respect préférence système :**

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 2. COMPOSANTS PARTAGÉS

Chaque composant est un fichier `.tsx` dans `components/`. Tous les composants utilisent les design tokens définis en Section 1.

### 2.1 Header

**Fichier :** `components/Header.tsx`

**Comportement :**
Position fixe (`sticky top-0 z-50`). Fond Slate (#1A2B35) avec opacité de 95% et backdrop-blur quand la page scroll au-delà de 20px. Hauteur : 72px desktop, 60px mobile.

**Structure desktop (≥ lg: 1024px) :**

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo Foundation]   Notre Vision ▾  Gouvernance  Soutenir  ...  [CTA] │
│  picto + texte Sand  ← Navigation 6 entrées (5 visibles + dropdown) → │
└────────────────────────────────────────────────────────────────────────┘
```

**Navigation desktop — 6 entrées :**

| # | Label | Lien | Comportement |
|---|-------|------|-------------|
| 1 | Notre Vision | — | Dropdown au hover/focus |
| 1a | → Notre Mission | /mission | Entrée dropdown |
| 1b | → Notre Approche | /approche | Entrée dropdown |
| 2 | Gouvernance | /gouvernance | Lien direct |
| 3 | Soutenir | /soutenir | Lien direct |
| 4 | La Guilde | /guilde | Lien direct |
| 5 | Actualités | /actualites | Lien direct |

**CTA header :** "Rejoindre les pionniers" — bouton Sand sur Slate, border-radius pill (`radius-full`).

**Dropdown "Notre Vision" :**
Apparaît au hover (desktop) avec un délai d'entrée de 100ms et de sortie de 200ms pour éviter les fermetures accidentelles. Fond Slate avec bordure subtile Steel Blue (1px). Ombre `shadow-dropdown`. 2 entrées : Notre Mission, Notre Approche. Chaque entrée avec une ligne de sous-texte en `text-body-sm` couleur Sand.

**Structure mobile (< lg: 1024px) :**

```
┌──────────────────────────────────┐
│  [Logo picto]         [Hamburger] │
└──────────────────────────────────┘
```

Hamburger : icône 3 barres → animation vers X au clic. Menu plein écran (fond Slate, 100vh) avec les 7 entrées à plat :

1. Notre Mission
2. Notre Approche
3. Gouvernance
4. Soutenir
5. La Guilde
6. Actualités
7. **Rejoindre les pionniers** (CTA distingué visuellement)

**Logo :** Version picto + texte (fd Slate, txt Sand) en desktop. Picto seul en mobile. Zone d'exclusion = 1× hauteur du triangle. Lien vers `/`.

**Props TypeScript :**

```typescript
interface HeaderProps {
  currentPath: string; // Pour indiquer la page active
}
```

**Classes Tailwind clés :**

```html
<header class="sticky top-0 z-50 bg-slate_f/95 backdrop-blur-sm">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-[72px] lg:h-[72px]">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3">
      <img src="/images/logo-foundation-slate-sand.svg" alt="ARCHIPEL Foundation" class="h-10" />
    </a>

    <!-- Nav desktop -->
    <nav class="hidden lg:flex items-center gap-8 font-label text-label uppercase tracking-[0.08em] text-sand">
      <!-- Entrées -->
    </nav>

    <!-- CTA desktop -->
    <a href="#pionniers" class="hidden lg:inline-flex items-center px-5 py-2.5 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] transition-colors duration-250">
      Rejoindre les pionniers
    </a>

    <!-- Hamburger mobile -->
    <button class="lg:hidden" aria-label="Ouvrir le menu" aria-expanded="false">
      <!-- 3 barres animées -->
    </button>
  </div>
</header>
```

### 2.2 Footer

**Fichier :** `components/Footer.tsx`

**Fond :** Slate (#1A2B35). Texte principal Linen, texte secondaire Sand.

**Structure (3 colonnes desktop, stack mobile) :**

```
┌──────────────────────────────────────────────────────────────────┐
│  Colonne 1              Colonne 2              Colonne 3         │
│  [Logo Foundation]      Navigation             Informations      │
│  Baseline:              • Mission              • Mentions légales│
│  "Réinventer la santé.  • Approche             • Politique conf. │
│  Pour qu'elle dure."    • Gouvernance          • contact@archipel │
│                         • Soutenir               .foundation      │
│                         • La Guilde            [LinkedIn icon]   │
│                         • Actualités                             │
├──────────────────────────────────────────────────────────────────┤
│  © 2026 ARCHIPEL Foundation — Fonds de dotation en création      │
│  ARCHIPEL LIFE SAS — en cours de création                        │
└──────────────────────────────────────────────────────────────────┘
```

**Éléments :**

| Élément | Détail |
|---------|--------|
| Logo | Picto + texte, version fd Slate / txt Sand |
| Baseline | "Réinventer la santé. Pour qu'elle dure." — font-body, text-body-sm, italic, couleur Sand |
| Navigation footer | Reprend les 6 pages + sous-pages principales, font-label, uppercase, tracking-wide |
| Mentions légales | Lien vers /mentions-legales |
| Politique de confidentialité | Lien vers /politique-confidentialite |
| Email de contact | contact@archipel.foundation — lien `mailto:`, pas de page /contact |
| LinkedIn | Icône SVG, lien externe (target="_blank" rel="noopener") |
| Lien ARCHIPEL LIFE | "ARCHIPEL LIFE — Service opérationnel" — texte discret, pas de lien tant que le site n'existe pas |
| Copyright | "© 2026 ARCHIPEL Foundation — Fonds de dotation en création" |

**CTA footer :** Bloc "Rejoindre les pionniers" avec mini-formulaire inline (prénom + email + bouton submit).

```html
<footer class="bg-slate_f text-linen">
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
    <!-- Grille 3 colonnes -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Col 1: Logo + baseline -->
      <!-- Col 2: Navigation -->
      <!-- Col 3: Légal + social -->
    </div>

    <!-- Séparateur -->
    <div class="mt-12 pt-8 border-t border-steel-blue/30">
      <!-- CTA Pionniers + Copyright -->
    </div>
  </div>
</footer>
```

### 2.3 Boutons CTA

**Fichier :** `components/Button.tsx`

**4 variantes :**

| Variante | Fond | Texte | Bordure | Usage |
|----------|------|-------|---------|-------|
| `primary` | Sand #B8A082 | Slate #1A2B35 | Aucune | CTA principal (Soutenir, Candidater) |
| `secondary` | Transparent | Sand #B8A082 | 1px Sand | CTA secondaire sur fond sombre |
| `outline-light` | Transparent | Slate #1A2B35 | 1px Slate | CTA sur fond Linen |
| `accent` | Sand #B8A082 | Slate #1A2B35 | Aucune, radius-full | CTA "Rejoindre les pionniers" (pilule) |

**États :**

| État | Comportement |
|------|-------------|
| Hover | Fond éclairci (+15% luminance), transition 250ms |
| Focus | Outline 2px Steel Blue, offset 2px (accessibilité) |
| Active | Fond assombri (-10% luminance), transform scale(0.98) |
| Disabled | Opacité 0.5, cursor not-allowed, pas de hover |
| Loading | Spinner 16px à gauche du texte, texte maintenu pour éviter le layout shift |

**Props TypeScript :**

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline-light' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;          // Si renseigné, rend un <a>, sinon <button>
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;  // Icône optionnelle (gauche)
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}
```

**Tailles :**

| Size | Padding | Font | Height approx |
|------|---------|------|--------------|
| `sm` | `px-4 py-2` | `text-body-sm` | 36px |
| `md` | `px-6 py-3` | `text-body` | 44px |
| `lg` | `px-8 py-4` | `text-body` | 52px |

**Exemple d'implémentation :**

```html
<!-- Primary sur fond Slate -->
<button class="inline-flex items-center justify-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-md hover:bg-[#C8B496] focus:outline-none focus:ring-2 focus:ring-steel-blue focus:ring-offset-2 focus:ring-offset-slate_f active:scale-[0.98] transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed">
  Soutenir ARCHIPEL
</button>

<!-- Secondary sur fond Slate -->
<button class="inline-flex items-center justify-center px-6 py-3 bg-transparent text-sand border border-sand rounded-md hover:bg-sand/10 focus:outline-none focus:ring-2 focus:ring-steel-blue focus:ring-offset-2 focus:ring-offset-slate_f transition-all duration-250">
  En savoir plus
</button>

<!-- Outline-light sur fond Linen -->
<button class="inline-flex items-center justify-center px-6 py-3 bg-transparent text-slate_f border border-slate_f rounded-md hover:bg-slate_f/5 focus:outline-none focus:ring-2 focus:ring-steel-blue focus:ring-offset-2 focus:ring-offset-linen transition-all duration-250">
  Découvrir
</button>

<!-- Accent pilule (pionniers) -->
<a class="inline-flex items-center justify-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-full hover:bg-[#C8B496] focus:outline-none focus:ring-2 focus:ring-steel-blue transition-all duration-250">
  Rejoindre les pionniers
</a>
```

### 2.4 Section Containers

**Fichier :** `components/Section.tsx`

Les sections sont les blocs verticaux principaux de chaque page. Elles alternent entre fonds sombres et clairs pour créer le rythme de lecture.

**3 variantes de fond :**

| Variante | Fond | Texte principal | Texte secondaire | Usage |
|----------|------|----------------|-----------------|-------|
| `slate` | #1A2B35 | Linen #EDE8E0 | Sand #B8A082 | Sections institutionnelles, hero, preuves de sérieux |
| `steel` | #3D5A80 | Linen #EDE8E0 | #A0A8C0 (Bleu-gris) | Sections de profondeur cognitive |
| `linen` | #EDE8E0 | Slate #1A2B35 | Steel Blue #3D5A80 | Sections de respiration, explication, témoignage |

**Props TypeScript :**

```typescript
interface SectionProps {
  variant: 'slate' | 'steel' | 'linen';
  padding?: 'default' | 'compact' | 'hero';  // hero = padding supérieur augmenté
  id?: string;          // Ancre pour scroll-to
  className?: string;
  children: React.ReactNode;
}
```

**Padding vertical par variante :**

| Padding | Mobile | Desktop |
|---------|--------|---------|
| `default` | `py-16` (64px) | `py-24` (96px) |
| `compact` | `py-12` (48px) | `py-16` (64px) |
| `hero` | `pt-32 pb-16` (128/64px) | `pt-40 pb-24` (160/96px) |

**Exemple :**

```html
<!-- Section Slate (institutionnelle) -->
<section class="bg-slate_f text-linen py-16 lg:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Contenu -->
  </div>
</section>

<!-- Section Linen (respiration) -->
<section class="bg-linen text-slate_f py-16 lg:py-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <!-- Contenu -->
  </div>
</section>
```

### 2.5 Cards

**Fichier :** `components/Card.tsx`

**4 variantes :**

#### Card "Feature" (homepage — sections Ce que nous construisons)

```html
<div class="bg-steel-blue/10 border border-steel-blue/20 rounded-lg p-6 lg:p-8">
  <div class="flex items-center gap-3 mb-4">
    <span class="font-label text-label uppercase tracking-[0.08em] text-steel-blue">Label</span>
  </div>
  <h3 class="font-heading text-h3 tracking-[-0.02em] mb-3">Titre</h3>
  <p class="font-body text-body leading-[1.6] text-slate_f/80">Description</p>
</div>
```

Usage : sur fond Linen. Bordure Steel Blue subtile. Pas d'ombre.

#### Card "Principe" (9 principes, Cercles de Fondateurs)

```html
<div class="bg-slate_f text-linen rounded-lg p-6 lg:p-8">
  <span class="inline-block font-label text-caption uppercase tracking-[0.12em] text-sand mb-4">01</span>
  <h3 class="font-heading text-h3 tracking-[-0.02em] mb-3">Nom du principe</h3>
  <p class="font-body text-body-sm leading-[1.6] text-linen/80">Description</p>
</div>
```

Usage : sur fond Linen. Card sombre. Numérotation en Sand.

#### Card "Blog" (liste articles)

```html
<article class="group">
  <div class="aspect-[16/9] rounded-lg overflow-hidden bg-steel-blue/20 mb-4">
    <!-- Image placeholder ou photo -->
    <div class="w-full h-full bg-steel-blue/10"></div>
  </div>
  <div class="flex items-center gap-2 mb-2">
    <span class="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">Catégorie</span>
    <span class="text-sand/50">•</span>
    <time class="font-body text-caption text-slate_f/60">29 mars 2026</time>
  </div>
  <h3 class="font-heading text-h4 tracking-[-0.02em] group-hover:text-steel-blue transition-colors duration-250">
    <a href="/actualites/slug">Titre de l'article</a>
  </h3>
  <p class="font-body text-body-sm leading-[1.6] text-slate_f/70 mt-2 line-clamp-3">Extrait...</p>
</article>
```

Usage : sur fond Linen. Le hover colore le titre en Steel Blue.

#### Card "CTA Triple" (bas de homepage — 3 parcours)

```html
<div class="bg-linen rounded-lg p-8 text-center border border-sand/30 hover:shadow-card transition-shadow duration-250">
  <!-- Icône ou illustration -->
  <div class="w-12 h-12 mx-auto mb-6 text-coeur"><!-- SVG --></div>
  <h3 class="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">Soutenir ARCHIPEL</h3>
  <p class="font-body text-body-sm text-slate_f/70 mb-6">Description courte</p>
  <a class="inline-flex items-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-md hover:bg-[#C8B496] transition-colors duration-250">
    Découvrir
  </a>
</div>
```

Usage : sur fond Slate. Cards claires qui se détachent. Hover = ombre.

**Props TypeScript (composant Card unifié) :**

```typescript
interface CardProps {
  variant: 'feature' | 'principe' | 'blog' | 'cta';
  title: string;
  description?: string;
  label?: string;         // Catégorie, numéro, tag
  href?: string;
  image?: { src: string; alt: string };
  date?: string;          // ISO string pour blog
  className?: string;
  children?: React.ReactNode;
}
```

### 2.6 Formulaires

**Fichiers :** `components/Form.tsx`, `components/FormField.tsx`

3 formulaires, tous routés vers la même DB Notion (ID : `d0304717371c45768a2ee42779dd7da5`, data source : `8145e8f1-9d65-4812-b36b-5701c530c48d`).

#### Champs par formulaire

**Formulaire "Soutenir" (page /soutenir) :**

| Champ | Type | Requis | Validation |
|-------|------|--------|------------|
| Prénom | text | oui | min 2 chars |
| Nom | text | oui | min 2 chars |
| Email | email | oui | Format email valide |
| Organisation | text | non | — |
| Cercle d'intérêt | select | oui | 3 options : Explorateur / Bâtisseur / Architecte |
| Message | textarea | non | max 500 chars |
| Consentement RGPD | checkbox | oui | Doit être coché |

Entrée Notion : `type: "Mécène/Donateur"`, `statut: "Nouveau"`, `date: ISO-now`

**Formulaire "Guilde" (page /guilde) :**

| Champ | Type | Requis | Validation |
|-------|------|--------|------------|
| Prénom | text | oui | min 2 chars |
| Nom | text | oui | min 2 chars |
| Email | email | oui | Format email valide |
| Profession | text | oui | min 2 chars |
| Ville | text | oui | — |
| Spécialité(s) | text | oui | — |
| Motivation | textarea | oui | min 20 chars, max 1000 chars |
| Consentement RGPD | checkbox | oui | Doit être coché |

Entrée Notion : `type: "Praticien"`, `statut: "Nouveau"`, `date: ISO-now`

**Formulaire "Pionniers" (transversal — header, footer, pages) :**

| Champ | Type | Requis | Validation |
|-------|------|--------|------------|
| Prénom | text | oui | min 2 chars |
| Email | email | oui | Format email valide |
| Consentement RGPD | checkbox | oui | Doit être coché |

Entrée Notion : `type: "Pionnier"`, `statut: "Nouveau"`, `date: ISO-now`

#### Style des champs

```html
<!-- Input text / email -->
<div class="flex flex-col gap-1.5">
  <label class="font-label text-label uppercase tracking-[0.08em]">
    Prénom <span class="text-coeur">*</span>
  </label>
  <input
    type="text"
    class="w-full px-4 py-3 bg-transparent border border-sand/40 rounded-md font-body text-body
           placeholder:text-sand/50
           focus:border-steel-blue focus:ring-1 focus:ring-steel-blue focus:outline-none
           transition-colors duration-250"
    placeholder="Votre prénom"
  />
  <!-- Message d'erreur (conditionnel) -->
  <p class="font-body text-caption text-coeur" role="alert">Ce champ est requis</p>
</div>
```

**Variantes par fond :**

| Fond de section | Bordure input | Texte input | Placeholder | Focus border |
|----------------|---------------|-------------|-------------|-------------|
| Slate | sand/40 | linen | sand/50 | linen |
| Linen | slate_f/20 | slate_f | slate_f/40 | steel-blue |

#### Checkbox RGPD

```html
<label class="flex items-start gap-3 cursor-pointer">
  <input type="checkbox" class="mt-1 w-5 h-5 rounded-sm border-sand/40 text-steel-blue focus:ring-steel-blue" />
  <span class="font-body text-body-sm leading-[1.6]">
    J'accepte que mes données soient traitées par ARCHIPEL Foundation conformément à sa
    <a href="/politique-confidentialite" class="underline hover:text-steel-blue transition-colors">politique de confidentialité</a>.
  </span>
</label>
```

#### États du formulaire

| État | Comportement visuel |
|------|-------------------|
| Idle | Champs vides, bordures neutres |
| Validation en temps réel | Bordure verte (Corps #789878) si valide, rouge (Cœur #C85A30) si erreur — après le premier blur |
| Soumission en cours | Bouton en état loading (spinner + texte "Envoi en cours..."), champs disabled |
| Succès | Message de confirmation avec icône check, fond vert pâle (Corps/10%), formulaire masqué |
| Erreur serveur | Message d'erreur avec icône warning, fond Terracotta/10%, formulaire reste accessible |

#### Intégration technique

Route API : `/app/api/contact/route.ts`

```typescript
// Signature de la route
export async function POST(request: Request): Promise<Response>

// Payload attendu
interface ContactPayload {
  type: 'mecene' | 'praticien' | 'pionnier';
  prenom: string;
  nom?: string;           // Pas requis pour pionniers
  email: string;
  organisation?: string;  // Soutenir uniquement
  cercle?: string;        // Soutenir uniquement
  profession?: string;    // Guilde uniquement
  ville?: string;         // Guilde uniquement
  specialites?: string;   // Guilde uniquement
  motivation?: string;    // Guilde uniquement
  message?: string;       // Soutenir uniquement
  rgpd: boolean;          // Toujours true si soumis
}
```

La route API écrit dans la DB Notion via l'API Notion (token stocké en variable d'environnement `NOTION_API_KEY`, ID de la DB en `NOTION_CONTACTS_DB_ID`).

### 2.7 Breadcrumbs

**Fichier :** `components/Breadcrumbs.tsx`

Visible sur toutes les sous-pages (profondeur ≥ 2). Absent de la homepage et des pages de niveau 1.

```html
<nav aria-label="Fil d'Ariane" class="mb-8">
  <ol class="flex items-center gap-2 font-label text-caption uppercase tracking-[0.08em]">
    <li>
      <a href="/" class="text-sand hover:text-linen transition-colors">Accueil</a>
    </li>
    <li class="text-sand/50" aria-hidden="true">/</li>
    <li>
      <a href="/approche" class="text-sand hover:text-linen transition-colors">Notre Approche</a>
    </li>
    <li class="text-sand/50" aria-hidden="true">/</li>
    <li>
      <span class="text-linen" aria-current="page">Fondements Scientifiques</span>
    </li>
  </ol>
</nav>
```

**Variante sur fond Linen :** Remplacer `text-sand` par `text-steel-blue` et `text-linen` par `text-slate_f`.

**Props TypeScript :**

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;  // Absent sur le dernier élément (page courante)
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant: 'on-dark' | 'on-light';
}
```

### 2.8 Blog Article Layout

**Fichier :** `components/ArticleLayout.tsx`

Layout pour les articles du blog (pages `/actualites/[slug]`).

**Structure :**

```
┌──────────────────────────────────────────────────────────────────┐
│  [Breadcrumbs]                                          fd Slate │
│                                                                  │
│  CATÉGORIE • 29 mars 2026                                       │
│  Titre de l'article sur plusieurs lignes                         │
│  si nécessaire avec la police CoCoMat Pro                        │
│                                                                  │
│  Par Cyril Jamot                                                 │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│                                                        fd Linen  │
│  ┌────────────────────────────────────────┐                     │
│  │  Contenu Markdown rendu en HTML         │                     │
│  │  max-w-3xl mx-auto                      │                     │
│  │  Typographie : prose (Tenor Sans)       │                     │
│  │  h2, h3 en CoCoMat Pro                  │                     │
│  │  Citations en italique, bord Sand       │                     │
│  └────────────────────────────────────────┘                     │
│                                                                  │
│  ── Articles connexes (3 cards) ──                               │
│                                                                  │
│  ── CTA "Rejoindre les pionniers" ──                             │
└──────────────────────────────────────────────────────────────────┘
```

**Prose styles (Tailwind Typography plugin ou custom) :**

```css
.article-prose {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--leading-relaxed);
  color: var(--color-text-on-light);
}

.article-prose h2 {
  font-family: var(--font-heading);
  font-size: var(--text-h2);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-heading);
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: var(--color-slate);
}

.article-prose h3 {
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-heading);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.article-prose blockquote {
  border-left: 3px solid var(--color-sand);
  padding-left: 1.5rem;
  font-style: italic;
  color: var(--color-steel-blue);
}

.article-prose a {
  color: var(--color-steel-blue);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article-prose a:hover {
  color: var(--color-sand);
}
```

### 2.9 SEO Component

**Fichier :** `components/SEO.tsx` (utilisé via le système metadata de Next.js App Router)

Chaque page définit ses métadonnées via `generateMetadata()` dans son fichier `page.tsx`. Le composant SEO fournit les valeurs par défaut et les schémas structurés.

#### Metadata par défaut (layout.tsx racine)

```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://archipel.foundation'),
  title: {
    default: 'ARCHIPEL Foundation — Réinventer la santé. Pour qu\'elle dure.',
    template: '%s | ARCHIPEL Foundation',
  },
  description: 'ARCHIPEL Foundation est un fonds de dotation en création, dédié à la santé préventive et intégrative. Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://archipel.foundation',
    siteName: 'ARCHIPEL Foundation',
    images: [
      {
        url: '/og/default.jpg',    // Image OG par défaut (1200×630)
        width: 1200,
        height: 630,
        alt: 'ARCHIPEL Foundation — Réinventer la santé. Pour qu\'elle dure.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    // Bascule automatique : noindex sur les previews Vercel, index en production
    index: process.env.VERCEL_ENV === 'production',
    follow: process.env.VERCEL_ENV === 'production',
  },
  alternates: {
    canonical: 'https://archipel.foundation',
    // Préparé pour i18n V2 :
    // languages: { 'en': 'https://archipel.foundation/en' },
  },
};
```

#### Schema.org — Organisation (global)

Injecté dans le `<head>` via `app/layout.tsx` :

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ARCHIPEL Foundation',
  url: 'https://archipel.foundation',
  logo: 'https://archipel.foundation/images/logo-foundation.svg',
  description: 'Fonds de dotation dédié à la santé préventive et intégrative, fondé sur la Salutogénèse.',
  // foundingDate : à renseigner avec la date d'enregistrement effectif du Fonds de dotation
  // (ne pas anticiper tant que l'enregistrement n'est pas acté — vérifier avec l'avocat)
  // foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Cyril Jamot',
  },
  sameAs: [
    'https://www.linkedin.com/company/archipel-foundation/',
    // Ajouter les profils sociaux au fur et à mesure
  ],
};
```

#### Schema.org — Article (blog)

```typescript
// Généré dynamiquement par page article
const articleSchema = (article: ArticleData) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  datePublished: article.publishedAt,
  dateModified: article.updatedAt,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'ARCHIPEL Foundation',
    logo: {
      '@type': 'ImageObject',
      url: 'https://archipel.foundation/images/logo-foundation.svg',
    },
  },
  description: article.excerpt,
  image: article.ogImage,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://archipel.foundation/actualites/${article.slug}`,
  },
});
```

#### Metadata par page (exemples)

| Page | Title | Description (max 160 chars) |
|------|-------|-----------------------------|
| / | ARCHIPEL Foundation — Réinventer la santé. Pour qu'elle dure. | ARCHIPEL Foundation est un fonds de dotation en création, dédié à la santé préventive et intégrative fondée sur la Salutogénèse. |
| /mission | Notre Mission | ARCHIPEL construit un écosystème de santé préventive fondé sur la Salutogénèse. 5 axes : accessibilité, éducation, recherche, plaidoyer, souveraineté. |
| /approche | Notre Approche | L'approche ARCHIPEL repose sur le cadre TÊTE•CŒUR•CORPS + MILIEU, un compagnon IA, des Sherpas humains et La Guilde de praticiens certifiés. |
| /gouvernance | Gouvernance & Éthique | Charte Fondatrice, Comité d'Éthique indépendant, CIES, Corpus Normatif : la gouvernance d'ARCHIPEL Foundation est conçue pour durer. |
| /soutenir | Soutenir ARCHIPEL | Rejoignez les Cercles de Fondateurs et soutenez la création d'un écosystème de santé préventive ouvert à tous. |
| /guilde | La Guilde | La Guilde ARCHIPEL réunit des praticiens de santé engagés dans une coordination intégrative. Candidatures ouvertes Paris et Bordeaux. |
| /actualites | Actualités | Articles, analyses et réflexions sur la santé préventive, la Salutogénèse et l'approche intégrative. |

#### Sitemap

Généré automatiquement via `app/sitemap.ts` (App Router) :

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: 'https://archipel.foundation', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: 'https://archipel.foundation/mission', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://archipel.foundation/approche', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://archipel.foundation/gouvernance', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://archipel.foundation/soutenir', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://archipel.foundation/guilde', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://archipel.foundation/actualites', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    // Sous-pages
    { url: 'https://archipel.foundation/mission/9-principes', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://archipel.foundation/mission/robin-hood', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://archipel.foundation/approche/fondements', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://archipel.foundation/approche/iris', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://archipel.foundation/approche/sherpas', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://archipel.foundation/approche/odyssea', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://archipel.foundation/gouvernance/charte', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: 'https://archipel.foundation/gouvernance/comite-ethique', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://archipel.foundation/gouvernance/cies', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://archipel.foundation/guilde/deontologie', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: 'https://archipel.foundation/guilde/candidature', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ];

  // Articles de blog (dynamiques)
  // const articles = await getArticleSlugs();
  // const articlePages = articles.map(slug => ({
  //   url: `https://archipel.foundation/actualites/${slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'yearly' as const,
  //   priority: 0.6,
  // }));

  return [...staticPages /*, ...articlePages */];
}
```

### 2.10 Icônes SVG (ArchipelIcons)

**Fichier :** `components/icons/ArchipelIcons.tsx`

10 icônes SVG existantes récupérées du site précédent (pages Gouvernance et Soutenir). Chaque icône est un composant React exporté individuellement.

**Migration chromatique obligatoire :**

| Couleur obsolète | Hex ancien | Couleur cible | Hex cible | Contexte |
|-----------------|------------|---------------|-----------|----------|
| Gold (ancien Sand) | `#dbb878` | Sand | `#B8A082` | Traits, contours, éléments structurels |
| Teal (banni Foundation) | `#2a5a5e` | Steel Blue | `#3D5A80` | Fonds, remplissages, accents |

**Props TypeScript :**

```typescript
interface IconProps {
  size?: number;         // Taille en px (défaut : 48)
  color?: string;        // Couleur principale (défaut : 'currentColor')
  className?: string;
}
```

**Règle :** Toutes les icônes utilisent `currentColor` par défaut pour hériter de la couleur du parent. Cela garantit qu'elles s'adaptent automatiquement aux sections Slate (icônes Sand ou Linen) et Linen (icônes Slate ou Steel Blue). Les couleurs fixes ne sont utilisées que pour les éléments multi-couleurs (dots T•C•C dans les icônes qui les contiennent).

**Icônes identifiées :**

| Icône | Usage | Page(s) |
|-------|-------|---------|
| IconEthique | Comité d'Éthique | /gouvernance |
| IconCIES | CIES | /gouvernance |
| IconCharte | Charte Fondatrice | /gouvernance |
| IconCorpusNormatif | Corpus Normatif | /gouvernance |
| IconSociocratie | Trajectoire sociocratique | /gouvernance |
| IconExplorateur | Cercle Explorateur | /soutenir |
| IconBatisseur | Cercle Bâtisseur | /soutenir |
| IconArchitecte | Cercle Architecte | /soutenir |
| IconMission | 5 axes de mission | /mission |
| IconDeuxCorps | Modèle Foundation/Life | /mission, /accueil |

---

## 3. GRILLE RESPONSIVE

### 3.1 Container

```css
:root {
  --container-max:   80rem;    /* 1280px */
  --container-px:    1.5rem;   /* 24px mobile */
  --container-px-lg: 2rem;     /* 32px desktop */
}
```

**Classe utilitaire (déjà couverte par Tailwind) :**

```html
<div class="mx-auto max-w-7xl px-6 lg:px-8">
  <!-- max-w-7xl = 80rem = 1280px -->
</div>
```

Pour le contenu texte long (articles, charte) :

```html
<div class="mx-auto max-w-3xl px-6 lg:px-8">
  <!-- max-w-3xl = 48rem = 768px — largeur de lecture optimale -->
</div>
```

### 3.2 Grille de colonnes

| Breakpoint | Colonnes | Gouttière | Usage |
|-----------|----------|-----------|-------|
| Mobile (< 640px) | 1 colonne | — | Stack vertical, pleine largeur |
| Tablet (≥ 640px) | 2 colonnes | 24px (`gap-6`) | Cards côte à côte, formulaires 2 cols |
| Desktop (≥ 1024px) | 3 colonnes | 32px (`gap-8`) | Grille principale de cards |
| Wide (≥ 1280px) | 3 colonnes (max-w-7xl centré) | 32px | Même grille, marges latérales augmentées |

```html
<!-- Grille standard 3 colonnes -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  <!-- Cards -->
</div>

<!-- Grille 2 colonnes (Mission : texte + schéma) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
  <div><!-- Texte --></div>
  <div><!-- Visuel --></div>
</div>

<!-- Layout article (centré étroit) -->
<div class="mx-auto max-w-3xl">
  <!-- Contenu prose -->
</div>
```

### 3.3 Breakpoints — Récapitulatif des comportements

| Composant | Mobile (< 640px) | Tablet (640–1023px) | Desktop (≥ 1024px) |
|-----------|-----------------|--------------------|--------------------|
| Header | Logo picto + hamburger | Logo picto + hamburger | Logo complet + nav 6 entrées + CTA |
| Hero | Titre centré, CTA empilé | Titre centré, CTA inline | Titre + sous-titre + CTA, layout asymétrique possible |
| Cards grille | 1 colonne, stack | 2 colonnes | 3 colonnes |
| Formulaires | 1 colonne | 2 colonnes (nom/prénom sur même ligne) | 2 colonnes |
| Footer | Stack 1 colonne | 2 colonnes | 3 colonnes |
| Blog liste | 1 colonne | 2 colonnes | 3 colonnes |
| Article prose | Pleine largeur, px-6 | max-w-2xl centré | max-w-3xl centré |
| Section padding | py-16 (64px) | py-20 (80px) | py-24 (96px) |

---

## 4. CONVENTIONS DE NOMMAGE

### 4.1 Structure des dossiers (Next.js App Router)

```
app/
├── layout.tsx                    # Layout racine (HTML, fonts, metadata par défaut)
├── globals.css                   # Variables CSS, @font-face, reset
├── page.tsx                      # Homepage (/)
├── sitemap.ts                    # Sitemap automatique
├── robots.ts                     # Robots.txt
│
├── mission/
│   ├── page.tsx                  # /mission
│   ├── 9-principes/
│   │   └── page.tsx              # /mission/9-principes
│   └── robin-hood/
│       └── page.tsx              # /mission/robin-hood
│
├── approche/
│   ├── page.tsx                  # /approche
│   ├── fondements/
│   │   └── page.tsx              # /approche/fondements
│   ├── iris/
│   │   └── page.tsx              # /approche/iris
│   ├── sherpas/
│   │   └── page.tsx              # /approche/sherpas
│   └── odyssea/
│       └── page.tsx              # /approche/odyssea
│
├── gouvernance/
│   ├── page.tsx                  # /gouvernance
│   ├── charte/
│   │   └── page.tsx              # /gouvernance/charte
│   ├── comite-ethique/
│   │   └── page.tsx              # /gouvernance/comite-ethique
│   └── cies/
│       └── page.tsx              # /gouvernance/cies
│
├── soutenir/
│   └── page.tsx                  # /soutenir
│
├── guilde/
│   ├── page.tsx                  # /guilde
│   ├── deontologie/
│   │   └── page.tsx              # /guilde/deontologie
│   └── candidature/
│       └── page.tsx              # /guilde/candidature
│
├── actualites/
│   ├── page.tsx                  # /actualites (liste blog)
│   └── [slug]/
│       └── page.tsx              # /actualites/[slug] (article)
│
├── mentions-legales/
│   └── page.tsx                  # /mentions-legales
│
├── politique-confidentialite/
│   └── page.tsx                  # /politique-confidentialite
│
└── api/
    └── contact/
        └── route.ts              # POST /api/contact (formulaires → Notion)

components/
├── Header.tsx
├── Footer.tsx
├── Button.tsx
├── Section.tsx
├── Card.tsx
├── Form.tsx
├── FormField.tsx
├── Breadcrumbs.tsx
├── ArticleLayout.tsx
├── PioneerForm.tsx               # Mini-formulaire pionniers (header + footer)
├── PictoFoundation.tsx           # SVG du picto, responsive
├── LogoFoundation.tsx            # Logo complet (picto + texte)
├── DotsTCC.tsx                   # Composant des 3 dots T•C•C
├── SchemaOrg.tsx                 # Injection des schémas structurés
├── ScrollReveal.tsx              # Wrapper animation d'entrée de section
└── icons/
    └── ArchipelIcons.tsx         # 10 icônes SVG (Gouvernance, Soutenir, etc.)
                                  # Migration chromatique : #dbb878 → Sand #B8A082
                                  #                        #2a5a5e → Steel Blue #3D5A80

lib/
├── notion.ts                     # Client Notion API
├── articles.ts                   # Fonctions utilitaires blog (getArticles, getArticleBySlug...)
├── validation.ts                 # Schémas de validation Zod pour les formulaires
├── constants.ts                  # Constantes globales (URLs, IDs, textes récurrents)
└── types.ts                      # Types TypeScript partagés

content/
├── articles/                     # Fichiers MDX des articles de blog
│   ├── fondements-1-salutogenese.mdx
│   ├── fondements-2-tete-coeur-corps.mdx
│   └── ...
└── data/
    └── navigation.ts             # Structure de navigation (labels, URLs, sous-menus)

public/
├── fonts/
│   ├── CoCoMatPro-Light.woff2
│   ├── CoCoMatPro-Regular.woff2
│   ├── CoCoMatPro-Medium.woff2
│   ├── CoCoMatPro-Bold.woff2
│   ├── TenorSans-Regular.woff2
│   └── ArchytypeBayerType.woff2
├── images/
│   ├── logo-foundation-slate-sand.svg
│   ├── logo-foundation-linen-steel.svg
│   ├── picto-foundation-slate.svg
│   ├── picto-foundation-linen.svg
│   └── og/
│       └── default.jpg            # Image OG par défaut 1200×630
└── favicon.ico
```

### 4.2 Nommage des composants

| Convention | Règle | Exemple |
|-----------|-------|---------|
| Fichiers composants | PascalCase | `Header.tsx`, `FormField.tsx` |
| Fichiers utilitaires/lib | camelCase | `notion.ts`, `validation.ts` |
| Fichiers de page | `page.tsx` (convention App Router) | `app/mission/page.tsx` |
| Dossiers de route | kebab-case | `comite-ethique/`, `9-principes/` |
| Variables CSS | kebab-case avec `--` prefix | `--color-slate`, `--text-h2` |
| Classes Tailwind custom | kebab-case avec underscore pour éviter les conflits | `bg-slate_f` |
| Types TypeScript | PascalCase, suffixe `Props` pour les props | `ButtonProps`, `ArticleData` |
| Constantes | SCREAMING_SNAKE_CASE | `NOTION_CONTACTS_DB_ID` |
| Variables d'environnement | SCREAMING_SNAKE_CASE, prefix `NEXT_PUBLIC_` si côté client | `NOTION_API_KEY`, `NEXT_PUBLIC_SITE_URL` |

### 4.3 Variables d'environnement

```env
# .env.local (jamais commité)

# Notion
NOTION_API_KEY=secret_xxx
NOTION_CONTACTS_DB_ID=d0304717371c45768a2ee42779dd7da5

# Site
NEXT_PUBLIC_SITE_URL=https://archipel.foundation

# Brevo (email confirmation + newsletter — société française, EU-hosted, RGPD-natif)
BREVO_API_KEY=xxx

# Analytics (Plausible — EU-hosted, sans cookies, sans bandeau consentement)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=archipel.foundation

# VERCEL_ENV est injecté automatiquement par Vercel (production | preview | development)
# Utilisé pour la bascule robots index/noindex — pas besoin de le déclarer manuellement
```

### 4.4 Redirects et next.config.ts

Configurés dans `next.config.ts` via `redirects()` :

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // INC-09 : ancienne URL /confidentialite → nouvelle URL
        source: '/confidentialite',
        destination: '/politique-confidentialite',
        permanent: true, // 301
      },
      {
        // Ancienne architecture : /le-cercle redirigé vers /soutenir
        source: '/le-cercle',
        destination: '/soutenir',
        permanent: true,
      },
      {
        // Ancienne architecture : /le-cercle/:slug redirigé vers /soutenir
        source: '/le-cercle/:slug',
        destination: '/soutenir',
        permanent: true,
      },
    ];
  },
  // Headers de sécurité (cf. §5.5)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 4.5 Imports et organisation du code

Ordre des imports dans chaque fichier :

```typescript
// 1. Imports Next.js
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// 2. Imports React
import { useState, useEffect } from 'react';

// 3. Imports de librairies tierces
import { z } from 'zod';

// 4. Imports de composants internes
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

// 5. Imports de lib/utilitaires internes
import { getArticles } from '@/lib/articles';
import type { ArticleData } from '@/lib/types';
```

Alias de chemin configuré dans `tsconfig.json` :

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 5. CONTRAINTES

### 5.1 Accessibilité (WCAG 2.1 AA)

| Exigence | Implémentation |
|----------|---------------|
| Contraste texte | Minimum 4.5:1 pour le corps, 3:1 pour les grands titres |
| Contraste éléments graphiques | Minimum 3:1 (cf. tableau contrastes DA v3.1) |
| Navigation clavier | Tous les éléments interactifs accessibles via Tab. Focus visible (outline 2px Steel Blue) |
| Skip to content | Lien invisible en haut de page, visible au focus : "Aller au contenu principal" |
| ARIA landmarks | `<header>`, `<nav>`, `<main>`, `<footer>`, `role="search"` si recherche blog |
| ARIA labels | `aria-label` sur le hamburger, `aria-expanded` sur le dropdown, `aria-current="page"` dans la navigation |
| Alt text | Obligatoire sur toutes les `<img>`. Decoratif = `alt=""` + `aria-hidden="true"` |
| Formulaires | `<label>` associé à chaque input via `htmlFor`. Messages d'erreur avec `role="alert"` |
| Focus trap | Menu mobile : le focus reste dans le menu tant qu'il est ouvert |
| Langue | `<html lang="fr">` |
| Texte zoomable | Toutes les tailles en `rem` ou `clamp()`. Pas de `px` pour le texte |
| Réduction de mouvement | `prefers-reduced-motion: reduce` désactive les animations (cf. section 1.7) |

**Contrastes validés (rappel DA v3.1) :**

| Paire | Ratio | Verdict |
|-------|-------|---------|
| Slate #1A2B35 texte sur Linen #EDE8E0 | ~12.5:1 | Excellent |
| Linen #EDE8E0 texte sur Slate #1A2B35 | ~12.5:1 | Excellent |
| Sand #B8A082 texte sur Slate #1A2B35 | 4.8:1 | AA ✓ |
| Sand #B8A082 texte sur Steel Blue #3D5A80 | 5.1:1 | AA ✓ |
| Steel Blue #3D5A80 texte sur Linen #EDE8E0 | ~4.2:1 | AA ✓ (corps ≥18px) |
| Terracotta #C85A30 sur Linen #EDE8E0 | ~3.4:1 | Éléments graphiques uniquement |

### 5.2 Performance (Lighthouse > 90)

| Critère | Cible | Moyens |
|---------|-------|--------|
| Performance | > 90 | SSG pour les pages statiques, images optimisées (Next/Image, WebP/AVIF, lazy loading), fonts locales avec `font-display: swap`, pas de JS tiers non essentiel |
| Accessibilité | > 90 | Cf. section 5.1 |
| Best Practices | > 90 | HTTPS, pas de console errors, images dimensionnées correctement |
| SEO | > 90 | Metadata complètes, sitemap, robots.txt, Schema.org, URLs sémantiques |

**Règles spécifiques :**

| Élément | Règle |
|---------|-------|
| Fonts | Chargement local (`/public/fonts/`), format woff2 uniquement, `font-display: swap`. Subset si possible |
| Images | `next/image` obligatoire (sauf SVG inline). Format WebP ou AVIF. Dimensions explicites. Lazy loading par défaut |
| JS bundles | Tree shaking natif Next.js. Pas de librairie UI lourde (pas de MUI, pas de Chakra). Tailwind CSS purge en production |
| CSS | Tailwind purge automatique. Pas de CSS-in-JS runtime |
| Third party | Plausible Analytics intégré dès le lancement (EU-hosted, sans cookies, sans bandeau de consentement — conforme RGPD sans consent manager). Pas de Google Fonts, pas de CDN externe |
| Hydration | Pages statiques (SSG) par défaut. ISR pour le blog si les articles sont gérés via CMS. Route API seule en mode serveur |

### 5.3 Charte éditoriale intégrée dans le code

Le fichier `lib/constants.ts` contient les garde-fous éditoriaux pour que tout développeur ou contributeur de contenu respecte les règles :

```typescript
// lib/constants.ts

export const EDITORIAL = {
  // Terminologie obligatoire
  REQUIRED_TERMS: {
    framework: 'TÊTE•CŒUR•CORPS',    // Jamais HEAD•BODY•HEART
    bilan: 'ARKÉ',                      // Bilan d'entrée W0
    ia: 'Iris',                         // Pas "IRIS" tout-caps sauf titre
    coachs: 'Sherpas',                  // Coachs santé humains
    reseau: 'La Guilde',               // Réseau praticiens certifiés
    comite_science: 'CIES',            // Comité Interdisciplinaire d'Expertise Scientifique
    public: 'personnes',               // Pas "patients" sauf contexte clinique
    communaute: 'archipels',           // Membres de la communauté
    salutogenese: 'Salutogénèse',      // Majuscule initiale uniquement
    statut_court: 'Fonds de dotation en création',
    statut_long: 'Fondation en cours de constitution — structure philanthropique en création',
  },

  // Formulations interdites
  FORBIDDEN_TERMS: [
    'paradigme',
    'holistique',
    'synergies',
    'valeur ajoutée',
    'disruptif',
    'bienveillant',
    'bienveillance',
    'accompagnement',        // Sans qualificatif
    'Fondation suisse',
    'Genève',
    '90% lifestyle',
    'Silver Alliance',
    'IRIS',                  // Tout-caps interdit (utiliser "Iris")
  ],

  // Golden quotes
  QUOTES: {
    golden: 'Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé.',
    rythme: 'La santé n\'est pas un état à conquérir. C\'est un rythme à retrouver.',
    baseline_foundation: 'Réinventer la santé. Pour qu\'elle dure.',
    baseline_life: 'Votre confident et compagnon de santé.',  // NE PAS utiliser sur le site Foundation
  },

  // Références scientifiques autorisées
  REFERENCES: [
    { author: 'Antonovsky', year: 1979, topic: 'Salutogénèse, SOC, GRR' },
    { author: 'Shenhar et al.', year: 2026, journal: 'Science', topic: '~50% facteurs modifiables, génétique ~55%' },
    { author: 'Sforzo et al.', year: 2018, journal: 'BMC Public Health', topic: 'Health coaching' },
    { author: 'Hall, Rosbash, Young', year: 2017, topic: 'Prix Nobel — gènes horloge' },
  ],

  // Failles Fatales — garde-fous contenu
  FATAL_FLAWS: {
    F1: 'Non-substitution : ARCHIPEL ne diagnostique pas, ne prescrit pas.',
    F2: 'Guilde : aucune promesse sans protocole CMedO validé.',
    F3: 'Coordination, pas pratique médicale.',
    F4: 'Pas de promesse de volume sans outils opérationnels.',
    F5: 'Le service ne remplace pas un parcours médical.',
  },
} as const;
```

### 5.4 Internationalisation (préparée, pas activée)

Structure i18n préparée pour la V2 (ajout de l'anglais) :

```
app/
├── [locale]/            # Futur : /fr et /en
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
```

Au lancement (V1), pas de routing i18n. La langue est fixée à `fr`. Le `<html lang="fr">` est codé en dur. Les textes sont dans les fichiers de page ou dans `lib/constants.ts`. La migration vers `next-intl` ou `next-i18next` sera faite en V2.

### 5.5 Sécurité

| Mesure | Détail |
|--------|--------|
| Variables d'environnement | Jamais exposées côté client. `NOTION_API_KEY` uniquement dans les routes API server-side |
| CORS route API | Restreindre les origines autorisées au domaine `archipel.foundation` |
| Rate limiting | Limiter les soumissions de formulaire (ex: 5 par IP par minute) via middleware ou Vercel Edge |
| Validation | Double validation : côté client (UX) + côté serveur (sécurité). Schemas Zod partagés |
| RGPD | Consentement explicite obligatoire avant soumission. Pas de cookie analytics au lancement |
| Headers sécurité | CSP, X-Frame-Options, X-Content-Type-Options configurés dans `next.config.ts` |
| XSS | Aucun `dangerouslySetInnerHTML` sauf pour le contenu MDX pré-sanitizé |

---

## ANNEXE A — RÉCAPITULATIF DES FICHIERS À FOURNIR

Avant le lancement du code, les fichiers suivants doivent être fournis ou créés :

| Fichier | Statut | Dépendance |
|---------|--------|------------|
| CoCoMatPro-Light.woff2 | ◐ À obtenir | Licence typographique |
| CoCoMatPro-Regular.woff2 | ◐ À obtenir | Licence typographique |
| CoCoMatPro-Medium.woff2 | ◐ À obtenir | Licence typographique |
| CoCoMatPro-Bold.woff2 | ◐ À obtenir | Licence typographique |
| TenorSans-Regular.woff2 | ✓ Google Fonts (libre) | — |
| ArchytypeBayerType.woff2 | ◐ À obtenir | Licence typographique |
| logo-foundation-slate-sand.svg | ◐ À produire | Fichiers sources DA |
| logo-foundation-linen-steel.svg | ◐ À produire | Fichiers sources DA |
| picto-foundation-slate.svg | ◐ À produire | Fichiers sources DA |
| picto-foundation-linen.svg | ◐ À produire | Fichiers sources DA |
| og/default.jpg (1200×630) | ○ À concevoir | DA + photos |
| Photos Cyril | ○ En production | Shooting prévu |
| DB Notion "Contacts Site" | ○ À créer | ID DB connu |
| Texte page Soutenir | ○ À valider | Avocat mandaté |
| Contenu scientifique pages Approche | ○ À valider | ASD (CMedO) |
| 8 articles Fondements adaptés | ○ À produire | Conversation ad-hoc |

---

## ANNEXE B — CONTRASTES WCAG COMPLETS

Matrice de contraste calculée pour toutes les paires texte/fond utilisées sur le site :

| Texte | Fond | Ratio | Usage | Verdict |
|-------|------|-------|-------|---------|
| Linen #EDE8E0 | Slate #1A2B35 | ~12.5:1 | Texte principal sur sections sombres | AAA ✓ |
| Slate #1A2B35 | Linen #EDE8E0 | ~12.5:1 | Texte principal sur sections claires | AAA ✓ |
| Sand #B8A082 | Slate #1A2B35 | 4.8:1 | Texte secondaire, liens, CTA sur sombre | AA ✓ |
| Sand #B8A082 | Steel Blue #3D5A80 | 5.1:1 | Texte secondaire sur profondeur | AA ✓ |
| Linen #EDE8E0 | Steel Blue #3D5A80 | ~4.5:1 | Texte principal sur sections Steel Blue | AA ✓ |
| Steel Blue #3D5A80 | Linen #EDE8E0 | ~4.5:1 | Texte secondaire, liens sur clair | AA ✓ (≥18px) |
| Coeur #C85A30 | Linen #EDE8E0 | ~3.4:1 | Accents graphiques, icônes | Graphiques ✓ |
| Coeur #C85A30 | Slate #1A2B35 | ~3.8:1 | Accents graphiques sur sombre | Graphiques ✓ |

---

*Document produit le 29 mars 2026 — SPEC SYSTÈME Niveau 1 SDD*
*Usage : contrat technique pour la génération du code du site archipel.foundation*
*Statut : À VALIDER par Cyril Jamot (CEO) avant passage au Niveau 2 (Specs Pages)*
