
<script>
  import Message from '$lib/ui/Message.svelte';
</script>

# Express

## Objectifs

- Savoir créer un serveur web avec Express et utiliser le routeur
- Savoir lancer des tests et interpréter les erreurs
- Servir les fichiers statiques
- Utiliser un moteur de template pour générer des pages HTML
- Savoir se servir d'un layout
- Savoir traiter un formulaire HTML avec Express
- Comprendre le principe du middleware, et l'utiliser pour gérer les erreurs
- Avoir une première experience avec l'architecture MVC

## Sommaire

- [Préparatifs](#start)
- [Exercice 1 : utiliser le routeur et servir des fichiers statiques](#exercice-1)
- [Exercice 2 : utiliser un moteur de template](#exercice-2)
- [Exercice 3 : traiter un formulaire HTTP](#exercice-3)
- [Exercice 4 : ajouter un middleware pour gérer les erreurs serveurs](#exercice-4)

<div id="start"></div>

## Préparatifs : installer et lancer le projet

### Prérequis : installation

Pour les besoin de développement, nous allons installer nodeJS en local (il n'y est pas sur les machines par défaut). Voici les commandes à effectuer, pour ne pas avoir à installer node en root :

```bash
echo 'export PATH=$HOME/node-local/bin:$PATH' >> ~/.bashrc
. ~/.bashrc
mkdir ~/node-local
mkdir ~/node-latest-install
cd ~/node-latest-install
curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
./configure --prefix=$HOME/node-local
make install
curl -L https://www.npmjs.com/install.sh | sh
```

Si cela ne fonctionne pas, nous utiliserons une version github codespace, un vscode en ligne avec nodeJS déjà installé.

### Installation

Le code se trouve sur github. Pour installer le projet lancer les commandes suivantes :

```bash
# Clone le projet git dans le dossier courant
git clone --branch start https://github.com/johangirod/TP-express
cd TP-express
npm install
```

### Présentation du projet

Ce projet se compose d'un fichier `index.ts` contenant le code source de votre serveur, et d'un dossier `test` contenant les tests (vous n'aurez pas à modifier ce dernier).

À Le fichier `tsconfig.json` contient la configuration typescript.

#### Eslint

Ce projet utilise [eslint](https://eslint.org) pour vérifier la syntaxe du code. Pour lancer la vérification, lancer la commande `npx eslint ./`.

Le fichier `.eslintrc.js` contient la configuration d'eslint.

#### Prettier

Ce projet utilise [prettier](https://prettier.io) pour formater automatiquement le code. Pour lancer le formatage, lancer la commande `npx prettier ./ --write`.

Le fichier `.prettierrc.js` contient la configuration de prettier (vide = standard).

#### Installer les extensions vscode

Pour profiter des annotations eslint et du formattage automatique de prettier dans vscode, il vous suffit d'installer les extensions recommandées du projet. Pour cela, ouvrez le menu des extensions (`Ctrl+Maj+X`) et cherchez "@recommended". Vous devriez voir apparaître les extensions suivantes :

- ESLint
- Prettier - Code formatter

### Lancer le projet

1. Créez le fichier `index.ts` à la racine du projet, contenant un simple `console.log("hello world")`
1. Lancez le projet avec la commande `npx ts-node-dev index.ts`. Vous devriez voir apparaitre « hello world » dans la console.

`ts-node-dev` est un outil qui permet d'executer un fichier node en typescript. Il est très pratique car il relance automatiquement le serveur à chaque modification du code source.

### Tests

Tout au long du TP, vous pourrez vérifier si vous avez réussi l'exercice en lançant les tests avec la commande `npm test`.

Lancez la commande et vérifiez que tout est vert.

<div id="exercice-1"></div>

## Exercice 1 : un serveur web static

Pour commencer, allez sur la branche `exercice-1` du projet :

```bash
git checkout -f exercice-1
```

Le fichier `index.html` contient la page d'accueil du site. Nous allons maintenant créer un serveur web qui servira cette page.


### Ma première route

Nous allons créer une route `/ping` qui renverra un statut 200.

Il vous faudra importer la bibliothèque express, créer une instance de l'application, et ajouter une route `/ping` qui renvoie un statut 200.


1. Installez express avec la commande `npm install express`
1. Installez les types typescript de express avec la commande `npm install -D @types/express` 
1. Importez express dans le fichier `index.ts` avec `import express from 'express'`
1. Créez une instance de l'application express avec `const app = express()`
1. Ajoutez une route `/ping` qui renvoie un statut 200 avec la méthode [`app.get`](https://expressjs.com/fr/4x/api.html#app.get.method)
1. Lancez le serveur avec `npx ts-node-dev src/index.ts`
1. Lancez les tests avec `npm test`
1. Optionnel : ouvrez votre navigateur et allez sur `http://localhost:3000/ping`

<details>
  <summary>Voir la Voir la solution</summary>

```typescript
import express from "express";
const app = express();

app.get("/ping", (req, res) => res.sendStatus(200));

app.listen(3000, () => console.log("Server started"));
```

Testez le serveur en allant sur `http://localhost:3000`.

- `app.get` prend en paramètre un chemin et une fonction de callback qui sera appelée lorsqu'un client se rendra sur ce chemin
- La fonction de callback prend en paramètre un objet `req` qui contient la requête HTTP, et un objet `res` qui contient la réponse HTTP. Ici, nous utilisons la méthode `sendStatus` de l'objet `res` pour envoyer un statut 200.
- `app.listen` permet de lancer le serveur sur le port 3000

<Message>
<div slot='title'>Codes de réponse HTTP</div>

Le statut HTTP est un code numérique qui est renvoyé par le serveur pour indiquer le résultat de la requête au client. Le code 200 signifie que la requête a été traitée avec succès. Le code 404 signifie que la ressource demandée n'a pas été trouvée. Nous verrons d'autres codes de statut HTTP plus tard dans ce TP.

[En savoir plus](https://developer.mozilla.org/fr/docs/Web/HTTP/Status)

</Message>


</details>

### Servir la page d'accueil

Nous allons maintenant servir la page `index.html` lorsque l'utilisateur se rend sur la page d'accueil du site. Pour cela, vous créerez une route `/` qui renvoie le fichier `index.html`.

Pour cela, vous utiliserez la méthode [`sendFile`](https://expressjs.com/fr/4x/api.html#res.sendFile) de l'objet `res`.

Pour construire le chemin du fichier, vous utiliserez la méthode [`join`](https://nodejs.org/api/path.html#path_path_join_paths) du module `path`. Et pour récupérer le chemin du dossier `pages`, vous utiliserez la variable `__dirname`.

<details>
  <summary>Voir la solution</summary>

```typescript
import path from "path";
// <...>
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "index.html")),
);

```

- `__dirname`` est une variable globale qui contient le chemin du dossier courant
- `path.join` permet de construire un chemin à partir de plusieurs morceaux qui fonctionne sur tous les systèmes d'exploitation
- `res.sendFile` permet d'envoyer un fichier au client, avec le bon type MIME


<Message>
<div slot='title'>Type MIME</div>


Le type MIME est un standard qui permet d'indiquer au client comment interpréter la réponse. Par exemple, le type MIME d'un fichier HTML est `text/html`, celui d'une image PNG est `image/png`, et celui du JSON est `application/json`.

Si vous utilisez un framework comme express, vous n'avez généralement pas besoin de vous en soucier, car il devine le type MIME à partir de l'extension du fichier.

Ce dernier est transmis via l'en-tête HTTP `Content-Type`.

[En savoir plus](https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_Types)

</Message>

</details>

### Servir les fichiers statiques (images, css, etc.)

Tous les fichiers statiques (images, css, etc.) se trouvent dans le dossier `assets`. Nous allons maintenant servir ces fichiers statiques, en montant le dossier `assets` sur le chemin `/assets`. 

Pour cela vous utiliserez la méthode [`express.static`](https://expressjs.com/fr/4x/api.html#express.static).

<details>
  <summary>Voir la solution</summary>

```typescript
app.use("/assets", express.static(path.join(__dirname, "assets")));
```
</details>

### Tester le serveur

Vérifiez que tout fonctionne en lançant les tests avec `npm test` avant de passer à l'exercice suivant.

<div id="exercice-2"></div>

## Exercice 2 : Utiliser un moteur de template

Nous allons à présent utiliser un moteur de template pour générer les pages HTML à partir des données de l'application. Il en existe [plusieurs](https://expressjs.com/fr/resources/template-engines.html), nous utiliserons [handlebars](https://handlebarsjs.com/).


Pour commencer, allez sur la branche `exercice-2` du projet :

```bash
git checkout -f exercice-2
```

Un nouveau dossier `models` a été créé, contenant un fichier `restaurant.ts` qui contient les données du restaurant. Nous allons utiliser ces données pour générer les pages du site qui seront situées dans le dossier `views`.


<Message>
<div slot='title'>Moteur de template</div>

Un moteur de template est un outil qui permet de générer des pages HTML à partir de données. Il permet de séparer le code HTML du code javascript, et de générer des pages HTML dynamiques. C'est un outil utilisé dans les applications web qui suivent le [pattern MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur).

</Message>

### Mettre en place handlebars

1. Renommez le fichier `index.html` en `home.handlebars` et déplacez-le dans un nouveau dossier `views`
1. Installez le moteur de template handlebars pour express `express-handlebars` en suivant les instructions de la [documentation](https://github.com/express-handlebars/express-handlebars#installation)
1. Vérifiez que les tests de l'exercice 1 passent toujours grâce à la commande `npm test exercice-1`. Si ce n'est pas le cas, corrigez le code.

<details>
  <summary>Voir la solution</summary>

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
</details>

### Changer le nom et la description du restaurant

1. Dans le fichier `home.handlebars`, remplacez le nom du restaurant par `{{name}}` et la description par `{{description}}`
1. Dans le fichier `index.ts`, importez le fichier `restaurant.ts` avec `import restaurant from "./models/restaurant"`
1. Passez les données du restaurant au moteur de template via [`res.render`](https://expressjs.com/fr/4x/api.html#res.render)

<details>
  <summary>Voir la solution</summary>

```typescript
import restaurant from "./models/restaurant";
// <...>

app.get('/', (req, res) => {
    res.render('home', restaurant);
});
```

</details>


### Utiliser les layouts

Un layout est un fichier qui contient le squelette de la page. Il permet de factoriser le code HTML commun à toutes les pages du site, comme le header et le footer. Nous allons mettre à jour le layout par défaut `main.handlebars`, et laisser la possibilité de paramétrer le titre de la page.


1. Déplacez le code HTML commun dans le fichier `main.handlebars` de telle sorte que le fichier `home.handlebars` ne contienne que le contenu spécifique à la page d'accueil (ce qui se trouve à l'intérieur de la balise `<div class="row ...">`)
1. Changez le titre de la page d'accueil (balise `<title>`) par `<nom du restaurant>`
1. Faire en sorte que les tests « Exercice 1 - Home » passent

<details>
  <summary>Voir la solution</summary>
**`main.handlebars`**
```handlebars
<html lang="en">
  <head>
    <!-- META -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <!-- Bootstrap icons-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <!-- Google fonts-->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
      rel="stylesheet"
      type="text/css"
    />
    <!-- TITLE -->
    <title>{'{{'}title{'}}'}</title>
  </head>
  <body>
    <main role="main">
      <div class="container col-xxl-8 px-4 py-5">
        {'{{{'}body{'}}}'}
      </div>
    </main>
  </body>
</html>
```

</details>

### Créer une page pour afficher le menu

Voici le template bootstrap proposé pour un menu :

```handlebars
  <div class="col" data-test-menu>
    <div class="card h-100" role="list-item">
      <div class="card-body">
        <h2 class="card-title">{'{{'}name{'}}'}</h5>
        <p class="card-text">{'{{'}description{'}}'}</p>
        <p class="card-text">{'{{'}price{'}}'}€</p>
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

Créez une nouvelle page `menu.handlebars`, servi sur l'URL `/menu` qui affiche les menus du restaurant présents dans `models/menus`. Pour éviter de dupliquer le code HTML, vous le bloc handlebars [`{{#each}}`](https://handlebarsjs.com/guide/builtin-helpers.html#each) pour afficher tous les plats du menu. Cette page aura un titre `<h1>` « Menus » et pour titre de page (balise `<title>`) `Menus - <nom du restaurant>`


<details>
  <summary>Voir la solution</summary>



**`index.ts`**
```typescript
import menus from "./models/menus";
// <...>

app.get('/menus', (req, res) => {
    res.render('menus', {
        title: `Menus - ${restaurant.name}`,
        menus,
    });
});
```
**`menus.handlebars`**
```handlebars
<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Menus</h1>
<div class="row row-cols-1 row-cols-md-3 g-4">
{'{{'}#each menus{'}}'}
  <div class="col">
    <div class="card h-100" role="list-item" data-test-menu>
      <div class="card-body">
        <h2 class="card-title">{'{{'}name{'}}'}</h5>
        <p class="card-text">{'{{'}description{'}}'}</p>
        <p class="card-text">{'{{'}price{'}}'}€</p>
      </div>
    </div>
  </div>
{'{{'}/each{'}}'}
</div>
```

</details>

## Créer une page pour commander un menu

Nous allons ajouter un bouton sur les menu pour pouvoir les commander. Ce bouton doit rediriger vers la page `/commander`. Pour passer au serveur l'identifiant du menu, nous allons utiliser un paramètre de l'URL (appelé `query string parameter`). Par exemple, pour le menu avec l'identifiant `1`, l'URL sera `/commander?menu=1`.

<Message>
<div slot='title'>Query string</div>

Un query string est une chaîne de caractères qui suit le chemin de l'URL et qui contient des paramètres. Il est séparé du chemin par un point d'interrogation `?`, et chaque paramètre est séparé par un `&`. Par exemple, l'URL `https://example.com/path?param1=value1&amp;param2=value2` contient deux paramètres : `param1` et `param2`.

Il est possible de récuperer les paramètres d'une requête HTTP avec la propriété `query` de l'objet `req`.
</Message>

1. Ajoutez un bouton « Commander » sur chaque menu qui redirige vers la page `/commander` avec l'identifiant du menu en paramètre
1. Créer une page `commande.handlebars` qui le nom du menu commandé. Cette page aura un titre `<h1>` « Votre commande : menu <nom du menu> » et pour titre de page (balise `<title>`) `Commander - <nom du restaurant>`

*Aide : vous pourrez utiliser la méthode `Array.find` pour retrouver le bon menu à partir de l'identifiant* 

<details>
  <summary>Voir la solution</summary>

**`menus.handlebars`**
```handlebars
  {{#each menus}}
  <div class="col" data-test-menu>
    <div class="card h-100" role="list-item">   
    <!-- contenu du menus -->
    <!-- ... -->

    <div class="p-3">
      <a href="/commander?menu={{id}}" class="btn btn-secondary">Commander</a>
    </div>
  </div>
  {{/each}}
```

**`commande.handlebars`**
```handlebars
<h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
  Votre commande : menu
  {{name}}
</h1>
```

**`index.ts`**
```typescript
  // <...>
app.get("/commander", (req, res) => {
  const menuId = req.query.menu;
  const menu = menus.find((m) => m.id === menuId);
  if (!menu) {
    res.sendStatus(404)
    return;
  }
  res.render("commander", {
    name: menu?.name,
    title: `Commander - ${restaurant.name}`,
  });
});

```

<Message>
<div slot='title'>Pourquoi utiliser des id ?</div>

Pour identifier un menu, nous pourrions utiliser son nom. Cependant, il est préférable d'utiliser un identifiant unique, car le nom peut changer. Il faudrait alors actualiser tous les liens qui pointent vers ce menu (et prévoir des redirections).

De manière générale, en web, on utilise des identifiants uniques pour identifier les ressources.
</Message>
</details>

Avant de passer à l'exercice suivant, vérifiez que touts les tests passent avec `npm test`.

<div id="exercice-3"></div>

## Exercice 3 : traiter un formulaire HTTP

Nous allons maintenant créer un formulaire pour commander un menu. Ce formulaire contiendra un champ pour le nom, un champ pour l'adresse, et un champ pour le numéro de téléphone. Lorsque l'utilisateur soumettra le formulaire, un message de confirmation s'affichera sur la page, contenant les données du formulaire.


### Créer le formulaire

1. Sur la page `commander.handlebars`, créez un formulaire qui contient les champs suivants :
   - un champ `name` de type `text` avec le label « Nom »
   - un champ `address` de type `text` avec le label « Adresse »
   - un champ `phone` de type `text` avec le label « Téléphone »
   - un bouton « Commander » de type `submit`
2. Créez une route `/commander` en post qui extrait les données du formulaire et les fourni à la vue `commander.handlebars`
3. Modifier la vue `commander.handlebars` pour ajouter un message de confirmation lorsque les données du formualire sont présentes. La balise HTML contenant le message de confirmation devra avoir l'attribut `data-test-confirmation` pour que les tests puissent la trouver.

<div id="exercice-4"></div>

## Exercice 4 (bonus) : ajouter un middleware pour gérer les erreurs serveurs

### Gérer les erreurs 404
1. Créer une vue `erreur.handlebars` qui affiche un message « Page non trouvée » lorsque le code erreur est 404.
2. Implémenter un middleware express qui affiche la vue avec les bons paramètres lorsqu'une page n'est pas trouvée


### Gérer les erreurs 500
1. Modifier la vue `erreur.handlebars` pour afficher le message « Erreur serveur » lorsque le code erreur est 500.
2. Implémenter un middleware express qui affiche la vue avec les bons paramètres lorsqu'une erreur se produit