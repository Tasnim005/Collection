import {URL} from 'url'

const myURL = new URL('https://www.Example.org', 'https://www.example.com')

console.log(myURL.href)