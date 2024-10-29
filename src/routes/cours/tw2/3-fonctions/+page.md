<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
</script>

<Reveal>
    <Slides/>
</Reveal>

## Exercices / TP

Dans ce TP, nous allons nous concentrer sur les fonctions et la manipulation de tableau en JavaScript. Nous utiliserons des tests pour vérifier que nos fonctions sont correctes. Le but est de se familiariser avec ces aspects, afin d'attaquer les prochains TP avec plus de sérénité.

### Mise en place

Ce TP est disponible sur gitlab. La première étape est de le cloner sur votre machine, c'est à dire de le télécharger avec git. Ouvrez un terminal et tapez la commande suivante :

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp-3.git
```

Utilisez les identifiants de votre compte universitaire pour vous connecter.

> _Si cela ne fonctionne pas, vous pouvez vous rendre sur le lien suivant : https://sources.univ-jfc.fr/techno-web-2/tp-3, cliquer sur le bouton « Code » et télécharger le fichier zip._

Installer les dépendances du projet :

```bash
cd tp-3
npm install
```

Ouvrez le dossier `tp-3` dans votre éditeur de code. Vous pouvez le faire avec la commande suivante :

```bash
code .
```

#### Tests

Dans le terminal, lancez les tests avec la commande suivante :

```bash
npm test
```

Tout est en rouge, c'est normal, les tests ne passent pas. Au fur et à mesure que vous compléterez les exercices, les tests passeront au vert.

Vous pouvez laisser le terminal ouvert, les tests se relanceront automatiquement à chaque modification de votre code.

<Message>

<div slot='title'>Pas de navigateur ?</div>

Le JavaScript que vous allez écrire dans ce TP ne sera pas exécuté dans un navigateur. Nous allons utiliser NodeJS pour exécuter notre code, et le framework vitest pour faire tourner les tests.

Dans la pratique, vous n'aurez pas besoin de vous soucier de cet aspect, vous pouvez vous concentrer sur l'écriture de votre code, c'est le même JavaScript que vous utilisez dans le navigateur.

</Message>

**Important** : les trois exercices sont indépendants, et de difficulté croissante. Si vous bloquez sur un exercice, vous pouvez passer à l'exercice suivant. N'hésitez pas à demander de l'aide si vous êtes bloqué, ou si un énoncé n'est pas clair.

### Exercice 1 : fonctions

Ouvrez le fichier `exercice-1.js` dans votre éditeur de code. Il contient plusieurs fonctions à compléter. Chaque fonction a une description de ce qu'elle doit faire (au dessus). Le but de l'exercice est d'implémenter les fonctions (écrire le code) pour que les tests passent.

<Message>
<div slot='title'>Description en JSDoc</div>

Les fonctions ont une description en JSDoc. C'est une convention pour documenter les fonctions en JavaScript. Cela permet d'avoir une description de la fonction directement dans le code, et d'avoir une description qui s'affiche au survol dans l'éditeur de code.

La première partie contient une description de ce que fait la fonction. Ensuite, on a la liste des paramètres, avec leur type et leur description. Enfin, on a la description de la valeur de retour (si applicable), et eventuellement des exemples d'utilisation.

</Message>

Chaque fonction est testée dans le fichier `exercice-1.test.js`. La fonction est correcte si le test passe (en vert).

Pour lancer uniquement les tests de l'exercice 1, vous pouvez lancer la commande :

```
npm run test ./test/exercice-1.test.js
```

À noter que les tests se relancent automatiquement à chaque fois que vous modifiez le fichier testé.

<Solution>

```javascript
/**
 * Appelle la fonction callback n fois, en passant le numéro de l'appel en paramètre (en commençant par 1)
 *
 * @param {number} n - Nombre de fois que la fonction doit être appelée
 * @param {function} callback - Fonction à appeler
 *
 * @example
 * count(3, (i) => {
 *  console.log(i);
 * });
 * // 1
 * // 2
 * // 3
 *
 */
export function count(n, callback) {
	for (let i = 1; i <= n; i++) {
		callback(i);
	}
}

