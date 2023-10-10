const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Block Scope"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const x =100

if(true){
    const y = 200
    console.log(x+y)
}

// console.log(x+y) //This won't work

for(let i=0; i<=10; i++){
    console.log(i)
}

if(true){
    const a = 200
    let b =300
    var c =400
}

// console.log(a) //error
// console.log(b) //error because let is block scoped
console.log(c) // works because var acts like a global scope when it comes to loops and if statements

function run(){
    var d =100
    console.log(d)
}
run() 

// console.log(d) //This will result an error since var is fuction scoped i.e. we can't access a var variable that is inside a function from outside of a function

const foo =1
var bar = 2 // When we create a global variable with 'var', it gets added to window object. But this doesn't happen when it comes to 'let' and 'const'

console.log(window)