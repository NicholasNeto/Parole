
var board =
[
  ["A","M","O","R","R","O","M","A","F"],
  ["A","V","E","G","R","I","A","M","M"],
  ["O","M","A","F","P","A","L","A","A"],
  ["P","A","L","A", "V","R","A","S"],
  ["O","M","A","F","P","A","L","A","A"],
  ["A","M","O","R","R","O","M","A","F"],
  ["O","M","A","F","P","A","L","A","A"]

];

var data = "AMOR ALEGRIA PALAVRAS NOITE CADEIRA PROGRAMAÇÃO";

var readBoard = function(board, data) {

    for(line in board) {
      let word = ""
      console.log("---------- outra linha ----------")
      for(let eachLetter = 0; eachLetter < board[line].length; eachLetter++) {

        word += board[line][eachLetter]

        if(word.length >= 3) {

          var result = data.match(word)

          if(result == null ){
            console.log("OK EU NÃO TENHO UMA PALAVRA MAS VOU CONTINUAR BUSCANDO")
          }

          console.log('preste atenção aqui', data.search(word + " "))

          if (data.search(word + " ")   === -1) {
            console.log("OK EU NÃO TENHO UMA PALAVRA MAS VOU CONTINUAR BUSCANDO")
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
