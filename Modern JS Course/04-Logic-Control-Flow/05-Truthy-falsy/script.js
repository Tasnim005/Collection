const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Truthy & Falsy Values"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const email = 'test@test.com'

if (email) {
    console.log('You passed in an email');

}
console.log(Boolean(email));

/* 6 falsy Values*/
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = '0'
if(x){
    console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0

// if(children) //This will result an error if no of children is 0 since 0 is a falsy value. Don't be confused with '0' zero in a string. It will show 2nd statement though we already entered children no is 0.

if(children !==undefined)
// if(!isNaN(children)) //These are 2 alternatives
{
    console.log(`You have ${children} children`);
} else{
    console.log('Please enter number of children');

}

// Checking For Empty Arrays
const posts = [] //Empty array is truthy value. So 2nd statement won't work

// if(posts) //This won't function properly
if(posts.length>0){
    console.log('List Posts');
}else{
    console.log('No post to list');
}

// Checking For Empty Objects
const user = {
    name: 'Brad',
};

// if(user)
if(Object.keys(user).length>0)
{
    console.log('List User');
}else{
    console.log('No user');
}

// Loose Equality
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

// To get away with it, we will use strict equality to check types as well
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);

