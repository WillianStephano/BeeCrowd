var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var qtnNumeros = 0;
var soma = 0;

for (var i = 0; i < lines.length; i++) {
   var numero = parseInt(lines[i]);
   if (numero > 0) {
      soma += numero;
      qtnNumeros++;
   } else {
      break;
   }
}
console.log((soma / qtnNumeros).toFixed(2));
