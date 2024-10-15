<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import {showSolution} from '$lib/showSolution';

  $showSolution = false;
</script>

<svelte:head>

<title>API REST - Johan Girod</title>
</svelte:head>

# API REST

Ce TP vous permettra de créer une filmothèque pour rechercher les films que nous avons vus, et leur donner une note (un peu comme sur le site [sens-critique](www.senscritique.com)).

Cette application sera sous forme d'une page web dynamique échangeant avec le serveur via une API REST.

## Objectifs d'apprentissage

- Savoir ce qu'est une API REST et la différence avec une architecture MVC
- Créer une API REST avec express
- Utiliser `fetch` pour appeler une API REST depuis le navigateur
- Utiliser JavaScript pour créer une page dynamique

## Sommaire

- [Présentation de l'architecture](#architecture)
- [Préparatifs](#start)
- [Exercice 1 : afficher la liste des films](#exercice-1)
- [Exercice 2 : rechercher des films](#exercice-2)
- [Exercice 3 : récupérer les films de la bibliothèque](#exercice-3)
- [Exercice 4 : marquer un film comme vu / non vu](#exercice-4)
- [Exercice 5 : ajouter une note à un film](#exercice-5)

<span id="architecture"></span>

## Présentation de l'architecture

Nous utiliserons pour ce TP une architecture client / serveur avec une communication via une **API REST**.

<Message>

<div slot='title'>Qu'est-ce qu'une API ?</div>

Une **API** (Application Programming Interface, interface de programmation applicative en français) est un **ensemble de définitions** et de protocoles permettant à un **programme d'interagir avec un autre programme**, en cachant les détails de l'implémentation.

Il s'agit donc d'une interface offerte par un programme informatique, une bibliothèque logicielle, un service ou encore un système d'exploitation.

Par exemple, un **navigateur web** expose des **APIs JavaScript** permettant de manipuler le DOM, de faire des requêtes HTTP, de gérer les cookies, etc.
Ainsi, la fonction `getElementById` est définie par l'API JavaScript du navigateur.

[En savoir plus sur les APIs dans le web](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

</Message>

&nbsp;

<Message>

<div slot='title'>Qu'est-ce qu'une API REST ?</div>

Dans une **API REST**, l'interface consiste en un ensemble d'**URLs** et de **verbes HTTP** (GET, POST, PUT, DELETE) permettant d'interagir avec le serveur. En retour, le serveur renvoie des données au **format JSON**.

<img src="/images/rest-api.png" alt="What is a REST API ?" style="width: 100%">

Plus précisément, dans une API REST, **chaque URL correspond à une ressource** (un objet manipulé par l'API). Les verbes HTTP permettent au client de préciser l'action à effectuer sur la ressource.

Par exemple, pour une ressource `movie`, on pourrait avoir les routes suivantes :

- `GET /movies` : récupérer la liste des films
- `GET /movies/1` : récupérer le film avec l'identifiant 1
- `POST /movies` : ajouter un nouveau film
- `PUT /movies/1` : modifier le film avec l'identifiant 1

En retour, le serveur renvoie des données au format JSON, avec un code HTTP indiquant si la requête a réussi ou non. Par exemple, pour la requête `GET /movies/1`, le serveur pourrait renvoyer :

```json
{
	"id": 1,
	"title": "The Matrix",
	"year": 1999,
	"summary": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
}
```

Ou encore, si le film n'existe pas, le serveur renverra un code HTTP 404 (Not Found).

**Les APIs REST sont donc construites avec les briques de bases du protocole HTTP** (URLs, verbes HTTP, codes HTTP).

[En savoir plus sur les API REST](https://www.redhat.com/fr/topics/api/what-is-a-rest-api)

</Message>

&nbsp;

<Message>

<div slot='title'>Le format JSON</div>

Le **JSON** (JavaScript Object Notation) est un format de données qui permet de représenter des objets sous forme de chaînes de caractères. Il possède une syntaxe similaire à celle des objets JavaScript, à ceci près que les clés doivent être entourées de guillemets doubles.

</Message>

Ainsi, dans ce type d'architecture, contrairement à une architecture MVC, le serveur ne s'occupe pas de générer les vues (HTML).

Il ne transmet que des données au format JSON. C'est le client (navigateur) qui se charge de générer les vues pour les afficher à l'utilisateur.

<span id="start"></span>

## Préparatifs : installer et lancer le projet

Nous utiliserons l'environnement de développement sur les machines de l'école.

Des scripts docker ont été créés pour lancer le serveur.

### Clonage du projet

Le code se trouve sur Github. Pour installer le projet, lancer les commandes suivantes dans un terminal:

```bash
# Clone le projet git dans le dossier courant
git clone https://github.com/johangirod/TP-REST
cd TP-REST
```

### Installer les extensions vscode

Ouvrez l'éditeur vscode avec la commande suivante :

```bash
code . &
```

Ouvrez le menu des extensions (`Ctrl+Maj+X`) et cherchez "@recommended". Vous devriez voir apparaître les extensions suivantes :

- Thunder Client
- ESLint
- Prettier - Code formatter

Installer ces trois extensions.

### Présentation du projet

Le code source du serveur se trouve dans le dossier `server`, celui du javascript executé sur le navigateur se trouve dans le dossier `public`, dans le fichier `app.js`.

### Lancer le projet

Pour lancer le serveur, lancer la commande suivante :

```bash
npm run dev
```

Vérifiez que le serveur est bien lancé en allant sur `http://localhost:3000`.

**Note** il est conseillé de laisser les logs toujours ouverts quand vous développez, vous verrez directement les messages d'erreur s'il y en a.

<span id="exercice-1"></span>

## Exercice 1 : afficher la liste des films

Le but de cet exercice est d'afficher la liste des films sur la page d'accueil.

### Créer une route sur le serveur

Pour cela, nous allons créer une nouvelle route `/movies` sur le serveur qui renverra la liste des films au format JSON.

Dans le fichier `server/routes/movies.js`, créer une route `GET /movies` qui renvoie la liste des films au format JSON.

- Pour manipuler les films, vous utiliserez les fonctions exportées par le fichier `server/models/movies.ts`.

- Pour envoyer une réponse au format json, vous pouvez utiliser la fonction [`res.json()`](https://expressjs.com/en/5x/api.html#res.json) de express.

### Testez votre route avec Thunder Client

Pour tester votre route, vous pouvez utiliser l'extension Thunder Client directement dans vscode.

- Ouvrez Thunder Client avec la commande `Ctrl+Maj+P` puis en tapant "Thunder Client: New request".

- Dans la fenêtre qui s'ouvre, sélectionnez "GET" dans le menu déroulant, puis entrez l'URL de votre route : `http://localhost:3000/movies`.

- Cliquez sur le bouton "Send" pour envoyer la requête.

- Vous devriez voir apparaître la liste des films dans la réponse du serveur.

<Solution>

**routes/movies.ts**

```typescript
import express from 'express';
import { getMovies } from '../models/movies';

const router = express.Router();
router.get('/movies', async (req, res) => {
	const movies = await getMovies();
	res.json(movies);
});

export default router;
```

</Solution>

### Afficher la liste des films sur la page d'accueil

Maintenant que nous avons une route qui renvoie la liste des films, nous allons afficher cette liste sur la page d'accueil, en modifiant le fichier `public/app.js`.

Pour récuperer les données du serveur, nous allons utiliser la fonction [`fetch`](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) en JavaScript.

Pour afficher les films, vous pourrez utiliser la fonction `createMovieCard` du fichier `client/components.js`.

Cette fonction prend en paramètre un objet contenant la propriété `movie` du même type que celui retourné par la route `/movies`.

1. Créer une la fonction `async function getMovies` qui retourne la liste des films récupérée depuis le serveur avec la fonction `fetch`.
   ```js
   const response = await fetch(`/movies`);
   const movies = await response.json();
   ```
2. Créer une fonction `renderMovies` qui prend en paramètre la liste des films et qui affiche les films sur la page d'accueil en utilisant la fonction `createMovieCard`.
   1. Récupérer le container HTML qui contiendra les films avec la fonction [`document.querySelector`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector).
   2. Supprimer son contenu avec la propriété [`innerHTML`](https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML).
   3. Parcourir la liste des films et pour chacun d'entre eux, créer un élément HTML avec la fonction `createMovieCard` et l'ajouter au container avec la fonction [`appendChild`](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild).
3. Dans la fonction `main`, appeler la fonction `getMovies` pour récupérer la liste des films, puis appeler la fonction `renderMovies` pour afficher les films sur la page d'accueil.

<Solution>

**app.js**

```typescript
async function getMovies() {
	const response = await fetch(`/movies`);
	const movies = await response.json();

	return movies;
}

function renderMovies(movies) {
	const moviesContainer = document.querySelector('[data-movies]');
	moviesContainer.innerHTML = '';
	movies.forEach(async (movie) => {
		const movieCard = createMovieCard({
			movie
		});
		moviesContainer.appendChild(movieCard);
	});
}

async function main() {
	const movies = await getMovies();
	renderMovies(movies);
}
```

</Solution>

<span id="exercice-2"></span>

## Exercice 2 : rechercher des films

Nous allons maintenant ajouter la possibilité de rechercher des films par titre grâce au champs de recherche.

1. Modifier la route `/movies` côté serveur pour qu'elle prenne en paramètre un querystring `query` et le passe à la fonction `getMovies`. Vous pouvez tester votre route avec l'extension Thunder Client.

2. Modifier la fonction `getMovies` côté client pour qu'elle prenne en paramètre une chaîne de caractère `query` et qu'elle l'envoie au serveur dans la requête `fetch`.

3. Brancher le champs de recherche sur la fonction `getMovies` pour qu'elle soit appelée à chaque fois que l'utilisateur tape une lettre dans le champs de recherche.

   - Dans la fonction `main`, récuperer l'élement HTML du champs de recherche avec la fonction [`document.querySelector([data-search-input])`](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector).
   - Écoutez les événements `input` sur le champs de recherche avec la fonction [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event). Cet événement est déclenché à chaque fois que l'utilisateur tape une lettre dans le champs de recherche.
   - A chaque fois que l'événement est déclenché, appelé la fonction `getMovies` avec la valeur du champs de recherche en paramètre pour récupérer la liste des films correspondant à la recherche, puis appeler la fonction `renderMovies` pour actualiser l'affichage.

4. Vérifier que la recherche fonctionne en testant votre application

<Solution>

**app.js**

```javascript
import { createMovieCard } from './components.js';

async function getMovies(querystring = '') {
	const response = await fetch(`http://localhost:3000/movies?query=${querystring}`);
	const movies = await response.json();
	return movies;
}

// ...

async function main() {
	const movies = await getMovies();
	renderMovies(movies);

	const searchInput = document.querySelector('[data-search-input]');
	searchInput.addEventListener('input', async (event) => {
		const movies = await getMovies(event.target.value);
		renderMovies(movies);
	}));
}

```

**routes/movies.ts**

```typescript
import express from 'express';
import { getMovies } from '../models/movies';

const router = express.Router();
router.get('/movies', async (req, res) => {
	const query = req.query.query as string;
	const movies = await getMovies({ query });
	res.json(movies);
});

export default router;
```

</Solution>

<span id="exercice-3"></span>

## Exercice 3 : récupérer les films de la bibliothèque

Dans cet exercice, nous allons différencier les films qui sont déjà dans la bibliothèque de l'utilisateur de ceux qui ne le sont pas. Nous allons également afficher la note que l'utilisateur a donné à chaque film.

### Côté serveur

Nous allons créer une ressource `library` qui contenant les films de la bibliothèque de l'utilisateur et la note donnée. Son type est le suivant :

```typescript
type LibraryMovie = {
	movieId: string; // l'identifiant du film
	rating?: number; // la note donnée par l'utilisateur (optionnelle)
};
```

Pour exposer cette ressource avec l'API, nous allons créer une route `GET /library/:movieId` qui renvoie la ressource si le film avec l'identifiant `movieId` est dans la bibliothèque de l'utilisateur, et une erreur 404 sinon.

1. Créer une nouvelle route `GET` dans le fichier `server/routes/library.ts`.
2. Récupérer l'identifiant du film dans les paramètres de la route avec `req.params.movieId`.
3. Récupérer le film dans la bibliothèque de l'utilisateur avec la fonction `getLibraryMovieById` du fichier `server/models/library.ts`. Cette fonction renvoie une erreur `NotFoundError` si le film n'est pas dans la bibliothèque de l'utilisateur.
4. Renvoyer les informations du film de la bibliothèque si il est présent. Sinon retourner une erreur 404 avec la fonction [`res.status(404).send()`](https://expressjs.com/en/5x/api.html#res.status).
5. Tester votre route avec l'extension Thunder Client.

<Solution>

**routes/library.ts**

```typescript
import { addMovieToLibrary, getLibraryMovieById } from '../models/library';

router.get('/library/:movieId', async (req, res) => {
	const movieId = req.params.movieId as string;
	try {
		const movie = await getLibraryMovieById(movieId);
		res.json(movie);
	} catch (e) {
		if (e instanceof NotFoundError) {
			res.status(404).send(e.message);
			return;
		}
	}
});
```

</Solution>

### Côté client

Pour chaque objet `movie` affiché, nous allons faire un appel à la route `/library/:movieId` pour vérifier si le film est dans la bibliothéque. Puis, il faudra modifier l'objet `movie` pour ajouter deux nouvelles propriétés :

- `isInLibrary` : un booléen indiquant si le film est dans la bibliothèque de l'utilisateur
- `rating` : la note donnée par l'utilisateur au film (si elle existe)

1. Créer une fonction `aync function getLibraryMovie(movieId)` qui vérifie si le film est dans la bibliothèque de l'utilisateur en appelant la route `GET /library/:movieId` du serveur. Cette fonction renvoie `false` si le film n'est pas dans la bibliothèque de l'utilisateur (le seveur renvoie 404), et l'objet renvoyé par le serveur si il est présent (contenant les propriétés `rating` et `movieId`).

2. Modifier la fonction `async function getMovies` pour ajouter les propriété de la bibliothèque à chaque film de la liste avant de la retourner. Pour modifier la liste, vous pouvez utiliser au choix :

   - une boucle for : `for (const movie of movies) { ... }` (méthode impérative)
   - la fonction [`map`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) : `movies.map(movie => { ... })` et [`Promise.all`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) pour attendre la fin de toutes les requêtes (méthode fonctionnelle)

3. Vérifier que cela fonctionne en rafrachissant l'application. Vous devriez voir apparaître des notes sur certains films.

<Solution>

**app.js**

```typescript
async function getLibraryMovie(movieId) {
	const response = await fetch(`http://localhost:3000/library/${movieId}`);
	if (!response.ok) {
		return false;
	}
	const movie = await response.json();
	return movie;
}

async function getMovies(querystring = '') {
	const response = await fetch(`http://localhost:3000/movies?query=${querystring}`);
	const movies = await response.json();

	const moviesWithLibrary = await Promise.all(
		movies.map(async (movie) => {
			const isInLibrary = await getLibraryMovie(movie.id);
			return {
				...movie,
				isInLibrary: !!isInLibrary,
				rating: isInLibrary?.rating
			};
		})
	);
	return moviesWithLibrary;
}
```

</Solution>

<span id="exercice-4"></span>

## Exercice 4 : marquer un film comme vu ou non vu

Maintenant nous allons permettre à l'utilisateur de modifier la liste des films de sa bibliothèque, en ajoutant ou en supprimant des films.

Cela, grâce à deux nouvelles routes à la ressource `library` qui vont faire leur apparition :

- `POST /library` pour ajouter un film à la bibliothèque de l'utilisateur
- `DELETE /library/:movieId` pour supprimer un film de la bibliothèque de l'utilisateur

### Côté serveur

1. Créer une route `POST /library` dans le fichier `server/routes/library.ts`

   - Cette route paramètre un objet `LibraryMovie` présent dans le corps de la requête
   - Elle appelle la fonction `addMovieToLibrary` du fichier `server/models/library.ts` pour ajouter le film à la bibliothèque de l'utilisateur. Cette fonction renvoie une erreur `BadRequestError` si le film est déjà dans la bibliothèque de l'utilisateur.
   - Si le film est déjà dans la bibliothèque de l'utilisateur, la route renvoie un code d'erreur 400 (Bad Request) avec le message d'erreur. Sinon, elle retourne l'objet ajouté.
   - Tester votre route avec l'extension Thunder Client.

2. Créer une route `DELETE /library/:movieId` dans le fichier `server/routes/library.ts` qui renvoie une 404 si le film n'est pas dans la bibliothèque. Tester votre route avec l'extension Thunder Client.

<Solution>

**routes/library.ts**

```typescript
router.post('/library', async (req, res) => {
	const movie = req.body;
	try {
		const newMovie = await addMovieToLibrary(movie);
		res.json(newMovie);
	} catch (e) {
		if (e instanceof AlreadyExistsError) {
			res.status(400).send(e.message);
			return;
		}
	}
});

router.delete('/library/:movieId', async (req, res) => {
	const movieId = req.params.movieId as string;
	try {
		await removeMovieFromLibrary(movieId);
		res.sendStatus(200);
	} catch (e) {
		if (e instanceof NotFoundError) {
			res.status(404).send(e.message);
			return;
		}
	}
});
```

</Solution>

### Coté client

#### Ajout d'un film à la bibliothèque

Créer une fonction `async function addMovieToLibrary(movieId)` qui appelle la route `POST /library` avec dans le corps de la requête l'identifiant du film à ajouter au format JSON. Ces informations seront spécifiées dans le second paramètre de la fonction [`fetch`](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch).

- `method` : la méthode HTTP à utiliser (ici `POST`)
- `headers` : les headers de la requête (ici `{ "Content-Type": "application/json" " }`)
- `body` : le corps de la requête (l'identifiant du film au format JSON)

Passer cette fonction en tant que callback dans les arguments de la fonction `createMovieCard` : `createMovieCard({ movie, onAddToLibrary: addMovieToLibrary })`.

Le callback `onAddToLibrary` est appelé lorsque l'utilisateur clique sur le bouton "Ajouter". Il prend en paramètre l'identifiant du film à ajouter.

#### Suppression d'un film de la bibliothèque

Créer une fonction `async function removeFromLibrary(movieId)` qui appelle la route `DELETE /library/:movieId` avec dans le corps de la requête l'identifiant du film à supprimer au format JSON. De même, reliez cette fonction au bouton "Enlever" avec le paramètre callback `onRemoveFromLibrary` de la fonction `createMovieCard`.

Testez votre application en ajoutant et en supprimant des films de la bibliothèque et en rafraichissant la page pour vérifier que les modifications sont bien sauvegardées.

<Solution>

```typescript

function renderMovies(movies) {
  const moviesContainer = document.querySelector("[data-movies]");
  moviesContainer.innerHTML = "";
  movies.forEach(async (movie) => {
    const movieCard = createMovieCard({
      movie,
      onAddToLibrary: addMovieToLibrary,
      onRemoveFromLibrary: removeFromLibrary,
    });


async function addMovieToLibrary(movieId) {
  await fetch(`http://localhost:3000/library`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId,
    }),
  });
}

async function removeFromLibrary(movieId) {
  await fetch(`http://localhost:3000/library/${movieId}`, {
    method: "DELETE",
  });
}
```

</Solution>

<span id="exercice-5"></span>

## Exercice 5 : ajouter une note à un film

Dernière étape, nous allons permettre à l'utilisateur de modifier les notes des films de sa bibliothèque.

Pour modifier une ressource, c'est le verbe HTTP `PUT` qui est utilisé.

### Côté serveur

Créez une route `PUT /library/:movieId` dans le fichier `server/routes/library.ts` qui prend en paramètre l'identifiant du film et la nouvelle note à lui attribuer dans le corps de la requête. Vous utiliserez la fonction `modifyLibraryMovie` du fichier `server/models/library.ts` pour modifier la note du film. Cette fonction renvoie une erreur `NotFoundError` si le film n'est pas dans la bibliothèque de l'utilisateur.

Tester votre route avec l'extension Thunder Client.

### Côté client

Utiliser le callback `updateRating` passé en paramètre de la fonction `createMovieCard`. Ce callback est appelé lorsque l'utilisateur modifie la note d'un film. Il prend en premier paramètre l'identifiant du film et en second paramètre la note donnée.

<Solution>

**routes/library.ts**

```typescript
router.put('/library/:movieId', async (req, res) => {
	const movieId = req.params.movieId as string;
	const movie = req.body;
	try {
		const updatedMovie = await modifyLibraryMovie(movieId, movie);
		res.json(updatedMovie);
	} catch (e) {
		if (e instanceof NotFoundError) {
			res.status(404).send(e.message);
			return;
		}
	}
});
```

**app.js**

```typescript
async function updateRating(movieId, rating) {
	await fetch(`http://localhost:3000/library/${movieId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			movieId,
			rating
		})
	});
}

function renderMovies(movies) {
	const moviesContainer = document.querySelector('[data-movies]');
	moviesContainer.innerHTML = '';
	movies.forEach(async (movie) => {
		const movieCard = createMovieCard({
			movie,
			onAddToLibrary: addMovieToLibrary,
			onRemoveFromLibrary: removeFromLibrary,
			onRatingChange: updateRating
		});
		moviesContainer.appendChild(movieCard);
	});
}
```

</Solution>

## Bonus

- Séparer les films de la filmotheque dans une section à part

## Questions de fin

- Quels sont les avantages d'une API REST par rapport à une architecture MVC ?
- Quels sont les inconvénients d'une API REST par rapport à une architecture MVC ?
- Nous souhaitons ajouter la possibilité à l'administrateur de l'application d'ajouter des films à la base de donnée. Quelle route devons-nous créer ? Quel verbe HTTP utiliser ?
- Et pour modifier un film présent ? -->
