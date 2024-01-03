// Implement a difference function, which subtracts one list from another and returns the result.

// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(arr1, arr2) {
  const result = arr1.filter((item)=>{
    return arr2.indexOf(item) === -1
    // If the element is not found (i.e., indexOf returns -1)
  })

  return result
}

// const arr1 = [1,2, 3, 9]
const arr2 = [1, 3, 19]

console.log(arr2.indexOf(19))