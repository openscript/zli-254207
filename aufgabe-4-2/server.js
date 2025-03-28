import express from 'express';

const app = express();
app.use(express.urlencoded());
const port = 3000;

app.get('/now', (request, response) => {
    const timeZone = request.query.tz;
    response.contentType('text/plain');
    response.status(200).send(new Date().toLocaleString("de-CH", { timeZone }));
});

const names = [];

app.post('/names', (request, response) => {
    names.push(request.body.name);
    response.send(201);
});

app.get('/names', (request, response) => {
    response.send(JSON.stringify(names));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});