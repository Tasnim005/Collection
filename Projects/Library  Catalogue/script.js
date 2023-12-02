class Book{
    constructor(title, author, genre, availability){
        this.title = title
        this.author = author
        this.genre = genre
        this.availability = availability
    }

    get displayInfo(){
        console.log(`${this.title} by ${this.author} (${this.genre})`) 
    }
}

const book1 = new Book('1984', 'George Orwell', 'Dystopian', true);
console.log(book1)
book1.displayInfo

class Library{
    constructor(){
        this.books= []
    }

    addBooks(book){
        this.books.push(book)
    }
}

const bookCollection = new Library()

bookCollection.addBooks(book1)

console.log(bookCollection)