module.exports = class Todolist{
    constructor(){
        this.list=[];//has to be an array called the list
    }
    addNewItem=(part)=>{//the add list
        this.list.push(part)
        return this.list