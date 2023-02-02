var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift().split(" ");

var competidores = entrada[0].split(",");
var qtnFolhas = entrada[1].split(",");
var folhasAhReceber = entrada[2].split(",");

if (competidores * folhasAhReceber <= qtnFolhas) {
   console.log("S");
} else {
   console.log("N");
}
