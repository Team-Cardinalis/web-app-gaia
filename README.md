# GAIA Web App

Une application web moderne construite avec SvelteKit et configurée pour fonctionner en HTTPS.

## Configuration HTTPS

Cette application est configurée pour fonctionner entièrement en HTTPS :

- **Développement** : Le serveur de développement utilise HTTPS par défaut
- **Production** : Configuration optimisée pour les déploiements HTTPS

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement (HTTPS)
npm run dev

# Ou explicitement avec HTTPS
npm run dev:https

# Construire pour la production
npm run build

# Prévisualiser la build (HTTPS)
npm run preview
```

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement en HTTPS
- `npm run dev:https` - Démarre explicitement en HTTPS
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la build en HTTPS
- `npm run check` - Vérifie la syntaxe TypeScript
- `npm run format` - Formate le code avec Prettier
- `npm run lint` - Lance le linter

## Sécurité

- Toutes les connexions utilisent HTTPS
- Certificats auto-signés pour le développement
- Configuration sécurisée pour la production

## Technologies utilisées

- **SvelteKit** - Framework web moderne
- **Vite** - Outil de build rapide
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **HTTPS** - Sécurité des connexions