const name = 'Tasnim'

function sayHello(){
    console.log('Hello from Node.js')
}

const country ={
    name: 'Bangladesh',
    capital: 'Dhaka',
    population: '200 millions'
}

console.log(country.name)

// sayHello()
module.exports = {
    name, sayHello, country
}

// You can't directly destructure a property from an object while exporting. Instead, you should export the entire object and then access the specific properties when you import the module.