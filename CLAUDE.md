# CLAUDE.md — Instructions permanentes pour Claude Code
# Site archipel.foundation — Refonte SDD avril 2026

## IDENTITÉ DU PROJET

ARCHIPEL Foundation est un Fonds de dotation de droit français (Paris) en cours d'enregistrement. Le site archipel.foundation est institutionnel, non commercial. Il construit la crédibilité et suscite l'engagement (don, candidature Guilde, inscription pionniers).

Baseline : "Réinventer la santé. Pour qu'elle dure."
Framework : TÊTE•CŒUR•CORPS + MILIEU
Triptyque : SOIGNER • RELIER • TRANSFORMER

## STACK TECHNIQUE

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Polices locales : CoCoMat Pro (300/400/500/700), Tenor Sans, Archytype Bayer-Type
- Zéro Google Fonts, zéro CDN externe
- Analytics : Plausible (EU-hosted, sans cookies, sans consent banner)
- Email : Brevo (RGPD-natif)
- DB formulaires : Notion API (DB ID : d0304717371c45768a2ee42779dd7da5)
- Déploiement : Vercel + Gandi (domaine)

## PALETTE — DA v3.1 (invariants absolus)

```
Slate       #1A2B35   Fond principal sombre (header, hero, sections institutionnelles)
Steel Blue  #3D5A80   Fond secondaire (profondeur cognitive) + Cercle MILIEU (invariant)
Linen       #EDE8E0   Fond clair (sections respiration, explication)
Sand        #B8A082   Structure, liens, CTA secondaires

Accents T•C•C (invariants Foundation / Life) :
TÊTE        #A0A8C0   Bleu-gris — dimension cognitive/mentale — associé à Iris
CŒUR        #C85A30   Terracotta — dimension émotionnelle/relationnelle — associé aux Sherpas
CORPS       #789878   Sage — dimension physique/corporelle — associé à La Guilde

Hover : Sand → #C8B496 | Steel Blue → #4A6A90
Sémantique formulaires : succès=#789878 erreur=#C85A30 warning=#B8A082
```

## RÈGLES CHROMATIQUES STRICTES

- JAMAIS de blanc pur #FFFFFF comme fond de section → utiliser Linen #EDE8E0
- JAMAIS de WarmGray #F2EDE6 sur Foundation (réservé à Life)
- JAMAIS de Terracotta #C85A30 en fond de page (accent graphique uniquement)
- JAMAIS de Gold #C4A35A, Navy #1B2A3D, Dark #0f1c2e, Teal #2a5a5e (palette OBSOLÈTE)
- Ratio sections : ~40% sombre (Slate/Steel Blue) / ~60% clair (Linen)
- NavBar + Footer : fond Slate solide (pas de transparence)

## TYPOGRAPHIES

```
Titres     → font-family: 'CoCoMat Pro', 'Cormorant Garamond', Georgia, serif
Corps      → font-family: 'Tenor Sans', Georgia, serif
Labels     → font-family: 'Archytype Bayer-Type', Montserrat, sans-serif

Tailles (clamp) :
hero    clamp(2.5rem, 5vw + 1rem, 4.5rem)
h1      clamp(2rem, 3vw + 0.75rem, 3rem)
h2      clamp(1.5rem, 2vw + 0.5rem, 2.25rem)
h3      clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)
body    clamp(1rem, 0.5vw + 0.875rem, 1.125rem)

Labels : uppercase, tracking 0.08em–0.12em
Titres : tracking -0.02em, line-height 1.2
Corps : line-height 1.6 (1.8 pour blog)
```

## ARCHITECTURE DES PAGES

```
/                    Accueil (récit en scroll, 6 sections)
/mission             Notre Mission (le POURQUOI)
/mission/9-principes Les 9 Principes Fondateurs
/mission/robin-hood  Le Modèle Robin Hood
/approche            Notre Approche (le COMMENT)
/approche/fondements Fondements Scientifiques
/approche/iris       Iris, le compagnon IA
/approche/sherpas    Les Sherpas
/approche/odyssea    Le Parcours Odyssea
/gouvernance         Gouvernance & Éthique
/gouvernance/charte  Charte Fondatrice (intégral)
/gouvernance/comite-ethique
/gouvernance/cies
/soutenir            Soutenir (formulaire don actif)
/guilde              La Guilde (recrutement praticiens)
/guilde/deontologie  Cadre Déontologique
/guilde/candidature  Processus de candidature
/actualites          Blog SEO/GEO
/actualites/[slug]   Article individuel
/mentions-legales
/politique-confidentialite
```

