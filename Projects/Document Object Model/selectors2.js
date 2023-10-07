// console.dir(document)
// console.log(document.domain)
// console.log(document.body)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.forms)
// console.log(document.images)
// console.log(document.links)


// const header = document.querySelector('#main-header')
// console.log(header)
// console.log(header.textContent)
// console.log(header.innerText)
// console.log(header.innerHTML)
// header.innerHTML ='<h3>Hi Everyone!</h3>'
// header.style.borderBottom = '1px solid black'

// const title = document.querySelector('.title')
// console.log(title)
// console.log(title.textContent)

// const title2 = document.querySelectorAll('#title2')
// console.log(title2)

// const listItem = document.getElementsByTagName('li')
// console.log(listItem)

// for(let i=0; i<listItem.length; i++){
//     listItem[i].style.border= '1px solid steelblue';
// }


const button =document.querySelector("input[type='submit']")
button.value = 'SEND'
button.style.backgroundColor = 'blue'
console.log(button)

// const itemList = document.querySelector('#items')
// console.log(itemList)
// itemList.parentElement.style.backgroundColor = 'white'
const itemList = document.querySelector('#items')

console.log(itemList.parentNode)
itemList.parentElement.style.backgroundColor = 'skyblue'
console.log(itemList.children)

for(let i=0; i<itemList.length; i++){
    itemList[i].children.style.border= 'none'
}

console.log(itemList.parentNode)
console.log(itemList.parentElement)
console.log(itemList.childNodes)
console.log(itemList.children)
console.log(itemList.childNodes[1])
console.log(itemList.firstChild)
console.log(itemList.firstElementChild)
console.log(itemList.lastElementChild)
console.log(itemList.lastChild)
console.log(itemList.nextElementSibling)
console.log(itemList.nextSibling)
console.log(itemList.previousElementSibling)
console.log(itemList.previousSibling)

const body = document.querySelector('body')
body.style.backgroundColor= '#fff'
body.append('Bangladesh')

const newDiv = document.createElement('div')
console.log(newDiv)
body.append(newDiv)
newDiv.className = 'hello'
newDiv.id = 'hi'
newDiv.setAttribute('title', 'value')

const text = document.createTextNode('DHAKA')
console.log(text)
newDiv.append(text)
newDiv.style.backgroundColor = 'lightblue'
newDiv.style.width = '80%'
newDiv.style.margin = '1rem auto'
newDiv.style.padding = '1rem '
newDiv.style.border = '1px solid steelblue '
newDiv.style.textAlign = 'center '
body.append('Country')

const newListItem = document.createElement('li')
newListItem.className = 'list-group-item'
console.log(newListItem)
const listItemText = document.createTextNode('New Item')
newListItem.append(listItemText)
itemList.prepend(newListItem)



console.log()
console.log()
console.log()
console.log()
