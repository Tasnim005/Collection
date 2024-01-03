// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
    const checkDay = date.getDate()
    const checkMonth = date.getMonth() +1
    const checkYear = date.getFullYear()

    const today = new Date()

    const todayDay = today.getDate()
    const todayMonth = today.getMonth() +1
    const todayYear = today.getFullYear()

    return checkDay===todayDay && checkMonth === todayMonth && checkYear === todayYear
}


