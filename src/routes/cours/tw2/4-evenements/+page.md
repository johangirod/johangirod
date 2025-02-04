<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import { showSolution } from '$lib/showSolution.ts';

	showSolution.set(true);
</script>

<Reveal>
    <Slides/>
</Reveal>

## TP 4 UrbeXplorer

Dans ce TP, nous allons réaliser une application web pour trouver des lieux abandonnés à explorer. Le but est de pouvoir filtrer les lieux par type, d'ajouter une recherche, et de mettre en place des tris par difficulté d'accès et par avis des utilisateurs, à partir d'une page html existante.

### Mise en place

1. Cloner le projet en utilisant la commande suivante

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-4.git
```

Vous utiliserez les identifiants de votre compte universitaire pour vous connecter.

**Important** : Cette étape est obligatoire pour ce TP. En effet, vous sauvegarderez votre travail sur le dépôt gitlab de l'université. Vous pourrez ainsi récupérer votre travail à la prochaine séance beaucoup plus facilement. Si vous ne parvenez pas à cloner le projet, demandez de l'aide à votre enseignant.

2. Ouvrez le dossier `tp-4` dans votre éditeur de code (VSCode par exemple).

Ce projet contient un fichier `index.html` et un fichier `script.js`. Le fichier `script.js` est vide. C'est dans ce fichier que vous allez écrire votre code JavaScript.

Vous pouvez ouvrir le fichier `index.html` dans votre navigateur pour voir le rendu de la page. Elle contient une liste de lieux abandonnés à explorer, avec des images, des descriptions, des avis, etc.

3. **En fin de TP**, pensez à sauvegarder votre travail sur le dépôt gitlab de l'université. Pour cela, ouvrez un terminal dans le dossier `tp-4` et tapez les commandes suivantes, en remplaçant `<branch>` par le nom votre prénom et nom, en remplacant les espace par des tiret : `prenom.nom`.

```bash
git checkout -b <branch>
git add .
git commit -m "TP 4 - seance 1"
git push origin <branch>
```

4. **Pour récupérer votre travail à la prochaine séance**, vous pourrez utiliser la commande suivante :

```bash
git config --global user.name "prenom.nom"
git config --global user.email "votremail@univ-jfc.fr"
git clone https://sources.univ-jfc.fr/techno-web-2/tp-4.git
cd tp-4
git checkout <branch>
```

en remplaçant `<branch>` par le nom de votre branche sauvegardée au TP précédent.

### Exercice 1 : Ajouter et enlever la modale d'avertissement

Au tout début du fichier `index.html`, vous trouverez le code de la modale d'avertissement. Une modale est une fenêtre qui s'affiche par dessus le reste de la page. Ici, elle est implémentée en utilisant l'élément HTML `<dialog>`, qui est celui à utiliser pour implémenter une modale.

1. Faire en sorte que la modale s'affiche au chargement de la page :

   - Créer une fonction `renderModal` dans le fichier `script.js`.
   - Dans cette fonction, récupérez l'élément `<dialog>` dans une variable `modal`.
   - Utilisez la méthode `showModal()` de l'élément `<dialog>` pour afficher la modale.
   - Appelez cette fonction

2. Faire en sorte que la modale se ferme quand on clique sur le bouton "J'ai compris"

   - Dans la même fonction, récupérez le bouton "J'ai compris" dans une variable `button`.
   - Ajoutez un écouteur d'événement "click" sur le bouton (avec la méthode `addEventListener`).
   - Dans la fonction de rappel de l'écouteur d'événement, utilisez la méthode `close()` de l'élément `<dialog>` pour fermer la modale.

3. Tester que tout fonctionne correctement : la modale doit s'afficher au chargement de la page, et se fermer quand on clique sur le bouton "J'ai compris".

_**Astuce** : pour éviter d'avoir à refermer la modale à chaque fois que vous rechargez la page pour les exercices suivants, vous pouvez commenter l'appel à la fonction `renderModal`._

<Solution>

```js
function renderModal() {
	const modal = document.querySelector('dialog');
	modal.showModal();
	const button = modal.querySelector('button');
	button.addEventListener('click', () => {
		modal.close();
	});
}

