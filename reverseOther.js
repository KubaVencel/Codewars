/*

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

*/

function reverse(str) {
  str = str.split(" ");
  let result = [];
  for (let word = 0; word < str.length; word++) {
    if ((word + 1) % 2 === 0) {
      let reversed = str[word].split("").reverse().join("")
      result.push(reversed.trim())
    } else result.push(str[word].trim())
  }
  result = result.join(" ").trim()
  return result
}



