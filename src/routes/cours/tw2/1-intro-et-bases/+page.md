<script>
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Message from '$lib/Message.svelte';
	
	import Slides from './slides.svelte';
	import losange from './losange.png';
	import { showSolution } from '$lib/showSolution.ts';
	const props = $props();
</script>

<Reveal>
    <Slides/>
</Reveal>

## Exercices / TP

Pour effectuer les exercices, nous utiliserons un REPL (Read-Eval-Print-Loop) qui permet d'écrire du code et de l'exécuter directement.

Pour cela, vous installerez l'extension `JavaScript REPL` de VSCode pour directement évaluer le JavaScript dans votre éditeur de code.

### Exercice 1

Écrire une fonction qui prend en argument la hauteur d’un véhicule et qui retourne la catégorie de tarification pour le péage de l’autoroute :

- hauteur inférieure à 2m : "véhicule léger"
- hauteur supérieure ou égale à 2m et inférieure à 3m : "véhicule intermédiaire"
- hauteur supérieure ou égale à 3m : "poids lourd"

Tester cette fonction avec plusieurs hauteurs de véhicules.

<Solution>

```js
function categorieVehicule(hauteur) {
	if (hauteur < 2) {
		return 'véhicule léger';
	} else if (hauteur < 3) {
		return 'véhicule intermédiaire';
	} else {
		return 'poids lourd';
	}
}
```

</Solution>

### Exercice 2

Écrire un programme capable de calculer la factorielle d’un nombre donné par l’utilisateur.

<Solution>

```js
function factorial(n) {
	switch (n) {
		case 0:
		case 1:
			return 1;
		default:
			return n * factorial(n - 1);
	}
}
```

</Solution>

### Exercice 3

Écrire une fonction qui prend en paramètre un tableau de nombres et qui retourne la moyenne de ces nombres.

<Solution>

```js
function average(numbers) {
	let sum;
	for (const num of numbers) {
		sum += num;
	}
	return num / numbers.length;
}
```

</Solution>

### Exercice 4

#### 5.1

Écrire une fonction `getBalance` qui prend en paramètre une liste d'opération (credit ou debit) et qui retourne la valeur du compte (les crédit sont ajoutés, les débits sont soustraits).

```js
const operations = [
	{ credit: 550, date: new Date('2023-01-01') },
	{ debit: 50, date: new Date('2023-01-02') },
	{ debit: 200, date: new Date('2023-01-03') },
	{ credit: 400, date: new Date('2023-01-08') }
];
getBalance(operations); //= 700
```

<Solution>

```js
function getBalance(operations) {
	let balance = 0;
	for (const operation of operations) {
		if (operation.credit) {
			balance += operation.credit;
		} else if (operation.debit) {
			balance -= operation.debit;
		}
	}
	return balance;
}
```

</Solution>

#### 5.2

Modifier la fonction pour qu'elle prenne un second argument facultatif qui soit la valeur initiale du compte (par défaut 0).

```js
getBalance(operations); // 700
getBalance(operations, 1000); // 1700
```

<Solution>

```js
function getBalance(operations, balance = 0) {
	for (const operation of operations) {
		if (operation.credit) {
			balance += operation.credit;
		} else if (operation.debit) {
			balance -= operation.debit;
		}
	}
	return balance;
}
```

</Solution>

#### 5.3

Modifier la fonction pour qu'elle prenne en argument un objet avec les propriétés suivantes :

- `operations`: une liste d'opération (credit ou debit)
- `initialValue`: la valeur initiale du compte (par défaut 0)
- `until`: une date jusqu'à laquelle les opérations doivent être prises en compte (par défaut aujourd'hui)

```js
const operations = [
  { credit: 550, date: new Date('2023-01-01') },
  { debit: 50, date: new Date('2023-01-02') },
  { debit: 200, date: new Date('2023-01-03') }
  { credit: 400, date: new Date('2023-01-08') }
];

getBalance({ operations: operations }); // 700
getBalance({ operations: operations, initialValue: 100 }); // 800
getBalance({ operations: operations, until: new Date('2023-01-05') }); // 300
```

<Solution>

```js
function getBalance({ operations, initialValue: balance = 0, until = new Date() }) {
	for (const operation of operations) {
		if (operation.date <= until) {
			continue;
		}
		if (operation.credit) {
			balance += operation.credit;
		} else if (operation.debit) {
			balance -= operation.debit;
		}
	}
	return balance;
}
```

</Solution>

### Exercice 5

Nous allons pour cet exercice utiliser le REPL du navigateur. Pour y accéder, il suffit d'ouvrir le débugueur de votre navigateur (F12) et de cliquer sur l'onglet "Console".

<Message>
<div slot='title'>Coller du code dans la console du navigateur</div>

