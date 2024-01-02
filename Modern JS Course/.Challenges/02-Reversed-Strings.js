function solution(str) {
    const myString = str
    const stringToArray = myString.split('')
    const reversedArray = stringToArray.reverse('')
    const reversedString = reversedArray.join('')

    console.log(reversedString)
    return reversedString
}

solution('world')