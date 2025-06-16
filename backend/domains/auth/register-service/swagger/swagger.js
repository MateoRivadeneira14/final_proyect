const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth Register Service API',
      version: '1.0.0',
      description: 'Microservicio para el registro de usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3001/api'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec
};
