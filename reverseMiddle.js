/*

Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

*/

function reverseMiddle(array) {
  let half = Math.floor(array.length / 2)
  if(array.length % 2 == 0) return [array[half], array[half - 1]]
  else return [array[half + 1], array[half], array[half - 1]]
}
