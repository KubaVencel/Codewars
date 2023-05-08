/*

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]

*/

// Return the output array, and ignore all non-op characters
function parse(data) {
  let dataArr = data.split(""),
    result = [],
    val = 0;
  for (let n = 0; n < dataArr.length; n++) {
    switch (dataArr[n]) {
      case "i":
        val = val + 1;
        break;
      case "d":
        val = val - 1;
        break;
      case "s":
        val = val ** 2;
        break;
      case "o":
        result.push(val);
        break;
    }
  }
  return result
}

