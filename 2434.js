var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const primeiraLinha = lines.shift().split(" ");
var qtnMovimentacoes = primeiraLinha[0];
var saldoInicial = parseInt(primeiraLinha[1]);
var teste = [];

for (let i = 0; i < qtnMovimentacoes; i++) {
   const movimentacao = parseInt(lines.shift());

   saldoInicial = movimentacao + saldoInicial;

   teste.push(saldoInicial);
}
console.log(Math.min(...teste));
