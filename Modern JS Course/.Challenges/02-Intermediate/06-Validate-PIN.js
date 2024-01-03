// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
    const numberRegex = /^[0-9]+$/;

    const pinArray = pin.split('')
    if (numberRegex.test(pin) === true) {
        if (pinArray.length === 4 || pinArray.length === 6) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(validatePIN('7'))

