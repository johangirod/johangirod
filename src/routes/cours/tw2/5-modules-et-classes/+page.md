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
- `getBoard()` : retourne le plateau de jeu

Le plateau de jeu sera représenté par un tableau de 6 lignes et 7 colonnes. Chaque case pourra contenir un des trois états suivants : `undefined` (case vide), `A` (joueur A) ou `B` (joueur B).

Le constructeur initialisera le plateau de jeu avec toutes les cases vides.

La méthode `play(column)` permettra de jouer un coup dans la colonne `column`. Le coup sera joué par le joueur dont c'est le tour (joueur A ou joueur B). La méthode retournera `true` si le coup a été joué, `false` sinon.

La méthode `getCurrentPlayer()` retournera le joueur dont c'est le tour.

La méthode `isWin()` vérifiera si un joueur a gagné. Elle retournera `A` si le joueur A a gagné, `B` si le joueur B a gagné, `false` sinon.

La méthode `isDraw()` vérifiera si la partie est nulle. Elle retournera `true` si la partie est nulle, `false` sinon.

## Partie deux : l'interface

Créer un fichier `puissance4.html` qui contiendra l'interface du jeu, et un fichier `index.js` qui contiendra le code JavaScript permettant d'interagir avec le moteur de jeu.

Pour l'interface, vous pouvez utiliser le code HTML suivant :

```html
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="UTF-8" />
		<title>Puissance 4</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<h1>Puissance 4</h1>
		<div id="board"></div>
		<script src="index.js"></script>
	</body>
</html>
```

1. Créer une fonction `renderBord` qui affiche le plateau de jeu dans la div `board`. Le plateau sera représenté par plusieurs `div` représentant les colonnes et les cases du jeu.

   ```html
   <div class="board">
   	<div class="column">
   		<div class="case"></div>
   		...
   	</div>
   </div>
   ```

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
   	border: 1px solid black;
   }
   ```

2. Créer une fonction `play` qui permet de jouer un coup dans une colonne. La fonction prendra en paramètre le numéro de la colonne, et mettra à jour l'interface en fonction du coup joué.
   - Si le coup est invalide, la fonction affichera un message d'erreur.
   - Si un joueur a gagné, la fonction affichera un message de victoire.
   - Si la partie est nulle, la fonction affichera un message de match nul.
