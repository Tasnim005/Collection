import {appendFile} from 'fs'

const additionalContent = '\nThis content will be appended.'

appendFile('dummy.txt', additionalContent, 'utf8', (err)=>{
    if(err) throw err
    console.log('Data appended to the file.');
})