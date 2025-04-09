import express from 'express';
import session from 'express-session';
import authentication from './authentication.js';
import books from './books.js';
import lends from './lends.js';

const app = express();

app.use(session({ secret: "YdwhZjyZVVjRoq5ssn7Ktf2KPXhh7eAHfV3WfQvmZ", resave: false, saveUninitialized: true }));
app.use(express.json());
app.use('/', authentication);
app.use('/books', books);
app.use('/lends', lends);

const port = 3000;

app.listen(port, () => {
    console.log(`Book server on port ${port}`);
});