<script>
	import Message from '$lib/Message.svelte';
	import Solution from '$lib/Solution.svelte';
	import Reveal from '$lib/Reveal.svelte';
	import Slides from './slides.svelte';
	import { showSolution } from '$lib/showSolution.ts';

	showSolution.set(true);
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
- Les combinaisons reconnues sont (du plus faible au plus fort) :
  - **Paire** (5 points) : deux cartes de même valeur
  - **Double Paire** (10 points) : deux paires différentes
  - **Brelan** (15 points) : trois cartes de même valeur
  - **Suite** (25 points) : cinq cartes consécutives
  - **Couleur** (30 points) : cinq cartes de la même couleur (♠, ♥, ♦, ♣)
  - **Full** (40 points) : un brelan + une paire
  - **Carré** (60 points) : quatre cartes de même valeur
  - **Quinte Flush** (100 points) : une suite de la même couleur
- Le score total s'accumule au fil des manches.

### Partie 1 : le moteur de jeu

Wip

<!--


Nous allons créer un moteur de jeu qui simule les mécaniques de base de Balatro : tirage de cartes, formation de main de poker, et calcul de score.

Créer un fichier `balatro.js` qui contiendra le moteur de jeu.

Créer une classe `BalatroSimplifie` qui contiendra les méthodes suivantes :

- `constructor()` : initialise le jeu avec un deck de 52 cartes
- `melanger()` : mélange le deck
- `piocher(nombre)` : pioche `nombre` cartes du deck
- `echanger(index)` : échange la carte à l'index donné
- `calculerScore()` : calcule le score basé sur les combinaisons de poker
- `getMain()` : retourne la main actuelle
- `getScore()` : retourne le score total
- `mancheSuivante()` : passe à la manche suivante

La main sera représentée par un tableau de 5 cartes. Chaque carte est un objet avec une `valeur` (1 pour As, 13 pour Roi) et une `couleur` (♠, ♥, ♦, ♣).

#### 1. `constructor()`

Le constructeur initialisera le deck avec les 52 cartes standard et créera une main vide.

```javascript
export class Balatro {
	#deck = [];
	#hand = [];
	#score = 0;
	#echangesRestants = 3;

	constructor() {
		const couleurs = ['♠', '♥', '♦', '♣'];
		// Initialisation du deck : 54 cartes, valeurs 1 à 13 (As à Roi), 4 couleurs
		// @ TODO
		this.melanger();
		this.piocher(5); // Pioche initiale de 5 cartes
	}

	melanger() {
		// @TODO
	}
	echanger(index) {
		// @TODO
	}
	calculerScore() {
		// @TODO
	}
	getMain() {
		// @TODO
	}
	getScore() {
		// @TODO
	}
}
```

<Solution >

```javascript
	constructor() {
		// Création du deck : valeurs 1-13 (As à Roi), 4 couleurs
		const couleurs = ['♠', '♥', '♦', '♣'];
		for (let valeur = 1; valeur <= 13; valeur++) {
			for (const couleur of couleurs) {
				this.#deck.push({ valeur, couleur });
			}
		}
		this.melanger();
		this.piocher(5); // Pioche initiale de 5 cartes
	}

```

</Solution>

#### 2. `melanger()`

Vous pourrez utiliser la fonction `.sort((a, b) => Math.random() - 0.5)` pour trier le deck avec un ordre aléatoire.

<Solution >

```javascript
melanger() {
	this.#deck.sort((a, b) => Math.random() - 0.5);
}
```

</Solution>

#### 3. `piocher(nombre)`

Pioche `nombre` cartes du deck et les ajoute à la main. La méthode retourne `true` si le tirage a réussi.

**Note** Pour piocher une carte, il faut l'enlever de `this.#deck` et l'ajouter à `this.#hand`.

<Solution>

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

#### 4. `echanger(index)`

Échange la carte à l'index donné (0-4) pour une nouvelle carte du deck. Le nombre d'échanges est limité à 3 par manche.

<Solution >

```javascript
echanger(index) {
	if (this.#echangesRestants <= 0 || index < 0 || index > 4) return false;

	this.#hand[index] = this.#deck.pop();
	this.#echangesRestants--;
	return true;
}
```

</Solution>

#### 5. `calculerScore()`

