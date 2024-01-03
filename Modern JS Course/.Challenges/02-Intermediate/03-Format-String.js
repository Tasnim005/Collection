/*
function list(names) {
    let finalString = ''

    if (names.length === 1) {
        return names[0].name
    }

    names.forEach((item, index) => {
        const name = item.name

        if (index === names.length - 1) {
            finalString = finalString + ' & ' + name
        } else if (index === names.length - 2) {
            finalString = finalString + name
        } else {
            finalString = finalString + name + ', '
        }
    })

    return finalString
}
*/

function list(names) {
    return names.reduce((previous, current, index, array) => {
        if (index === 0) {
            return current.name
        } else if (index === array.length - 1) {
            return previous + ' & ' + current.name
        } else {
            return previous + ', ' + current.name
        }
    }, '')
}