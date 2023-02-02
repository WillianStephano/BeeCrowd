var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var positivos = 0;
for (let i = 0; i < 6; i++) {
   const numero = parseInt(lines.shift());

   if (numero > 0) {
      positivos++;
   }
}

console.log(`${positivos} valores positivos`);
