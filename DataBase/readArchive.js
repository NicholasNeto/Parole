var fs = require('fs');


function Read(){

  var content = ""

  this.leitura = function() {
    return content = fs.readFileSync(file, 'utf8');
  }
}

var read = new Read()
console.log(read.leitura())

module.exports = { Read}


// fs.readFile(file, 'utf-8', function(err, data){
//   main(data)
//   var res = data.match(/d/)
//   console.log('aqui : ', res === null ?  false : true)
// })

// console.log(content)