/**
 * Retourne un compteur
 * Un compteur est un objet qui possède deux fonctions:
 * - increment: incrémente la valeur du compteur de 1
 * - get: retourne la valeur du compteur
 * La valeur du compteur est stockée dans une closure
 *
 * @returns {{ increment: function, get: function }}
 *
 * @example
 * const counter = createCounter();
 * counter.get(); // 0
 * counter.increment();
 * counter.get(); // 1
 *
 */
export function createCounter() {
	let count = 0;
	return {
		increment: () => count++,
		get: () => count
	};
}

/**
 * Retourne une fonction qui prend un paramètre x, et qui retourne f(x) si predicate(x) est vrai, et g(x) sinon
 *
 * @param {function} predicate
 * @param {function} f
 * @param {function} g
 *
 * @returns {function}
 *
 * @example
 * const isEven = (x) => x % 2 === 0;
 * const addOne = (x) => x + 1;
 * const multiplyByTwo = (x) => x * 2;
 * const conditionallyAddOne = condition(isEven, addOne, multiplyByTwo);
 * conditionallyAddOne(2); // 3
 * conditionallyAddOne(3); // 6
 */
export function condition(predicate, f, g) {
	return (x) => (predicate(x) ? f(x) : g(x));
}

/**
 * Compose deux fonctions en une seule, de tel sorte que pipe(f, g)(x) soit équivalent à g(f(x))
 *
 * @param {function} f
 * @param {function} g
 * @returns {function}
 *
 * @example
 * const addOne = (x) => x + 1;
 * const multiplyByTwo = (y) => y * 2;
 * const addOneAndMultiplyByTwo = pipe(addOne, multiplyByTwo);
 * addOneAndMultiplyByTwo(2); // 6
 * */
export function pipe(f, g) {
	return (x) => g(f(x));
}
```

</Solution>

### Exercice 2 : manipulation de tableau

Complétez le code du fichier `exercice-2.js` pour que tous les tests de l'exercice 2 passent.

<Solution>

```javascript
// Tableau

/**
 * Multiplie par 2 chaque élément d'un tableau
 *
 * @param {number[]} arr
 * @returns {number[]}
 *
 * @example
 * multiplyBy2([1, 2, 3]) // [2, 4, 6]
 */
export function multiplyBy2(arr) {
	return arr.map((x) => x * 2);
}

/**
 * Compte le nombre d'éléments pairs dans un tableau
 *
 * @param {number[]} arr
 * @returns {number}
 *
 * @example
 * countEvenNumbers([1, 2, 3]) // 1
 */
export function countEvenNumbers(arr) {
	return arr.filter((x) => x % 2 === 0).length;
}

/**
 * Retourne le premier élément supérieur à 10
 *
 * @param {number[]} arr
 * @returns {number}
 *
 * @example
 * findFirstGreaterThan10([1, 8, 12, 3, 29]) // 12
 */
export function findFirstGreaterThan10(arr) {
	return arr.find((x) => x > 10);
}

/**
 * Trie les élèves par groupe
 *
 * @param { { name: string, groupe: number }[] } students
 * @returns { { name: string, groupe: number }[] }
 *
 * @example
 * const students = [
 *  { name: 'Alice', groupe: 1 },
 *  { name: 'Bob', groupe: 2 },
 *  { name: 'Charlie', groupe: 1 }
 * ]
 * const sortedStudent = sortStudentsByGroup(students)
 * // [ { name: 'Alice', groupe: 1 }, { name: 'Charlie', groupe: 1 }, { name: 'Bob', groupe: 2 } ]
 */
export function sortStudentsByGroup(students) {
	return students.sort((a, b) => a.groupe - b.groupe);
}

/**
 * Zip deux tableaux en un seul
 *
 * @param {T[]} arr1
 * @param {U[]} arr2
 * @returns {[T,U][]}
 *
 * @example
 * zipArrays([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
 * zipArrays(['a', 'b', 'c'], [1, 2]) // [['a', 1], ['b', 2], ['c', undefined]]
 * zipArrays([1], [1, 2]) // [[1, 1], [undefined, 2]]
 *
 */
