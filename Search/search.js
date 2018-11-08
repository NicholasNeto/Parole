
var board =
[
  ["A","L","E","G","R","I","A","M"],
  ["A","M","O","R","R","O","M","A"],
  ["A","M","O","R","R","O","M","A"]
];

var data = "AMOR ALEGRIA PALAVRAS NOITE CADEIRA PROGRAMAÇÃO";

var readBoard = function(board, data) {

  let word = ""

    for(line in board) {

      for(let eachLetter = 0; eachLetter < board[line].length; eachLetter++) {

        word += board[line][eachLetter]

        if(word.length >= 3) {

          var result = data.match(word)

          if(result == null ){
            return "Isso não se tornara uma palavra"
          }

          console.log('preste atenção aqui', data.search(word + " "))

          if (data.search(word + " ")   === -1) {
            console.log("ok EU NÃO TENHO UMA PALAVRA MAS VOU CONTINUAR BUSCANDO")
          } else {
            return word
          }
        }
      }
    }
  }

console.log(readBoard(board, data))

          //
          // console.log("palavra até aqgora", word)
          // console.log("resultado da paravra de 3 letras", result)
