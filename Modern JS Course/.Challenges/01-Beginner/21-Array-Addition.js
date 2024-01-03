function arrayPlusArray(arr1, arr2) {
    const newArr = [...arr1, ...arr2] //newArr will consists of all elements of both arr1 and arr2

    const sum = newArr.reduce((acc, current) => {
        return acc + current
    }, 0)

    return sum
}