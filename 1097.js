var i = 1;
var j = 7;

while (i <= 9) {
   console.log(`I=${i} J=${j}`);
   console.log(`I=${i} J=${j - 1}`);
   console.log(`I=${i} J=${j - 2}`);

   i += 2;
   j += 2;
}
