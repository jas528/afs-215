module.exports = class Todolist{
    constructor(){
        this.list=[];//has to be an array called the list
    }
    addNewItem=(part)=>{//the add list
        this.list.push(part)
        return this.list
    }

    removeItem=(part)=>{
        var found=this.list.findIndex(item=> item==part)
        if (found>=0){
        this.list=this.list.filter((item,index)=>index!==found)
        return this.list
        }else{
            return"not found"
        }
    
    }
    callItem=()=>{ //call item fuction
        console.log(this.list)
        return this.list
    }
}