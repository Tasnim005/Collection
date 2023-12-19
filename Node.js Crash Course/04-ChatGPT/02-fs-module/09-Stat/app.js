const fs = require('fs')

// fs.stat(path, callback):
fs.stat('file.txt', (err, stats)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('File information:', stats);
})