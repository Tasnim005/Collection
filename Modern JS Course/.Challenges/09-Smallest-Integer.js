// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(params) {
    // Sorts the array in ascending order
    const sortedArr = params.sort((a, b) => a - b)

    // Get the first element if an array i.e. the smallest integer

    return sortedArr[0]
  }
}

