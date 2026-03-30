# BRIEF ARCHITECTURE SITE ARCHIPEL FOUNDATION
## Document d'entrée pour le SDD (Spec-Driven Development)

**Version : 29 mars 2026**
**Statut : ACTÉ — Tous arbitrages consolidés**
**Usage : Entrée pour Spec Système (Niveau 1) + Specs Pages (Niveau 2)**

---

## 0. CONTEXTE ET OBJECTIF

ARCHIPEL Foundation est un Fonds de dotation en cours d'enregistrement, première étape vers une Fondation RUP (dossier juin 2026). Le site archipel.foundation est le premier point de contact pour l'ensemble des parties prenantes : futurs mécènes, praticiens de La Guilde, personnes souhaitant créer les conditions de leur santé, partenaires institutionnels et académiques.

Le site actuel est obsolète : il mentionne encore "Fondation Suisse de Santé Intégrative", "Genève", l'ancienne palette chromatique, et des terminologies abandonnées. Le preview v5 (Vercel) est périmé par la DA v3.1, la Charte v2.0 (9 principes, MILIEU, Salutogénèse située), et l'architecture juridique française.

**Objectif du nouveau site :** Construire la crédibilité institutionnelle d'ARCHIPEL Foundation pour qu'elle apparaisse comme un projet de Fondation RUP sérieux, différent, et structuré, auprès de toutes les audiences.

**Ce que le site N'EST PAS :** Un site commercial. Il ne vend rien. Il ne fait pas la promotion du service ARCHIPEL LIFE. Il construit la confiance et suscite l'engagement (don, candidature Guilde, inscription pionniers).

---

## 1. AUDIENCES ET HIÉRARCHIE

### Principe transversal validé

ARCHIPEL accompagne des **intentions de santé**, pas des statuts médicaux. La cible s'adresse à des personnes qui souhaitent devenir responsables de la création des conditions de leur santé, qu'elles soient en bonne santé, plus ou moins symptomatiques et/ou malades.

### Hiérarchie des audiences pour le site Foundation

**Audience universelle (homepage) :** Toute personne arrivant sur le site doit comprendre qu'ARCHIPEL bâtit une nouvelle façon de créer sa santé et de prendre soin de sa vie. L'entrée est universelle, puis chacun trouve son chemin.

**Audience prioritaire 1 — Mécènes et donateurs :** Le Fonds de dotation est suffisamment avancé pour un formulaire de don actif. Le financement conditionne tout le reste.

**Audience prioritaire 2 — Praticiens (La Guilde) :** Prérequis MVP non négociable : 100 praticiens Paris + Bordeaux, début recrutement mai 2026.

**Audience prioritaire 3 — Futurs "Archipels" (personnes/utilisateurs) :** Inscription "Rejoindre les pionniers" pour constituer la base de premiers utilisateurs.

**Audience secondaire — Partenaires institutionnels et académiques :** Accèdent aux sous-pages de profondeur (Gouvernance, Fondements scientifiques).

### Personas de référence (ARCHIPEL LIFE — impact indirect sur le site Foundation)

3 strates d'audiences actualisées (mars 2026) :

**Strate 1 (MVP) :** Personnes avec signaux actifs sans diagnostic, en transition de vie. Personas : Nathalie (executive burnout, 45-60 ans), Claire (péri-ménopause, 42-55 ans), Philippe (dirigeant en transition, 55-65 ans).

**Strate 2 (post-MVP) :** Proactifs sur leur capital santé, déclencheur identifiable. Personas : Maxime, Émilie.

**Strate 3 (conditionnel) :** Diagnostiqués cherchant un sens global, protocole ARKÉ spécifique + CMedO requis. Persona : Sophie.

---

## 2. ARCHITECTURE DU SITE

### Navigation principale : 6 entrées visibles en desktop

| # | Label menu | Page | Objectif |
|---|-----------|------|----------|
| 1 | Accueil | / | Récit en scroll, distribution vers les 3 parcours |
| 2 | Notre Vision (dropdown) | — | Label parent, ouvre un dropdown |
| 2a | → Notre Mission | /mission | Le POURQUOI : 5 axes, modèle à deux corps, Salutogénèse |
| 2b | → Notre Approche | /approche | Le COMMENT : TÊTE•CŒUR•CORPS + MILIEU, Iris, Sherpas, Guilde |
| 3 | Gouvernance | /gouvernance | Charte, comités, Corpus Normatif, crédibilité institutionnelle |
| 4 | Soutenir | /soutenir | Formulaire don actif, Cercles de Fondateurs |
| 5 | La Guilde | /guilde | Praticiens : proposition de valeur, candidature |
| 6 | Actualités | /actualites | Blog/articles pour le SEO/GEO |

