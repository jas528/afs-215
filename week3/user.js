//Create a class called User. 
//Give it a constructor and give it four properties: num1, num2, name, and age.
// Provide name and age with default parameters.
//Within the class, create a function or functions that can add, subtract, multiply, and divide.


module.exports= class User {
    constructor( name= "Joe Black",age = 32,num1,num2){
    this.userName = name
    this.userAge = age
    this.num1 =num1
    this.num2=num2
   }

   adding = ()=> {
     return this.num1+ this.num2
       
   }
   subtract =()=>{
       return this.num1- this.num2
   }
   multiply = ()=>{
       return this.num1* this.num2
   }
   divide =()=>{
       return this.num1/ this.num2
   }
   greeting =()=>{
       return `Hello ${this.userName} welcome to Austin age ${this.userAge }.`
   }
   string =()=>{
       return `${this.num1}${this.num2}`

   }

}
