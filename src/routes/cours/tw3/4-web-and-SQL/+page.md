<script>
  import Message from '$lib/Message.svelte';
  import Solution from '$lib/Solution.svelte';
  import { showSolution } from '$lib/showSolution.ts';
  showSolution.set(true);
</script>

<svelte:head>

<title>Serveur web avec SQL - Johan Girod</title>
</svelte:head>

# Serveur web et base de données

Ce TP vous permettra de créer un serveur web avec express, et de le connecter à une base de données SQL.

Nous reprendrons le projet du TP précédent, et nous ajouterons une base de données pour stocker les données des menus et des commandes.

Nous créerons une nouvelle vue pour le restaurateur qui affiche les commandes effectuées.

## Objectifs d'apprentissage

- Continuer d'approfondir l'architecture MVC (Modèle-Vue-Contrôleur)
- Utiliser un router avec express
- Refactorer du code en s'appuyant sur des tests
- Utiliser une base de données dans une application web (lecture et écriture)
- Utiliser async/await pour gérer les promesses dans un cas d'utilisation réel

## Sommaire

- [Préparatifs](#start)
- [Exercice 1 : refactoring du code](#exercice-1)
- [Exercice 2 : utiliser la base de données en lecture](#exercice-2)
- [Exercice 3 : utiliser la base de données en écriture](#exercice-3)
- [Exercice 4 : créer une page qui liste toutes les commandes](#exercice-4)

<span id="start"></span>

## Préparatifs : installer et lancer le projet

Cette fois-ci, nous utiliserons l'environnement de développement sur les machines de l'école.

Des scripts docker ont été créés pour lancer le serveur et la base de données.

### Clonage du projet

Le code se trouve sur Github. Pour installer le projet, lancer les commandes suivantes :

```bash
# Clone le projet git dans le dossier courant
git clone --branch TP-2 https://github.com/johangirod/TP-serveur-web
cd TP-serveur-web
```

### Présentation du projet

Ce projet reprend à la fin de l'exercice 2 du TP précédent. Il contient donc déjà un serveur web avec express, les vues, et les routes permettant d'afficher les menus et de commander.

Le code se trouve dans le dossier `src`.

Ouvrez le dossier dans vscode avec la commande `code .`. Vous pouvez parcourir le code source pour vous familiariser avec le projet.

Il y a une petite différence dans le fichier `index.ts` avec le TP précédent. Pouvez-vous la trouver ?

<Solution >

Nous utilisons les fonctions `getMenuById`, `getAllMenus` et `getRestaurant` pour récupérer les informations sur les menus et le restaurant. Ces fonctions sont définies dans le fichier `src/models.ts`.

Cela nous permettra de modifier le code plus facilement par la suite.

</Solution>

#### Installer les extensions vscode

Pour profiter des annotations eslint et du formattage automatique de prettier dans vscode, il vous suffit d'installer les extensions recommandées du projet. Pour cela, ouvrez le menu des extensions (`Ctrl+Maj+X`) et cherchez "@recommended". Vous devriez voir apparaître les extensions suivantes :

- ESLint
- Prettier - Code formatter

### Lancer le projet

Ce projet utilise une base de données mySQL. Pour créer et lancer un container docker avec la base de données, lancer la commande suivante :

```bash
sh scripts/database-start.sh
```

Pour initialiser la base de données et lancer le serveur, lancer la commande suivante :

```bash
sh scripts/start.sh
```

Vérifiez que le serveur est bien lancé en allant sur `http://localhost:3000`.

Lancez les tests et vérifiez que tout est vert avec la commande suivante :

```bash
sh scripts/test.sh
```

A tout moment, vous pouvez voir les logs du serveur avec la commande suivante :

```bash
docker logs -f app
```

<span id="exercice-1"></span>

## Exercice 1 : refactoring du code

Le fichier `index.ts` contient tout le code du serveur. Nous allons le découper en plusieurs fichiers pour améliorer la lisibilité et la maintenabilité du code. C'est ce qu'on appelle le refactoring ( « refactorisation » ou « remaniement » en français)

Nous nous baserons sur l'architecture MVC (Modèle-Vue-Contrôleur) pour découper le code.

<img src="/images/mvc_express.png" alt="Architecture MVC" style="width: 100%">

À chaque étape de l'exercice, vous pourrez lancer les tests pour vérifier que tout fonctionne toujours.

<Message>

<div slot='title'>A quoi sert le refactoring ?</div>

Le refactoring est une étape importante dans le développement d'une application. Il permet de rendre le code plus lisible et plus maintenable.

En effet, plus l'application grandit, plus il devient difficile de comprendre le code et de le modifier si tout est dans un seul fichier.

</Message>

### Utiliser un router

Créer un fichier `src/routes.ts`. Nous allons déplacer les routes de l'application dans ce fichier. Il ne restera plus que la configuration du serveur dans `index.ts`.

Pour créer un router avec express, nous utiliserons la méthode `Router` d'express.

```typescript
import express from 'express';

const router = express.Router();
```

On peut ensuite ajouter des routes à ce router avec les méthodes `get`, `post`, etc, de la même façon qu'avec l'objet `app`.

```typescript
router.get('/', (req, res) => {
	// ...
});
```

Déplacer toutes les routes du fichier `index.ts` vers le fichier `routes.ts`, en remplaçant `app` par `router`. N'oubliez pas d'exporter le router à la fin du fichier avec `export default router` (sinon il ne pourra pas être importé dans les autres fichiers).

<Message>

<div slot='title'>Qu'est-ce qu'une route ?</div>

Une route est définie par une méthode HTTP et un chemin. Par exemple, la route `GET /` correspond à la page d'accueil, et la route `POST /commander` correspond à la page de commande.

Avec Express, on peut définir une route avec les méthodes `get` ou `post` par exemple (comme vu dans le TP précédent).

</Message>

Pour utiliser ce router dans l'application, il faut l'ajouter à l'application avec la méthode `use` :

```typescript
import router from './routes';
// <...>
app.use(router);
```

<Solution >

**src/routes.ts**

```typescript
import express from 'express';
import { getRestaurant, getMenuById, getAllMenus } from './models';

const router = express.Router();

router.get('/ping', (req, res) => res.sendStatus(200));
router.get('/', (req, res) => {
	const restaurant = getRestaurant();
	res.render('home', {
		name: restaurant.name,
		description: restaurant.description,
		title: restaurant.name
	});
});

router.get('/menus', (req, res) => {
	const restaurant = getRestaurant();
	const menus = getAllMenus();
	res.render('menus', {
		menus,
		title: `Menus - ${restaurant.name}`
	});
});

router.get('/commander', (req, res) => {
	const menuId = req.query.menu;
	const restaurant = getRestaurant();
	const menu = getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
	}
	res.render('commander', {
		menu,
		title: `Commander - ${restaurant.name}`
	});
});

router.post('/commander', (req, res) => {
	const { name, address, phone, menuId } = req.body;

	const restaurant = getRestaurant();
	const menu = getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
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

export default router;
```

</Solution>

### Définir les contrôleurs

<Message>

<div slot='title'>Qu'est-ce qu'un contrôleur ?</div>

Un contrôleur est la fonction qui est appelée lorsqu'une route est activée. Il prend en paramètre la requête et la réponse, et effectue des actions dans la réponse en fonction de la requête. Il peut, par exemple, récupérer des données dans le modèle, et les afficher dans une vue.

</Message>

Créer un fichier `src/controllers.ts`. Nous allons déplacer les fonctions de callback des routes dans ce fichier.

Ce fichier devra exporter les fonctions suivantes :

- `getHomePage`
- `getMenusPage`
- `getCommanderPage`
- `createCommandeFromFormulaire`

Déplacer les fonctions de callback des routes dans ce fichier, et remplacer les fonctions de callback par les fonctions du controller.

Pour garder la signature des fonctions, il faudra ajouter les types `Request` et `Response` d'express aux paramètres.

```typescript
// src/controllers.ts
import { Request, Response } from 'express';

export function getHomePage(req: Request, res: Response) {
	// <...>
}
```

<Solution >

**src/controllers.ts**

```typescript
import { Request, Response } from 'express';
import { getRestaurant, getMenuById, getAllMenus } from './models';

export function getHomePage(req: Request, res: Response) {
	const restaurant = getRestaurant();
	res.render('home', {
		name: restaurant.name,
		description: restaurant.description,
		title: restaurant.name
	});
}

export function getMenusPage(req: Request, res: Response) {
	const restaurant = getRestaurant();
	const menus = getAllMenus();
	res.render('menus', {
		menus,
		title: `Menus - ${restaurant.name}`
	});
}

export function getCommanderPage(req: Request, res: Response) {
	const menuId = req.query.menu;
	const restaurant = getRestaurant();
	const menu = getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
	}
	res.render('commander', {
		menu,
		title: `Commander - ${restaurant.name}`
	});
}

export function createCommandeFromFormulaire(req: Request, res: Response) {
	const { name, address, phone, menuId } = req.body;

	const restaurant = getRestaurant();
	const menu = getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
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
}
```

**src/routes.ts**

```typescript
import express from 'express';
import {
	getHomePage,
	getMenusPage,
	getCommanderPage,
	createCommandeFromFormulaire
} from './controllers';

const router = express.Router();

router.get('/ping', (req, res) => res.sendStatus(200));
router.get('/', getHomePage);
router.get('/menus', getMenusPage);
router.get('/commander', getCommanderPage);
router.post('/commander', createCommandeFromFormulaire);

export default router;
```

</Solution>

Les tests passent toujours ? Parfait ! Nous pouvons continuer.

<span id="exercice-2"></span>

## Exercice 2 : utiliser la base de données en lecture

Nous allons maintenant faire en sorte que notre application utilise une base de données pour récupérer les informations sur les menus et les commandes.

La base de données est déjà créée et contient les données des menus, ainsi qu'une table vide pour les commandes.

Vous pouvez explorer la base grâce à la commande suivante :

```bash
sh scripts/database-cli.sh
```

Le mot de passe est `secret`.

Pour voir la table des menus, lancer la commande suivante :

```sql
SELECT * FROM menus;
```

Vous devriez voir apparaître la liste des menus, avec le nom, la description, le prix, et l'id.

### Récupérer les menus dans la base de données

Dans le fichier `src/models.ts`, nous allons modifier la fonction `getAllMenus` pour qu'elle utilise la base de données plutôt que l'objet `menus`.

Pour cela, nous allons créer une connection à la base de données avec le module `mysql2`.

1. Importer le module `mysql2/promise` dans le fichier `models.ts`.

   ```typescript
   // models.ts
   import mysql from 'mysql2/promise';
   ```

2. Dans ce même fichier, créer une connexion à la base de données avec les informations de connexion stockées dans les variables d'environnement.

   ```typescript
   // models.ts
   const db = await mysql.createConnection({
   	host: process.env.MYSQL_HOST,
   	user: process.env.MYSQL_USER,
   	database: process.env.MYSQL_DB,
   	password: process.env.MYSQL_PASSWORD
   });
   ```

   <Message>

   <div slot='title'>Pourquoi utiliser des variables d'environnement ?</div>

   Les variables d'environnement permettent de **stocker des informations sensibles**, comme les identifiants de connexion à la base de données, **en dehors du code source**.

   Cela permet de garder ces informations confidentielles, et de les changer facilement en fonction de l'environnement (développement, production, etc).

   </Message>

3. Rendre la fonction `getAllMenus` asynchrone, en ajoutant le mot clé `async` devant la fonction et changeant le type de retour de `Array<Menu>` à `Promise<Array<Menu>>`.

4. Récupérer les menus dans la base de données avec une commande SQL grâce à la méthode `db.execute`

   ```typescript
   // function getAllMenus()
   const queryResult = await db.execute('SELECT * FROM menus');
   const result = queryResult[0] as Array<Menu>;
   return result;
   ```

   - _Note : `execute` retourne un tableau de deux éléments : le résultat de la requête (les menus), et les métadonnées de la requête (le type des colonnes retournées par exemple)._
   - _Note 2 : Typescript ne peut pas deviner le type de retour de `execute`, il faut donc le préciser avec `as Array<Menu>`._

5. Modifier le controller `getMenusPage` pour qu'il attende que la fonction `getAllMenus` soit terminée avant de continuer en ajoutant le mot clé `async` devant `function` et le mot clé `await` devant `getAllMenus`.

```typescript
// controller getMenusPage
const menus = await getAllMenus();
```

_Note : il n'y a pas de tests pour cet exercice. Vous pouvez vérifier que tout fonctionne en lançant le serveur et en allant sur la page des menus._

<Solution >

**src/controllers.ts**

```typescript
// <...>
async function getMenusPage(req: Request, res: Response) {
	const restaurant = getRestaurant();
	const menus = await getAllMenus();
	res.render('menus', {
		menus,
		title: `Menus - ${restaurant.name}`
	});
}
```

**src/models.ts**

```typescript
import mysql from 'mysql2/promise';

// <...>

const db = await mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	database: process.env.MYSQL_DB,
	password: process.env.MYSQL_PASSWORD
});

export async function getAllMenus(): Promise<Array<Menu>> {
	const queryResult = await db.execute('SELECT * FROM menus');
	const result = queryResult[0] as Array<Menu>;
	return result;
}
```

</Solution>

### Récupérer un menu par son id

De la même manière, nous allons modifier la fonction `getMenuById` pour qu'elle utilise la base de données. La requête SQL pour récupérer un menu par son id est la suivante :

```sql
SELECT * FROM menus WHERE id = ?
```

La fonction `execute` remplacera les `?` par les valeurs passées dans un tableau en second paramètre :

```typescript
// la valeur de `id` remplacera le `?` dans la requête
db.execute('SELECT * FROM menus WHERE id = ?', [id]);
```

Attention, on veut récupérer un menu unique, et non un tableau de menu.
Vérifiez que tout fonctionne en cliquant sur « commander » sur la page des menus (n'oubliez pas de modifier le controller également).

<Solution >

**src/controllers.ts**

```typescript
export async function getCommanderPage(req: Request, res: Response) {
	const menuId = req.query.menu;
	const restaurant = getRestaurant();
	const menu = await getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
	}
	res.render('commander', {
		menu,
		title: `Commander - ${restaurant.name}`
	});
}

export async function createCommandeFromFormulaire(req: Request, res: Response) {
	const { name, address, phone, menuId } = req.body;

	const restaurant = getRestaurant();
	const menu = await getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
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
}
```

**src/models.ts**

```typescript
export async function getMenuById(id: string): Promise<Menu | undefined> {
	const query = await db.execute(`SELECT * FROM menus WHERE id = ?`, [id]);
	const result = query[0] as Array<Menu>;
	return result[0];
}
```

</Solution>

<span id="exercice-3"></span>

## Exercice 3 : utiliser la base de données en écriture

Le but de cet exercice est de sauvegarder les commandes passées par les clients dans la base de données.

### Créer un modèle pour une commande

1. Ajouter une section `commandes` dans le fichier `models.ts` (comme pour les sections `menus` et `restaurant`).
2. Créer un type typescript `Commande` avec les propriétés suivantes :
   - `id` : un identifiant unique pour la commande
   - `name` : le nom du client
   - `address` : l'adresse du client
   - `phone` : le numéro de téléphone du client
   - `menuId` : l'id du menu commandé

3. Créer une fonction `createCommande` avec le type suivant :

```typescript
export async function createCommande(
	name: string,
	address: string,
	phone: string,
	menuId: string
): Promise<Commande> {
	// <...>
}
```

4. Utiliser la méthode `execute` avec une la requête SQL suivante pour insérer une nouvelle commande dans la base de données :

```sql
INSERT INTO orders (name, address, phone, menu_id) VALUES (?, ?, ?, ?)
```

5. Retourner la commande créée avec l'id généré par la base de données. Pour cela on peut utiliser la propriété `insertId` retournée par `execute`.

```typescript
const commandeId = queryResult[0].insertId;
```

Pour indiquer à typescript que la commande SQL est une « insert » qui retourne un id, on peut préciser un paramètre de type à la fonction `db.execute` (nous verrons ce qu'est un paramètre de type dans un autre cours)

```typescript
await db.execute<ResultSetHeader>(// ...)
```

6. Modifier le controller `createCommandeFromFormulaire` pour qu'il utilise la fonction `createCommande` et qu'il affiche l'id de la commande dans le message de confirmation.

_Pour tester, vous pouvez créer une commande avec le formulaire, et vérifier que la commande est bien créée dans la base de données avec la commande `SELECT * FROM orders`, via le script `scripts/database-cli.sh`._

<Solution >

**src/models.ts**

```typescript
// <...>
type Commande = {
	id: number;
	name: string;
	address: string;
	phone: string;
	menuId: string;
};

export async function createCommande(
	name: string,
	address: string,
	phone: string,
	menuId: string
): Promise<Commande> {
	const queryResult = await db.execute<ResultSetHeader>(
		'INSERT INTO orders (name, address, phone, menu_id) VALUES (?, ?, ?, ?)',
		[name, address, phone, menuId]
	);
	return {
		id: queryResult[0].insertId.toString(),
		name,
		address,
		phone,
		menuId
	};
}
```

**src/controllers.ts**

```typescript
// <...>
export async function createCommandeFromFormulaire(req: Request, res: Response) {
	const { name, address, phone, menuId } = req.body;

	const restaurant = getRestaurant();
	const menu = await getMenuById(menuId as string);
	if (!menu) {
		return res.status(404);
	}

	const commande = await createCommande(name, address, phone, menuId);

	res.render('commander', {
		commandeInfo: commande,
		title: `Commander - ${restaurant.name}`,
		menu
	});
}
```

**src/views/commander.handlesbars**

```handlebars
{{#if commandeInfo}}
	<div class='alert alert-success mt-3' role='alert' data-test-confirmation>
		<h4 class='alert-heading'>Commande validée !</h4>
		<dl>
			<!-- <...> -->
			<dt>Numéro de commande</dt>
			<dd>{{commandeInfo.id}}</dd>
		</dl>
	</div>
{{/if}}
```

</Solution>

<span id="exercice-4"></span>

## Exercice 4 : créer une page qui liste toutes les commandes

### Créer une nouvelle page commandes

Créer une nouvelle page `/commandes` qui affiche la liste des commandes passées, avec le nom, l'adresse, le téléphone et l'id du menu commandé.

Vous devrez créer une route, un controller, une vue, et une nouvelle fonction dans le modèle.

<Solution >

**src/routes.ts**

```typescript
router.get('/commandes', getCommandesPage);
```

**src/controllers.ts**

```typescript
async function getCommandesPage(req: Request, res: Response) {
	const restaurant = getRestaurant();
	const commandes = await getAllCommandes();
	res.render('commandes', { commandes, title: `Liste des commandes - ${restaurant.name}` });
}
```

**src/models**

```typescript
async function getAllCommandes() {
	// On change le nom de la colonne menu_id en menuId pour correspondre au type Commande
	const queryResult = await db.execute('SELECT *, menu_id as menuId FROM orders');
	return queryResult[0] as Array<Commande>;
}
```

**src/views/commandes.handlebars**

```typescript
{{#each commandes}}
	<div class='card mb-3'>
		<div class='card-body'>
			<h5 class='card-title'>Commande n°{{id}}</h5>
			<dl>
				<dt>Nom</dt>
				<dd>{{name}}</dd>
				<dt>Adresse</dt>
				<dd>{{address}}</dd>
				<dt>Téléphone</dt>
				<dd>{{phone}}</dd>
				<dt>Menu</dt>
				<dd>{{menuId}}</dd>
			</dl>
		</div>
	</div>
{{/each}}
```

</Solution>

### Afficher le nom du menu commandé avec la commande

Dans la liste des commandes, on veut afficher le nom du menu commandé plutôt que son id. Pour cela, il faut modifier la fonction du modèle pour qu'elle récupère le nom du menu avec une jointure SQL.

1. Modifier le type `Commande` pour ajouter la propriété `menuName` de type `string`. Cette propriété sera facultative (`menuName?: string;`), car elle ne sera pas retournée par la fonction `createCommande`.
2. Modifier la fonction du modèle pour qu'elle récupère le nom du menu avec une jointure SQL.
   ```sql
   SELECT orders.*, orders.menu_id as menuId, menus.name AS menuName FROM orders JOIN menus ON orders.menu_id = menus.id
   ```
3. Modifier la vue et le controller

### Ajouter des filtres sur la page des commandes

Sur la page des commandes, ajouter des boutons pour filtrer les commandes par menu commandé. Vous devrez :

- créer une nouvelle fonction dans le modèle `getCommandesByMenuId` qui prend en paramètre l'id du menu et retourne la liste des commandes correspondantes.
- ajouter un lien par menu dans le fichier `commandes.handlebars` qui pointe vers la page `/commandes?menu=ID_DU_MENU`
- modifier le controller créer précédement pour qu'il utilise la nouvelle fonction du modèle si l'id du menu est présent dans la requête.

### Ajouter un bouton pour supprimer une commande

Ajouter un bouton pour supprimer une commande à côté de la commande. Pour cela, il faudra créer une nouvelle route et un nouveau controller. Cette route aura pour méthode `post` et prendra en paramètre l'id de la commande à supprimer : `/commandes/delete/:id`.

### Ajouter la gestion d'erreur

Que se passe-t-il si la base de données n'est pas disponible ? Modifiez les controllers pour prendre en compte le cas où l'appel au modèle retourne une erreur.
