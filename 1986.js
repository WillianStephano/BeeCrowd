var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var qtnLetras = lines.shift();
var str = "";
let letras = lines.shift().split(" ");

letras.forEach((letra) => {
   hex2a(letra);
});

function hex2a(hexadecimal) {
   var hex = hexadecimal.toString();

   for (let i = 0; i < hex.length; i += 2) {
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
   }
   return str;
}

console.log(str);
