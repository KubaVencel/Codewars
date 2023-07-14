/*

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(input, markers) {
  // Split the input string into lines
  const lines = input.split('\n');

  // Iterate through each line
  const modifiedLines = lines.map(line => {
    // Iterate through each comment marker
    for (let marker of markers) {
      // Find the index of the comment marker in the line
      const markerIndex = line.indexOf(marker);

      // If the marker is found, remove the text following it
      if (markerIndex !== -1) {
        line = line.substring(0, markerIndex);
      }
    }

    // Remove trailing whitespace from the line
    line = line.trim();

    return line;
  });

  // Join the modified lines back together with the newline character
  const result = modifiedLines.join('\n');

  return result;
}

