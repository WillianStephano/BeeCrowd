var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift().split(" ");

let teste = [...entrada];

entrada.sort(function (a, b) {
   return a - b;
});

entrada.forEach((numero) => {
   console.log(numero);
});
console.log("");

for (let i = 0; i < teste.length; i++) {
   const numero = teste[i];
   console.log(numero);
}
