const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's face", "Function Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Challenge 1-- Convert Fahrenheit to Celsius

// function getCelsius(F){
//     return (F - 32) * (5 / 9)
// }
// console.log(getCelsius(98.4))


const getCelsius = (F) => (F - 32) * (5 / 9)
console.log(`The temperature is ${getCelsius(212)} \xB0C`)

// Challenge 2

// const arr = [1,2,3,4,5]

// console.log(...arr)
// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

function minMax(arr) {
    const minValue = Math.min(...arr)
    const maxValue = Math.max(...arr)

    // return {min:minValue, max:maxValue}
    return { minValue, maxValue};
}

console.log(minMax([12, 24, 3, 41, 50]))
