const arrow = document.querySelector('.arrow')
const labels = document.querySelectorAll('label')
const inputs = document.querySelectorAll('input')
const errorMessages = document.querySelectorAll('.errorMessage')
console.log(inputs);



arrow.addEventListener('click', calculate)

function calculate() {
    const inputDay = document.querySelector('#inputDay').value
    const inputMonth = document.querySelector('#inputMonth').value
    const inputYear = document.querySelector('#inputYear').value

    const outputYear = document.querySelector('#outputYear')
    const outputMonth = document.querySelector('#outputMonth')
    const outputDay = document.querySelector('#outputDay')


    // Validation
    const inputDate = `${inputYear}-${inputMonth}-${inputDay}`
    const isValidDate = moment(inputDate).isValid();

    if (inputDay.length === 2 && inputMonth.length === 2 && inputYear.length === 4 && inputYear < (new Date().getFullYear()) && isValidDate === true) {
        calculateAge()
        clearError();
    } else {
        console.log('error');
        showError()
    }

    function showError() {
        labels.forEach((item) => {
            item.style.color = '#ff5757'
        })
        inputs.forEach((item) => {
            item.style.borderColor = '#ff5757'
        })

        errorMessages.forEach((item) => {
            item.style.display = 'block'
        })
    }

    // Clear error messages and reset styles
    function clearError() {
        labels.forEach((item) => {
            item.style.color = ''; // Reset label color
        });
        inputs.forEach((item) => {
            item.style.borderColor = ''; // Reset input border color
        });
        errorMessages.forEach((item) => {
            item.style.display = 'none'; // Hide error messages
        });
    }

    // Calculate age
    function calculateAge() {
        outputYear.textContent = moment().diff(inputDate, 'years')
        outputMonth.textContent = (moment().diff(inputDate, 'months')) % 12
        outputDay.textContent = (moment().diff(inputDate, 'days')) % 30
    }

}


