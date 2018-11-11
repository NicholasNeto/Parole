
var board =
[
 
  ["M","I","D","A","A"],
  ["O","L","O","M","A"],
  ["L","E","D","O","C"],
  ["E","R","O","M","A"],
  ["V","I","D","A","V"]

];

var data = "MOLE PALAVRAS VIDA  NOITE AMOR VACA CADEIRA PROGRAMAÇÃO MEDO ";

function Search(board, data) {

  this.readBoardLineRight = function(){
    for(line in board) {
      let word = ""

      for(let eachLetter = 0; eachLetter < board[line].length; eachLetter++) {
        word += board[line][eachLetter]

        if(word.length >= 3) {
          if (data.search(word + " ") != -1) {
            return word
          }
        }
      }
    }
  }

  this.readBoardLineLeft = function(board, data) {

    for(line in board) {
      let word = ""

      for(let eachLetter = board[line].length - 1; eachLetter >= 0; eachLetter--) {
        word += board[line][eachLetter]

        if(word.length >= 3) {
          if (data.search(word + " ") != -1) {
            return word
          }
        }
      }
    }
  }

  this.readBoardLineDown = function(){
    for(posicao in board) {
      let word = ""
      for(linha in board){

          word += board[linha][posicao]

          if(word.length >= 3) {
            if (data.search(word + " ") != -1) {
              return word
            }
          }
      }
    }
  }


  this.readBoardLineTop = function(){
    for(posicao in board) {
      let word = ""

      for(var linha = board[posicao].length -1; linha >= 0 ; linha--){
        word += board[linha][posicao]

        if(word.length >= 3) {
          if (data.search(word + " ") != -1) {
            return word
          }
        }
      }
    }
  }
}
var search = new Search(board, data)
console.log(search.readBoardLineRight(board, data))
console.log(search.readBoardLineLeft(board, data))
console.log(search.readBoardLineDown(board, data))
console.log(search.readBoardLineTop(board, data))

module.exports = { Search }
