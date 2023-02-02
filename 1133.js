var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var entrada = lines.sort(ordemCrescente);
var numero = 0;

for (let i = 1; i < entrada[1]; i++) {
   numero = parseInt(entrada[0]);
   numero += i;

   if (numero >= entrada[1]) {
      break;
   } else if (numero % 5 == 2 || numero % 5 == 3) {
      console.log(numero);
   }
}



function ordemCrescente(a, b) {
   return a - b;
}
