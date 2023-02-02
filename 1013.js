var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let entrada = lines.shift().split(" ");

var A = parseInt(entrada[0]);
var B = parseInt(entrada[1]);
var C = parseInt(entrada[2]);

let maiorAB = parseInt((A + B + Math.abs(A - B)) / 2);
let resultado = parseInt((maiorAB + C + Math.abs(maiorAB - C)) / 2);

console.log(`${resultado} eh o maior`);
