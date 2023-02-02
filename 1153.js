var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const n = lines.shift();
var resultado = 0;

for (let index = 0; index <= n; index++) {
   resultado = n * (n - index);
   console.log(resultado);
}


