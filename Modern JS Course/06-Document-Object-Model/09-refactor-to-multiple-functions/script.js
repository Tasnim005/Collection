// Quick and dirty
function createListItem(item){
    const li = document.createElement('li')
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`

    document.querySelector('.items').appendChild(li)
}
createListItem('eggs')

// Using first method causes the web browser to reparse & recreate all DOM Nodes inside the ul element.So, this is less efficient


// Clean and efficient
function createNewItem(item){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(item))

    const button = document.createElement('button')
    button.className = 'remove-item btn-link text-red'
    
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark'

    button.appendChild(icon)
    li.appendChild(button)

    document.querySelector('.items').appendChild(li)
}

createNewItem('Cheese')