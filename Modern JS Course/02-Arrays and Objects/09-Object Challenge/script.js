const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's face", "Object Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Challenge
// Step 1
const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'MockingJay',
        author: 'Suzanne Collins',
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
]

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Step 3
// const firstBook = library[0].title
const {title: firstBook} = library[0] //Destructuring
console.log(firstBook)

// Step 4
const str = JSON.stringify(library)
console.log(str)

console.log(library)