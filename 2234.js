var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

lines = lines.shift().split(" ");

var cachorroQuente = parseInt(lines[0]);
var participantes = parseInt(lines[1]);

var media = cachorroQuente / participantes;

console.log(media.toFixed(2));
