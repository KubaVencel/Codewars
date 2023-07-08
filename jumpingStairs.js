/*
 
Story
Imagine a frog sitting on the top of a staircase which has steps number of steps in it.
A frog can jump down over the staircase and at 1 single jump it can go from 1 to maxJumpLength steps down.
Task
Your task is to write a function which will calculate the total amount of all possible ways that the frog can go from top to the bottom.

Example
For staircase with steps=3 and maxJumpLength=3 a frog can jump steps like:
1-1-1 or 1-2 or 2-1 or 3. Which gives 4 possible jump ways.
And for staircase with steps=4 and maxJumpLength=3 a frog can jump steps like:
1-1-1-1 or 1-1-2 or 1-2-1 or 2-1-1 or 2-2 or 3-1 or 1-3. Which gives 7 possible jump ways.

Function type
Function will receive as parameters:
steps a number from 1 to 200 : amount of steps in a staircase.
maxJumpLength a number from 1 to 200 : top limit of how many steps a frog can jump down at 1 time.
Function should return a number - BigInt (because some results can be really big) of all possible ways the frog can go down the staircase.
All inputs will be valid. maxJumpLength can be bigger than steps but you should consider the real amount of steps passed over.

Good luck!

*/

const getNumberOfWays = (steps, maxJumpLength) => {

  let n = steps;  // Number of steps
  let ways = Array.from({ length: maxJumpLength }, (_, i) => BigInt(2 ** i));  // Array to store the number of ways to reach each step

  while (ways.length < n) {
    ways.push(ways.reduce((a, b) => a + b));  // Calculate the number of ways to reach the next step
    ways.shift();  // Remove the first element to keep the array size limited to maxJumpLength
    n--;  // Decrease the number of steps remaining
  }

  return ways[n - 1];  // Return the number of ways to reach the final step
}
