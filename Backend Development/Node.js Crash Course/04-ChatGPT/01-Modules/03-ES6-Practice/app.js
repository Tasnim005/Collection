// import { mkdir, readdir, rmdir } from 'fs';

// // Creating a directory
// mkdir('newDirectory', (err) => {
//     if (err) throw err;
//     console.log('New Directory Created.');

//     // Reading the contents of a directory
//     readdir('newDirectory', (err, files) => {
//         if (err) throw err;
//         console.log('Files in the directory:', files);

//         // Removing the directory
//         rmdir('newDirectory', (err) => {
//             if (err) throw err;
//             console.log('Directory Removed.');
//         });
//     });
// });

import {existsSync, mkdir, readFile, readdir, rename, rmdir, stat, unlink, writeFile} from 'fs'

// Reading file
readFile('dummy.txt', 'utf8', (err, data)=>{
    if(err) throw err
    console.log(data)
})

// Writing File
const content = 'Hello from Node.js'

writeFile('file.txt', content, 'utf8', (err)=>{
    if(err) throw err
    console.log('New File written successfully')
})

// Creating directory
mkdir('newDirectory', (err)=>{
    if(err) throw err
    console.log('New Directory Added')
})

mkdir('newDirectory2', (err)=>{
    if(err) throw err
    console.log('New Directory 2 Added')
})

// Reading Directory
const directoryPath = 'E:/Codes/Node.js Crash Course/04-ChatGPT'

readdir(directoryPath, (err, files)=>{
    if(err) throw err
    console.log('Files in the directory', files)
})

// Checking if files and Directory exist
const filePath = 'dummy.txt'
const dirPath = 'E:/Codes/Node.js Crash Course'

console.log(existsSync(filePath))
console.log(existsSync(dirPath))

// Deleting File
unlink('file.txt', (err)=>{
    if(err) throw err
    console.log('File deleted')
})

// Deleting Directory
rmdir('newDirectory2', (err)=>{
    if(err) throw err
    console.log('Directory 2 removed')
})

// Renaming Directory
rename('newDirectory', 'Directory-1', (err)=>{
    if(err) throw err
    console.log('Directory renamed')
})

// Stat
stat('E:/Codes/Node.js Crash Course', (err, stats)=>{
    if(err) throw err
    console.log('File information:', stats);
})