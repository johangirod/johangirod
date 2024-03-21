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

Nous allons créer un moteur de jeu qui permet de jouer une partie de puissance 4.

Créer un fichier `puissance4.js` qui contiendra le moteur de jeu.

Créer une classe `Puissance4` qui contiendra les méthodes suivantes :

- `constructor()` : initialise le jeu
- `play(column)` : joue un coup dans la colonne `column`
- `getCurrentPlayer()` : retourne le joueur dont c'est le tour
- `isWin()` : vérifie si un joueur a gagné
- `isDraw()` : vérifie si la partie est nulle
- `getBoard()` : retourne le plateau de jeu (le tableau de tableau)
- `logBoard()` : affiche le tableau de jeu dans la console (on pourra utiliser `console.table`)

Le plateau de jeu sera représenté par un tableau de 6 lignes et 7 colonnes. Chaque case pourra contenir un des trois états suivants : `undefined` (case vide), `A` (joueur A) ou `B` (joueur B).

Le constructeur initialisera le plateau de jeu avec toutes les cases vides.

La méthode `play(column)` permettra de jouer un coup dans la colonne `column`. Le coup sera joué par le joueur dont c'est le tour (joueur A ou joueur B). La méthode retournera `true` si le coup a été joué, `false` sinon.

La méthode `getCurrentPlayer()` retournera le joueur dont c'est le tour.

La méthode `isWin()` vérifiera si un joueur a gagné. Elle retournera `A` si le joueur A a gagné, `B` si le joueur B a gagné, `false` sinon.

La méthode `isDraw()` vérifiera si la partie est nulle. Elle retournera `true` si la partie est nulle, `false` sinon.

Pour vérifier les fonctions vous pouvez créer un fichier `test.js` qui appellera les fonctions de la classe `Puissance4` et affichera le résultat dans la console.

```
node test.js
```

**`constructor()`**

<Solution>

```javascript
class Puissance4 {
	winner = false;
	currentPlayer = 'A';

	constructor() {
		this.grid = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));
	}
}
```

</Solution>

**`getCurrentPlayer()`**

<Solution>

```javascript
	getCurrentPlayer() {
		return this.currentPlayer;
	}
```

</Solution>

**`play(column)`**

<Solution>

```javascript
	play(column) {
		if (this.grid[column].at(-1) !== null) {
			return false;
		}
		const row = this.grid[column].findIndex((row, i) => {
			row === null;
		});
		this.grid[column][row] = this.currentPlayer;
		this.currentPlayer = this.currentPlayer === 'A' ? 'B' : 'A';

		this.#checkWin(column, row);
	}
```

</Solution>

**`isWin()`**

<Solution>

```javascript
	#checkWin(column, row) {
		const directions = [
			[0, 1],
			[1, 0],
			[1, 1],
			[1, -1]
		];
		for (const [dx, dy] of directions) {
			let count = 1;
			for (let i = 1; i < 4; i++) {
				const x = column + i * dx;
				const y = row + i * dy;
				if (this.grid[x][y] !== this.currentPlayer) {
					break;
				}
				count++;
			}
			for (let i = 1; i < 4; i++) {
				const x = column - i * dx;
				const y = row - i * dy;
				if (this.grid[x][y] !== this.currentPlayer) {
					break;
				}
				count++;
			}
			if (count >= 4) {
				this.winner = this.currentPlayer;
				break;
			}
		}
	}

	isWin() {
		return this.winner;
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
   <div class="board">
   	<div class="column">
   		<div class="case"></div>
   		...
   	</div>
   </div>
   ```

   Les case seront représentées par des `div` avec la classe `case`. Les cases du joueur A auront en plus la classe `player-A`, les cases du joueur B auront la classe `player-B`.

   Pour styliser le plateau de jeu, vous pouvez utiliser le fichier `style.css` suivant :

   ```css
   .board {
   	display: flex;
   }

   .column {
   	display: flex;
   	flex-direction: column;
   }

   .case {
   	width: 50px;
   	height: 50px;
   	border: 1-color: red;px solid black;
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
