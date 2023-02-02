var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var colocacao = parseInt(lines);

if (colocacao == 1) {
   console.log("Top 1");
} else if (colocacao <= 3) {
   console.log("Top 3");
} else if (colocacao <= 5) {
   console.log("Top 5");
} else if (colocacao <= 10) {
   console.log("Top 10");
} else if (colocacao <= 25) {
   console.log("Top 25");
} else if (colocacao <= 50) {
   console.log("Top 50");
} else {
   console.log("Top 100");
}
