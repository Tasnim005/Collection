// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
    if (year % 100 === 0) {
        const century = Math.floor(year / 100)
        return century
    } else {
        const century = Math.floor(year / 100) + 1
        return century
    }
}


console.log(century(150))