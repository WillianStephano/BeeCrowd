var input = require("fs").readFileSync("stdin", "utf8");
lines = input.split("\n");

var qtnJogada = lines.shift();
function teste() {
   if (qtnJogada != 0) {
      var colecaoRodadas = lines.shift().split(" ");

      var vitoriasMaria = 0;
      var vitoriasJoao = 0;

      for (let i = 0; i < colecaoRodadas.length; i++) {
         const rodada = colecaoRodadas[i];

         if (rodada == 0) {
            vitoriasMaria++;
         } else {
            vitoriasJoao++;
         }
      }
      console.log(
         `Mary won ${vitoriasMaria} times and John won ${vitoriasJoao} times`
      );
   }
   qtnJogada = lines.shift();
}

while (qtnJogada != undefined) {
   teste();
}
