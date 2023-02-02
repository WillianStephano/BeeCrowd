var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const notaEntrada = lines.shift();

if (notaEntrada >= 1 && notaEntrada <= 35) {
   console.log("D");
} else if (notaEntrada >= 36 && notaEntrada <= 60) {
   console.log("C");
} else if (notaEntrada >= 31 && notaEntrada <= 85) {
   console.log("B");
} else if (notaEntrada >= 86 && notaEntrada <= 100) {
   console.log("A");
} else {
   console.log("E");
}
