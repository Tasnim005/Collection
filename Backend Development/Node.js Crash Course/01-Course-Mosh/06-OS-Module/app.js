const os = require('node:os');
const { uptime } = require('node:process');

const totalMemory = os.totalmem()
const freeMemory = os.freemem()

const osName = os.type()
const osVersion = os.version()
// console.log(os.cpus())
const processorName = os.cpus()[0].model

const time = os.uptime()
const networkInterface = os.networkInterfaces()

// console.log(os)
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

console.log(`Name of OS: ${osName}`)
console.log(`Version: ${osVersion}`)
console.log(processorName)

console.log(`This device has been active for ${time} seconds`)
console.log(networkInterface)

