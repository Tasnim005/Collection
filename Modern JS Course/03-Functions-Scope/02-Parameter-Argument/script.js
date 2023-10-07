const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Parameter & Argument"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Lesson starts from here
// Default Parameter
function registerUser(user = 'Bot'){
    // if(!user){
    //     user = 'Bot' //Old Approach
    // }

    return user + ' is registered'
}

console.log(registerUser('John'))

// Rest Parameter
function sum(...numbers){
    // return numbers
    let total = 0
    for (const num of numbers){
        total += num
    }

    return total
}
console.log(sum(1,2,3, 100))

// Object As Parameter
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`
}

const user = {
    id:1,
    name: 'John'
}

console.log(loginUser(user))

// Array As Parameter
function getRandomNumber(arr){
    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex]
    console.log(item)
}

getRandomNumber([10,22,33])