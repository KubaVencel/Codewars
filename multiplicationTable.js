/*

Description:

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/

function multiplicationTable(size) {
  const result = []; // Initialize an empty array to store the multiplication table

  // Iterate through the row numbers from 1 to size
  for (let i = 1; i <= size; i++) {
    const row = []; // Initialize an empty array for each row

    // Iterate through the column numbers from 1 to size
    for (let j = 1; j <= size; j++) {
      // Calculate the product of the current row and column numbers and push it to the row array
      row.push(i * j);
    }

    // Push the completed row array to the result array
    result.push(row);
  }

  return result; // Return the generated multiplication table
}
