const fs = require('fs')

const content = 'Hello from Node.js!'

fs.writeFile('output.txt', content, 'utf8', (err)=>{
    if(err){ 
        console.error(err)
        return
    }
    console.log('File written successfully')
})
// 'output.txt' file didn't exist before. It was created.

// Writing to an existing file that contains text
const newText = 'New Text' //existing text has been replaced with new text

fs.writeFile('existing.txt', newText, 'utf8', (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('File written successfully')
})