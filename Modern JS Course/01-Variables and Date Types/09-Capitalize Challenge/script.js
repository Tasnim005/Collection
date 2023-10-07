const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's solve", "Capitalize Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

// To capitalize the first letter of given string
// Solution 1
const myString = 'developer'
const capitalize = myString[0].toUpperCase()
const remainingPart = myString.substring(1,)

const output = capitalize + remainingPart

// Solution 2
// const output = `${capitalize}${remainingPart}`

console.log(output)