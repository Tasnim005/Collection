const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Else if & Nesting"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const d = new Date(10, 30, 2022, 6, 0, 0)
const hour = d.getHours()

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');

}
else {
    console.log('Good Night');

}

// Nested if
if (hour < 12) {
    console.log('Good Morning');
    if (hour === 6) {
        console.log('Wake up!');

    }

} else if (hour < 18) {
    console.log('Good Afternoon');

}
else {
    console.log('Good Night');
    if (hour >= 20) {
        console.log('zzzzzz');

    }
}

// Multiple conditions in a single if statement
if(hour>=7 && hour<15){
    console.log('It is work day');
}

if(hour===6 || hour===20){
    console.log('Brush your teeth');
}