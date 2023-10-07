const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Destructuring & Nesting<"];

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

const firstName = 'John'
const lastName = 'Doe'
const age = 30

// const person = {
//     firstName: firstName,
//     lastName: lastName,
//     age:age
// }

// Alternative
const person = {
    firstName,
    lastName,
    age,
}

console.log(person)

// Destructuring

const todo = {
    id:1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
}

const {id, title, user: {name}} = todo

console.log(id, title, name)

// Destructure Arrays
const numbers = [23, 67, 44, 40, 89]

// const [first, second] = numbers

// Rest Operator
const [first, second, ...rest] = numbers

console.log(first, second, rest)