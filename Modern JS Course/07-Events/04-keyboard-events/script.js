const itemInput = document.getElementById('item-input')

const onKeyPress = (e) => {
  console.log('keypress');
}

const onKeyUp = (e) => {
  console.log('key up');
}

const onKeyDown = (e) => {
  // key
  console.log(e.key);
  document.querySelector('h1').innerText = e.key

  if (e.key === 'Enter') {
    alert('You pressed enter')
  }

  //Keycode
  // https://www.toptal.com/developers/keycode/table-of-all-keycodes

  if (e.keycode == 13) {
    alert('You pressed enter')
  }

  // Code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down' + e.key);
  }

  console.log(`Shift: ${e.shiftKey}`);
  console.log(`Control: ${e.controlKey}`);
  console.log(`Alt: ${e.altKey}`);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + k');

  }
}



// itemInput.addEventListener('keypress', onKeyPress)
itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keyup', onKeyDown)