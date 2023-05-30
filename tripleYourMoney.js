/*
 
You've found yourself a magic box, which seems to break the laws of physics. You notice that if you put some money in it, it seems to spit out more money than was put in. Free money right?

In time you notice the following facts:

    If you start with N dollars, using the box twice yields exactly 3*N dollars
    You never seem to get any fractional dollar amounts
    The box consistently gives the same amount out, if the amount put in is the same
    The more money you put in, the more money you get out

Note: "using the box twice" means using it once, and then using it again with all of the money the box gave you.

The four above mentioned facts can be succinctly stated as follows: f is a function mapping between non-negative integers such that f(f(n)) = 3*n and f(n+1) > f(n) for all n

Your task is to define the function f, such that it predicts the number of dollars produced by the box when n dollars are put in it.(i.e. f(n) gives how many dollars the box gives when used on n once, not twice.

A Note of tests:

    Input 0 <= N < 10000000
    The actual output for any given input is NOT validated directly. As long as your function satisfies the above specifications, you should pass the tests

Credits:

The source from where this kata was heavily inspired from is mentioned in this comment which will be hidden till you solve this Kata. Please do remember to check out the source once you have solve the Kata!

*/

function f(n) {
  const p = Math.pow(3, Math.floor(Math.log(n) / Math.log(3)));
  if (n < 2 * p) return n + p;
  else return 3 * (n - p);
}

