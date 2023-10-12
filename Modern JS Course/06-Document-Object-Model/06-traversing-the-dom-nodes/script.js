// Get Child Element
let output

const parent = document.querySelector('.parent')

output = parent.childNodes //Will show text nodes (white space) as well comments made on HTML i.e. NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]

output = parent.childNodes[0].textContent
output = parent.childNodes[0].nodeName
output = parent.childNodes[3].nodeName
output = parent.childNodes[0].textContent

output = parent.childNodes[3].innerText = 'Child One'
output = parent.childNodes[5].style.color = 'red'

output = parent.firstChild
output = parent.lastChild

parent.lastChild.textContent = 'Hello'

// Parent Nodes
const child = document.querySelector('.child')

// parentNode and parentElement will show same output
output = child.parentNode
output = child.parentElement

child.parentNode.style.backgroundColor = '#ccc'
child.parentNode.style.padding = '10px'

// Siblings
const secondItem = document.querySelector('.child:nth-child(2')

output = secondItem.nextSibling
output = secondItem.previousSibling

console.log(output);
