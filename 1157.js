var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift();
let i = 0;

while (i <= entrada) {
   if (entrada % i == 0) {
      console.log(i);
   }

   i++;
}
