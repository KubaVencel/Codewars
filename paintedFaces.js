/*

Task

You are given a big cube, made up of several little cubes. You paint the outside of the big cube and are now supposed to find out how many of the little cubes have zero faces painted, one face painted, two faces painted, etc.

Write a function which accepts two parameters:

    length: the side length of the big cube (in little cubes), 0 <= length <= 50
    n: the number of faces painted, 0 <= n <= 7

You have to figure out how many of the little cubes have n faces painted.
Example

paintedFaces(4,3)

=> result: 8  // Only the vertices of the big cube will have three faces painted

If n > 3 then return 0 as it is not possible for a painted cube to have more than 3 sides painted (unless s == 1, in that case it will have 6 faces painted).

*/

function paintedFaces(s, n) {

  if (s === 0) return 0;
  if (s === 1) return Number(n === 6);

  if (n === 3) return 8;
  if (n === 2) return (s - 2) * 12;
  if (n === 1) return (s - 2) ** 2 * 6;  
  if (n === 0) return (s - 2) ** 3;

  return 0;
  
}
