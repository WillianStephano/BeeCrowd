var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = parseInt(lines.shift());
var dentro = 0;
var fora = 0;

for (let i = 0; i < entrada; i++) {
   const numero = parseInt(lines.shift());

   if (numero >= 10 && numero <= 20) {
      dentro++;
   } else {
      fora++;
   }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);
