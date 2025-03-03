//task 1
console.log ('Task 1: Creating a Book Class')
class Book {
    constructor(title, author, isbn, copies) { //properties for the class book
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() { //this is to return a string containing all properties in the class
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity) { //modifies quantity so that when a book is borrowed or return, the quantity changes
                this.copies += quantity;
    }
}//Test Cases:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//Task 2
console.log('Task 2: Creating a Borrower Class')
class Borrower { //System to track borrowed books
    constructor(name, borrowerId) { //properties for the class
        this.name = name; 
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(bookTitle) {//adds book title to borrowed books
        this.borrowedBooks.push(bookTitle);
    }
    returnBook(bookTitle) {//removes books from borrowed when returned
        this.borrowedBooks = this.borrowedBooks.filter(title => title !== bookTitle);
    }
}//Test Cases:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []

//task 3
console.log('Task 3: Creating a Library Class')
class Library { //libray for borrowed books and borrowers
    constructor() { //arrays for library
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {//to add new books to the library
        this.books.push(book);
    }
    listBooks() { //logs all book's details
        this.books.forEach(book => console.log(book.getDetails()));
    }
}//Test Cases:
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

//task 4
console.log('Task 4: Implementing Book Borrowing')
Library.prototype.lendBook = function (borrowerId, isbn) {
    const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);//check if the book exist
    const book = this.books.find(b => b.isbn === isbn);

    if (borrower && book && book.copies > 0) {// if found then it can be borrowed
        book.updateCopies(-1); //when borrowed then removes the book from inventory
        borrower.borrowBook(book.title);
    }
};//Test Cases:
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]