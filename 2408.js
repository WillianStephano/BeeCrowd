var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var entrada = lines.shift().split(" ");

function sortfunction(a, b) {
   return a - b;
}

entrada.sort(sortfunction);

console.log(entrada[1]);
