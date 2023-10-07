const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Arrays"];

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

// Array Literals
const numbers = [10, 35, 12, 100, 12]

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange', 'mango')

x = numbers[0] + numbers[3]
x = `My favourite fruit is ${fruits[2]}`

x = numbers.length

fruits[2] = 'pear'

fruits.length = 3

fruits[fruits.length] = 'blueberry'
fruits[fruits.length] = 'peach'

x = fruits

console.log(x)