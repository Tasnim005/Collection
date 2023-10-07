const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Date Object"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

let d

d = new Date()

d = d.toString()

d = new Date(2023, 2, 10, 15, 12, 10)

d = new Date('2021-07-18T15:35:00')

d = new Date('04/10/2023 15:45:00')

d = new Date('2023-07-10')
d = new Date('07-10-2023')

/* Timestamps*/

// Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
d = Date.now()

d = new Date('07-10-2023 12:30:00')
d= d.getTime()
d = d.valueOf()

d = new Date(1688970600000)

// To get timestamps in seconds
d= Math.floor(Date.now() / 1000)

// console.log( typeof d)
console.log(d)