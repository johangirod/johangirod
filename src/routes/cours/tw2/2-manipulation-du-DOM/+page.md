<script>
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
</script>

<Reveal>
    <Slides/>
</Reveal>

## Exercices / TP

### Mise en place

Ce TP est disponible sur gitlab. Vous pouvez le cloner avec la commande suivante

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-2.git
```

Utilisez les identifiants de votre compte universitaire pour vous connecter.

Ouvrez le dossier `tp-2` dans votre éditeur de code (VSCode par exemple).

Ce projet contient un fichier `index.html` et un fichier `script.js`. Le fichier `script.js` est vide. C'est dans ce fichier que vous allez écrire votre code JavaScript.

Ouvrez le fichier `index.html` dans votre navigateur.

### Exercice 1 : modifier un élément avec la console

Nous allons nous familiariser avec la modification du DOM en utilisant la console du navigateur.

1. Faire un clique droit sur la page et sélectionner « Inspecter » dans le menu contextuel. Cela ouvre l'inspecteur du navigateur et affiche le code HTML correspondant.
2. Cliquez sur l'onglet console et tapez la commande suivante :

   ```js
   $0;
   ```

   Que contient la variable `$0` ? Essayez de modifier l'élément selectionné dans l'inspecteur et de taper la commande `$0` à nouveau. Que se passe-t-il ?

3. Faire en sorte que $0 pointe vers le noeud DOM `<p>` qui contient le texte « Bonjour tout le monde ! ». Vous pouvez vous aider du bouton « selection » en haut à gauche de l'inspecteur (sous forme de pointeur de souris). Il vous permet de selectionner un élement directement depuis la page web.
4. Dans la console, tapez la commande suivante pour changer le texte de l'élément sélectionné :
   ```js
   $0.textContent = 'Bonjour les amis !';
   ```
5. Changez la couleur du texte en rouge en utilisant la propriété `style de l'élément ([voir la slide](#/2/3)).
6. Supprimer le noeud de la page en utilisant la méthode `remove()`.

### Exercice 2 : modifier un élément avec du code JavaScript

Nous allons réaliser une diapositive d'images qui changent toute les 2 secondes.

1. Créez un fichier `script.js` et liez au fichier `index.html` en utilisant la balise `<script>` dans le `<head>` du fichier `index.html`.

```html
<script defer async src="./script.js"></script>
```

2. Dans le fichier `script.js`, récuperez le noeud existant de l'image dans une variable `imageNode`. Le noeud HTML est une image `img` avec pour id `diapo`.

3. Créez une fonction `changeImage()` qui change l'attribut `src` pour une image aléatoire. Pour cela, générez un id aléatoire entre 1 et 500 et utilisez cet id pour construire l'url de l'image. Par exemple, si l'id aléatoire est 3, l'url vers l'image sera `https://picsum.photos/id/3/400/400`.

4. Appelez la fonction `changeImage()` toutes les 2 secondes en utilisant la fonction [`setInterval`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).

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

### Exercice 3 : Remplacer des éléments avec du code JavaScript

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

Nous allons développer un petit jeu de mémoire. Le but est de faire apparaitre 5 emoji aléatoires pendant 10 secondes. Ensuite, les emoji disparaissent et on pose la question à l'utilisateur : « Sous quelle carte se trouve l'emoji X ? ». L'utilisateur doit répondre en tapant le numéro de la carte. On retourne alors la carte correspondante à la réponse de l'utilisateur. Si la réponse est correcte, on affiche un message de félicitation.

1. Créez une fonction `getRandomEmojis()` qui retourne un tableau de 5 emoji aléatoires. Pour cela vous pourrez utiliser le tableau de base suivant :

   ```js
   // prettier-ignore
   const emojis = [ '⛔️', '❇️', '🏰', '🐺', '⚜', '😅', '🚳', '🕞', '❣', '🏬', '🛎', '🌕', '🌃', '🏡', '🎑', '🍯', '🐍', '🔕', '🐿', '💮', '😹', '↕️', '🌵', '🕗', '♒️', '🚽', '🕋', '📔', '🛂', '🎒', '🐼', '♏️', '⏸', '🅰️', '🌈', '🌂', '🚣', '🎇', '❄️', '👙', '🌹', '🍸', '🛳', '🎟', '😱', '🕚', '👳', '😑', '⌚️', '💛', '🆚', '🔼', '🈯️', '☀️', '😳', '♊️', '🌖', '♋️', '🚀', '🚱', '🚊', '📿', '⏫', '9️⃣', '🗾', '🏜', '🍦', '✋', '🍀', '🗿', '🙎', '✖️', '🆕', '🎮', '🔒', '💸', '👲', '🏢', '🔑', '🐶', '👪', '😻', '🌼', '👠', '🧀', '👎', '🙌', '🐻', '🕐', '👯', '🕝', '😺', '😈', '💴', '🎾', '🚙', '❤️', '♑️', '🌲'];
   ```

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

