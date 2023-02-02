var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift();

for (let i = 1; i <= 10; i++) {
   console.log(`${i} x ${entrada} = ${i * entrada}`);
}
