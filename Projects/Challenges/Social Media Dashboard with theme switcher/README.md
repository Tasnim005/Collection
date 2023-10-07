# Frontend Mentor - Social media dashboard with theme switcher 

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](images/desktop-dark.png)
![](images/desktop-light.png)


### Links

- Solution URL: [Repository]()
- Live Site URL: [Live preview]()

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid

### What I learned

```js
const theme = document.querySelector('.theme');
const circle = document.querySelector('.circle');
theme.addEventListener('click', themeChange);

function themeChange() {
  circle.classList.toggle('clicked');
  document.body.classList.toggle('lightTheme')

}
```

## Author
- Website - [Tasnim Alam](https://github.com/Tasnim005)
- Frontend Mentor - [Tasnim005](https://www.frontendmentor.io/profile/Tasnim005)


