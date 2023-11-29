/*
 
Description:

You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, return "boring without two animals".
Examples

moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves

moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves

*/

function catMouse(map, moves) {
  const indexOfC = map.indexOf('C')
  const indexOfm = map.indexOf('m')
  if (!~indexOfC || !~indexOfm) {
    return 'boring without two animals'
  }
  const stepLength = map.indexOf(`
`) + 1

  // The Manhattan distance between two points A(x1, y1) and B(x2, y2)
  // in a grid is calculated as: (x2 - x1) + (y2 - y1)
  const step = Math.abs(indexOfC % stepLength - indexOfm % stepLength) + Math.abs(parseInt(indexOfC / stepLength) - parseInt(indexOfm / stepLength))
  return step > moves ? 'Escaped!' : 'Caught!'
}
