# SPEC — Arborescence SEO Site Poêle

> Ce fichier décrit la structure de pages à implémenter.
> Lis ce fichier en entier avant de commencer, puis adapte-le à la stack et aux conventions du projet existant.

---

## ARBORESCENCE DES PAGES

Chaque ligne = une page à créer.
Format : `URL` → Titre H1 | Intention de recherche

### Homepage
```
/                                        → Accueil | Navigationnel
```

### Silo 1 — Types de Poêles
```
/poele/                                  → Tous nos poêles | Commercial
/poele/granules/                         → Poêle à granulés (pellets) | Commercial
/poele/granules/etanche/                 → Poêle à granulés étanche | Informationnel
/poele/granules/canalisable/             → Poêle à granulés canalisable | Informationnel
/poele/granules/silencieux/              → Poêle à granulés silencieux | Informationnel
/poele/bois/                             → Poêle à bois (bûches) | Commercial
/poele/bois/avec-four/                   → Poêle à bois avec four | Informationnel
/poele/bois/poele-de-masse/              → Poêle de masse (inertie) | Informationnel
/poele/mixte/                            → Poêle mixte bois / granulés | Commercial
/poele/insert-cheminee/                  → Insert cheminée | Informationnel
/poele/hydro/                            → Poêle hydro (bouilleur) | Informationnel
```

### Silo 2 — Guides & Conseils
```
/guide/                                  → Guide complet du poêle | Informationnel
/guide/comparatif-bois-granules/         → Poêle à bois ou granulés : le comparatif | Commercial
/guide/calculer-puissance-poele/         → Comment calculer la puissance de son poêle | Informationnel
/guide/rendement-poele/                  → Quel rendement pour un poêle ? | Informationnel
/guide/chauffage-principal-ou-appoint/   → Poêle : chauffage principal ou appoint ? | Informationnel
/guide/choisir-granules/                 → Bien choisir ses granulés de bois | Informationnel
/guide/stocker-bois-chauffage/           → Stocker son bois de chauffage | Informationnel
/guide/labels-granules/                  → Labels ENplus, DINplus, NF : comment s'y retrouver | Informationnel
/guide/entretien-ramonage/               → Entretien et ramonage de son poêle | Informationnel
/guide/regler-programmer-poele-granules/ → Régler et programmer son poêle à granulés | Informationnel
```

### Silo 3 — Aides & Financement
```
/aides/                                  → Toutes les aides pour votre poêle | Transactionnel
/aides/ma-prime-renov-poele/             → MaPrimeRénov' pour un poêle | Transactionnel
/aides/prime-energie-poele/              → Prime énergie (CEE) pour poêle | Transactionnel
/aides/eco-ptz/                          → Éco-prêt à taux zéro (éco-PTZ) | Informationnel
/aides/tva-reduite/                      → TVA réduite à 5,5 % | Informationnel
/aides/cheque-energie/                   → Chèque énergie | Informationnel
/aides/cumuler-aides/                    → Cumuler les aides : le guide | Informationnel
/aides/simulateur/                       → Simulateur d'aides poêle | Transactionnel
```

### Silo 4 — Installation
```
/installation/                           → Installation d'un poêle : tout savoir | Informationnel
/installation/conduit-fumee-tubage/      → Conduit de fumée et tubage | Informationnel
/installation/normes-dtu/                → Normes et réglementation DTU 24.1 | Informationnel
/installation/ou-placer-son-poele/       → Où placer son poêle dans la maison ? | Informationnel
/installation/poele-appartement/         → Installation en appartement | Informationnel
/installation/installateur-rge/          → Trouver un installateur RGE (QualiBois) | Transactionnel
/installation/deroulement-chantier/      → Déroulement d'un chantier d'installation | Informationnel
```

### Silo 5 — Prix & Devis
```
/prix/                                   → Prix d'un poêle : le guide complet | Commercial
/prix/poele-granules/                    → Prix poêle à granulés | Commercial
/prix/poele-bois/                        → Prix poêle à bois | Commercial
/prix/cout-installation/                 → Coût d'installation et pose | Informationnel
/prix/consommation-granules/             → Consommation : combien de granulés par an ? | Informationnel
/devis/                                  → Demander un devis gratuit | Transactionnel
```

### Silo 6 — Pages Locales (template dynamique)
```
/installation-poele-[ville]/             → Installation poêle [Ville] | Local
```
Villes à pré-générer : paris, lyon, marseille, bordeaux, toulouse, nantes, lille, strasbourg, rennes, montpellier, nice, grenoble

### Silo 7 — Blog / Magazine (dynamique)
```
/blog/                                   → Actualité poêle & chauffage bois | Informationnel
/blog/[slug]/                            → [Titre article] | Informationnel
```
Articles initiaux :
- `prix-bois-granules-evolution` → Prix du bois et des granulés : évolution
- `poele-qualite-air` → Poêle et qualité de l'air intérieur
- `interdiction-chauffage-bois` → Interdiction chauffage bois : vrai ou faux ?
- `temoignages` → Témoignages clients
- `poele-design-tendances` → Le poêle design : tendances déco

### Silo 8 — Confiance & Légal
```
/a-propos/                               → Qui sommes-nous ? | Navigationnel
/a-propos/nos-artisans/                  → Notre réseau d'artisans RGE | Navigationnel
/comment-ca-marche/                      → Comment ça marche ? | Navigationnel
/faq/                                    → FAQ | Navigationnel
/contact/                                → Contact | Navigationnel
```

---

## MAILLAGE INTERNE (RÈGLES)

Chaque page doit inclure :
1. **Fil d'Ariane** (breadcrumb) basé sur l'URL
2. **2-4 liens contextuels** vers d'autres pages DU MÊME SILO
3. **1 CTA** vers /devis/ ou /aides/simulateur/
4. Les **pages piliers** (/poele/, /guide/, /aides/, /installation/, /prix/) doivent lister et lier TOUTES leurs sous-pages

Liens inter-silos recommandés :
- /poele/granules/ ↔ /prix/poele-granules/ ↔ /aides/ma-prime-renov-poele/
- /poele/bois/ ↔ /prix/poele-bois/ ↔ /guide/comparatif-bois-granules/
- /installation/* → /installation/installateur-rge/
- /prix/* → /devis/

---

## SEO TECHNIQUE (CHECKLIST)

Pour chaque page :
- [ ] `<title>` unique, max 60 caractères, format : "[H1] | [Nom du site]"
- [ ] `<meta description>` unique, max 155 caractères
- [ ] URL canonique absolue
- [ ] Open Graph (title, description, url, image)
- [ ] Balise H1 unique

Données structurées JSON-LD par type de page :
- Toutes les pages : `Organization` + `BreadcrumbList`
- /poele/* : `Product`
- /guide/* et /faq/ : `FAQPage`
- /blog/* : `Article`
- /installation-poele-[ville]/ : `LocalBusiness`

Fichiers techniques :
- [ ] Sitemap XML dynamique (toutes les pages, avec lastModified + priority)
- [ ] robots.txt (Allow all, lien vers sitemap)

---

## RÉCAP CHIFFRES

| Silo | Pages |
|------|-------|
| Types de Poêles | 11 |
| Guides & Conseils | 10 |
| Aides & Financement | 8 |
| Installation | 7 |
| Prix & Devis | 6 |
| Pages Locales | 12+ |
| Blog | 5+ |
| Confiance & Légal | 5 |
| **TOTAL** | **~64 pages** |
