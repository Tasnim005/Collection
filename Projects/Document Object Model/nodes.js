// Traversing the DOM- 
//  **********parentNode**********
const itemList = document.querySelector('#items')

console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#F4F4F4'
console.log(itemList.parentNode.parentNode.parentNode)

//  **********parentElement**********
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#F4F4F4'
console.log(itemList.parentElement.parentElement.parentElement)
// parentNode & parentElement for most part can be used interchangibly

//  **********childNode**********
const itemsList = document.querySelector('#items')
console.log(itemsList.childNodes) //The textNode that we are seeing is basically the lineBreaks

//  **********children**********
console.log(itemsList.children) // It's not gonna see the line breaks as text Nodes
itemsList.children[1].style.backgroundColor = 'yellow'
// The difference between this children and childNodes, is that childNodes contain all nodes, including text nodes and comment nodes, while children only contain element nodes.


// firstChild
console.log(itemsList.firstChild) // firstChild takes notice of linebreak. So it's not preferable. Instead of using this, we will use firstElementChild

//firstElementChild
console.log(itemsList.firstElementChild)
itemsList.firstElementChild.textContent = 'Hello'

// lastChild & lastElementChild works same as firstChild & firstElementChild respectively

// lastChild
console.log(itemsList.lastChild) 

//lastElementChild
console.log(itemsList.lastElementChild)
itemsList.lastElementChild.textContent = 'Hello World'

// nextSibling
console.log(itemsList.nextSibling) // it doesn't have any next sibling. In the console, we can see it

// previousSibling
console.log(itemsList.previousSibling)

// previousElementSibling
console.log(itemsList.previousElementSibling)
itemsList.previousElementSibling.style.color = 'green'

//  **********createElement**********
// we can use prepend in place of append to add items at the beginning of the list instead of bottom 

// Creating a div
const newDiv = document.createElement('div')
console.log(newDiv)

// Add class
newDiv.className= 'Hello'

// Add ID
newDiv.id = 'hello1'

// Add attribute
newDiv.setAttribute('title', 'Hello Div')

// Create text node
const newDivText = document.createTextNode('Hello World')

// Add text to div
newDiv.appendChild(newDivText)
console.log(newDiv) // At this stage, it's existing inside of our JS & it's not in our DOM

const container = document.querySelector('header .container')
const h1 = document.querySelector('header h1')

newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1)