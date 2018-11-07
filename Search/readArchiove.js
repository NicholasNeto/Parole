
var fs = require('fs');
let database = process.argv[2]

function leitura(file){

  fs.readFile(file, 'utf-8', function(err, data){
    let palavras = data
    console.log('palavras', palavras)
    return palavras
  })
}

console.log(leitura(database))

console.log('tipo ', typeof(database))
