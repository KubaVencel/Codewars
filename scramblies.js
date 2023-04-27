/*

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(strToBeChecked, strToCheckFor) {
  let numLetters = {}

  for (const letter of strToCheckFor) {
    if (numLetters[letter]) numLetters[letter]++
    else numLetters[letter] = 1
  }

  for (const letter of strToBeChecked) {
    if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--
  }

  for (const key in numLetters) {
    if (numLetters[key] !== 0) return false
  }

  // Only reaches this far if all good
  return true
}
