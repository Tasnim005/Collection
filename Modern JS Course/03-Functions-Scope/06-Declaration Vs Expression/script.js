const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Declaration Vs Expression"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
console.log(addDollarSign(100)) //This will work since it is function declaration
// Function Declaration
function addDollarSign(value){
    return `$${value}`
}

console.log(addDollarSign(100)) //When we use a Function Declaration, we can call it beforehand. But this is not applicable for Function Expression.

//Function Expression

// console.log(addPlusSign(200)) //will cause an error
const addPlusSign = function(value){
    return `+${value}`
}

console.log(addPlusSign(200))