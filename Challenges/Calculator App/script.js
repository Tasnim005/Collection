const keypad = document.querySelector('.keypadContent')
const keypadDisplay = document.querySelector('.keypad')
const deleteButton = document.querySelector('#delete')
const resetButton = document.querySelector('#reset')
const solve = document.querySelector('#equal')

deleteButton.addEventListener('click', del)
resetButton.addEventListener('click', reset)
solve.addEventListener('click', solveFunction)

function appendToDisplay(value) {
    keypad.textContent += value
    keypadDisplay.style.paddingBlock = '2rem'
}

function del() {
    keypad.textContent = keypad.textContent.slice(0, -1)
}

function reset() {
    keypad.textContent = ''
    keypadDisplay.style.paddingBlock = '3.5rem'
}

function solveFunction() {
    const formattedNumber = eval(keypad.textContent)
    if (Number(formattedNumber) % 1 === 0) {
        return keypad.textContent = formattedNumber
    } else {
        // Decimal Number
        return keypad.textContent = formattedNumber.toFixed(2)
    }
}

// Keyboard
document.body.addEventListener('keydown', keyBoardtoDisplay)
function keyBoardtoDisplay(e) {
    if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0' || e.key === '.' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        keypad.textContent += e.key
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
        keypad.textContent = keypad.textContent.slice(0, -1)
    } else if (e.key === 'Enter') {
        solveFunction()
    }
    else {
        keypad.textContent = 'Error'
    }
}


// 3 State Toggle
const toggleStates = document.querySelectorAll('.toggle-state')
const circle = document.querySelector('.circle')
console.log()


toggleStates.forEach((button) => {
    button.addEventListener('click', (event) => {
        const clickedButton = event.target;
        const clickedIndex = Array.from(toggleStates).indexOf(clickedButton);

        function formula() {
            return Math.ceil(((100 / toggleStates.length) * (clickedIndex)))
        }

        if (clickedIndex === 0) {
            circle.style.left = '0%'
            circle.style.marginLeft = '0.3rem'
            circle.style.marginRight = '0'
            document.body.className = ''
        } else if (clickedIndex === (toggleStates.length - 1)) {
            circle.style.left = `${formula()}%`
            circle.style.marginLeft = '0'
            circle.style.marginRight = '0'
            document.body.className = 'theme3'
        } else {
            circle.style.left = `${formula()}%`
            circle.style.marginInline = '0'
            document.body.className = 'theme2'
        }
    })
})




