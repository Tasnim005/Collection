const fs = require('fs')

const fileExists = fs.existsSync('dummy.txt');
const directoryExists = fs.existsSync('E:/Codes/Node.js Crash Course/04-ChatGPT');

console.log(fileExists)
console.log(directoryExists)

// However, note that using existsSync is synchronous and may block the event loop. Consider using asynchronous methods in most cases.