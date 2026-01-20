<script>
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import Message from '$lib/Message.svelte';
	import { showSolution } from '$lib/showSolution.ts';
	showSolution.set(true)
</script>

<Reveal>
    <Slides/>
</Reveal>

## Exercices / TP

### Mise en place

Ce TP est disponible sur gitlab. Vous pouvez le cloner avec la commande suivante :

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-2.git
```

Utilisez les identifiants de votre compte universitaire pour vous connecter.

<Message>

<div slot="title">Utilisation de Gitlab pour sauvegarder votre travail (facultatif)</div>

Pour sauvegarder votre travail sur votre compte Gitlab, vous devez d'abord créer une bifurcation (fork) du repo.

[Cliquez ici pour créer une bifurcation](https://sources.univ-jfc.fr/techno-web-2/tp-2/-/forks/new).

Une fois le repo créée, vous pourrez le cloner en utilisant l'URL fournie par Gitlab (bouton bleu « Code »).

</Message>

Ouvrez le dossier `tp-2` dans votre éditeur de code (VSCode par exemple).

Ce projet contient un fichier `index.html`.

Ouvrez le fichier `index.html` dans votre navigateur (double-cliquez sur le fichier) pour voir le résultat de votre travail.

### Exercice 1 : modifier un élément avec la console

Pour commencer, nous allons nous familiariser avec la modification du DOM en utilisant la console du navigateur.

- Faire un clique droit sur la page et sélectionner « Inspecter » dans le menu contextuel. Cela ouvre l'inspecteur du navigateur et affiche le code HTML correspondant.
- Cliquez sur l'onglet console et tapez la commande suivante :

  ```js
  $0;
  ```

  Que contient la variable `$0` ? Cliquez sur un autre élément dans l'inspecteur et de taper la commande `$0` à nouveau. Que remarquez-vous ?

  <Solution showAnyway>

  La variable `$0` contient le noeud DOM correspondant à l'élément HTML sélectionné dans l'inspecteur.

  En cliquant sur un autre élément, la variable `$0` pointe vers le nouvel élément sélectionné.

  </Solution>

1. Faire en sorte que `$0` pointe vers le noeud DOM `<p>` qui contient le texte « Bonjour tout le monde ! ». Vous pouvez vous aider du bouton « selection » en haut à gauche de l'inspecteur (sous forme de pointeur de souris). Il vous permet de selectionner un élement directement depuis la page web.

2. Dans la console, tapez la commande suivante pour changer le texte de l'élément sélectionné :
   ```js
   $0.textContent = 'Bonjour les amis !';
   ```
3. Changez la couleur du texte en rouge en utilisant la propriété `style` de l'élément (comme vu dans le cours).
4. Supprimer le noeud de la page en utilisant la méthode `remove()`.

### Exercice 2 : modifier un élément avec du code JavaScript

Nous allons réaliser une diapositive d'images qui changent toutes les 2 secondes.

1. Pour commencer, créer un fichier `script.js`, et faire en sorte qu'il soit exécuté au chargement de la page.
   Pour cela, il faudra ajouter un lien grâce à la balise `<script>` dans le `<head>` du fichier `index.html`.

   ```html
   <script defer src="./script.js"></script>
   ```

   <Message>

   <div slot ="title">
   L'attribut `defer` 
   </div>

   `defer` est un attribut booléen qui indique au navigateur de différer l'exécution du script après le chargement de la page. Cela permet de garantir
   - que le script ne bloque pas le rendu de la page
   - que les éléments du DOM sont bien chargés avant l'exécution du script

   Sans cet attribut, le script est exécuté au moment où il est rencontré dans le fichier HTML, ce qui peut poser des problèmes si le script est placé dans le `<head>`.

   **Pourquoi ?**

   <Solution showAnyway>

   Car le contenu du `<body>` n'a pas encore été parsé par le navigateur, et l'abre DOM associé n'a pas été crée. Les fonctions de manipulation du DOM comme `document.querySelector` ne fonctionneront pas comme attendu.

   </Solution>

   <br/>
   </Message>

1. Dans le fichier `script.js`, récuperez le l'élément DOM existant de l'image dans une variable `imageNode`. Le noeud HTML est une image `img` avec pour id `diapo`.
1. Créez une fonction `changeImage()` qui change l'attribut `src` de l'image pour pointer vers image aléatoire.

   Dans la fonction, générez un id aléatoire entre 1 et 500 et utilisez cet id pour construire l'url de l'image. Par exemple, si l'id aléatoire est 3, l'url vers la nouvelle image sera `https://picsum.photos/id/3/400/400`.

   Faire en sorte que la fonction change l'attribut `src` de l'image pour pointer vers cette nouvelle url.

