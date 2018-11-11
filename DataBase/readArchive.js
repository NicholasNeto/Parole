var fs = require('fs');


function Read(){

  this.leitura = function() {
    var content = fs.readFileSync("database.txt", 'utf8');
    var listaPlavras = content.split('\n')
    return listaPlavras
  }
}

module.exports = { Read}
