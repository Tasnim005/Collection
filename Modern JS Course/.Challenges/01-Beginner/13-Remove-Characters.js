// Remove First and Last Character
function removeChar(str) {
    const givenStr = str
    const arr = givenStr.split('')
    arr.shift() //Removes the first element from an array and returns it
    arr.pop() // Removes the last element from an array and returns it

    const newStr = arr.join('')

    return newStr

};

console.log(removeChar('Developer'))