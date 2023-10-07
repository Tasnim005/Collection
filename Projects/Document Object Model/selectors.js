// Examining the Document Object
console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.forms)
console.log(document.links)
console.log(document.images)

// Get Element By ID

const headerTitle = document.getElementById('header-title')
const header = document.getElementById('main-header')
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye'

console.log(headerTitle.textContent)
console.log(headerTitle.innerText) // textContent and innerText works almost same. The main difference is innerText pays attention to styling while the former doesn't.

headerTitle.innerHTML = '<h3>Hello World</h3>'
// If we look through the inspector, h3 is actually inside the h1. So, it doesn't change h1 to h3. Rather it puts the HTML inside that DOM element

// CSS Styles

header.style.borderBottom = 'solid 3px black'

// Get Elements by ClassName
const items = document.getElementsByClassName('list-group-item')
console.log(items)
items[1].textContent = 'Hello 2'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'
/*
items.style.backgroundColor = 'yellow' // this won't work because it is an HTML collection. For styling to work, we have to loop through
*/
for(i=0; i<items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4'
}
items[1].style.backgroundColor = 'yellow'


// Get elements by Tag Name
const li = document.getElementsByTagName('li')
console.log(li)

// Query Selector selects only one
const input = document.querySelector('input')
console.log(input) // it will grab only first one

input.value = 'Hello World'

const submit = document.querySelector('input[type= "submit"]')
submit.value = 'SEND'

const item = document.querySelector('.list-group-item')
item.style.color = 'red'

const lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'blue'

// QuerySelectorALL
const titles = document.querySelectorAll('.title')
console.log(titles) // This will give us NodeList which is similar to a collection except we can actually run array function on a node.
titles[0].textContent = 'Hello'

const odd = document.querySelectorAll('li:nth-child(odd)')
const even = document.querySelectorAll('li:nth-child(even)')

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = 'yellow'
}