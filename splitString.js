/*¨

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/
function solution(str) {
  const chars = str.split("")
  let result = [];
  if (str.length % 2 != 0) {
    chars.push("_")
  }
  for (let char = 0; i < chars.length; char += 2) {
    result.push(chars[char] + chars[char + 1])
  }
  return result
}
