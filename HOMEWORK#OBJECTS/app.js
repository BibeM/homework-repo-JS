console.log("It is working!");
/*
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
*/
class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }

  speak(message) {
    console.log(
      `${this.name} is a ${this.kind}. It is a very nice ${this.kind}. "${message}" - always says when we met.`
    );
  }
}
const rabbit = new Animal("Bunny", "rabbit");
rabbit.speak(`Hello, I'm so happy to see you!`);

/*
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
*/

const bookTitle = prompt("Enter the title of the book!");
const bookAuthor = prompt("Enter the name of the book author!");
const readingStatus = confirm("Do you read this book?");

class Book {
  constructor(bookTitle, bookAuthor, readingStatus) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.readingStatus = readingStatus;
  }
  checkReadingStatus() {
    if (this.readingStatus)
      return `${bookTitle} writen by ${bookAuthor} is a very interesting book, don't you agree?`;

    return `You must read ${bookTitle} from ${bookAuthor} !`;
  }
}
const someBook = new Book(bookTitle, bookAuthor, readingStatus);
console.log(someBook.checkReadingStatus());
