/*

Story

You were asked to write a simple validator for a company that is planning to introduce lottery betting via text messages. The same validator will be used for multiple games: e.g. 5 out of 90, 7 out of 35, etc. (N out of M)

The text messages should contain exactly N unique numbers between 1 and M (both included), separated by a comma (,) and/or space(s). Any other character makes the bet invalid.
Your task

You receive the game type and the user's text message as input, and you need to check if the bet is valid or not. If it's valid, return the chosen numbers as a list, sorted in increasing order. If it's invalid, return None, null, nil as appropriate to your language.

Note: Leading and trailing spaces will not be tested. Tabs, newlines and other whitespaces are not tested either. Think of a classic Nokia 3310 user for reference :-)
Examples

validate_bet([5, 90], "1 2 3 4 5")       -->  [1, 2, 3, 4, 5]
validate_bet([5, 90], "5 , 3, 1  4,2")   -->  [1, 2, 3, 4, 5]
validate_bet([5, 90], "1, 2; 3, 4, 5")   -->  None / null / nil
validate_bet([5, 90], "1, 2, 3, 4")      -->  None / null / nil
validate_bet([5, 90], "1, 2, 3, 4, 95")  -->  None / null / nil

*/

function validateBet(game, text) {
  // Destructure the game array to get the values of N and range
  let [n, range] = game;

  // Extract numbers from the text using regex and convert them to numbers
  let arr = (text.match(/\d+/g) || []).map(x => +x);

  // Perform checks on the extracted numbers
  if (
    // Check for any characters other than digits, spaces, or commas
    /[^\d ,]/.test(text) ||
    // Check if the number of extracted numbers does not match N
    arr.length != n ||
    // Check if there are duplicate numbers
    new Set(arr).size != n ||
    // Check if any number falls outside the valid range
    arr.some(x => x > range || x < 1)
  ) {
    // If any of the checks fail, return null indicating an invalid bet
    return null;
  }

  // If all checks pass, sort and return the valid numbers
  return arr.sort((a, b) => a - b);
}

