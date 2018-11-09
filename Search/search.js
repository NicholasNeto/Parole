
var board =
[

  ["A","V","E","G","R","I","A","M","M"],
  ["O","M","A","F","P","A","L","A","A"],
  ["O","M","A","F","P","A","L","A","A"],
  ["A","V","E","G","R","R","O","M","A"],
  ["P","A","L","A", "V","R","A","S","Z"],
  ["A","M","O","R","R","O","M","A","F"],
  ["A","M","O","R","R","O","M","A","F"],
  ["O","M","A","F","P","A","L","A","A"]


];

var data = "AMOR ALEGRIA PALAVRAS NOITE CADEIRA PROGRAMAÇÃO";

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

      for(let eachLetter = board[line].length - 1; eachLetter > 0; eachLetter--) {
        word += board[line][eachLetter]

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

module.exports = { Search }
