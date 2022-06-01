const User = require('./user')

const user1 = new User ("Joe Black",32,1,2)

console.log (user1)
console.log (user1.greeting())
console.log (user1.adding())
console.log (user1.subtract())
console.log (user1.multiply())
console.log (user1.divide())
console.log (user1.string())

const user2 = new User ("Mary Black",32,3,4)

console.log (user2)
console.log (user2.greeting())
console.log (user2.adding())
console.log (user2.subtract())
console.log (user2.multiply())
console.log (user2.divide())
console.log (user2.string())