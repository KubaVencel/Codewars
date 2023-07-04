/*

The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

For example:

var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call

*/

function makeLooper(str) {
  let index = 0; // Keep track of the current index

  // Return a function that loops through the characters of the string
  return function() {
    const char = str[index]; // Get the character at the current index
    index = (index + 1) % str.length; // Increment the index and wrap around if it exceeds the string length
    return char; // Return the character
  };
}

