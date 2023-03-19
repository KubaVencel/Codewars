/*
 
You have to write a function that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (or strings of length 1, depending on the language) and returns a boolean indicating whether the king is in check.

The array will include 64 squares which can contain the following characters :

    '♔' for the black King;
    '♛' for a white Queen;
    '♝' for a white Bishop;
    '♞' for a white Knight;
    '♜' for a white Rook;
    '♟' for a white Pawn;
    ' ' (a space) if there is no piece on that square.

Note : these are actually inverted-color chess Unicode characters because the codewars dark theme makes the white appear black and vice versa. Use the characters shown above.

There will always be exactly one king, which is the black king, whereas all the other pieces are white.
The board is oriented from Black's perspective.
Remember that pawns can only move and take forward.
Also be careful with the pieces' lines of sight ;-) .

The input will always be valid, no need to validate it. To help you visualize the position, tests will print a chessboard to show you the problematic cases. Looking like this :

|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♜ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♔ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|

*/

const KING = '♔', S = 8;
const TOME = {
  '♛': { propagate: S, moves: [[1, 1], [1, -1], [-1, 1], [-1, -1], [0, 1], [0, -1], [-1, 0], [1, 0]] },
  '♝': { propagate: S, moves: [[1, 1], [1, -1], [-1, 1], [-1, -1]] },
  '♜': { propagate: S, moves: [[0, 1], [0, -1], [-1, 0], [1, 0]] },
  '♞': { propagate: 1, moves: [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2],] },
  '♟': { propagate: 1, moves: [[1, 1], [1, -1]] },
};

function kingIsInCheck(bd) {
  const isValid = (p, x, y, i) => 0 <= x && x < S && 0 <= y && y < S && i < p.propagate;
  const kingInLine = (p, a, b) => p.moves.some(([dx, dy]) => {
    for (let i = 0, x = a + dx, y = b + dy; isValid(p, x, y, i); i++, x += dx, y += dy) {
      if (bd[x][y] == KING) return true;
      if (bd[x][y] != ' ') return false;
    }
  });
  return bd.some((r, a) => r.some((c, b, _, p = TOME[c]) => p && kingInLine(p, a, b)));
}


