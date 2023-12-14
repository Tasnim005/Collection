const EventEmitter = require('events')
// Instantiate
const emitter = new EventEmitter()

// Register a listener
emitter.on('messageLogged', function(e){
    console.log('Listener called', e)
})

// Raise an event
emitter.emit('messageLogged', {id:1, url: 'http://'})

// Raise: logging(data: message)