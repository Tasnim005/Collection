const fs = require('fs')

// Synchronous form
const files = fs.readdirSync('./')
console.log(files)

// Asynchronous form
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Result', files)
})

// To show an error, change path
fs.readdir('$', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Result', files)
})