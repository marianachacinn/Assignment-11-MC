Task 1: Creating a Book Class
Scenario:
You are developing a Library Management System and need to create a Book class to represent books in the library.

Requirements:
Create a class Book with the following properties:

title (string)
author (string)
isbn (number)
copies (number)
Add a method getDetails() that returns a formatted string of book details.

Add a method updateCopies(quantity) that modifies the available copies when a book is borrowed or returned.

Test Cases:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
Submission:
Commit your changes to GitHub with the message:
📌 "Task 1 - Created Book Class"

Task 2: Creating a Borrower Class
Scenario:
Library members can borrow books, and the system needs to track them.

Requirements:
Create a class Borrower with the following properties:

name (string)
borrowerId (number)
borrowedBooks (array of borrowed book titles)
Add a method borrowBook(book) that adds a book title to borrowedBooks.

Add a method returnBook(book) that removes the book from borrowedBooks.

Test Cases:
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []
Submission:
Commit your changes to GitHub with the message:
📌 "Task 2 - Created Borrower Class"

Task 3: Creating a Library Class
Scenario:
The library needs to keep track of multiple books and borrowers.

Requirements:
Create a class Library with:

books (array of Book instances)
borrowers (array of Borrower instances)
Add methods:

addBook(book): Adds a new book to the library.
listBooks(): Logs all books' details.
Test Cases:
const library = new Library();
library.addBook(book1);
library.listBooks();
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
Submission:
Commit your changes to GitHub with the message:
📌 "Task 3 - Created Library Class"

Task 4: Implementing Book Borrowing
Scenario:
The system should allow members to borrow books if they are available.

Requirements:
Add a method lendBook(borrowerId, isbn) in the Library class:
Checks if the book exists and has available copies.
Reduces the book’s copies by 1.
Updates the borrower's borrowedBooks list.
Test Cases:
library.lendBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]
Submission:
Commit your changes to GitHub with the message:
📌 "Task 4 - Implemented Book Borrowing"

Task 5: Implementing Book Returns
Scenario:
Borrowers need to return books, and the system should update availability.

Requirements:
Add a method returnBook(borrowerId, isbn) in the Library class:
Increases the book’s available copies.
Removes the book from the borrower’s borrowed list.
Test Cases:
library.returnBook(201, 123456);
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Expected output: []
Submission:
Commit your changes to GitHub with the message:
📌 "Task 5 - Implemented Book Returns"