var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var subfilo = lines[0].trim();
var classe = lines[1].trim();
var caracteristica = lines[2].trim();

if (subfilo == "vertebrado") {
   if (classe == "ave") {
      if (caracteristica == "carnivoro") {
         console.log("aguia");
      } else {
         console.log("pomba");
      }
   } else {
      if (caracteristica == "onivoro") {
         console.log("homem");
      } else {
         console.log("vaca");
      }
   }
} else {
   if (classe == "inseto") {
      if (caracteristica == "hematofago") {
         console.log("pulga");
      } else {
         console.log("lagarta");
      }
   } else {
      if (caracteristica == "onivoro") {
         console.log("minhoca");
      } else {
         console.log("sanguessuga");
      }
   }
}
