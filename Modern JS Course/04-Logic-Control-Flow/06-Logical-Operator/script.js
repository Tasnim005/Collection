const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Logical-Operator"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
console.log(10<20 && 30>15 && 50>40)
console.log(10<20 || 30>105)

// &&- will return the first falsy value or the last value

let a

a = 10 && 20 //return last value i.e. 20
a = 10 && 20 && 30 //return last value i.e. 30
a = 10 && 0 && 30 //return first falsy value i.e. 0
a = 10 && '' && 0 && 30 //return first falsy value i.e. '' (empty string)

console.log(a);

// Practical Example
// const posts = ['Post One', 'Post Two']
const posts = []
posts.length>0 && console.log(posts[0]);

// || -will return the first truthy value or the last value

let b
b = 10||20 //return the first truthy value i.e. 10
b = 0||20 //return the last value i.e. 20
b = 0|| null || '' || undefined //return the last value i.e. undefined

console.log(b);

// ?? - Returns the right side operand when left is null or undefined . It doesn't look for 'truthy' or 'falsy' rather only 'null' or 'undefined'

let c

c = 10 ?? 20 // Returns 10 since 10 is not undefined
c = null ?? 20 // Returns 20 since left side operand is null
c = undefined ?? 20 // Returns 20 since left side operand is undefined

c = 0 ?? 30 //Returns 0
c = '' ?? 30 //Returns empty string

console.log(c);
