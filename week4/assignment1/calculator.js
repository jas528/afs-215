//Create one failing test,one passing test XX
//use TDD process create a function that act as a calculator for addition, subtraction, division, and multiplication.
//Finally, an error message should be returned if the argument provided is not valid.
// it('Expect added to equal 4', function() {
// expect(2 + 2).has.to.equal(4)
// })

const { type } = require("mocha/lib/utils");

// how to set up function line 14
function myCalculator(arg, num1, num2) {
  //my calucalator function
  if (typeof num1== "number"&& typeof num2== "number"){

  if (arg === "add") {
    // adding = ()=> {
    return num1 + num2; // return this.num11 + this num 11
  }

  if (arg === "subtract") {
    // subtract = ()=> {
    return num1 - num2; // return this.num 88 - this num 44
  }

  if (arg === "division") {
    return num1 / num2;
  }

  if (arg === "multiplication") {
    return num1 * num2;
    // may not need else statement
  }}
else{
  return"Try again using a number!"
}

}
module.exports= myCalculator