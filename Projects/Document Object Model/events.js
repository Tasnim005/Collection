// EVENTS
const button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick(eventParameter){
    // console.log('Button Clicked')
    document.getElementById('header-title').textContent = 'Changed'
    document.querySelector('#main').style.backgroundColor = '#ccc'
    console.log(eventParameter)
    console.log(eventParameter.target)
    console.log(eventParameter.target.id)
    console.log(eventParameter.target.className)
    console.log(eventParameter.target.classList) // ****

    const output = document.getElementById('output')
    output.innerHTML = '<h3> Button </h3>'

    console.log(eventParameter.type)
    console.log(eventParameter.clientX) // That's the position from Window or browser
    console.log(eventParameter.clientY)

    console.log(eventParameter.offsetX) // Position from element we are inside of
    console.log(eventParameter.offsetY)

    console.log(eventParameter.altKey) // whether we're holding this key or not
    console.log(eventParameter.ctrlKey)
    console.log(eventParameter.shiftKey)

    // We can run an if statement to see whether we were holding those keys and add different functionality
}

const button2 = document.getElementById('button')
button2.addEventListener('click', runEvent)
button2.addEventListener('dblclick', runEvent)
button2.addEventListener('mousedown', runEvent)
button2.addEventListener('mouseup', runEvent)


function runEvent(eventParameter){
    console.log('EVENT TYPE: ' + eventParameter.type)
    console.log(`Event Type: ${eventParameter.type}`)

    output.innerHTML = '<h3> MouseX: '+eventParameter.offsetX+' </h3><h3>MouseY: '+eventParameter.offsetY+'</h3>'

    document.body.style.backgroundColor = "rgb("+eventParameter.offsetX+", "+eventParameter.offsetY+", 40)"
    document.body.style.backgroundColor = `rgb(${eventParameter.offsetX}, ${eventParameter.offsetY}, 40)`


    console.log(eventParameter.target.value)
    document.querySelector('.add').innerHTML = '<h3>'+eventParameter.target.value+'</h3>'
}

const box = document.getElementById('box')
box.addEventListener('mouseenter', runEvent)
box.addEventListener('mouseleave', runEvent)

box.addEventListener('mouseover', runEvent)
box.addEventListener('mouseout', runEvent) // mouseover and mouseout are for the inner elements

box.addEventListener('mousemove', runEvent)

// *************Key Events**************
const itemInput = document.querySelector('input[type= "text"]')

itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('keyup', runEvent)
itemInput.addEventListener('keypress', runEvent)

// focus, blur, cut, paste, input
itemInput.addEventListener('focus', runEvent)
itemInput.addEventListener('blur', runEvent)
itemInput.addEventListener('cut', runEvent)
input.addEventListener('copy', keyEvents)
itemInput.addEventListener('paste', runEvent)
itemInput.addEventListener('input', runEvent)

const select = document.querySelector('select')
select.addEventListener('change', runEvent)

const form = document.querySelector('form')
form.addEventListener('submit', run)

function run(e){
    e.preventDefault()
    console.log(`Event Type: ${e.type}`)
}