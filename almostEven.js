/*

Description:

We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!
Example:

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]

Inputs

The input to your function will always be valid for this kata.

*/

var splitInteger = function(num, parts) {
  const result = [];

  const divisor = Math.floor(num / parts)
  const rest = num % parts;

  for (let i = 0; i < parts - rest; i++) {
    result.push(divisor);
  }

  for (let i = 0; i < rest; i++) {
    result.push(divisor + 1);
  }

  return result;
}
