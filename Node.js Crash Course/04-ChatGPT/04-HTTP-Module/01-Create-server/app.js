import { createServer } from 'http'

const server = createServer((request, response)=>{
    if(request.url === '/'){
        response.setHeader('Content-Type', 'text/plain');
        response.write('Hello World')
        response.end()
    }

    if(request.url === '/info'){
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({
            name: 'Tasnim Alam',
            age: 18
        }))

        response.end()
    }
})

server.listen(3000)

console.log('Listening on port 3000...')
