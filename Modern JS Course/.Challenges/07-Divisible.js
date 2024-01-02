// Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x === 0 & n % y === 0) {
        return true
    } else {
        return false
    }

}

console.log(isDivisible(50, 7, 10))