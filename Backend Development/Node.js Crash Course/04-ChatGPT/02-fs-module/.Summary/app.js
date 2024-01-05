// Summary
const fs = require('fs')

// Reading file
fs.readFile('file.txt', 'utf8', (err, data)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(data)
})

// Writing a file
const content = 'Hello from Node.js'
fs.writeFile('newFile.txt', content, 'utf8', (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('New file added')
})

// Creating a directory
fs.mkdir('newDirectory', (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('New directory added')
})

// Reading a directory
const directoryAddress = 'E:/Codes/Node.js Crash Course/01-Course-Mosh'
fs.readdir(directoryAddress, (err, files)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('Files in the directory:', files);
})

// Checking if a file or directory exists
const fileExists = fs.existsSync('file.txt')
const directoryExists = fs.existsSync(directoryAddress)

console.log(fileExists)
console.log(directoryExists)
