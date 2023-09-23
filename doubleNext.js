/*

Description:

This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)

*/

class Class {
  static number = 1

  static getNumber() {
    const currentVal = Class.number
    Class.number *= 2
    return currentVal
  }
}
