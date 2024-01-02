const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "sort( )"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// By default, it sorts the elements as strings, which may not produce the expected result for numerical sorting.

// // Sorting elements as strings (default behavior)
const fruits = ['banana', 'mango', 'strawberry', 'apple', 'orange']

console.log(fruits.sort())

// Sorting elements numerically
const numbers = [10, 5, 8, 2, 1];
numbers.sort((a,b)=>{
    return a-b
})

console.log(numbers)


// Note that the sort() method sorts the array in place, meaning it modifies the original array. If you want to create a new sorted array without modifying the original one, you can create a copy of the array and then apply the sort() method:

const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const sortedArray = [...originalArray].sort((a,b)=>b-a)

console.log(originalArray)
console.log(sortedArray)
