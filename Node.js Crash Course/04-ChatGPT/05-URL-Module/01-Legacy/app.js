//  Legacy URL module 

import {parse} from 'url'

const urlString = 'https://www.example.com/path/to/page?query=123#section';

const parsedUrl = parse(urlString, true)

console.log(parsedUrl)
console.log(parsedUrl.href)
console.log(parsedUrl.protocol)
console.log(parsedUrl.pathname)
console.log(parsedUrl.hash)
console.log(parsedUrl.query)
