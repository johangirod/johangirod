class Puissance4 {
	winner = false;

	constructor() {
		this.grid = Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => null));
		this.currentPlayer = 'A';
	}

	getCurrentPlayer() {
		return this.currentPlayer;
	}

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

	isWin() {
		return this.winner;
	}

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
}
