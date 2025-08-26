# Questionnaire de Rattrapage - Technologies du Web 2

## Question 1 - Déclaration de variable (QCM)

**Question :** Qu'est-ce qui différencie le mot-clé `const` de `let` ?

**Options :**

- a) Une variable déclarée avec `const` ne peut pas être réassignée ✅
- b) `const` empêche toute modification après coup sur les tableaux et les objets
- c) `const` ne peut pas être utilisé à l'intérieur d'une fonction
- d) On ne peut déclarer qu'une seule variable du même nom avec `const`
- e) `const` est une version plus récente de `let` : elle permet de déclarer des variables locales

**Réponse correcte :** a) Une variable déclarée avec `const` ne peut pas être réassignée

---

## Question 2 - Déclaration de fonction (Dissertation)

**Question :** Nous souhaitons déclarer une fonction `hello` qui prend un paramètre `name` et retourne une chaîne de caractères `Bonjour <name>` quand on l'appelle.

Par exemple `hello("Johan")` retourne la valeur `Bonjour Johan`.

**Proposez 2 façons de déclarer cette fonction : une avec le mot clé `function`, l'autre sans.**

**Réponse attendue :**

```javascript
// Avec le mot-clé function
function hello(name) {
	return `Bonjour ${name}`;
}

// Sans le mot-clé function (fonction fléchée)
const hello = (name) => {
	return `Bonjour ${name}`;
};
// ou plus court :
const hello = (name) => `Bonjour ${name}`;
```

---

## Vrai / faux

### Question 3

**Question :** JavaScript est un langage compilé

**Réponse :** ❌ **Faux** - JavaScript est un langage interprété, pas compilé

---

### Question 4

**Question :** Si on tape `undefined === null` dans la console, on obtient `true`

**Réponse :** ❌ **Faux** - Cette expression retourne `false` car `undefined` et `null` sont des types différents

---

### Question 5

**Question :** Si on tape `undefined === false` dans la console, on obtient `true`

**Réponse :** ❌ **Faux** - Cette expression retourne `false` car `undefined` et `false` sont des types différents

---

### Question 6

**Question :** Le code suivant est valide : `let 1a = 1;`

**Réponse :** ❌ **Faux** - Les noms de variables ne peuvent pas commencer par un chiffre en JavaScript

---

### Question 7

**Question :** On peut importer des modules en JavaScript avec `import { myFunction } from './myModule.js';`

**Réponse :** ✅ **Vrai** - C'est la syntaxe correcte pour importer des modules ES6

---

### Question 8

**Question :** On peut exporter des modules en JavaScript avec `export { default myFunction };`

**Réponse :** ❌ **Faux** - La syntaxe correcte serait `export default myFunction;` ou `export { myFunction };`

---

### Question 9

**Question :** Une fonction peut être passée en argument d'une autre fonction

**Réponse :** ✅ **Vrai** - JavaScript supporte les fonctions de première classe (first-class functions)

---

### Question 10

**Question :** `setTimeout` retourne un identifiant qui peut être utilisé pour annuler le timeout

**Réponse :** ✅ **Vrai** - `setTimeout` retourne un ID qui peut être utilisé avec `clearTimeout()`

---

### Question 11

**Question :** `setInterval(console.log('Hello'), 1000);` affiche "Hello" toutes les secondes

**Réponse :** ❌ **Faux** - Cette syntaxe est incorrecte. Il faudrait écrire `setInterval(() => console.log('Hello'), 1000);` ou `setInterval(function() { console.log('Hello'); }, 1000);`

---

## Question 12 - Parcourir un tableau (QCM multiple)

**Question :** Je veux faire en sorte que chaque élément d'un tableau soit affiché dans la console. Quels sont les codes qui fonctionnent ?

**Options :**

- a) `for (let i of myArray) { console.log(i); }` ✅
- b) `for (let i in myArray) { console.log(i); }` ❌ (affiche les indices, pas les valeurs)
- c) `for (let i; i < myArray.length; i++) { console.log(i) }` ❌ (syntaxe incorrecte et affiche les indices)
- d) `myArray.forEach((i) => { console.log(i) })` ✅
- e) `myArray.map((_,i) => { console.log(myArray[i]) })` ✅ (mais map n'est pas la méthode appropriée pour cet usage)

**Réponses correctes :** a), d), e)

---

## Question 13 - Fonctions standards de manipulation de tableau (Dissertation)

