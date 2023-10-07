const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Array Basic Methods"];

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
const arr = [10, 35, 75, 100, 5]

// Appends new elements to the end of an array
arr.push(100)
arr.pop()

// Inserts new elements at the start of an array
arr.unshift(99)
arr.shift()

arr.reverse()
console.log(arr)

// Determines whether an array includes a certain element, returning true or false as appropriate.

const newArray = [34, 55, 95, 20, 15]
x =newArray.includes(20)

x =newArray.indexOf(340)
// If the element is not present, it's gonna return -1.

// Returns a copy of a section of an array.
x = newArray.slice(1, 4)

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// x = newArray.splice(3,1)

x = newArray.splice(1, 4).reverse().toString().charAt(0)

console.log(x, newArray)
