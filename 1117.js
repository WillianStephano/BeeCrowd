var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var n1 = 0;
var cont = 0;
for (let i = 0; i < lines.length; i++) {
   var nota = parseFloat(lines[i]);

   if (nota <= 10 && nota >= 0 && cont <= 2) {
      cont++;
      n1 += nota;

      if (cont == 2) {
         var media = n1 / 2;
         console.log(`media = ${media.toFixed(2)}`);
         break
      }
   } else {
      console.log("nota invalida");
   }
}
