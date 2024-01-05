const fs = require('fs')

// fs.rename(oldPath, newPath, callback):
fs.rename('oldFile.txt', 'newFile.txt', (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('File renamed successfully.');
})