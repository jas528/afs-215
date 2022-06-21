//use the TDD to develope js class
//Add an item of any data type to the array.
//Call the array.
//Remove specific items from the array.
//Search the array for a specific item. If the item exists, return true(boolean). If not, provide an error message.
//Refactor your code to implement beforeEach to make your code DRY. Also implement at least one case of before, after and afterEach to show its functionality. This could be as simple as a console message, or something more complex if you prefer. //Make sure to comment out your original code as you refactor in order to show your development process.


var expect =require ("chai").expect
const { beforeEach } = require("mocha")
const Inventory = require ('./inventory')
 
afterEach(()=>{
console.log('This test has ended')
})
let cart;
beforeEach (function(){//beforeEach method

    cart =new Inventory()
    cart.addNewItem ('Combs')
    cart.addNewItem ('Brushes')
    cart.addNewItem ('Blowdryers')
   
})

before(()=>{
    console.log ('Testing will Begins')
})

after(()=>{
    console.log ('Testing will End')
})
it('should add 3 items to the array', ()=>{   

expect(cart.addNewItem('Shampoo')).to.deep.equals(['Combs','Brushes','Blowdryers','Shampoo'])

})

it('should......',() =>{

})