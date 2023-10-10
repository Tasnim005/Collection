const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Break and Continue Statements"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// Break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Break...');
        break;
    }
    console.log(i);
}

//Continue
for(let i=0; i<=20; i++){
    if(i===13){
        console.log('Skipping 13...');
        continue
    }

    console.log(i);
}