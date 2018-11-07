
var board =
[
  ["A","M","O","R","R","O","M","A"],
  ["A","L","E","G","R","I","A","M"]
];

console.log(board)

var readBoard = function(board) {
  console.log(board)
  let word = ""

  console.log(word)

    for(line in board) {

      console.log('line: ', board[line])

      for(let eachLetter = 0; eachLetter < 4; eachLetter++) {
        word += board[line][eachLetter]
        console.log('cada letra', word)
      }
    }
    return word
}

console.log(readBoard(board))
