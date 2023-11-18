const s1 = 'Hello'
console.log(typeof s1)

const s2 = new String('Hello')
console.log(typeof s2)

console.log(window)
console.log(navigator.appVersion)

// Main Lesson starts here
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: 2023,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book2 = {
    title: 'Book One',
    author: 'Jane Doe',
    year: 2022,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book1.getSummary())

console.log(Object.keys(book2))
console.log(Object.values(book2))