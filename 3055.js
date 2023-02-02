var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var notaProva1 = parseInt(lines.shift());
var media = parseInt(lines.shift());

let notaProva2 = 2 * media - notaProva1;

console.log(notaProva2);
