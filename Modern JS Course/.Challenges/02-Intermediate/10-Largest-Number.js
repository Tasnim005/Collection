// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

// Notes
// Only Natural numbers passed to the function , numbers Contain digits [0:9] inclusive

// Digit Duplications could occur , So also consider it when forming the Largest

// Input >> Output Examples:

// maxNumber (213) ==> return (321)
// maxNumber (7389) ==> return (9873)
// maxNumber (566797) ==> return (977665)
// maxNumber (17693284) ==> return (98764321)

function maxNumber(num) {
    const numArr = String(num).split('').sort().reverse().join('')

    return Number(numArr)
}
