/*
 
Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
Examples:

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)

*/


function numberOfPairs(gloves) {
  let counter = 0,          // Counter to keep track of the number of pairs found
    pairs = {};          // Object to store the count of each glove color

  // Loop through the array of gloves
  for (let color = 0; color < gloves.length; color++) {
    pairs[gloves[color]] = 0;   // Initialize the count of each color to 0
  }

  // Loop through the array of gloves again
  for (let color = 0; color < gloves.length; color++) {
    pairs[gloves[color]]++;     // Increment the count of each color

    // Check if a pair of gloves (count = 2) is found
    if (pairs[gloves[color]] === 2) {
      counter++;                // Increment the counter for each pair found
      pairs[gloves[color]] = 0; // Reset the count to 0 for that color to find additional pairs
    }
  }

  return counter;  // Return the total number of pairs found
}
