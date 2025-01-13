<script>
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import Message from '$lib/Message.svelte';
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

Ce projet contient un fichier `index.html` et un fichier `script.js`. Le fichier `script.js` est vide. C'est dans ce fichier que vous allez écrire votre code JavaScript.

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

1. Pour commencer, faire en sorte que le fichier `script.js` soit exécuté au chargement de la page. Pour cela, il faudra ajouter un lien grâce à la balise `<script>` dans le `<head>` du fichier `index.html`.

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

2. Créez une fonction `changeImage()` qui change l'attribut `src` de l'image pour pointer vers image aléatoire.

   Dans la fonction, générez un id aléatoire entre 1 et 500 et utilisez cet id pour construire l'url de l'image. Par exemple, si l'id aléatoire est 3, l'url vers la nouvelle image sera `https://picsum.photos/id/3/400/400`.

   Changez l'attribut `src` de l'image pour pointer vers cette nouvelle url.

3. Appelez la fonction `changeImage()` toutes les 2 secondes en utilisant la fonction [`setInterval`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).

   ```js
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

Écrire un script qui cache tous les éléments avec la class `hidden` par un rectangle noir (on pourra utiliser l'attribut `style` pour changer la couleur de fond).

<Solution >

```js
const confidentialElements = document.querySelectorAll('.hidden');
confidentialElements.forEach((element) => {
	element.style.backgroundColor = 'black';
});
```

</Solution>

### Exercice 4 : Un memory en JavaScript

Nous allons développer un petit jeu de mémoire.

Le but est de faire apparaitre 5 cartes contenant des emojis aléatoires pendant 10 secondes. Ensuite, les emojis disparaissent et on pose la question à l'utilisateur : « Sous quelle carte se trouve l'emoji X ? ».

L'utilisateur doit répondre en tapant le numéro de la carte. Si la réponse est correcte, on affiche un message de félicitation. Sinon, on réaffiche les emojis et on affiche un message d'échec.

#### 1. Selections des emojis

Créez une fonction `getRandomEmojis()` qui retourne un tableau de 5 emojis aléatoires. Pour cela vous pourrez utiliser le tableau de base suivant :

```js
// prettier-ignore
const emojis = [ '⛔️', '❇️', '🏰', '🐺', '⚜', '😅', '🚳', '🕞', '❣', '🏬', '🛎', '🌕', '🌃', '🏡', '🎑', '🍯', '🐍', '🔕', '🐿', '💮', '😹', '↕️', '🌵', '🕗', '♒️', '🚽', '🕋', '📔', '🛂', '🎒', '🐼', '♏️', '⏸', '🅰️', '🌈', '🌂', '🚣', '🎇', '❄️', '👙', '🌹', '🍸', '🛳', '🎟', '😱', '🕚', '👳', '😑', '⌚️', '💛', '🆚', '🔼', '🈯️', '☀️', '😳', '♊️', '🌖', '♋️', '🚀', '🚱', '🚊', '📿', '⏫', '9️⃣', '🗾', '🏜', '🍦', '✋', '🍀', '🗿', '🙎', '✖️', '🆕', '🎮', '🔒', '💸', '👲', '🏢', '🔑', '🐶', '👪', '😻', '🌼', '👠', '🧀', '👎', '🙌', '🐻', '🕐', '👯', '🕝', '😺', '😈', '💴', '🎾', '🚙', '❤️', '♑️', '🌲'];
```

Cette fonction peut être implémentée de la manière suivante :

- Créer un tableau vide `randomEmojis`
- Tant que la longueur de `randomEmojis` est inférieure à 5 :
  - Générer un index aléatoire entre 0 et la longueur du tableau `emojis`
  - Récupérer l'emoji correspondant à cet index
  - Si l'emoji n'est pas déjà dans `randomEmojis`, l'ajouter
- Une fois que `randomEmojis` contient 5 emojis, retourner le tableau

Testez cette fonction en l'appelant avec `console.log(getRandomEmojis())`, et vérifiez que 5 emojis différents sont affichés dans la console du navigateur.

<Solution >

```js
function getRandomEmojis() {
	const randomEmojis = [];
	while (randomEmojis.length < 5) {
		const randomIndex = Math.floor(Math.random() * emojis.length);
		const randomEmoji = emojis[randomIndex];
		if (!randomEmojis.includes(randomEmoji)) {
			randomEmojis.push(randomEmoji);
		}
	}
	return randomEmojis;
}
```

</Solution>

#### 2. Affichage des emojis

Creer une fonction `displayCards(emojis)` qui prend en paramètre un tableau d'emojis et qui les affiche dans le navigateur, en les ajoutant à la liste ordonnée (`ol`) avec l'id `emoji-game`.

- Selectionnez cet élément dans une variable `emojisContainer` grâce à la fonction `document.querySelector`.
- Réinitialisez le contenu de cet élément avec la propriété `innerHTML` à une chaîne vide.
- Pour chaque emoji du tableau passé en argument
  - créer un élément `li` avec `document.createElement`
  - modifier son contenu avec la propriété `textContent`
  - ajouter cet élément à `emojisContainer` avec la méthode `appendChild`

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

Créer une fonction `hideCards` qui cache le contenu en modifiant la couleurd de chacune des cartes à `transparent`.

Pour sélectionner les cartes, on pourra utiliser la méthode `querySelectorAll` avec le sélecteur CSS approprié.

Testez cette fonction en appelant `hideEmojis` après avoir affiché les emojis.

<Solution>

```js
function hideCards() {
	const emojiCards = document.querySelectorAll('ol > li');
	emojiCards.forEach((emojiCard) => {
		emojiCard.style.color = 'transparent';
	});
}
```

</Solution>

#### 4. Poser une question à l'utilisateur

Créer une fonction `askQuestion` avec les spécifications suivantes : , et pose la question à l'utilisateur : « Quelle est le numéro de la carte avec l'emoji <x> ? » (avec <x> l'emoji choisie).

- Cette fonction prend en paramètre le tableau des emojis affichés.
- Un emoji est choisi aléatoirement dans ce tableau.
- On pose à l'utilisateur la question « Quelle est le numéro de la carte avec l'emoji <x> ? ». (avec <x> l'emoji choisie). On pourra utiliser la fonction `prompt` pour cela.
- Si l'utilisateur répond correctement, la fonction affiche un message de félicitation :
  - Ajoutez une classe `success` à la liste ordonnée contenant les emojis (cela lancera une animation CSS).
  - Ajouter un message de félicitation dans la `div` avec l'id `emoji-game-message` (par exemple : « Bravo 🎉 ! »).
- Si l'utilisateur répond incorrectement, alors réafficher tous les emojis et afficher un message d'échec dans la `div` avec l'id `emoji-game-message` (par exemple : « Perdu 😔 »).

Testez que la fonction `askQuestion` fonctionne en l'appelant avec un tableau d'emojis (vous pouvez afficher la solution dans le texte de la question pour tester le cas où l'utilisateur répond correctement).

<Solution>

```js
function askQuestion(randomEmojis) {
	const randomIndex = Math.floor(Math.random() * randomEmojis.length);
	const randomEmoji = randomEmojis[randomIndex];
	const answer = prompt(`Sous quelle carte se trouve l'emoji "${randomEmoji}" ?`);
	if (answer === randomIndex.toString()) {
		document.querySelector('ol#emoji-game').classList.add('success');
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

2. Utilisez la fonction `setTimeout` pour appeler la fonction `hideEmoji` après 5 secondes.

   ```js
   setTimeout(hideEmoji, 5000);
   ```

3. Utilisez la fonction `setTimeout` pour appeler la fonction `askQuestion` après 5 secondes et 100 millisecondes.
4. Appelez la fonction `startGame` pour lancer le jeu.

<Solution>

```js
function startGame() {
	const emojis = getRandomEmojis();
	displayEmojis(emojis);

	setTimeout(hideEmoji, 5000);

	setTimeout(() => {
		askQuestion(emojis);
	}, 5100);
}
```

</Solution>

#### 6. Pour aller plus loin

1. Faire en sorte que le jeu boucle tant que l'utilisateur ne trouve pas la bonne réponse, en affichant les emojis pendant 5 secondes puis en posant une nouvelle question.

2. Faire en sorte que le jeu augmente en difficulté à chaque fois que l'utilisateur trouve la bonne réponse, en ajoutant un emoji supplémentaire à chaque tour. Afficher un compteur de niveau. Si l'utilisateur se trompe, le niveau est réinitialisé à 1.
