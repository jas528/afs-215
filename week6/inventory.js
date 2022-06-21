

module.exports = class Inventory{
    constructor(){
        this.list=[];//has to be an array
    }
    addNewItem=(part)=>{
        this.list.push(part)
        return this.list
    }
}// this is the add list lines 3-11