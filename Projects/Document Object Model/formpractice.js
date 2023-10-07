const form = document.querySelector('form')
const list = document.getElementById('items')

form.addEventListener('submit', addItem)
list.addEventListener('click', removeItem)

function addItem(e){
    e.preventDefault()
    const inputText = document.getElementById('item').value

    const newListItem = document.createElement('li')
    newListItem.className = 'list-group-item'
    newListItem.append(inputText)
    list.append(newListItem)

    const button = document.createElement('button')
    button.className= 'btn btn-danger btn-sm float-right delete'
    button.append(document.createTextNode('X'))
    newListItem.append(button)
}

function removeItem(e){
    console.log(e)
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement
            list.removeChild(li)
        }
    }
}