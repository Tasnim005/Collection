import express from "express";
const app = express()

app.get('/', (req, res)=>{
    console.log('Here')
    
    // To download the file we are working in
    res.download('E:/Codes/Backend Development/Express Crash Course/01-Web-Dev-Simplified/03-Downloading-file/app.js')
})

app.listen(3000)
