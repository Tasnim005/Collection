const fs = require('fs')

// Reading a File
fs.readFile('dummy.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return; //By including a return statement after logging the error, you prevent the execution of the remaining code in the callback. 
    }
    console.log(data);
});

// The second parameter, 'utf8', specifies the file encoding. If you omit it, the raw buffer will be returned.

fs.readFile('index.html', 'utf8', (err,data)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(data)
})