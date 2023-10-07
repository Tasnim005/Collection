const form =document.getElementById('addForm')
const itemList = document.querySelector('#items')
const filter = document.getElementById('filter')

// Form Submit Event
form.addEventListener('submit', addItem)

// Delete Event
itemList.addEventListener('click', removeItem)

// Filter Event
filter.addEventListener('keyup', filterItems)

// Add item
function addItem(e){
    e.preventDefault()
    // Get Input Value
    const newItem = document.getElementById('item').value

    // Create new li element
    const li = document.createElement('li')
    console.log(li)

    // Add class
    li.className = 'list-group-item'

    // Add text node
    li.appendChild(document.createTextNode(newItem))

    itemList.appendChild(li)

    // Create del button element
    const deleteButton = document.createElement('button')
    console.log(deleteButton)

    // Add class to del button element
    deleteButton.className = 'btn btn-danger btn-sm float-right delete'

    // Add text node
    deleteButton.appendChild(document.createTextNode('X'))

    // Append button to li
    li.appendChild(deleteButton)

    // Append li to list
    itemList.appendChild(li)
}

// Remove Item

function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    const text = e.target.value.toLowerCase()

    // Get list
    const items = itemList.getElementsByTagName('li')

    // Convert to an array
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}
