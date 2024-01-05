import {URL} from 'url'

const myURL = new URL('https://user:pass@www.example.com/path/to/page/1?key1=value1#access')

myURL.searchParams.set('key2', 'value2')

console.log(myURL)
console.log(myURL.href)