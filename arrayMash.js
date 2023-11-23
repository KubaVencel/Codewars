/*

Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

*/

function arrayMash(array1, array2) {
  let res = []
  for (let val = 0; val < array1.length; val++) {
    res.push(array1[val], array2[val])
  }
  return res
}
