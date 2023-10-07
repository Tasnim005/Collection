const itemInput = document.querySelector('input[type="text"]')
console.log(itemInput)
itemInput.addEventListener('focus', runEvent)
itemInput.addEventListener('blur', runEvent)
itemInput.addEventListener('keyup', runEvent)
itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('keypress', runEvent)
itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('copy', runEvent)
itemInput.addEventListener('paste', runEvent)
itemInput.addEventListener('input', runEvent)

function runEvent(e){
    console.log(e.type)
}

const select = document.querySelector('select')
console.log(select)
select.addEventListener('change', runEvent)

const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', run)
function run(e){
    e.preventDefault()
    console.log(e)
    console.log(`Event Type: ${e.type}`)

}
console.log()
