
var board =
[

  ["A","V","E","G","R","I","A","M","M"],
  ["O","M","A","F","P","A","L","A","A"],
  ["O","M","A","F","P","A","L","A","A"],
  ["P","A","L","A", "V","R","A","S"],
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
}

var search = new Search(board, data)
console.log(search.readBoardLineRight(board, data))


module.exports = { Search }