renderModal();
```

</Solution>

### Exercice 2 : faire défiler les images au hover

Dans le fichier `index.html`, vous pourrez voir que chaque lieu est représenté par un élément `<article>`. Chaque article contient un titre, ainsi que plusieurs images. Seule l'image avec la classe `displayed` est visible. L'objectif de cet exercice est de faire défiler les images au survol de la souris.

1. Première étape : créer la fonction de défilement

   - Créer une fonction `loopImage` dans le fichier `script.js`.
   - Cette fonction prendra en paramètre un élément `<article>`.
   - Lorsque cette fonction est appelée, elle doit faire en sorte que l'image suivante s'affiche. Pour cela, il faudra déplacer la classe `displayed`. Si l'image affichée est la dernière, elle doit revenir à la première.
   - Testez que cette fonction fonctionne en appelant `loopImage` dans la console de votre navigateur.

2. Deuxième étape : appeler la fonction sur chaque élément `<article>`

   - Pour chaque élément `<article>`, appelez-la fonction `loopImage` toute les secondes avec `setInterval`
   - Testez que les images défilent correctement.

3. Troisième étape : faire en sorte que les images défilent seulement au survol de la souris

   - Ajoutez un écouteur d'événement "mouseenter" sur chaque élément `<article>`, et déplacez l'appel à `setInterval` dans la fonction de rappel de cet écouteur. Stockez l'identifiant de l'intervalle dans une variable `intervalId` pour pouvoir l'arrêter plus tard. L'identifiant de l'intervalle est retourné par la fonction `setInterval`.
   - Ajoutez un écouteur d'événement "mouseleave" sur chaque élément `<article>`, et utilisez la méthode `clearInterval` avec l'identifiant de l'intervalle pour arrêter le défilement.
   - Bonus : pour plus de réactivité, vous pouvez faire en sorte que la fonction `loopImage` soit appelée immédiatement au survol de la souris, et non pas après une seconde.

4. Tester que tout fonctionne correctement : les images doivent défiler au survol de la souris, et s'arrêter quand la souris quitte l'élément `<article>`.

<Solution>

```js
function loopImages(article) {
	const currentImage = article.querySelector('.displayed');
	currentImage.classList.remove('displayed');
	const nextImage = currentImage.nextElementSibling || article.querySelector('.img-container img');
	nextImage.classList.add('displayed');
}

document.querySelectorAll('article').forEach((article) => {
	let intervalId;
	article.addEventListener('mouseenter', () => {
		intervalId = setInterval(() => {
			loopImages(article);
		}, 1000);
	});
	article.addEventListener('mouseleave', () => {
		clearInterval(intervalId);
	});
});
```

</Solution>

### Exercice 3 : Filtrer par type de lieu

Chaque lieu a un type, qui est indiqué dans le dataset de l'élément `<article>`. L'objectif de cet exercice est de faire en sorte que l'utilisateur puisse filtrer les lieux par type.

Le bouton de filtre est déjà présent dans le fichier `index.html`. Il est représenté par un élément `<select>` qui a comme id `category`.

1. Créer une fonction `filterByCategory` dans le fichier `script.js`. Cette fonction prendra le type de lieu à filtrer en paramètre. Elle devra cacher les lieux qui ne correspondent pas et afficher ceux qui correspondent.

   - `filterByCategory("industriel")` doit cacher les lieux qui ne sont pas de type "industriel" et afficher ceux qui le sont.
   - `filterByCategory("all")` doit afficher tous les lieux.

   Pour cacher un élément, vous pouvez utiliser la méthode `style.display = "none"`. Pour le réafficher, on utilisera `style.display = ""`.

2. Tester cette fonction en appelant `filterByCategory` dans la console de votre navigateur.
3. Ajouter un écouteur d'événement "change" sur l'élément `<select>`. Dans la fonction de rappel de cet écouteur, appelez la fonction `filterByCategory` avec la valeur de l'élément `<select>` en paramètre.
4. Tester que tout fonctionne correctement : les lieux doivent se filtrer en fonction du type sélectionné.

<Solution>

```js
function filterByCategory(category) {
	const articles = Array.from(document.querySelectorAll('article'));
	articles.forEach((article) => {
		article.style.display = 'none';
		if (article.dataset.category === category || category === 'all') {
			article.style.display = '';
		}
	});
}