Pour pouvoir coller du code dans la console du navigateur, vous devrez au préalabable écrire manuellement la phrase « autoriser le collage » et appuyer sur la touche « Entrée ».

</Message>

Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 1 et 10 jusqu'à ce que la réponse convienne.

Vous pourrez utiliser la fonction `prompt` pour demander à l'utilisateur de saisir un nombre et la fonction `alert` pour afficher un message à l'utilisateur.

```js
let guess = prompt('Entrez un nombre entre 1 et 10');
// ...
alert('Bravo !');
```

Le nombre pourra être determiné aléatoirement à l'aide de la fonction [`Math.random`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random) et de la fonction [`Math.ceil`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

Vous aurez à utiliser la fonction [`parseInt`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/parseInt) pour convertir la chaîne de caractères saisie par l'utilisateur en nombre.

<Solution>

```js
function guessingGame() {
	const number = Math.ceil(Math.random() * 10);
	let guess;
	while (guess !== number) {
		parseInt(prompt('Entrez un nombre entre 1 et 10'), 10);
	}
	alert('Bravo !');
}
guessingGame();
```

</Solution>

### Exercice 6

Pour commencer, nous allons changer la police d'écriture pour une police monospace. Pour cela, nous allons utiliser la propriété `fontFamily` de l'objet `document.body.style` :

Saisissez le code suivant dans la console du navigateur :

```js
document.body.style.fontFamily = 'monospace';
```

Nous allons maintenant utiliser la méthode `write` de l’objet `document` pour écrire directement dans la fenêtre du navigateur.
Par exemple pour écrire 4 fois le symbole `+` :

```js
// testez ce code dans votre navigateur
const str = '+'.repeat(4);
document.write(str);
```

Maintenant :

1. Écrire une fonction qui dessine une ligne d’étoiles `*` (le nb d’étoiles sera un paramètre).
2. Écrire une fonction qui dessine un triangle composé d’étoiles, c’est-à-dire une succession de lignes d’étoiles de longueur 1 puis 2 puis 3 et ainsi jusqu’à n. Le passage à la ligne se fera à l’aide de la balise HTML adéquate (`<br/>`).
3. Écrire une fonction qui dessine un carré de côté n, le bord de ce carré est composé d’étoiles,
   l’intérieur de « - ».
4. Écrire une fonction qui dessine un losange creux, dont le bord est signifié par des étoiles. Chaque coté de ce losange sera donc dessiné avec n étoiles. Chaque « blanc » sera représenté par un espace non sécable encodé `&amp;nbsp;`. Par exemple, pour créer une ligne de 4 espace puis une étoile, on écrira : `document.write("&amp;nbsp;".repeat(4) + "*");` Voici le rendu pour n=4 : ![Un losange de 4 étoile de côté]({losange})

<Solution>

```js
// 1.
function line(n) {
	document.write('*'.repeat(n));
}

// 2.
function triangle(n) {
	for (let i = 1; i <= n; i++) {
		line(i);
		document.write('<br/>');
	}
}

// 3.
function square(n) {
	for (let i = 1; i <= n; i++) {
		switch (i) {
			case 1:
			case n:
				line(n);
				break;
			default:
				document.write('*' + '°'.repeat(n - 2) + '*');
				break;
		}
		document.write('<br/>');
	}
}

// 4.
function diamond(n) {
	function diamondLine(i) {
		if (i === 1) {
<<<<<<< HEAD
			// Si i = 1, on affiche une seule étoile, au centre
			document.write('&nbsp;'.repeat(n - i + 1) + '*');
			document.write('<br/>');
||||||| parent of 4f6acb5 (feat(style): add page transition)
			document.write(" ".repeat(n - i + 1) + "*");
			document.write("<br/>");
=======
			document.write(' '.repeat(n - i + 1) + '*');
			document.write('<br/>');
>>>>>>> 4f6acb5 (feat(style): add page transition)
			return;
		}
<<<<<<< HEAD

		document.write('&nbsp;'.repeat(n - i + 1) + '*');
		document.write('&nbsp;'.repeat(2 * (i - 2)) + '*');

		document.write('<br/>');
||||||| parent of 4f6acb5 (feat(style): add page transition)
		document.write("&nbsp;".repeat(n - i + 1) + "*" + "&nbsp;".repeat(2 * i - 3) + "*");
		document.write("<br/>");
=======
		document.write('&nbsp;'.repeat(n - i + 1) + '*' + '&nbsp;'.repeat(2 * i - 3) + '*');
		document.write('<br/>');
>>>>>>> 4f6acb5 (feat(style): add page transition)
	}

	for (let i = 1; i < n; i++) {
		diamondLine(i);
	}
	diamondLine(n);
	for (let i = n - 1; i > 0; i--) {
		diamondLine(i);
	}
}
```

</Solution>
