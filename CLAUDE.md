# CLAUDE.md

Ce fichier fournit des instructions à Claude Code (claude.ai/code) pour travailler sur ce dépôt.

## Vue d'ensemble du projet

**Guide Touristique Madagascar** - Site web vitrine pour un guide touristique professionnel à Madagascar, présentant les circuits, excursions et services.

**Audience cible**: Touristes francophones et internationaux souhaitant découvrir Madagascar
**Message clé**: Découverte authentique de Madagascar avec un guide local expérimenté
**Services**: Circuits sur mesure, excursions journalières, conseils pratiques, réservations

## Stack Technique

- **Next.js 15.5.4** avec App Router (export statique pour Netlify)
- **React 19** avec TypeScript (mode strict)
- **Tailwind CSS v4** (@tailwindcss/postcss)
- **shadcn/ui** composants avec couleurs personnalisées
- **Sonner** pour les notifications toast
- **Lucide React** pour les icônes
- **Framer Motion** pour les animations
- **Netlify** déploiement avec intégration Forms

## Commandes de développement

```bash
# Installer les dépendances
npm install

# Serveur de développement (http://localhost:3000)
npm run dev

# Build de production (export statique)
npm run build

# Démarrer le serveur de production localement
npm start

# Lint
npm run lint
```

## Installation des composants shadcn/ui

Le projet nécessite ces composants shadcn/ui :

```bash
npx shadcn-ui@latest add button input label select textarea card badge separator accordion tabs tooltip toast carousel dialog calendar
```

## Architecture

### Structure Single-Page Application

Le site est une application single-page avec 10 sections dans l'ordre :
1. **Header** - Navigation fixe avec menu burger mobile
2. **Hero Section** - Image hero avec CTA principal "Découvrez Madagascar"
3. **About** - Présentation du guide (expérience, passion, expertise)
4. **Services** - 3 types de services (Circuits sur mesure, Excursions, Conseils)
5. **Destinations** - Carrousel des destinations phares (6-8 lieux)
6. **Circuits** - 3-4 circuits populaires avec tarifs et durées
7. **Gallery** - Galerie photos (masonry grid ou carousel)
8. **Testimonials** - Témoignages clients (carousel avec étoiles)
9. **ContactForm** - Formulaire de demande de devis/contact
10. **Footer** - Footer 3 colonnes avec réseaux sociaux

### Fichiers clés

```
app/
├── layout.tsx          # Layout global avec Toaster + formulaire Netlify caché
├── page.tsx            # Page principale avec les 10 sections
├── globals.css         # Tailwind + variables CSS personnalisées
└── api/
    └── contact/
        └── route.ts    # Endpoint proxy pour Netlify Forms

components/
├── ui/                 # Composants shadcn/ui (16 au total)
├── Header.tsx          # Header fixe avec défilement fluide
├── Footer.tsx          # Footer 3 colonnes
├── LogoSVG.tsx         # Logo du guide
├── ServicesCards.tsx   # 3 cartes de services avec effets hover
├── DestinationsCarousel.tsx  # Carrousel des destinations
├── CircuitsCards.tsx   # Cartes des circuits avec tarifs
├── PhotoGallery.tsx    # Galerie photos responsive
├── TestimonialsCarousel.tsx  # Carousel témoignages
└── ContactFormModern.tsx     # Formulaire avec validation temps réel

hooks/
└── useFormToast.ts     # Notifications toast (succès/erreur/info)

lib/
└── utils.ts            # Utilitaire cn() pour fusion classes Tailwind
```

## Palette de couleurs

Palette inspirée de Madagascar (définie dans `app/globals.css`) :

- **Primary**: Vert tropical `hsl(145, 65%, 45%)` - #28a745 (nature, forêts)
- **Secondary**: Terre rouge `hsl(15, 70%, 50%)` - #d9582a (terre latérite)
- **Accent**: Océan bleu `hsl(195, 85%, 50%)` - #13b5ea (océan Indien)
- **Neutral**: Sable beige `hsl(40, 35%, 85%)` - #e8dcc8
- Additionnels: Jaune #f59e0b, Orange #f97316, Indigo #6366f1

## Configuration Netlify

### Configuration Export Statique

`next.config.js` doit utiliser :
```javascript
output: 'export',
images: { unoptimized: true }
```

### Intégration Netlify Forms

1. **Formulaire caché** dans `app/layout.tsx` avec `data-netlify="true"`
2. **Route API** à `app/api/contact/route.ts` pour proxy des soumissions
3. Champs du formulaire : name, email, phone, country, travelDate, groupSize, circuitType (select), budget (select), message (textarea), newsletter (checkbox)

### Déploiement

