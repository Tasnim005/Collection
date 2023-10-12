// querySelectorAll()

const listItems = document.querySelectorAll('.item')
console.log(listItems);
console.log(listItems[1].innerText);

/*listItems.forEach((item, index)=>{
    item.style.color = 'red'

    if(index === 1){
        item.remove()
    }

    if(index === 0){
        item.innerHTML = `Oranges
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`
    }

})*/

const listItem2 = document.getElementsByClassName('item')
console.log(listItem2);
console.log(listItem2[2].innerText);

// listItem2.forEach((item)=>{
//     console.log(item.innerText);
// })

// HTML Collection is not the same as Node List & isn't an array. Higher order array methods can't be applied here

// Covert HTML Collection into array
const listItemsArray = Array.from(listItem2)

listItemsArray.forEach((item)=>{
    console.log(item.innerText);
})

const listItem3 = document.getElementsByTagName('li')
// getElementsByTagName() will give an HTML Collection as well

console.log(listItem3);
console.log(listItem3[0].innerText);
