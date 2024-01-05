import {URL} from 'url'

// The URL class automatically handles Punycode encoding and decoding for internationalized domain names (IDNs).
const myURL = new URL('https://測試')
console.log(myURL)