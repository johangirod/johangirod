<script>
  import { showSolution } from '$lib/showSolution.ts';
  showSolution.set(true);
</script>

# JavaScript Cheatsheet - TW2

## Bases du langage

### Variables et constantes

```js
// Déclaration de variables (peut être réassignée)
let maVariable = 42;
maVariable = 'nouveau texte';

// Constantes (ne peut pas être réassignée)
const PI = 3.14159;
```

### Types de données

```js
// Nombres (entier et flottant)
const entier = 42;
const flottant = 3.14;

// Chaînes de caractères
const texte = 'Hello world';
const texteInterpolation = `La valeur est ${entier}`;

// Booléens
const vrai = true;
const faux = false;

// Tableaux
const tableau = [1, 2, 3, 4, 5];
const tableauVide = [];

// Objets
const personne = {
	nom: 'Dupont',
	prenom: 'Jean',
	age: 30
};

// Valeurs spéciales
const rien = null; // Absence délibérée de valeur
let nonDefini = undefined; // Variable déclarée mais sans valeur
```

### Opérateurs

```js
// Opérateur ternaire
const age = 20;
const statut = age >= 18 ? 'majeur' : 'mineur'; // "majeur"

// Opérateur de coalescence des nuls
const valeur = null ?? 'valeur par défaut'; // "valeur par défaut"
```

### Structures conditionnelles

```js
// if...else
if (condition) {
	// code exécuté si condition est vraie
} else if (autreCondition) {
	// code exécuté si autreCondition est vraie
} else {
	// code exécuté si aucune condition n'est vraie
}

// switch
const jour = 'lundi';
switch (jour) {
	case 'lundi':
		console.log('Début de semaine');
		break;
	case 'vendredi':
		console.log('Fin de semaine');
		break;
	default:
		console.log('Milieu de semaine');
}
```

### Boucles

```js
// for...of (itère sur les valeurs)
const fruits = ['pomme', 'banane', 'orange'];
for (const fruit of fruits) {
	console.log(fruit); // Affiche "pomme", "banane", "orange"
}

// for...in (itère sur les clés/indices)
const personne = { nom: 'Dupont', prenom: 'Jean', age: 30 };
for (const propriete in personne) {
	console.log(`${propriete}: ${personne[propriete]}`);
}
```

## Fonctions

### Déclaration et appel de fonctions

```js
// Déclaration de fonction
function additionner(a, b) {
	return a + b;
}

// Appel de fonction
const resultat = additionner(3, 4); // 7

// Fonction avec valeur par défaut
function saluer(nom = 'visiteur') {
	return `Bonjour ${nom} !`;
}
saluer(); // "Bonjour visiteur !"
saluer('Marie'); // "Bonjour Marie !"

// Fonction fléchée
const diviser = (a, b) => a / b;

// Fonction fléchée avec plusieurs instructions
const calculer = (a, b) => {
	const somme = a + b;
	const produit = a * b;
	return { somme, produit };
};
```

## Manipulation de tableaux

```js
const nombres = [1, 2, 3, 4, 5];

// Accéder aux éléments
nombres[0]; // 1 (premier élément)
nombres[2]; // 3 (troisième élément)
nombres.at(-1); // 5 (dernier élément)

// Ajouter/supprimer des éléments
nombres.push(6); // Ajoute à la fin: [1, 2, 3, 4, 5, 6]
nombres.pop(); // Supprime et retourne le dernier: 6
nombres.unshift(0); // Ajoute au début: [0, 1, 2, 3, 4, 5]
nombres.shift(); // Supprime et retourne le premier: 0

// Trouver des éléments
nombres.indexOf(3); // 2 (indice de la valeur 3)
nombres.includes(10); // false (le tableau ne contient pas 10)

// Transformer un tableau
// map - applique une fonction à chaque élément et retourne un nouveau tableau
const doubles = nombres.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter - filtre les éléments selon une condition
const pairs = nombres.filter((n) => n % 2 === 0); // [2, 4]

// find - trouve le premier élément qui satisfait une condition
const premier = nombres.find((n) => n > 3); // 4

// reduce - réduit le tableau à une seule valeur
const somme = nombres.reduce((acc, n) => acc + n, 0); // 15

// sort - trie le tableau (modifie le tableau original)
nombres.sort((a, b) => a - b); // Tri numérique croissant
nombres.sort((a, b) => b - a); // Tri numérique décroissant

// forEach - exécute une fonction pour chaque élément
nombres.forEach((n) => console.log(n));
```

## Manipulation d'objets

