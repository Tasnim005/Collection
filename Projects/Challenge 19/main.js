const arrow = document.querySelector('.arrow')
console.log(arrow);

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

    if(inputDay.length===2 && inputMonth.length===2 && inputYear.length===4 && isValidDate === true){
        calculateAge()
    }else{
        console.log('error');
    }

    // Calculate age
    function calculateAge(){
        outputYear.textContent = moment().diff(inputDate, 'years')
        outputMonth.textContent = (moment().diff(inputDate, 'months'))%12
        outputDay.textContent = (moment().diff(inputDate, 'days'))%30
    }
    
}


