const fs = require('fs')

// fs.mkdir('newDirectory', (err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log('New Directory Added')
// })

fs.rmdir('newDirectory', (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log('Directory removed successfully.');
})