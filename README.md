# Ouest Web Calvados

Site vitrine développé avec Next.js, React et TypeScript.

## Démarrer le site

Prérequis : installer une version récente de Node.js.

```powershell
npm install
npm run dev
```

Ouvrir ensuite `http://localhost:3000`.

## Modifier le contenu

Les textes et informations commerciales sont centralisés dans `src/content/` :

- `site.ts` : identité, email, téléphone et zone ;
- `hero.ts` : introduction ;
- `works.ts` : réalisations ;
- `services.ts` : services ;
- `testimonials.ts` : témoignages et chiffres ;
- `pricing.ts` : offres et tarifs ;
- `faq.ts` : questions fréquentes ;
- `contact.ts` : formulaire et coordonnées ;
- `footer.ts` : pied de page.

Les composants sont dans `src/components/`, les styles dans `src/styles/globals.css` et les images dans `public/projects/`.

## Vérifier avant publication

```powershell
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## Fichiers générés

Les dossiers `node_modules/`, `.next/`, `test-results/` et `playwright-report/` ne sont pas livrés. Ils sont recréés automatiquement par les commandes ci-dessus.
