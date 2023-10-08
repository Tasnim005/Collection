const element = document.getElementById('typewriter');
const stringsToAnimate = ["Let's get started with", "Calculator Challenge"];

const options = {
    strings: stringsToAnimate,
    typeSpeed: 50,
    backSpeed: 25, // Speed of erasing/backspacing
    backDelay: 1000, // Delay between backspacing and typing the next string (in milliseconds)
    showCursor: false,
};

const typed = new Typed(element, options);

// Challenge
function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            console.log(num1+num2);
        break;   
        case '-':
            console.log(num1-num2);
        break;   
        case '*':
            console.log(num1*num2);
        break;   
        case '/':
            console.log(num1/num2);
        break;
        default:
            console.log("Error! That's not a valid operator");
               
    }
}

calculator(25, 15, '*')