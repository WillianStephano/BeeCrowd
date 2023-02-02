var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const valor = lines.shift();

for (let i = 2; i < 1000; i++) {
   if (i % valor == 2) {
      console.log(i);
   }
}
