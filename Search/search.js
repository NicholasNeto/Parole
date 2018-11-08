
var board =
[
  ["A","M","O","R","R","O","M","A"],
  ["A","L","E","G","R","I","A","M"],
  ["A","L","E","G","R","I","A","M"]
];

var data = "AMOR ALEGRIA PALAVRAS NOITE CADEIRA PROGRAMAÇÃO";

var readBoard = function(board, data) {

  let word = ""

    for(line in board) {

      for(let eachLetter = 0; eachLetter < board[line].length; eachLetter++) {

        word += board[line][eachLetter]

        if(word.length >= 3) {

          var result = data.match(word)

          console.log("palavra até aqgora", word)
          console.log("resultado da paravra de 3 letras", result)

          if(result == null ){
            return "não tem uma palavra nesta linha "
          }
        }
      }
    }
    return word
}

console.log(readBoard(board, data))