document.querySelector('select#category').addEventListener('change', (event) => {
	filterByCategory(event.target.value);
});
```

</Solution>

### Exercice 4 : implémenter le tri

Les boutons de tri sont déjà présents dans le fichier `index.html`.

1. Retrouvez l'endroit où ils sont définis. Quel élément est utilisé ? Comment sont-ils liés entre eux ?
   <Solution>

   Les boutons de tri sont des éléments `<input type="radio">` qui ont comme attribut `name` la valeur "sort". Ils sont liés entre eux grâce à cet attribut, qui permet de n'en sélectionner qu'un à la fois.

   </Solution>

2. Créer une fonction `sortBy` dans le fichier `script.js`. Cette fonction prendra le type de tri à effectuer en paramètre (on ne prend pas en compte l'ordre croissant ou décroissant pour commencer)

   ```js
   // Exemple d'appel
   sortBy('difficulty'); // tri par difficulté d'accès
   ```

   **A noter** : un élément du DOM ne peut pas se retrouver à deux endroits en même temps. Pour le déplacer, il suffit juste de l'insérer à un autre endroit (il sera automatiquement retiré de son emplacement précédent).

3. Tester cette fonction en appelant `sortBy` dans la console de votre navigateur.
   _\*\*A noter : il y a une erreur dans le code HTML : la riziere n'a pas la bonne valeur pour le data-diffulty_

4. Ajouter un écouteur d'événement "change" pour les boutons de selection du tri.
5. Dans la fonction de rappel de cet écouteur, récupérez la nature du tri a effectuer (difficulté ou avis)

   Pour cela, vous pouvez utiliser le selecteur `input[name="sort"]:checked`.

   Ce dernier récupère le premier élément `<input>` de type "radio" qui a comme attribut `name` la valeur "sort" et qui est sélectionné.

6. Tester que tout fonctionne correctement : les lieux doivent se trier en fonction du type sélectionné.

   <Solution >

   ```js
   function sortBy(name) {
   	// On transforme en tableau pour pouvoir appeler la méthode `sort`
   	const articles = Array.from(document.querySelectorAll('article'));
   	articles.sort((a, b) => {
   		return a.dataset[name] < b.dataset[name] ? 1 : -1;
   	});
   	const articlesContainer = document.querySelector('div[role="list"]');
   	articles.forEach((article) => articlesContainer.appendChild(article));
   }

   document.querySelectorAll('input[type="radio"]').forEach((input) =>
   	input.addEventListener('change', () => {
   		const triSelectionné = document.querySelector('input[name="sort"]:checked').value;
   		sortBy(triSelectionné);
   	})
   );
   ```

   </Solution>

7. Faire en sorte que les boutons pour sélectionner l'ordre croissant ou décroissant fonctionnent.

<Solution >

```js
function sortBy(name, order) {
	// On transforme en tableau pour pouvoir appeler la méthode `sort`
	const articles = Array.from(document.querySelectorAll('article'));
	articles.sort((a, b) => {
		if (order === 'ascending') {
			return a.dataset[name] < b.dataset[name] ? 1 : -1;
		} else {
			return a.dataset[name] > b.dataset[name] ? 1 : -1;
		}
	});
	const articlesContainer = document.querySelector('div[role="list"]');
	articles.forEach((article) => articlesContainer.appendChild(article));
}

