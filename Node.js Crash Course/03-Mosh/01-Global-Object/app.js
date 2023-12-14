console.log()  // global

// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

// In browsers, we have 'Window' object that represents a global scope

window.console.log()
//  All these functions above belong to the window object. Even we usually don't write window at the beginning browsers automatically does it for us.

window.setTimeout()

var message = ''
window.message // This variable is also available via the window object

// *** However, in Node, we don't have window object instead we have 'global' object. So, all these functions and objects we have here via the global object
global.setTimeout()

// *** It is to be noted that, the variables we define here are not added to global object

// In other words, if we write console.log(global.message); we are going to see undefined in the console
console.log(global.message)



