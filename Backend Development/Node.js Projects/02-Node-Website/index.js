import { readFile } from 'fs'
import { createServer } from 'http'

const server = createServer((req, res)=>{
    if(req.url === '/'){
        readFile('index.html', 'utf8', (err, data)=>{
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else if(req.url === '/about'){
        readFile('about.html', 'utf8', (err, data)=>{
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else if(req.url === '/contact-me'){
        readFile('contact-me.html', 'utf8', (err, data)=>{
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else{
        readFile('404.html', 'utf8', (err, data)=>{
            if(err) throw err
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }
})

const port = 8080

server.listen(port, ()=>{
    console.log(`Server listening on Port ${port}`)
})