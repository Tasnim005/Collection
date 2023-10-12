const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'My Element')

// div.innerText = 'Hello World'
// Using innerText is not the best way when creating a new element i.e. to add text to that element
// innerText should be used to extract or modify text nodes

// createTextNode()
const text = document.createTextNode('Hello World')
div.appendChild(text)

// document.body.appendChild(div)
document.querySelector('ul').appendChild(div)

console.log(div);
