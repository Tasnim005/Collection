const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Array Nesting Concat and Spread"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'rasberry']

// Nested Array
// To get an array within an existing array
// fruits.push(berries)

console.log(fruits)

// x = fruits[3][1]

const allFruits = [fruits, berries]

x = allFruits

// Using concat() method, we're gonna get a single array. We've commented out 'fruits.push(berries)' to demonstrate this.
x = fruits.concat(berries)

// Spread Operator(...) will take items from an array and combine them into a single array just like concat() method

x = [...fruits, ...berries]
// x = [...fruits, berries] //Here berries will be array

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8]
x = arr.flat()

// Static Methods on Array Object
x = Array.isArray(fruits) //True
x = Array.isArray('Hello') //False

x = Array.from('12345')
x = Array.from('Hello')

const a = 1
const b = 2
const c = 3

x = Array.of(a,b,c)
console.log(x)