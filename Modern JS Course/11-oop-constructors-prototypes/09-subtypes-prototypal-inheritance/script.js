// Parent constructor function
function Animal(name){
  this.name = name

  // this.sayHello = function(){
  //   console.log(`Hello, my name is ${this.name}`)
  // }
}

Animal.prototype.sayHello = function(){
  console.log(`Hello, my name is ${this.name}`)
}

const testDog1 = new Animal('Bella')
console.log(testDog1)
testDog1.sayHello()

// Child Constructor Function
function Dog(name, breed){
  Animal.call(this, name)

  this.breed = breed
}


const testDog2 = new Dog('Ray', 'Golden Retriever')

console.log(testDog2)

// Set up the prototype chain: Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype)

const testDog3 = new Dog('Tom', 'Husky')
console.log(testDog3)

// Set the constructor property back to Dog
Dog.prototype.constructor = Dog

//Add a method specific to dog
Dog.prototype.bark = function(){
  console.log('Woof')
}

const myDog = new Dog('Buddy', 'Golden Retriever')
console.log(myDog)

myDog.sayHello()
myDog.bark()