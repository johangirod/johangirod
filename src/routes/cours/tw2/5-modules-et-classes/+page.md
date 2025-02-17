<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
</script>

<Reveal>
    <Slides/>
</Reveal>

## TP 5 : puissance 4

Créer un jeu de puissance 4 en JavaScript.

### Partie 1 : le moteur de jeu

Nous allons créer un moteur de jeu qui permet de jouer une partie de [puissance 4](https://www.jeu-puissance-4.com/).

Créer un fichier `puissance4.js` qui contiendra le moteur de jeu.

Créer une classe `Puissance4` qui contiendra les méthodes suivantes :

- `constructor()` : initialise le jeu
- `play(column)` : joue un coup dans la colonne `column`
- `getCurrentPlayer()` : retourne le joueur dont c'est le tour
- `getWinner()` : retourne le joueur gagnant (ou `null` si personne n'a gagné)
- `getBoard()` : retourne le plateau de jeu (le tableau de tableau)
- `logBoard()` : affiche le tableau de jeu dans la console (on pourra utiliser `console.table`)

Le plateau de jeu sera représenté par un tableau de 6 lignes et 7 colonnes. Chaque case pourra contenir un des trois états suivants : `null` (case vide), `A` (joueur A) ou `B` (joueur B).

#### 1. `constructor()`

Le constructeur initialisera le plateau de jeu avec toutes les cases vides (initialisées à `null`).

Le plateau est représenté par un tableau de 6 lignes, chaque ligne contenant un tableau de 7 éléments représentant les cases de chaque colonnes.

Ainsi, pour accéder à la case en ligne 3 et colonne 4, on pourra utiliser `this.#grid[3][4]`.

Pour cela, on pourra utiliser la méthode [`Array.from`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

**Exemple d'utilisation de `Array.from`**

```javascript
const nombreJusqua10 = Array.from({ length: 10 }, (v, i) => i);
```

<Solution>

```javascript
export class Puissance4 {
	#winner = null;

	#grid;

	constructor() {
		// On crée un tableau de 6 lignes contenant chacune un tableau de 7 cases
		// Il est initialisé à null

		// Pour atteindre la case positionnée en ligne 3 et colonne 4
		// this.#grid[3][4]
		this.#grid = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));
	}
}
```

</Solution>

#### 2. `logBoard()`

La méthode `logBoard()` permettra d'afficher le plateau de jeu dans la console. On pourra utiliser la méthode `console.table` pour afficher le tableau.

Vérifier que votre code fonctionne en initialisant une instance de la classe `Puissance4` et en affichant le plateau de jeu dans la console.

```javascript
const game = new Puissance4();
game.logBoard();
```

<Solution>

```javascript
	logBoard() {
		console.table(this.#grid);
	}
```

</Solution>

#### 3. `getCurrentPlayer()`

Le premier joueur sera le joueur A. La méthode `getCurrentPlayer()` retournera le joueur dont c'est le tour. Ce dernier changera à chaque coup joué.

Faire en sorte que le joueur courant ne puisse pas être modifié directement depuis l'extérieur de la classe (on pourra utiliser le mot-clé `private`).

<Solution>

```javascript
	#currentPlayer = 'A';

	getCurrentPlayer() {
		return this.#currentPlayer;
	}
```

</Solution>

#### 4. `play()`

La méthode `play(column)` permettra de jouer un coup dans la colonne `column`. Le coup sera joué par le joueur dont c'est le tour (joueur A ou joueur B). La méthode retournera `true` si le coup a été joué, `false` sinon.

Vérifier que votre code fonctionne en jouant un coup dans une colonne.

```javascript
const game = new Puissance4();
game.play(3);
game.logBoard();
```

<Solution>

```javascript

	play(column) {
		// Si la colonne est pleine, on ne peut pas jouer
		if (this.#grid[0][column]) {
			return false;
		}
		// On cherche la première case vide
		const ligneCaseVide = this.#grid.findIndex((ligne) => ligne[column] === null);
		// On ajoute un jeton correspondant au joueur actuel
		this.#grid[ligneCaseVide][column] = this.#currentPlayer;
		// On change le joueur courant
		this.#currentPlayer = this.#currentPlayer === 'A' ? 'B' : 'A';
	}
```

</Solution>

#### 5. `getWinner()`

La méthode `getWinner()` retournera le joueur gagnant (ou `null` si personne n'a gagné).

_Indice : on pourra utiliser une méthode privée `#checkWin(row, column)` qui vérifiera si un joueur a gagné à la fin de la méthode `play`. De cette manière, on sait à partir de quel jeton il faut vérifier les alignements._

Vérifier que votre code fonctionne :

```javascript
const game = new Puissance4();
game.play(3); // A
game.play(1);
game.play(3); // A
game.play(8);
game.play(3); // A
game.play(4);
game.play(3); // A
game.logBoard();
console.log(game.getWinner()); // A
```

<Solution>

```javascript

	getWinner() {
		return this.#winner;
	}

	#checkWin(row, column) {
		if (this.#winner) {
			return;
		}
		const directions = [
			[0, 1],
			[1, 0],
			[1, 1],
			[1, -1]
		];
		// Pour chacune des direction possible (vertical, horizontal, diagonale droite, diagonale gauche)
		for (const [dx, dy] of directions) {
			let count = 1;
			// On compte le nombre de jeton aligné après le jeton joué
			for (let i = 1; i < 4; i++) {
				const x = column + i * dx;
				const y = row + i * dy;
				if (this.#grid[y]?.[x] !== this.#currentPlayer) {
					break;
				}
				count++;
			}
			// On compte le nombre de jeton aligné avant le jeton joué
			for (let i = 1; i < 4; i++) {
				const x = column - i * dx;
				const y = row - i * dy;

				if (this.#grid[y]?.[x] !== this.#currentPlayer) {
					break;
				}
				count++;
			}

			// Si on a 4 jetons alignés (ou plus), on a un gagnant
			if (count >= 4) {
				this.#winner = this.#currentPlayer;
				break;
			}
		}
	}
```

</Solution>

### Partie deux : l'interface

1. Créer un fichier `puissance4.html` qui contiendra l'interface du jeu, et un fichier `index.js` qui contiendra le code JavaScript permettant d'interagir avec le moteur de jeu.

   Vous pouvez utiliser le code HTML suivant :

   ```html
   <!doctype html>
   <html lang="fr">
   	<head>
   		<meta charset="UTF-8" />
   		<title>Puissance 4</title>
   		<link rel="stylesheet" href="style.css" />
   	</head>
   	<body>
   		<script src="index.js" type="module"></script>
   		<h1>Puissance 4</h1>
   		<div id="board"></div>
   	</body>
   </html>
   ```

1. Pour pouvoir utiliser les modules avec votre projet, il faudra installer une extension VSCode qui permet de lancer un serveur local. Vous pouvez installer l'extension `Live Server` par exemple. Puis, faire un clic droit sur le fichier `puissance4.html` et choisir `Open with Live Server`.
1. Créer une fonction `renderBord` qui affiche le plateau de jeu dans la div `board`. Le plateau sera représenté par plusieurs `div` représentant les colonnes et les cases du jeu.

   ```html
   <div id="board">
   	<div class="column">
   		<div class="case"></div>
   		...
   	</div>
   </div>
   ```

   Les case seront représentées par des `div` avec la classe `case`. Les cases du joueur A auront en plus la classe `player-A`, les cases du joueur B auront la classe `player-B`.

   Pour styliser le plateau de jeu, vous pouvez utiliser le fichier `style.css` suivant :

   ```css
   #board {
   	display: flex;
   }

   .column {
   	display: flex;
   	flex-direction: column;
   }

   .case {
   	width: 50px;
   	height: 50px;
   	border: 1px solid black;
   }

   .case.player-A {
   	background: radial-gradient(circle, #ff0000, #990000);
   }
   .case.player-B {
   	background: radial-gradient(circle, #ffff00, #999900);
   }
   ```

1. Faire en sorte que le jeu puisse être joué en cliquant sur les colonnes du plateau :
   - Afficher en haut le joueur dont c'est le tour.
   - Jouer un coup dans la colonne en cliquant dessus
   - Si un joueur a gagné, on affichera un message de victoire

<Solution>

```javascript
// Fichier index.js
import { Puissance4 } from './puissance4.js';

const game = new Puissance4();
renderBoard();

function renderBoard() {
	const boardElem = document.querySelector('#board');
	if (!boardElem) {
		throw new Error("Impossible de trouver l'élément #board");
	}
	boardElem.innerHTML = '';
	const board = game.getBoard();
	const numberOfRow = board.length;
	const numberOfColumn = board[0].length;
	for (let j = 0; j < numberOfColumn; j++) {
		// On crée chaque colonne dans une boucle
		const columnDiv = document.createElement('div');
		columnDiv.classList.add('column');

		for (let i = 0; i < numberOfRow; i++) {
			// Pour chaque colonne, on ajoute les cases avec les jetons,
			// en commençant par la dernière ligne
			const caseDiv = document.createElement('div');
			caseDiv.classList.add('case');
			const jeton = board[i][j];
			if (jeton === 'A') {
				caseDiv.classList.add('player-A');
				caseDiv.innerText = 'A';
			} else if (jeton === 'B') {
				caseDiv.classList.add('player-B');
				caseDiv.innerText = 'B';
			}

			columnDiv.appendChild(caseDiv);
		}

		// On ajoute un écouteur d'événement pour chaque colonne
		columnDiv.addEventListener('click', () => {
			game.play(i);
			// On réaffiche le plateau après chaque coup
			renderBoard();
		});
		boardElem.appendChild(columnDiv);
	}

	// Affiche le joueur dont c'est le tour
	let playerInfo = document.querySelector('.player-info');
	if (!playerInfo) {
		playerInfo = document.createElement('div');
		playerInfo.classList.add('player-info');
		document.body.appendChild(playerInfo);
	}
	playerInfo.textContent = `C'est au joueur ${game.getCurrentPlayer()} de jouer`;

	// Affiche un message de victoire si un joueur a gagné
	if (game.getWinner()) {
		const message = document.createElement('div');
		message.textContent = `Le joueur ${game.getWinner()} a gagné !`;
		document.body.appendChild(message);
	}
}
```

</Solution>
