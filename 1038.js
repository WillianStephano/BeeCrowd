var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var entrada = lines.shift().split(" ");

var produto = parseInt(entrada[0]);
var qtnProduto = entrada[1];

var itemUm = 4.0;
var itemDois = 4.5;
var itemTres = 5.0;
var itemQuatro = 2.0;
var itemCinco = 1.5;

var resultado = 0;

switch (produto) {
   case 1:
      resultado = itemUm * qtnProduto;
      break;

   case 2:
      resultado = itemDois * qtnProduto;
      break;

   case 3:
      resultado = itemTres * qtnProduto;
      break;

   case 4:
      resultado = itemQuatro * qtnProduto;
      break;
   case 5:
      resultado = itemCinco * qtnProduto;
      break;

   default:
      break;
}
console.log(`Total: R$ ${resultado.toFixed(2)}`);
