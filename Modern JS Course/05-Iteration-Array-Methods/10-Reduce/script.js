const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "reduce( )"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)

console.log(sum);

// Using a for loop
const sum3 = () => {
    let acc = 0
    for (const cur of numbers) {
        acc+=cur
    }
    return acc
}

console.log(sum3());

// Shopping carts
const cart = [
    {id:1, name:'Product 1', price:130},
    {id:2, name:'Product 2', price:150},
    {id:3, name:'Product 3', price:175},
]

const total = cart.reduce(function(acc, product){
    return acc+ product.price
},0)

console.log(total);
