var Board = require('./Board/board').Board

var tamanho = process.argv[2]
var tamanho = parseInt(tamanho)

var board = new Board(tamanho)
var board = board.createBoardWithLetter()

console.log(board)
