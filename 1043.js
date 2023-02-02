var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const entrada = lines.shift().split(" ");

var A = parseFloat(entrada[0]);
var B = parseFloat(entrada[1]);
var C = parseFloat(entrada[2]);

var ehTriangulo = false;

if (A + B > C && A + C > B && B + C > A) {
   ehTriangulo = true;
}
if (ehTriangulo == true) {
   var perimetro = A + B + C;
   console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
   var area = ((A + B) * C) / 2;
   console.log(`Area = ${area.toFixed(1)}`);
}
