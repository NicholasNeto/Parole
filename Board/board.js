
function Board(tamanho) {

  this.createBoard = function(tamanho){
    var board = []

    for(var contador = 0; contador <= tamanho - 1; contador++){
       var temp = Array(tamanho)
       board.push(temp)
    }
    return board
  }

  this.makeLatter = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  this.createBoardWithLetter = function(){

    var board = this.createBoard(tamanho)

    for(var linha = 0; linha < board.length; linha++) {

      for(var posicao = 0; posicao < board[linha].length; posicao++){
        board[linha][posicao] = this.makeLatter()
      }
    }
    return board
  }

}

module.exports = {Board}
