//TDD method
//spec.js is testing ground
var expect =require ("chai").expect
const { beforeEach } = require("mocha")
const Todolist = require ('./todolist.js')// changed

let list;
beforeEach (function(){//beforeEach method

    list =new Todolist()
    list.addNewItem ('Email Andee')
    list.addNewItem ('Mow Lawn')
    list.addNewItem ('Pick up Groceries')
    list.addNewItem ('Walk Dog')
   
})
 
it('should add 1 items to the array', ()=>{   

    expect(list.addNewItem('Water Plants')).to.deep.equals(['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog','Water Plants'])
    
    })
    
    it('should add 4 items to the array', ()=>{   
        list.addNewItem (33)
        list.addNewItem (true)
        list.addNewItem (false)
        list.addNewItem ({
            name:"Jasmine"
        })
       
        expect(list.callItem()).to.deep.equals(['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog',33,true,false,{
            name:"Jasmine"
        }])
        
        })
    it('delete first item......',() =>{
        expect(list.removeItem('Email Andee')).to.deep.equals(['Mow Lawn','Pick up Groceries','Walk Dog'])
    
    })
    it('delete last item......',() =>{
        list.addNewItem('Water Plants') 
    expect(list.removeItem('Water Plants')).to.deep.equals(['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog'])
    })
    it('delete specific item......',() =>{
        expect(list.removeItem('Pick up Groceries')).to.deep.equals(['Email Andee','Mow Lawn','Walk Dog'])
    })

    it('should called the list......',() =>{
        expect(list.callItem()).to.deep.equals(['Email Andee','Mow Lawn','Pick up Groceries','Walk Dog'])
    }) 


    
    
//add multiple items
