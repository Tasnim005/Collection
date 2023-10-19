// First Way
function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child')

    const li = document.createElement('li')
    li.textContent = 'Replaced First'

    firstItem.replaceWith(li)
} 

replaceFirstItem()

// Second Way
function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)')

    secondItem.outerHTML = '<li>Replaced Second</li>'
} 

replaceSecondItem()

// Third Way
function replaceAllItems(){
    const items = document.querySelectorAll('li')

    items.forEach((item, index)=>{
        // item.textContent = 'Replaced'
        // item.textContent = `Replaced ${index +1} item`

        index===1 ? item.innerHTML = 'Second Item' : item.innerHTML = 'Replaced'
    })
} 

replaceAllItems()


// 4th way
function replaceChildHeading(){
    const header = document.querySelector('header')
    const h1 = document.querySelector('h1')

    const h2 = document.createElement('h2')
    h2.id = 'app-title'
    h2.textContent = 'Shopping List'

    header.replaceChild(h2, h1)
}

replaceChildHeading()