const person = {
  firstName: 'John',
  lastName: 'Doe',

  get fullName(){
    return `${this.firstName} ${this.lastName}`
  },

  set fullName(value){
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]
  }
}

console.log(person)

// getter => access properties
console.log(person.fullName) //if we didn't use 'get' keyword we would have to use it as a method instead of property

// setter => change (mutate) properties
person.fullName = 'Jane Doe'

console.log(person)
