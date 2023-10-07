const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's solve", "Number Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};


const typed = new Typed(element, options);

// DOM
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const button = document.getElementById('generate')

const sumContainer = document.getElementById('sum')
const diffContainer = document.getElementById('difference')
const productContainer = document.getElementById('product')
const quotientContainer = document.getElementById('quotient')
const remainderContainer = document.getElementById('remainder')

// Lesson starts from here
button.addEventListener('click', run);

function updateCalculations() {
    const x = Math.floor(Math.random() * 100 + 1)
    const y = Math.abs(Math.floor(Math.random() * 100 - 50))

    const sumOutput = `${x.toString()} + ${y.toString()} = ${(x + y).toString()}`
    const differenceOutput = `${x.toString()} - ${y.toString()} = ${(x - y).toString()}`
    const productOutput = `${x.toString()} * ${y.toString()} = ${(x * y).toString()}`
    const quotientOutput = `${x.toString()} / ${y.toString()} = ${(x / y).toString()}`
    const remainderOutput = `${x.toString()} % ${y.toString()} = ${(x % y).toString()}`

    num1.innerText = x
    num2.innerText = y

    sumContainer.innerText = sumOutput
    diffContainer.innerText = differenceOutput
    productContainer.innerText = productOutput
    quotientContainer.innerText = quotientOutput
    remainderContainer.innerText = remainderOutput
}


function run() {
    updateCalculations();
    button.innerText = 'Regenerate';
}

// Initial setup when the page loads
updateCalculations();


// Alternative
/*
const y = Math.abs(Math.floor(Math.random()*50 +1))

const sum = x+y
const sumOutput = `${x} - ${y}= ${sum}`
 
const diff = x-y
const differenceOutput = `${x} + ${y}= ${diff}`
 
const product = x*y
const productOutput = `${x} * ${y}= ${[product]}`
 
const quotient = x/y
const quotientOutput = `${x} / ${y}= ${quotient}`
 
const remainder = x%y
const remainderOutput = `${x} % ${y}= ${remainder}`


console.log(x)
console.log(y)
console.log(sumOutput)
console.log(differenceOutput)
console.log(productOutput)
console.log(quotientOutput)
console.log(remainderOutput)
*/



