const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Date Object Methods"];

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

let d = new Date()

x = d.toString()

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()
x = d.getMonth() + 1
// Month is zero-based

x = d.getDate()

x = d.getDay()

x = d.getHours()

x = d.getMinutes()

x = d.getSeconds()
x = d.getMilliseconds()

// String Representation of Date

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`

// Format date using Intl. Date-Time Format in  a local sensitive way

x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('en-GB').format(d)

// To get your local
x = Intl.DateTimeFormat('default').format(d)

x = Intl.DateTimeFormat('default',{month: 'long'}).format(d)

// An alternative approach - Preferred way to get date and time since it is local sensitive
x = d.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "BD"
})

console.log(x)