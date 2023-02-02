var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const qtnRegistros = lines.shift();

var distancia = 0;

for (let i = 0; i < qtnRegistros; i++) {
   intervalo = lines.shift().split(" ");
   distancia = distancia + intervalo[0] * intervalo[1];
}
console.log(distancia);