### Navigation mobile : hamburger avec 7 entrées à plat

Mission, Approche, Gouvernance, Soutenir, La Guilde, Actualités + CTA "Rejoindre les pionniers"

### Sous-pages (accessibles depuis les pages parentes uniquement, pas dans la navigation principale)

**Depuis Notre Mission :**
- /mission/9-principes — Les 9 Principes Fondateurs (version détaillée)
- /mission/robin-hood — Le Modèle Robin Hood (premium finance l'accessibilité)

**Depuis Notre Approche :**
- /approche/fondements — Fondements Scientifiques (références sourcées)
- /approche/iris — Iris, le compagnon de santé IA
- /approche/sherpas — Les Sherpas (coachs santé humains)
- /approche/odyssea — Le Parcours Odyssea (design spirale)

**Depuis Gouvernance :**
- /gouvernance/charte — Charte Fondatrice ARCHIPEL (texte intégral v2.0)
- /gouvernance/comite-ethique — Le Comité d'Éthique (9 membres, veto absolu)
- /gouvernance/cies — Le CIES (Comité Interdisciplinaire d'Expertise Scientifique)

**Depuis La Guilde :**
- /guilde/deontologie — Le Cadre Déontologique
- /guilde/candidature — Processus de candidature détaillé

### Éléments transversaux

**Header fixe :** Logo ARCHIPEL Foundation (picto + texte, version principale fd Slate) + Navigation 6 entrées + CTA "Rejoindre les pionniers" (bouton accent)

**Footer structuré :** Coordonnées, mentions légales, politique de confidentialité, LinkedIn, lien discret vers ARCHIPEL LIFE (quand disponible), baseline "Réinventer la santé. Pour qu'elle dure."

**CTA transversal :** "Rejoindre les pionniers" — présent dans le header et en bas de chaque page. Capture email + prénom, route vers DB Notion (entrée "Pionniers").

---

## 3. DIRECTION ARTISTIQUE — RÈGLES POUR LE SITE

### Source de vérité : ARCHIPEL_DA_v3_1_Mars2026.docx

### Palette Foundation

| Hex | Nom | Rôle site |
|-----|-----|-----------|
| #1A2B35 | Slate | Fond principal sombre — header, hero, sections d'ancrage institutionnel |
| #3D5A80 | Steel Blue | Fond secondaire — sections de profondeur cognitive |
| #EDE8E0 | Linen | Fond clair — sections de respiration, explication, témoignage |
| #B8A082 | Sand | Structure, liens, éléments graphiques, CTA secondaires |
| #A0A8C0 | Bleu-gris | Accent TÊTE |
| #789878 | Sage | Accent CORPS |
| #C85A30 | Terracotta | Accent CŒUR (invariant, identique sur Foundation et Life) |

### Principe d'alternance validé

**Ratio : ~40% sombre (Slate/Steel Blue) / ~60% clair (Linen)**

Le site doit être statutaire mais PAS sombre, PAS triste, PAS masculin. L'alternance Slate/Linen crée un rythme de lecture. Les sections sombres portent la voix institutionnelle ("voici ce que nous construisons"). Les sections claires portent la voix humaine ("voici ce que vous vivez").

### Typographies

| Usage | Typographie | Fallback |
|-------|-------------|----------|
| Titres | CoCoMat Pro | Cormorant Garamond |
| Corps de texte | Tenor Sans | Georgia |
| Labels / Tags | Archytype Bayer-Type | Montserrat |

### Règles visuelles impératives

- Jamais de WarmGray (#F2EDE6) ni de Terracotta en fond de page sur le site Foundation (réservés à Life)
- Jamais de blanc pur comme fond de section
- Picto Foundation : variante fd Slate (principal) ou fd Linen (sections claires)
- Zone d'exclusion minimum = 1× la hauteur du triangle autour du picto
- Les 3 dots TÊTE•CŒUR•CORPS sont invariants (identiques sur les deux entités)
- Le cercle MILIEU est Steel Blue #3D5A80 sur les deux entités (invariant)
- Photos en cours de production (pas de vidéo au lancement)
- Pas de stock photos génériques, pas de blouses blanches, pas de lotus, pas de couchers de soleil Instagram

### Contrastes WCAG 2.1 validés

- Sand / Slate : 4.8:1 ✓
- Sand / Steel Blue : 5.1:1 ✓
- Terracotta / Linen : ~3.4:1 ✓ (éléments graphiques)
- Texte corps sur Linen : utiliser Slate (#1A2B35) pour le texte = contraste maximal
- Texte corps sur Slate : utiliser Linen (#EDE8E0) ou Sand (#B8A082) selon hiérarchie

---

## 4. CONTENU PAR PAGE — INTENTION ET STRUCTURE

### 4.1 PAGE ACCUEIL (/)

**Intention :** Le récit en 60 secondes de scroll. Tout le monde comprend. Chacun trouve son chemin.

**Format :** Homepage longue en scroll, alternant sections Slate et Linen.

**Structure séquentielle :**

**Section 1 — Hero (fd Slate)**
Accroche principale : "La santé se crée. Ensemble. Elle ne se subit pas. Seul·e."
Sous-titre : "Vous voulez créer les conditions de votre santé ? Nous avons construit l'espace pour le faire."
Baseline : SOIGNER • RELIER • TRANSFORMER
Picto Foundation centré ou asymétrique 60/40
CTA principal : "Rejoindre les pionniers"

**Section 2 — Le Constat (fd Linen)**
Le problème universel : fragmentation, personne ne coordonne, le système ne parle que quand on est malade.
Pas de récit fondateur personnel. Le constat est universalisé.
Chiffres factuels sourcés uniquement (Tally : 76% gèrent seuls leur coordination santé).

**Section 3 — La Réponse (fd Slate ou Steel Blue)**
Golden quote : "Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé."
Présentation en une phrase de la Salutogénèse : "la science de ce qui crée la santé"
Le triptyque TÊTE•CŒUR•CORPS + MILIEU (visuel du picto décomposé)

**Section 4 — Ce que nous construisons (fd Linen)**
Le modèle à deux corps : Foundation (mission, éthique, recherche) + ARCHIPEL LIFE (service opérationnel)
Mention sobre : "ARCHIPEL Foundation supervise le développement d'un service de santé préventive opéré par ARCHIPEL LIFE, sa structure opérationnelle."
Pas de promotion commerciale du service Life.

**Section 5 — Les preuves de sérieux (fd Slate)**
Gouvernance : Comité d'Éthique indépendant, CIES, Corpus Normatif hiérarchisé
9 Principes Fondateurs (liste courte, lien vers page détaillée)
Références scientifiques clés : Antonovsky (1979), Shenhar et al. (Science, jan. 2026)

**Section 6 — 3 CTAs (fd Linen)**
CTA 1 : "Soutenir ARCHIPEL" → /soutenir
CTA 2 : "Rejoindre La Guilde" → /guilde (praticiens)
CTA 3 : "Rejoindre les pionniers" → formulaire email

### 4.2 PAGE NOTRE MISSION (/mission)

**Intention :** Le POURQUOI. Pourquoi ARCHIPEL existe. Ce que la Fondation construit au-delà du service.

**Audience prioritaire :** Mécènes, institutionnels, partenaires académiques.

**Contenu :**
- La mission en une phrase : "ARCHIPEL n'est pas une réponse à l'échec de la médecine. C'est une réponse à son incomplétude."
- Les 5 axes de mission : Accessibilité (Robin Hood), Éducation, Recherche, Plaidoyer, Souveraineté des données
- Le modèle à deux corps (schéma Foundation ↔ Life)
- La Salutogénèse située (ce que c'est, en quoi c'est différent, en langage accessible)
- Statut de chaque axe : ACTÉ ✓ / EN CONSTRUCTION ◐ / PROJETÉ ○

**Sous-pages accessibles :** Les 9 Principes Fondateurs • Le Modèle Robin Hood

**CTA principal :** "Soutenir cette mission"

### 4.3 PAGE NOTRE APPROCHE (/approche)

**Intention :** Le COMMENT. Ce que vit concrètement une personne accompagnée par ARCHIPEL.

**Audience prioritaire :** Futurs "Archipels", mais aussi praticiens (comprendre le système).

**Contenu :**
- Le cadre TÊTE•CŒUR•CORPS + MILIEU (visuel explicatif, pas juste les mots)
- Iris : le compagnon IA (SAI, pas AGI). Ce qu'il fait, ce qu'il ne fait pas (non-substitution).
- Les Sherpas : coachs santé humains. Le lien humain irremplaçable.
- La Guilde : le réseau coordonné de praticiens certifiés.
- Le parcours Odyssea : design en spirale, ARKÉ (bilan d'entrée W0, 6 dimensions).
- ⚠ GARDE-FOU : Aucun contenu ne doit franchir la ligne diagnostic/prescription (Faille F1).

**Sous-pages accessibles :** Fondements Scientifiques • Iris • Les Sherpas • Odyssea

**CTA principal :** "Rejoindre les pionniers"

### 4.4 PAGE GOUVERNANCE & ÉTHIQUE (/gouvernance)

**Intention :** Crédibilité institutionnelle. Rassurer le mécène exigeant et l'institutionnel.

**Audience prioritaire :** Mécènes, institutionnels, régulateurs, partenaires.

**Contenu :**
- La Charte Fondatrice (résumé structuré, lien vers texte intégral en sous-page)
- Le Comité d'Éthique : 9 membres indépendants, droit de veto absolu
- Le CIES : 9 membres, présidé par le CMedO
- Le Corpus Normatif : hiérarchie Charte → Constitutions → Codes → Décrets
- La trajectoire sociocratique progressive (voix prépondérante → majorité qualifiée → consentement distribué)
- La Clause de Pérennité : "ARCHIPEL Foundation est construite pour survivre à ses fondateurs."

**Sous-pages accessibles :** Charte Fondatrice (intégral) • Comité d'Éthique • CIES

**CTA principal :** "Soutenir ARCHIPEL"

### 4.5 PAGE SOUTENIR (/soutenir)

**Intention :** Conversion mécénat/don. Formulaire actif.

**Audience prioritaire :** Mécènes, donateurs, philanthropes.

**Contenu :**
- Pourquoi soutenir ARCHIPEL : les 5 axes financés par les dons
- Les 3 Cercles de Fondateurs présentés SANS montants (teasing) :
  - Cercle Explorateur (Donateurs) — description des bénéfices
  - Cercle Bâtisseur (Mécènes) — description des bénéfices
  - Cercle Architecte (Fondateurs) — description des bénéfices
- Biais de désirabilité : présenter les cercles comme des "niveaux d'engagement croissant" pour créer l'aspiration
- Formulaire de contact : "Je souhaite soutenir ARCHIPEL" (pas de montant, pas de paiement en ligne à ce stade)
- ⚠ JURIDIQUE : Mention explicite du statut "Fonds de dotation" (pas "Fondation RUP" qui n'est pas encore constituée). Vérifier avec l'avocat la formulation exacte concernant les déductions fiscales.

**CTA principal :** "Je souhaite soutenir ARCHIPEL" (formulaire)

### 4.6 PAGE LA GUILDE (/guilde)

**Intention :** Recrutement des 100 premiers praticiens (Paris + Bordeaux).

**Audience prioritaire :** Praticiens de santé, toutes strates.

**Contenu :**
- Proposition de valeur praticien : coordination, pas d'isolement, vision intégrative, patients orientés
- La philosophie intégrative (sans mention des 4 strates — outil interne uniquement)
- Le cadre déontologique (non-substitution, gradient supérieur, transparence)
- Profils recherchés (médecins, ostéopathes, naturopathes, psychologues, coachs santé...)
- Processus de candidature (résumé, lien vers sous-page détaillée)
- ⚠ Faille F2 : Aucun engagement ni promesse sans protocole de sélection validé CMedO.
- ⚠ Faille F4 : Pas de promesse sur le nombre de patients orientés tant que les outils ne sont pas opérationnels.

**Sous-pages accessibles :** Le Cadre Déontologique • Processus de candidature

**CTA principal :** "Candidater pour La Guilde" (formulaire)

### 4.7 PAGE ACTUALITÉS (/actualites)

**Intention :** SEO/GEO. Contenu indexable pour le référencement organique.

**Format :** Blog avec catégories (tags), articles datés, auteur(s).

**Contenu au lancement :** Adaptation des 8 articles de la série Fondements LinkedIn (déjà rédigés) avec les mises à jour et compléments apportés depuis leur rédaction.

**Catégories suggérées :** Salutogénèse, TÊTE•CŒUR•CORPS, La Guilde, Recherche, Événements

**Fréquence cible post-lancement :** 2 à 4 articles/mois (issus de la veille, de la newsletter ARCHIPEL-Logos, des analyses).

---

## 5. FORMULAIRES ET DB NOTION

### Nouvelle DB Notion à créer (l'ancienne a disparu)

3 formulaires contextuels, chacun routé vers une entrée spécifique de la DB :

| Formulaire | Page source | Champs | Entrée Notion |
|------------|------------|--------|---------------|
| "Je souhaite soutenir ARCHIPEL" | /soutenir | Nom, Prénom, Email, Organisation (optionnel), Message (optionnel), Cercle d'intérêt (Explorateur/Bâtisseur/Architecte) | Type : Mécène/Donateur |
| "Candidater pour La Guilde" | /guilde | Nom, Prénom, Email, Profession, Ville, Spécialité(s), Motivation (texte libre) | Type : Praticien |
| "Rejoindre les pionniers" | Transversal (header + footer + pages) | Prénom, Email | Type : Pionnier |

### Exigences techniques

- Intégration via API Notion (pas de middleware externe au lancement si possible, sinon Make/Zapier)
- Chaque formulaire inclut : consentement RGPD explicite (checkbox), lien vers politique de confidentialité
- Confirmation email automatique après soumission (même message sobre pour les 3 formulaires)
- La DB Notion sert de CRM minimal : chaque entrée est un contact avec un type, une date, et un statut (Nouveau / Contacté / En cours / Converti)

---

## 6. CONTRAINTES TECHNIQUES

### Stack validée

- **Framework :** Next.js 14 (App Router) — SSG/SSR pour SEO natif
- **Langage :** TypeScript
- **Styles :** Tailwind CSS
- **Polices :** CoCoMat Pro, Tenor Sans, Archytype Bayer-Type (chargement local, pas de CDN)
- **Hébergement :** Vercel
- **Langue :** Français uniquement au lancement (structure i18n préparée pour l'anglais en V2)

### SEO/GEO — Critique dès le lancement

- Balises meta par page (title, description, og:image)
- Sitemap.xml automatique
- Schema.org : Organisation + Article (pour le blog) + FAQPage (si FAQ)
- URLs propres et sémantiques (/mission, /approche, /gouvernance...)
- Blog avec pagination et catégories indexables
- Performance : Lighthouse > 90 sur les 4 critères

### Accessibilité

- WCAG 2.1 niveau AA minimum
- Navigation au clavier complète
- Alt text sur toutes les images
- Contrastes validés (cf. section DA)

---

## 7. CHARTE ÉDITORIALE — RÈGLES POUR TOUT LE CONTENU DU SITE

### Terminologie obligatoire

- TÊTE•CŒUR•CORPS (pas HEAD•BODY•HEART en externe)
- ARKÉ = bilan d'entrée W0
- IRIS ou Iris (pas "IRIS" tout-caps)
- Sherpas = coachs santé humains
- La Guilde = réseau praticiens certifiés
- CIES = Comité Interdisciplinaire d'Expertise Scientifique
- "personnes" (public) / "archipels" (communauté) / "patients" (contextes cliniques uniquement)
- Salutogénèse (majuscule initiale uniquement)
- "Fonds de dotation en création" (wording court)
- "Fondation en cours de constitution — structure philanthropique en création" (wording institutionnel)

### Formulations interdites

paradigme, holistique, synergies, valeur ajoutée, disruptif (sauf ironie), bienveillant/bienveillance (sauf contexte clinique), accompagnement seul sans qualificatif, toute formulation de copywriting générique de coach, "Fondation suisse / Genève", "90% lifestyle", "Silver Alliance" (jamais en externe)

### Golden quotes validées

- "Le médecin est le confident de la maladie. ARCHIPEL est le confident de la santé."
- "La santé n'est pas un état à conquérir. C'est un rythme à retrouver."
- Baseline Foundation : "Réinventer la santé. Pour qu'elle dure."
- Baseline Life : "Votre confident et compagnon de santé." (à ne PAS utiliser sur le site Foundation)

### Références scientifiques autorisées

- Antonovsky (salutogenèse, SOC, GRR), 1979
- Shenhar et al., Science, janvier 2026 (~50% facteurs modifiables, génétique ~55%)
- Sforzo et al., BMC Public Health, 2018 (health coaching)
- Prix Nobel Physiologie/Médecine 2017 (Hall, Rosbash, Young — gènes horloge)
- INTERDIT : "90% lifestyle", "génétique 25%", chiffres non sourcés

### Registres épistémiques

Tout contenu factuel du site doit distinguer :
- **FAIT** : donnée sourcée et datée
- **ESTIMATION** : donnée publiée mais avec incertitude
- **ANALYSE** : interprétation interne d'ARCHIPEL

---

## 8. RÉCIT FONDATEUR — RÈGLES DE DOSAGE

Le récit personnel de Cyril n'apparaît PAS en tant que tel sur le site. Le constat (fragmentation, solitude face au système) est universalisé. Le passage se fait du "je" (absent) au "nous" (ARCHIPEL comme réponse) au "vous" (votre place dans l'archipel).

Ce qui apparaît :
- Le constat universel (le système est fragmenté, personne ne coordonne)
- Une mention sobre sur la page Mission : "ARCHIPEL est née d'un constat vécu avant d'être théorisé."
- Le nom du fondateur sur la page Gouvernance ou Soutenir, avec son rôle
- Un lien vers le profil LinkedIn pour ceux qui veulent en savoir plus

Ce qui n'apparaît PAS :
- Pas de bloc "L'histoire du fondateur" en homepage
- Pas de photo portrait en hero
- Pas de récit autobiographique détaillé (réservé au livre/manifeste)

---

## 9. PONT VERS ARCHIPEL LIFE

Le site Foundation mentionne ARCHIPEL LIFE de façon **factuelle, pas promotionnelle**.

Formulation validée : "ARCHIPEL Foundation finance et supervise le développement d'un service de santé préventive opéré par ARCHIPEL LIFE, sa structure opérationnelle."

Pas de lien vers archipel.life tant que le site n'est pas construit. En attendant : le CTA "Rejoindre les pionniers" capture les personnes intéressées par le futur service.

---

## 10. ALERTES STRUCTURELLES À INTÉGRER DANS LE CONTENU

Les 5 Failles Fatales doivent être respectées dans chaque texte du site :

- **F1 (Non-substitution) :** Aucun texte ne doit laisser entendre qu'ARCHIPEL diagnostique ou prescrit.
- **F2 (Guilde incontrôlable) :** Aucune promesse aux praticiens sans protocole validé CMedO.
- **F3 (Zone grise coordination/pratique médicale) :** Le site positionne ARCHIPEL comme coordinateur, jamais comme prescripteur.
- **F4 (Timeline praticiens) :** Pas de promesse de volume de patients tant que les outils ne sont pas opérationnels.
- **F5 (Population symptomatique) :** Le site doit clarifier que le service ne remplace pas un parcours médical.

---

## 11. PROCHAINES ÉTAPES — SÉQUENÇAGE SDD

| Phase | Livrable | Contenu | Dépendance |
|-------|----------|---------|------------|
| 1 | Spec Système (Niveau 1) | Design system, composants partagés, conventions, contraintes | Ce document (acté) |
| 2 | Spec Pages prioritaires (Niveau 2) | Accueil + Mission + Soutenir | Spec Système validée |
| 3 | Spec Pages secondaires (Niveau 2) | Approche + Gouvernance + Guilde | Specs prioritaires validées |
| 4 | Spec Blog (Niveau 2) | Actualités/Blog + structure articles | En parallèle de Phase 3 |
| 5 | Spec Composants (Niveau 3) | Header, Footer, CTAs, Formulaires, Cards | En parallèle de Phase 2 |
| 6 | Génération code | Pages et composants générés depuis les specs | Toutes specs validées |
| 7 | Intégration contenu | Textes définitifs, photos, formulaires Notion | Photos livrées + DB Notion créée |
| 8 | Validation | Tests, accessibilité, SEO, responsive | Code généré |

### Points de validation requis avant code

- [ ] Photos de Cyril livrées (header, illustrations)
- [ ] DB Notion "Contacts Site" créée avec les 3 types d'entrées
- [ ] Validation juridique du texte de la page Soutenir (avocat mandaté)
- [ ] Validation ASD des contenus scientifiques (pages Approche et sous-pages)
- [ ] Adaptation des 8 articles Fondements pour le blog (conversation ad-hoc)

---

*Document produit le 29 mars 2026 — Table ronde d'experts simulés — Claude Opus 4.6*
*Usage : entrée SDD pour la refonte du site archipel.foundation*
*Tous les arbitrages ont été validés par Cyril Jamot (CEO)*
