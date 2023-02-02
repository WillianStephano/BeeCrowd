var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

/* while (lines != "") {
   const entrada = lines.shift().split(" ");

   let aumentoXp = entrada[0];
   let xpBase = entrada[1];
   let xpTotal;

   if (aumentoXp != 0) {
      xpTotal = aumentoXp * xpBase;
      console.log(xpTotal);
   }
}
 */

for (let i = 0; i < lines.length; i++) {
   const primeiraLinha = lines[i].split(" ");
   let aumentoXp = primeiraLinha[0];
   let xpBase = primeiraLinha[1];

   if (aumentoXp != 0) {
      xpTotal = aumentoXp * xpBase;
      console.log(xpTotal);
   }
}
