// Constructor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year

    // In this case, getSummary will be stored in the object itself
    // this.getSummary = function(){
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
} // In this case, getSummary will be stored in the prototype

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} old`
}

// Revise / Change Year
Book.prototype.revise = function(newYear){
   this.year = newYear
   this.revised = true
}


// Instantiate an object
const book1 = new Book('Book One', 'John Doe', '2013')
const book2 = new Book('Book Two', 'Jane Doe', '2010')

console.log(book1)
console.log(book2.getSummary())
console.log(book2.getAge())

console.log(book2)
book2.revise('2018')
console.log(book2)