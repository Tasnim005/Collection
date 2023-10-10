const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "For Loops"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// for ([initialExpression]; [conditionExpression]; [incrementExpression]) 
// statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a block of code, use the "{}" syntax

for (let i = 0; i <= 10; i += 2) {
    console.log(`Number ${i}`)
}

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        console.log('7 is my lucky number');
    } else {
        console.log(`Number ${i}`)
    }
}

// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`Number ${i}`)

    for (let j = 1; j <= 10; j++) {
        console.log(`${i}* ${j} = ${i * j}`);

    }
}

// Loop through an array
const names = ['Brad', 'Sam', 'John', 'Sara', 'Tim']
for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Sara') {
        console.log('Sara is the best');
    } else {
        console.log(names[i]);
    }
}