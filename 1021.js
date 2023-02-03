//SEM DUVIDA O PIOR CODIGO QUE JA FIZ NA VIDA KKKKKKKK, MTO FEIO. TENTAREI MELHORAR, MAS AO MENOS É FUNCIONAL POR ENQUANTO.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var valorEntrada = parseFloat(lines.shift());

var notas100 = 0;
var notas50 = 0;
var notas20 = 0;
var notas10 = 0;
var notas5 = 0;
var notas2 = 0;

var moedas1 = 0;
var moedas50 = 0;
var moedas25 = 0;
var moedas10 = 0;
var moedas05 = 0;
var moedas01 = 0;

notas(valorEntrada);

function notas(valor) {
   for (let i = 0; valor >= 100; i++) {
      valor = valor - 100;
      notas100++;
   }

   for (let i = 0; valor >= 50; i++) {
      valor = valor - 50;
      notas50++;
   }

   for (let i = 0; valor >= 20; i++) {
      valor = valor - 20;
      notas20++;
   }

   for (let i = 0; valor >= 10; i++) {
      valor = valor - 10;
      notas10++;
   }

   for (let i = 0; valor >= 5; i++) {
      valor = valor - 5;
      notas5++;
   }

   for (let i = 0; valor >= 2; i++) {
      valor = valor - 2;
      notas2++;
   }

   valorEntrada = valor;
}

console.log(
   `NOTAS:\n${notas100} nota(s) de R$ 100.00\n${notas50} nota(s) de R$ 50.00\n${notas20} nota(s) de R$ 20.00\n${notas10} nota(s) de R$ 10.00\n${notas5} nota(s) de R$ 5.00\n${notas2} nota(s) de R$ 2.00`
);

function moedas(valor) {
   for (let i = 0; valor.toFixed(2) >= 1.0; i++) {
      valor = valor - 1.0;
      moedas1++;
   }

   for (let i = 0; valor.toFixed(2) >= 0.5; i++) {
      valor = valor - 0.5;
      moedas50++;
   }

   for (let i = 0; valor.toFixed(2) >= 0.25; i++) {
      valor = valor - 0.25;
      moedas25++;
   }

   for (let i = 0; valor.toFixed(2) >= 0.1; i++) {
      valor = valor - 0.1;
      moedas10++;
   }

   for (let i = 0; valor.toFixed(2) >= 0.05; i++) {
      valor = valor - 0.05;
      moedas05++;
   }

   for (let i = 0; valor.toFixed(2) >= 0.01; i++) {
      valor = valor - 0.01;
      moedas01++;
   }

   valorEntrada = valor;
}

moedas(valorEntrada);

console.log(
   `MOEDAS:\n${moedas1} moeda(s) de R$ 1.00\n${moedas50} moeda(s) de R$ 0.50\n${moedas25} moeda(s) de R$ 0.25\n${moedas10} moeda(s) de R$ 0.10\n${moedas05} moeda(s) de R$ 0.05\n${moedas01} moeda(s) de R$ 0.01`
);
