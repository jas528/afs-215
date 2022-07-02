

module.exports = class Inventory{
    constructor(){
        this.list=[];//has to be an array
    }
    addNewItem=(part)=>{
        this.list.push(part)
        return this.list
    }
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