class TTTBoard {
	constructor(config = {
		board: {
			"A": { "1": "", "2": "", "3": "" },
			"B": { "1": "", "2": "", "3": "" },
			"C": { "1": "", "2": "", "3": "" }
		},
		isFinished: false,
		turn: 'X'
	}) {
		this.config = config;
	}
	move(row, column) {
		if (!["A", "B", "C"].includes(row)) return null
		if (!["1", "2", "3"].includes(column)) return null

		let winningMoves = ["123", "456", "789", "147", "258", "369", "159", "357"]

		this.config.board[row][column] = this.config.turn
		this.config.turn = (this.config.turn == 'X' ? 'O': 'X')
		return [row, column]
	}
	AImove() {
		let emptySpots = [];
		for (i in this.config.board) for (j in i) if (this.config.board[i][j] == '') emptySpots.push(`${i}|${j}`);
		let randomMove = emptySpots[Math.random()(emptySpots.length)].split('|');
		return this.move(randomMove[0], randomMove[1]);
	}
	outputBoard() {
		return this.config
	}
	displayBoard() { }
	writeBoard() { 

	}
	isFinished() {
		return this.config.isFinished
	}
}

module.exports = TTTBoard;

/*
X | O | X
--+---+--
O | X | O
--+---+--
X | O | X
*/