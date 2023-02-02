var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var maiorNumero = Math.max.apply(null, lines);

for (let i = 0; i < lines.length; i++) {
   const numero = lines[i];

   if (maiorNumero == numero) {
      console.log(maiorNumero);
      console.log(lines.indexOf(numero) + 1);
   }
}
