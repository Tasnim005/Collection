// Parent constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of the Animal constructor
Animal.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// const testDog1 = new Animal('bella')
// console.log(testDog1)


// Child constructor function
function Dog(name, breed) {
  // Call the parent constructor to initialize the inherited "properties"
  Animal.call(this, name);
  // Add properties specific to Dog
  this.breed = breed;
}

// const testDog2 = new Dog('buddy', 'husky')
// console.log(testDog2)

// Further explanation
// Set up the prototype chain: Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype);

// const testDog3 = new Dog('tom', 'Golden Retriever')
// console.log(testDog3)

// Set the constructor property back to Dog
Dog.prototype.constructor = Dog;

// Add a method specific to Dog
Dog.prototype.bark = function() {
  console.log("Woof!");
};



// Creating an instance of Dog
const myDog = new Dog("Buddy", "Golden Retriever");

// Using inherited methods
myDog.sayHello(); // Outputs: Hello, my name is Buddy

// Using the method specific to Dog
myDog.bark(); // Outputs: Woof!

