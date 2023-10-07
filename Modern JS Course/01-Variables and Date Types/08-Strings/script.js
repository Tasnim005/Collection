const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's know about", "Strings"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
let x

const name = 'John'
const age = 30

// Template Literals
x = `Hello, my name is ${name} and I'm ${age} years old`

console.log(x)


// String Properties & Methods
let y
// const s = 'Hello World'
const s = new String('Hello World')

y = typeof s
y = s.length

// Access value by keys
y = s[1]

y = s.__proto__

y = s.toUpperCase()
y = s.toLowerCase()

y = s.charAt(0)
y = s.indexOf('d')

y = s.substring(0, 4)
y = s.substring(7)

y = s.slice(-11, -6)

y = s.replace('World', 'John')

y = s.includes('ell')

y = s.valueOf()
// Returs the primitive value

y = s.split('')

console.log(y)

// Trim()
let z
z= '        Hello world '
z= z.trim()
// Trim gets rid of the white spaces at the beginning and ending of a string

console.log(z)

