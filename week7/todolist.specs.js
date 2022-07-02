//TDD method
//spec.js is testing ground
var expect =require ("chai").expect
const { beforeEach } = require("mocha")
const Todolist = require ('./todolist.js')// changed
 
it('should add 3 items to the array', ()=>{   

    expect(cart.addNewItem('Water Plants')).to.deep.equals(['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog'])
    
    })
    
    it('should called the list......',() =>{
        expect(cart.callItem()).to.deep.equals(['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog'])
    
    })
    it('should return true if found......',() =>{
        cart.addNewItem('Water Plants') 
    expect(cart.searchItem('Water Plants')).to.deep.equals(true)
    })
    it('should return false if not found......',() =>{
        expect(cart.searchItem('Water Plants')).to.deep.equals(false)
    })

    constructor(){
    //has to be an array        
        this.list=['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog'];//added items to the list
    }
    addNewItem=(part)=>{ //this is the add list
        this.list.push(part) //push adds to the array
        return this.list
    }




afterEach(()=>{
console.log('This test has ended')
})
let cart;
beforeEach (function(){//beforeEach method

    cart =new Inventory()
    cart.addNewItem ('Email Andee')
    cart.addNewItem ('Mow Lawn')
    cart.addNewItem ('Pick up Groceries')
    cart.addNewItem ('Walk Dog')
})

before(()=>{
    console.log ('Individual Testing will Begin')
})

after(()=>{
    console.log ('End of Individual Testing')
})


it('should remove an item......',() =>{
    expect(cart.removeItem('Walk dog')).to.deep.equals(['Email Andee','Mow Lawn','Pick up Grocies'])
})

    //removeItem=(part)=>{
        //var found=this.list.findIndex(item=> item==part)
       // if (found>=0){
        //this.list=this.list.filter((item,index)=>index!==found)
        //return this.list
       // }else{
            //return"not found"
        //}
    //}
    searchItem=(part)=>{
        var found=this.list.find(item=> item==part)
        return found?true:false
    }
    callItem=()=>{ //call item fuction
        console.log(this.list)
        return this.list
    }
}// this is the add list lines 3-11
//add multiple items
