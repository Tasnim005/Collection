const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Math Object"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
console.log(Math)

let x

x = Math.sqrt(9)

x = Math.abs(-5)

x = Math.round(4.5)
x = Math.floor(4.9)
x = Math.ceil(4.1)

x = Math.pow(2, 6)
// 2 to the power of 6

// To get the largest or smallest number from a given set 
x = Math.min(12, 4, 8, 6)
x = Math.max(12, 4, 15, 6)

// To get a random number
x = Math.random()
// This will give us decimal number. But we want to get numbers greater than 1

x = Math.random() * 10

// This will give us real numbers between 1 to 9. To get a real number above 10,
x = Math.random() * 10 + 1

// To get a random number (whole)
x = Math.floor(Math.random() * 100 + 1)


console.log(x)