var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const qtnPalavras = lines.shift();
var crl = 0;

while (crl < qtnPalavras) {
   var primeiraPalavra = lines.shift("\n");
   var palavraConvertida = [];
   for (let i = 0; i < primeiraPalavra.length; i++) {
      var letra = primeiraPalavra[i];

      if (letra == "\n") {
         palavraConvertida = palavraConvertida.pop();
      }

      if (
         (letra.charCodeAt() >= 65 && letra.charCodeAt() <= 90) ||
         (letra.charCodeAt() >= 97 && letra.charCodeAt() <= 122)
      ) {
         let letraConvertida = String.fromCharCode(letra.charCodeAt() + 3);
         palavraConvertida.push(letraConvertida);
      } else {
         palavraConvertida.push(letra);
      }
   }

   palavraConvertida = palavraConvertida.reverse();

   var qtnDeLetras = palavraConvertida.length / 2;

   if (qtnDeLetras == 4.5) {
      qtnDeLetras = 5;
   } else {
      qtnDeLetras;
   }
   qtnDeLetras = Math.trunc(qtnDeLetras);

   for (let i = qtnDeLetras; i < palavraConvertida.length; i++) {
      var letraTeste = palavraConvertida[i];

      letraTeste = String.fromCharCode(letraTeste.charCodeAt() - 1);

      if (palavraConvertida[i] !== letraTeste) {
         palavraConvertida[i] = letraTeste;
      }
   }
   console.log(palavraConvertida.join(""));
   crl++;
}
