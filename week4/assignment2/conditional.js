// Use Mocha and Chai and the TDD process to develop tests that achieve the following:

// Return "1" when passed 1
// Return "2" when passed 2
// Return "Good Morning" when passed a 3
// Return "Good Afternoon" when passed a 7
// Return "Good Morning" when passed a 3 or a multiple thereof
// Return "Good Afternoon" when passed a 7 or a multiple thereof
// Return "Good Evening" when passed a multiple of 3 and 7
// If the number is neither a multiple of 3 or 7 return that number as a string
// If any data type other than a number is passed return an error message

//tdd method
//tdd method
//tdd method

module.exports= class User {
  constructor( num1= 0){
  
  this.num1 =num1
  
  }
 
   greeting =()=>{
      if(this.num1 % 3 ==0 && this.num1 % 7 ==0 ) {
      return "Good Evening"   
      } else if(this.num1 % 7 ==0) {
          return "Good Afternoon"
      }else if(this.num1 % 3 ==0) {
          return "Good Morning"
      }   
      else{
          if(typeof this.num1 == "number"){
              return this.num1.toString()
          }
          else{
           return "Please enter a number!!!" 
          }

      }
   }
  }
 