## NAVIGATION

Desktop (≥1024px) : Logo + "Notre Vision ▾" (dropdown → Mission, Approche) + Gouvernance + Soutenir + La Guilde + Actualités + CTA "Rejoindre les pionniers"
Mobile (<1024px) : Logo picto + hamburger → 7 entrées à plat

## COMPOSANTS PARTAGÉS (fichiers dans /components/)

Header.tsx, Footer.tsx, Button.tsx (4 variantes : primary/secondary/outline-light/accent),
Section.tsx (3 variantes : slate/steel/linen), Card.tsx (4 variantes : feature/principe/blog/cta),
Form.tsx, FormField.tsx, PioneerForm.tsx, Breadcrumbs.tsx, ArticleLayout.tsx,
PictoFoundation.tsx, LogoFoundation.tsx, DotsTCC.tsx, SchemaOrg.tsx, ScrollReveal.tsx

## 3 FORMULAIRES → DB NOTION

Tous routés vers POST /api/contact → DB Notion d0304717371c45768a2ee42779dd7da5

1. Soutenir (/soutenir) : Prénom, Nom, Email, Organisation?, Cercle, Message?, RGPD → type:"mecene"
2. Guilde (/guilde) : Prénom, Nom, Email, Profession, Ville, Spécialités, Motivation, RGPD → type:"praticien"
3. Pionniers (transversal) : Prénom, Email, RGPD → type:"pionnier"

## TERMINOLOGIE OBLIGATOIRE

- TÊTE•CŒUR•CORPS (jamais HEAD•BODY•HEART)
- Iris (jamais "IRIS" tout-caps, jamais "assistant médical", jamais "SAI" en public)
- Sherpas = coachs santé humains
- La Guilde = réseau praticiens certifiés
- CIES = Comité Interdisciplinaire d'Expertise Scientifique
- "personnes" en public / "patients" en contexte clinique uniquement
- "Fonds de dotation en création" (wording court)
- Salutogénèse (S majuscule uniquement)
- ARKÉ = bilan d'entrée W0

## FORMULATIONS INTERDITES

paradigme, holistique, synergies, valeur ajoutée, disruptif, bienveillant/bienveillance,
accompagnement (seul sans qualificatif), "Fondation suisse", "Genève", "90% lifestyle",
"Silver Alliance", "assistant médical", "IA médicale", "SAI" (public), blanc pur #FFFFFF

## 5 FAILLES FATALES (garde-fous contenu)

F1 : Non-substitution — ARCHIPEL ne diagnostique pas, ne prescrit pas
F2 : Guilde — aucune promesse sans protocole CMedO validé
F3 : Coordination, pas pratique médicale
F4 : Pas de promesse de volume sans outils opérationnels
F5 : Le service ne remplace pas un parcours médical

## ACCESSIBILITÉ (WCAG 2.1 AA)

- Contraste texte : 4.5:1 corps, 3:1 grands titres
- Navigation clavier complète, focus visible (2px Steel Blue)
- Skip to content, ARIA landmarks, alt text obligatoire
- Tailles en rem/clamp(), jamais px pour le texte
- prefers-reduced-motion respecté

## CONVENTIONS DE CODE

- Composants : PascalCase (Header.tsx)
- Utilitaires : camelCase (notion.ts)
- Routes : kebab-case (comite-ethique/)
- CSS vars : --color-slate, --text-h2
- Tailwind custom : bg-slate_f (underscore pour éviter conflit natif)
- Constantes : SCREAMING_SNAKE_CASE
- Imports : Next.js → React → Tiers → Composants internes → Lib internes
- Alias : @/* (configuré dans tsconfig.json)

## SPECS COMPLÈTES

Les spécifications détaillées sont dans /specs/ :
- SPEC_SYSTEME_N1.md — Design tokens, composants, grille, conventions, contraintes
- SPEC_PAGES_PRIORITAIRES_N2.md — Accueil, Mission, Soutenir
- SPEC_PAGES_SECONDAIRES_N2.md — Approche, Gouvernance, Guilde, Actualités
- BRIEF_SDD.md — Brief d'entrée consolidé

Consulter ces fichiers AVANT de générer le code d'une page.

## WORKFLOW

1. Lire la spec de la page dans /specs/
2. Générer le code en respectant les tokens de la Spec N1
3. Vérifier : palette, typographie, terminologie, Failles Fatales, accessibilité
4. Tester : npm run build (zéro erreur)
5. Committer avec un message descriptif
