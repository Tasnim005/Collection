console.log('hello from node.js')

const Person = require('./person')
const person1 = new Person('John Doe', 30)

person1.greeting()


// console.log(person)
// console.log(person.name)


// ***Module Wrapper Function***
// (function(exports, require, module, __filename, __dirname){

// })

console.log(__dirname, __filename)