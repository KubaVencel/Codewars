/*

Description:

In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

Example:

    You take an empty jar for your juice
    Whenever the jar is empty, the concentrations are always 0
    Now you add 200 units of apple juice
    And then you add 200 units of banana juice
    Now the concentration of apple juice is 0.5 (50%)
    Then you pour out 200 units
    The concentration of apple juice is still 50%
    Then you add 200 units of apple juice again
    Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.

*/

function Jar() {
  this.amounts = {};
  this.total = 0;
}

Jar.prototype.add = function(amount, type) {
  if (this.amounts[type] == null) this.amounts[type] = 0;
  this.amounts[type] += amount;
  this.total += amount;
};

Jar.prototype.pourOut = function(amount) {
  for (var v in this.amounts) this.amounts[v] -= amount * this.getConcentration(v);
  this.total -= amount;
};

Jar.prototype.getTotalAmount = function() { return this.total; };

Jar.prototype.getConcentration = function(type) {
  var conc = this.amounts[type] / this.total;
  return conc > 0 ? conc : 0;
}
