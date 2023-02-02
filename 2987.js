var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var lines = input.split('\n');

var alfabeto = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");

for (let i = 0; i < alfabeto.length; i++) {
   const letra = alfabeto[i];
   if (letra.toLocaleUpperCase() == lines || letra == lines) {
      console.log(alfabeto.indexOf(letra) + 1);
   }
}
