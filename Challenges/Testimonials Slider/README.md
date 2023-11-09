# Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Design preview for the Coding bootcamp testimonials slider coding challenge](./design/desktop-preview.jpg)



### Links

- Solution URL: [Repository](https://github.com/Tasnim005/Testimonials-Slider)
- Live Site URL: [Live Preview](https://tasnim005.github.io/Testimonials-Slider/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid

### What I learned

I learned how to build a slider using Vanilla JS


```js
const wrapper = document.querySelectorAll('.wrapper');
wrapper[i].classList.add('active');

nextButton.forEach((item)=>{
    item.addEventListener('click', forward);
})

prevButton.forEach((item)=>{
    item.addEventListener('click', backward);
})

function forward() {
    wrapper[i].classList.remove('active');
    i++;

    if (i >= wrapper.length) {
        i = 0;
    }
    wrapper[i].classList.add('active');
}

function backward() {
    wrapper[i].classList.remove('active');
    i--;

    if (i < 0) {
        i = wrapper.length - 1;
    }

    wrapper[i].classList.add('active');
}
```

## Author
- Website - [Tasnim Alam](https://github.com/Tasnim005)
- Frontend Mentor - [Tasnim005](https://www.frontendmentor.io/profile/Tasnim005)