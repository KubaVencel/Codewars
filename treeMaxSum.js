/*

You are given a binary tree. Implement the method maxSum which returns the maximal sum of a route from root to leaf. For example, given the following tree:

    17
   /  \
  3   -10
 /    /  \
2    16   1
         /
        13

The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal sum.

Return 0 if the tree is empty.

Please note that you are not to find the best possible route in the tree, but the best possible route from root to leaf, e.g. for the following tree, you cannot skip the leaves and return 15: the expected answer is 5 + 4 + -60 = -51

        5
      /   \
    4       10
  /   \     /
-80  -60  -90

The class TreeNode is available for you:

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

This kata is part of fun with trees series:

    Fun with trees: max sum
    Fun with trees: array to tree
    Fun with trees: is perfect

*/

function maxSum(root) {
  if (!root) return 0

  let { value, left, right } = root

  if (!right) {
    return value + maxSum(left)
  }

  if (!left) {
    return value + maxSum(right)
  }

  return value + Math.max(maxSum(left), maxSum(right))
}
