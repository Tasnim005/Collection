function removeClearButton() {
    // const clearBtn = document.querySelector('#clear');
    // clearBtn.remove();

    document.querySelector('#clear').remove()
}

removeClearButton()


// function removeFirstItem(){
//     const ul =document.querySelector('ul')
//     const li = document.querySelector('li:first-child')

//     ul.removeChild(li)
// }
// removeFirstItem()


// function removeItem(index){
//     const ul =document.querySelector('ul')
//     const li = document.querySelector(`li:nth-child(${index})`)

//     ul.removeChild(li)
// }
// removeItem(1)


function removeItem2(index) {
    const ul = document.querySelector('ul')
    const li = document.querySelectorAll('li')[index - 1]

    ul.removeChild(li)
}
removeItem2(1)


function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li')
    li[itemNumber - 1].remove()
}
removeItem3(2)