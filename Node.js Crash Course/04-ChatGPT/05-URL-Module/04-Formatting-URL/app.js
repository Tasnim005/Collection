// f you have a URL object and want to convert it back to a URL string, you can use the url.format() method:

import {format} from 'url'

const urlObject = {
    protocol: 'https',
    hostname: 'www.example.com',
    path: '/path/to/page',
    query: {query: '123'},
    hash: 'section'
}

const formattedURL = format(urlObject)
console.log(formattedURL)