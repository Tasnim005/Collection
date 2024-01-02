// Given an array of integers, return a new array with each value doubled.

function maps(arr){
    const doubledArr = arr.map((item)=> {
        return item*2
    })
    return doubledArr
}

console.log(maps([1, 2, 3]))