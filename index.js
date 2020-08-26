// add solution here
function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments) {
var array=[];
  for (let i = 0; i < 4; i++) {
      array.push(`${arrayOfMusicians.shift()} plays ${arrayOfInstruments.shift()}`);
  }
return array;
}
