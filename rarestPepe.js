/*

The pepe market is on the verge of collapse. In a last ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the Internet in order to identify the rarest, which are worth more. Since this would be tedious to do by hand, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a list of pepes (pepes), returns the rarest pepe in the list. If two or more pepes are equally rare, return a list of these pepes, sorted in alphabetical order. Also, if the rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare pepe, so your function should return 'No rare pepes!'.

More info on rare pepes here.

*/

function findRarestPepe(pepes) {

  let res = []
    , counts = pepes.reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {})
    , values = Object.keys(counts).map(key => counts[key])
    , min = Math.min(...values);

  if (min >= 5 || min === Math.max(...values))
    return 'No rare pepes!';

  for (let key in counts)
    if (counts[key] === min)
      res.push(key);

  return res.length === 1 ? res.pop() : res.sort();

}
