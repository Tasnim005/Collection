const header = document.getElementById('main-header')
console.log(header)

const container = document.querySelector('.container')
console.log(container)

const input = document.querySelector('input')
console.log(input)
input.value = 'Hello World'

const submit = document.querySelector('input[type= "submit"]')
submit.value = 'SEND'
submit.style.backgroundColor = 'red'

const item = document.querySelectorAll('.list-group-item')
console.log(item)
item[0].innerHTML = '<h3>Hello World</h3>'


item[1].style.backgroundColor = 'yellow'

const odd = document.querySelectorAll('li:nth-child(odd)')
const even = document.querySelectorAll('li:nth-child(even)')

console.log(odd)
console.log(even)

for(i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = 'yellow'
}

console.log(item[3].parentElement.parentElement.parentElement)
console.log(item[1].parentNode)

const mainContainer = document.querySelector('#main')
console.log(mainContainer)
console.log(mainContainer.childNodes)
console.log(mainContainer.children)

const itemList = document.querySelector('#items')
console.log(itemList.children)
console.log(itemList.childNodes)
console.log(itemList.firstChild)
console.log(itemList.firstElementChild)
console.log(itemList.lastChild)
console.log(itemList.lastElementChild)

const title = document.querySelector('.title')
console.log(title)
console.log(title.previousSibling)
console.log(title.previousElementSibling)
console.log(title.nextSibling)
console.log(title.nextElementSibling)

const newDiv = document.createElement('div')
newDiv.className = 'Hello'
newDiv.id = 'world'
newDiv.setAttribute('title', 'value')

console.log(newDiv)

const text = document.createTextNode('Bangladesh')
newDiv.appendChild(text)
newDiv.style.fontSize = '32px'
newDiv.style.padding = '16px'
newDiv.style.color = 'green'

const form = document.querySelector('form')
const title2 = document.getElementById('title2')

mainContainer.appendChild(newDiv)

mainContainer.insertBefore(newDiv, title2)