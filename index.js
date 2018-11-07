let Board = require('./Board/board').Board

var dataEntry = process.argv[2]
var sizeOfBoard = parseInt(dataEntry)

var board = new Board(sizeOfBoard)


console.log(board.createBoardWithLetter())
