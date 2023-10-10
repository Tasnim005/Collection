const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "map( )"];

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

const doubleNumbers = numbers.map((number) => number * 2)
console.log(doubleNumbers);

// Using for Each
const doubleNumbers2 = []
numbers.forEach((number) => {
    doubleNumbers2.push(number * 2)

})
console.log(doubleNumbers2);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

// Create an array of company names
const companyNames = companies.map((item) => item.name)
console.log(companyNames);

// Create an array of just company and category
const companyInfo = companies.map((item) => {
    return {
        name: item.name,
        category: item.category
    }
})
console.log(companyInfo);

// Create an array of each company in years
const companyYears = companies.map((item) => {
    return (item.end - item.start)
})
console.log(companyYears);

// Chain Map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2)
console.log(squareAndDouble);

//Chaining different methods
const evenDouble = numbers.filter((number) => number % 2 === 0).map((double)=>double*2)

console.log(evenDouble);
