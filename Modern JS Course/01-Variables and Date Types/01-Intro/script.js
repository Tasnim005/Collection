// alert('Hello from JS file')
console.log('Hello', 20, true)
console.error('Alert')
console.warn('warning')

console.table({
    name: 'tasnim',
    email: 'tasnim@email.com',
})

console.group('simple')
console.log('Hello', 20, true)
console.error('Alert')
console.warn('warning')
console.groupEnd()


// Interesting
const styles = 'padding: 10px; background-color: white; color: green'

console.log('%chello world', styles)
