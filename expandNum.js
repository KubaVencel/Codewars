/*

Description:
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

function expandedForm(num) {
  num = String(num);
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 0) continue;
    else result.push(num[i] + "0".repeat(num.length - i - 1))
  }
  return result.join(" + ")
}
