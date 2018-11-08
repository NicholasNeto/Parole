
var board =
[
  ["A","M","O","R","R","O","M","A"],
  ["A","L","E","G","R","I","A","M"]
];

var data = "Amor Alegria Palavras Noite Cadeira Desistir Programação"

var readBoard = function(board) {

  let word = ""

    for(line in board) {

      for(let eachLetter = 0; eachLetter < board[line].lenght; eachLetter++) {
        word += board[line][eachLetter]

        if(word.lenght >= 3) {
          var result = data.match(word)
        }
      }
    }
    return word
}

console.log(readBoard(board))
