const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's know about", "Operators"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

//  1)Arithmetic Operators

let x;

x = 5 + 5
x = 5 - 5
x = 5 * 5
x = 5 / 5
x = 7 % 5

console.log(x)

// Concatenation
let randomText = 'Hello' + ' ' + 'World'
console.log(randomText)

let text = 'hello'
newText = `${text} world`

console.log(newText)

//Exponent
let y 
y = 2**9
console.log(y)

// Increment 
let z
z=1
// z=z+1
z++
console.log(z)


// (2)Assignment Operator
z=10

z+=5
z-=5
z*=5
z/=5
// z%=5
z**=5
console.log(z)

// (3)Comparision operator
let p
p = 2 == '2'
p = 2 === '2' 

p = 2 != '2'
p = 2 !== '2' 

console.log(p)

let q

q=10>5
q=10<5
q=10<=5
q=10>=5

console.log(q)
