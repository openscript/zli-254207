import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

let books = [
  { isbn: "9780747532743", title: "Harry Potter and the Philosopher's Stone", year: 1997, author: "J.K. Rowling" },
  { isbn: "9780439064873", title: "Harry Potter and the Chamber of Secrets", year: 1998, author: "J.K. Rowling" },
  { isbn: "9780261103573", title: "The Lord of the Rings", year: 1954, author: "J.R.R. Tolkien" },
  { isbn: "9780316769488", title: "The Catcher in the Rye", year: 1951, author: "J.D. Salinger" },
  { isbn: "9780061120084", title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee" },
  { isbn: "9780451524935", title: "1984", year: 1949, author: "George Orwell" },
  { isbn: "9780141439600", title: "Pride and Prejudice", year: 1813, author: "Jane Austen" },
  { isbn: "9780553386790", title: "A Brief History of Time", year: 1988, author: "Stephen Hawking" },
  { isbn: "9780307277671", title: "The Road", year: 2006, author: "Cormac McCarthy" },
  { isbn: "9780385504201", title: "The Da Vinci Code", year: 2003, author: "Dan Brown" }
];

app.get('/books', (_request, response) => {
  response.send(books);
});

app.get(`/books/:isbn`, (request, response) => {
  const book = books.find((b) => b.isbn === request.params.isbn);
  response.send(book);
});

app.post('/books', (request, response) => {
  books = [...books, request.body];
  response.status(201).send(books);
});

app.put(`/books/:isbn`, (request, response) => {
  if (!books.find((b) => b.isbn === request.params.isbn)) {
    return response.sendStatus(409);
  }
  books = books.map((b) => {
    if(b.isbn === request.params.isbn) {
      return request.body;
    } else {
      return b;
    }
  });
  response.send(books);
});

app.delete(`/books/:isbn`, (request, response) => {
  books = books.filter((b) => b.isbn !== request.params.isbn);
  response.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Book server on port ${port}`);
});