
function Board(sizeOfBoard) {

  this.createBoard = function(sizeOfBoard){
    let board = []

    for(let contador = 0; contador <= sizeOfBoard - 1; contador++){
       let temp = Array(sizeOfBoard)
       board.push(temp)
    }
    return board
  }

  this.makeLatter = function() {
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letter.charAt(Math.floor(Math.random() * letter.length));
  }

  this.createBoardWithLetter = function(){
    let board = this.createBoard(sizeOfBoard)

    for(let linha = 0; linha < board.length; linha++) {
      for(let posicao = 0; posicao < board[linha].length; posicao++){
        board[linha][posicao] = this.makeLatter()
      }
    }
    return board
  }
}

module.exports = {Board}
