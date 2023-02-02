var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const qtnMercados = lines.shift();
var compare = [];

for (let i = 0; i < qtnMercados; i++) {
   const infoProduto = lines.shift().split(" ");

   var valorProduto = parseFloat(infoProduto[0]);
   var pesoProduto = parseFloat(infoProduto[1].trim());

   if (pesoProduto != 1000) {
      valorProduto = (valorProduto * 1000) / pesoProduto;
   }

   compare.push(valorProduto.toFixed(2));
}

var maisBarato = Math.min(...compare);

console.log(maisBarato.toFixed(2));
