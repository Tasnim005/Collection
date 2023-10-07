var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    
});

// Lesson starts from here

// Primitive Data Type: Strings, Number, Boolean, Null, Undefined, Symbol, BigInt
// https://youtube.com/clip/UgkxnWshnNDMpFXHLwkeerBLoafkxIjnZHVL?feature=shared, https://youtube.com/clip/UgkxtS8Hy5kFQgLqN_FscKjR-MDKVi914SBF?feature=shared


// Reference Types(Objects) --> Object literals, arrays and functions
// https://youtube.com/clip/UgkxHgWeViXfiFieVp5uClytJxJZL70IUnwP?feature=shared

// String
const firstName = 'Sara'

// Number
const age = 30

// Boolean
const hasKids = true

// Null
const aptNumber = null
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

// Undefined
// let score
const score = undefined

// Symbol
const id = Symbol('id')

//BigInt
const n =9875525344551661n

// Reference Types
const numbers = [1,2,3,4,5]

const person={
    name: 'Tasnim',
}

function sayHello(){
    console.log('Hello')
}

const output = sayHello
console.log(output, typeof output)

// https://262.ecma-international.org/5.1/#Sec-11.3.3