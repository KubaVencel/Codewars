/*
 
Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

{                             {
  { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
  { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
  { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
}                             }
 

The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

*/

function separateLiquids(glass) {

  if (!glass.length)
    return glass;

  var res = []
    , width = glass[0].length
    , flat = glass
      .reduce((a, b) => a.concat(b), [])
      .filter(a => a)
      .sort((a, b) => 'HWAO'.indexOf(b) - 'HWAO'.indexOf(a));

  while (flat.length > 0)
    res.push(flat.splice(0, width));

  while (res.length < glass.length)
    res.push([]);

  return res;

}
