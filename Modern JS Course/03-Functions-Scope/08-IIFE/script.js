const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "IIFE (Immediately Invoked Function Expressions)"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// IIFE-Immediately Invoked Function Expressions
// const user = 'John'

(function () {
    const user = 'John'
    console.log(user)

    const hello = () => console.log('Hello from the IIFE')
    hello();
})();

(function (name) {
    console.log('Hello ' + name)
})('Tasnim');