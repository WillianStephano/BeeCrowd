var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var numero = parseInt(lines.shift());
var impares = 0;
var i = numero;

while (impares < 6) {
   if (i % 2 !== 0) {
      console.log(i);
      impares++;
   }
   i++;
}
