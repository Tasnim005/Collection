// WHATWG - Web Hypertext Application Technology Working Group 

// WHATWG is a community of people interested in evolving HTML and related technologies. The WHATWG was founded by individuals from Apple Inc., the Mozilla Foundation and Opera Software, leading Web browser vendors in 2004

import {URL} from 'url'

const urlString = 'https://www.example.com/path/to/page?query=123#section'

const myURL = new URL(urlString)

console.log(myURL)

// WHATWG URL standard is a more modern and versatile way to handle URL