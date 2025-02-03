<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
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

**Important** : Cette étape est obligatoire pour ce TP. En effet, vous sauvegarderez votre travail sur le dépôt gitlab de l'université. Vous pourrez ainsi récupérer votre travail à la prochaine séance. Si vous ne parvenez pas à cloner le projet, demandez de l'aide à votre enseignant.

1. Ouvrez le dossier `tp-4` dans votre éditeur de code (VSCode par exemple).

```bash
cd tp-4
code .
```

Ce projet contient un fichier `index.html` et un fichier `script.js`. Le fichier `script.js` est vide. C'est dans ce fichier que vous allez écrire votre code JavaScript.

Vous pouvez ouvrir le fichier `index.html` dans votre navigateur pour voir le rendu de la page. Elle contient une liste de lieux abandonnés à explorer, avec des images, des descriptions, des avis, etc.

1. **En fin de TP**, pensez à sauvegarder votre travail sur le dépôt gitlab de l'université. Pour cela, ouvrez un terminal dans le dossier `tp-4` et tapez les commandes suivantes, en remplaçant `prenom` et `nom` par votre prénom et nom :

```bash
git config --global user.name "Votre nom"
git config --global user.email "votremail@univ-jfc.fr"
```

```bash
git checkout -b prenom.nom
git add :/
git commit -m "TP 4 - seance 1"
git push -u
```

4. **Pour récupérer votre travail à la prochaine séance**, vous pourrez utiliser la commande suivante :

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-4.git
cd tp-4
git checkout prenom.nom
```

### Exercice 1 : Ajouter et enlever la modale d'avertissement

Au tout début du fichier `index.html`, vous trouverez le code de la modale d'avertissement. Une modale est une fenêtre qui s'affiche par dessus le reste de la page. Ici, elle est implémentée en utilisant l'élément HTML `<dialog>`, qui est celui à utiliser pour implémenter une modale.

1. Faire en sorte que la modale s'affiche au chargement de la page :

   - Créer une fonction `displayModal` dans le fichier `script.js`.
   - Dans cette fonction, récupérez l'élément HTML `<dialog>` dans une variable `modal`.
   - Utilisez la méthode `modal.showModal()` pour afficher la modale.
   - Appelez `displayModal`.

2. Faire en sorte que la modale se ferme quand on clique sur le bouton "J'ai compris"

   - Dans la même fonction, récupérez le noeud DOM du bouton "J'ai compris" dans une variable `button`.
   - Ajoutez un écouteur d'événement "click" sur le bouton (avec la méthode `addEventListener`).
   - Dans la fonction de rappel de l'écouteur d'événement, appelez la méthode `modal.close()` pour fermer la modale.

3. Tester que tout fonctionne correctement : la modale doit s'afficher au chargement de la page, et se fermer quand on clique sur le bouton "J'ai compris".

_**Astuce** : pour éviter d'avoir à refermer la modale à chaque fois que vous rechargez la page pour les exercices suivants, vous pouvez commenter l'appel à la fonction `displayModal`._

<Solution>

```js
function displayModal() {
	const modal = document.querySelector('dialog');
	modal.showModal();
	const button = modal.querySelector('button');
	button.addEventListener('click', () => {
		modal.close();
	});
}

