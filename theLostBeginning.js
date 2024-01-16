/*

Given a sequence of one or more consecutive natural numbers concatenated into a string, return the smallest possible first number in the sequence.
Numbers will never be truncated.
Examples

"123" -> [1, 2, 3] -> 1
"91011" -> [9, 10, 11] -> 9
"17181920" -> [17, 18, 19, 20] -> 17
"9899100" -> [98, 99, 100] -> 98
"121122123" -> [121, 122, 123] -> 121
"1235" -> [1235] -> 1235
"101" -> [101] -> 101

Size limits

0 < length string < 140
0 < smallest number < 1 000 000 000

*/

function beginning(s) {
  for (let i = 1; i <= s.length; i++) {
    let n = Number(s.slice(0, i));  //  get number 'n' using slice and index 'i'
    let strNums = '';               // create empty string 'strNums'

    while (strNums.length < s.length) {
      strNums += String(n);  // add number 'n' to string 'str_nums'
      n += 1;                // create next consecutive number 
    } // end of while-loop

    if (strNums === s) return Number(s.slice(0, i));
  } // end of for-loop
} // end of function
