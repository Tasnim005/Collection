// In the client-side JS that we run inside of our browsers, when we declare a variable or a function that is added to global scope and it's available via the window object

// var sayHello = function(){
//     console.log('Hello World')
// }

// window.sayHello()

// There is a problem with this behavior in a real world application where we often split our JavaScript code into multiple files. So, it is possible that we have two files and in both these files we define this function sayHello() with the exact same name because this function is added to the global scope when we define this function in another file that new definition is going to overwrite the previous definition. That's the problem with the global scope.

// So, in order to build reliable and maintainable applications, we should avoid defining variables and functions in the global scope instead we need 'modularity' we need to create small building blocks or modules where we define our variables and functions so two variables or two functions with the same name don't overwrite another variable or function defined somewhere else.


// Every file in a node application is considered a module the variables and functions would define in that file or that module are scoped to that file. In OOP terms, we say they are private. They are not available outside that module.

// if you want to use a variable or a function defined in a module outside that module you need to explicitly 'export' it and make it 'public'. 

// Every node application has at least one file or one module which we call a 'main module'. so in this case is 'app.js' is our main module.

console.log(module)


// This 'module' object above may appear to be 'global' but actually this is not a global object 

//***To summarise, in node every file is a module and the variables and functions defined in that file are scoped to that module they are not available outside of that module.