1. Appelez la fonction `changeImage()` toutes les 2 secondes en utilisant la fonction [`setInterval`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).

   ```js
   // setInterval va appeler la fonction changeImage toutes les 2 secondes
   setInterval(changeImage, 2000);
   ```

<Solution>

```js
const imageNode = document.querySelector('#diapo');
function changeImage() {
	const randomId = Math.ceil(Math.random() * 500);
	imageNode.src = `https://picsum.photos/id/${randomId}/400/400`;
}
setInterval(changeImage, 2000);
```

</Solution>

### Exercice 3 : Modifier le style d'éléments avec du code JavaScript

Écrire un script qui cache tous les éléments avec la class `hidden` par un rectangle noir (on pourra utiliser l'attribut `style` pour changer la couleur de fond en noir).

<Solution >

```js
const confidentialElements = document.querySelectorAll('.hidden');
confidentialElements.forEach((element) => {
	element.style.backgroundColor = 'black';
});
```

</Solution>

### Exercice 4 : Un jeu de mémoire en JavaScript

Nous allons développer un petit jeu de mémoire.

Le but est de faire apparaitre 5 cartes contenant des emojis aléatoires pendant 10 secondes. Ensuite, les emojis disparaissent et on pose la question à l'utilisateur : « Sous quelle carte se trouve l'emoji X ? ».

#### 1. Selections des emojis

Créez la fonction `getRandomEmojis()` qui retourne un tableau de 5 emojis aléatoires différentes. Voici son code (à compléter)

```js
// prettier-ignore
const emojis = [ '⛔️', '❇️', '🏰', '🐺', '⚜', '😅', '🚳', '🕞', '❣', '🏬', '🛎', '🌕', '🌃', '🏡', '🎑', '🍯', '🐍', '🔕', '🐿', '💮', '😹', '↕️', '🌵', '♒️', '🚽', '🕋', '📔', '🛂', '🎒', '🐼', '♏️', '⏸', '🅰️', '🌈', '🌂', '🚣', '🎇', '❄️', '👙', '🌹', '🍸', '🛳', '🎟', '😱',  '👳', '😑', '⌚️', '💛', '🆚', '🔼', '🈯️', '☀️', '😳', '♊️', '🌖', '♋️', '🚀', '🚱', '🚊', '📿', '⏫', '9️⃣', '🗾', '🏜', '🍦', '✋', '🍀', '🗿', '🙎', '✖️', '🆕', '🎮', '🔒', '💸', '👲', '🏢', '🔑', '🐶', '👪', '😻', '🌼', '👠', '🧀', '👎', '🙌', '🐻',  '👯',  '😺', '😈', '💴', '🎾', '🚙', '❤️', '♑️', '🌲'];
function getRandomEmojis() {
	const randomEmojis = [];
	while (randomEmojis.length < 5) {
		// 1. On selectionne un index aléatoire entre 0 et la longueur du tableau emojis
		const randomIndex = ?
		// 2. On récupère l'emoji correspondant à cet index
		const randomEmoji = ?
		// 3. On vérifie si l'emoji n'est pas déjà dans le tableau (utiliser includes)
		const isAlreadyInArray = ?
		if (!isAlreadyInArray) {
		  // 4. Si l'emoji n'est pas déjà dans le tableau, on l'ajoute
		}
	}
	// On retourne le tableau
	return randomEmojis;
}
```

<Solution >

```js
// prettier-ignore
const emojis = [ '⛔️', '❇️', '🏰', '🐺', '⚜', '😅', '🚳', '🕞', '❣', '🏬', '🛎', '🌕', '🌃', '🏡', '🎑', '🍯', '🐍', '🔕', '🐿', '💮', '😹', '↕️', '🌵', '♒️', '🚽', '🕋', '📔', '🛂', '🎒', '🐼', '♏️', '⏸', '🅰️', '🌈', '🌂', '🚣', '🎇', '❄️', '👙', '🌹', '🍸', '🛳', '🎟', '😱',  '👳', '😑', '⌚️', '💛', '🆚', '🔼', '🈯️', '☀️', '😳', '♊️', '🌖', '♋️', '🚀', '🚱', '🚊', '📿', '⏫', '9️⃣', '🗾', '🏜', '🍦', '✋', '🍀', '🗿', '🙎', '✖️', '🆕', '🎮', '🔒', '💸', '👲', '🏢', '🔑', '🐶', '👪', '😻', '🌼', '👠', '🧀', '👎', '🙌', '🐻',  '👯',  '😺', '😈', '💴', '🎾', '🚙', '❤️', '♑️', '🌲'];
function getRandomEmojis() {
	const randomEmojis = [];
	while (randomEmojis.length < 5) {
		// 1. On selectionne un index aléatoire entre 0 et la longueur du tableau emojis
		const randomIndex = Math.floor(Math.random() * emojis.length);
		// 2. On récupère l'emoji correspondant à cet index
		const randomEmoji = emojis[randomIndex];
		// 3. On vérifie si l'emoji n'est pas déjà dans le tableau (utiliser includes)
		const isAlreadyInArray = randomEmojis.includes(randomEmoji);
		if (!isAlreadyInArray) {
			// 4. Si l'emoji n'est pas déjà dans le tableau, on l'ajoute
			randomEmojis.push(randomEmoji);
		}
	}
	// On retourne le tableau
	return randomEmojis;
}
```

</Solution>

#### 2. Affichage des emojis

Creer une fonction `displayCards(emojis)` qui prend en paramètre un tableau d'emojis à afficher. Cette fonction va créer des éléments HTML `<li>` pour chacune des emojis et les insérer dans le DOM.

```js
function displayCards(emojis) {
  // 1. Selectionner l'élement du DOM `<ol id="emoji-game"> dans la variable emojisContainer
	const emojisContainer = ?
	// 2. Supprimer son contenu (réinitialise la liste)
	emojisContainer.innerHTML = '';
	// 3. Pour chacune des emoji du tableau
	for (const emoji of emojis) {
	  // a. Créer un nouvel element HTML de type `li` (element de liste)
		const emojiNode = ?
		// b. Remplir son contenu par l'emoji courante
		?
		// c. Ajouter l'élément comme enfant de l'élément emojiContainer (à l'intérieur)
		?
	}
}
```

Testez cette fonction en appelant `displayCards(getRandomEmojis())`. Vous devriez voir les emojis s'afficher dans le navigateur.

<Solution>

```js
function displayCards(emojis) {
	const emojisContainer = document.querySelector('ol#emoji-game');
	emojisContainer.innerHTML = '';
	emojis.forEach((emoji) => {
		const emojiNode = document.createElement('li');
		emojiNode.textContent = emoji;
		emojisNode.appendChild(emojiNode);
	});
}
```

</Solution>

#### 3. Cacher les emojis

Créer une fonction `hideEmojis` qui cache le contenu en modifiant la couleur de chacune des cartes à `transparent`.

Pour sélectionner toutes les éléments contenant des emojis, on pourra utiliser la méthode `querySelectorAll` avec le sélecteur CSS approprié.

Testez cette fonction avec le code suivant

```js
displayCards(getRandomEmojis());
setTimeout(hideEmojis, 2000); // Appel la fonction hideEmojis après 2 secondes
```

<Solution>

```js
function hideEmojis() {
	const emojiCards = document.querySelectorAll('ol > li');
	emojiCards.forEach((emojiCard) => {
		emojiCard.style.color = 'transparent';
	});
}
```

</Solution>

#### 4. Poser une question à l'utilisateur

Créer une fonction `askQuestion` avec les spécifications suivantes : , et pose la question à l'utilisateur : « Quelle est le numéro de la carte avec l'emoji <x> ? » (avec <x> l'emoji choisie).

```js
/**
 * @param {string[]} randomEmojis - Tableau d'emojis aléatoires affiché à l'utilisateur.
 */
