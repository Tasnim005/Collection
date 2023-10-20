const listItems = document.querySelectorAll('li')

// Add an event listener on all items
// listItems.forEach((item)=>{
//     item.addEventListener('click', (e)=>{
//         e.target.remove()
//     })
// })

// Add a single event listener on the parent (Event Delegation)
const list = document.querySelector('ul')
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });
  
  list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.style.color = 'red';
    }
  });