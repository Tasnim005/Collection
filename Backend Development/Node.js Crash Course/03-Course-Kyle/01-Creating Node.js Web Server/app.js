const http = require('http')
const fs = require('fs')
// fs has all the file handling that we need to do

const port = 3000

const server = http.createServer((req, res) => {
    // To send HTML instead of plain text 'hello node'
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not found')
        }else{
            res.write(data)
        }

        res.end()
    })

    //200 is a good status code that indicates everything went right

    // res.write('Hello Node')

    // When we want to end our response after writing everything, we will write:
    // res.end()
})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log(`Server is listening on port ${port}`)
    }
})