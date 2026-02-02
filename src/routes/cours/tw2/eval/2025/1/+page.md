<script>
  import Solution from '$lib/Solution.svelte';
  import { showSolution } from '$lib/showSolution.ts';

	showSolution.set(true);

</script>

<svelte:head>

<title>Évaluation Technologie Web 2 - 2025</title>
</svelte:head>

# Evaluation Technologie Web 2

## Consignes

### Introduction

- La durée de l'évaluation est d'une heure et demie (1h30).
- La notation se fera grâce aux tests automatisés. Chaque test réussi rapporte des points. Si tous les tests sont réussis, la note maximale est de 20/20.
- En cas de note inférieure à 10/20, le code sera consulté pour attribuer d'éventuels points bonus pour les tentatives de résolution.
- Les exercices et les questions sont indépendants. Si vous bloquez sur une question, vous pouvez passer à la suivante.
- La consultation des cours et des corrigés des exercices précédents est autorisée, de même que la navigation sur le web.

### Règles

- La consultation d'autres étudiants est **interdite**
- L'utilisation d'intelligence artificielle (chatGPT, Copilot, ou autres) est **interdite**. Ce sujet est conçu de telle sorte à rendre détectable l'usage des IA.

**Toute infraction à ces règles entraînera une note de 0/20 et une saisie des instances disciplinaires de l'université.**

### Conseils

Si quelque chose ne marche pas :

- Vérifier que les variables sont bien nommées (pas de fautes de frappe)
- Regarder l'erreur (terminal de test pour exercice 1, console du navigateur pour exercice 2)
- Utiliser `console.log` pour afficher les valeurs des variables et les résultats intermédiaires.

### Mise en place

**Important : ces commandes sont à faire dès maintenant ! Elles sont obligatoires, sinon le rendu ne pourra pas se faire.**

Cloner le dépôt avec la commande.

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/evaluation-2025-1.git
cd evaluation-2025-1
```

Configurer votre nom et votre email avec la commande suivante :

```bash
sh start.sh
```

Puis installer les dépendances avec :

```bash
npm install
```

Ouvrir le projet dans votre éditeur de texte favori et commencer à travailler. Par exemple VSCode :

```bash
code .
```

### Sauvegarde

A tout moment, vous pouvez sauvegarder votre travail sur le dépôt avec la commande :

```bash
sh save.sh
```

**Vous êtes encouragé à sauvegarder régulièrement votre travail.** Par exemple, à chaque fois que vous répondez à une question.

## Exercice 1 - 8pts

Lancez les tests avec la commande suivante :

```bash
npm run test-1
```

Le fichier `exercice-1.js` contient une liste de déclarations de fonction à implémenter.

**Important : Pour avoir tous les points, il ne faudra pas utiliser de boucles `for`.**

Voici la description de chaque fonction :

### `affiche(number)` - 2pts

- Format un nombre décimal en pourcentage
- Exemples :
  - `affiche(0.5)` retourne `"50%"`
  - `affiche(0.123)` retourne `"12.3%"`

<Solution>

```javascript
function affiche(number) {
	return number * 100 + '%';
}
```

</Solution>

### `filtrer(arr)` - 1.5pts

- Filtre un tableau en supprimant les éléments `null` ou `undefined`
- Retourne un nouveau tableau
- Exemples :
  - `filtrer([1, null, 2, undefined, 3])` retourne `[1, 2, 3]`
  - `filtrer([null, null, null])` retourne `[]`

<Solution>

```javascript
function filtrer(arr) {
	return arr.filter((x) => x !== null && x !== undefined);
}
```

</Solution>

### `applique(arr, fn)` - 1.5pts

- Applique une fonction aux éléments impairs uniquement
- Retourne un nouveau tableau
- Exemples :
  - `applique([1, 2, 3, 4], x => x * x)` retourne `[1, 2, 9, 4]`
  - `applique([], x => x + 2)` retourne `[]`

<Solution>

```javascript
function applique(arr, fn) {
	return arr.map((x) => (x % 2 === 1 ? fn(x) : x));
}
```

</Solution>

### `interrupteur(value1, value2)` - 1.5pts

- Crée un objet permettant de basculer entre deux valeurs
- L'objet retourné contient deux méthodes :
  - `toggle()`: bascule entre `value1` et `value2`
  - `get()`: retourne la valeur courante
- La première valeur (`value1`) est la valeur initiale

<div class="no-copy">

```javascript
    const switch = interrupteur("on", "off")
    switch.get() // retourne "on"
    switch.toggle()
    switch.get() // retourne "off"
    switch.toggle()
    switch.toggle()
    switch.get() // retourne "off"
