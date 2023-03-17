/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/
function count(string) {
  const arr = string.split("");
  let result = {};
  if (string === "") return result;
  for (let char = 0; char < arr.length; char++) {
    if (result[arr[char]] >= 1) result[arr[char]] += 1
    else result[arr[char]] = 1
  }
  return result
}
