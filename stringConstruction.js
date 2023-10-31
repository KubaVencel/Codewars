/*

Task

You are given two string a an s. Starting with an empty string we can do the following two operations:

 append the given string a to the end of the current string. erase one symbol of the current string. Your task is to find the least number of operations needed to construct the given string s. Assume that all the letters from s appear in a at least once.
Example

For a = "aba", s = "abbaab", the result should be 6.

Coinstruction:

"" -> "aba" -> "ab" -> "ababa" -> "abba" -> "abbaaba" -> "abbaab".

So, the result is 6.

For a = "aba", s = "a", the result should be 3.

Coinstruction:

"" -> "aba" -> "ab" -> "a".

So, the result is 3.

For a = "aba", s = "abaa", the result should be 4.

Coinstruction:

"" -> "aba" -> "abaaba" -> "abaab" -> "abaa".

So, the result is 4.
Input/Output

    [input] string a

string to be appended. Contains only lowercase English letters.

1 <= a.length <= 20

    [input] string s

desired string containing only lowercase English letters.

1 <= s.length < 1000

    [output] an integer

minimum number of operations

*/

function stringConstructing(a, s) {
  let i = 0, ops = 0, curr = "";

  while (curr != s) {
    while (i < s.length && i < curr.length && curr[i] === s[i]) {
      i++;
    }

    if (i >= curr.length) {
      curr += a;
    } else {
      curr = curr.slice(0, i) + curr.slice(i + 1);
    }

    ops++;
  }

  return ops;
}
