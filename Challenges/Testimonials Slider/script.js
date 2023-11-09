const prevButton = document.querySelectorAll('#previous');
const nextButton = document.querySelectorAll('#next');

const wrapper = document.querySelectorAll('.wrapper');
let i = 0;

// Initially, apply the 'active' class to the first testimonial
wrapper[i].classList.add('active');

nextButton.forEach((item)=>{
    item.addEventListener('click', forward);
})

prevButton.forEach((item)=>{
    item.addEventListener('click', backward);
})



function forward() {
    // Remove 'active' class from the current testimonial
    wrapper[i].classList.remove('active');
    i++;

    // Check if index is out of bounds and reset it to 0 if necessary
    if (i >= wrapper.length) {
        i = 0;
    }

    // Add 'active' class to the next testimonial
    wrapper[i].classList.add('active');
}

function backward() {
    // Remove 'active' class from the current testimonial
    wrapper[i].classList.remove('active');
    i--;

    // Check if index is out of bounds and set it to the last testimonial if necessary
    if (i < 0) {
        i = wrapper.length - 1;
    }

    // Add 'active' class to the previous testimonial
    wrapper[i].classList.add('active');
}
