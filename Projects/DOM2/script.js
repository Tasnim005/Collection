// Web Dev Simplified - Learn DOM Manipulation In 18 Minutes

// *************Adding element************8
const body = document.querySelector('body')
body.append('Bangladesh') // With 'append' we can append a string 

// With 'appendchild' we can't append a string. Append is better than appendChild beacuse it has more versatility

const newDiv = document.createElement('div')
console.log(newDiv)
body.append(newDiv)
// newDiv.innerText = 'Hello World'

// ******** Inner HTML ***********
newDiv.innerHTML = '<strong>Dhaka </strong>' 

// Inner HTML is the only way in javascript where you can actually add html from a string into an element like this. Now this is really powerful since you can render HTML directly from your JS but it is a huge security problem because if you allow users to put user generated content into an inner HTML they could write malicious code

// (Alternative) It is a much more secure way
const strong  = document.createElement('strong')
strong.innerText = 'Chittagong'
newDiv.append(strong)

// ********** Removing elemnet **********
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

spanBye.remove()
div.removeChild(spanHi)

// removeChild() and remove() works almost same. But for removeChild we need select its parent

// getAttribute

const ul = document.querySelector('ul')
console.log(ul.getAttribute('title'))

// Alternative
console.log(ul.title)

// setAttribute
const li = document.querySelector('li')
console.log(li)
li.setAttribute('id', '1')

// Alternative
li.title = 'value'

// *********Modifying Style********
li.style.color = 'red'

// ********Modifying Element Classes*********
li.classList.add('new-class-item-one')
li.classList.remove('item')

// toggle will either add if it doesn't exist or remove if it already existed

li.classList.toggle('item-one')
li.classList.toggle('new-class-item-one')