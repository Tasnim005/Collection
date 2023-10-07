const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Global Function Scope"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// window.alert('Hello')
console.log(window.innerWidth)

const x =100
console.log(x, 'in global')

function run(){
    console.log(window.innerHeight)
    console.log(x, 'in function')
}

run()

if(true){
    console.log(x, 'in block')
}

function add(){
    const x =1 //This will override line 18
    const y =50
    console.log(x+y)
}

// console.log(y)

add()