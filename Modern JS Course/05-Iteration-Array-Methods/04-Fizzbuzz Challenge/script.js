const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Fizzbuzz Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Challenge
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('Fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i)
    }
}

// While loop
let j=1
while(j<=100){
    if (j % 15 === 0) {
        console.log('Fizzbuzz');
    } else if (j % 3 === 0) {
        console.log('Fizz');
    } else if (j % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(j)
    }
    j++
}