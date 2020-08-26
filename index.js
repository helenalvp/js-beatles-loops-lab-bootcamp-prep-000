// add solution here
function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments) {
  var array=[];
  for (let i = 0; i < 4; i++) {
      array.push(`${arrayOfMusicians.shift()} plays ${arrayOfInstruments.shift()}`);
  }
  return array;
}

function johnLennonFacts(arrayofJohnLennonFacts) {
  var array = [];
  let length = arrayofJohnLennonFacts.length;
  while (length > 0) {
    array.push(`${arrayofJohnLennonFacts.shift()}!!!`)
     --length;
  }
  return array;
}

function iLoveTheBeatles(number) {
// The function should create a variable that stores an empty array.

/* Implement a do-while loop inside the function that adds `"I love the
  Beatles!"` to the empty array. */
  
/* The loop should then increment the number passed in as a parameter. The
  condition of the loop should check to see that the parameter number is
  less than `15`. It should contain a number of strings that represents the
  difference between the input number and `15`. */
// Return the array with the strings `"I love the Beatles!"`.
}
