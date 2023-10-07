const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's work with", "Numbers"];

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

// const num =5
const num = new Number(5.4227)
const num2 = new Number(5)


x= num.toString()

// We can't directly use length property on numbers
x = num.toString.length

x = num.toFixed(2)
//  Using toFixed() will turn the number into  a string upto decimal places

x = num.toPrecision(2)

x = num2.toExponential(2)

x = num2.toLocaleString('en-US')
// x = num2.toLocaleString('ar-Eg')

x = num.valueOf()

// Properties of Number Object

x = Number.MAX_VALUE
x = Number.MIN_VALUE

console.log(x)