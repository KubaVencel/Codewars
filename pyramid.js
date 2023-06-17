/*

Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s

*/

function pyramid(n) {
  const result = [];
  // Iterate from 0 to n-1 to create each row
  for (let i = 0; i < n; i++) {
    // Create a new array for the current row
    const row = new Array(i + 1).fill(1);
    // Fill the row array with 1s

    // Add the row to the result array
    result.push(row);
  }

  // Return the result array containing all the rows of the pyramid
  return result;
}
