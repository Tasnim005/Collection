const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Logical Assignment"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

// || -will return the first truthy value or the last value

let a = ''

// if(!a){
//     a=10
// }

// Alternatives
// a= a||10

a ||= 10
console.log(a);


// &&- will return the first falsy value or the last value
let b = 10

// if(b){
//     b=20
// }

// b = b&&20
b &&= 20

console.log(b);


// ?? - Returns the right side operand when left is null or undefined . It doesn't look for 'truthy' or 'falsy' rather only 'null' or 'undefined'

let c = false

if (c === null || c === undefined) {
    c = 20
}

c = c ?? 20
c ??= 20

console.log(c);
