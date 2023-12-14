// To load the module, we use the 'require()' function. This is one of the functions in Node that we don't have in browsers.

//This function takes one argument and that's the name or path of the target module we want to load. Here, we want to load the 'logger' module.

//We can see both the 'app' module and 'logger' module are in the same folder so, we use period slash to indicate the current folder and then we add the name of our module that is 'logger.js' or we can make it shorter and just use 'logger' because node assumes this is a JavaScript file.

const logger = require('./logger')
console.log(logger)

logger.log('Hello world')

// Since we exported a single function, we may write: logger('Hello world')
