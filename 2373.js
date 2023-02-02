var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var qtnBandejas = parseInt(lines.shift());

var quebrados = 0;
var contador = 0;

while (qtnBandejas > contador) {
   var bandeja = lines.shift().split(" ");
   for (let i = 0; i < bandeja.length; i++) {
      const latas = parseInt(bandeja[i]);
      const copos = parseInt(bandeja[i + 1]);

      if (latas > copos) {
         quebrados += copos;
      }
   }
   contador++;
}
console.log(quebrados);
