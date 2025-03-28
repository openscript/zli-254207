import express from 'express';

const app = express();
const port = 3000;

app.get('/now', (_request, response) => {
    response.contentType('text/plain');
    response.status(200).send(new Date().toLocaleString());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});