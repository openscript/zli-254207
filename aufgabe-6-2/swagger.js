import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
      title: 'My API',
      description: 'Description'
    },
    host: 'localhost:3000'
  };
  
const outputFile = './aufgabe-6-2/swagger-output.json';
const routes = ['./aufgabe-6-2/server.js'];

swaggerAutogen()(outputFile, routes, doc);