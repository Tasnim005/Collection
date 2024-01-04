// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(str) {
    const arr1 = str.split('')
    const arr2 = str.split('')

    // Even
    arr1.forEach((item, index, original) => {
        if (index % 2 === 0) {
            original[index] = item.toUpperCase()
        }
    });

    // Odd
    arr2.forEach((item, index, original) => {
        if (index % 2 !== 0) {
            original[index] = item.toUpperCase()
        }
    });

    const arr1Str = arr1.join('')
    const arr2Str = arr2.join('')

    return [arr1Str, arr2Str]
};
