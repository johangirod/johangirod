<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import { showSolution } from '$lib/showSolution.ts';

</script>

<Reveal>
    <Slides/>
</Reveal>

## TP 5 : Balatro simplifié

Créer une version simplifiée du jeu de cartes Balatro en JavaScript, où le but est de former les meilleures combinaisons de poker possible.

**Principes du jeu**

- Le joueur reçoit une main de **5 cartes** piochées aléatoirement dans un deck de 52 cartes standard.
- À chaque manche, le joueur dispose de **3 échanges** pour améliorer sa main en remplaçant des cartes individuelles.
- Une fois satisfait de sa main (ou après avoir utilisé tous ses échanges), le joueur valide sa main et un **score** est calculé en fonction de la combinaison de poker obtenue.

**Calcul du score**

Le score est calculé selon la formule : **(jetons de base + jetons des cartes gagnantes) × multiplicateur**

Chaque carte a une valeur en jetons :

- **As** = 11 jetons
- **Têtes** (Valet, Dame, Roi) = 10 jetons
- **Autres** (2 à 10) = valeur faciale

Les combinaisons reconnues sont (du plus faible au plus fort) :

| Combinaison      | Jetons de base | Multiplicateur | Cartes gagnantes                              |
| ---------------- | -------------- | -------------- | --------------------------------------------- |
| **Carte Haute**  | 5              | ×1             | la carte la plus haute                        |
| **Paire**        | 10             | ×2             | les 2 cartes de même valeur                   |
| **Double Paire** | 20             | ×2             | les 4 cartes des 2 paires                     |
| **Brelan**       | 30             | ×3             | les 3 cartes de même valeur                   |
| **Suite**        | 30             | ×4             | les 5 cartes consécutives                     |
| **Couleur**      | 35             | ×4             | les 5 cartes de même couleur (♠, ♥, ♦, ♣) |
| **Full**         | 40             | ×4             | les 5 cartes (brelan + paire)                 |
| **Carré**        | 60             | ×7             | les 4 cartes de même valeur                   |
| **Quinte Flush** | 100            | ×8             | les 5 cartes (suite + couleur)                |

**Exemple** : une paire de 7 donne (10 + 7 + 7) × 2 = **48 points**.

Le score total s'accumule au fil des manches.

### Installation

```bash
git clone https://sources.univ-jfc.fr/techno-web-2/tp8-balatro.git
cd tp8-balatro
npm install
npm run dev
```

Ce TP se rapproche d'un exercice en conditions réel. Vous arrivez sur un projet avec un certain nombre de fichiers / fonctions déjà définis. Le but est de savoir les réutiliser à bon escient. Prenez un petit temps pour examiner l'architecture des fichiers. Arrivez-vous à voir comment ils sont organisés ?

