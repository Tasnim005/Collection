const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Object Spread Methods"];

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

// Object Literals
// const todo = {} //Creates an empty object

// Object  Constructor
const todo = new Object() //Creates an empty object


todo.id = 1
todo.name = 'Buy Books'
todo.isCompleted = true

x = todo

const person = {
    address: {
        coords: {
            lat: 41.9384,
            lng: -71.234,

        }
    }
}
x = person.address.coords.lat

const obj1 = {
    a: 1, b: 2,
}
const obj2 = {
    c: 3, d: 4,
}

// const obj3 = {obj1, obj2} //We have an object that have 2 objects nested inside it

// Using Spread Operator
const obj3 = { ...obj1, ...obj2 } //To create a new object that will have the properties of obj1 and obj2, we'll use spread operator

const obj4 = Object.assign({}, obj1, obj2) //Alternative of Spread Operator

// Arrays of Objects
const todos = [
    { id: 1, name: 'Buy Milk', },
    { id: 2, name: 'PickUp kids from school', },
    { id: 3, name: 'Take out trash', },

]

x = todos[0].name

// Object Keys- To get  all the keys in an object(key-value pairs) and put those into an array
x = Object.keys(todo)

x = Object.keys(todo).length

// Object Values- To get  all the values in an object(key-value pairs) and put those into an array
x = Object.values(todo)

// Object Entries- To get  both keys and values in an object(key-value pairs) and put those into an array
x = Object.entries(todo)

x = todo.hasOwnProperty('age')

console.log(x)