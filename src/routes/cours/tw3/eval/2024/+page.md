# Evaluation TW3 2024

Dans ce TP, vous aurez à réaliser un site web qui répertorie les concerts et soirées dans les grandes villes de France, et qui permet d'acheter des billets pour ces événements.

Vous devrez réaliser les fonctionnalités suivantes :

- Affichage de la liste des événements
- Afficher les billets achetés par un utilisateur depuis la base de donnée
- Formulaire pour acheter un billet

## Information et consignes générales

**Important** : lisez attentivement cette section avant de commencer le TP

- Vous pouvez utiliser [**les corrigés** des TPs précédents](https://johangirod.com/cours)
- Vous pouvez utiliser **internet** librement
- Vous ne **pouvez pas communiquer** entre vous
- Vous ne pouvez **pas utiliser des agents conversationnels** (ex: chatGPT, copilot, etc)
- Vous pouvez solliciter l'enseignant pour toute question relative à la **compréhension de l'énoncé**, ou de lancement de l'application (base de données, container, etc), ou si vous pensez avoir **trouvé une erreur/bug** dans l'énoncé ou les tests.
- Lisez les énoncés des exercices jusqu'au bout avant de commencer à coder, des informations importantes peuvent être données à la fin.
- Les exercices sont complètement indépendants. En cas de blocage, ou de difficultés, **passez à l'exercice suivant**.
- Le TP est sur 21 points (un point bonus). La note est calculée automatiquement avec les tests. Je regarderai le code si la note est inférieure à 10.

_Le conseil bonus :_

- Faites bien attention aux erreurs liées à l'oublie de `await` devant les fonctions asynchrones.

## Installation et test

1. Cloner le dépôt git suivant :
   ```bash
   git clone https://sources.univ-jfc.fr/techno-web-3/eval-2024.git
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Initialiser la base de donnée :
   ```bash
   npm run db:init
   ```
4. Lancez les tests :
   ```bash
   npm test
   ```
5. Lancez le serveur :
   ```bash
   npm start
   ```

Si une de ces étapes ne fonctionne pas, merci de le signaler à l'enseignant.

## Checkpoint

Lancer la commande suivante

```bash
npm run checkpoint
```

Vous pourrez sauvegarder votre travail (et votre note actuelle) à tout moment grâce à cette commande. N'hésitez pas la à lancer régulièrement au fur et à mesure de vos progrès.

Si vous rencontrez un problème, vous pourrez revenir au dernier checkpoint en l'utilisant.

## Rendu du TP

```bash
npm run checkpoint
git branch <identifiant_etudiant> # exemple : git branch jgirod
git push origin <identifiant_etudiant> # exemple : git push origin jgirod
```

## Exercice 1 - _4 points_

_Pour lancer uniquement les tests de cet exercice : `npm test -- exercice-1`_

1. Creer une route `/ping` qui retourne un statut 200
2. Servir la vue `home` sur la route `/`. Bonus : créer un controller dédié `getHomePage` dans le fichier `controllers.ts`
3. Monter le dossier `public` sur la route `/assets`, de tel sorte que le fichier `public/concert.jpg` soit accessible à l'url `/assets/concert.jpg`

## Exercice 2 - _10 points_

_Pour lancer uniquement les tests de cet exercice : `npm test -- exercice-2`_

### Partie 1 - _7 points_

Créer une page `/evenements` qui liste l'ensemble des évenements. Vous utiliserez la fonction `getAllEvenements` pour récupérer la liste des événements (elle est déjà implémentée dans `models/evenements.ts`).

Le type de retour de la fonction `getAllEvenements` est `Promise<Array<Evenement>>`, vous pouvez consulter le fichier `models/evenements.ts` pour voir la structure de l'objet `Evenement`.

**Consignes**

- Le `<title>` de la page doit être `Concerts et soirées`
- La page doit afficher comme titre `<h2>` : `Découvrez nos événements`
- La page doit afficher la liste des événements sous forme de carte (voir proposition de HTML plus bas), contenant le titre, la description, la ville, la date, et l'image de l'événement.
- Chaque événement doit avoir un lien pour acheter un billet. Ce lien doit rediriger vers la page `/evenements/<id>/acheter-billet` (où `<id>` est l'id de l'événement). Par exemple pour l'événement d'id 12, le lien doit rediriger vers `/evenements/12/acheter-billet/`
- La page doit être servie via un controller dédié `getEvenementsPage` dans le fichier `controllers.ts`
- Pour formater la date en français avec handlebar, vous pouvez utiliser le helper `formatDate`. Par exemple, si le nom de la propriété est `maDate`, vous pouvez la formater directement dans la vue en utilisant `{{ formatDate maDate }}`

**Proposition de HTML pour la page `/evenement` :**

```html
<div class="container mx-auto px-6 py-12">
	<h2 class="mb-8 text-center text-4xl font-bold">
		<!-- Titre h2 -->
	</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<!-- Liste des évènements ici -->
	</div>
</div>
```

**Proposition de HTML pour un évènement (à transformer en template handlebar) :**

```html
<div class="flex h-full flex-col overflow-hidden rounded-xl bg-white text-purple-900 shadow-xl">
	<img src="" class="h-48 w-full object-cover" />
	<!-- Modifier la src de l'image ci-dessus -->
	<div class="flex flex-grow flex-col p-6">
		<h3 class="mb-2 text-xl font-semibold">
			<!-- Titre de l'évènement ici -->
		</h3>
		<p class="mb-4 flex-grow text-gray-600">
			<!-- Description de l'évènement ici -->
		</p>
		<div class="mt-auto">
			<div class="mb-4 flex items-center justify-between">
				<span class="flex items-center">
					<i data-lucide="map-pin" class="mr-1 h-4 w-4"></i>
					<!-- Nom de la ville ici -->
				</span>
				<span class="flex items-center">
					<i data-lucide="calendar" class="mr-1 h-4 w-4"></i>
					<!-- Date de l'évènement ici -->
				</span>
			</div>
			<div class="flex-end flex items-center">
				<a
					class="flex items-center rounded-full bg-gradient-to-r from-purple-700 to-pink-600 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:from-purple-600 hover:to-pink-500"
					href=""
				>
					<!-- Modifier le href ci-dessus -->
					<i data-lucide="ticket" class="mr-2 h-4 w-4"></i>
					Acheter une place
				</a>
			</div>
		</div>
	</div>
</div>
```

### Partie 2 - _3 points_

_N'hésitez pas à passer à l'exercice suivant si vous avez des difficultés avec cette partie_

Ajouter un filtre de ville pour la page `/evenements`.

En ajoutant une query string `ville` à la route `/evenements`, la page doit afficher uniquement les événements de la ville correspondante. Par exemple, si l'url est `/evenements?ville=Paris`, la page doit afficher uniquement les événements qui ont pour ville de Paris.

Le titre `title` de la page doit être `Concerts et soirées à Paris` si la query string `ville` est égale à `Paris`.

Le titre `h2` de la page doit être `Découvrez nos événements à Paris` si la query string `ville` est égale à `Paris`.

Vous pourrez utiliser la fonction `getEvenementsByVille` dans `models/evenements.ts` pour récupérer les événements par ville.

## Exercice 3 - _6 points_

_Pour lancer uniquement les tests de cet exercice : `npm test -- exercice-3`_

Nous allons maintenant ajouter la possibilité d'acheter des billets pour les événements.
La base de donnée contient une table `billets` qui contient les champs suivants :

- `id` : l'identifiant du billet
- `nom` : le nom de la personne qui a acheté le billet
- `prenom` : le prénom de la personne qui a acheté le billet
- `evenementId` : l'identifiant de l'événement pour lequel le billet a été acheté

La connection à la base de donnée peut être configurée avec les options suivantes :

```typescript
const db = await mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'secret',
	database: 'feelvibe'
});
```

### Partie 1 - _3 points_

Créer une page `/billets` qui affiche tous les les billets achetés.

Consignes :

- Créer un type `Billet` dans `models/billets.ts` qui correspond à la structure d'un billet.
- Créer une fonction de modèle `getBillets` qui va chercher dans la base de donnée les billets achetés par un utilisateur.
- Créer une vue et un controller pour la page `/billets`.
- La page doit afficher le prénom et le nom de l'utilisateur pour chaque billet.
- La page doit afficher le titre de l'événement pour chaque billet.

**Astuce**
Pour bien typer le retour de la fonction `execute`, vous pouvez utiliser la syntaxe suivante :

```typescript
import { RowDataPacket } from 'mysql2';
// ...
const result = await db.execute<Array<RowDataPacket & Billet>>(...)
```

Cela évitera d'avoir les erreurs de type comme au TP précédent.

**Proposition de HTML pour la page**

```html
<main class="flex-grow">
	<div class="container mx-auto px-6 py-12">
		<h2 class="mb-8 text-center text-4xl font-bold">Mes billets</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Liste des billets ici -->
		</div>
	</div>
