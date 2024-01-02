function getCount(str) {
    const givenString = str
    const arr = givenString.split('')

    const filteredArr = arr.filter((letter) => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            return true
        }
    })

    return filteredArr.length
}

console.log(getCount('Tasnim'))