displayModal();
```

</Solution>

### Exercice 2 : faire défiler les images au hover

Dans le fichier `index.html`, vous pourrez voir que chaque lieu est représenté par un élément `<article>`. Chaque article contient un titre, ainsi que plusieurs images. Seule l'image avec la classe `displayed` est visible. L'objectif de cet exercice est de faire défiler les images au survol de la souris.

#### Première étape : créer la fonction de défilement

Nous allons créer une fonction qui change l'image affichée à chaque fois qu'elle est appellée. Pour cela, elle déplacera la classe `displayed` sur l'image suivante.

1. Créer une fonction `loopImage` dans le fichier `script.js`. Cette fonction prendra en paramètre `article`, l'élément DOM `<article>` sur lequel elle doit opérer.
2. Dans cette fonction, récupérez l'image actuellement affichée dans l'élément `article` (on pourra utiliser `article.querySelector`) dans une variable `currentImage`.
3. Supprimez la classe `displayed` de l'image actuelle.
4. Récupérez l'image suivante dans une variable `nextImage` (on pourra utiliser la propriété `nextElementSibling` par exemple).
5. Si `nextElementSibling` est `null`, cela signifie que l'image actuelle est la dernière. Dans ce cas, faire en sorte que la variable `nextImage` contienne la première image de l'élément `article`.
6. Ajoutez la classe `displayed` à l'image suivante.

Testez que cette fonction fonctionne en appelant par exemple `loopImage(document.querySelector('article'))` dans la console de votre navigateur.

<Solution>

```js
function loopImages(article) {
	const currentImage = article.querySelector('img.displayed');
	currentImage.classList.remove('displayed');
	let nextImage = currentImage.nextElementSibling;
	if (!nextImage) {
		nextImage = article.querySelector('.img-container img');
	}
	nextImage.classList.add('displayed');
}

loopImages(document.querySelector('article'));
```

</Solution>

#### Deuxième étape : faire défiler les images

1. Faire en sorte que les images du premier lieu défilent automatiquement chaque seconde. Pour cela, appelez-la fonction `loopImage` toute les secondes avec `setInterval`

2. Généraliser le défilement automatique à tous les lieux.

#### Troisième étape : les images défilent seulement au survol de la souris

Nous allons maintenant faire en sorte que les images ne défilent que lorsque la souris est sur le lieu. Pour cela, nous allons utiliser les événements `mouseenter` et `mouseleave`.

`mouseenter` est déclenché quand la souris entre dans un élément, et `mouseleave` quand elle en sort.

1. **Débuter le défilement au survol**. Ajoutez un écouteur d'événement sur chaque élément `<article>`, et déplacez l'appel à `setInterval` dans la fonction de rappel de cet écouteur,

2. **Arrêter le défilement quand la souris quitte le lieu**. Il vous faudra annuler le `setInterval` débuté précédement. Comment ? En utilisant la fonction `clearInterval`, avec comme paramètre l'identifiant de l'intervalle retourné par `setInterval`.

   ```js
   // exemple
   const intervalId = setInterval(() => {
   	console.log('Hello');
   }, 1000);

   clearInterval(intervalId); // arrête l'intervalle
   ```

3. Pour plus de réactivité, vous pouvez faire en sorte que la fonction `loopImage` soit appelée immédiatement au survol de la souris, puis toute les secondes.

Tester que tout fonctionne correctement : les images doivent défiler au survol de la souris, et s'arrêter quand la souris quitte le lieu.

<Solution>

```js
for (article of document.querySelectorAll('article')) {
	let intervalId;

	article.addEventListener('mouseenter', () => {
		intervalId = setInterval(() => {
			loopImages(article);
		}, 1000);
	});

	article.addEventListener('mouseleave', () => {
		clearInterval(intervalId);
	});
}
```

</Solution>

### Exercice 3 : Filtrer par catégorie de lieu

Chaque lieu contient des données structurées dans des attributs `data-`. Par exemple, `data-category` contient le type de lieu, `data-difficulty` contient la difficulté d'accès, etc.

<Message>

<div slot="title">
	Les attributs `data-&lt;*&gt;` en HTML
</div>

    Les attributs commençant par `data-` sont des attributs personnalisés qui permettent de stocker des données supplémentaires dans un élément HTML. Ils sont très utiles pour stocker des données structurées dans une page web.

    On peut accéder à ces données directement en utilisant la propriété `dataset` de l'élément.

    Par exemple, `element.dataset.category` permet de récupérer la valeur de l'attribut `data-category` de l'élément `element`.

</Message>

L'objectif de cet exercice est de faire en sorte que l'utilisateur puisse filtrer les lieux par type.

Le bouton de filtre est déjà présent dans le fichier `index.html`. Il est représenté par un élément `<select>` qui a comme id `category`.

1. Créer une fonction `filterByCategory` dans le fichier `script.js`. Cette fonction prendra le type de lieu à filtrer en paramètre. Elle devra cacher les lieux qui ne correspondent pas et afficher ceux qui correspondent.

   - `filterByCategory("industriel")` doit cacher les lieux qui ne sont pas de type "industriel" et afficher ceux qui le sont.
   - `filterByCategory("all")` doit afficher tous les lieux.

   Pour cacher un élément, vous pouvez utiliser la méthode `style.display = "none"`. Pour le réafficher, on utilisera `style.display = ""`.

2. Tester cette fonction en appelant `filterByCategory('militaire')` dans la console de votre navigateur.
3. Ajouter un écouteur d'événement "change" sur l'élément `<select>`. Dans la fonction de rappel de cet écouteur, appelez la fonction `filterByCategory` avec la valeur de l'élément `<select>` en paramètre.
4. Tester que tout fonctionne correctement : les lieux doivent se filtrer en fonction du type sélectionné.

<Solution >

```js
function filterByCategory(category) {
	const articles = Array.from(document.querySelectorAll('article'));
	articles.forEach((article) => {
		if (article.dataset.category !== category && category !== 'all') {
			article.style.display = 'none';
		}
	});
}

