/*

Description:

When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

    Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
    Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
Example

"#FF9933" --> {r: 255, g: 153, b: 51}

*/

function hexStringToRGB(hexString) {
  // Remove the '#' character from the beginning of the hex string
  hexString = hexString.slice(1);

  // Split the hex string into an array of two-character substrings
  const hexArr = hexString.match(/.{1,2}/g),

    // Convert the hexadecimal values to decimal values for red, green, and blue
    red = parseInt(hexArr[0], 16),
    green = parseInt(hexArr[1], 16),
    blue = parseInt(hexArr[2], 16),

    // Create an object to hold the RGB values
    rgb = {
      r: red,
      g: green,
      b: blue
    };

  // Return the RGB object
  return rgb;
}
