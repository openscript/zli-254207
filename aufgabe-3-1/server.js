import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_request, response) => {
  response.send('Hello World! Bla!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// nodemon

// import anstatt require, weil es moderner ist
// node_modules kommt nicht ins Git
// konfigurieren ob ES Modules oder CommonJS via type Attribut im package.json
// .mjs definiert ein JavaScript File als ES Module
// express eine Erweiterung von nodejs http server
// package-lock.json fixiert alle Abhängigkeiten