Configuration `netlify.toml` :
- Commande build : `npm run build`
- Répertoire publish : `.next`
- Plugin : `@netlify/plugin-nextjs`
- Version Node : 18

## Patterns de composants

### Validation de formulaire

Utiliser validation temps réel avec états d'erreur :
- **Nom** : min 2 caractères
- **Email** : format email valide
- **Téléphone** : format international
- **Date de voyage** : date future uniquement
- **Taille du groupe** : nombre entre 1 et 20

### Notifications Toast

Utiliser le hook `useFormToast()` avec Sonner :
- **Toast info** : pendant la soumission (durée infinie)
- **Toast succès** : 5s durée avec icône verte
- **Toast erreur** : 8s durée avec icône rouge + numéro de téléphone

### Défilement fluide

Les liens de navigation utilisent des IDs d'ancre :
- `#accueil` → Hero
- `#a-propos` → About
- `#services` → Services
- `#destinations` → Destinations
- `#circuits` → Circuits
- `#galerie` → Gallery
- `#temoignages` → Testimonials
- `#contact` → ContactForm

CSS : `html { scroll-behavior: smooth; }`

### Points de rupture responsive

- **Mobile** : < 640px (base)
- **sm** : 640px (tablettes)
- **md** : 768px (tablettes)
- **lg** : 1024px (ordinateurs) - déclencheur menu burger
- **xl** : 1280px (grands écrans)
- **2xl** : 1536px (très grands écrans)

### Effets Hover

Pattern standard pour éléments interactifs :
- Boutons : `hover:scale-105 hover:shadow-xl transition-all duration-300`
- Cartes : `hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300`
- Images : `hover:brightness-110 transition-all duration-500`

## Composants personnalisés

### ServicesCards

3 cartes de services :
- **Circuits sur mesure** : icône Map, description personnalisation
- **Excursions** : icône Compass, description sorties journalières
- **Conseils pratiques** : icône Info, description assistance voyage

### DestinationsCarousel

Carousel des destinations principales (6-8) :
- Images haute qualité avec overlay gradient
- Titre destination + courte description
- Bouton "En savoir plus"
- Navigation fléchée + indicateurs dots
- Auto-play optionnel (6s interval)

Destinations suggérées :
1. Allée des Baobabs
2. Parc Andasibe (lémuriens)
3. Nosy Be (plages)
4. Tsingy de Bemaraha (UNESCO)
5. Isalo (désert rocheux)
6. Île Sainte-Marie (baleines)
7. Antsirabe (hauts plateaux)
8. Ifaty (récifs coralliens)

### CircuitsCards

3-4 circuits populaires avec :
- Image représentative
- Titre du circuit
- Durée (jours/nuits)
- Points forts (bullet points avec icônes)
- Tarif indicatif (à partir de X€)
- Badge "Best-seller" ou "Exclusif" si applicable
- Bouton "Demander un devis"

Circuits suggérés :
1. **Grand Tour du Sud** (14j/13n) - Allée Baobabs, Isalo, Ifaty
2. **Découverte de l'Est** (7j/6n) - Andasibe, Ankanin'ny Nofy, Pangalanes
3. **Aventure du Nord** (10j/9n) - Ankarana, Tsingy Rouge, Nosy Be
4. **Circuit Baleines** (5j/4n) - Île Sainte-Marie (juillet-septembre)

### PhotoGallery

Galerie responsive avec :
- Layout masonry (3 colonnes desktop, 2 tablette, 1 mobile)
- Lightbox au clic (Dialog shadcn/ui)
- Lazy loading images
- Catégories filtres optionnelles (Paysages, Faune, Culture, Plages)
- 12-20 photos minimum

### TestimonialsCarousel

Carousel de témoignages avec :
- Photo client (optionnelle) ou avatar initiales
- Nom + pays d'origine
- 5 étoiles rating (composant Star de lucide-react)
- Citation témoignage (2-4 lignes)
- Date de voyage
- Auto-play (8s interval)
- 6-8 témoignages minimum

### ContactFormModern

9 champs avec validation + notifications toast :
- name (requis, min 2 car)
- email (requis, format valide)
- phone (optionnel, format international)
- country (requis, select liste pays francophones)
- travelDate (requis, calendar picker, date future)
- groupSize (requis, select 1-20+)
- circuitType (requis, select : Sur mesure/Circuits populaires/Excursion journée/Autre)
- budget (optionnel, select : < 1000€, 1000-2000€, 2000-3000€, > 3000€)
- message (requis, textarea, min 10 car)
- newsletter (checkbox optionnel)

Réinitialisation après soumission réussie.

## Configuration SEO

