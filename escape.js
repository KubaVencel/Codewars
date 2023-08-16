/*

Description:

Yesterday, You, the Great Inquisitor, drank too much and blabbed accidentally to your lovers clergymen about the King's sins, which He told you in His confession. To escape the punishment, you stole the gold of the indulgence from the temple and sailed away from the Kingdom on your private ship. Unfortunately, you were caught in a storm and got shipwrecked on a desert island. Survive!
Task

You are given the array(island) of strings of equal length with numbers(food), your starting coordinates on this island and the number, that represents how many steps you can make. Your task is to find the maximum amount of food that you can collect.
Rules

To survive, you must collect as much food as possible, that was washed ashore to the island. You start from given coordinates and you can make only horizontal and vertical steps into adjacent cells, subtracting one "point" from your steps for every movement (when the steps are zero you cannot move anymore). When you entered into a cell with a number, add this number to your collected food (the initial collected food is 0). The problem is that you took a lot of gold (represented by $) and a few provisions on your ship, so there might not too much food washed ashore. When you step into a cell with $, subtract one more point from steps (because you are very greedy and you waste time collecting the gold). Remove the food or the gold from the cell when you step into it for the first time. Return the maximum number of the food that is possible to collect.
Coordinates

    origin is in the uper left corner of the island
    X going down
    Y going right

(The coordinates system works like 2D-array indexing)
Notes

    You can step into the same cell as many as are necessary to get the best path possible;

    The length of the array is from 0 to 30;

    The given steps are from 0 to 12 (optimize your solution);

    The food is represented by the number from 0 to 9;

    You might start in a cell that already contains food or gold (collect and remove it);

    The dots are just for better visibility.

    Java: in some rare cases, your valid solution may timeout - try again, please

If you don't see the image, create the issue, please The Great Inquisitor holds the rescued barrel of beer.

*/

function searchForFood(island, coords, steps) {

  const neighs = [[0, -1], [0, 1], [-1, 0], [1, 0]]
  const X = island.length, Y = island[0].length
  const Q = [[...coords, steps, 0, {}]]
  let best = 0

  for (let [x, y, n, food, seen] of Q) {
    if (island[x][y] != '.' && !seen[[x, y]]) {
      if (island[x][y] == '$') n--;
      else food += +island[x][y]
      seen = { ...seen, [[x, y]]: 1 }
    }

    best = Math.max(food, best)

    n-- > 0 && neighs.forEach(([dx, dy]) => {
      let a = x + dx, b = y + dy;
      if (a < 0 || a >= X || b < 0 || b >= Y) return
      Q.push([a, b, n, food, seen])
    })
  }
  return best
}
