var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var positivos = 0;
var soma = 0;
for (let i = 0; i < 6; i++) {
   const numero = parseFloat(lines.shift());

   if (numero > 0) {
      positivos++;
      soma = soma + numero;
   }
}
soma = soma / positivos;

console.log(`${positivos} valores positivos`);
console.log(`${soma.toFixed(1)} `);