2. Creer une fonction `displayEmojis(emojis)` qui prend en paramètre un tableau d'emoji et qui affiche les emoji dans le tag `<ol>` avec l'id `emoji-game`. Chaque emoji sera affichée dans un element `<li>`, par exemple : `<li>☀️</li>`.

   <Solution>

   ```js
   function displayEmojis(emojis) {
   	const emojisNode = document.querySelector('ol#emoji-game');
   	emojisNode.innerHTML = '';
   	emojis.forEach((emoji) => {
   		const emojiNode = document.createElement('li');
   		emojiNode.textContent = emoji;
   		emojisNode.appendChild(emojiNode);
   	});
   }
   ```

   </Solution>

3. Créer une fonction `startGame` qui appel successivement les fonctions `getRandomEmojis` et `displayEmojis`, puis appelez-là dans le corps du script. Vérifiez que les emojis s'affichent bien dans le navigateur.

   <Solution>

   ```js
   function startGame() {
   	const emojis = getRandomEmojis();
   	displayEmojis(emojis);
   }
   startGame();
   ```

   </Solution>

4. Créer une fonction `hideEmoji` qui cache l'emoji de chacune des carte en modifiant la couleur à `transparent`. Appelez cette fonction dans startGame() après 5 secondes. Vous pouvez utiliser la fonction [`setTimeout`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) pour appeler une fonction après un certain délai.

   <Solution>

   ```js
   function hideEmoji() {
   	const emojiCards = document.querySelectorAll('ol > li');
   	emojiCards.forEach((emojiCard) => {
   		emojiCard.style.color = 'transparent';
   	});
   }

   function startGame() {
   	const emojis = getRandomEmojis();
   	displayEmojis(emojis);
   	setTimeout(hideEmoji, 5000);
   }
   ```

   </Solution>

5. Créer une fonction `askQuestion(randomEmojis)` qui pose la question à l'utilisateur : « Sous quelle carte se trouve l'emoji <x> ? ». `<x>` étant une des emojis qui se trouve sous une carte. Vous pourrez utiliser la fonction `prompt` vu au TP précédent. Cette fonction renvoie `true` si la réponse de l'utilisateur est correcte et `false` sinon.

Appeler cette fonction après 5100 millisecondes avec la fonction `setTimeout`.

   <Solution >

```js
function askQuestion(randomEmojis) {
	const randomIndex = Math.floor(Math.random() * randomEmojis.length);
	const randomEmoji = randomEmojis[randomIndex];
	const answer = prompt(`Sous quelle carte se trouve l'emoji "${randomEmoji}" ?`);
	return answer === randomIndex.toString();
}

function startGame() {
	const emojis = getRandomEmojis();
	displayEmojis(emojis);
	setTimeout(hideEmoji, 5000);
	setTimeout(() => {
		askQuestions(randomEmojis);
	}, 5100);
}
```

   </Solution>

6. Si la réponse de l'utilisateur est correcte, réafficher toutes les emojis et ajouter la class "success" à la `div` avec l'id `emojis`. Pour cela, on créera une fonction anonyme qui sera passée en argument de setTimeout, et qui appellera la fonction `askQuestion`

   <Solution>

   ```js
   function startGame() {
   	const emojis = getRandomEmojis();
   	displayEmojis(emojis);
   	setTimeout(hideEmoji, 5000);

   	setTimeout(() => {
   		const isCorrect = askQuestion(emojis);
   		if (isCorrect) {
   			document.querySelector('#emoji-game').classList.add('success');
   		}
   	}, 5100);
   }
   ```

   </Solution>

7. Si la réponse de l'utilisateur est incorrecte, réafficher toutes les emojis, et afficher le texte « Perdu 😔 » dans la `div` avec l'id `emoji-game-message`.

   <Solution>

   ```js
   function startGame() {
   	const emojis = getRandomEmojis();
   	displayEmojis(emojis);
   	setTimeout(hideEmoji, 5000);
   	setTimeout(() => {
   		const isCorrect = askQuestion(emojis);
   		displayEmojis(emojis);
   		if (isCorrect) {
   			document.querySelector('#emoji-game').classList.add('success');
   		} else {
   			document.querySelector('#emoji-game-message').textContent = 'Perdu 😔';
   		}
   	}, 5100);
   }
   ```

   </Solution>

8. Bonus :

- Faire en sorte que le jeu boucle tant que l'utilisateur ne trouve pas la bonne réponse, en affichant les emojis pendant 5 secondes puis en posant une nouvelle question.
- Faire en sorte que le nombre d'emoji soit paramétrable.
- Afficher le nombre d'essais de l'utilisateur lorsque l'utilisateur trouve la bonne réponse.
