const theme = document.querySelector('.theme');
const circle = document.querySelector('.circle');
console.log(circle);

theme.addEventListener('click', themeChange);

function themeChange() {
  circle.classList.toggle('clicked');
  document.body.classList.toggle('lightTheme')
}