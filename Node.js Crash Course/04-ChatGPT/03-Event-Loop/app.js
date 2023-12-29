import { writeFile } from 'fs'

console.log('Start writing file...')

writeFile('file.txt', 'Hello from Node.js', 'utf8', (err)=>{
    if(err) throw err
    console.log('File written successfully')
})

console.log('File writing request initiated...');