```js
// Création d'un objet
const personne = {
	nom: 'Dupont',
	prenom: 'Jean',
	age: 30,
	saluer() {
		return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
	}
};

// Accéder aux propriétés
personne.nom; // "Dupont"
personne['prenom']; // "Jean"

// Modifier des propriétés
personne.age = 31;

// Ajouter des propriétés
personne.ville = 'Paris';

// Supprimer des propriétés
delete personne.ville;

// Vérifier si une propriété existe
'nom' in personne; // true

// Obtenir les clés d'un objet
Object.keys(personne); // ["nom", "prenom", "age", "saluer"]

// Obtenir les valeurs d'un objet
Object.values(personne); // ["Dupont", "Jean", 31, f]

// Parcourir un objet
for (const cle in personne) {
	console.log(`${cle}: ${personne[cle]}`);
}

// Déstructuration d'objet
const { nom, prenom } = personne;
console.log(nom); // "Dupont"
console.log(prenom); // "Jean"

// Fusion d'objets
const info = { ville: 'Paris', pays: 'France' };
const personneComplete = { ...personne, ...info };
```

## Manipulation du DOM

### Sélection d'éléments

```js
// Sélectionner un élément par son ID
const titre = document.getElementById('titre');
// ou
const titre = document.querySelector('#titre');

// Sélectionner le premier élément correspondant à un sélecteur CSS
const premierParagraphe = document.querySelector('p');

// Séléctionner les éléments enfants d'un élément
const elementRougeDansPremierParagraphe = premierParagraphe.querySelector('.rouge');

// Sélectionner tous les éléments correspondant à un sélecteur CSS
const paragraphes = document.querySelectorAll('p');
const elementsRouges = document.querySelectorAll('.rouge');

// Accéder aux éléments d'une liste de nœuds
paragraphes.forEach((p) => {
	console.log(p.textContent);
});
// ou
for (const p of paragraphes) {
	console.log(p.textContent);
}

// Sélectionner des éléments voisins
const suivant = element.nextElementSibling;
const precedent = element.previousElementSibling;
```

### Manipulation du contenu

```js
// Lire et modifier le contenu texte
element.textContent = 'Nouveau texte';

// Effacer le contenu d'un élément
element.textContent = '';

// Lire et modifier le contenu HTML
element.innerHTML = '<strong>Texte en gras</strong>';

// Créer un élément
const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = 'Nouveau paragraphe';

// Ajouter un élément à la fin d'un parent
const parent = document.querySelector('#mon-parent');
parent.appendChild(nouveauParagraphe);

// Supprimer un élément
element.remove();

// Cloner un élément
const clone = element.cloneNode(true); // true pour cloner aussi les enfants
```

### Manipulation d'attributs

```js
// Lire un attribut
const src = image.getAttribute('src');
// ou (pour certains attributs standards)
const src = image.src;

// Définir un attribut
element.setAttribute('id', 'monId');
// ou (pour certains attributs standards)
element.id = 'monId';

// Vérifier si un attribut existe
element.hasAttribute('data-value');

// Supprimer un attribut
element.removeAttribute('title');

// Utilisation des datasets (attributs data-*)
element.dataset.valeur = '123'; // Définit data-valeur="123"
const valeur = element.dataset.valeur; // Récupère la valeur de data-valeur
```

### Manipulation des classes

```js
// Ajouter une ou plusieurs classes
element.classList.add('important', 'rouge');

// Supprimer une ou plusieurs classes
element.classList.remove('important');

// Basculer une classe (ajoute si absente, retire si présente)
element.classList.toggle('visible');

// Vérifier si une classe est présente
const estImportant = element.classList.contains('important');
```

### Manipulation des styles

```js
// Définir des styles inline
element.style.color = 'red';
element.style.fontSize = '16px'; // Utiliser camelCase (pas font-size)
```

## Gestion des événements

### Ajouter et supprimer des écouteurs d'événements

```js
// Ajouter un écouteur d'événement
element.addEventListener('click', (event) => {
	console.log('Clic sur', event.target);
});
```

### Types d'événements courants

```js
// Événements de souris
element.addEventListener('click', handler); // Clic simple
element.addEventListener('mouseenter', handler); // Souris entre dans l'élément
element.addEventListener('mouseleave', handler); // Souris quitte l'élément

// Événements de clavier
document.addEventListener('keydown', handler); // Touche enfoncée
document.addEventListener('keyup', handler); // Touche relâchée
document.addEventListener('keypress', handler); // Touche pressée (caractère)

// Événements de formulaire
form.addEventListener('submit', handler); // Soumission de formulaire
input.addEventListener('input', handler); // Saisie dans un champ
input.addEventListener('focus', handler); // Champ prend le focus
input.addEventListener('blur', handler); // Champ perd le focus
```

### Objet Event

