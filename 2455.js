var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift().split(" ");

let p1 = entrada[0];
let c1 = entrada[1];

let p2 = entrada[2];
let c2 = entrada[3];

if (p1 * c1 == p2 * c2) {
   console.log("0");
} else if (p1 * c1 > p2 * c2) {
   console.log("-1");
} else {
   console.log("1");
}
