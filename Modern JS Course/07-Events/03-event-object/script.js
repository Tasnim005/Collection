/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case)
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

const logo = document.querySelector('img')

function onClick(event) {
  console.log(event);

  console.log(event.target);
  console.log(event.currentTarget);
  event.target.style.backgroundColor = 'black'

  console.log(event.timeStamp);

  console.log(event.clientX);
  console.log(event.clientY);
  console.log(event.offsetX);
  console.log(event.offsetY);

  console.log(event.pageX);
  console.log(event.pageY);
  console.log(event.screenX);
  console.log(event.screenY);
}

function onDrag(e){
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`
}


logo.addEventListener('click', onClick)
logo.addEventListener('drag', onDrag)

// Difference between target and currentTarget
/*
document.body.addEventListener('click', function(){
  console.log(event.target);
  console.log(event.currentTarget);
})
*/