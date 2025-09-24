<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import Reveal from '$lib/Reveal.svelte';
  import Slides from './slides.svelte';
  import { showSolution } from '$lib/showSolution.ts';
  showSolution.set(true);
</script>

<svelte:head>

<title>Typescript - TW3 - Johan Girod</title>
</svelte:head>

<Reveal>
    <Slides/>
</Reveal>

## TP 1 - Ajouter des types à un projet existant

Dans ce TP, nous allons ajouter des types à un projet existant pour améliorer la lisibilité du code et éviter des erreurs.

### Mise en place

1. Clonez le dépôt

   ```bash
     git clone https://sources.univ-jfc.fr/techno-web-3/tp-1.git
     cd tp-1
   ```

2. Lancer

   ```bash
     npm install
   ```

3. Ouvrez vscode à la racine du projet

   ```bash
     code .
   ```

4. Ouvrez le fichier `exercice-1.js`. Normalement, votre éditeur doit signaler que des types sont manquants en souligant en rouge les endroits à compléter.

5. Ajouter les types pour corriger les erreurs.

## TP 2 - Memory

### Partie 1 - Initialisation du projet from scratch

1. Créez un nouveau projet dans un nouveau répertoire nommé `memory`

   ```bash
      npm init -y
   ```

2. Installez typescript comme dépendance du projet

   ```bash
      npm install -D typescript
   ```

3. Créez un fichier `tsconfig.json` à la racine du projet

   ```json
   {
   	"compilerOptions": {
   		"target": "ES6",
   		"module": "ES6",
   		"outDir": "./dist",
   		"rootDir": "./src",
   		"strict": true
   	}
   }
   ```

<Message>

<div slot='title'>`tsconfig.json`</div>

Ce fichier de configuration permet de définir les options de compilation de typescript pour le projet courant.

- `target` : version de javascript cible
- `module` : on précise le système de module utilisé
- `outDir` : répertoire de sortie où seront placés les fichiers js compilés
- `rootDir` : répertoire source
- `strict` : active une verification plus stricte

[En savoir plus](https://www.typescriptlang.org/tsconfig)

</Message>

4. Créez un répertoire `src` et un fichier `index.ts`

   ```bash
      mkdir src
      touch src/index.ts
   ```

   Le fichier `index.ts` contiendra le code de l'application. Pour l'instant, vous pouvez ajouter un simple `console.log('Hello World')` pour tester la compilation.

5. Créer un fichier `index.html` à la racine du projet

   ```html
   <!doctype html>
   <html lang="en">
   	<head>
   		<meta charset="UTF-8" />
   		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
   		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
   		<title>Memory</title>
   	</head>
   </html>
   ```

6. Ajoutez un script dans le fichier `package.json` pour lancer le compilateur typescript `tsc`. Ce script sera exécuté avec la commande `npm run build`.
   <Solution>

   ```json
     ...
     "scripts": {
       "build": "tsc"
     }

   ```

   </Solution>

7. Lancez la compilation avec la commande `npm run build`. Vous devriez voir un fichier `index.js` généré dans le répertoire `dist`. Ouvrez-le. Que constatez-vous ?

8. Ajoutez une balise `script` dans le HTML pour charger le fichier `index.js` généré par typescript (dans le répertoire `dist`).

9. Ouvrez le fichier `index.html` dans un navigateur pour vérifier que le message `Hello World` s'affiche dans la console.

### Partie 2 - Création d'un jeu de memory simple

<Message>

<div slot="title">Compiler automatiquement</div>

Pour éviter de lancer la commande `tsc` à chaque modification, vous pouvez créer un script `dev` qui surveille les modifications des fichiers et recompile automatiquement le projet.

```json
...
"scripts": {
  "dev": "tsc --watch"
}
```

</Message>

1. Créer un type `Carte` pour une carte de memory. Une carte possède un symbole et un état (retournée ou non).
   Les symboles possibles sont les emojis suivantes : 🍎, 🍌, 🍒, 🍓, 🍇, 🍉, 🍊, 🍍
   <Solution>

   ```typescript
   type Emoji = '🍎' | '🍌' | '🍒' | '🍓' | '🍇' | '🍉' | '🍊' | '🍍';
   type Carte = {
   	symbole: Emoji;
   	visible: boolean;
   };
   ```

   </Solution>

2. Créer une fonction `creerJeu` qui retourne un tableau de cartes mélangées. Ce tablau doit contenir 2 cartes de chaque symbole, soit 16 cartes au total.

   <Solution>

   ```typescript
   const symboles: Array<Emoji> = ['🍎', '🍌', '🍒', '🍓', '🍇', '🍉', '🍊', '🍍'];
   function creerJeu(): Array<Carte> {
   	const cartes: Array<Carte> = [];
   	symboles.forEach((symbole) => {
   		cartes.push({ symbole, visible: false });
   		cartes.push({ symbole, visible: false });
   	});
   	return cartes.sort(() => Math.random() - 0.5);
   }
   ```

   </Solution>

3. Créer une fonction `afficherCarte` qui prend en paramètre un tableau de cartes et l'affiche dans l'interface du navigateur, sous forme d'un tableau de 4 lignes et 4 colonnes. Les cartes retournées doivent afficher leur symbole, les cartes cachées doivent afficher un espace.

   Tester que votre fonction affiche correctement les cartes en appelant la fonction `afficherCarte(jeuEnCours)`. Puis, changer passer l'état de quelques cartes de « caché » à « visible » et vérifier que l'affichage est correct.

   <Message>

   <div slot="title">Rappel</div>
   - Pour **créer un élément HTML**, on utilise la méthode [`document.createElement('div')`](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
   - Pour **ajouter un élément** à un autre, on utilise la méthode [`myDomNode.appendChild(myElement)`](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild)
   - Pour **ajouter une classe** à un élément, on utilise la propriété [`classList.add()`](https://developer.mozilla.org/fr/docs/Web/API/Element/classList)
   - Pour **récupérer un élément du DOM**, on utilise la méthode [`document.querySelector(mySelector)`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
   - Pour **supprimer un élément**, on utilise la méthode [`remove()`](https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove)

   </Message>

   **Proposition de CSS**

   _À ajouter dans un fichier `style.css` à la racine du projet, puis à inclure dans le fichier `index.html` avec une balise `link`._

   ```css
   .carte-container {
   	display: grid;
   	grid-template-columns: repeat(4, 1fr);
   	grid-template-rows: repeat(4, 1fr);
   	width: fit-content;
   	gap: 5px;
   }
   .carte {
   	width: 50px;
   	height: 50px;
   	border: 1px solid black;
   	display: flex;
   	justify-content: center;
   	align-items: center;
   	font-size: 2rem;
   	border-radius: 5px;
   }
   ```

   <Solution>

   ```typescript
   function afficherCarte(cartes: Array<Carte>): void {
   	document.querySelector('.carte-container')?.remove();
   	const container = document.createElement('div');
   	container.classList.add('carte-container');
   	document.body.appendChild(container);

   	cartes.forEach((carte) => {
   		const button = document.createElement('button');
   		button.classList.add('carte');
   		button.textContent = carte.visible ? carte.symbole : ' ';
   		container.appendChild(button);
   	});
   }
   ```

   </Solution>

4. La suite au [TP suivant](/cours/tw3/2-async).
