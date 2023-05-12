/*
 
Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

You may assume that the input will always be valid.
Examples

lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

Remarks
JavaScript, C++, R, PureScript, COBOL

Since these languages don't have native arbitrarily large integers, your arguments are going to be strings representing non-negative integers instead.

*/

const lastDigit = (a, b) => {
  if (b == 0) return 1;

  const lastDigitBase = a.slice(-1);
  const lastDigitsPower = b.slice(-2);
  const power = +lastDigitsPower % 4 || 4;

  return (+lastDigitBase) ** power % 10;
}
