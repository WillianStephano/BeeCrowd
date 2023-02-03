var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var numeroEntrada = lines.shift();

for (let i = 1; i <= numeroEntrada; i++) {
   if (i % 2 == 0) {
      let resultado = Math.pow(i, 2);
      console.log(`${i}^2 = ${resultado}`);
   }
}
