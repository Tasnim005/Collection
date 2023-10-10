const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "For...in Loops"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const colorObj = {
    color1:'red',
    color2:'blue',
    color3:'green',
    color4:'yellow',
}

for(const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'blue', 'green', 'yellow']

for(const color in colorArr){
    console.log(color);
}
for(const key in colorArr){
    console.log(colorArr[key]);
}