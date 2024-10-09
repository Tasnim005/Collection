const slides = document.querySelectorAll('.slide')

const prevButton = document.querySelectorAll('.backward');
const nextButton = document.querySelectorAll('.forward');

let i = 0;

// Initially, apply the 'active' class to the first testimonial
slides[i].classList.add('active');

// Automatically move slides every 3 seconds
const interval = 6000; // 6 seconds
setInterval(forward, interval);

/*
nextButton.forEach((item) => {
    item.addEventListener('click', forward);
})

prevButton.forEach((item) => {
    item.addEventListener('click', backward);
})
*/


function forward() {
    // Remove 'active' class from the current testimonial
    slides[i].classList.remove('active');
    i++;

    // Check if index is out of bounds and reset it to 0 if necessary
    if (i >= slides.length) {
        i = 0;
    }

    // Add 'active' class to the next testimonial
    slides[i].classList.add('active');
}

function backward() {
    // Remove 'active' class from the current testimonial
    slides[i].classList.remove('active');
    i--;

    // Check if index is out of bounds and set it to the last testimonial if necessary
    if (i < 0) {
        i = slides.length - 1;
    }

    // Add 'active' class to the previous testimonial
    slides[i].classList.add('active');
}

