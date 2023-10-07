const button = document.querySelector('button')
const mainContainer = document.getElementById('main')
const input = document.querySelector('input')
const box = document.querySelector('#box')
const output = document.querySelector('#output')
const select = document.querySelector('select')
const form = document.querySelector('form')

button.addEventListener('click', runEvent)

function runEvent(e){
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.offsetX)
    console.log(e.offsetY)
    console.log(e.clientX)
    console.log(e.clientY)
    mainContainer.style.backgroundColor = '#f4f4f4'
    button.style.backgroundColor = 'red'
}

select.addEventListener('change', run)
input.addEventListener('keyup', run)
input.addEventListener('keydown', run)
input.addEventListener('keypress', run)
input.addEventListener('focus', run)
input.addEventListener('blur', run)
input.addEventListener('cut', run)
input.addEventListener('paste', run)
input.addEventListener('copy', run)

function run(e){
    console.log(e)
    console.log(e.type)

}

box.addEventListener('click', mouseEvent)
box.addEventListener('dblclick', mouseEvent)
box.addEventListener('mouseup', mouseEvent)
box.addEventListener('mousedown', mouseEvent)
box.addEventListener('mouseenter', mouseEvent)
box.addEventListener('mouseleave', mouseEvent)
box.addEventListener('mouseover', mouseEvent)
box.addEventListener('mouseout', mouseEvent)



function mouseEvent(e){
    console.log(e)
    console.log(e.type)
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`

    output.innerHTML = `<h3>Mouse Abscissa: ${e.offsetX} <br> Mouse Ordinate: ${e.offsetY}</h3>`

}

