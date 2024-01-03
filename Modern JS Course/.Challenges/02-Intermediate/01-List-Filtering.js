// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterList(arr) {
    const filteredArray = arr.filter((item) => {
        if (item >= 0 & typeof (item) === typeof (1)) {
            return true
        }
    })

    return filteredArray
}

console.log(filterList([1, 2, 'aasf', '1', '123', 123]))

