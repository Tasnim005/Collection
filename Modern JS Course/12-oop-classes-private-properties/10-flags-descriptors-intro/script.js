//Getting Property Descriptors:
const obj = { key: 'value' };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'key');
console.log(obj)
console.log(descriptor);

// Example
const myObj = {
    name: 'John',
}
const myObjDescriptor = Object.getOwnPropertyDescriptor(myObj, 'name')

console.log(myObj)
console.log(myObjDescriptor)

// Setting Property Descriptors:
const obj3 = {}
Object.defineProperty(obj3, 'key', {
    value: 'value',
    writable: true,
    enumerable: true,
    configurable: true,
})

const obj3Descriptor = Object.getOwnPropertyDescriptor(obj3, 'key')
console.log(obj3Descriptor)

// Flags Example:
console.log(descriptor.writable)
console.log(descriptor.enumerable)