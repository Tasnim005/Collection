const button = document.getElementById('button')
const container = document.querySelector('#main')
const box = document.querySelector('#box')
const output = document.querySelector('#output')
const input = document.querySelector('input[type= "text"]')
const select = document.querySelector('select')
const form = document.querySelector('form')

button.addEventListener('click', runEvent)


function runEvent(eventParameter){
    // console.log(eventParameter)
    // console.log(eventParameter.type)
    // console.log(eventParameter.target)
    // console.log(eventParameter.target.className)
    // console.log(eventParameter.target.classList)
    // console.log(eventParameter.target.id)
    // console.log(eventParameter.altKey)
    // console.log(eventParameter.ctrlKey)
    // console.log(eventParameter.shiftKey)
    // console.log(eventParameter.clientX)
    // console.log(eventParameter.clientY)
    // console.log(eventParameter.offsetX)
    // console.log(eventParameter.offsetY)

    button.style.backgroundColor = 'red'
    container.style.backgroundColor = '#ccc'
}

const button2 = document.getElementById('button')
button2.addEventListener('click', run)
button2.addEventListener('dblclick', run)
button2.addEventListener('mouseup', run)
button2.addEventListener('mousedown', run)

function run(e){
    console.log(e.type)
    output.innerHTML = `<h3>OffsetX: ${e.offsetX} OffsetY: ${e.offsetY}</h3>` // ********

    document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
}

box.addEventListener('mouseover', run)
box.addEventListener('mouseout', run)
box.addEventListener('mousemove', run)

input.addEventListener('keyup', keyEvents)
input.addEventListener('keydown', keyEvents)
input.addEventListener('keypress', keyEvents)
input.addEventListener('keyinput', keyEvents)

input.addEventListener('focus', keyEvents)
input.addEventListener('blur', keyEvents)
input.addEventListener('cut', keyEvents)
input.addEventListener('copy', keyEvents)
input.addEventListener('paste', keyEvents)

function keyEvents(e){
    console.log(e)
    console.log(`Event Type: ${e.type}`)

}

select.addEventListener('change', keyEvents)

form.addEventListener('submit', formFunction)

function formFunction(e){
    e.preventDefault()
    console.log(`Event Type: ${e.type}`)
}