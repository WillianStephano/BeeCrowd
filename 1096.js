var i = 1;
var j = 7;

do {
   console.log(`I=${i} J=${j}`);
   j--;

   if (j == 4) {
      j = 7;
      i += 2;
   }
} while (i <= 9);
