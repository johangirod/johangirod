class Puissance4 {
	winner = false;
	currentPlayer = 'A';
	constructor() {
		this.grid = Array.from({ length: 7 }, () => Array.from({ length: 7 }, () => undefined));
	}

	getCurrentPlayer() {
		return this.currentPlayer;
	}

	play(column) {
		if (this.grid[this.grid.length - 1][column] !== undefined) {
			return false;
		}
		const row = this.grid.findIndex((row) => row[column] === undefined);
		console.log(row, this.grid);
		this.grid[row][column] = this.currentPlayer;
		this.currentPlayer = this.currentPlayer === 'A' ? 'B' : 'A';

		this.#checkWin(row, column);
	}

	isWin() {
		return this.winner;
	}

	#checkWin(row, column) {
		if (this.winner) {
			return;
		}
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
				if (this.grid[y]?.[x] !== this.currentPlayer) {
					break;
				}
				count++;
			}
			for (let i = 1; i < 4; i++) {
				const x = column - i * dx;
				const y = row - i * dy;
				if (this.grid[y]?.[x] !== this.currentPlayer) {
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

const a = new Puissance4();
a.play(0);
a.play(1);
a.play(0);
a.play(1);
a.play(0);
a.play(1);
a.play(0);
a.play(1);
a.play(1);
a.play(5);
console.table(a.grid);