document.querySelector('select#category').addEventListener('change', (event) => {
	filterByCategory(event.target.value);
});
```

</Solution>

### Exercice 4 : implémenter le tri

Le bouton de tri est déjà présent dans le fichier `index.html`. Il est représenté par un groupe de boutons radio qui ont pour `name` : `sort`.

1. Créer une fonction `sortBy` dans le fichier `script.js`. Cette fonction prendra le type de tri à effectuer en paramètre, l'ordre de trie et triera les lieux en fonction de ce paramètre.

   ```js
   // Exemple d'appel
   sortBy('difficulty', 'ascending'); // tri par difficulté croissante
   sortBy('difficulty', 'descending'); // tri par difficulté décroissante
   ```

   Pour modifier l'ordre des éléments dans le DOM, vous pouvez utiliser la méthode `appendChild` pour les déplacer. Il vous suffit ainsi de trier les éléments dans un tableau, puis de les ajouter dans l'ordre dans le DOM, ils seront automatiquement déplacés.

1. Tester cette fonction en appelant `sortBy` dans la console de votre navigateur.
1. Ajouter un écouteur d'événement "change" sur chaque bouton radio. Dans la fonction de rappel de cet écouteur, appelez la fonction `sortBy` avec les bons paramètres. Vous aurez besoin de récupérer la valeur des éléments `<input>` pour savoir quel type de tri a été sélectionné, et si l'ordre est croissant ou décroissant. Pour cela, on pourra utiliser `document.querySelector('input[name="sort"]:checked').value` pour récupérer la valeur du bouton radio sélectionné. Le pseudo sélecteur `:checked` permet de récupérer l'élément sélectionné.

<Solution >

```js
function sortBy(name, order) {
	const articles = Array.from(document.querySelectorAll('article'));
	articles.sort((a, b) => {
		if (order === 'ascending') {
			return a.dataset[name] < b.dataset[name] ? 1 : -1;
		} else {
			return a.dataset[name] > b.dataset[name] ? 1 : -1;
		}
	});
	const parent = document.querySelector('div[role="list"]');
	articles.forEach((article) => parent.appendChild(article));
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

Pour la recherche, nous allons utiliser un élément `<input>` de type "text" qui a comme id `search`. L'objectif est de faire en sorte que l'utilisateur puisse taper un mot dans cet élément, et que les lieux qui ne contiennent pas ce mot dans leur titre soient cachés.

1. Créer une fonction `search` dans le fichier `script.js`. Cette fonction prendra le mot à rechercher en paramètre, et cachera les lieux qui ne contiennent pas ce mot dans leur titre.

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
