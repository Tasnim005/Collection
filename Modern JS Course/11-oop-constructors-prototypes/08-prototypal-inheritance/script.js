// Constructor function for a basic object
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of the Animal constructor
Animal.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

// Creating an instance of Animal
const dog = new Animal("Buddy");
console.log(dog)

// Calling the method inherited from the prototype
dog.sayHello(); // Outputs: Hello, my name is Buddy
