// The url.resolve() method is used to resolve a relative URL against a base URL:

import {resolve} from 'url'

const baseURL1 = 'https://www.example.com/base'
const relativepath1 = '/path/to/page'

const resolvedURL1 = resolve(baseURL1, relativepath1)
console.log(resolvedURL1)

// Using URL Constructor:

import { URL } from 'url'

const baseURL2 = 'https://www.example.com/base'
const relativepath2 = '/page/2'

const resolvedURL2 = new URL(relativepath2, baseURL2)

console.log(resolvedURL2)
console.log(resolvedURL2.href)
console.log(resolvedURL2.toString())