const TTTBoard = require('../package/index')
const ttt = new TTTBoard();

ttt.move("A", "4") // This uses an ABC 123 system, ABC for rows and 123 for columns, to move simply place A2 for example, top center
// ttt.AImove() //Really is just a random move but it's cool to call it AI

let boardConfig = ttt.outputBoard() //Returns the board in it's config format, basically an object matrix
console.log(boardConfig)
// let boardImage = ttt.displayBoard() //Returns the board in a PNG format, just an image of the board
// let boardASCII = ttt.writeBoard() //Returns the board in ASCII format, so you can write it to console! 

// ttt.isFinished() //Returns true if the match has finished, to avoid making any moves