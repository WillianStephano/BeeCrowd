var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var qtnCasos = lines.shift();
var resposta = "";

for (let i = 0; i < qtnCasos; i++) {
   const numero = parseInt(lines[i]);

   if (numero == 0) {
      resposta = "NULL";
   } else if (numero % 2 == 0) {
      resposta = "EVEN";

      if (numero < 0) {
         resposta += " NEGATIVE";
      } else {
         resposta += " POSITIVE";
      }
   } else {
      resposta = "ODD";
      if (numero < 0) {
         resposta += " NEGATIVE";
      } else {
         resposta += " POSITIVE";
      }
   }

   console.log(resposta);
}
