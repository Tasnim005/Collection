const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Nested Scope"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
function first(){
    const x =100

    function second(){
        const y = 200
        console.log(x+y) //We can access parent variable but not child variable
    }

    // console.log(y) //This will cause an error because we can't access child variable from a parent variable though the other way round is possible.
    second()
}

first()

// This is very similar with blocks

if(true){
    const x = 100

    if(x===10){
        const y =200
        console.log(x+y)
    }

    // console.log(y) //error
}