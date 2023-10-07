const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's know about", "Type Conversions"];

const options = {
  strings: stringsToAnimate,
  typeSpeed: 50,
  backSpeed: 25, // Speed of erasing/backspacing
  backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
  showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

/* Convert String to Number*/
let amount = '100'

// Using parseInt
// amount = parseInt(amount)

// Unary Operator
// amount =+amount

// Another alternative
amount = Number(amount)

console.log(amount, typeof amount)

/* Convert Number to String*/
let score = 85

// score = score.toString()
score = String(score)

console.log(score, typeof score)


/* Convert String to decimal*/
let mark = '99.5'

// mark = parseInt(mark)
mark = parseFloat(mark)
console.log(mark, typeof mark)


/* Convert Number to Boolean*/
let num = 1

num = Boolean(num)
console.log(num, typeof num)
// 0 will be the only one with 'false'


// NaN
let randomText = 'Hello'

randomText = parseInt(randomText)
console.log(randomText, typeof randomText)

console.log(Math.sqrt(-1))
console.log(1+ NaN)
console.log(undefined + undefined)
console.log('foo'/3)