export function zipArrays(arr1, arr2) {
	// A compléter (on pourra utiliser Array.map, et le second argument de la fonction de callback qui contient l'index)
	// Voir https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#parameters
	const arr = arr1.length > arr2.length ? arr1 : arr2;
	return arr.map((_, i) => [arr1[i], arr2[i]]);
}

/**
 * Compose un tableau de fonctions en une seule fonction
 * de tel sorte que pipeAll([f, g, h])(x) soit équivalent à h(g(f(x)))
 *
 * @param {function[]} fns
 * @returns {function}
 * @example
 * const addOne = (x) => x + 1;
 * const multiplyByTwo = (y) => y * 2;
 * const addOneAndMultiplyByTwo = pipeAll([addOne, multiplyByTwo]);
 * addOneAndMultiplyByTwo(2); // 6
 */

export function pipeAll(fns) {
	return (x) => fns.reduce((acc, fn) => fn(acc), x);
}
```

</Solution>

### Exercice 3 : fonctions de manipulation du DOM

Complétez le code du fichier `exercice-3.js` pour que tous les tests de l'exercice 3 passent.

<Solution>

```javascript
// Manipulation du DOM

/**
 * Crée un élément HTML et lui ajoute du texte
 *
 * @param {string} tag - Le type de l'élément HTML (div, span, p, etc.)
 * @param {string} text - Le texte contenu dans l'élément
 * @returns {HTMLElement} - L'élément HTML créé
 *
 * @example
 * const element = createElement('p', 'Hello world');
 * document.body.appendChild(element);
 */
export function createElement(tag, text) {
	const elem = document.createElement(tag);
	elem.textContent = text;
	return elem;
}

/**
 * Ajoute une classe à un tableau d'éléments
 *
 * @param {HTMLElement[]} elements - Un tableau d'éléments HTML
 * @param {string} className - La classe à ajouter
 * @example
 * const elements = Array.from(document.querySelectorAll('.emoji-card'));
 * addClass(elements, 'hidden'); // Ajoute la classe 'hidden' à tous les éléments '.emoji-card'
 */
export function addClass(elements, className) {
	elements.forEach((element) => element.classList.add(className));
}

/**
 * Trie les éléments d'un tableau selon leur attribut data-*
 *
 * @param {HTMLElement[]} elements - Un tableau d'éléments HTML
 * @param {string} dataAttribute - L'attribut data-* à utiliser pour le tri
 * @returns {HTMLElement[]} - Le tableau d'éléments trié
 *
 * @example
 * <ul class="todo-list">
 *  <li data-priority="3">Faire les courses</li>
 *  <li data-priority="1">Appeler le plombier</li>
 *  <li data-priority="2">Acheter des fleurs</li>
 * </ul>
 * sortElements(Array.from(document.querySelectorAll('.todo-list > li')), 'data-priority');
 * // Retourne les li triés par priorité
 *
 **/
export function sortElements(elements, dataAttribute) {
	// A compléter
	// A noter, on peut accéder à un attribut data-* d'un élément avec la propriété `dataset`
	// Par exemple, si on ajoute l'attribut data-priority à un élément, on peut y accéder avec `element.dataset.priority`

	return elements.sort((a, b) => a.dataset[dataAttribute] - b.dataset[dataAttribute]);
}

/**
 * Retourne une fonction qui, lorsqu'elle est appelée, ajoute ou enlève une classe à un élément
 *
 * @param {HTMLElement} element - L'élément HTML à modifier
 * @param {string} className - La classe à ajouter ou enlever
 * @returns {function} - La fonction qui ajoute ou enlève la classe à l'élément lorsqu'elle est appelée
 *
 * @example
 * const togleHidden = createToggleCallback(document.querySelector('.emoji-card'), 'hidden');
 * togleHidden(); // Ajoute la classe 'hidden' à l'élément
 * togleHidden(); // Enlève la classe 'hidden' de l'élément
 */
export function createToggleCallback(element, className) {
	// A compléter
	// On pourra utiliser la méthode `classList.toggle` pour ajouter ou enlever la classe
	return () => element.classList.toggle(className);
}
```

</Solution>
