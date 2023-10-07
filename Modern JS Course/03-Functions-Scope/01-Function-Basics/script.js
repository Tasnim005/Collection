const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Function Basics"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
function sayHello(){
    console.log('Hello world')
}

sayHello()

// Argument Vs Parameter
// Parameters are placeholders or variables declared in the function's definition
// Arguments are the actual values or expressions that are passed to a function when it is called

function add(num1, num2){  //num1 and num2 are parameters
    console.log(num1 + num2)  
}

add(5,10)
// 5 and 10 are arguments because they are the actual values that are passed to the function when it is called.

function subtract(num1, num2){
    return num1-num2
}

const result = subtract(50,10)
console.log(result )