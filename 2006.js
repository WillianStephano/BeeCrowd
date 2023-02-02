var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const chaCorreto = parseInt(lines.shift());
const respostaCompetidor = lines.shift().split(" ");

var acertos = 0;

for (let i = 0; i < respostaCompetidor.length; i++) {
   const respostaAtual = respostaCompetidor[i];

   if (respostaAtual == chaCorreto) {
      acertos++;
   }
}

console.log(acertos);