```js
element.addEventListener('click', (event) => {
	// Informations générales
	console.log(event.type); // Type d'événement ('click')
	console.log(event.target); // Élément qui a déclenché l'événement
	console.log(event.currentTarget); // Élément sur lequel l'écouteur est attaché

	// Pour les événements de souris
	console.log(event.clientX, event.clientY); // Coordonnées dans la fenêtre
	console.log(event.button); // Bouton de souris utilisé

	// Pour les événements de clavier
	console.log(event.key); // Touche pressée ('a', 'Enter', etc.)
	console.log(event.keyCode); // Code de la touche (76 pour 'l')
	console.log(event.altKey); // Si la touche Alt était enfoncée
	console.log(event.ctrlKey); // Si la touche Ctrl était enfoncée
	console.log(event.shiftKey); // Si la touche Shift était enfoncée

	// Empêcher le comportement par défaut
	event.preventDefault();

	// Arrêter la propagation de l'événement
	event.stopPropagation();
});
```

## Formulaires

### Accéder aux valeurs d'un formulaire

Exemple de formulaire HTML:

```html
<form id="mon-formulaire">
	<input type="text" id="nom" name="nom" placeholder="Votre nom" />

	<label for="abonnement">S'abonner à la newsletter</label>
	<input type="checkbox" id="abonnement" name="abonnement" />

	<fieldset>
		<legend>Comment préférez-vous être désigné(e) ?</legend>
		<input type="radio" id="option1" name="designation" value="monsieur" />
		<label for="option1">Monsieur</label>
		<input type="radio" id="option2" name="designation" value="madame" />
		<label for="option2">Madame</label>
		<input type="radio" id="option3" name="designation" value="neutre" />
		<label for="option3">Aucun des deux</label>
	</fieldset>

	<select id="pays" name="pays">
		<option value="fr">France</option>
		<option value="be">Belgique</option>
		<option value="ch">Suisse</option>
	</select>

	<button type="submit">Envoyer</button>
</form>
```

Accès aux valeurs avec JavaScript:

```js
// Accéder à un formulaire
const form = document.querySelector('form');

// Récupérer la valeur d'un champ texte
const nom = document.querySelector('#nom').value;

// Récupérer la valeur d'une case à cocher (checkbox)
const estAbonne = document.querySelector('#abonnement').checked;

// Récupérer la valeur d'un bouton radio
const designation = document.querySelector('input[name="designation"]:checked').value;

// Récupérer la valeur d'une liste déroulante
const pays = document.querySelector('#pays').value;

// Récupérer toutes les valeurs du formulaire (utilise FormData)
form.addEventListener('submit', (event) => {
	event.preventDefault(); // Empêche l'envoi du formulaire

	const formData = new FormData(form);

	// Convertir FormData en objet
	const data = Object.fromEntries(formData);
	console.log(data); // { nom: "...", email: "...", ... }
});
```

## LocalStorage et SessionStorage

### LocalStorage (persistant)

```js
// Stocker une valeur
localStorage.setItem('prenom', 'Marie');

// Récupérer une valeur
const prenom = localStorage.getItem('prenom'); // "Marie"

// Supprimer une valeur
localStorage.removeItem('prenom');

// Vider tout le localStorage
localStorage.clear();

// Stocker un objet ou un tableau (conversion en JSON)
const utilisateur = { id: 1, nom: 'Dupont', age: 30 };
localStorage.setItem('utilisateur', JSON.stringify(utilisateur));

// Récupérer un objet ou un tableau
const utilisateurObj = JSON.parse(localStorage.getItem('utilisateur'));

// Vérifier si une clé existe
if (localStorage.getItem('theme') !== null) {
	// La clé "theme" existe
}
```

### SessionStorage (durée de vie limitée à la session)

```js
// Même API que localStorage
sessionStorage.setItem('recherche', 'JavaScript');
const recherche = sessionStorage.getItem('recherche');
sessionStorage.removeItem('recherche');
sessionStorage.clear();
```

## JSON

```js
// Convertir un objet JavaScript en chaîne JSON
const personne = { nom: 'Dupont', age: 30, interets: ['sport', 'cinéma'] };
const personneJSON = JSON.stringify(personne);
// '{"nom":"Dupont","age":30,"interets":["sport","cinéma"]}'

// Convertir une chaîne JSON en objet JavaScript
const chaineJSON = '{"nom":"Martin","age":42,"actif":true}';
const obj = JSON.parse(chaineJSON);
// { nom: "Martin", age: 42, actif: true }

// Gérer les erreurs lors du parsing
try {
	const obj = JSON.parse(chaineInvalide);
} catch (error) {
	console.error('Erreur de parsing JSON:', error.message);
}

// Formater le JSON pour le rendre lisible
const jsonFormate = JSON.stringify(personne, null, 2);
/*
{
  "nom": "Dupont",
  "age": 30,
  "interets": [
    "sport",
    "cinéma"
  ]
}
*/
```

## Modules JavaScript

