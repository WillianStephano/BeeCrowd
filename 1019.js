var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var segundosEntrada = lines.shift();

let horas = Math.floor(segundosEntrada / 3600);
segundosEntrada %= 3600;

let minutos = Math.floor(segundosEntrada / 60);
segundosEntrada %= 60;

console.log(`${horas}:${minutos}:${segundosEntrada}`);
