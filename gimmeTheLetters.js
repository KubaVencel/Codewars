/*

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!
Examples

"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"

Notes

    A hyphen will separate the two letters in the string.
    You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).

*/

function gimmeTheLetters(sp) {
  // Extract the first and last letters from the range
  const [start, end] = sp.split('-')
  // Convert the letters to their ASCII codes
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0)
  // Generate the string of letters
    let result = '';
    for (let i = startCode; i <= endCode; i++) {
        result += String.fromCharCode(i);
    }

    return result;
}
