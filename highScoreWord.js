/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x) {
  const words = x.split(' ');
  let max = 0,
    result = '';
  for (let word = 0; word < words.length; word++) {
    let str = words[word],
      value = 0;
    for (let char = 0; char < str.length; char++) {
      value += (str.charCodeAt(char) - 96);
    }
    if (value > max) {
      max = value;
      result = str;
    }
  }
  return result;
}
