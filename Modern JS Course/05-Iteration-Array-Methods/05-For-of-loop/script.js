const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "For...of Loops"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// Loop through arrays
const items = ['book', 'table', 'chair', 'kite']
const users = [
    { name: 'Brad' },
    { name: 'Kate' },
    { name: 'Steve' }
]
// Using for loop
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// For...of loop
for (const item of items) {
    console.log(item);
}

for (const user of users) {
    console.log(user.name);
}

// Loop over strings
const str = 'Hello World'

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map()
map.set('name', 'John')
map.set('age', 30)

for (const [key, value] of map) {
    console.log(key, value);

}