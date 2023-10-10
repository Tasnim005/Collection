const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Ternary Operator"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
const age = 17

// Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');
;

// Assigning a conditional value to a variable
const canVote = age>=18 ? true :false
const canVote2 = age>=18 ? 'You can vote' : 'You cannot vote'

console.log(canVote);
console.log(canVote2);

// Multiple Statements

const auth = false

/*let redirect

if(auth){
    alert('Welcome to dashboard')
    redirect= '/dashboard'
}else{
    alert('Access Denied')
    redirect= '/login'
}
*/

const redirect = auth ? (alert('Welcome to dashboard'),'/dashboard'): (alert('Access Denied'), '/login')

console.log(redirect);

// If there is no else
auth ? console.log('Welcome to the dashboard') : null

// Alternative
auth && console.log('Welcome to the dashboard')
