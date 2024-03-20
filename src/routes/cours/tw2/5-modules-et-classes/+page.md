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
