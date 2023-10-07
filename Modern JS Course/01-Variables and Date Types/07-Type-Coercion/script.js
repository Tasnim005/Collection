const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's know about", "Type Coercion"];

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

x = 5 + '5'
x = 5 + Number('5')

x = 5 * '5'
// Here JS decided to coerce string into  a number. Because it doesn't make any sense to multiply two strings

x = 5 + null
x = Number(null)
x = Number(true)
x = Number(false)

x = 5 + true
// Here, we'll get 6. It's because 'true' has been coerced into a number and 'true' corresponds to '1'

x = 5 + false
// Here, we'll get 5. It's because 'false' has been coerced into a number and 'true' corresponds to '0'

x = 5 + undefined

console.log(x, typeof x)