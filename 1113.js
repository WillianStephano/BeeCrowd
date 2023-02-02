var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var entrada = [...lines];

do {
   var linha = entrada.shift().split(" ");
   var n1 = parseInt(linha[0]);
   var n2 = parseInt(linha[1]);

   if (n1 > n2) {
      console.log("Decrescente");
   } else if (n1 < n2) {
      console.log("Crescente");
   }
} while (n1 != n2);
