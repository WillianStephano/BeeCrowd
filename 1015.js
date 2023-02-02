var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

linha1 = lines.shift().split(" ");
linha2 = lines.shift().split(" ");

let x1 = parseFloat(linha1[0]);
let y1 = parseFloat(linha1[1]);

let x2 = parseFloat(linha2[0]);
let y2 = parseFloat(linha2[1]);

let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distancia.toFixed(4));
