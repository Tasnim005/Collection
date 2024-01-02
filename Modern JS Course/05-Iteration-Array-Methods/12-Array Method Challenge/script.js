const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's face", "Array Method Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);


// Challenge 1: Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name property should have their first and last name.

const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];

const youngPeople = people.filter((individual) => {
    return individual.age >= 25
}).map((info) => {
    return {
        name: `${info.firstName} ${info.lastName}`,
        email: info.email
    }
})

console.log(youngPeople);


// Challenge 2: Add all of the positive numbers in the array.
const numbers = [2, -30, 50, 20, -12, -9, 7];

const sum = numbers.filter((number) => {
    return number > 0
}).reduce((previous, current) => {
    return previous + current
}, 0)

console.log(sum);

// Challenge 3: Create a new array called capitalizedWords with the words from the words array with the first letter of each word capitalized.

const words = ['coder', 'programmer', 'developer'];

// console.log(words[0].split('')[0].toUpperCase());
// console.log(words[0].slice(1,));


const capitalizedWords = words.map((item)=>{
    const capitalizedPart =  item.split('')[0].toUpperCase()
    const remPart = item.slice(1,)
    return capitalizedPart+remPart
})

console.log(capitalizedWords);

