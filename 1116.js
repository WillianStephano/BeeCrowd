var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var qtnCasos = lines.shift();

for (let i = 0; i < qtnCasos; i++) {
   const numeros = lines[i].split(" ");

   if (numeros[1] == 0) {
      console.log("divisao impossivel");
   } else {
      var resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
      console.log(resultado.toFixed(1));
   }
}