Ce TP utilise un bundler ([`vite`](https://vite.dev/)) pour servir les fichiers de développement et faire de la compilation de contenu (comme du CSS).

> A savoir : tous les projets javascript moderne utilisent un bundler, et `vite` est le plus moderne / populaire d'entre eux.

### Partie 1 : le moteur de jeu

Nous allons créer un moteur de jeu qui simule les mécaniques de base de Balatro : tirage de cartes, formation de main de poker, et calcul de score.

La main sera représentée par un tableau de 5 cartes. Chaque carte est un objet avec une `valeur` (1 pour As, 13 pour Roi) et une `couleur` (♠, ♥, ♦, ♣).

Des tests sont disponibles, vous pouvez les lancer avec la commande `npm test`

#### 2. `piocher(nombre)`

Pioche `nombre` cartes du deck et les ajoute à la main (`this.#hand`). La méthode retourne `true` si le tirage a réussi, `false` s'il n'y a pas assez de cartes dans le deck.

**Note** Pour piocher une carte, il faut l'enlever de `this.#deck` et l'ajouter à `this.#hand`.

<Solution showAnyway>

```javascript
piocher(nombre) {
	if (this.#deck.length < nombre) return false;

	for (let i = 0; i < nombre; i++) {
		this.#hand.push(this.#deck.pop());
	}
	return true;
}
```

</Solution>

#### 3. `echanger(index)`

Échange la carte à l'index donné (0-4) pour une nouvelle carte du deck. Le nombre d'échanges est limité à 3 par manche. Retourne `true` si l'échange a réussi, `false` sinon.

<Solution showAnyway>

```javascript
echanger(index) {
	if (this.#echangesRestants <= 0 || index < 0 || index > 4) return false;

	this.#hand[index] = this.#deck.pop();
	this.#echangesRestants--;
	return true;
}
```

</Solution>

### Partie 2 : le calcul du score (`score.js`)

Le calcul du score est séparé dans un module `score.js`. Ce module utilise la fonction `calculMainGagnante` du fichier fourni `detecter-main/index.js` et ajoute la logique de calcul du score.

Le fichier `score.js` contient deux fonctions à implémenter :

1. **`valeurJetons(carte)`** : retourne la valeur en jetons d'une carte (As = 11, têtes = 10, autres = valeur faciale).
2. **`calculerScore(main)`** : prend une main de 5 cartes et retourne un objet `{ score, multiplier, jetons, typeMain }`.

#### `valeurJetons(carte)`

<Solution showAnyway>

```javascript
export function valeurJetons(carte) {
	if (carte.valeur === 1) return 11; // As
	if (carte.valeur >= 11) return 10; // Valet, Dame, Roi
	return carte.valeur;
}
```

</Solution>

#### `calculerScore(main)`

Cette fonction doit :

1. Appeler `calculMainGagnante(main)` pour obtenir le type de combinaison et les cartes gagnantes
2. Calculer jetons de base et le multiplicateur
3. Calculer les jetons totaux : jetons de base + somme des jetons des cartes gagnantes
4. Calculer le score total (score = jetons totaux × multiplicateur)
5. Retourner `{ score, multiplier, jetons, typeMain }`

<Solution showAnyway>

```javascript
import { calculMainGagnante, TYPES_MAIN } from './detecter-main/index.js';

const COMBOS = {
	[TYPES_MAIN.QUINTE_FLUSH]: { jetons: 100, mult: 8 },
	[TYPES_MAIN.CARRE]: { jetons: 60, mult: 7 },
	[TYPES_MAIN.FULL]: { jetons: 40, mult: 4 },
	[TYPES_MAIN.COULEUR]: { jetons: 35, mult: 4 },
	[TYPES_MAIN.SUITE]: { jetons: 30, mult: 4 },
	[TYPES_MAIN.BRELAN]: { jetons: 30, mult: 3 },
	[TYPES_MAIN.DOUBLE_PAIRE]: { jetons: 20, mult: 2 },
	[TYPES_MAIN.PAIRE]: { jetons: 10, mult: 2 },
	[TYPES_MAIN.CARTE_HAUTE]: { jetons: 5, mult: 1 }
};

export function calculerScore(main) {
	const { type, cartes } = calculMainGagnante(main);
	const combo = COMBOS[type];
	const jetonsCartes = cartes.reduce((somme, c) => somme + valeurJetons(c), 0);
	const jetons = combo.jetons + jetonsCartes;
	const multiplicateur = combo.mult;

	return {
		score: jetons * multiplicateur,
		multiplier,
		jetons,
		typeMain: type
	};
}
```

</Solution>

#### Implémenter `jouerMain()`

Maintenant que vous avez implémenté le calcul du score d'une main, vous pouvez l'utiliser dans le moteur de jeu. Dans le fichier `balatro.js`, implémentez la méthode `jouerMain`. Cette méthode est appelée lorsque le ou la joueuse clique sur « valider ».

La méthode : 
1. Calcule le score de la main via `calculerScore()` (du module `score.js`)
2. Ajoute le score au total
3. Vide la main, réinitialise les échanges, mélange et pioche une nouvelle main

<Solution showAnyway>

```js
jouerMain() {
 const { score } = calculerScore(this.#hand);
 this.#score += score;

 this.#hand = [];
 this.#echangesRestants = 3;
 this.melanger();
 this.piocher(5);
}
```

</Solution>


### Partie 3 : l'interface

#### Approche composant

Nous avons adopté une approche **composant** pour l'affichage. L'idée est de regrouper dans une fonction tout ce qui concerne l'affichage d'un élément : sa création DOM, son style, ses événements. L'approche composant est systématiquement utilisés dans les « vrais » projets, car elle permet d'organiser le code efficacement.

Un composant est une fonction qui prend des paramètre et retourne un noeud DOM, prêt à être inséré dans la page.

Dans ce TP, deux composants vous sont fournis : `carte` et `score`. Vous pouvez regarder le fichier `main.js` pour voir un exemple de leur utilisation.

#### Boucle de jeu

Maintenant que nous avons le moteur de jeu et les composants, assemblons le tout dans `main.js`. Le HTML est déjà fourni dans `index.html`.

L'interface doit :

1. Afficher la main en utilisant le composant `carte`. Chaque carte a un `onClick` qui appelle `jeu.echanger(index)` puis rafraîchit l'affichage.
2. Afficher la combinaison actuelle (sans le total) via le composant `affichageScore`.
3. Au clic sur « Valider la main » :
   - Calculer le score et afficher le panneau **avec le total** (`avecTotal: true`)
   - Désactiver le bouton et les cartes
   - Après **2 secondes** (`setTimeout`), appeler `jeu.jouerMain()`, incrémenter la manche, et rafraîchir l'interface

<Solution>

```javascript
// main.js
import './style.css';
import { BalatroSimplifie } from './balatro.js';
import { calculerScore } from './score.js';
import { carte } from './carte/index.js';
import { affichageScore } from './affichage-score/index.js';

const jeu = new BalatroSimplifie();

const mainDiv = document.querySelector('#main');
function renderMain({ disabled = false } = {}) {
	mainDiv.innerHTML = '';
	const main = jeu.getMain();
	const disabled = jeu.getEchangesRestants() <= 0 || disabled;
	
	main.forEach((carteData, index) => {
		const carteEl = carte(carteData, {
			onClick: () => {
				if (jeu.echanger(index)) {
					renderMain()
					renderScore()
				}
			},
			disabled
		});
		
		mainDiv.appendChild(carteEl);
	});
}

const scoreContainer = document.querySelector('#score');
function renderScore(options) {
	const scoreData = calculerScore(jeu.getMain());
	scoreContainer.innerHTML = '';
	scoreContainer.appendChild(affichageScore(scoreData, options));
}


function renderInfo() {
	document.querySelector('#echanges') = jeu.getEchangesRestants();
	document.querySelector('#score-total') =.textContent = jeu.getScore();
	document.querySelector('#manche').textContent = jeu.getManche();
}

document.querySelector('#validerMain').addEventListener('click', () => {
	// Afficher le score avec le total
	renderScore({ avecTotal: true })
	renderMain({ disabled: true })

	// Après un délai, passer à la manche suivante
	setTimeout(() => {
		jeu.jouerMain();
		renderJeu()
	}, 2000);
});

function renderJeu() {
  renderMain()
  renderScore()
  renderInfo()
}

renderJeu()

```

</Solution>

### Partie 4 : Nouvelles règles !

#### 1. Un Balatro plus grand

Dans le jeu Balatro, il y a deux mains :

- Les cartes affichées face visible (main visible), au nombre de 8
- Les cartes selectionnées pour être jouées (main jouée), au nombre de 5

Lors de l'échange, on selectionne le nombre de carte à changer (de 1 à la taille de la main visible, soit 8), puis on clique sur « échanger » pour confirmer l'échange.

Lorsqu'une main est jouée, elle est défaussé. Puis, on garde les cartes visibles non jouée dans la main, et on pioche pour compléter la main visible jusqu'à son nombre de base (8).

Modifier votre code pour implémenter ce nouveau comportement.

#### 2. Conditions de fin

Le Balatro actuel n'a pas de conditions de fin, on peut continuer à jouer indéfiniment sans savoir si on a perdu ou gagné.

Nous allons modifier cela, en limitant le nombre d'échange possible **sur plusieurs manches** (plutôt que à chaque manche)

Par ailleurs nous allons ajouter un **compteur de manches** (compteur de main jouées).

Le nombre d'échange est limité à 4, et le nombre de main jouées à 3.

Quand le compteur d'échange est à zéro, on ne peut plus jouer de nouvelles cartes.

Quand le compteur de manche est à zéro, le jeu est terminé, on affiche le score.

#### 3. Highscore

Faire en sorte de sauvegarder les highscore dans le `localStorage`, et de les afficher.
