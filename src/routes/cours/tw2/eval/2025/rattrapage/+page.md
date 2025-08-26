# Questionnaire de Rattrapage - Technologies du Web 2

## Questions de difficulté croissante

### Question 1 - Bases du langage (1pt)

**Question :** Quel est le résultat de ce code ?

```javascript
const x = '10';
const y = 5;
console.log(x + y);
console.log(x - y);
```

**Réponse :** `"105"` et `5`

---

### Question 2 - Fonctions de manipulation de tableau (3pts)

**Question :** Soit le tableau suivant représentant des étudiants :

```javascript
const students = [
	{ name: 'Alice', mean: 12 },
	{ name: 'Bob', mean: 9 },
	{ name: 'Charlie', mean: 15 },
	{ name: 'Diana', mean: 11 }
];
```

Complétez le code suivant en **une seule ligne pour chaque étape** en utilisant les méthodes de tableau appropriées :

```javascript
// 1. récuperer la liste des étudiants avec moyenne ≥ 10
const passedStudents = ...

// 2. Récupérer seulement les noms des étudiants admis
const passedNames = ...

// 3. Calculer la moyenne générale
const average = ...
```

---

### Question 3 - Problème de logique avec fonctions (3pts)

**Question :** Une bibliothèque veut catégoriser ses livres. Écrivez une fonction `categorizeBooks(books)` qui :

- Prend un tableau d'objets livre avec les propriétés `title`, `pages`, `year`
- Retourne un objet avec trois catégories :
  - `recent` : livres publiés après 2010
  - `classic` : livres publiés avant 1980
  - `medium` : les autres livres
- Chaque catégorie contient un tableau avec seulement les titres des livres

```javascript
const books = [
	{ title: '1984', pages: 328, year: 1949 },
	{ title: 'Dune', pages: 688, year: 1965 },
	{ title: 'Ready Player One', pages: 374, year: 2011 }
];
```

**Réponse attendue :**

```javascript
function categorizeBooks(books) {
	const result = {
		recent: [],
		classic: [],
		medium: []
	};

	for (let book of books) {
		if (book.year > 2010) {
			result.recent.push(book.title);
		} else if (book.year < 1980) {
			result.classic.push(book.title);
		} else {
			result.medium.push(book.title);
		}
	}

	return result;
}
```

---

---

## Questions Vrai/Faux (0.5pt chacune)

### Question 6

**Question :** Une variable déclarée avec `const` peut être modifiée si c'est un objet ou un tableau

**Réponse :** ✅ **Vrai** - `const` empêche la réassignation de la variable, mais permet la modification du contenu des objets/tableaux

---

### Question 7

**Question :** `document.querySelector('.ma-classe')` sélectionne tous les éléments avec la classe `ma-classe`

**Réponse :** ❌ **Faux** - `querySelector` ne retourne que le premier élément trouvé, c'est `querySelectorAll` qui retourne tous les éléments

---

### Question 8

**Question :** L'événement `click` se propage de l'élément cliqué vers ses parents (bubbling)

**Réponse :** ✅ **Vrai** - C'est le comportement par défaut des événements en JavaScript

---

### Question 9

**Question :** `localStorage` et `sessionStorage` ont la même API mais des durées de vie différentes

**Réponse :** ✅ **Vrai** - Même méthodes (setItem, getItem, etc.) mais localStorage persiste après fermeture du navigateur contrairement à sessionStorage

---

### Question 10

**Question :** `JSON.stringify()` peut transformer n'importe quel objet JavaScript en chaîne JSON

**Réponse :** ❌ **Faux** - Certaines valeurs comme les fonctions, `undefined`, `Symbol` ne peuvent pas être sérialisées en JSON

---

### Question 11

**Question :** Les modules JavaScript permettent d'avoir des variables privées (non accessibles depuis l'extérieur)

**Réponse :** ✅ **Vrai** - Les variables non exportées dans un module restent privées au module

---

### Question 12

**Question :** `element.textContent` et `element.innerHTML` font exactement la même chose

**Réponse :** ❌ **Faux** - `textContent` traite le contenu comme du texte brut, `innerHTML` interprète le HTML

---

### Question 13

**Question :** `setTimeout(() => console.log('Hello'), 0)` affiche immédiatement "Hello"

**Réponse :** ❌ **Faux** - Même avec un délai de 0ms, la fonction est placée dans la file d'attente et s'exécute après le code synchrone

---

## Questions QCM Multiples

### Question 14 - document.querySelectorAll (2pts)

**Question :** Concernant `const resultat = document.querySelectorAll('.item')`, quelles affirmations sont vraies ?

**Options :**

