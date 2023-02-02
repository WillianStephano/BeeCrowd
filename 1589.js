var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const qtnCasos = lines.shift();

for (let i = 0; i < qtnCasos; i++) {
   var cabos = lines.shift().split(" ");
   var cabo1 = cabos[0];
   var cabo2 = cabos[1];
   var resultado = parseInt(cabo1) + parseInt(cabo2);
   console.log(resultado);
}
