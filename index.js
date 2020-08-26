// add solution here
function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments) {
var array=[];
  for (let i = 0; i < 4; i++) {
      array.push(`${arrayOfMusicians.shift()} plays ${arrayOfInstruments.shift()}`);
  }
return array;
}

function johnLennonFacts(arrayofJohnLennonFacts) {
/* Use a while loop to loop over the facts array and add `"!!!"` to the end of
every fact. */
var updatedArray = [];
let length = arrayofJohnLennonFacts.length;
 while (length > 0) {
  updatedArray.push(`${arrayofJohnLennonFacts.shift()}!!!`)
   --length;
 }
// Return an array of strings with exclamation points.
return updatedArray;
}