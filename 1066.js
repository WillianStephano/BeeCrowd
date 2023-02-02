var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var impares = 0;
var pares = 0;
var positivo = 0;
var negativo = 0;

for (let i = 0; i < 5; i++) {
   var numero = parseInt(lines.shift());

   if (numero % 2 == 0) {
      pares++;
   } else {
      impares++;
   }

   if (numero > 0) {
      positivo++;
   } else if (numero < 0) {
      negativo++;
   }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
