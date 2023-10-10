const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "filter( )"];

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

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0
})
console.log(evenNumbers);

// Short version
const oddNumbers = numbers.filter((number) => number % 2 !== 0)
console.log(oddNumbers);

// Using for Each()

const even = []
numbers.forEach((number) => {
    if (number % 2 === 0) {
        even.push(number)
    }
})

console.log(even);

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

// Get retail companies
const retailCompanies = companies.filter((company)=>company.category ==='Retail')
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const estdCompanies = companies.filter((item)=>{
    return item.start>=1980 && item.end<=2005
})
console.log(estdCompanies);

// Get Companies that lasted 10 years or more
const oldCompanies = companies.filter((item)=>{
    return (item.end - item.start)>=10
})

console.log(oldCompanies);
