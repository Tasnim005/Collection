const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Object Literals"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
let x

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address:{
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['Music', 'sports']
}
console.log(person)

x = person.name
// x= person['age']
x=  person.address.state
x = person.hobbies[0]

// Modify key-value pairs 
person.name = 'Jane Doe'
person.isAdmin = false
person.hasChildren = true

delete person.age

// Create a function

person.greet = function(){
    console.log(`Hello, my name is ${this.name}`)
}

person.greet()

x = person

console.log(x)