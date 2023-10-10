const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "for each( )"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']
console.log(socials.__proto__);

socials.forEach(function (item) {
    console.log(item);
})

// Using arrow function
socials.forEach((item) => console.log(item))

socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr))

function logSocials(social) {
    console.log(social);
}
socials.forEach(logSocials)

const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://Facebook.com' },
    { name: 'LinkedIn', url: 'https://LinkedIn.com' },
    { name: 'Instagram', url: 'https://Instagram.com' }
]

socialObjs.forEach((item)=> console.log(item.url))