**Question :** Le code suivant est écrit en Javascript en mode « impératif » (c'est-à-dire en utilisant des boucles et des variables temporaires). Réécrivez-le en utilisant la façon « fonctionnelle » (méthode de tableau map, filter, etc.) :

```javascript
let myArray = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i < myArray.length; i++) {
	let element = myArray[i];
	if (element % 2 === 0) {
		element = element * 2;
	} else {
		element = element * 2 + 1;
	}
	if (element > 5) {
		newArray.push(element);
	}
}
```

**Réponse attendue :**

```javascript
let newArray = myArray
	.map((element) => (element % 2 === 0 ? element * 2 : element * 2 + 1))
	.filter((element) => element > 5);

// ou en une seule ligne :
let newArray = myArray.map((x) => (x % 2 === 0 ? x * 2 : x * 2 + 1)).filter((x) => x > 5);
```

---

## Question 14 - document.querySelector (Appariement)

**Question :** Soit le bout de code HTML suivant :

```html
<p>
	<a href="#">Lien 1</a>
</p>
<div class="hidden">
	<p>
		<a href="#">Lien 2</a>
		<a href="#">Lien 3</a>
	</p>
	<a href="#">Lien 4</a>
</div>
<p class="hidden">
	<a href="#">Lien 5</a>
	<a href="#">Lien 6</a>
</p>
```

**Reliez les appels à `document.querySelector` avec leur valeur de retour :**

| Sélecteur                                  | Résultat                         |
| ------------------------------------------ | -------------------------------- |
| `document.querySelector('p.hidden a')`     | retourne l'élément « Lien 5 »    |
| `document.querySelector('.hidden a + a')`  | retourne l'élément « Lien 3 »    |
| `document.querySelector('div p a')`        | retourne l'élément « Lien 2 »    |
| `document.querySelector('p a')`            | retourne l'élément « Lien 1 »    |
| `document.querySelector('div.hidden > a')` | retourne l'élément « Lien 4 »    |
| `document.querySelector('#hidden a')`      | ne retourne aucun élément (null) |

---

## Question 15 - Événements du DOM (Dissertation)

**Question :** Soit le code HTML suivant :

```html
<div>
	<h2>Les animaux de la forêt</h2>
	<li data-animal="cerf" data-regime="herbivore">Cerf</li>
	<li data-animal="renard" data-regime="omnivore">Renard</li>
	<li data-animal="hibou" data-regime="carnivore">Hibou</li>
	<li data-animal="lapin" data-regime="herbivore">Lapin</li>
	<li data-animal="salamandre" data-regime="carnivore">Salamandre</li>
	<li data-animal="sanglier" data-regime="omnivore">Sanglier</li>
	<li data-animal="loup" data-regime="carnivore">Loup</li>
</div>
<form>
	<label for="regime">Régime alimentaire</label>
	<select id="regime">
		<option value="herbivore">Herbivore</option>
		<option value="omnivore">Omnivore</option>
		<option value="carnivore">Carnivore</option>
		<option value="tous">Tous</option>
	</select>
</form>
```

**Écrivez un script qui affiche uniquement les animaux qui ont le régime alimentaire sélectionné lorsque l'utilisateur change la valeur du select.**

**Réponse attendue :**

```javascript
const select = document.getElementById('regime');
const animals = document.querySelectorAll('[data-regime]');

select.addEventListener('change', function () {
	const selectedRegime = this.value;

	animals.forEach((animal) => {
		if (selectedRegime === 'tous' || animal.dataset.regime === selectedRegime) {
			animal.style.display = 'block';
		} else {
			animal.style.display = 'none';
		}
	});
});
```

---

## Question 16 - Asynchronicité (Réponse courte)

**Question :** Dans le code suivant, dans quel ordre sont affichées les lettres dans la console ? (mettre les lettres dans l'ordre sans espace dans la réponse)

```javascript
console.log('A');
setTimeout(() => {
	setTimeout(() => console.log('B'), 0);
}, 0);
setTimeout(() => console.log('C'), 1);
for (let i = 0; i < 1000000000; i++) {
	// do nothing
}
console.log('D');
```

**Réponse correcte :** ADCB

**Explication :**

1. 'A' s'affiche immédiatement (synchrone)
2. Les setTimeout sont placés dans la queue d'événements
3. La boucle for s'exécute (bloque le thread principal)
4. 'D' s'affiche après la boucle (synchrone)
5. 'C' s'affiche (premier setTimeout dans la queue)
6. 'B' s'affiche en dernier (setTimeout imbriqué)

---

## Récapitulatif des points

- **Questions QCM simples :** 1 point (Question 1)
- **Questions QCM multiples :** 1.5 point (Question 12)
- **Questions dissertation :** 2 à 2.5 points (Questions 2, 13, 15)
- **Questions Vrai/Faux :** 0.5 point chacune (Questions 3-11)
- **Questions d'appariement :** 3 points (Question 14)
- **Questions à réponse courte :** 2 points (Question 16)

**Total possible :** 19 points
