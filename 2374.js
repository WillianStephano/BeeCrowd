var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const pressaoDesejada = lines.shift()
const pressaoLeitura = lines.shift()

console.log(pressaoDesejada - pressaoLeitura);