var expect =require ("chai").expect
const { beforeEach } = require("mocha")
const Inventory = require ('./inventory')
 
beforeEach (function(){
it('should add 3 items to the array', ()=>{
    let cart =new Inventory()
    cart.addNewItem ('Comb')
    cart.addNewItem ('Brush')
    cart.addNewItem ('Blowdryer')
})
    expect(cart.addNewItem('Shampoo')).to
})