const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Arrow Function"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// function add(a,b){
//     return a+b
// }

// Arrow Function
const add = (a, b) => {
    return a + b
}

// Implicit Return
const subtract = (a,b)=> a-b

// Can leave off parenthesis with a single parameter
const double = a => a*2

// Return an object
const createObj = ()=>(
    {name: 'Brad'}
)

const numbers = [1,2,3,4,5]
numbers.forEach(function(n){
    console.log(n)
})

numbers.forEach((n)=> console.log(n))

console.log(add(1, 2))
console.log(subtract(10, 2))
console.log(double(10))
console.log(createObj())