Défini dans `app/layout.tsx` :
```typescript
export const metadata: Metadata = {
  title: 'Guide Touristique Madagascar - Circuits Sur Mesure & Excursions',
  description: 'Découvrez Madagascar avec un guide local expérimenté. Circuits personnalisés, excursions, conseils pratiques. Allée des Baobabs, Tsingy, Nosy Be et plus.',
  keywords: 'Madagascar, guide touristique, circuits Madagascar, excursions Madagascar, voyage Madagascar, Nosy Be, Allée Baobabs, Tsingy, lémuriens, vacances Madagascar',
  openGraph: {
    title: 'Guide Touristique Madagascar - Circuits Sur Mesure',
    description: 'Explorez Madagascar avec un guide local passionné',
    type: 'website',
    locale: 'fr_FR',
    images: ['/og-image.jpg']
  }
}
```

## Notes importantes

- Site entièrement statique (pas de SSR) pour hébergement Netlify
- Application single-page - tout le contenu dans `app/page.tsx`
- Header en position fixe qui suit le scroll
- Menu mobile apparaît au point de rupture `< 1024px`
- Toutes les soumissions de formulaires passent par Netlify Forms
- Utiliser la police Inter partout
- Viser un score Lighthouse > 90 pour performance
- Assurer conformité a11y complète
- Images optimisées (WebP, tailles multiples)
- Utiliser des images de stock de haute qualité pour Madagascar

## Contenu requis

### Section Hero
- Titre accrocheur : "Découvrez la Magie de Madagascar"
- Sous-titre : "Guide local expérimenté pour des aventures authentiques"
- Image hero : Paysage iconique (Allée Baobabs ou Tsingy)
- CTA principal : "Planifier mon voyage"
- Stats optionnelles : "15+ ans d'expérience, 500+ voyageurs satisfaits, 50+ circuits"

### Section About (À propos du guide)
- Photo portrait du guide
- Nom et titre : "Jean Rakoto, Guide Touristique Certifié"
- Biographie (3-4 paragraphes) :
  - Origine malgache, passion pour le tourisme
  - Expérience et certifications
  - Spécialités (faune, culture, aventure)
  - Langues parlées (français, anglais, malgache)
- 3 badges/certifications :
  - Certifié Office National du Tourisme Madagascar
  - 15+ ans d'expérience
  - Guide francophone

### FAQ (5-7 questions)
1. Quelle est la meilleure période pour visiter Madagascar ?
2. Faut-il un visa pour Madagascar ?
3. Quels vaccins sont recommandés ?
4. Quel budget prévoir pour un circuit de 10 jours ?
5. Peut-on voir des lémuriens facilement ?
6. Les circuits sont-ils adaptés aux familles avec enfants ?
7. Comment se déplacer à Madagascar ?

### Informations de contact
- Téléphone : +261 32 XX XXX XX (numéro Madagascar)
- Email : contact@guidemadagascar.com
- WhatsApp : Même numéro que téléphone
- Adresse : Antananarivo, Madagascar
- Réseaux sociaux : Facebook, Instagram, TripAdvisor

## Checklist avant déploiement

Avant le déploiement :
- [ ] Tester responsive sur mobile (375px), tablette (768px), desktop (1920px)
- [ ] Valider le formulaire avec tous les cas d'erreur
- [ ] Tester les notifications toast (succès/erreur/info)
- [ ] Vérifier la navigation à défilement fluide
- [ ] Tester Netlify Forms après déploiement
- [ ] Vérifier scores Lighthouse (viser 90+)
- [ ] Vérifier a11y avec lecteur d'écran
- [ ] Tester animation menu burger mobile
- [ ] Vérifier tous les carousels (auto-play, navigation)
- [ ] Tester la galerie photo (lightbox, filtres)
- [ ] Optimiser toutes les images (WebP, compression)
- [ ] Vérifier méta-tags OpenGraph pour partage réseaux sociaux

## Déploiement Netlify

1. **Connecter le dépôt Git** à Netlify
2. **Configuration build** :
   - Build command : `npm run build`
   - Publish directory : `.next`
   - Node version : 18
3. **Variables d'environnement** (si nécessaire) :
   - `NEXT_PUBLIC_SITE_URL` : URL production
4. **Activer Netlify Forms** dans les paramètres du site
5. **DNS personnalisé** (optionnel) : guidemadagascar.com

## Ressources images

Sources d'images gratuites pour Madagascar :
- Unsplash : "Madagascar", "Baobab", "Lemur", "Tsingy"
- Pexels : "Madagascar landscape"
- Pixabay : Images libres de droits
- Wikimedia Commons : Photos UNESCO Madagascar

**Formats recommandés** :
- Hero : 1920x1080px (WebP)
- Destinations : 800x600px (WebP)
- Circuits : 600x400px (WebP)
- Galerie : 800x800px (WebP)
- Témoignages avatars : 100x100px (WebP)
