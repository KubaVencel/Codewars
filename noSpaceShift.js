/*

Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

*/

function getOrder(input) {
  const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"],
    lowerCaseMenu = menu.map(item => item.toLowerCase()),
    menuOrder = {
      Burger: 1,
      Fries: 2,
      Chicken: 3,
      Pizza: 4,
      Sandwich: 5,
      Onionrings: 6,
      Milkshake: 7,
      Coke: 8,
    }
  input = input.split("")
  let word = "",
    result = "";
  for (let char = 0; char < input.length; char++) {
    word = word + input[char]
    if (lowerCaseMenu.includes(word)) {
      result = result + menu[lowerCaseMenu.indexOf(word)] + " "
      word = ""
    }
  }
  result = result.split(" ")
    .sort((a, b) => menuOrder[a] - menuOrder[b])
    .join(" ")
    .trim()
  return result;
}

