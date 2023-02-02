var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");


const n = parseFloat(lines.shift());

if (n >= 0 && n <= 25) {
   console.log("Intervalo [0,25]");

} else if (n > 25 && n <= 50) {
   console.log("Intervalo (25,50]");

} else if (n >= 70 && n <= 100) {
   console.log("Intervalo (75,100]");

} else {
   console.log("Fora de intervalo");

}
