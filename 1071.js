var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var menorValor = Math.min(...lines) +1;
var maiorValor = Math.max(...lines);
var total = 0;

while (menorValor < maiorValor) {
   if (menorValor % 2 != 0) {
      total = menorValor + total;
   }

   menorValor++;
}
console.log(total);
