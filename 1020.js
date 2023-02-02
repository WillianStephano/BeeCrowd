var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var diasEntrada = lines.shift();
var anos = 0;
var meses = 0;
var dias = 0;

while (diasEntrada != 0) {
   while (diasEntrada >= 365) {
      diasEntrada = diasEntrada - 365;
      anos++;
      dias = diasEntrada;
   }

   while (diasEntrada >= 30) {
      diasEntrada = diasEntrada - 30;
      meses++;
      dias = diasEntrada;
   }
   break;
}

console.log(`${anos} anos(s)\n${meses} mes(es)\n${dias} dia(s)`);
