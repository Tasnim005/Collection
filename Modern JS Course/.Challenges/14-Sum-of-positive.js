// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
    const arrayOfPositiveNumbers = arr.filter((item)=>{
        if(item>0){
            return true
        }
    })

    const sum = arrayOfPositiveNumbers.reduce((acc, currentValue)=>{
        return acc+ currentValue
    },0)

    return sum
}

console.log(positiveSum([1,-4,7,12])) //Output: 20

