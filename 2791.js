var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift().split(" ");

for (let i = 0; i < entrada.length; i++) {
   const elemento = entrada[i];
   if (elemento == 1) {
      console.log((i += 1));
   }
}
