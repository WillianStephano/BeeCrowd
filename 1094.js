//Cheio de gambiarra kkkkkkkkkkkkkkkkkkk

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const qtnTestes = lines.shift();
var coelho = 0;
var sapo = 0;
var rato = 0;

for (let i = 0; i < qtnTestes; i++) {
   const elemento = lines.shift().split(" ");

   if (elemento[1] == "C\r" || elemento[1] == "C") {
      coelho = parseInt(elemento[0]) + coelho;
   } else if (elemento[1] == "R\r" || elemento[1] == "R") {
      rato = parseInt(elemento[0]) + rato;
   } else if (elemento[1] == "S\r" || elemento[1] == "S") {
      sapo = parseInt(elemento[0]) + sapo;
   }
}

var total = coelho + rato + sapo;

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);

console.log(`Percentual de coelhos: ${((coelho / total) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((rato / total) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapo / total) * 100).toFixed(2)} %`);
