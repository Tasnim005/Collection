const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "If Statements"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
if (true) {
    console.log('This is true');

}

if (false) {
    console.log('This is not true'); //This line of code won't run because it's false
}

const x = 10
const y = 5

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else{
    console.log(`${x} is not equal to ${y}`)
}

if(x!==y){
    // const z =20
    // let z =20
    var z =20
    console.log('${z} is 20');
}

console.log(z); //This won't work with const z and let z

// Shorthand If
if (x >= y) console.log(`${x} is greater than or equal to ${y}`),
    console.log('This is true');
    
else console.log('This is false');
