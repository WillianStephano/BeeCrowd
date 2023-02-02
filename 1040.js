var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var notasProvas = lines.shift().split(" ");
var notaExame = parseFloat(lines.shift());

var n1 = notasProvas[0] * 2;
var n2 = notasProvas[1] * 3;
var n3 = notasProvas[2] * 4;
var n4 = notasProvas[3] * 1;

var media = (n1 + n2 + n3 + n4) / (1 + 2 + 3 + 4);

console.log(`Media: ${media.toFixed(1)}`);

if (isNaN(notaExame) == false) {
   console.log(`Aluno em exame.`);
   console.log(`Nota do exame: ${notaExame.toFixed(1)}`);

   var mediaRec = (media + notaExame) / 2;
   if (mediaRec >= 5.0) {
      console.log(`Aluno aprovado.`);
      console.log(`Media final: ${mediaRec.toFixed(1)}`);
   }
} else if (media <= 4.9) {
   console.log(`Aluno reprovado.`);
} else {
   console.log(`Aluno aprovado.`);
}