Analyse la main et retourne le score basé sur les combinaisons de poker (paire, double paire, brelan, suite, couleur, full, carré, quinte flush).

````javascript
calculerScore() {
  // 1. Vérifie si toutes les cartes sont de la même couleur
  const estCouleur = ??

  // 2. Compte les occurrences de chaque valeur (retourne un objet)
  let occurrences;

	// Compte les occurrences de chaque valeur
	const comptes = {};
	valeurs.forEach(v => comptes[v] = (comptes[v] || 0) + 1);
	const occurrences = Object.values(comptes).sort((a, b) => b - a);

	const estCouleur = couleurs.every(c => c === couleurs[0]);
	const estSuite = valeurs.every((v, i) => i === 0 || v === valeurs[i-1] + 1);

	let score = 0;
	let combo = 'Rien';

	if (estSuite && estCouleur) {
		score = 100;
		combo = 'Quinte Flush !';
	} else if (occurrences[0] === 4) {
		score = 60;
		combo = 'Carré !';
	} else if (occurrences[0] === 3 && occurrences[1] === 2) {
		score = 40;
		combo = 'Full !';
	} else if (estCouleur) {
		score = 30;
		combo = 'Couleur !';
	} else if (estSuite) {
		score = 25;
		combo = 'Suite !';
	} else if (occurrences[0] === 3) {
		score = 15;
		combo = 'Brelan !';
	} else if (occurrences[0] === 2 && occurrences[1] === 2) {
		score = 10;
		combo = 'Double Paire !';
	} else if (occurrences[0] === 2) {
		score = 5;
		combo = 'Paire !';
	}

	return { score, combo, main: [...this.#hand] };
}
<Solution >

```javascript
calculerScore() {
  // 1. Vérifie si toutes les cartes sont de la même couleur
  const estCouleur

	const valeurs = this.#hand.map(c => c.valeur).sort((a, b) => a - b);
	const couleurs = this.#hand.map(c => c.couleur);

	// Compte les occurrences de chaque valeur
	const comptes = {};
	valeurs.forEach(v => comptes[v] = (comptes[v] || 0) + 1);
	const occurrences = Object.values(comptes).sort((a, b) => b - a);

	const estCouleur = couleurs.every(c => c === couleurs[0]);
	const estSuite = valeurs.every((v, i) => i === 0 || v === valeurs[i-1] + 1);

	let score = 0;
	let combo = 'Rien';

	if (estSuite && estCouleur) {
		score = 100;
		combo = 'Quinte Flush !';
	} else if (occurrences[0] === 4) {
		score = 60;
		combo = 'Carré !';
	} else if (occurrences[0] === 3 && occurrences[1] === 2) {
		score = 40;
		combo = 'Full !';
	} else if (estCouleur) {
		score = 30;
		combo = 'Couleur !';
	} else if (estSuite) {
		score = 25;
		combo = 'Suite !';
	} else if (occurrences[0] === 3) {
		score = 15;
		combo = 'Brelan !';
	} else if (occurrences[0] === 2 && occurrences[1] === 2) {
		score = 10;
		combo = 'Double Paire !';
	} else if (occurrences[0] === 2) {
		score = 5;
		combo = 'Paire !';
	}

	return { score, combo, main: [...this.#hand] };
}
````

</Solution>

### Partie 2 : l'interface

1. Créer un fichier `balatro.html` et `index.js` pour l'interface.

   ```html
   <!doctype html>
   <html lang="fr">
   	<head>
   		<meta charset="UTF-8" />
   		<title>Balatro Simplifié</title>
   		<link rel="stylesheet" href="style.css" />
   	</head>
   	<body>
   		<h1>Balatro Simplifié</h1>
   		<div id="score">Score : 0</div>
   		<div id="echanges">Échanges restants : 3</div>
   		<div id="main"></div>
   		<div id="combo"></div>
   		<button id="nouvelleManche">Nouvelle Manche</button>
   		<script src="index.js" type="module"></script>
   	</body>
   </html>
   ```

1. Implémenter l'affichage des 5 cartes avec leurs valeurs et couleurs.

<Solution>

```javascript
// index.js
import { BalatroSimplifie } from './balatro.js';

const jeu = new BalatroSimplifie();
const mainDiv = document.querySelector('#hand');
const scoreDiv = document.querySelector('#score');
const comboDiv = document.querySelector('#combo');
const echangesDiv = document.querySelector('#echanges');
const btnNouvelleManche = document.querySelector('#nouvelleManche');

function afficherMain() {
	mainDiv.innerHTML = '';
	jeu.getMain().forEach((carte, index) => {
		const carteDiv = document.createElement('div');
		carteDiv.className = 'carte';
		carteDiv.dataset.index = index;

		const valeurDiv = document.createElement('div');
		valeurDiv.textContent =
			carte.valeur === 1
				? 'A'
				: carte.valeur === 11
					? 'J'
					: carte.valeur === 12
						? 'Q'
						: carte.valeur === 13
							? 'K'
							: carte.valeur;

		const couleurDiv = document.createElement('div');
		couleurDiv.textContent = carte.couleur;
		couleurDiv.className = `couleur ${carte.couleur}`;

		carteDiv.appendChild(valeurDiv);
		carteDiv.appendChild(couleurDiv);

		carteDiv.addEventListener('click', () => {
			jeu.echanger(index);
			mettreAJourUI();
		});

		mainDiv.appendChild(carteDiv);
	});
}

function mettreAJourUI() {
	afficherMain();
	const resultat = jeu.calculerScore();
	comboDiv.textContent = resultat.combo;
	echangesDiv.textContent = `Échanges restants : ${jeu._echangesRestants}`;
}

btnNouvelleManche.addEventListener('click', () => {
	jeu.mancheSuivante();
	scoreDiv.textContent = `Score : ${jeu.getScore()}`;
	mettreAJourUI();
});

mettreAJourUI();
```

</Solution>

1. Styliser les cartes avec `style.css`.

<Solution>

```css
#hand {
	display: flex;
	gap: 10px;
	margin: 20px;
}

.carte {
	width: 80px;
	height: 120px;
	border: 2px solid #333;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: white;
	cursor: pointer;
	transition: transform 0.2s;
	font-size: 24px;
}

.carte:hover {
	transform: translateY(-5px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.couleur.♠,
.couleur.♣ {
	color: black;
}

.couleur.♥,
.couleur.♦ {
	color: red;
}

#combo {
	font-size: 32px;
	font-weight: bold;
	margin: 20px;
	color: #4caf50;
}

button {
	padding: 10px 20px;
	font-size: 18px;
	cursor: pointer;
}
```

</Solution>

### Partie 3 : Améliorations

1. **Ajouter une animation de tirage** : lorsqu'une nouvelle carte est piochée, elle apparaît avec un effet de flip.

<Solution>

```css
@keyframes flip {
	from {
		transform: rotateY(0deg);
		opacity: 0;
	}
	to {
		transform: rotateY(360deg);
		opacity: 1;
	}
}

.carte.nouvelle {
	animation: flip 0.5s ease;
}
```

```javascript
// Dans afficherMain(), ajouter après la création de carteDiv:
if (carte.nouvelle) {
	carteDiv.classList.add('nouvelle');
	setTimeout(() => carteDiv.classList.remove('nouvelle'), 500);
}
```

</Solution>

1. **Système de multiplicateurs** : ajouter des cartes spéciales qui multiplient le score.

<Solution>

```javascript
// Dans calculerScore(), ajouter:
let multiplicateur = 1;
// Vérifier si main contient des cartes "multi"
this.#hand.forEach((carte) => {
	if (carte.multiplicateur) {
		multiplicateur *= carte.multiplicateur;
	}
});
return { score: score * multiplicateur, combo, main };
```

</Solution>

1. **Choix du thème** : permettre aux joueurs de choisir les couleurs des cartes.

<Solution>

```html
<input type="color" id="couleurFond" value="#ffffff" />
<input type="color" id="couleurBordure" value="#333333" />
```

```javascript
document.querySelector('#couleurFond').addEventListener('input', (e) => {
	document.documentElement.style.setProperty('--couleur-fond', e.target.value);
});
```

```css
:root {
	--couleur-fond: #ffffff;
	--couleur-bordure: #333333;
}

.carte {
	background: var(--couleur-fond);
	border-color: var(--couleur-bordure);
}
```

</Solution>
```-->
