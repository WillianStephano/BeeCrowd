//Codigo feio do cacete

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var valorEntrada = lines.shift();

const valorInicial = valorEntrada;

var notas100 = 0;
var notas50 = 0;
var notas20 = 0;
var notas10 = 0;
var notas5 = 0;
var notas2 = 0;
var notas1 = 0;

for (let i = 0; valorEntrada >= 100; i++) {
   valorEntrada = valorEntrada - 100;
   notas100++;
}

for (let i = 0; valorEntrada >= 50; i++) {
   valorEntrada = valorEntrada - 50;
   notas50++;
}

for (let i = 0; valorEntrada >= 20; i++) {
   valorEntrada = valorEntrada - 20;
   notas20++;
}

for (let i = 0; valorEntrada >= 10; i++) {
   valorEntrada = valorEntrada - 10;
   notas10++;
}

for (let i = 0; valorEntrada >= 5; i++) {
   valorEntrada = valorEntrada - 5;
   notas5++;
}

for (let i = 0; valorEntrada >= 2; i++) {
   valorEntrada = valorEntrada - 2;
   notas2++;
}

for (let i = 0; valorEntrada >= 1; i++) {
   valorEntrada = valorEntrada - 1;
   notas1++;
}

console.log(
   `${valorInicial}\n${notas100} nota(s) de R$ 100,00\n${notas50} nota(s) de R$ 50,00\n${notas20} nota(s) de R$ 20,00\n${notas10} nota(s) de R$ 10,00\n${notas5} nota(s) de R$ 5,00\n${notas2} nota(s) de R$ 2,00\n${notas1} nota(s) de R$ 1,00`
);
