import {URL} from 'url'

const myURL1 = new URL('https://user:pass@example.com')
// In a URL, the username and password information is typically included in the authority component, which appears after the protocol (e.g., "https://") and before the path or query. The authority component is often specified as "username:password@hostname."

//In the WHATWG URL standard used by the URL class in Node.js, the username and password properties are provided to access the username and password parts of the authority component. The authority component is separated from the path by the first occurrence of '/' or the end of the URL.

console.log(myURL1)
console.log(myURL1.username)
console.log(myURL1.password)
// The password portion, if present, will end before the '@' character, and the '@' character itself is not included in the password property.


const myURL2 = new URL('https://user:pass@www.example.com')

console.log(myURL2)
console.log(myURL2.username)
console.log(myURL2.password)