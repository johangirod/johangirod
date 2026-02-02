<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	
	import consigneSVG from './consigne.svg';
	import consigneVideo from './consigne.mp4';

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

Ce projet contient un fichier `index.html` et un fichier `script.js` (dans lequel vous allez écrire votre code JavaScript).

Vous pouvez ouvrir le fichier `index.html` dans votre navigateur pour voir le rendu de la page. Elle contient une liste de lieux abandonnés à explorer, avec des images, des descriptions, des avis, etc.

1. **En fin de TP**, pensez à sauvegarder votre travail sur le dépôt gitlab de l'université. Pour cela, ouvrez un terminal dans le dossier `tp-4` et tapez les commandes suivantes, **en remplissant vos informations**

```bash
git config --global user.name "Votre nom"
git config --global user.email "votremail@univ-jfc.fr"
```

```bash
git checkout -b votre_identifiant
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

Au tout début du fichier `index.html`, vous trouverez le code de la modale d'avertissement.

Une modale est une fenêtre qui s'affiche par dessus le reste de la page.

Ici, elle est implémentée en utilisant l'élément HTML `<dialog>`, qui est celui à utiliser pour implémenter une modale.

1. **Faire en sorte que la modale s'affiche au chargement de la page**

```js
function displayModal() {
	const modal =  ? // Récupérer l'élement HTML de type dialog
	modal.showModal();
}

displayModal();
```

> `showModal` est une fonction native du DOM qui permet d'afficher un élément HTML `<dialog>`

2. **Faire en sorte que la modale se ferme quand on clique sur le bouton "J'ai compris"**
   Modifiez la fonction `displayModal` :
   1. Une fois la modale affichée, récupérez le noeud DOM `<button>` à l'intérieur de `<dialog>` dans une variable
   2. Ajoutez un écouteur d'événement "click" sur le bouton (avec la méthode `addEventListener`).
   3. Dans la fonction de rappel de l'écouteur, appelez la méthode `modal.close()` pour fermer la modale.

Tester que tout fonctionne correctement : la modale doit s'afficher au chargement de la page, et se fermer quand on clique sur le bouton "J'ai compris".

_**Astuce** : pour éviter d'avoir à refermer la modale à chaque fois que vous rechargez la page pour les exercices suivants, vous pouvez commenter l'appel à la fonction `displayModal`._

<Solution showAnyway>

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

Dans le fichier `index.html`, vous pourrez voir que chaque lieu est représenté par un élément `<article>`.

Chaque article contient un titre, ainsi que plusieurs images. Le but de cet exercice est que les **images défilent lorsque la souris passe au-dessus**

<video src={consigneVideo} autoplay loop muted class="h-96"></video>

#### Première étape : créer la fonction de défilement

Nous allons créer une fonction qui change l'image affichée à chaque fois qu'elle est appellée. Pour cela, elle déplacera la classe `displayed` sur l'image suivante. Voici le comportement attendu

<img src={consigneSVG} class="displayed">

```js
function loopImages(article) {
  // 1. Récupérer l'élément `<img>` avec la classe `displayed` de l'article passé en paramètre
  const currentImage = ?
  // 2. Supprimer la classe `displayed` de l'image courante
  ?
  // 3. Récupérer l'image juste après l'image courante
  let nextImage =
  // 3.b Traiter le cas limite où l'image n'a pas d'image suivante (on recommence au début)
  ?
  // Ajouter la classe `displayed` a `nextImage`
}

// Tester que la fonction marche en l'appelant toutes les secondes sur le premier article de la page
setInterval(() => loopImages(document.querySelector('article')), 1000)
```

<Solution showAnyway>

```js
function loopImages(article) {
	const currentImage = article.querySelector('img.displayed');
	currentImage.classList.remove('displayed');
	let nextImage = currentImage.nextElementSibling;
	// Si on est à la dernière image, alors `nextElementSibling` est `null`
	if (!nextImage) {
		// On récupère la première image
		nextImage = article.querySelector('.img-container img');
	}
	nextImage.classList.add('displayed');
}

loopImages(document.querySelector('article'));
```

</Solution>

#### Deuxième étape : les images défilent seulement au survol de la souris

Nous allons maintenant faire en sorte que les images ne défilent que lorsque la souris est sur le lieu. Pour cela, nous allons utiliser les événements `mouseenter` et `mouseleave`.

1. Itérer sur chacun des articles (avec une boucle for)

2. **Débuter le défilement au survol**. Ajoutez un écouteur d'événement sur chaque élément `<article>`, et déplacez l'appel à `setInterval` dans la fonction de rappel de cet écouteur,

3. **Arrêter le défilement quand la souris quitte le lieu**. Il vous faudra annuler le `setInterval` débuté précédement. Comment ? En utilisant la fonction `clearInterval`, avec comme paramètre l'identifiant de l'intervalle retourné par `setInterval`.

   ```js
   // exemple
   const intervalId = setInterval(() => {
   	console.log('Hello');
   }, 1000);

   clearInterval(intervalId); // arrête l'intervalle
   ```

Tester que tout fonctionne correctement : les images doivent défiler au survol de la souris, et s'arrêter quand la souris quitte le lieu.

<Solution showAnyway>

```js
for (const article of document.querySelectorAll('article')) {
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

    Les attributs commençant par `data-` sont des attributs personnalisés. Ils permettent de stocker des données supplémentaires qui seront utilisées par le votre javascript, sans être affichés par le navigateur par défaut.

    On peut accéder y accéder avec la propriété `dataset` de l'élément.

    Par exemple, `element.dataset.category` permet de récupérer la valeur de l'attribut `data-category` de l'élément `element`.

</Message>

L'objectif de cet exercice est de faire en sorte que l'utilisateur puisse **filtrer les lieux par type**.

Le bouton de filtre est déjà présent dans le fichier `index.html`. Il est représenté par un élément `<select>` qui a comme id `category`.

1. Créer une fonction `filterByCategory`

```javascript
/**
 * Filtrer les lieux par type.
 * @param {string} category - Le type de lieu à filtrer.
 *
 * @example
 * filterByCategory("industriel") // Cacher les articles qui n'ont pas la catégory "industriel"
 * filterByCategory("all") // Afficher tous les lieux.
 */
function filterByCategory(category) {
	// A compléter
}

filterByCategory('militaire'); // Test (à supprimer ensuite)
```

_Pour cacher un élément, vous pouvez utiliser la méthode `style.display = "none"`. Pour le réafficher, on utilisera `style.display = ""`._

2. Créer un écouteur d'événement `change` sur l'élément `<select>`. Dans la fonction de rappel de cet écouteur, appelez la fonction `filterByCategory` avec la `value` de l'élément `<select>`.

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

Le bouton de tri est déjà présent dans le fichier `index.html`. Il est représenté par un groupe de boutons radio qui ont pour `name` : `sort`.

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