- c) La fonction `resultat.forEach` existe
- d) La fonction `resultat.map` existe
- f) Retourne `null` si aucun élément n'est trouvé
- g) Les éléments de la collection retournée sont des éléments du DOM
- h) On peut l'utiliser pour récupérer tous les champs de formulaire d'une page qui sont vides
- g) On peut l'utiliser pour récuperer tous les titre `h2` d'une page

**Réponses correctes :** b), c), e), g)

---

### Question 15 - Événements

**Événements :**

1. `input`
2. `change`
3. `focus`
4. `blur`
5. `submit`
6. `mouseenter`

**Moments de déclenchement :**
a) Quand l'utilisateur clique sur le bouton "Envoyer" d'un formulaire
b) Quand l'utilisateur tape du texte dans un champ input
c) Quand un élément perd le focus (l'utilisateur clique ailleurs)
d) Quand l'utilisateur termine de modifier un champ et clique ailleurs
e) Quand la souris entre dans la zone d'un élément
f) Quand un élément reçoit le focus (devient actif)

**Réponses correctes :**

- 1 → b) `input` se déclenche quand l'utilisateur tape du texte
- 2 → d) `change` se déclenche quand l'utilisateur termine de modifier un champ et clique ailleurs
- 3 → f) `focus` se déclenche quand un élément reçoit le focus
- 4 → c) `blur` se déclenche quand un élément perd le focus
- 5 → a) `submit` se déclenche quand l'utilisateur soumet un formulaire
- 6 → e) `mouseenter` se déclenche quand la souris entre dans la zone d'un élément
  **Réponses correctes :** a), d), e), f)

---

### Question 4 - DOM et événements contextuels (5pts)

**Question :** Vous avez une liste de tâches. Écrivez le code JavaScript qui :

1. Ajoute un écouteur sur chaque élément `.task`
2. Au clic, bascule la classe `completed` sur la tâche cliquée. Cela veut dire qu'au premier clic, on ajoute la classe, au deuxième clic, on la supprime, etc.
3. Met à jour le compteur qui affiche le nombre de tâches completées
4. Si toutes les tâches sont completées, affiche "Bravo !" dans l'élément `#message`

HTML donné :

```html
<div id="counter">Tâches complétées: 0</div>
<div id="message"></div>
<ul>
	<li class="task">Faire les courses</li>
	<li class="task">Lire un livre</li>
	<li class="task">Faire du sport</li>
</ul>
```

**Réponse attendue :**

```javascript
const tasks = document.querySelectorAll('.task');
const counter = document.getElementById('counter');
const message = document.getElementById('message');

function updateCounter() {
	const completed = document.querySelectorAll('.task.completed').length;
	counter.textContent = `Tâches complétées: ${completed}`;

	if (completed === tasks.length) {
		message.textContent = 'Bravo !';
	} else {
		message.textContent = '';
	}
}

tasks.forEach((task) => {
	task.addEventListener('click', function () {
		this.classList.toggle('completed');
		updateCounter();
	});
});
```

---

### Question 5 - Problème complexe avec localStorage (6pts)

**Question :** Créez un système de panier d'achat qui :

1. Sauvegarde/charge le panier dans localStorage
2. Gère l'ajout d'articles (si l'article existe déjà, augmente la quantité)
3. Calcule le total du panier
4. Gère les erreurs de localStorage

Implémentez ces fonctions :

- `addToCart(item)` - item a les propriétés `id`, `name`, `price`
- `getCartTotal()` - retourne le prix total
- `loadCart()` - charge depuis localStorage
- `saveCart()` - sauvegarde dans localStorage

**Réponse attendue :**

```javascript
let cart = [];

function loadCart() {
	try {
		const saved = localStorage.getItem('cart');
		cart = saved ? JSON.parse(saved) : [];
	} catch (error) {
		console.error('Erreur chargement panier:', error);
		cart = [];
	}
}

function saveCart() {
	try {
		localStorage.setItem('cart', JSON.stringify(cart));
	} catch (error) {
		console.error('Erreur sauvegarde panier:', error);
	}
}

setTimeout(() => {
	console.log(2);
}, 0);
console.log(1);
[4, 5, 6].forEach((item) => setTimeout(() => console.log(item), 10 - item));
console.log(3);

function addToCart(item) {
	const existingItem = cart.find((cartItem) => cartItem.id === item.id);

	if (existingItem) {
		existingItem.quantity++;
	} else {
		cart.push({
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: 1
		});
	}

	saveCart();
}

function getCartTotal() {
	return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Charger le panier au démarrage
loadCart();
```

---

## Récapitulatif des points

- **Question 1 :** 1 point
- **Question 2 :** 3 points
- **Question 3 :** 4 points
- **Question 4 :** 5 points
- **Question 5 :** 6 points
- **Questions Vrai/Faux (6-13) :** 0.5 point × 8 = 4 points
- **Questions QCM multiples (14-15) :** 2 points × 2 = 4 points

**Total possible :** 27 points (à ramener sur 20)
