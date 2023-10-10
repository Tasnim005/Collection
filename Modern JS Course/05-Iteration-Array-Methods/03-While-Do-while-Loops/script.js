const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "While and Do While Loops"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
/* Use 'for loop' when we know the number of times we want the loop to run*/
/* Use 'while loop' when the number of times the loop will run is unknown*/

// While Loop
// let i = 0

// while(i<=20){
//     console.log(`Number ${i}`);
//     i++
// }

//  Loop over arrays
const arr = [10, 20, 30, 40, 50]

// while(i<arr.length){
//     console.log(arr[i]);
//     i++
// }

// Nesting While Loops
// while (i <= 5) {
//     console.log(`Number ${i}`);

//     let j = 1
//     while (j <= 5) {
//         console.log(`${i}*${j} = ${i * j}`);
//         j++
//     }
//     i++
// }

// Do...while loop will run at least once even if the condition is false
/* Use 'Do...while loop' when when you want to run the block of code at least once even if the condition is false*/

let i=21
do {
    console.log(`Number ${i}`);
    i++
} while (i <= 20)