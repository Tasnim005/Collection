import {URL} from 'url'

// Constructing a WHATWG URL from component parts using property setters:
const myURL1 = new URL('https://www.example.org')
myURL1.pathname = '/path/to/page'
myURL1.hash = '#section'
myURL1.search = '?query=age'

console.log(myURL1)

// Constructing a WHATWG URL from component parts using a template literal string:

const pathname = '/goto/page/1'
const search = '?query=a'
const hash = '#contact'

const myURL2 = new URL(`https://www.tasnim.org${pathname}${search}${hash}`)

console.log(myURL2)
