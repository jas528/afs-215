const calculator=require("../calculator") 
const expect = require("chai").expect;

it("calling calculator ", function () {
//  true equal to false can count as a failing or passing result.
calculator()
  });
it("adding 22+30",function () {
    expect(calculator("add",22,30)).to.equal(52);
//     return "";
   });

   it("subtract 21-31",function () {
    expect(calculator("subtract",21,31)).to.equal(-10);
//     return "";
   });
   
   it("division 1/1",function () {
    expect(calculator("division",1,1)).to.equal(1);
      });

     it("multiplication 1*1",function () {
      expect(calculator("multiplication",1,1)).to.equal(1);
    });

    it("If num 1 and num2 is not an number it will be an error",function () {
      expect(calculator("subtract",2,"31")).to.equal("Try again using a number!");
    });