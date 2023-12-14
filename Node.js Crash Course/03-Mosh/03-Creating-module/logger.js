const url = 'http://mylogger.io/log'

function log(message){
    // Send an HTTP request
    console.log(message)
}

module.exports.log = log
// module.exports.endPoint = url

// If we want to export a single function, we may write: 'module.exports= log'