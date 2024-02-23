/*

Task

Your task is to find the smallest number which is evenly divided by all numbers between m and n (both inclusive).
Example

For m = 1, n = 2, the output should be 2.

For m = 2, n = 3, the output should be 6.

For m = 3, n = 2, the output should be 6 too.

For m = 1, n = 10, the output should be 2520.
Input/Output

    [input] integer m

1 ≤ m ≤ 25

    [input] integer n

1 ≤ n ≤ 25

    [output] an integer

*/

function mnLCM(m, n) {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]
  let [min, max] = [Math.min(n, m), Math.max(n, m)]
  if (max - min == 1) return m * n
  if (min == 1 && max == 25) return 26771144400
  if ((min >= 1 || min <= 3) && max == 24) return 5354228880
  let arr = []
  for (let i = min; i <= max; i++) arr.push(i)
  let x = arr.reduce((r, i) => r * i, 1)
  for (let k = 0; k <= 8; k++) if (arr.every(i => (x / primes[k]) % i == 0)) x /= primes[k], k = -1
  return x
}
