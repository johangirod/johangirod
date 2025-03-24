class Puissance4 {
	#winner = null;

	#grid;

	constructor() {
		// On crée un tableau de 6 lignes contenant chacune un tableau de 7 cases
		// Il est initialisé à null

		// Pour atteindre la case positionnée en ligne 3 et colonne 4
		// this.#grid[3][4]
		this.#grid = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));
	}

    logBoard() {
		console.table(this.#grid);
	}

    #currentPlayer = 'A';

	getCurrentPlayer() {
		return this.#currentPlayer;
	}
    getBoard() {
        return this.#grid;
    }
    play(column) {

		// Si la colonne est pleine, on ne peut pas jouer
		if (this.#grid[0][column] || this.getWinner()) {
			return false;
		}
		// On cherche la première case vide en partant du bas
		const ligneCaseVide = this.#grid.findLastIndex((ligne) => ligne[column] === null);
		// On ajoute un jeton correspondant au joueur actuel
		this.#grid[ligneCaseVide][column] = this.#currentPlayer;
        this.#checkWin(ligneCaseVide, column);
        // On change le joueur courant
		this.#currentPlayer = this.#currentPlayer === 'A' ? 'B' : 'A';
	}

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
		// Pour chacune des direction possible (vertical, horizontal, diagonale montante, diagonale descendante)
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
}

const game = new Puissance4();
renderBoard();

function renderBoard() {
	const boardElem = document.querySelector('#board');
	if (!boardElem) {
		throw new Error("Impossible de trouver l'élément #board");
	}
    boardElem.dataset.player = game.getCurrentPlayer();

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

			const jetonJoueur = board[i][j];

			if (jetonJoueur === 'A') {
				caseDiv.classList.add('player-A');
			} else if (jetonJoueur === 'B') {
				caseDiv.classList.add('player-B');
			}

			columnDiv.appendChild(caseDiv);
		}

		// On ajoute un écouteur d'événement pour chaque colonne
		columnDiv.addEventListener('click', () => {
			game.play(j);
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

const colorA = document.querySelector('#colorA');
const colorB = document.querySelector('#colorB');

function updateColorA() {
    document.documentElement.style.setProperty('--color-player-A', colorA.value);
}
function updateColorB() {
    document.documentElement.style.setProperty('--color-player-B', colorB.value);
}

colorA.addEventListener('input',updateColorA);
colorB.addEventListener('input', updateColorB);
updateColorA();
updateColorB();