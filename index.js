let Board = require('./Board/board').Board
let Read = require('./DataBase/readArchive').Read

var dataEntry = process.argv[2]

var sizeOfBoard = parseInt(dataEntry)

var board = new Board(sizeOfBoard)
var read = new Read()



console.log(board.createBoardWithLetter())
console.log(read.leitura())
