var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

lines.forEach((element) => {
   teste();
});

function teste() {
   var par = lines.shift().split(" ");
   par = par.sort(ordemCrescente);

   var soma = "";
   var total = 0;

   for (let i = 0; i < 1; i++) {
      var numeroInicial = parseInt(par[i]);

      while (numeroInicial <= par[1]) {
         soma = soma.concat(numeroInicial, " ");
         total += numeroInicial;
         numeroInicial++;
      }
   }
   console.log(`${soma}Sum=${total}`);
}

function ordemCrescente(a, b) {
   return a - b;
}
