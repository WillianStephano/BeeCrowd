var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var terceiroLink = parseInt(lines.shift());

var segundoLink = terceiroLink * 2;
var primeiroLink = segundoLink * 2;

console.log(primeiroLink);
