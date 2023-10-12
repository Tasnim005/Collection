const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "DOM Intro"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
console.log(window);
console.log(window.document);
console.dir(window.document);

console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);

console.log(document.links[0]);
// document.body.innerHTML = '<h1>Hello World</h1>'

// document.write('Hello from JS')