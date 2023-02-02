var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var salario = parseFloat(lines.shift());

var reajustePorcentagem = 0;

function reajuste() {
   if (salario >= 0 && salario <= 400.0) {
      reajustePorcentagem = 15;

   } else if (salario >= 400.01 && salario <= 800.0) {
      reajustePorcentagem = 12;

   } else if (salario >= 800.01 && salario <= 1200.0) {
      reajustePorcentagem = 10;

   } else if (salario >= 1200.01 && salario <= 2000.0) {
      reajustePorcentagem = 7;

   } else {
      reajustePorcentagem = 4;
   }
}

reajuste();

var reajusteValor = parseFloat((reajustePorcentagem / 100) * salario);
let salarioFinal = reajusteValor + salario

console.log(`Novo salario: ${salarioFinal.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajusteValor.toFixed(2)}`);
console.log(`Em percentual: ${reajustePorcentagem} %`);
