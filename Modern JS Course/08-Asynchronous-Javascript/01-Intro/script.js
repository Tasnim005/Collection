// Synchronous JS- In synchronous code, one operation must complete before the next one starts. This means that when a piece of code is executing, it can block the entire application and prevent other code from running until it's finished. 

console.log(" I ");
console.log(" eat ");
// console.log(" ice cream ");

setTimeout(()=>{
    console.log(" ice cream ");
},4000) //ice cream will be printed in the console 4 seconds later

console.log(" with a ");
console.log(" spoon ");