document.querySelectorAll('input[type="radio"]').forEach((input) =>
	input.addEventListener('change', () => {
		const sort = document.querySelector('input[name="sort"]:checked').value;
		const order = document.querySelector('input[name="order"]:checked').value;
		sortBy(sort, order);
	})
);
```

</Solution>

### Exercice 5 : Ajouter une recherche

Pour la recherche, nous allons ajouter un élément `<input>` de type "text" qui a comme id `search`.

L'objectif est de faire en sorte que l'utilisateur puisse taper un mot dans cet élément, et que les lieux qui ne contiennent pas ce mot dans leur titre soient cachés.

Créer une fonction `search` dans le fichier `script.js`. Cette fonction prendra le mot à rechercher en paramètre, et cachera les lieux qui ne contiennent pas ce mot dans leur titre.

Cette fonction doit être appelée à chaque fois que l'utilisateur tape une lettre dans l'élément `<input>`. Pour cela, ajoutez un écouteur d'événement "input" sur cet élément.

<Solution >

```js
function search(query) {
	const articles = Array.from(document.querySelectorAll('article'));
	articles.forEach((article) => {
		const title = article.querySelector('h3').textContent;
		if (!title.toLowerCase().includes(query.toLowerCase())) {
			article.style.display = 'none';
		}
	});
}

function resetFilter() {
	const articles = Array.from(document.querySelectorAll('article'));
	articles.forEach((article) => {
		article.style.display = '';
	});
}

function updateFilter() {
	resetFilter();
	filterByCategory(document.querySelector('select#category').value);
	search(document.querySelector('input#search').value);
}

document.querySelector('input#search').addEventListener('input', updateFilter);
document.querySelector('select#category').addEventListener('change', updateFilter);
```

</Solution>

### Exercice 6 : Ajouter la distance entre l'utilisateur et le lieu et ajouter un tri par distance

1. Créer une fonction qui récupère la position de l'utilisateur en utilisant la méthode [`navigator.geolocation.getCurrentPosition`](https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition). Cette méthode prend en paramètre une fonction de callback qui sera appelée avec la position de l'utilisateur en paramètre.
2. Modifier les lieux pour ajouter la distance entre l'utilisateur et le lieu. Pour cela, vous pouvez utiliser la méthode `haversine` (ci-dessous) qui prend en paramètre deux coordonnées géographiques et retourne la distance en kilomètres. Les coordonnées de chaque lieu sont stockées dans le dataset de l'élément `<article>`.

```js
function haversine([lat1, lon1], [lat2, lon2]) {
	toRad = function (n) {
		return (n * Math.PI) / 180;
	};
	const R = 6371; // km
	const x1 = lat2 - lat1;
	const dLat = toRad(x1);
	const x2 = lon2 - lon1;
	const dLon = toRad(x2);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c;
	return d;
}
```

3. Ajouter une option de tri par distance dans le groupe de boutons radio. Quand cette option est sélectionnée, les lieux doivent être triés par distance croissante par rapport à la position de l'utilisateur.

<Solution>

```js
navigator.geolocation.getCurrentPosition((position) => {
	document.querySelectorAll('article').forEach((article) => {
		const lat = Number.parseFloat(article.dataset.lat);
		const lon = Number.parseFloat(article.dataset.lng);
		const distance = haversine([position.coords.latitude, position.coords.longitude], [lat, lon]);
		const distanceSpan = document.createElement('span');
		article.dataset.distance = distance;
		distanceSpan.textContent = `Distance : ${Math.round(distance)} km`;
		article.appendChild(distanceSpan);
	});
});

function haversine([lat1, lon1], [lat2, lon2]) {
	toRad = function (n) {
		return (n * Math.PI) / 180;
	};
	const R = 6371; // km
	const x1 = lat2 - lat1;
	const dLat = toRad(x1);
	const x2 = lon2 - lon1;
	const dLon = toRad(x2);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c;
	return d;
}
```

</Solution>
