/*

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1

*/

const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n) {

  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);

  for (var i = n + 1; i <= max; i++) {
    if (sortedDigits(i).every((x, j) => x === arr[j])) {
      return i;
    }
  }

  return -1;
}