function askQuestion(randomEmojis) {
	// 1. On choisi un emoji aléatoirement dans ce tableau
	// 2. On pose la question à l'utilisateur : « sous quel carte se trouve l'emoji <emoji> ? »
	// 3. Si l'utilisateur répond correctement, alors :
	//    a. On ajoute la classe `success` à l'élement <ol id="emoji-game">
	//    b. On affiche le text "Bravo 🎉 !" dans l'élément <div id="emoji-game-message">
	// 4. Sinon :
	//    a. On réaffiche toutes les emojis
	//    b. On affiche le texte 'Perdu 😔' dans l'élément <div id="emoji-game-message">
}
```

Testez que la fonction `askQuestion` fonctionne en l'appelant avec un tableau d'emojis (vous pouvez afficher la solution dans le texte de la question pour tester le cas où l'utilisateur répond correctement).

<Solution>

```js
function askQuestion(randomEmojis) {
	const randomIndex = Math.floor(Math.random() * randomEmojis.length);
	const randomEmoji = randomEmojis[randomIndex];
	const answer = prompt(`Sous quelle carte se trouve l'emoji ${randomEmoji} ?`);
	if (Number.parseInt(answer) === randomIndex) {
		// Ajoute la classe success pour lancer l'animation CSS
		document.querySelector('ol#emoji-game').classList.add('success');
		// Affiche un message de félicitation
		document.querySelector('#emoji-game-message').textContent = 'Bravo 🎉 !';
	} else {
		displayCards(randomEmojis);
		document.querySelector('#emoji-game-message').textContent = 'Perdu 😔';
	}
}
```

</Solution>

#### 5. Assemblage du jeu

1. Créer une fonction `startGame` qui appelle successivement les fonctions `getRandomEmojis` et `displayEmojis`.

2. Utilisez la fonction `setTimeout` pour appeler la fonction `hideEmojis` après 5 secondes.

   ```js
   setTimeout(hideEmojis, 5000);
   ```

3. Utilisez la fonction `setTimeout` pour appeler la fonction `askQuestion` après 5 secondes et 100 millisecondes.
4. Appelez la fonction `startGame` pour lancer le jeu.

<Solution>

```js
function startGame() {
	const emojis = getRandomEmojis();
	displayEmojis(emojis);

	setTimeout(hideEmojis, 5000);

	setTimeout(() => {
		askQuestion(emojis);
	}, 5100);
}
```

</Solution>

#### 6. Pour aller plus loin

1. Faire en sorte que le jeu boucle tant que l'utilisateur ne trouve pas la bonne réponse, en affichant les emojis pendant 5 secondes puis en posant une nouvelle question.

2. Faire en sorte que le jeu augmente en difficulté à chaque fois que l'utilisateur trouve la bonne réponse, en ajoutant un emoji supplémentaire à chaque tour. Afficher un compteur de niveau. Si l'utilisateur se trompe, le niveau est réinitialisé à 1.
