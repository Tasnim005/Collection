const box = document.getElementById('box');
const ball = document.getElementById('ball');

/*
let position = 0;

function animate() {
  position++;
  box.style.left = position + 'px';

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
*/

// Box
let position = 0;
let moveRight = true;

function animate() {
  if (moveRight) {
    position++;
    box.style.left = position + 'px';

    if (position >= window.innerWidth - box.offsetWidth) {
      moveRight = false;
    }
  } else {
    position--;
    box.style.left = position + 'px';

    if (position <= 0) {
      moveRight = true;
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Ball
// let position = 0;
let rotation = 0;
// let moveRight = true;

function animateBall() {
  if (moveRight) {
    position++;
    rotation += 3; // Adjust the rotation speed as needed
  } else {
    position--;
    rotation -= 3; // Adjust the rotation speed as needed
  }

  ball.style.left = position + 'px';
  ball.style.transform = `rotate(${rotation}deg)`;

  if (position >= window.innerWidth - ball.offsetWidth) {
    moveRight = false;
  } else if (position <= 0) {
    moveRight = true;
  }

  requestAnimationFrame(animateBall);
}

requestAnimationFrame(animateBall);