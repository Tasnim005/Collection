const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "JSON"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);


// Lesson starts from here

// JSON - JavaScript Object Notation
// https://api.github.com/users
// https://api.github.com/users/Tasnim005 - My ID

const post = {
    id:1,
    title: 'Post One',
    body: 'This is the body'
}
console.log(post)

// Convert to JSON String

const str = JSON.stringify(post)
console.log(str)

// Parse JSON

const obj = JSON.parse(str)
console.log(obj)

const posts = [
    {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
    },
    {
    id: 2,
    title: 'Post Two',
    body: 'This is the body'
    },
    {
    id: 3,
    title: 'Post Three',
    body: 'This is the body'
    },
]

const str2 = JSON.stringify(posts)
console.log(str2)