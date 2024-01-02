// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr(numberOfRepeats, str) {
    return str.repeat(numberOfRepeats)
}

console.log(repeatStr(5, 'Hello'))


/*
const str = 'Hello'
const arr = str.split('')
const newArr = [...arr, ...arr]
console.log(newArr.join(''))
*/