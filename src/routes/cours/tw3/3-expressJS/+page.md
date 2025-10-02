<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import Reveal from '$lib/Reveal.svelte';
  import Slides from './slides.svelte';
</script>

<svelte:head>

<title>TP ExpressJS - TW3 - Johan Girod</title>
</svelte:head>

<Reveal>
  <Slides/>
</Reveal>

## TP ExpressJS

Ce TP vous permettra de vous familiariser avec un framework web ([`expressjs`](https://expressjs.com)), en créant un site web pour un restaurant.
Ce site contiendra une page d'accueil, une page pour afficher les menus, et une page pour commander un menu.

### Objectifs

- Avoir une première expérience avec l'architecture MVC
- Savoir créer un serveur web avec Express et créer des routes
- Savoir lancer des tests et interpréter les erreurs
- Servir les fichiers statiques
- Utiliser un moteur de template pour générer des pages HTML à partir de vues
- Comprendre l'utilité du `layout`
- Comprendre et utiliser les query string parameters
- Savoir traiter un formulaire HTML

### Sommaire

- [Préparatifs](#start)
- [Exercice 1 : utiliser le routeur et servir des fichiers statiques](#exercice-1)
- [Exercice 2 : utiliser un moteur de template](#exercice-2)
- [Exercice 3 : traiter un formulaire HTTP](#exercice-3)
- [Exercice 4 : ajouter un middleware pour gérer les erreurs serveurs](#exercice-4)

<div id="start"></div>

### Préparatifs : installer et lancer le projet

#### Prérequis : installation

Pour les besoins de développement, nous allons installer nodeJS en local.

Si cela ne fonctionne pas, nous utiliserons une version github codespace, un vscode en ligne avec nodeJS déjà installé.

#### Installation

Le code se trouve sur github. Pour installer le projet, lancer les commandes suivantes :

```bash
# Clone le projet git dans le dossier courant
git clone --branch start https://github.com/johangirod/TP-express
cd TP-express
npm install
```

#### Présentation du projet

Ce projet se compose d'un fichier `index.ts` contenant le code source de votre serveur, et d'un dossier `test` contenant les tests (vous n'aurez pas à modifier ce dernier).

Le fichier `tsconfig.json` contient la configuration typescript.

##### Eslint

Ce projet utilise [eslint](https://eslint.org) pour vérifier la syntaxe du code. Pour lancer la vérification, lancer la commande `npx eslint ./`.

Le fichier `.eslintrc.js` contient la configuration d'eslint.

##### Prettier

Ce projet utilise [prettier](https://prettier.io) pour formater automatiquement le code. Pour lancer le formatage, lancer la commande `npx prettier ./ --write`.

Le fichier `.prettierrc.js` contient la configuration de prettier (vide = standard).

##### Installer les extensions vscode

Pour profiter des annotations eslint et du formattage automatique de prettier dans vscode, il vous suffit d'installer les extensions recommandées du projet. Pour cela, ouvrez le menu des extensions (`Ctrl+Maj+X`) et cherchez "@recommended". Vous devriez voir apparaître les extensions suivantes :

- ESLint
- Prettier - Code formatter

#### Lancer le projet

1. Créez le fichier `index.ts` à la racine du projet, contenant un simple `console.log("hello world")`
1. Lancez le projet avec la commande `npx ts-node-dev index.ts`. Vous devriez voir apparaitre « hello world » dans la console.

`ts-node-dev` est un outil qui permet d'exécuter un fichier node en typescript. Il est très pratique, car il relance automatiquement le serveur à chaque modification du code source.

#### Tests

Tout au long du TP, vous pourrez vérifier si vous avez réussi l'exercice en lançant les tests avec la commande `npm test`.

Lancez la commande et vérifiez que tout est vert.

<div id="exercice-1"></div>

### Exercice 1 : un serveur web static

Pour commencer, allez sur la branche `exercice-1` du projet :

```bash
git checkout -f exercice-1
```

Le fichier `index.html` contient la page d'accueil du site. Nous allons maintenant créer un serveur web qui servira cette page.

#### Ma première route

Nous allons créer une route `/ping` qui renverra un statut 200.

<Message>
<div slot='title'>Codes de réponse HTTP</div>

Le statut HTTP est un code numérique qui est renvoyé par le serveur pour indiquer le résultat de la requête au client. Le code 200 signifie que la requête a été traitée avec succès. Le code 404 signifie que la ressource demandée n'a pas été trouvée. Nous verrons d'autres codes de statut HTTP plus tard dans ce TP.

[En savoir plus](https://developer.mozilla.org/fr/docs/Web/HTTP/Status)

</Message>

Il vous faudra importer la bibliothèque express, créer une instance de l'application, et ajouter une route `/ping` qui renvoie un statut 200.

1. Installez express avec la commande `npm install express`
1. Installez les types typescript de express avec la commande `npm install -D @types/express`
1. Importez express dans le fichier `index.ts` avec `import express from 'express'`
1. Créez une instance de l'application express avec `const app = express()`
1. Ajoutez une route `/ping` qui renvoie un statut 200 avec la méthode [`app.get`](https://expressjs.com/fr/4x/api.html#app.get.method)
1. Faire en sorte que le serveur écoute sur le port 3000 avec la méthode [`app.listen`](https://expressjs.com/fr/4x/api.html#app.listen)
1. Lancez le serveur avec `npx ts-node-dev index.ts`
1. Lancez les tests avec `npm test`
1. Optionnel : ouvrez votre navigateur et allez sur `http://localhost:3000/ping`

<Solution showAnyway>

```typescript
import express from 'express';
const app = express();

app.get('/ping', (req, res) => res.sendStatus(200));

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
```

- `app.get` prend en paramètre un chemin et une fonction de callback qui sera appelée lorsqu'un client se rendra sur ce chemin
- La fonction de callback prend en paramètre un objet `req` qui contient la requête HTTP, et un objet `res` qui contient la réponse HTTP. Ici, nous utilisons la méthode `sendStatus` de l'objet `res` pour envoyer un statut 200.
- `app.listen` permet de lancer le serveur sur le port 3000

</Solution>

#### Servir la page d'accueil

Nous allons maintenant servir la page `index.html` lorsque l'utilisateur se rend sur la page d'accueil du site. Pour cela, vous créerez une route `/` qui renvoie le fichier `index.html`.

Pour cela, vous utiliserez la méthode [`sendFile`](https://expressjs.com/fr/4x/api.html#res.sendFile) de l'objet `res`.

Pour construire le chemin du fichier, vous utiliserez la méthode [`join`](https://nodejs.org/api/path.html#path_path_join_paths) du module `path`. Et pour récupérer le chemin absolu du dossier racine, vous utiliserez la variable `__dirname`.

<Solution showAnyway>

```typescript
import path from 'path';
// <...>
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
```

- `\_\_dirname`` est une variable globale qui contient le chemin du dossier courant
- `path.join` permet de construire un chemin à partir de plusieurs morceaux qui fonctionne sur tous les systèmes d'exploitation
- `res.sendFile` permet d'envoyer un fichier au client, avec le bon type MIME

<Message>
<div slot='title'>Type MIME</div>

Le type MIME est un standard qui permet d'indiquer au client comment interpréter la réponse. Par exemple, le type MIME d'un fichier HTML est `text/html`, celui d'une image PNG est `image/png`, et celui du JSON est `application/json`.

Si vous utilisez un framework comme express, vous n'avez généralement pas besoin de vous en soucier, car il devine le type MIME à partir de l'extension du fichier.

Ce dernier est transmis via l'en-tête HTTP `Content-Type`.

[En savoir plus](https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_Types)

</Message>

</Solution>

#### Servir les fichiers statiques (images, css, etc.)

Tous les fichiers statiques (images, css, etc.) se trouvent dans le dossier `assets`. Nous allons maintenant servir ces fichiers statiques, en montant le dossier `assets` sur le chemin `/assets`.

Pour cela vous utiliserez la méthode [`express.static`](https://expressjs.com/fr/4x/api.html#express.static).

<Solution>

```typescript
app.use('/assets', express.static(path.join(__dirname, 'assets')));
```

</Solution>

#### Tester le serveur

Vérifiez que tout fonctionne en lançant les tests avec `npm test` avant de passer à l'exercice suivant.

<div id="exercice-2"></div>

### Exercice 2 : Utiliser un moteur de template

Nous allons à présent utiliser un moteur de template pour générer les pages HTML à partir des données de l'application. Il en existe [plusieurs](https://expressjs.com/fr/resources/template-engines.html), nous utiliserons [handlebars](https://handlebarsjs.com/).

Pour commencer, allez sur la branche `exercice-2` du projet :

```bash
git checkout -f exercice-2
```

Un nouveau dossier `models` a été créé, contenant un fichier `restaurant.ts` qui contient les données du restaurant. Nous allons utiliser ces données pour générer les pages du site qui seront situées dans le dossier `views`.

<Message>
<div slot='title'>Moteur de template</div>

Un moteur de template est un outil qui permet de générer des pages HTML à partir de données. Il permet de séparer le code HTML du code JavaScript, et de générer des pages HTML dynamiques. C'est un outil utilisé dans les applications web qui suivent le [pattern MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur).

</Message>

#### Mettre en place handlebars

1. Renommez le fichier `index.html` en `home.handlebars` et déplacez-le dans un nouveau dossier `views`
1. Installez le moteur de template handlebars pour express `express-handlebars` en suivant les instructions de la [documentation](https://github.com/express-handlebars/express-handlebars#installation)
1. Vérifiez que les tests de l'exercice 1 passent toujours grâce à la commande `npm test exercice-1`. Si ce n'est pas le cas, corrigez le code.

<Solution showAnyway>

```typescript
import { engine } from 'express-handlebars';
// <...>

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('home');
});
```

</Solution>

#### Changer le nom et la description du restaurant

1. Dans le fichier `home.handlebars`, remplacez le nom du restaurant par `{{name}}` et la description par `{{description}}`
1. Dans le fichier `index.ts`, importez le fichier `restaurant.ts` avec `import restaurant from "./models/restaurant"`
1. Passez les données du restaurant au moteur de template via [`res.render`](https://expressjs.com/fr/4x/api.html#res.render)

<Solution>

```typescript
import restaurant from './models/restaurant';
// <...>

app.get('/', (req, res) => {
	res.render('home', restaurant);
});
```

</Solution>

#### Utiliser les layouts

Un layout est un fichier qui contient le squelette de la page. Il permet de factoriser le code HTML commun à toutes les pages du site, comme le header et le footer. Nous allons mettre à jour le layout par défaut `main.handlebars`, et laisser la possibilité de paramétrer le titre de la page.

1. Déplacez le code HTML commun dans le fichier `main.handlebars` de telle sorte que le fichier `home.handlebars` ne contienne que le contenu spécifique à la page d'accueil (ce qui se trouve à l'intérieur de la balise `<div class="row ...">`).
1. Changez le titre de la page d'accueil (balise `<title>`) par `<nom du restaurant>`
1. Faire en sorte que les tests « Exercice 1 - Home » passent

<Solution showAnyway>

**`main.handlebars`**

```handlebars
<html lang='en'>
	<head>
		<!-- META -->
		<meta charset='UTF-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />

		<!-- Favicon-->
		<link rel='icon' type='image/x-icon' href='assets/favicon.ico' />
		<!-- Bootstrap icons-->
		<link
			href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'
			rel='stylesheet'
			type='text/css'
		/>
		<link
			href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
			rel='stylesheet'
			integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
			crossorigin='anonymous'
		/>
		<!-- Google fonts-->
		<link
			href='https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic'
			rel='stylesheet'
			type='text/css'
		/>
		<!-- TITLE -->
		<title>{{title}}</title>
	</head>
	<body>
		<main role='main'>
			<div class='col-xxl-8 container px-4 py-5'>
				{{{body}}}
			</div>
		</main>
	</body>
</html>
```

</Solution>

#### Créer une page pour afficher le menu

Voici le template bootstrap proposé pour un menu :

```handlebars
<div class="col" data-test-menu>
  <div class="card h-100" role="list-item">
    <div class="card-body">
      <h2 class="card-title">{{name}}</h5>
      <p class="card-text">{{description}}</p>
      <p class="card-text">{{price}}€</p>
    </div>
  </div>
</div>
```

Voici le container pour afficher les menus :

```html
<div class="row row-cols-1 row-cols-md-3 g-4">
	<!-- Ici, on affichera les menus -->
</div>
```

Créez une nouvelle page `menu.handlebars`, servi sur l'URL `/menus` qui affiche les menus du restaurant présents dans `models/menus`. Pour éviter de dupliquer le code HTML, vous le bloc handlebars [`{{#each}}`](https://handlebarsjs.com/guide/builtin-helpers.html#each) pour afficher tous les menus. Cette page aura un titre `<h1>` « Menus » et pour titre de page (balise `<title>`) `Menus - <nom du restaurant>`

1. Creer la vue `menu.handlebars` dans le dossier `views`
1. Servir cette page sur le route `/menus` grâce à `app.get` et `res.render`
1. Passer la variable `menus` au moteur de template comme argument de `res.render`
1. Utiliser `{{#each}}` dans la vue pour afficher tous les menus
1. Modifier le titre de la page pour qu'il soit dynamique `Menus - <nom du restaurant>` (`<nom du restaurant>` vient du fichier `restaurant.ts`)

<Solution showAnyway>

**`index.ts`**

```typescript
import menus from './models/menus';
// <...>

app.get('/menus', (req, res) => {
	res.render('menus', {
		title: `Menus - ${restaurant.name}`,
		menus
	});
});
```

**`menus.handlebars`**

```handlebars
<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Menus</h1>
<div class="row row-cols-1 row-cols-md-3 g-4">
{{#each menus}}
  <div class="col"  data-test-menu>
    <div class="card h-100" role="list-item">
      <div class="card-body">
        <h2 class="card-title">{{name}}</h5>
        <p class="card-text">{{description}}</p>
        <p class="card-text">{{price}}€</p>
      </div>
    </div>
  </div>
{{/each}}
</div>
```

</Solution>

### Créer une page pour commander un menu

Nous allons ajouter un bouton sur les menus pour pouvoir les commander. Ce bouton doit rediriger vers la page `/commander`. Pour passer au serveur l'identifiant du menu, nous allons utiliser un paramètre de l'URL (appelé `query string parameter`). Par exemple, pour le menu avec l'identifiant `xid327y`, l'URL sera `/commander?menu=xid327y`.

Voici le code du bouton :

<!-- TODO : change menu to menuId -->

```handlebars
<!-- contenu du menu -->
<!-- ... -->

<div class='p-3'>
	<a href='/commander?menu={{id}}' class='btn btn-secondary'>Commander</a>
</div>
```

<Message>
<div slot='title'>Query string</div>

Un query string est une chaîne de caractères qui suit le chemin de l'URL et qui contient des paramètres. Il est séparé du chemin par un point d'interrogation `?`, et chaque paramètre est séparé par un `&`. Par exemple, l'URL `https://example.com/path?param1=value1&amp;param2=value2` contient deux paramètres : `param1` et `param2`.

Il est possible de récuperer les paramètres d'une requête HTTP avec la propriété `query` de l'objet `req`.
</Message>

1. Ajouter un bouton « Commander » sur chaque menu qui redirige vers la page `/commander` avec l'identifiant du menu en paramètre
1. Créer une page `commande.handlebars` qui le nom du menu commandé. Cette page aura un titre `<h1>` « Votre commande : menu <nom du menu> » et pour titre de page (balise `<title>`) `Commander - <nom du restaurant>`
1. Servez cette vue sur la route `/commander` grâce à `app.get` et `res.render`
1. Pour récupérer l'`id` passé en paramètre de requête, vous pourrez utiliser `req.query`
1. Rechercher dans l'array `menu` celui qui correspond à l'id en entrée
1. Passer le nom du menu concerné à la vue, comme paramètre de `res.render`

_Aide : vous pourrez utiliser la méthode `Array.find` pour retrouver le bon menu à partir de l'identifiant_

<Solution showAnyway>

**`menus.handlebars`**

```handlebars
  {{#each menus}}
  <div class="col" data-test-menu>
    <div class="card h-100" role="list-item">
    <!-- contenu du menu -->
    <!-- ... -->

    <div class="p-3">
      <a href="/commander?menu={{id}}" class="btn btn-secondary">Commander</a>
    </div>
  </div>
  {{/each}}
```

**`commande.handlebars`**

```handlebars
<h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
	Votre commande : menu
	{{menu.name}}
</h1>
```

**`index.ts`**

```typescript
// <...>
app.get('/commander', (req, res) => {
	const menuId = req.query.menu;
	const menu = menus.find((m) => m.id === menuId);
	if (!menu) {
		res.sendStatus(404);
		return;
	}
	res.render('commander', {
		menu: menu,
		title: `Commander - ${restaurant.name}`
	});
});
```

<Message>
<div slot='title'>Pourquoi utiliser des id ?</div>

Pour identifier un menu, nous pourrions utiliser son nom. Cependant, il est préférable d'utiliser un identifiant unique, car le nom peut changer. Il faudrait alors actualiser tous les liens qui pointent vers ce menu (et prévoir des redirections).

De manière générale, en web, on utilise des identifiants uniques pour identifier les ressources.
</Message>
</Solution>

Avant de passer à l'exercice suivant, vérifiez que les tests passent avec `npm test`.

<div id="exercice-3"></div>

### Exercice 3 : traiter un formulaire HTTP

Nous allons maintenant créer un formulaire pour commander un menu. Ce formulaire contiendra un champ pour le nom, un champ pour l'adresse, et un champ pour le numéro de téléphone. Lorsque l'utilisateur soumettra le formulaire, un message de confirmation s'affichera, lui rappelant ses informations saisies.

#### Créer le formulaire

1. Sur la page `commander.handlebars`, créez un formulaire avec la balise `<form>` et des balises `<input>` qui contient les champs suivants :
   - un champ `name` de type `text` avec le label « Nom »
   - un champ `address` de type `text` avec le label « Adresse »
   - un champ `phone` de type `tel` avec le label « Téléphone »
   - un bouton « Commander » de type `submit`

2. Créez une route `/commander` en `post` qui extrait les données du formulaire et les fourni à la vue `commander.handlebars`. Vous utiliserez `app.post`. Pour récupérer automatiquement les données du formulaire, il faudra ajouter un middleware spécifique : `app.use(express.urlencoded())`
3. Vérifiez que la route est bien appelée lorsque vous soumettez le formulaire. Pour cela, vous pouvez ajouter un `console.log` et vérifier si il apparaît dans le terminal.
4. Modifier la vue `commander.handlebars` pour ajouter un message de confirmation lorsque les données du formulaire sont présentes. Ce message doit contenir le nom, l'adresse et le téléphone du client.
5. Veillez à ce que la page continue d'afficher le nom du menu commandé

_Astuce : vous pourriez avoir besoin de [`<input type="hidden">`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/hidden) et de [`<form method="post">`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Form)_

<Message>
  <div slot='title'>POST vs GET</div>

Il existe plusieurs méthodes HTTP, permettant d'indiquer une intention au serveur. Les deux plus courantes sont `GET` et `POST`.

- La méthode `GET` est utilisée pour récupérer des données. Lorsqu'on saisit une URL dans le navigateur, ce dernier utilise la méthode `GET`.
- La méthode `POST` est utilisée pour envoyer des données. Elle signifie que l'on souhaite effectuer une action qui va modifier un état sur le serveur.

Les données de la méthode `POST` sont envoyées dans le corps de la requête HTTP, et non dans l'URL. Cela permet de transmettre des données plus importantes, comme des fichiers. Pour récupérer les données postées avec un formulaire, on utilise un middleware express appelé `express.urlencoded()` qui les transforme en objet JavaScript et les ajoute à l'objet `req.body`.

</Message>
<br/>
<Solution>

**`commander.handlebars`**

```handlebars
<h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
	Votre commande : menu
	{{menu.name}}
</h1>
{{#if commandeInfo}}
	<div class='alert alert-success mt-3' role='alert' data-test-confirmation>
		<h4 class='alert-heading'>Commande validée !</h4>
		<dl>
			<dt>Nom</dt>
			<dd>{{commandeInfo.name}}</dd>
			<dt>Adresse</dt>
			<dd>{{commandeInfo.address}}</dd>
			<dt>Téléphone</dt>
			<dd>{{commandeInfo.phone}}</dd>
		</dl>
	</div>
{{/if}}

<form method='POST'>
	<input type='hidden' name='menuId' value='{{menu.id}}' />
	<div class='mb-3'>
		<label for='name_input' class='form-label'>Nom</label>
		<input type='texte' name='name' class='form-control' id='name_input' />
	</div>
	<div class='mb-3'>
		<label for='address_input' class='form-label'>Adresse</label>
		<input type='texte' name='address' class='form-control' id='address_input' />
	</div>
	<div class='mb-3'>
		<label for='phone_input' class='form-label'>Téléphone</label>
		<input type='tel' name='phone' class='form-control' id='phone_input' />
	</div>
	<button type='submit' class='btn btn-primary'>Payer</button>
</form>
```

**`index.ts`**

```typescript
app.use(express.urlencoded());
// <...>
app.post('/commander', (req, res) => {
	const { name, address, phone, menuId } = req.body;

	const menu = menus.find((m) => m.id === menuId);
	if (!menu) {
		res.sendStatus(404);
		return;
	}
	res.render('commander', {
		commandeInfo: {
			name,
			address,
			phone
		},
		title: `Commander - ${restaurant.name}`,
		menu
	});
});
```

</Solution>

<div id="exercice-4"></div>

### Exercice 4 : ajouter un middleware pour gérer les erreurs serveurs

<Message>

<div slot='title'>Middleware</div>

Un middleware est une fonction de callback qui prend en paramètre un objet `req`, un objet `res`, et une fonction `next`. Il est utilisé pour effectuer des opérations communes à plusieurs routes, comme la vérification des autorisations, la gestion des erreurs, ou le formatage des données.

```typescript
app.use((req, res, next) => {
	// Ce code est appelé avant chaque route handler (get, post, etc.)
	console.log('Entrée dans le middleware');

	// L'appelle à `next()` permet de passer la main au middleware suivant, ou au route handler si il n'y a plus de middleware
	next();

	// Ce code est appelé après chaque route.
	// On peut accéder à la réponse de la route avec res
	console.log('Sortie du middleware');
});
```

_A noter : l'ordre des middleware est important. Ils sont exécutés dans l'ordre où ils sont déclarés. Par ailleurs, ils doivent être déclarés avant les routes qui les utilisent._

[Voir le guide express sur les middlewares](https://expressjs.com/en/guide/writing-middleware.html)

</Message>

#### Gérer les erreurs 404

1. Créer une vue `erreur.handlebars` qui affiche un message « Page non trouvée » lorsque le code erreur est 404.
2. Implémenter un middleware express qui affiche la vue avec les bons paramètres lorsqu'une page n'est pas trouvée

#### Gérer les erreurs 500

1. Modifier la vue `erreur.handlebars` pour afficher le message « Erreur serveur » lorsque le code erreur est 500.
2. Implémenter un middleware express qui affiche la vue avec les bons paramètres lorsqu'une erreur se produit

<Solution>

**`erreur.handlebars`**

```handlebars
<h1>Erreur {{code}}</h1>
<p>
	{{message}}
</p>
```

**`index.ts`**

```typescript
app.use((req, res, next) => {
	next();
	if (res.statusCode === 404) {
		res.render('erreur', { code: 404, message: 'Page non trouvée' });
	}
	if (res.statusCode === 500) {
		res.render('erreur', { code: 500, message: 'Erreur serveur' });
	}
});
```

</Solution>

### Exercice 5 : améliorations (bonus)

#### Post/Redirect/Get

Après avoir saisi la commande, on reste sur la même url, ce qui signifie que si l'utilisateur rafraichit la page, le formulaire est renvoyé. Pour éviter cela, on peut utiliser le pattern [Post/Redirect/Get](https://fr.wikipedia.org/wiki/Post-Redirect-Get) : après avoir traité le formulaire, on redirige l'utilisateur vers une autre page. Il ne pourra donc pas renvoyer le formulaire en rafraichissant la page.

#### Utiliser un paramètre de l'URL

Plutôt que d'utiliser un query string pour passer l'identifiant du menu, on peut utiliser un paramètre de l'URL. Cela éviterait d'avoir à se servir de input hidden. Par exemple, l'URL `/commander/1` permet de passer l'identifiant du menu `1`. Pour cela, il faut utiliser un paramètre de l'UgwsRL, et non un query string. On peut utiliser la méthode [`app.param`](https://expressjs.com/fr/4x/api.html#app.param) pour récupérer le menu à partir de l'identifiant, et le passer à la vue.

#### Refacto

Tout le code source est dans le fichier `index.ts`. Il serait préférable de séparer le code en plusieurs fichiers, par exemple un fichier `controllers.ts` qui contient les routes et laisser le fichier `index.ts` pour la configuration du serveur.

#### Validation du formulaire

Lors de la soumission du formulaire, on pourrait vérifier que les champs sont bien remplis, et afficher un message d'erreur sur le champs concerné si ce n'est pas le cas. Par ailleurs, on pourrait vérifier que le numéro de téléphone est bien un numéro de téléphone valide.
