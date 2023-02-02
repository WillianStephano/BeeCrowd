var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const qtnCasos = lines.shift();

var entrada = lines;

for (let i = 0; i < qtnCasos; i++) {
   var array = entrada[i].split(" ");
   var n1 = parseFloat(array[0]) * 2;
   var n2 = parseFloat(array[1]) * 3;
   var n3 = parseFloat(array[2]) * 5;

   var media = (n1 + n2 + n3) / 10;

   console.log(media.toFixed(1));
}
