const keypad = document.querySelector('.keypadContent')
const deleteButton = document.querySelector('#delete')
const resetButton = document.querySelector('#reset')
const solve = document.querySelector('#equal')

deleteButton.addEventListener('click', del)
resetButton.addEventListener('click', reset)
solve.addEventListener('click', solveFunction)

function appendToDisplay(value) {
    keypad.textContent += value
}

function del() {
    keypad.textContent = keypad.textContent.slice(0, -1)
}

function reset() {
    keypad.textContent = ''
}

function solveFunction() {
    keypad.textContent = eval(keypad.textContent)
    // console.log(typeof keypad.textContent)

}

// Keyboard
document.body.addEventListener('keydown', keyBoardtoDisplay)
function keyBoardtoDisplay(e) {
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0' || e.key === '.' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        keypad.textContent += e.key
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
        keypad.textContent = keypad.textContent.slice(0, -1)
    } else if (e.key === 'Enter') {
        keypad.textContent = eval(keypad.textContent)
    }
    else {
        keypad.textContent = 'Error'
    }
}