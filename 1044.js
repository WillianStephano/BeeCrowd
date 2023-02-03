var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var numeros = lines.shift().split(" ");

if (numeros[0] % numeros[1] == 0 || numeros[1] % numeros[0] == 0) {
   console.log("Sao Multiplos");
} else {
   console.log("Nao sao Multiplos");
}