```

</div>

<Solution>

```javascript
function interrupteur(value1, value2) {
	let value = value1;
	return {
		toggle() {
			value = value === value1 ? value2 : value1;
		},
		get() {
			return value;
		}
	};
}
```

</Solution>

### `bienAccompagné(people)` - 1.5pts

- Vérifie si au moins une personne est majeure dans un tableau
- Une personne est considérée majeure si elle a 18 ans ou plus
- Retourne un booléen

<div class="no-copy">

```javascript
const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 17 },
	{ name: 'Charlie', age: 15 }
];
bienAccompagné(people); // retourne true car Alice est majeure
```

</div>

<Solution>

```javascript
function bienAccompagné(people) {
	return people.some((person) => person.age >= 18);
}
```

</Solution>

## Exercice 2 - 12pts

Le fichier `exercice-2.html` contient une page web affichant une liste de livres. Vous devrez implémenter les différentes fonctionnalités dans un fichier JavaScript que vous créerez et lierez à la page.

### Test

Pour tester que votre code fonctionne correctement, vous pouvez ouvrir le fichier `exercice-2.html` dans un navigateur et tester manuellement.

Cependant, pour valider l'exercice, il faudra que les tests automatisés passent. Pour cela, vous pouvez les lancer avec la commande suivante :

```bash
npm run test-2
```

Cela ouvre un utilitaire de test dans une fenêtre à part. Dans la partie gauche, vous verrez les tests classé par question. Vous pouvez jouer les tests un par un ou tous en même temps en cliquant sur le bouton play ▶️.

### Question 1 : filtrer les livres (4pts)

Implémenter le filtre par genre. Voici les genres disponibles : Science-Fiction, Roman, Théâtre, Fantasy. Chaque livre a un genre dans un attribut `data-genre`.

Un champs `select` permet de choisir un genre. Lorsqu'un genre est sélectionné, seuls les livres correspondant à ce genre doivent être affichés.

Lorsque l'option `Tous les genres` est sélectionnée, tous les livres doivent être affichés.

_**Note** Ne prenez pas en compte la dernière option du select «Populaire » dans le HTML, faites comme si elle n'était pas là_

<Solution>

```html
<html>
	<head>
		...
		<script src="exercice-2.js" defer></script>
	</head>
	<body>
		...
	</body>
</html>
```

```javascript
const books = document.querySelectorAll('.book');
function filterGenre(genre) {
	for (const book of books) {
		if (genre === 'all' || book.dataset.genre === genre) {
			book.style.display = '';
		} else {
			book.style.display = 'none';
		}
	}
}
document.querySelector('#genre-filter').addEventListener('change', (evt) =>
	filterGenre(evt.target.value);
);

```

</Solution>

### Question 2 : trier les livres (4pts)

Implémenter le tri par nombre de téléchargements. Lorsque le bouton `Trier par nombre de téléchargements` est cliqué, les livres doivent être triés par nombre de téléchargements, du plus grand au plus petit.

_**Note** Ignorer le bouton « trier par nom » dans le HTML, faite comme si il n'était pas là_

<Solution>

```javascript
const books = document.querySelectorAll('.book');
function sortDownloads() {
	const sortedBooks = Array.from(books).sort((a, b) => {
		const downloadsA = parseInt(a.dataset.downloads);
		const downloadsB = parseInt(b.dataset.downloads);
		return downloadsB - downloadsA;
	});
	for (const book of sortedBooks) {
		document.querySelector('.books-grid').appendChild(book);
	}
}
document.querySelector('#sort-rating').addEventListener('click', sortDownloads);
```

</Solution>

### Question 3 : changer la couverture (4pts)

On peut ajouter une couverture à un livre en mettant une classe sur l'élément `li`. Les classes disponibles sont les suivantes :

```javascript
const possibleCoverClasses = [
	'cover-sand',
	'cover-pleiade',
	'cover-dark',
	'cover-modern',
	'cover-vintage'
];
```

#### 3.1 : couverture aléatoire (2pts)

Faire en sorte que les livres s'affichent avec une couverture aléatoire à chaque rechargement de la page. Pour cela, on leur appliquera une classe aléatoire parmi celles disponibles.

<Solution>

```javascript
for (const book of books) {
	const randomIndex = Math.floor(Math.random() * possibleCoverClasses.length);
	book.classList.add(possibleCoverClasses[randomIndex]);
}
```

</Solution>

#### 3.2 : changer la couverture (2pts)

Faire en sorte qu'un clique sur un livre change sa couverture. Lorsqu'on clique sur un livre, sa couverture doit changer dans l'ordre suivant : 'cover-sand', 'cover-pleiade', 'cover-dark', 'cover-modern`, `cover-vintage`. Si le livre a déjà la dernière couverture, il revient à la première.

<Solution>

```javascript
for (const book of books) {
	book.addEventListener('click', () => {
		const currentCoverIndex = possibleCoverClasses.findIndex((cls) => book.classList.contains(cls));
		const nextCoverIndex = (currentCoverIndex + 1) % possibleCoverClasses.length;
		book.classList.remove(possibleCoverClasses[currentCoverIndex]);
		book.classList.add(possibleCoverClasses[nextCoverIndex]);
	});
}
```

</Solution>

## Rendu

A la fin de l'évaluation, vous devez sauvegarder votre travail sur le dépôt avec la commande :

```bash
sh save.sh
```

Puis, vérifier que votre travail a bien été sauvegardé en consultant le dépôt Gitlab : [https://sources.univ-jfc.fr/techno-web-2/evaluation-2025-1.git](https://sources.univ-jfc.fr/techno-web-2/evaluation-2025-1.git).

**Important : vous êtes tenu responsable de bien vérifier que votre travail a été sauvegardé. Tout rendu incomplet sera corrigé tel quel.**

En cas de problème, faites signe à votre enseignant.
