//Fim assim pq estava treinando function

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var entrada = lines.shift().split(" ");
var entradaOrdenada = entrada.sort((a, b) => b - a);

let A = parseFloat(entradaOrdenada[0]);
let B = parseFloat(entradaOrdenada[1]);
let C = parseFloat(entradaOrdenada[2]);
var triangulo = true;

function naoTriangulo(A, B, C) {
   if (A >= B + C) {
      console.log("NAO FORMA TRIANGULO");
      return (triangulo = false);
   }
}
naoTriangulo(A, B, C);

function trianguloRetangulo(A, B, C) {
   if (A ** 2 == B ** 2 + C ** 2) {
      console.log("TRIANGULO RETANGULO");
   }
}
trianguloRetangulo(A, B, C);

function trianguloObtusangulo(A, B, C) {
   if (A ** 2 > B ** 2 + C ** 2 && triangulo == true) {
      console.log("TRIANGULO OBTUSANGULO");
   }
}
trianguloObtusangulo(A, B, C);

function trianguloAcutangulo(A, B, C) {
   if (A ** 2 < B ** 2 + C ** 2) {
      console.log("TRIANGULO ACUTANGULO");
   }
}
trianguloAcutangulo(A, B, C);

if (A == B && B == C) {
   console.log("TRIANGULO EQUILATERO");
} else if (A == B || C == A || C == B) {
   console.log("TRIANGULO ISOSCELES");
}
