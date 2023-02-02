var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const tempoGasto = lines.shift()
const velMedia = lines.shift()
const autonomia = 12

let consumo = (velMedia * tempoGasto) / autonomia

console.log(`${consumo.toFixed(3)}`)