</main>
```

**Proposition de HTML pour un billet (à transformer en template handlebar)**

```html
<div class="flex h-full flex-col overflow-hidden rounded-xl bg-white text-purple-900 shadow-xl">
	<div class="flex flex-grow flex-col p-6">
		<h3 class="mb-2 text-xl font-semibold">
			<!-- Titre de l'évènement ici -->
		</h3>
		<p class="mb-4 flex-grow text-gray-600">
			Billet au nom de
			<span class="font-semibold">
				<!-- Nom et prénom de l'utilisateur ici -->
			</span>
		</p>
	</div>
</div>
```

### Partie 2 - _3 points_

Créer une page `/evenements/<id>/acheter-billet` qui permet d'acheter un billet pour un événement.

Consignes :

- Créer une route, une vue et un controller pour la page `/evenements/<id>/acheter-billet` qui contient le formulaire pour acheter un billet.
- Le formulaire doit contenir les champs `nom` et `prenom`.
- La page doit afficher le titre de l'événement pour lequel on achète un billet.
- Créer une fonction de modèle `acheterBillet` qui va ajouter un billet dans la base de donnée.
- Rediriger l'utilisateur vers la page `/billets` après qu'il ait soumis le formulaire avec la method `res.redirect('/billets')`.

  **Astuce** Pour récupérer l'id de l'événement depuis la route, vous pouvez utiliser `req.params.id` dans le controller.

```typescript
app.get('/evenements/:id/acheter-billet', (req, res) => {
	const id = req.params.id; // vaut 12 si l'url est /evenements/12/acheter-billet
});
```

**Astuce** Vous pouvez utiliser la fonction `getEvenementById` dans `models/evenements.ts` pour récupérer l'événement par son id. Vous pouvez utiliser `Number.parseInt` pour convertir l'id en nombre.

**Astuce** Pour bien typer le retour de la fonction `execute`, vous pouvez utiliser la syntaxe suivante :

```typescript
import { ResultSetHeader } from 'mysql2';
// ...
const result = await db.execute<ResultSetHeader>(...);
```

Cela évitera d'avoir les erreurs de type comme au TP précédent.

**Proposition de HTML pour le formulaire**

```html
<main class="flex-grow">
	<div class="container mx-auto px-6 py-12">
		<div class="mx-auto max-w-2xl overflow-hidden rounded-xl bg-white text-purple-900 shadow-2xl">
			<div class="p-8">
				<h2 class="mb-6 text-3xl font-bold">
					<!-- titre de l'évènement -->
				</h2>

				<form id="ticket-form" class="space-y-6" method="POST">
					<div>
						<label for="nom" class="mb-1 block text-sm font-medium text-gray-700">Nom</label>
						<input
							type="text"
							id="nom"
							name="nom"
							required
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</div>
					<div>
						<label for="prenom" class="mb-1 block text-sm font-medium text-gray-700">Prénom</label>
						<input
							type="text"
							id="prenom"
							name="prenom"
							required
							class="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</div>
					<div>
						<button
							type="submit"
							class="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-700 to-pink-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:from-purple-600 hover:to-pink-500"
						>
							<i data-lucide="ticket" class="mr-2 h-5 w-5"></i>
							Acheter le billet
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</main>
```
