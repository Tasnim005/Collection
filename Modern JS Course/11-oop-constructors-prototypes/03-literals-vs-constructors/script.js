const stringLiteral = 'hello'
const stringObject = new String('hello')

console.log(stringLiteral, typeof stringLiteral)
console.log(stringObject, typeof stringObject)

//Boxing
console.log(stringLiteral.toUpperCase())

// Even though the stringLiteral variable is a string literal for a primitive type, it can still use the toUpperCase() method because the string literal is converted to a String object behind the scenes. This is called boxing.
console.log(stringLiteral[0]);

// Unboxing
console.log(stringObject.valueOf(), typeof stringObject.valueOf());

console.log(stringLiteral.constructor)
console.log(stringObject.constructor)

// The instanceof operator returns true if an object is an instance of a constructor. It returns false if it is a literal.

console.log(stringLiteral instanceof String)
console.log(stringObject instanceof String)

// Other types
const numLit = 20
const numObj = new Number(20)

console.log(numLit, typeof numLit)
console.log(numObj, typeof numObj)


const boolLit = true
const boolObj = new Boolean(true)

console.log(boolLit, typeof boolLit)
console.log(boolObj, typeof boolObj)


const arrLit = [1, 2, 3, 4, 5]
const arrObj = new Array(1, 2, 3, 4, 5)

console.log(arrLit, typeof arrLit)
console.log(arrObj, typeof arrObj)


const funcLit = function(x){
  return x*x
}

console.log(funcLit, typeof funcLit);
console.log(funcLit(5));

const funcObj = new Function('x', 'return x*x')

// We can execute the function created with the Function constructor
console.log(funcObj(3));

const obj1 = {};
const obj2 = new Object(); // Behind the scenes, JS does this for the previous line as well

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);