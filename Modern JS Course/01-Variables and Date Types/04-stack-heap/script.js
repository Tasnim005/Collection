const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's know about", "Stack Vs Heap"];

const options = {
  strings: stringsToAnimate,
  typeSpeed: 50,
  backSpeed: 25, // Speed of erasing/backspacing
  backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
  showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here

// Values are stored on the stack
const name = 'John'
const age = 30

//Reference values are stored on the heap

const person = {
    name: 'Brad',
    age: 40,
}

let newName = name
newName = 'Jonathan'

let newPerson = person
newPerson.name = 'Bradley'

console.log(name, newName)
console.log(person, newPerson)