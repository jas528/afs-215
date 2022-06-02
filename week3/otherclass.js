const User = require('./class')

const user1 = new User (32)


console.log (user1.greeting())

const user2 = new User (7)


console.log (user2.greeting())

const user3 = new User (6)


console.log (user3.greeting())

const user4= new User (21)


console.log (user4.greeting())

const usererror = new User ("Please enter number!")


console.log (usererror.greeting())

