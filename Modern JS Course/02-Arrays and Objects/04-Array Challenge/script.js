const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's face", "Array Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

// Challenge 1
const arr = [1, 2, 3, 4, 5]

arr.reverse()
arr.push(0)
arr.unshift(6)

console.log(arr) //Result: [6, 5, 4, 3, 2, 1, 0]

// Challenge 2
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

const arr3 = arr1.slice(0,4).concat(arr2)

console.log(arr3) //Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]