var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var pares = 0;

for (let i = 0; i <= lines.length; i++) {
   const numero = parseInt(lines[i]);

   if (numero % 2 == 0) {
      pares++;
   }
}
console.log(`${pares} valores pares`);
