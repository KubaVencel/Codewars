/*

Task:

Write a function that determines the century by the number(year) passed to it. Your function must be shorter than 75 characters. Please see the test cases below.

If you can't solve this kata, please try solving Simple Version
Note:

    Math methods ( ceil, round, floor ) disabled.
    The input values can be from 1 to 99999999.
    This kata has several solutions!

Examples:
Year 	Century
1 	1st
101 	2nd
201 	3rd
1000 	10th
1001 	11th
1101 	12th
1201 	13th
1301 	14th
2000 	20th
2001 	21st
3101 	32nd
4201 	43rd
5301 	54th
220000 	2200th
220001 	2201st
220101 	2202nd
220201 	2203rd
220301 	2204th

*/

ws = n => (n = (n + 99) / 100 | 0) + ([, 'st', 'nd', 'rd'][n % 10 * ((n %= 100) < 11 || n > 13)] || 'th')

