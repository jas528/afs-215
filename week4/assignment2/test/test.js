const Conditional=require("../conditional") 
const expect = require("chai").expect;

it("calling conditional test", function () {
//  true equal to false can count as a failing or passing result.
const message = new Conditional()
  });
   it('Return "1" when passed 1', function () {
    expect(new Conditional(1).greeting()).to.equal("1");
     return "";
   });

  
  it('Return "2" when passed 2', function () {
   expect(new Conditional(2).greeting()).to.equal("2");
    return "";
  });

  it('Return "Good Morning" when passed a 3', function () {
    expect(new Conditional(3).greeting()).to.equal("Good Morning");
     return "";
   });
   
   it('Return "Good Afternoon" when passed a 7', function () {
    expect(new Conditional(7).greeting()).to.equal("Good Afternoon");
     return "";
   });
   
   it('Return "Good Morning" when passed a multiple of 3', function () {
    expect(new Conditional(9).greeting()).to.equal("Good Morning");
     return "";
   });
  
   it('Return "Good Afternoon" when passed a multiple of 7', function () {
    expect(new Conditional(49).greeting()).to.equal("Good Afternoon");
     return "";
   });

   it('Return "Good Evening" when passed a multiple of 3, 7', function () {
    expect(new Conditional(21).greeting()).to.equal("Good Evening");
     return "";
   });
   it('If any data type other than a number is passed return an error message', function () {
    expect(new Conditional('hi').greeting()).to.equal("Please enter a number!!!");
     return "";
   });
   