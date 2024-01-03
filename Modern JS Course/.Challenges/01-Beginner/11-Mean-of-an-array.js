// Get the mean of an array
function getAverage(marks) {
    const summation = marks.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue
    },0)

    const arrLength = marks.length
    const avg = Math.floor(summation/arrLength)

    return avg
}

console.log(getAverage([10, 35, 92, 23]))