```js
// Exportation nommée (dans un fichier math.js)
export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}

export const PI = 3.14159;

// Importation nommée (dans un autre fichier)
import { add, subtract, PI } from './math.js';
console.log(add(5, 3)); // 8

// Importer avec un alias
import { add as addition } from './math.js';
console.log(addition(5, 3)); // 8

// Exportation par défaut (un seul par fichier)
// Dans calculator.js
export default class Calculator {
	add(a, b) {
		return a + b;
	}
	subtract(a, b) {
		return a - b;
	}
}

// Importation par défaut
import Calculator from './calculator.js';
const calc = new Calculator();

// Importer à la fois les exportations par défaut et nommées
import Calculator, { PI } from './calculator.js';
```

### Importer des scripts dans le HTML

#### Script standard (non-module)

```html
<!-- Chargement classique : bloque le rendu HTML -->
<script src="script.js"></script>

<!-- Attribut defer : charge le script en parallèle et l'exécute après le chargement du HTML -->
<script src="script.js" defer></script>
```

#### Modules ES (ESM)

```html
<!-- Import d'un module ES -->
<script type="module" src="main.js"></script>
```

**Utiliser Live Server pour les modules ES**

Les modules ES ne fonctionnent pas avec le protocole `file://` par mesure de sécurité. Pour les tester localement, vous devez utiliser un serveur web :

1. Installer l'extension **Live Server** dans Visual Studio Code
2. Faire un clic droit sur votre fichier HTML dans l'explorateur de VSCode
3. Sélectionner "Open with Live Server"
4. Votre page s'ouvrira à l'adresse `http://127.0.0.1:5500/` (ou similaire)

## Classes JavaScript

```js
// Définition d'une classe
class Personne {
	// Constructeur (appelé lors de la création d'une instance)
	constructor(nom, age) {
		this.nom = nom;
		this.age = age;
	}

	// Propriété privée (avec #)
	#id = Math.random();

	// Méthodes
	saluer() {
		return `Bonjour, je m'appelle ${this.nom}`;
	}

	vieillir() {
		this.age++;
	}

	// Méthode statique (appelée sur la classe, pas sur l'instance)
	static creerAdulte(nom) {
		return new Personne(nom, 18);
	}
}

// Instanciation
const jean = new Personne('Jean', 30);
console.log(jean.saluer()); // "Bonjour, je m'appelle Jean"

// Utiliser une méthode statique
const adulte = Personne.creerAdulte('Marie');
console.log(adulte.age); // 18

// Héritage
class Etudiant extends Personne {
	constructor(nom, age, niveau) {
		super(nom, age); // Appelle le constructeur de la classe parente
		this.niveau = niveau;
	}

	// Surcharge de méthode
	saluer() {
		return `${super.saluer()} et je suis étudiant(e) en ${this.niveau}`;
	}
}

const etudiant = new Etudiant('Sophie', 20, 'informatique');
console.log(etudiant.saluer()); // "Bonjour, je m'appelle Sophie et je suis étudiant(e) en informatique"
```

## Asynchronicité

### setTimeout et setInterval

```js
// Exécuter du code après un délai (en millisecondes)
setTimeout(() => {
	console.log('Exécuté après 2 secondes');
}, 2000);

// Stocker l'identifiant pour pouvoir annuler
const timeoutId = setTimeout(maFonction, 5000);
clearTimeout(timeoutId); // Annule l'exécution programmée

// Exécuter du code à intervalles réguliers
const intervalId = setInterval(() => {
	console.log('Exécuté toutes les secondes');
}, 1000);

// Arrêter un intervalle
clearInterval(intervalId);
```

### requestAnimationFrame

```js
// Pour les animations fluides, synchro avec le taux de rafraîchissement de l'écran
function animer() {
	// Code d'animation

	// Demande la prochaine frame
	requestAnimationFrame(animer);
}

// Démarrer l'animation
requestAnimationFrame(animer);

// Pour arrêter l'animation
const animationId = requestAnimationFrame(animer);
cancelAnimationFrame(animationId);
```

## Canvas

```js
// Récupérer le contexte 2D du canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Définir la taille du canvas
canvas.width = 800;
canvas.height = 600;

// Dessiner un rectangle
ctx.fillStyle = 'red'; // Couleur de remplissage
ctx.fillRect(10, 10, 100, 50); // x, y, largeur, hauteur
```

## Bonnes pratiques

### Déboguer du code JavaScript

```js
// Afficher des informations dans la console
console.log('Message simple');
```

### Éviter les problèmes courants

```js
// Éviter les erreurs quand on utilise potentiellement des valeurs nulles
// Au lieu de: user.address.street
const street = user?.address?.street;

// Valeurs par défaut pour éviter les nulls ou undefined
const nom = utilisateur.nom || 'Inconnu';
```
